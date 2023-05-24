import {
  createElementDefault, createImg, createButton, createNS,
} from './createElementMod.js';

const createItem = async (elem, classes, mealApi, xlink, likeApi, callback0, callback1) => {
  const docFrag = document.createDocumentFragment();
  docFrag.appendChild(createImg(classes[1], mealApi[0].strMeal, mealApi[0].strMealThumb));
  const elemHeader = createElementDefault('div', classes[2]);
  const titleImg = createElementDefault('p', classes[3], mealApi[0].strMeal);
  elemHeader.appendChild(titleImg);
  const elemLikes = createElementDefault('div', classes[4]);
  const elemLikesSVG = createNS(xlink);
  elemLikes.appendChild(elemLikesSVG);
  const elemLikesP = createElementDefault('p', classes[5], `${likeApi} like${likeApi > 1 ? 's' : ''}`);
  elemLikes.appendChild(elemLikesP);
  elemHeader.appendChild(elemLikes);
  docFrag.appendChild(elemHeader);
  const btnDiv = createElementDefault('div', classes[6]);
  btnDiv.appendChild(createButton('button', classes[7], 'Go to Comments', 'Comments'));
  btnDiv.appendChild(createButton('button', classes[8], 'Go to Reservations', 'Reservations'));
  docFrag.appendChild(btnDiv);
  const itemElem = createElementDefault(elem, classes[0], false, docFrag);
  itemElem.setAttribute('data-id', mealApi[0].idMeal);
  itemElem.addEventListener('click', callback0);
  itemElem.addEventListener('click', callback1);
  return itemElem;
};

export {
  createElementDefault, createItem,
};