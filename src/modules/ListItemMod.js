import {
  createElementDefault, createImg, createButton, createNS,
} from './createElementMod.js';

const createItem = async (elem, classes, mealApi, xlink, likeApi) => {
  const docFrag = document.createDocumentFragment();
  docFrag.appendChild(createImg(classes[1], mealApi[0].strMeal, mealApi[0].strMealThumb));
  const elemHeader = createElementDefault('div', classes[21]);
  const titleImg = createElementDefault('p', classes[3], mealApi[0].strMeal);
  elemHeader.appendChild(titleImg);
  const elemLikes = createElementDefault('div', classes[4]);
  const elemLikesSVG = createNS(xlink);
  elemLikes.appendChild(elemLikesSVG);
  const elemLikesP = createElementDefault('p', classes[5], `${likeApi} like${likeApi > 1 ? 's' : ''}`);
  elemLikes.appendChild(elemLikesP);
  elemHeader.appendChild(elemLikes);
  docFrag.appendChild(elemHeader);
  docFrag.appendChild(createButton('button', classes[6], 'Go to Comments', 'Comments'));
  docFrag.appendChild(createButton('button', classes[7], 'Go to Reservations', 'Reservations'));
  const itemElem = createElementDefault(elem, classes[0], false, docFrag);
  itemElem.setAttribute('data-id', mealApi[0].idMeal);
  return itemElem;
};

export {
  createElementDefault, createItem,
};