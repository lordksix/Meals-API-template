import {
  createApiMealURL, createApiInvURL,
} from './createURLAPI.js';
import { createItem } from './ListItemMod.js';
import { handleGETAPI } from './GetAPI.js';
import {
  classes, baseurlFilterMeal, parameterMealCat,
  xlink, baseurlInvolvement, parameterLikeApp,
  parameterIDApp,
} from './const.js';
import { getMealsAPIResponse, createLike, findLikes } from './likeHandling.js';

const appendResponsePara = async (node) => {
  const showResponseForm = document.getElementById('formFeedback');
  showResponseForm.textContent = node;
};

const appendItems = async (dataArr, invArr) => {
  const appCtn = document.getElementById('app-ctn');
  appCtn.innerHTML = '';
  dataArr.forEach(async (data) => {
    const mealData = await getMealsAPIResponse(data);
    const mealFrag = await createItem('li', classes, mealData, xlink, await findLikes(mealData[0].idMeal, invArr), createLike);
    appCtn.appendChild(mealFrag);
  });
};

const printList = async (event) => {
  const mealCatURL = createApiMealURL(baseurlFilterMeal, parameterMealCat, event.target.getAttribute('href'));
  const invLikesURL = createApiInvURL(baseurlInvolvement, parameterIDApp, parameterLikeApp);
  const dataResponseMeal = await handleGETAPI(mealCatURL);
  const dataResponseInv = await handleGETAPI(invLikesURL);
  if (dataResponseMeal instanceof Error || dataResponseInv instanceof Error) appendResponsePara('Unable to Fetch Data');
  else await appendItems(dataResponseMeal.meals, dataResponseInv);
};

export {
  printList, baseurlFilterMeal,
};