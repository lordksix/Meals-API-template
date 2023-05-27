import { createItem } from './ListItemMod.js';
import { itemClasses } from './const.js';
import { createLike, findLikes, getLikesResponse } from './APILikeHandling.js';
import { getMealsIDResponse, getMealsCatResponse } from './APIMealsHandling.js';
import { createCommentPopUp } from './APICommentsHandling.js';
import { countTotalItem, appendTotal } from './CountTotalItems.js';

const appendResponseFeedback = async (node) => {
  const showResponseForm = document.getElementById('formFeedback');
  showResponseForm.textContent = node;
};

const getCategoryItems = async (event) => {
  const catID = await event.target.getAttribute('href');
  return catID;
};

const appendListItems = async (dataArr, invArr, ID) => {
  const appCtn = document.getElementById('app-ctn');
  appCtn.innerHTML = '';
  dataArr.forEach(async (data) => {
    const mealData = await getMealsIDResponse(data.idMeal);
    const mealFrag = createItem('li', itemClasses, mealData.meals[0], await findLikes(mealData.meals[0].idMeal, invArr),
      createLike, () => createCommentPopUp(mealData.meals[0]));
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