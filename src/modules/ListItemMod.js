import {
  createElementDefault, createImg, createButton, createNS,
} from './createElementMod.js';

const createItem = (elem, classes, mealApi, xlink, likeApi) => {
  const docFrag = document.createDocumentFragment();
  docFrag.appendChild(createImg(classes, mealApi.strMeal, mealApi.strMealThumb));
  const elemHeader = createElementDefault('div', classes);
  const titleImg = createElementDefault('p', classes, mealApi.strMeal);
  elemHeader.appendChild(titleImg);
  const elemLikes = createElementDefault('div', classes);
  const elemLikesSVG = createNS(xlink);
  elemLikes.appendChild(elemLikesSVG);
  const elemLikesP = createElementDefault('p', classes, `${likeApi} ${likeApi > 1 ? 's' : ''}`);
  elemLikes.appendChild(elemLikesP);
  docFrag.appendChild(elemLikes);
  docFrag.appendChild(createButton('button', classes, 'Go to Comments', 'Comments'));
  docFrag.appendChild(createButton('button', classes, 'Go to Reservations', 'Reservations'));
  const itemElem = createElementDefault(elem, classes, false, docFrag);
  itemElem.setAttribute('data-name', mealApi.strMeal);
  return itemElem;
};

const createList = async (elem, classes, mealApiArr, xlink, likeApiArr) => {
  const docFrag = document.createDocumentFragment();
  mealApiArr.forEach((mealApi, n) => {
    const element = createItem(elem, classes, mealApi, xlink, likeApiArr[n]);
    docFrag.append(element);
  });
  return docFrag;
};

export {
  createList, createElementDefault, createItem,
};