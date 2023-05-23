import {
  createApiMealURL, createApiInvURL,
} from './createURLAPI.js';
import { createItem } from './ListItemMod.js';
import { handlePost } from './PostAPI.js';
import { handleGETAPI } from './GetAPI.js';
import {
  classes, baseurlFilterMeal, baseurllookupMeal, parameterMealID, parameterMealCat,
  xlink, baseurlInvolvement, parameterLikeApp,
  parameterIDApp,
} from './const.js';

const appendResponsePara = async (node) => {
  const showResponseForm = document.getElementById('formFeedback');
  showResponseForm.textContent = node;
};

const likesJson = async (id) => (
  {
    item_id: id,
  }
);

const findLikes = async (id, invArr) => {
  const result = invArr.filter((invArr) => invArr.item_id === id);
  if (result.length > 0) return result[0].likes;
  return 0;
};

const updateLikesDOM = async (node, likes) => {
  const likeText = node.querySelector('.app-like-text');
  likeText.textContent = `${likes} like${likes > 1 ? 's' : ''}`;
  const useVSG = node.querySelector('use');
  const svgVSG = node.querySelector('svg');
  useVSG.classList.add('likes');
  svgVSG.classList.add('likes');
  useVSG.setAttribute('href', '../asset/resource/icons.svg#heart-like-red');
};

const createLike = async (event) => {
  if (event.target.classList.contains('heart-like') && !event.target.classList.contains('likes')) {
    const currentID = event.currentTarget.dataset.id;
    const url = createApiInvURL(baseurlInvolvement, parameterIDApp, parameterLikeApp);
    await handlePost(url, await likesJson(currentID));
    const dataResponseInv = await handleGETAPI(url);
    const qtyLikes = await findLikes(currentID, dataResponseInv);
    const prtNde = event.target.parentNode.parentNode;
    await updateLikesDOM(prtNde, await qtyLikes);
  }
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