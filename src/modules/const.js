const itemClasses = {
  container: 'app-item',
  image: 'app-img',
  titleHeader: 'app-title-div',
  likesCtn: 'app-like',
  likesIcon: 'app-like-svg',
  likesText: 'app-like-text',
  btnCtn: 'app-div-btn',
  btnComment: ['app-btn', 'comment'],
  btnReserve: ['app-btn', 'reservation'],
  regular: './asset/resource/icons.svg#heart-like',
  red: './asset/resource/icons.svg#heart-like-red',
};

const popUpClasses = {
  container: 'app-item-popup',
  image: 'app-img-pop',
  titleHeader: 'app-title-header',
  properties: 'app-property',
  property: 'app-prop',
  exit: 'app-exit',
  overlay: 'app-item-popup-overlay',
  title: 'app-title-pop',
  sectionCtn: 'app-sec-ctn',
  formContainer: 'app-form-sec-ctn',
  itemInfo: 'app-info',
  itemSection: 'app-sec',
};

const popUpSectionClasses = {
  container: 'app-sec-ctn',
  titleheader: 'app-section-header',
  title: 'app-section-title',
  titleCounter: ['app-section-title', 'app-section-counter'],
  postCtn: 'app-section-ctn',
  postItem: 'app-section-item',
};

const popUpFormClasses = {
  container: 'app-form-sec-ctn',
  title: 'app-form-title',
  formContainer: 'app-form-ctn',
  inputHidden: ['app-form-input-reg', 'hidden'],
  inputDiv: 'app-form-input-div',
  inputLabel: 'app-form-input-label',
  inputReg: 'app-form-input-reg',
  textArea: 'app-form-textArea',
  button: 'app-btn',
};

const meaAPIUri = {
  baseFilter: 'https://www.themealdb.com/api/json/v1/1/filter.php?',
  baseLookUp: 'https://www.themealdb.com/api/json/v1/1/lookup.php?',
  queryLookUp: 'i',
  queryFilter: 'c',
};

const involvementAPIUri = {
  base: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
  queryLike: 'likes/',
  queryComment: 'comments',
  queryReserve: 'reservations',
  appID: 'Wbe3IznQ2LQoFPHmVrwp/',
};

export {
  popUpSectionClasses, itemClasses, popUpClasses, popUpFormClasses,
  meaAPIUri, involvementAPIUri,
};