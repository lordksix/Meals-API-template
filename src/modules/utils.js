import {
  createApiMealURL, createApiInvURL,
} from './createURLAPI.js';
import { createItem } from './ListItemMod.js';
import { handleScoreFormSubmit } from './PostForm.js';
import { handleGETAPI } from './GetAPI.js';
import {
  classes, baseurlFilterMeal, baseurllookupMeal, parameterMealID, parameterMealCat,
  xlink, baseurlInvolvement, parameterLikeApp, parameterCommApp, parameterReservApp,
  parameterIDApp,
} from './const.js';

const appendResponsePara = async (node) => {
  const showResponseForm = document.getElementById('formFeedback');
  showResponseForm.textContent = node;
};

const findLikes = async (mealData, invArr) => {
  console.log(mealData[0].idMeal);
};

const getMealsAPIResponse = async (data) => {
  const mealIDURL = createApiMealURL(baseurllookupMeal, parameterMealID, data.idMeal);
  const dataResponse = await handleGETAPI(mealIDURL);
  return dataResponse.meals;
};

const appendItems = async (dataArr, invArr) => {
  const appCtn = document.getElementById('app-ctn');
  appCtn.innerHTML = '';
  dataArr.forEach(async (data) => {
    const mealData = await getMealsAPIResponse(data);
    const mealFrag = await createItem('li', classes, mealData, xlink, await findLikes(mealData, invArr));
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