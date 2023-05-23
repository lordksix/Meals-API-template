const classCtn = 'app-item';
const classImg = 'app-img';
const classTittle = 'app-title';
const classLikes = 'app-like';
const classLikesSVG = 'app-like-svg';
const classLikesText = 'app-like-text';
const classBtn = 'app-btn';

const classes = [
  classCtn, classImg, classTittle, classLikes,
  classLikesSVG, classLikesText, classBtn,
];

const xlink = '../asset/resource/icons.svg#heart-like';

const baseurlFilterMeal = 'https://www.themealdb.com/api/json/v1/1/filter.php?';
const baseurllookupMeal = 'https://www.themealdb.com/api/json/v1/1/lookup.php?';
const parameterMealID = 'i';
const parameterMealCat = 'c';

const baseurlInvolvement = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const parameterLikeApp = 'likes/';
const parameterCommApp = 'comments/';
const parameterReservApp = 'reservations/';
const parameterIDApp = 'Wbe3IznQ2LQoFPHmVrwp/';

export {
  classes, baseurlFilterMeal, baseurllookupMeal, parameterMealID, parameterMealCat,
  xlink, baseurlInvolvement, parameterLikeApp, parameterCommApp, parameterReservApp,
  parameterIDApp,
};