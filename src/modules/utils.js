import {
  createApiMealURL, createApiInvURL,
} from './createURLAPI.js';
import { createList, createElementDefault } from './ListItemMod.js';
import { handleScoreFormSubmit } from './PostForm.js';
import { handleGETAPI } from './GetAPI.js';

const xlink = '../asset/resource/icons.svg#heart-like';

const classes = [];
const likeAPI = [
  1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
  1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
  1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
  1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
];

const baseurlFilterMeal = 'https://www.themealdb.com/api/json/v1/1/filter.php?';
const baseurllookupMeal = 'https://www.themealdb.com/api/json/v1/1/lookup.php?';
const parameterMealID = 'i';
const parameterMealCat = 'c';

/* const baseurlInvolvement = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const parameterLikeApp = 'likes/';
const parameterCommApp = 'comments/';
const parameterReservApp = 'reservations/';
const parameterIDApp = 'Wbe3IznQ2LQoFPHmVrwp/'; */

const appendResponsePara = async (node) => {
  const showResponseForm = document.getElementById('formFeedback');
  showResponseForm.textContent = node;
};

const createMealArr = async (dataArr) => {
  const mealArr = [];
  dataArr.forEach(async (data) => {
    const mealIDURL = await createApiMealURL(baseurllookupMeal, parameterMealID, data.idMeal);
    const dataResponse = await handleGETAPI(mealIDURL);
    mealArr.push(dataResponse.meals);
  });
  return mealArr;
};

const printList = async (event) => {
  const mealCatURL = createApiMealURL(baseurlFilterMeal, parameterMealCat, event.target.getAttribute('href'));
  const dataResponse = await handleGETAPI(mealCatURL);
  if (dataResponse instanceof Error) appendResponsePara('Unable to Fetch Data');
  else {
    const mealsArr = await createMealArr(dataResponse.meals);
    appendResponsePara('Good good');
    const mealFrag = createList('li', classes, mealsArr, xlink, likeAPI); /* need to be fixed up */
    const listCtn = createElementDefault('ul', 'meals-ctn', false, mealFrag);
    const appCtn = document.getElementById('app-ctn');
    appCtn.appendChild(listCtn);
  }
};

export {
  printList, baseurlFilterMeal,
};