import { handleFormSubmit } from './PostAPI.js';
import { createSection } from './ListItemMod.js';
import { createApiInvURL, createApiInvQueryURL } from './createURLAPI.js';
import { handleGETAPI } from './GetAPI.js';
import {
  involvementAPIUri, popUpSectionClasses,
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
  await handleFormSubmit(event, postURL);
  const newComments = await getCommentArray(idMeal);
  const commentCtn = document.querySelector('.app-sec-ctn');
  commentCtn.innerHTML = '';
  commentCtn.appendChild(createSection(newComments, popUpSectionClasses, 'Comments'));
};

export {
  postComment, getCommentArray,
};