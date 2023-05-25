import { createItem } from './ListItemMod.js';
import { classes, xlink } from './const.js';
import { createLike, findLikes, getLikesResponse } from './APILikeHandling.js';
import { getMealsIDResponse, getMealsCatResponse } from './APIMealsHandling.js';
import { countTotalItem, appendTotal } from './CountTotalItems.js';

const appendResponsePara = async (node) => {
  const showResponseForm = document.getElementById('formFeedback');
  showResponseForm.textContent = node;
};

const getCat = async (event) => {
  const catID = await event.target.getAttribute('href');
  return catID;
};

const appendItems = async (dataArr, invArr, ID) => {
  const appCtn = document.getElementById('app-ctn');
  appCtn.innerHTML = '';
  dataArr.forEach(async (data) => {
    const mealData = await getMealsIDResponse(data.idMeal);
    const mealFrag = await createItem('li', classes, mealData.meals, xlink, await findLikes(mealData.meals[0].idMeal, invArr), createLike);
    appCtn.appendChild(mealFrag);
    const total = countTotalItem(appCtn);
    appendTotal(total, ID);
  });
};

const printList = async (event) => {
  const catID = await getCat(event);
  const dataResponseMeal = await getMealsCatResponse(catID);
  const dataResponseInv = await getLikesResponse();
  if (dataResponseMeal instanceof Error || dataResponseInv instanceof Error) appendResponsePara('Unable to Fetch Data');
  else await appendItems(dataResponseMeal.meals, dataResponseInv, catID);
};

export {
  printList, xlink,
};