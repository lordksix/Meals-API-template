import {
  createElementDefault, createImg, createButton, createNS, createLabel,
  createTextArea, createInput,
} from './createElementMod.js';
import { countTotalItem } from './CountTotalItems.js';

const toggleBlur = () => {
  const body = document.querySelector('body');
  body.classList.toggle('modal-active');
};

const closePop = () => {
  toggleBlur();
  const overlay = document.querySelector('.app-item-popup-overlay');
  overlay.classList.add('out');
  const popup = document.getElementById('popup');
  setTimeout(() => popup.removeChild(overlay), 400);
};

const createItem = (elem, classes, mealApi, xlink, likeApi,
  callback0 = false, callback1 = false) => {
  const docFrag = document.createDocumentFragment();
  docFrag.appendChild(createImg(classes.image, mealApi.strMeal, mealApi.strMealThumb));
  const elemHeader = createElementDefault('div', classes.titleHeader);
  const titleImg = createElementDefault('p', classes.likesCtn, mealApi.strMeal);
  elemHeader.appendChild(titleImg);
  const elemLikes = createElementDefault('div', classes.likesIcon);
  const elemLikesSVG = createNS(xlink);
  elemLikes.appendChild(elemLikesSVG);
  const elemLikesP = createElementDefault('p', classes.likesText, `${likeApi} like${likeApi > 1 ? 's' : ''}`);
  elemLikes.appendChild(elemLikesP);
  elemHeader.appendChild(elemLikes);
  docFrag.appendChild(elemHeader);
  const btnDiv = createElementDefault('div', classes.classDivBtn);
  const commentBtn = createButton('button', classes.btnComment, 'Go to Comments', 'Comments');
  if (callback1) commentBtn.addEventListener('click', callback1);
  btnDiv.appendChild(commentBtn);
  btnDiv.appendChild(createButton('button', classes.btnReserve, 'Go to Reservations', 'Reservations'));
  docFrag.appendChild(btnDiv);
  const itemElem = createElementDefault(elem, classes.container, false, docFrag);
  itemElem.setAttribute('data-id', mealApi.idMeal);
  if (callback0) itemElem.addEventListener('click', callback0);
  return itemElem;
};

const createPopup = (elem, classes, mealApi, callback = false, callback2 = false) => {
  const docFrag = document.createDocumentFragment();
  const elemHeader = createElementDefault('div', classes.titleHeader);
  const titlePop = createElementDefault('h2', classes.title, mealApi.strMeal);
  const titleX = createElementDefault('span', classes.exit, 'X');
  titleX.addEventListener('click', closePop);
  elemHeader.append(titlePop, titleX);
  docFrag.appendChild(elemHeader);
  docFrag.appendChild(createImg(classes.image, mealApi.strMeal, mealApi.strMealThumb));
  const elemProp = createElementDefault('div', classes.properties);
  const mealName = createElementDefault('p', classes.property, `Name: ${mealApi.strMeal}`);
  const mealCat = createElementDefault('p', classes.property, `Category: ${mealApi.strCategory}`);
  const mealArea = createElementDefault('p', classes.property, `Area: ${mealApi.strArea}`);
  const tag = mealApi.strTags ? mealApi.strTags.split(',').join(', ') : 'NONE';
  const mealTags = createElementDefault('p', classes.property, `Area: ${tag}`);
  elemProp.append(mealName, mealCat, mealArea, mealTags);
  docFrag.appendChild(elemProp);
  const secCtn = createElementDefault('div', classes.sectionCtn);
  const formCtn = createElementDefault('div', classes.formContainer);
  if (callback) secCtn.appendChild(callback);
  if (callback2) formCtn.appendChild(callback2);
  docFrag.append(secCtn, formCtn);
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

const createCommentSec = (dataArr, classes = false) => {
  const docFrag = document.createDocumentFragment();
  const titleSpan = createElementDefault('span', classes.title, 'Comments');
  const counterSpan = createElementDefault('span', classes.titleCounter);
  const title = createElementDefault('h3', classes.titleheader);
  const commentCtn = createElementDefault('div', classes.postCtn);
  let totalComment = countTotalItem(commentCtn);
  title.append(titleSpan, counterSpan);
  if (dataArr.length === 0) counterSpan.textContent = ` (${totalComment})`;
  else {
    dataArr.forEach((data) => {
      commentCtn.appendChild(createCommentLine(data, classes.postItem));
      totalComment = countTotalItem(commentCtn);
      counterSpan.textContent = ` (${totalComment})`;
    });
  }
  docFrag.append(title, commentCtn);
  return docFrag;
};

const createCommentForm = (id, callback, classLine = false) => {
  const docFrag = document.createDocumentFragment();
  const titleForm = createElementDefault('h3', classLine.title, 'Add a comment');
  const formComment = createElementDefault('form', classLine.formContainer);
  formComment.setAttribute('id', id);
  const inpuItemID = createInput('text', classLine.inputHidden, 'item_id', 'item_id', false, true, true);
  inpuItemID.setAttribute('value', id);
  const labelUser = createLabel('username', classLine.inputLabel, 'Name');
  const inputUser = createInput('text', classLine.inputReg, 'username', 'username', 'Please input your name', true, false);
  const userDiv = createElementDefault('div', classLine.inputDiv, false, labelUser);
  userDiv.appendChild(inputUser);
  const labelComment = createLabel('comment', classLine.inputLabel, 'Comment');
  const commentArea = createTextArea('250', classLine.textArea, 'comment', 'comment', 'Please input your comment', true);
  const commentDiv = createElementDefault('div', classLine.inputDiv, false, labelComment);
  commentDiv.appendChild(commentArea);
  const submitBtn = createButton('submit', classLine.button, 'Submit comment', 'Submit');
  formComment.append(inpuItemID, userDiv, commentDiv, submitBtn);
  formComment.addEventListener('submit', callback);
  docFrag.append(titleForm, formComment);
  return docFrag;
};

export {
  createItem, createPopup, createCommentSec, createCommentForm, toggleBlur,
};