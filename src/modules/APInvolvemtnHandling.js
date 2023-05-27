import { handleFormSubmit } from './PostAPI.js';
import { createSection } from './ListItemMod.js';
import { createApiInvURL, createApiInvQueryURL } from './createURLAPI.js';
import { handleGETAPI } from './GetAPI.js';
import {
  involvementAPIUri, popUpSectionClasses,
} from './const.js';

const getGETURL = (type, id) => {
  let url;
  switch (type) {
    case 'Comments':
      url = createApiInvQueryURL(involvementAPIUri.base, involvementAPIUri.appID,
        involvementAPIUri.queryComment, id);
      break;
    case 'Reservations':
      url = createApiInvQueryURL(involvementAPIUri.base, involvementAPIUri.appID,
        involvementAPIUri.queryReserve, id);
      break;
    default:
      break;
  }
  return url;
};

const getPOSTURL = (type) => {
  let url;
  switch (type) {
    case 'Comments':
      url = createApiInvURL(involvementAPIUri.base, involvementAPIUri.appID,
        involvementAPIUri.queryComment);
      break;
    case 'Reservations':
      url = createApiInvURL(involvementAPIUri.base, involvementAPIUri.appID,
        involvementAPIUri.queryReserve);
      break;
    default:
      break;
  }
  return url;
};

const getDataResponse = async (idItem, type) => {
  const invURL = getGETURL(type, idItem);
  const dataResponse = await handleGETAPI(invURL);
  return dataResponse;
};

const getInvolvementArray = async (idItem, type) => {
  const dataResponse = await getDataResponse(idItem, type);

  if (dataResponse instanceof Error) return [];
  return dataResponse;
};

const postInvolvement = async (event) => {
  event.preventDefault();
  const idMeal = event.currentTarget.dataset.id;
  const type = event.currentTarget.id;
  const postURL = getPOSTURL(type, idMeal);
  await handleFormSubmit(event, postURL);
  const newComments = await getInvolvementArray(idMeal, type);
  const commentCtn = document.querySelector('.app-sec-ctn');
  commentCtn.innerHTML = '';
  commentCtn.appendChild(createSection(newComments, popUpSectionClasses, type));
};

export {
  postInvolvement, getInvolvementArray,
};