import { createApiMealURL } from './createURLAPI.js';
import { handleGETAPI } from './GetAPI.js';
import { meaAPIUri } from './const.js';

const getMealsIDResponse = async (data) => {
  const mealIDURL = createApiMealURL(meaAPIUri.baseLookUp, meaAPIUri.queryLookUp, await data);
  const dataResponse = await handleGETAPI(mealIDURL);
  return dataResponse;
};

const getMealsCatResponse = async (data) => {
  const mealIDURL = createApiMealURL(meaAPIUri.baseFilter, meaAPIUri.queryFilter, await data);
  const dataResponse = await handleGETAPI(mealIDURL);
  return dataResponse;
};

export {
  getMealsIDResponse, getMealsCatResponse,
};