import {
  createPopupHTML, toggleBlur, createSection, createForm, createItem,
} from './ListItemMod.js';
import {
  itemClasses, popUpClasses, popUpSectionClasses, popUpFormClasses,
} from './const.js';
import { createLike, findLikes, getLikesResponse } from './APILikeHandling.js';
import { getMealsIDResponse, getMealsCatResponse } from './APIMealsHandling.js';
import { postComment, getCommentArray } from './APICommentsHandling.js';
import { countTotalItem, appendTotal } from './CountTotalItems.js';

const appendResponseFeedback = async (node) => {
  const showResponseForm = document.getElementById('formFeedback');
  showResponseForm.textContent = node;
};

const getCategoryItems = async (event) => {
  const catID = await event.target.getAttribute('href');
  return catID;
};

const appendPopUp = async (mealAPi, type) => {
  const comment = await getCommentArray(mealAPi.idMeal);
  toggleBlur();
  let popUP;
  switch (type) {
    case 'Comments':
      popUP = createPopupHTML('div', popUpClasses, mealAPi, createSection(comment, popUpSectionClasses, type),
        createForm(mealAPi.idMeal, postComment, popUpFormClasses, type));
      break;
    case 'Reservations':
      popUP = '';
      break;
    default:
      popUP = '';
      break;
  }
  const popupDiv = document.getElementById('popup');
  popupDiv.innerHTML = '';
  popupDiv.appendChild(popUP);
};

const appendListItems = async (dataArr, invArr, ID) => {
  const appCtn = document.getElementById('app-ctn');
  appCtn.innerHTML = '';
  dataArr.forEach(async (data) => {
    const mealData = await getMealsIDResponse(data.idMeal);
    const mealFrag = createItem('li', itemClasses, mealData.meals[0], await findLikes(mealData.meals[0].idMeal, invArr),
      createLike, () => appendPopUp(mealData.meals[0], 'Comments'));
    appCtn.appendChild(mealFrag);
    const total = countTotalItem(appCtn);
    appendTotal(total, ID);
  });
  appendResponseFeedback(`${ID}: Select a Meal`);
};

const printListItems = async (event) => {
  const catID = await getCategoryItems(event);
  const dataResponseMeal = await getMealsCatResponse(catID);
  const dataResponseInv = await getLikesResponse();
  if (dataResponseMeal instanceof Error || dataResponseInv instanceof Error) appendResponseFeedback('Unable to Fetch Data');
  else await appendListItems(dataResponseMeal.meals, dataResponseInv, catID);
};

export {
  printListItems, appendResponseFeedback,
};