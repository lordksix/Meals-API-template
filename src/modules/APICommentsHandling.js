import { handleFormSubmit } from './PostAPI.js';
import {
  createPopup, toggleBlur, createCommentSec, createCommentForm,
} from './ListItemMod.js';
import { createApiInvURL, createApiInvQueryURL } from './createURLAPI.js';
import { handleGETAPI } from './GetAPI.js';
import {
  involvementAPIUri, popUpClasses, popUpSectionClasses, popUpFormClasses,
} from './const.js';

const getCommentResponse = async (idItem) => {
  const invLikesURL = createApiInvQueryURL(
    involvementAPIUri.base, involvementAPIUri.appID, involvementAPIUri.queryComment, idItem,
  );
  const dataResponse = await handleGETAPI(invLikesURL);
  return dataResponse;
};

const getCommentArray = async (id) => {
  const commentResponse = await getCommentResponse(id);
  if (commentResponse instanceof Error) return [];
  return commentResponse;
};

const postComment = async (event) => {
  event.preventDefault();
  const postURL = createApiInvURL(involvementAPIUri.base, involvementAPIUri.appID,
    involvementAPIUri.queryComment);
  const idMeal = event.currentTarget.id;
  const commentCtn = document.querySelector('.app-sec-ctn');
  await handleFormSubmit(event, postURL);
  const newComments = await getCommentArray(idMeal);
  commentCtn.innerHTML = '';
  commentCtn.appendChild(createCommentSec(newComments, popUpSectionClasses));
};

const createCommentPopUp = async (mealAPi) => {
  const comment = await getCommentArray(mealAPi.idMeal);
  toggleBlur();
  const popUP = createPopup('div', popUpClasses, mealAPi, createCommentSec(comment, popUpSectionClasses),
    createCommentForm(mealAPi.idMeal, postComment, popUpFormClasses));
  const popupDiv = document.getElementById('popup');
  popupDiv.innerHTML = '';
  popupDiv.appendChild(popUP);
};

export {
  getCommentResponse, createCommentPopUp,
};