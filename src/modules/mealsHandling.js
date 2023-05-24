import { createApiMealURL } from './createURLAPI.js';
import { handleGETAPI } from './GetAPI.js';
import {
  baseurllookupMeal, parameterMealID, baseurlFilterMeal, parameterMealCat,
} from './const.js';

const getMealsIDResponse = async (data) => {
  const mealIDURL = createApiMealURL(baseurllookupMeal, parameterMealID, data.idMeal);
  const dataResponse = await handleGETAPI(mealIDURL);
  return dataResponse;
};

const getMealsCatResponse = async (data) => {
  const mealIDURL = createApiMealURL(baseurlFilterMeal, parameterMealCat, await data);
  const dataResponse = await handleGETAPI(mealIDURL);
  return dataResponse;
};

export {
  getMealsIDResponse, getMealsCatResponse,
};