import {
  createElementDefault, createImg, createButton, createNS, createLabel,
  createTextArea, createInput,
} from './createElementMod.js';
import { countTotalItem } from './CountTotalItems.js';

/**
 * Function that toogle blurness in DOM. Every element must have -modal-bg class
 * @returns {any}
 */
const toggleBlur = () => {
  const body = document.querySelector('body');
  body.classList.toggle('modal-active');
};
/**
 * Function that handles the closing of the popup. Implements animations that class 'out' starts
 * @returns {any}
 */

const closePop = () => {
  toggleBlur();
  const overlay = document.querySelector('.app-item-popup-overlay');
  overlay.classList.add('out');
  const popup = document.getElementById('popup');
  setTimeout(() => popup.removeChild(overlay), 400);
};

/**
 * Generator of items with information of APIs
 * @param {string} elem name of html element to be created. The container of the element
 * @param {object} classes object with names of classes that will be use
 * @param {object} mealApi Oject with information to used to implement item. Reponse of the API
 * or a mock of it
 * @param {object} likeApi Oject with information to used to implement item (likes). Reponse of
 * the API or a mock of it
 * @param {Function} callback0=false function that is tricked when there is a click inside the
 * newly created element
 * @param {Function} callback1=false function that is tricked when comment button is click.
 * @param {Function} callback2=false function that is tricked when reserve button is click.
 * @returns {Node} HTML element created
 */
const createItem = (elem, classes, mealApi, likeApi,
  callback0 = false, callback1 = false, callback2 = false) => {
  const docFrag = document.createDocumentFragment();
  docFrag.appendChild(createImg(classes.image, mealApi.strMeal, mealApi.strMealThumb));
  const elemHeader = createElementDefault('div', classes.titleHeader);
  const titleImg = createElementDefault('p', classes.likesCtn, mealApi.strMeal);
  elemHeader.appendChild(titleImg);
  const elemLikes = createElementDefault('div', classes.likesIcon);
  const elemLikesSVG = createNS(classes.regular);
  const elemLikesRedSVG = createNS(classes.red);
  elemLikesRedSVG.classList.add('hidden');
  const elemLikesP = createElementDefault('p', classes.likesText, `${likeApi} like${likeApi > 1 ? 's' : ''}`);
  elemLikes.append(elemLikesSVG, elemLikesRedSVG, elemLikesP);
  elemHeader.appendChild(elemLikes);
  docFrag.appendChild(elemHeader);
  const btnDiv = createElementDefault('div', classes.btnCtn);
  if (callback1) {
    const commentBtn = createButton('button', classes.btnComment, 'Go to Comments', 'Comments');
    commentBtn.addEventListener('click', callback1);
    btnDiv.appendChild(commentBtn);
  }
  if (callback2) {
    const reserveBtn = createButton('button', classes.btnReserve, 'Go to Reservations', 'Reservations');
    reserveBtn.addEventListener('click', callback2);
    btnDiv.appendChild(reserveBtn);
  }
  docFrag.appendChild(btnDiv);
  const itemElem = createElementDefault(elem, classes.container, false, docFrag);
  itemElem.setAttribute('data-id', mealApi.idMeal);
  if (callback0) itemElem.addEventListener('click', callback0);
  return itemElem;
};
/**
 * Generator of popups with information of APIs
 * @param {string} elem name of html element to be created. The container of the element
 * @param {object} classes object with names of classes that will be use
 * @param {object} mealApi Oject with information to used to implement item. Reponse of the API
 * or a mock of it
 * @param {Function} callback=false function that generates section with information of comments,
 * reservertations, etc
 * @param {Function} callback2=falsefunction that generates form to post new comment,
 * reservertations, etc
 * @returns {Node} HTML element created
 */

const createPopupHTML = (elem, classes, mealApi, callback = false, callback2 = false) => {
  const docFrag = document.createDocumentFragment();
  const elemHeader = createElementDefault('div', classes.titleHeader);
  const titlePop = createElementDefault('h2', classes.title, mealApi.strMeal);
  const titleX = createElementDefault('span', classes.exit, 'X');
  titleX.addEventListener('click', closePop);
  elemHeader.append(titlePop, titleX);
  docFrag.appendChild(elemHeader);
  const itemInfo = createElementDefault('div', classes.itemInfo, false, createImg(classes.image, mealApi.strMeal, mealApi.strMealThumb));
  const elemProp = createElementDefault('div', classes.properties);
  const mealName = createElementDefault('p', classes.property, `Name: ${mealApi.strMeal}`);
  const mealCat = createElementDefault('p', classes.property, `Category: ${mealApi.strCategory}`);
  const mealArea = createElementDefault('p', classes.property, `Area: ${mealApi.strArea}`);
  const tag = mealApi.strTags ? mealApi.strTags.split(',').join(', ') : 'NONE';
  const mealTags = createElementDefault('p', classes.property, `Area: ${tag}`);
  elemProp.append(mealName, mealCat, mealArea, mealTags);
  itemInfo.appendChild(elemProp);
  docFrag.appendChild(itemInfo);
  const secCtn = createElementDefault('div', classes.sectionCtn);
  const formCtn = createElementDefault('div', classes.formContainer);
  if (callback) secCtn.appendChild(callback);
  if (callback2) formCtn.appendChild(callback2);
  const itemSection = createElementDefault('div', classes.itemSection, false, secCtn);
  itemSection.appendChild(formCtn);
  docFrag.append(itemSection);
  const itemElem = createElementDefault(elem, classes.container, false, docFrag);
  itemElem.setAttribute('data-id', mealApi.idMeal);
  const itemCont = createElementDefault(elem, classes.overlay, false, itemElem);
  return itemCont;
};

const createCommentLine = (data, classLine) => {
  const date = data.creation_date;
  const name = data.username;
  const commentItem = data.comment;
  const dataP = createElementDefault('p', classLine, `${date} ${name}: ${commentItem}`);
  return dataP;
};

const createReservationtLine = (data, classLine) => {
  const start = data.date_start;
  const name = data.username;
  const end = data.date_end;
  const dataP = createElementDefault('p', classLine, `${start} - ${end} by ${name}`);
  return dataP;
};

/**
 * Generator of section (sections, reservations, etc) with information of APIs
 * @param {Array} dataArr array of oject with information to used to implement item.
 * (sections, reservations, etc) reponse of  the API or a mock of it
 * @param {object} classes=false object with names of classes that will be use
 * @param {string} type string that selects the type of section it will be ('Comments',
 * 'Reservations')
 * @returns {Node}
 */
const createSection = (dataArr, classes = false, type) => {
  const docFrag = document.createDocumentFragment();
  const titleSpan = createElementDefault('span', classes.title, type);
  const counterSpan = createElementDefault('span', classes.titleCounter);
  const title = createElementDefault('h3', classes.titleheader);
  const secCtn = createElementDefault('div', classes.postCtn);
  let totalElements = countTotalItem(secCtn);
  title.append(titleSpan, counterSpan);
  if (dataArr.length === 0) counterSpan.textContent = ` (${totalElements})`;
  else {
    dataArr.forEach((data) => {
      if (type === 'Comments') secCtn.appendChild(createCommentLine(data, classes.postItem));
      else if (type === 'Reservations') secCtn.appendChild(createReservationtLine(data, classes.postItem));
      totalElements = countTotalItem(secCtn);
      counterSpan.textContent = ` (${totalElements})`;
    });
  }
  docFrag.append(title, secCtn);
  return docFrag;
};

/**
 * Description
 * @param {string} id unique identifier of elemement
 * @param {Function} callback=false function that is tricked when form is submited
 * @param {object} classLine=false object with names of classes that will be use
 * @returns {Node}
 */
const createForm = (id, callback, classLine = false, type) => {
  let titleFormStr;
  switch (type) {
    case 'Comments':
      titleFormStr = 'Add a comment';
      break;
    case 'Reservations':
      titleFormStr = 'Add a reservation';
      break;
    default:
      break;
  }
  const docFrag = document.createDocumentFragment();
  const titleForm = createElementDefault('h3', classLine.title, titleFormStr);
  const formSec = createElementDefault('form', classLine.formContainer);
  formSec.setAttribute('id', id);
  const inpuItemID = createInput('text', classLine.inputHidden, 'item_id', 'item_id', false, true, true);
  inpuItemID.setAttribute('value', id);
  const labelUser = createLabel('username', classLine.inputLabel, 'Name');
  const inputUser = createInput('text', classLine.inputReg, 'username', 'username', 'Name', true, false);
  const userDiv = createElementDefault('div', classLine.inputDiv, false, labelUser);
  userDiv.appendChild(inputUser);
  const labelComment = createLabel('comment', classLine.inputLabel, 'Comment');
  const commentArea = createTextArea('250', classLine.textArea, 'comment', 'comment', 'Comment', true);
  const commentDiv = createElementDefault('div', classLine.inputDiv, false, labelComment);
  commentDiv.appendChild(commentArea);
  const submitBtn = createButton('submit', classLine.button, 'Submit comment', 'Submit');
  formSec.append(inpuItemID, userDiv, commentDiv, submitBtn);
  formSec.addEventListener('submit', callback);
  docFrag.append(titleForm, formSec);
  return docFrag;
};

export {
  createItem, createPopupHTML, createSection, createForm, toggleBlur,
};