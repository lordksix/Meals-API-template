"use strict";
(self["webpackChunkmeals_api_template"] = self["webpackChunkmeals_api_template"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --svg-side: clamp(16px, (100vw - 320px) * 1000, clamp(20px, (100vw - 640px) * 1000, clamp(25px, (100vw - 1280px) * 1000, 30px)));\n  --font-size: calc(var(--svg-side) * 0.8);\n  --bckgrd-0: #fff0;\n  --bg-modal: #c1c7d0be;\n  --bckgrd: #fff;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nul,\nli {\n  list-style-type: none;\n}\n\nbody {\n  background-color: #6e6ce9;\n  font-family: 'Pangolin', 'Merriweather', serif, cursive;\n  min-height: 100vh;\n  display: flex;\n  flex-flow: column;\n  padding: 5px;\n}\n\n.svg {\n  margin-block: auto;\n}\n\n.modal-active .modal-bg {\n  filter: blur(5px);\n}\n\n/* Navbar */\n\n.nav-bar {\n  background-color: #848bf1;\n  padding: 2%;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.logo {\n  height: calc(var(--svg-side) * 2);\n}\n\n.nav-list {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.nav-items {\n  list-style: none;\n  color: white;\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin-top: 15px;\n  margin-right: 3rem;\n}\n\n.nav-items a {\n  text-decoration: none;\n  color: black;\n}\n\n.active {\n  font-weight: bolder;\n}\n\n/* Footer */\n\n.extremity {\n  padding-block: 10px;\n  padding-inline: 20px;\n  border: 2px solid black;\n  display: flex;\n  justify-content: space-between;\n}\n\n.footer-row {\n  display: flex;\n  gap: 10px;\n}\n\n.app-item svg,\n.footer-row svg {\n  height: var(--svg-side);\n  width: var(--svg-side);\n}\n\n/* Main App */\n\nmain {\n  height: auto;\n  flex-grow: 1;\n  padding: 20px;\n}\n\n#formFeedback {\n  text-align: center;\n  font-size: 2rem;\n}\n\n/* Item Container */\n\n#app-ctn {\n  --n: 2;\n  --w: 350px;\n  --n1: 3;\n  --w1: 700px;\n  --n2: 4;\n  --w2: 1050px;\n\n  display: grid;\n  column-gap: 30px;\n  row-gap: 30px;\n  grid-template-columns: repeat(auto-fit, minmax(clamp(clamp(clamp(100%/(var(--n2) + 1) + 0.1%, (var(--w2) - 100vw) * 1000, 100%/(var(--n1) + 1) + 0.1%), (var(--w1) - 100vw) * 1000, 100%/(var(--n) + 1) + 0.1%), (var(--w) - 100vw) * 1000, 100%), 3fr));\n  padding-block: 50px;\n  padding-inline: 20px;\n  max-width: 1200px;\n  margin-inline: auto;\n}\n\n.app-item {\n  padding: 5%;\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n  background-color: #848bf1;\n  border-radius: 10px;\n}\n\n.app-img {\n  width: 80%;\n  height: auto;\n  margin-inline: auto;\n}\n\n.app-title-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-inline: 5%;\n}\n\n.app-div-btn {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15%;\n  justify-content: center;\n}\n\n.app-like-text {\n  text-align: center;\n}\n\n.app-like-svg {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  gap: 5px;\n}\n\n.app-btn {\n  padding-inline: 10px;\n  padding-block: 5px;\n  z-index: 1;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.app-btn:hover {\n  background-color: rgb(114, 46, 46);\n}\n\n/* Pop-up */\n\n.app-item-popup-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  background-color: var(--bckgrd-0);\n  top: 0;\n  left: 0;\n  z-index: 20;\n  padding-inline: 20vw;\n  padding-block: 2.5vh 15vh;\n  animation: fadeInProject 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n\n.app-item-popup-overlay.out {\n  animation: fadeOutProject 0.3s ease-out forwards;\n}\n\n@keyframes fadeInProject {\n  0% {\n    z-index: -3;\n    background: var(--bckgrd-0);\n  }\n\n  100% {\n    z-index: 20;\n    background: var(--bg-modal);\n  }\n}\n\n@keyframes fadOutnProject {\n  0% {\n    z-index: 20;\n    background: var(--bg-modal);\n  }\n\n  100% {\n    z-index: -3;\n    background: var(--bckgrd-0);\n  }\n}\n\n.app-item-popup {\n  padding-inline: 5%;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  background-color: var(--bckgrd);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  padding-block: 2.5% 5%;\n  max-width: 500px;\n  margin-inline: auto;\n  gap: 10px;\n  transform: scale(0.3);\n  animation: scaleUpProject 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n\n.out .app-item-popup {\n  animation: scaleDownProject 0.3s ease-out forwards;\n}\n\n@keyframes scaleUpProject {\n  0% {\n    transform: scale(0.3) translateY(1000px);\n    opacity: 0;\n  }\n\n  100% {\n    transform: scale(1) translateY(0);\n    opacity: 100%;\n  }\n}\n\n@keyframes scaleDownProject {\n  0% {\n    transform: scale(1) translateY(0);\n    opacity: 100%;\n  }\n\n  100% {\n    transform: scale(0.3) translateY(1000px);\n    opacity: 0;\n  }\n}\n\n.app-exit,\n.app-title-pop {\n  font-weight: bolder;\n}\n\n.app-exit {\n  font-size: 2rem;\n  text-align: right;\n  cursor: pointer;\n}\n\n.app-property {\n  --wap: 800px;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(clamp(100%/3 + 0.1%, (var(--wap) - 100vw) * 1000, 100%), 1fr));\n  column-gap: 10px;\n  row-gap: 10px;\n}\n\n.app-img-pop {\n  width: 25vw;\n  height: auto;\n  margin-inline: auto;\n  max-width: 350px;\n}\n\n.app-title-header {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n}\n\n/* Comments and Reservation Section */\n\n.app-section-header {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.app-section-ctn {\n  height: 14vh;\n  overflow-y: scroll;\n}\n\n/* Comments and Reservation Form */\n\n.app-form-title {\n  text-align: center;\n}\n\n.app-form-ctn {\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n}\n\n.app-form-input-div {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  padding-inline: 0 5%;\n}\n\n.app-form-input-hidden {\n  display: none;\n}\n\n.app-form-input-reg,\n.app-form-textArea {\n  padding-inline: 7px;\n  padding-block: 5px;\n  z-index: 1;\n  border-radius: 10px;\n}\n\n.app-form-textArea {\n  resize: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --svg-side: clamp(16px, (100vw - 320px) * 1000, clamp(20px, (100vw - 640px) * 1000, clamp(25px, (100vw - 1280px) * 1000, 30px)));\n  --font-size: calc(var(--svg-side) * 0.8);\n  --bckgrd-0: #fff0;\n  --bg-modal: #c1c7d0be;\n  --bckgrd: #fff;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nul,\nli {\n  list-style-type: none;\n}\n\nbody {\n  background-color: #6e6ce9;\n  font-family: 'Pangolin', 'Merriweather', serif, cursive;\n  min-height: 100vh;\n  display: flex;\n  flex-flow: column;\n  padding: 5px;\n}\n\n.svg {\n  margin-block: auto;\n}\n\n.modal-active .modal-bg {\n  filter: blur(5px);\n}\n\n/* Navbar */\n\n.nav-bar {\n  background-color: #848bf1;\n  padding: 2%;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.logo {\n  height: calc(var(--svg-side) * 2);\n}\n\n.nav-list {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.nav-items {\n  list-style: none;\n  color: white;\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin-top: 15px;\n  margin-right: 3rem;\n}\n\n.nav-items a {\n  text-decoration: none;\n  color: black;\n}\n\n.active {\n  font-weight: bolder;\n}\n\n/* Footer */\n\n.extremity {\n  padding-block: 10px;\n  padding-inline: 20px;\n  border: 2px solid black;\n  display: flex;\n  justify-content: space-between;\n}\n\n.footer-row {\n  display: flex;\n  gap: 10px;\n}\n\n.app-item svg,\n.footer-row svg {\n  height: var(--svg-side);\n  width: var(--svg-side);\n}\n\n/* Main App */\n\nmain {\n  height: auto;\n  flex-grow: 1;\n  padding: 20px;\n}\n\n#formFeedback {\n  text-align: center;\n  font-size: 2rem;\n}\n\n/* Item Container */\n\n#app-ctn {\n  --n: 2;\n  --w: 350px;\n  --n1: 3;\n  --w1: 700px;\n  --n2: 4;\n  --w2: 1050px;\n\n  display: grid;\n  column-gap: 30px;\n  row-gap: 30px;\n  grid-template-columns: repeat(auto-fit, minmax(clamp(clamp(clamp(100%/(var(--n2) + 1) + 0.1%, (var(--w2) - 100vw) * 1000, 100%/(var(--n1) + 1) + 0.1%), (var(--w1) - 100vw) * 1000, 100%/(var(--n) + 1) + 0.1%), (var(--w) - 100vw) * 1000, 100%), 3fr));\n  padding-block: 50px;\n  padding-inline: 20px;\n  max-width: 1200px;\n  margin-inline: auto;\n}\n\n.app-item {\n  padding: 5%;\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n  background-color: #848bf1;\n  border-radius: 10px;\n}\n\n.app-img {\n  width: 80%;\n  height: auto;\n  margin-inline: auto;\n}\n\n.app-title-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-inline: 5%;\n}\n\n.app-div-btn {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15%;\n  justify-content: center;\n}\n\n.app-like-text {\n  text-align: center;\n}\n\n.app-like-svg {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  gap: 5px;\n}\n\n.app-btn {\n  padding-inline: 10px;\n  padding-block: 5px;\n  z-index: 1;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.app-btn:hover {\n  background-color: rgb(114, 46, 46);\n}\n\n/* Pop-up */\n\n.app-item-popup-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  background-color: var(--bckgrd-0);\n  top: 0;\n  left: 0;\n  z-index: 20;\n  padding-inline: 20vw;\n  padding-block: 2.5vh 15vh;\n  animation: fadeInProject 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n\n.app-item-popup-overlay.out {\n  animation: fadeOutProject 0.3s ease-out forwards;\n}\n\n@keyframes fadeInProject {\n  0% {\n    z-index: -3;\n    background: var(--bckgrd-0);\n  }\n\n  100% {\n    z-index: 20;\n    background: var(--bg-modal);\n  }\n}\n\n@keyframes fadOutnProject {\n  0% {\n    z-index: 20;\n    background: var(--bg-modal);\n  }\n\n  100% {\n    z-index: -3;\n    background: var(--bckgrd-0);\n  }\n}\n\n.app-item-popup {\n  padding-inline: 5%;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  background-color: var(--bckgrd);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  padding-block: 2.5% 5%;\n  max-width: 500px;\n  margin-inline: auto;\n  gap: 10px;\n  transform: scale(0.3);\n  animation: scaleUpProject 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n\n.out .app-item-popup {\n  animation: scaleDownProject 0.3s ease-out forwards;\n}\n\n@keyframes scaleUpProject {\n  0% {\n    transform: scale(0.3) translateY(1000px);\n    opacity: 0;\n  }\n\n  100% {\n    transform: scale(1) translateY(0);\n    opacity: 100%;\n  }\n}\n\n@keyframes scaleDownProject {\n  0% {\n    transform: scale(1) translateY(0);\n    opacity: 100%;\n  }\n\n  100% {\n    transform: scale(0.3) translateY(1000px);\n    opacity: 0;\n  }\n}\n\n.app-exit,\n.app-title-pop {\n  font-weight: bolder;\n}\n\n.app-exit {\n  font-size: 2rem;\n  text-align: right;\n  cursor: pointer;\n}\n\n.app-property {\n  --wap: 800px;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(clamp(100%/3 + 0.1%, (var(--wap) - 100vw) * 1000, 100%), 1fr));\n  column-gap: 10px;\n  row-gap: 10px;\n}\n\n.app-img-pop {\n  width: 25vw;\n  height: auto;\n  margin-inline: auto;\n  max-width: 350px;\n}\n\n.app-title-header {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n}\n\n/* Comments and Reservation Section */\n\n.app-section-header {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.app-section-ctn {\n  height: 14vh;\n  overflow-y: scroll;\n}\n\n/* Comments and Reservation Form */\n\n.app-form-title {\n  text-align: center;\n}\n\n.app-form-ctn {\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n}\n\n.app-form-input-div {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  padding-inline: 0 5%;\n}\n\n.app-form-input-hidden {\n  display: none;\n}\n\n.app-form-input-reg,\n.app-form-textArea {\n  padding-inline: 7px;\n  padding-block: 5px;\n  z-index: 1;\n  border-radius: 10px;\n}\n\n.app-form-textArea {\n  resize: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _asset_resource_icons_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/resource/icons.svg */ "./src/asset/resource/icons.svg");
/* harmony import */ var _modules_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/utils.js */ "./src/modules/utils.js");




const navItem = document.querySelectorAll('.query a');

// Select section to show
navItem.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navItem.forEach((navItem) => navItem.classList.remove('active'));
    link.classList.add('active');
    (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.printListItems)(e);
  });
});


/***/ }),

/***/ "./src/modules/APICommentsHandling.js":
/*!********************************************!*\
  !*** ./src/modules/APICommentsHandling.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCommentPopUp: () => (/* binding */ createCommentPopUp),
/* harmony export */   getCommentResponse: () => (/* binding */ getCommentResponse)
/* harmony export */ });
/* harmony import */ var _PostAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostAPI.js */ "./src/modules/PostAPI.js");
/* harmony import */ var _ListItemMod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListItemMod.js */ "./src/modules/ListItemMod.js");
/* harmony import */ var _createURLAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createURLAPI.js */ "./src/modules/createURLAPI.js");
/* harmony import */ var _GetAPI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetAPI.js */ "./src/modules/GetAPI.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./const.js */ "./src/modules/const.js");






const getCommentResponse = async (idItem) => {
  const invLikesURL = (0,_createURLAPI_js__WEBPACK_IMPORTED_MODULE_2__.createApiInvQueryURL)(
    _const_js__WEBPACK_IMPORTED_MODULE_4__.involvementAPIUri.base, _const_js__WEBPACK_IMPORTED_MODULE_4__.involvementAPIUri.appID, _const_js__WEBPACK_IMPORTED_MODULE_4__.involvementAPIUri.queryComment, idItem,
  );
  const dataResponse = await (0,_GetAPI_js__WEBPACK_IMPORTED_MODULE_3__.handleGETAPI)(invLikesURL);
  return dataResponse;
};

const getCommentArray = async (id) => {
  const commentResponse = await getCommentResponse(id);
  if (commentResponse instanceof Error) return [];
  return commentResponse;
};

const postComment = async (event) => {
  event.preventDefault();
  const postURL = (0,_createURLAPI_js__WEBPACK_IMPORTED_MODULE_2__.createApiInvURL)(_const_js__WEBPACK_IMPORTED_MODULE_4__.involvementAPIUri.base, _const_js__WEBPACK_IMPORTED_MODULE_4__.involvementAPIUri.appID,
    _const_js__WEBPACK_IMPORTED_MODULE_4__.involvementAPIUri.queryComment);
  const idMeal = event.currentTarget.id;
  const commentCtn = document.querySelector('.app-sec-ctn');
  await (0,_PostAPI_js__WEBPACK_IMPORTED_MODULE_0__.handleFormSubmit)(event, postURL);
  const newComments = await getCommentArray(idMeal);
  commentCtn.innerHTML = '';
  commentCtn.appendChild((0,_ListItemMod_js__WEBPACK_IMPORTED_MODULE_1__.createCommentSec)(newComments, _const_js__WEBPACK_IMPORTED_MODULE_4__.popUpSectionClasses));
};

const createCommentPopUp = async (mealAPi) => {
  const comment = await getCommentArray(mealAPi.idMeal);
  (0,_ListItemMod_js__WEBPACK_IMPORTED_MODULE_1__.toggleBlur)();
  const popUP = (0,_ListItemMod_js__WEBPACK_IMPORTED_MODULE_1__.createPopup)('div', _const_js__WEBPACK_IMPORTED_MODULE_4__.popUpClasses, mealAPi, (0,_ListItemMod_js__WEBPACK_IMPORTED_MODULE_1__.createCommentSec)(comment, _const_js__WEBPACK_IMPORTED_MODULE_4__.popUpSectionClasses),
    (0,_ListItemMod_js__WEBPACK_IMPORTED_MODULE_1__.createCommentForm)(mealAPi.idMeal, postComment, _const_js__WEBPACK_IMPORTED_MODULE_4__.popUpFormClasses));
  const popupDiv = document.getElementById('popup');
  popupDiv.innerHTML = '';
  popupDiv.appendChild(popUP);
};



/***/ }),

/***/ "./src/modules/APILikeHandling.js":
/*!****************************************!*\
  !*** ./src/modules/APILikeHandling.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLike: () => (/* binding */ createLike),
/* harmony export */   findLikes: () => (/* binding */ findLikes),
/* harmony export */   getLikesResponse: () => (/* binding */ getLikesResponse)
/* harmony export */ });
/* harmony import */ var _PostAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostAPI.js */ "./src/modules/PostAPI.js");
/* harmony import */ var _createURLAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createURLAPI.js */ "./src/modules/createURLAPI.js");
/* harmony import */ var _GetAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetAPI.js */ "./src/modules/GetAPI.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const.js */ "./src/modules/const.js");





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
    const url = (0,_createURLAPI_js__WEBPACK_IMPORTED_MODULE_1__.createApiInvURL)(_const_js__WEBPACK_IMPORTED_MODULE_3__.involvementAPIUri.base, _const_js__WEBPACK_IMPORTED_MODULE_3__.involvementAPIUri.appID,
      _const_js__WEBPACK_IMPORTED_MODULE_3__.involvementAPIUri.queryLike);
    await (0,_PostAPI_js__WEBPACK_IMPORTED_MODULE_0__.handlePost)(url, await likesJson(currentID));
    const dataResponseInv = await (0,_GetAPI_js__WEBPACK_IMPORTED_MODULE_2__.handleGETAPI)(url);
    const qtyLikes = await findLikes(currentID, dataResponseInv);
    const prtNde = event.target.parentNode.parentNode;
    await updateLikesDOM(prtNde, await qtyLikes);
  }
};

const getLikesResponse = async () => {
  const invLikesURL = (0,_createURLAPI_js__WEBPACK_IMPORTED_MODULE_1__.createApiInvURL)(_const_js__WEBPACK_IMPORTED_MODULE_3__.involvementAPIUri.base, _const_js__WEBPACK_IMPORTED_MODULE_3__.involvementAPIUri.appID,
    _const_js__WEBPACK_IMPORTED_MODULE_3__.involvementAPIUri.queryLike);
  const dataResponse = await (0,_GetAPI_js__WEBPACK_IMPORTED_MODULE_2__.handleGETAPI)(invLikesURL);
  return dataResponse;
};



/***/ }),

/***/ "./src/modules/APIMealsHandling.js":
/*!*****************************************!*\
  !*** ./src/modules/APIMealsHandling.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMealsCatResponse: () => (/* binding */ getMealsCatResponse),
/* harmony export */   getMealsIDResponse: () => (/* binding */ getMealsIDResponse)
/* harmony export */ });
/* harmony import */ var _createURLAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createURLAPI.js */ "./src/modules/createURLAPI.js");
/* harmony import */ var _GetAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetAPI.js */ "./src/modules/GetAPI.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const.js */ "./src/modules/const.js");




const getMealsIDResponse = async (data) => {
  const mealIDURL = (0,_createURLAPI_js__WEBPACK_IMPORTED_MODULE_0__.createApiMealURL)(_const_js__WEBPACK_IMPORTED_MODULE_2__.meaAPIUri.baseLookUp, _const_js__WEBPACK_IMPORTED_MODULE_2__.meaAPIUri.queryLookUp, data);
  const dataResponse = await (0,_GetAPI_js__WEBPACK_IMPORTED_MODULE_1__.handleGETAPI)(mealIDURL);
  return dataResponse;
};

const getMealsCatResponse = async (data) => {
  const mealIDURL = (0,_createURLAPI_js__WEBPACK_IMPORTED_MODULE_0__.createApiMealURL)(_const_js__WEBPACK_IMPORTED_MODULE_2__.meaAPIUri.baseFilter, _const_js__WEBPACK_IMPORTED_MODULE_2__.meaAPIUri.queryFilter, await data);
  const dataResponse = await (0,_GetAPI_js__WEBPACK_IMPORTED_MODULE_1__.handleGETAPI)(mealIDURL);
  return dataResponse;
};



/***/ }),

/***/ "./src/modules/CountTotalItems.js":
/*!****************************************!*\
  !*** ./src/modules/CountTotalItems.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendTotal: () => (/* binding */ appendTotal),
/* harmony export */   countTotalItem: () => (/* binding */ countTotalItem)
/* harmony export */ });
const countTotalItem = (node) => node.children.length;

const appendTotal = (total, id) => {
  const idSpan = document.getElementById(id);
  idSpan.textContent = ` (${total})`;
};



/***/ }),

/***/ "./src/modules/GetAPI.js":
/*!*******************************!*\
  !*** ./src/modules/GetAPI.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchDataJSON: () => (/* binding */ fetchDataJSON),
/* harmony export */   handleGETAPI: () => (/* binding */ handleGETAPI),
/* harmony export */   handleGETAPIevent: () => (/* binding */ handleGETAPIevent)
/* harmony export */ });
/**
 * Helper function for GETing data as JSON with fetch.
 *
 * @param {string} url - URL to GET data to
 * @return {Object} - Response body from URL that was GETed
 */
const fetchDataJSON = async (URL) => {
  const response = await fetch(URL);
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  const dataJSON = await response.json();
  return dataJSON;
};

/**
 * Event handler for a form submit event.
 * @param {SubmitEvent} event
 */
const handleGETAPIevent = async (event, url) => {
  event.preventDefault();
  try {
    const responseData = await fetchDataJSON(url);
    return responseData;
  } catch (error) {
    return error;
  }
};

/**
 * Event handler for a form submit event.
 */
const handleGETAPI = async (url) => {
  try {
    const responseData = await fetchDataJSON(url);
    return responseData;
  } catch (error) {
    return error;
  }
};



/***/ }),

/***/ "./src/modules/ListItemMod.js":
/*!************************************!*\
  !*** ./src/modules/ListItemMod.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCommentForm: () => (/* binding */ createCommentForm),
/* harmony export */   createCommentSec: () => (/* binding */ createCommentSec),
/* harmony export */   createItem: () => (/* binding */ createItem),
/* harmony export */   createPopup: () => (/* binding */ createPopup),
/* harmony export */   toggleBlur: () => (/* binding */ toggleBlur)
/* harmony export */ });
/* harmony import */ var _createElementMod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElementMod.js */ "./src/modules/createElementMod.js");
/* harmony import */ var _CountTotalItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountTotalItems.js */ "./src/modules/CountTotalItems.js");



const toggleBlur = () => {
  const body = document.querySelector('body');
  body.classList.toggle('modal-active');
};

const closePop = () => {
  toggleBlur();
  const overlay = document.querySelector('.app-item-popup-overlay');
  overlay.classList.add('out');
  const popup = document.getElementById('popup');
  setTimeout(() => popup.removeChild(overlay), 400);
};

const createItem = (elem, classes, mealApi, xlink, likeApi,
  callback0 = false, callback1 = false) => {
  const docFrag = document.createDocumentFragment();
  docFrag.appendChild((0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createImg)(classes.image, mealApi.strMeal, mealApi.strMealThumb));
  const elemHeader = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('div', classes.titleHeader);
  const titleImg = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('p', classes.likesCtn, mealApi.strMeal);
  elemHeader.appendChild(titleImg);
  const elemLikes = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('div', classes.likesIcon);
  const elemLikesSVG = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createNS)(xlink);
  elemLikes.appendChild(elemLikesSVG);
  const elemLikesP = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('p', classes.likesText, `${likeApi} like${likeApi > 1 ? 's' : ''}`);
  elemLikes.appendChild(elemLikesP);
  elemHeader.appendChild(elemLikes);
  docFrag.appendChild(elemHeader);
  const btnDiv = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('div', classes.classDivBtn);
  const commentBtn = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', classes.btnComment, 'Go to Comments', 'Comments');
  if (callback1) commentBtn.addEventListener('click', callback1);
  btnDiv.appendChild(commentBtn);
  btnDiv.appendChild((0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', classes.btnReserve, 'Go to Reservations', 'Reservations'));
  docFrag.appendChild(btnDiv);
  const itemElem = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)(elem, classes.container, false, docFrag);
  itemElem.setAttribute('data-id', mealApi.idMeal);
  if (callback0) itemElem.addEventListener('click', callback0);
  return itemElem;
};

const createPopup = (elem, classes, mealApi, callback = false, callback2 = false) => {
  const docFrag = document.createDocumentFragment();
  const elemHeader = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('div', classes.titleHeader);
  const titlePop = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('h2', classes.title, mealApi.strMeal);
  const titleX = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('span', classes.exit, 'X');
  titleX.addEventListener('click', closePop);
  elemHeader.append(titlePop, titleX);
  docFrag.appendChild(elemHeader);
  docFrag.appendChild((0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createImg)(classes.image, mealApi.strMeal, mealApi.strMealThumb));
  const elemProp = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('div', classes.properties);
  const mealName = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('p', classes.property, `Name: ${mealApi.strMeal}`);
  const mealCat = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('p', classes.property, `Category: ${mealApi.strCategory}`);
  const mealArea = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('p', classes.property, `Area: ${mealApi.strArea}`);
  const tag = mealApi.strTags ? mealApi.strTags.split(',').join(', ') : 'NONE';
  const mealTags = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('p', classes.property, `Area: ${tag}`);
  elemProp.append(mealName, mealCat, mealArea, mealTags);
  docFrag.appendChild(elemProp);
  const secCtn = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('div', classes.sectionCtn);
  const formCtn = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('div', classes.formContainer);
  if (callback) secCtn.appendChild(callback);
  if (callback2) formCtn.appendChild(callback2);
  docFrag.append(secCtn, formCtn);
  const itemElem = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)(elem, classes.container, false, docFrag);
  itemElem.setAttribute('data-id', mealApi.idMeal);
  const itemCont = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)(elem, classes.overlay, false, itemElem);
  return itemCont;
};

const createCommentLine = (data, classLine) => {
  const date = data.creation_date;
  const name = data.username;
  const commentItem = data.comment;
  const dataP = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('p', classLine, `${date} ${name}: ${commentItem}`);
  return dataP;
};

const createCommentSec = (dataArr, classes = false) => {
  const docFrag = document.createDocumentFragment();
  const titleSpan = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('span', classes.title, 'Comments');
  const counterSpan = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('span', classes.titleCounter);
  const title = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('h3', classes.titleheader);
  const commentCtn = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('div', classes.postCtn);
  let totalComment = (0,_CountTotalItems_js__WEBPACK_IMPORTED_MODULE_1__.countTotalItem)(commentCtn);
  title.append(titleSpan, counterSpan);
  if (dataArr.length === 0) counterSpan.textContent = ` (${totalComment})`;
  else {
    dataArr.forEach((data) => {
      commentCtn.appendChild(createCommentLine(data, classes.postItem));
      totalComment = (0,_CountTotalItems_js__WEBPACK_IMPORTED_MODULE_1__.countTotalItem)(commentCtn);
      counterSpan.textContent = ` (${totalComment})`;
    });
  }
  docFrag.append(title, commentCtn);
  return docFrag;
};

const createCommentForm = (id, callback, classLine = false) => {
  const docFrag = document.createDocumentFragment();
  const titleForm = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('h3', classLine.title, 'Add a comment');
  const formComment = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('form', classLine.formContainer);
  formComment.setAttribute('id', id);
  const inpuItemID = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createInput)('text', classLine.inputHidden, 'item_id', 'item_id', false, true, true);
  inpuItemID.setAttribute('value', id);
  const labelUser = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createLabel)('username', classLine.inputLabel, 'Name');
  const inputUser = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createInput)('text', classLine.inputReg, 'username', 'username', 'Please input your name', true, false);
  const userDiv = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('div', classLine.inputDiv, false, labelUser);
  userDiv.appendChild(inputUser);
  const labelComment = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createLabel)('comment', classLine.inputLabel, 'Comment');
  const commentArea = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createTextArea)('250', classLine.textArea, 'comment', 'comment', 'Please input your comment', true);
  const commentDiv = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('div', classLine.inputDiv, false, labelComment);
  commentDiv.appendChild(commentArea);
  const submitBtn = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createButton)('submit', classLine.button, 'Submit comment', 'Submit');
  formComment.append(inpuItemID, userDiv, commentDiv, submitBtn);
  formComment.addEventListener('submit', callback);
  docFrag.append(titleForm, formComment);
  return docFrag;
};



/***/ }),

/***/ "./src/modules/PostAPI.js":
/*!********************************!*\
  !*** ./src/modules/PostAPI.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleFormSubmit: () => (/* binding */ handleFormSubmit),
/* harmony export */   handlePost: () => (/* binding */ handlePost),
/* harmony export */   postDataAsJson: () => (/* binding */ postDataAsJson)
/* harmony export */ });
/**
 * Helper function for POSTing data as JSON with fetch.
 *
 * @param {Object} options
 * @param {string} url - URL to POST data to
 * @param {FormData} formData - `FormData` instance
 * @param {JSON} jsonFormat - json object to be passed as body of fetch api.
 * @return {Object} - Response body from URL that was POSTed to
 */
const postDataAsJson = async ({ url, formData = false, jsonFormat = false }) => {
  let jsonData;
  if (formData) {
    jsonData = Object.fromEntries(formData.entries());
  } else if (jsonFormat) jsonData = jsonFormat;
  const JsonString = JSON.stringify(jsonData);
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JsonString,
  };

  const response = await fetch(url, fetchOptions);
  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
};

/**
 * Event handler for a form submit event.
 * @param {SubmitEvent} event
 */
const handleFormSubmit = async (event, url) => {
  event.preventDefault();
  const scoreForm = event.currentTarget;
  try {
    const formData = new FormData(scoreForm);
    scoreForm.reset();
    const responseData = await postDataAsJson({ url, formData });
    return responseData;
  } catch (error) {
    return error;
  }
};

/**
 * Event handler for a form submit event.
 * @param {String} url
 * @param {JSON} json
 */
const handlePost = async (url, json) => {
  try {
    const responseData = await postDataAsJson({ url, formData: false, jsonFormat: json });
    return responseData;
  } catch (error) {
    return error;
  }
};



/***/ }),

/***/ "./src/modules/const.js":
/*!******************************!*\
  !*** ./src/modules/const.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   involvementAPIUri: () => (/* binding */ involvementAPIUri),
/* harmony export */   itemClasses: () => (/* binding */ itemClasses),
/* harmony export */   meaAPIUri: () => (/* binding */ meaAPIUri),
/* harmony export */   popUpClasses: () => (/* binding */ popUpClasses),
/* harmony export */   popUpFormClasses: () => (/* binding */ popUpFormClasses),
/* harmony export */   popUpSectionClasses: () => (/* binding */ popUpSectionClasses),
/* harmony export */   xlink: () => (/* binding */ xlink)
/* harmony export */ });
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
  inputHidden: 'app-form-input-hidden',
  inputDiv: 'app-form-input-div',
  inputLabel: 'app-form-input-label',
  inputReg: 'app-form-input-reg',
  textArea: 'app-form-textArea',
  button: 'app-btn',
};

const xlink = '../asset/resource/icons.svg#heart-like';

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
  appID: 'Wbe3IznQ2LQoFPHmVrwp',
};



/***/ }),

/***/ "./src/modules/createElementMod.js":
/*!*****************************************!*\
  !*** ./src/modules/createElementMod.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   createButton: () => (/* binding */ createButton),
/* harmony export */   createElementDefault: () => (/* binding */ createElementDefault),
/* harmony export */   createImg: () => (/* binding */ createImg),
/* harmony export */   createInput: () => (/* binding */ createInput),
/* harmony export */   createLabel: () => (/* binding */ createLabel),
/* harmony export */   createNS: () => (/* binding */ createNS),
/* harmony export */   createTextArea: () => (/* binding */ createTextArea)
/* harmony export */ });
const redirectWindow = (href) => {
  window.location.href = href;
};

/**
 * Function to add class or classes to HTML Element
 * @param {HTMLElement} elem HTML Element to be modified.
 * @param {String} classes String or Array of String to be added.
 * @returns {HTMLElement} Returns HTML element with chosen classes.
 */
const addClass = (elem, classes) => {
  if ((typeof classes) === 'string') elem.classList.add(classes);
  else if ((typeof classes) === 'object') elem.classList.add(...classes);
  return elem;
};

/**
 * Function to create HTML element using tag names.
 * Classes and text content can be added as element is create.
 * @param {string} elem Tag name of the element to be created. Example: `div, p, section`
 * @param {string} classes Name of class or classes to add. String, array of string should be used.
 * If no class is wanted, false should be use.Optional Paramenter.
 * @param {String} textContext Text to be added as text content to HTML element.
 * Option parameter.
 * @param {HTMLElement} innerChild HTML Element to be appended
 * @returns {HTMLElement} Returns HTML element chosen with set attributes.
 */
const createElementDefault = (elem, classes = false, textContent = false, innerChild = false) => {
  const element = document.createElement(elem);
  addClass(element, classes);
  if (textContent) element.textContent = textContent;
  if (innerChild) element.appendChild(innerChild);
  return element;
};

/**
 * Creates an HTML svg element to be rendered dinamically
 * @param {string} href Hyperlink reference for file location
 * @returns {HTMLOrSVGElement} HTML svg element to be append to DOM to be rendered dinamically
 */
const createNS = (href) => {
  const xlink = href.split('#');
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('href', `${href}`);
  use.classList.add(xlink[1]);
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.appendChild(use);
  svg.classList.add(xlink[1]);
  return svg;
};

/**
 * Creates a HTML label element with a for attribute, differete classes and inner child and txt
 * content
 * @param {string} forAtr=false For attribute in label that indicates which input or text area
 * it is linked with
 * @param {string} classes=false String or array of string with class names
 * @param {string} textContent=false String that represents the text content of the label
 * @param {HTMLElement} innerChild=false HTML element to be append to label
 * @returns {HTMLLabelElement} HTML label element ready to be append to the dom
 */
const createLabel = (forAtr = false, classes = false, textContent = false, innerChild = false) => {
  const label = createElementDefault('label', classes, textContent, innerChild);
  if (forAtr) label.setAttribute('for', forAtr);
  return label;
};

const createTextArea = (length = false, classes = false,
  id = false, name = false, placeholder = false, required = false) => {
  const textArea = createElementDefault('textarea', classes);
  if (length) textArea.setAttribute('maxlength', length);
  if (id) textArea.setAttribute('id', id);
  if (name) textArea.setAttribute('name', name);
  if (placeholder) textArea.setAttribute('placeholder', placeholder);
  if (required) textArea.setAttribute('required', 'true');
  else textArea.setAttribute('required', 'false');
  textArea.setAttribute('spellcheck', 'true');
  return textArea;
};

const createInput = (type = false, classes = false,
  id = false, name = false, placeholder = false, required = false, readonly = false) => {
  const input = createElementDefault('input', classes);
  if (type) input.setAttribute('type', type);
  if (id) input.setAttribute('id', id);
  if (name) input.setAttribute('name', name);
  if (placeholder) input.setAttribute('placeholder', placeholder);
  if (required) input.setAttribute('required', 'true');
  if (readonly) input.setAttribute('readonly', 'true');
  input.setAttribute('spellcheck', 'true');
  return input;
};

/**
 * Function to create HTML Button element. Classes and text content
 * can be added as element is create. Click event to a another webpage can be added.
 * @param {string} func Type of button `sumbit, reset, button`
 * @param {string} classes Name of class or classes to add. String, array of string should be used.
 * If no class is wanted, false should be use.Optional Paramenter.
 * @param {string} ariaLabel Text for accessibility
 * @param {any} textContent Text to be added as text content to HTML element.
 * Option parameter.
 * @param {HTMLElement} innerChild HTML Element to be appended
 * @param {any} href Hyperlink reference to be followed if button is clicked.
 * Option parameter.
 * @returns {HTMLButtonElement} Returns HTML button element chosen with set attributes.
 */
const createButton = (func, classes, ariaLabel, textContent = false,
  innerChild = false, href = false) => {
  const button = document.createElement('button');
  button.type = func;
  button.ariaLabel = ariaLabel;
  addClass(button, classes);
  if (textContent) button.textContent = textContent;
  if (href) {
    button.addEventListener('click', redirectWindow(href));
  }
  if (innerChild) button.appendChild(innerChild);
  return button;
};

const createImg = (classes, name, url) => {
  const imgElem = createElementDefault('img', classes);
  imgElem.setAttribute('src', url);
  imgElem.setAttribute('alt', name);
  return imgElem;
};




/***/ }),

/***/ "./src/modules/createURLAPI.js":
/*!*************************************!*\
  !*** ./src/modules/createURLAPI.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createApiInvQueryURL: () => (/* binding */ createApiInvQueryURL),
/* harmony export */   createApiInvURL: () => (/* binding */ createApiInvURL),
/* harmony export */   createApiMealURL: () => (/* binding */ createApiMealURL)
/* harmony export */ });
const createApiMealURL = (baseurl, queryKey, queryValue) => {
  const url = `${baseurl}${queryKey}=${queryValue}`;
  return url;
};

const createApiInvURL = (baseurl, id, endpoint) => {
  const url = `${baseurl}${id}${endpoint}`;
  return url;
};

const createApiInvQueryURL = (baseurl, id, endpoint, query) => {
  const url = `${baseurl}${id}${endpoint}?item_id=${query}`;
  return url;
};



/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printListItems: () => (/* binding */ printListItems),
/* harmony export */   xlink: () => (/* reexport safe */ _const_js__WEBPACK_IMPORTED_MODULE_1__.xlink)
/* harmony export */ });
/* harmony import */ var _ListItemMod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItemMod.js */ "./src/modules/ListItemMod.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const.js */ "./src/modules/const.js");
/* harmony import */ var _APILikeHandling_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./APILikeHandling.js */ "./src/modules/APILikeHandling.js");
/* harmony import */ var _APIMealsHandling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./APIMealsHandling.js */ "./src/modules/APIMealsHandling.js");
/* harmony import */ var _APICommentsHandling_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./APICommentsHandling.js */ "./src/modules/APICommentsHandling.js");
/* harmony import */ var _CountTotalItems_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CountTotalItems.js */ "./src/modules/CountTotalItems.js");







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
    const mealData = await (0,_APIMealsHandling_js__WEBPACK_IMPORTED_MODULE_3__.getMealsIDResponse)(data.idMeal);
    const mealFrag = (0,_ListItemMod_js__WEBPACK_IMPORTED_MODULE_0__.createItem)('li', _const_js__WEBPACK_IMPORTED_MODULE_1__.itemClasses, mealData.meals[0], _const_js__WEBPACK_IMPORTED_MODULE_1__.xlink, await (0,_APILikeHandling_js__WEBPACK_IMPORTED_MODULE_2__.findLikes)(mealData.meals[0].idMeal, invArr),
      _APILikeHandling_js__WEBPACK_IMPORTED_MODULE_2__.createLike, () => (0,_APICommentsHandling_js__WEBPACK_IMPORTED_MODULE_4__.createCommentPopUp)(mealData.meals[0]));
    appCtn.appendChild(mealFrag);
    const total = (0,_CountTotalItems_js__WEBPACK_IMPORTED_MODULE_5__.countTotalItem)(appCtn);
    (0,_CountTotalItems_js__WEBPACK_IMPORTED_MODULE_5__.appendTotal)(total, ID);
  });
  appendResponseFeedback('Please Select a Meal');
};

const printListItems = async (event) => {
  const catID = await getCategoryItems(event);
  const dataResponseMeal = await (0,_APIMealsHandling_js__WEBPACK_IMPORTED_MODULE_3__.getMealsCatResponse)(catID);
  const dataResponseInv = await (0,_APILikeHandling_js__WEBPACK_IMPORTED_MODULE_2__.getLikesResponse)();
  if (dataResponseMeal instanceof Error || dataResponseInv instanceof Error) appendResponseFeedback('Unable to Fetch Data');
  else await appendListItems(dataResponseMeal.meals, dataResponseInv, catID);
};



/***/ }),

/***/ "./src/asset/resource/icons.svg":
/*!**************************************!*\
  !*** ./src/asset/resource/icons.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/resource/icons.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxtQkFBbUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0U7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbklGO0FBQ0EsaUJBQWlCLFFBQVEsRUFBRSxTQUFTLEdBQUcsV0FBVztBQUNsRDtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVEsRUFBRSxHQUFHLEVBQUUsU0FBUztBQUN6QztBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVEsRUFBRSxHQUFHLEVBQUUsU0FBUyxXQUFXLE1BQU07QUFDMUQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiOEM7QUFDRTtBQUMrQjtBQUNDO0FBQ2xCO0FBQ0s7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHdFQUFrQjtBQUM3QyxxQkFBcUIsMkRBQVUsT0FBTyxrREFBVyxxQkFBcUIsNENBQUssUUFBUSw4REFBUztBQUM1RixNQUFNLDJEQUFVLFFBQVEsMkVBQWtCO0FBQzFDO0FBQ0Esa0JBQWtCLG1FQUFjO0FBQ2hDLElBQUksZ0VBQVc7QUFDZixHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLHlFQUFtQjtBQUNwRCxnQ0FBZ0MscUVBQWdCO0FBQ2hEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvQVBJQ29tbWVudHNIYW5kbGluZy5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9BUElMaWtlSGFuZGxpbmcuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvQVBJTWVhbHNIYW5kbGluZy5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9Db3VudFRvdGFsSXRlbXMuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvR2V0QVBJLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL0xpc3RJdGVtTW9kLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL1Bvc3RBUEkuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvY3JlYXRlRWxlbWVudE1vZC5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9jcmVhdGVVUkxBUEkuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXN2Zy1zaWRlOiBjbGFtcCgxNnB4LCAoMTAwdncgLSAzMjBweCkgKiAxMDAwLCBjbGFtcCgyMHB4LCAoMTAwdncgLSA2NDBweCkgKiAxMDAwLCBjbGFtcCgyNXB4LCAoMTAwdncgLSAxMjgwcHgpICogMTAwMCwgMzBweCkpKTtcXG4gIC0tZm9udC1zaXplOiBjYWxjKHZhcigtLXN2Zy1zaWRlKSAqIDAuOCk7XFxuICAtLWJja2dyZC0wOiAjZmZmMDtcXG4gIC0tYmctbW9kYWw6ICNjMWM3ZDBiZTtcXG4gIC0tYmNrZ3JkOiAjZmZmO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlNmNlOTtcXG4gIGZvbnQtZmFtaWx5OiAnUGFuZ29saW4nLCAnTWVycml3ZWF0aGVyJywgc2VyaWYsIGN1cnNpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnN2ZyB7XFxuICBtYXJnaW4tYmxvY2s6IGF1dG87XFxufVxcblxcbi5tb2RhbC1hY3RpdmUgLm1vZGFsLWJnIHtcXG4gIGZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4vKiBOYXZiYXIgKi9cXG5cXG4ubmF2LWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ4YmYxO1xcbiAgcGFkZGluZzogMiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tc3ZnLXNpZGUpICogMik7XFxufVxcblxcbi5uYXYtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLm5hdi1pdGVtcyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDJyZW07XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcbn1cXG5cXG4ubmF2LWl0ZW1zIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbi5leHRyZW1pdHkge1xcbiAgcGFkZGluZy1ibG9jazogMTBweDtcXG4gIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZm9vdGVyLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYXBwLWl0ZW0gc3ZnLFxcbi5mb290ZXItcm93IHN2ZyB7XFxuICBoZWlnaHQ6IHZhcigtLXN2Zy1zaWRlKTtcXG4gIHdpZHRoOiB2YXIoLS1zdmctc2lkZSk7XFxufVxcblxcbi8qIE1haW4gQXBwICovXFxuXFxubWFpbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBmbGV4LWdyb3c6IDE7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4jZm9ybUZlZWRiYWNrIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLyogSXRlbSBDb250YWluZXIgKi9cXG5cXG4jYXBwLWN0biB7XFxuICAtLW46IDI7XFxuICAtLXc6IDM1MHB4O1xcbiAgLS1uMTogMztcXG4gIC0tdzE6IDcwMHB4O1xcbiAgLS1uMjogNDtcXG4gIC0tdzI6IDEwNTBweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBjb2x1bW4tZ2FwOiAzMHB4O1xcbiAgcm93LWdhcDogMzBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoY2xhbXAoY2xhbXAoY2xhbXAoMTAwJS8odmFyKC0tbjIpICsgMSkgKyAwLjElLCAodmFyKC0tdzIpIC0gMTAwdncpICogMTAwMCwgMTAwJS8odmFyKC0tbjEpICsgMSkgKyAwLjElKSwgKHZhcigtLXcxKSAtIDEwMHZ3KSAqIDEwMDAsIDEwMCUvKHZhcigtLW4pICsgMSkgKyAwLjElKSwgKHZhcigtLXcpIC0gMTAwdncpICogMTAwMCwgMTAwJSksIDNmcikpO1xcbiAgcGFkZGluZy1ibG9jazogNTBweDtcXG4gIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG5cXG4uYXBwLWl0ZW0ge1xcbiAgcGFkZGluZzogNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ4YmYxO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmFwcC1pbWcge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbi5hcHAtdGl0bGUtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1pbmxpbmU6IDUlO1xcbn1cXG5cXG4uYXBwLWRpdi1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMTUlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hcHAtbGlrZS10ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1saWtlLXN2ZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5hcHAtYnRuIHtcXG4gIHBhZGRpbmctaW5saW5lOiAxMHB4O1xcbiAgcGFkZGluZy1ibG9jazogNXB4O1xcbiAgei1pbmRleDogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hcHAtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTQsIDQ2LCA0Nik7XFxufVxcblxcbi8qIFBvcC11cCAqL1xcblxcbi5hcHAtaXRlbS1wb3B1cC1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJja2dyZC0wKTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAyMDtcXG4gIHBhZGRpbmctaW5saW5lOiAyMHZ3O1xcbiAgcGFkZGluZy1ibG9jazogMi41dmggMTV2aDtcXG4gIGFuaW1hdGlvbjogZmFkZUluUHJvamVjdCAwLjNzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XFxufVxcblxcbi5hcHAtaXRlbS1wb3B1cC1vdmVybGF5Lm91dCB7XFxuICBhbmltYXRpb246IGZhZGVPdXRQcm9qZWN0IDAuM3MgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluUHJvamVjdCB7XFxuICAwJSB7XFxuICAgIHotaW5kZXg6IC0zO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iY2tncmQtMCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgei1pbmRleDogMjA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLW1vZGFsKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRPdXRuUHJvamVjdCB7XFxuICAwJSB7XFxuICAgIHotaW5kZXg6IDIwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1tb2RhbCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgei1pbmRleDogLTM7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJja2dyZC0wKTtcXG4gIH1cXG59XFxuXFxuLmFwcC1pdGVtLXBvcHVwIHtcXG4gIHBhZGRpbmctaW5saW5lOiA1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmNrZ3JkKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgcGFkZGluZy1ibG9jazogMi41JSA1JTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgZ2FwOiAxMHB4O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xcbiAgYW5pbWF0aW9uOiBzY2FsZVVwUHJvamVjdCAwLjNzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSkgZm9yd2FyZHM7XFxufVxcblxcbi5vdXQgLmFwcC1pdGVtLXBvcHVwIHtcXG4gIGFuaW1hdGlvbjogc2NhbGVEb3duUHJvamVjdCAwLjNzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNjYWxlVXBQcm9qZWN0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVkoMTAwMHB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2NhbGVEb3duUHJvamVjdCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWSgxMDAwcHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cXG4uYXBwLWV4aXQsXFxuLmFwcC10aXRsZS1wb3Age1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLmFwcC1leGl0IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXBwLXByb3BlcnR5IHtcXG4gIC0td2FwOiA4MDBweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGNsYW1wKDEwMCUvMyArIDAuMSUsICh2YXIoLS13YXApIC0gMTAwdncpICogMTAwMCwgMTAwJSksIDFmcikpO1xcbiAgY29sdW1uLWdhcDogMTBweDtcXG4gIHJvdy1nYXA6IDEwcHg7XFxufVxcblxcbi5hcHAtaW1nLXBvcCB7XFxuICB3aWR0aDogMjV2dztcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcbn1cXG5cXG4uYXBwLXRpdGxlLWhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIENvbW1lbnRzIGFuZCBSZXNlcnZhdGlvbiBTZWN0aW9uICovXFxuXFxuLmFwcC1zZWN0aW9uLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5hcHAtc2VjdGlvbi1jdG4ge1xcbiAgaGVpZ2h0OiAxNHZoO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4vKiBDb21tZW50cyBhbmQgUmVzZXJ2YXRpb24gRm9ybSAqL1xcblxcbi5hcHAtZm9ybS10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hcHAtZm9ybS1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYXBwLWZvcm0taW5wdXQtZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBwYWRkaW5nLWlubGluZTogMCA1JTtcXG59XFxuXFxuLmFwcC1mb3JtLWlucHV0LWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYXBwLWZvcm0taW5wdXQtcmVnLFxcbi5hcHAtZm9ybS10ZXh0QXJlYSB7XFxuICBwYWRkaW5nLWlubGluZTogN3B4O1xcbiAgcGFkZGluZy1ibG9jazogNXB4O1xcbiAgei1pbmRleDogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5hcHAtZm9ybS10ZXh0QXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnSUFBZ0k7RUFDaEksd0NBQXdDO0VBQ3hDLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFF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LHdDQUF3QztJQUN4QyxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxpQ0FBaUM7SUFDakMsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlDQUFpQztJQUNqQyxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx3Q0FBd0M7SUFDeEMsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTs7RUFFWixhQUFhO0VBQ2IsNkdBQTZHO0VBQzdHLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLG1CQUFtQjtBQUNyQjs7QUFFQSxxQ0FBcUM7O0FBRXJDO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQSxrQ0FBa0M7O0FBRWxDO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1zdmctc2lkZTogY2xhbXAoMTZweCwgKDEwMHZ3IC0gMzIwcHgpICogMTAwMCwgY2xhbXAoMjBweCwgKDEwMHZ3IC0gNjQwcHgpICogMTAwMCwgY2xhbXAoMjVweCwgKDEwMHZ3IC0gMTI4MHB4KSAqIDEwMDAsIDMwcHgpKSk7XFxuICAtLWZvbnQtc2l6ZTogY2FsYyh2YXIoLS1zdmctc2lkZSkgKiAwLjgpO1xcbiAgLS1iY2tncmQtMDogI2ZmZjA7XFxuICAtLWJnLW1vZGFsOiAjYzFjN2QwYmU7XFxuICAtLWJja2dyZDogI2ZmZjtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTZjZTk7XFxuICBmb250LWZhbWlseTogJ1BhbmdvbGluJywgJ01lcnJpd2VhdGhlcicsIHNlcmlmLCBjdXJzaXZlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5zdmcge1xcbiAgbWFyZ2luLWJsb2NrOiBhdXRvO1xcbn1cXG5cXG4ubW9kYWwtYWN0aXZlIC5tb2RhbC1iZyB7XFxuICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuLyogTmF2YmFyICovXFxuXFxuLm5hdi1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0OGJmMTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXN2Zy1zaWRlKSAqIDIpO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5uYXYtaXRlbXMge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogM3JlbTtcXG59XFxuXFxuLm5hdi1pdGVtcyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5cXG4uZXh0cmVtaXR5IHtcXG4gIHBhZGRpbmctYmxvY2s6IDEwcHg7XFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZvb3Rlci1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmFwcC1pdGVtIHN2ZyxcXG4uZm9vdGVyLXJvdyBzdmcge1xcbiAgaGVpZ2h0OiB2YXIoLS1zdmctc2lkZSk7XFxuICB3aWR0aDogdmFyKC0tc3ZnLXNpZGUpO1xcbn1cXG5cXG4vKiBNYWluIEFwcCAqL1xcblxcbm1haW4ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI2Zvcm1GZWVkYmFjayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi8qIEl0ZW0gQ29udGFpbmVyICovXFxuXFxuI2FwcC1jdG4ge1xcbiAgLS1uOiAyO1xcbiAgLS13OiAzNTBweDtcXG4gIC0tbjE6IDM7XFxuICAtLXcxOiA3MDBweDtcXG4gIC0tbjI6IDQ7XFxuICAtLXcyOiAxMDUwcHg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgY29sdW1uLWdhcDogMzBweDtcXG4gIHJvdy1nYXA6IDMwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGNsYW1wKGNsYW1wKGNsYW1wKDEwMCUvKHZhcigtLW4yKSArIDEpICsgMC4xJSwgKHZhcigtLXcyKSAtIDEwMHZ3KSAqIDEwMDAsIDEwMCUvKHZhcigtLW4xKSArIDEpICsgMC4xJSksICh2YXIoLS13MSkgLSAxMDB2dykgKiAxMDAwLCAxMDAlLyh2YXIoLS1uKSArIDEpICsgMC4xJSksICh2YXIoLS13KSAtIDEwMHZ3KSAqIDEwMDAsIDEwMCUpLCAzZnIpKTtcXG4gIHBhZGRpbmctYmxvY2s6IDUwcHg7XFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLmFwcC1pdGVtIHtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0OGJmMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5hcHAtaW1nIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbn1cXG5cXG4uYXBwLXRpdGxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctaW5saW5lOiA1JTtcXG59XFxuXFxuLmFwcC1kaXYtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDE1JTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYXBwLWxpa2UtdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hcHAtbGlrZS1zdmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uYXBwLWJ0biB7XFxuICBwYWRkaW5nLWlubGluZTogMTBweDtcXG4gIHBhZGRpbmctYmxvY2s6IDVweDtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXBwLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCA0NiwgNDYpO1xcbn1cXG5cXG4vKiBQb3AtdXAgKi9cXG5cXG4uYXBwLWl0ZW0tcG9wdXAtb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iY2tncmQtMCk7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMjA7XFxuICBwYWRkaW5nLWlubGluZTogMjB2dztcXG4gIHBhZGRpbmctYmxvY2s6IDIuNXZoIDE1dmg7XFxuICBhbmltYXRpb246IGZhZGVJblByb2plY3QgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xcbn1cXG5cXG4uYXBwLWl0ZW0tcG9wdXAtb3ZlcmxheS5vdXQge1xcbiAgYW5pbWF0aW9uOiBmYWRlT3V0UHJvamVjdCAwLjNzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJblByb2plY3Qge1xcbiAgMCUge1xcbiAgICB6LWluZGV4OiAtMztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmNrZ3JkLTApO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHotaW5kZXg6IDIwO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1tb2RhbCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkT3V0blByb2plY3Qge1xcbiAgMCUge1xcbiAgICB6LWluZGV4OiAyMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctbW9kYWwpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHotaW5kZXg6IC0zO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iY2tncmQtMCk7XFxuICB9XFxufVxcblxcbi5hcHAtaXRlbS1wb3B1cCB7XFxuICBwYWRkaW5nLWlubGluZTogNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJja2dyZCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gIHBhZGRpbmctYmxvY2s6IDIuNSUgNSU7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIGdhcDogMTBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC4zKTtcXG4gIGFuaW1hdGlvbjogc2NhbGVVcFByb2plY3QgMC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpIGZvcndhcmRzO1xcbn1cXG5cXG4ub3V0IC5hcHAtaXRlbS1wb3B1cCB7XFxuICBhbmltYXRpb246IHNjYWxlRG93blByb2plY3QgMC4zcyBlYXNlLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzY2FsZVVwUHJvamVjdCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVZKDEwMDBweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNjYWxlRG93blByb2plY3Qge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpIHRyYW5zbGF0ZVkoMTAwMHB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXFxuLmFwcC1leGl0LFxcbi5hcHAtdGl0bGUtcG9wIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5hcHAtZXhpdCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFwcC1wcm9wZXJ0eSB7XFxuICAtLXdhcDogODAwcHg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChjbGFtcCgxMDAlLzMgKyAwLjElLCAodmFyKC0td2FwKSAtIDEwMHZ3KSAqIDEwMDAsIDEwMCUpLCAxZnIpKTtcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxuICByb3ctZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYXBwLWltZy1wb3Age1xcbiAgd2lkdGg6IDI1dnc7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAzNTBweDtcXG59XFxuXFxuLmFwcC10aXRsZS1oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBDb21tZW50cyBhbmQgUmVzZXJ2YXRpb24gU2VjdGlvbiAqL1xcblxcbi5hcHAtc2VjdGlvbi1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uYXBwLXNlY3Rpb24tY3RuIHtcXG4gIGhlaWdodDogMTR2aDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLyogQ29tbWVudHMgYW5kIFJlc2VydmF0aW9uIEZvcm0gKi9cXG5cXG4uYXBwLWZvcm0tdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYXBwLWZvcm0tY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmFwcC1mb3JtLWlucHV0LWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgcGFkZGluZy1pbmxpbmU6IDAgNSU7XFxufVxcblxcbi5hcHAtZm9ybS1pbnB1dC1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFwcC1mb3JtLWlucHV0LXJlZyxcXG4uYXBwLWZvcm0tdGV4dEFyZWEge1xcbiAgcGFkZGluZy1pbmxpbmU6IDdweDtcXG4gIHBhZGRpbmctYmxvY2s6IDVweDtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYXBwLWZvcm0tdGV4dEFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vYXNzZXQvcmVzb3VyY2UvaWNvbnMuc3ZnJztcbmltcG9ydCB7IHByaW50TGlzdEl0ZW1zIH0gZnJvbSAnLi9tb2R1bGVzL3V0aWxzLmpzJztcblxuY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5xdWVyeSBhJyk7XG5cbi8vIFNlbGVjdCBzZWN0aW9uIHRvIHNob3dcbm5hdkl0ZW0uZm9yRWFjaCgobGluaykgPT4ge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbmF2SXRlbS5mb3JFYWNoKChuYXZJdGVtKSA9PiBuYXZJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHByaW50TGlzdEl0ZW1zKGUpO1xuICB9KTtcbn0pO1xuIiwiaW1wb3J0IHsgaGFuZGxlRm9ybVN1Ym1pdCB9IGZyb20gJy4vUG9zdEFQSS5qcyc7XG5pbXBvcnQge1xuICBjcmVhdGVQb3B1cCwgdG9nZ2xlQmx1ciwgY3JlYXRlQ29tbWVudFNlYywgY3JlYXRlQ29tbWVudEZvcm0sXG59IGZyb20gJy4vTGlzdEl0ZW1Nb2QuanMnO1xuaW1wb3J0IHsgY3JlYXRlQXBpSW52VVJMLCBjcmVhdGVBcGlJbnZRdWVyeVVSTCB9IGZyb20gJy4vY3JlYXRlVVJMQVBJLmpzJztcbmltcG9ydCB7IGhhbmRsZUdFVEFQSSB9IGZyb20gJy4vR2V0QVBJLmpzJztcbmltcG9ydCB7XG4gIGludm9sdmVtZW50QVBJVXJpLCBwb3BVcENsYXNzZXMsIHBvcFVwU2VjdGlvbkNsYXNzZXMsIHBvcFVwRm9ybUNsYXNzZXMsXG59IGZyb20gJy4vY29uc3QuanMnO1xuXG5jb25zdCBnZXRDb21tZW50UmVzcG9uc2UgPSBhc3luYyAoaWRJdGVtKSA9PiB7XG4gIGNvbnN0IGludkxpa2VzVVJMID0gY3JlYXRlQXBpSW52UXVlcnlVUkwoXG4gICAgaW52b2x2ZW1lbnRBUElVcmkuYmFzZSwgaW52b2x2ZW1lbnRBUElVcmkuYXBwSUQsIGludm9sdmVtZW50QVBJVXJpLnF1ZXJ5Q29tbWVudCwgaWRJdGVtLFxuICApO1xuICBjb25zdCBkYXRhUmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVHRVRBUEkoaW52TGlrZXNVUkwpO1xuICByZXR1cm4gZGF0YVJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0Q29tbWVudEFycmF5ID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRSZXNwb25zZSA9IGF3YWl0IGdldENvbW1lbnRSZXNwb25zZShpZCk7XG4gIGlmIChjb21tZW50UmVzcG9uc2UgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIFtdO1xuICByZXR1cm4gY29tbWVudFJlc3BvbnNlO1xufTtcblxuY29uc3QgcG9zdENvbW1lbnQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgcG9zdFVSTCA9IGNyZWF0ZUFwaUludlVSTChpbnZvbHZlbWVudEFQSVVyaS5iYXNlLCBpbnZvbHZlbWVudEFQSVVyaS5hcHBJRCxcbiAgICBpbnZvbHZlbWVudEFQSVVyaS5xdWVyeUNvbW1lbnQpO1xuICBjb25zdCBpZE1lYWwgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xuICBjb25zdCBjb21tZW50Q3RuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1zZWMtY3RuJyk7XG4gIGF3YWl0IGhhbmRsZUZvcm1TdWJtaXQoZXZlbnQsIHBvc3RVUkwpO1xuICBjb25zdCBuZXdDb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRBcnJheShpZE1lYWwpO1xuICBjb21tZW50Q3RuLmlubmVySFRNTCA9ICcnO1xuICBjb21tZW50Q3RuLmFwcGVuZENoaWxkKGNyZWF0ZUNvbW1lbnRTZWMobmV3Q29tbWVudHMsIHBvcFVwU2VjdGlvbkNsYXNzZXMpKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNvbW1lbnRQb3BVcCA9IGFzeW5jIChtZWFsQVBpKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnQgPSBhd2FpdCBnZXRDb21tZW50QXJyYXkobWVhbEFQaS5pZE1lYWwpO1xuICB0b2dnbGVCbHVyKCk7XG4gIGNvbnN0IHBvcFVQID0gY3JlYXRlUG9wdXAoJ2RpdicsIHBvcFVwQ2xhc3NlcywgbWVhbEFQaSwgY3JlYXRlQ29tbWVudFNlYyhjb21tZW50LCBwb3BVcFNlY3Rpb25DbGFzc2VzKSxcbiAgICBjcmVhdGVDb21tZW50Rm9ybShtZWFsQVBpLmlkTWVhbCwgcG9zdENvbW1lbnQsIHBvcFVwRm9ybUNsYXNzZXMpKTtcbiAgY29uc3QgcG9wdXBEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKTtcbiAgcG9wdXBEaXYuaW5uZXJIVE1MID0gJyc7XG4gIHBvcHVwRGl2LmFwcGVuZENoaWxkKHBvcFVQKTtcbn07XG5cbmV4cG9ydCB7XG4gIGdldENvbW1lbnRSZXNwb25zZSwgY3JlYXRlQ29tbWVudFBvcFVwLFxufTsiLCJpbXBvcnQgeyBoYW5kbGVQb3N0IH0gZnJvbSAnLi9Qb3N0QVBJLmpzJztcbmltcG9ydCB7XG4gIGNyZWF0ZUFwaUludlVSTCxcbn0gZnJvbSAnLi9jcmVhdGVVUkxBUEkuanMnO1xuaW1wb3J0IHsgaGFuZGxlR0VUQVBJIH0gZnJvbSAnLi9HZXRBUEkuanMnO1xuaW1wb3J0IHsgaW52b2x2ZW1lbnRBUElVcmkgfSBmcm9tICcuL2NvbnN0LmpzJztcblxuY29uc3QgbGlrZXNKc29uID0gYXN5bmMgKGlkKSA9PiAoXG4gIHtcbiAgICBpdGVtX2lkOiBpZCxcbiAgfVxuKTtcblxuY29uc3QgZmluZExpa2VzID0gYXN5bmMgKGlkLCBpbnZBcnIpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gaW52QXJyLmZpbHRlcigoaW52QXJyKSA9PiBpbnZBcnIuaXRlbV9pZCA9PT0gaWQpO1xuICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHJldHVybiByZXN1bHRbMF0ubGlrZXM7XG4gIHJldHVybiAwO1xufTtcblxuY29uc3QgdXBkYXRlTGlrZXNET00gPSBhc3luYyAobm9kZSwgbGlrZXMpID0+IHtcbiAgY29uc3QgbGlrZVRleHQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5hcHAtbGlrZS10ZXh0Jyk7XG4gIGxpa2VUZXh0LnRleHRDb250ZW50ID0gYCR7bGlrZXN9IGxpa2Uke2xpa2VzID4gMSA/ICdzJyA6ICcnfWA7XG4gIGNvbnN0IHVzZVZTRyA9IG5vZGUucXVlcnlTZWxlY3RvcigndXNlJyk7XG4gIGNvbnN0IHN2Z1ZTRyA9IG5vZGUucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG4gIHVzZVZTRy5jbGFzc0xpc3QuYWRkKCdsaWtlcycpO1xuICBzdmdWU0cuY2xhc3NMaXN0LmFkZCgnbGlrZXMnKTtcbiAgdXNlVlNHLnNldEF0dHJpYnV0ZSgnaHJlZicsICcuLi9hc3NldC9yZXNvdXJjZS9pY29ucy5zdmcjaGVhcnQtbGlrZS1yZWQnKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpa2UgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYXJ0LWxpa2UnKSAmJiAhZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGlrZXMnKSkge1xuICAgIGNvbnN0IGN1cnJlbnRJRCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICBjb25zdCB1cmwgPSBjcmVhdGVBcGlJbnZVUkwoaW52b2x2ZW1lbnRBUElVcmkuYmFzZSwgaW52b2x2ZW1lbnRBUElVcmkuYXBwSUQsXG4gICAgICBpbnZvbHZlbWVudEFQSVVyaS5xdWVyeUxpa2UpO1xuICAgIGF3YWl0IGhhbmRsZVBvc3QodXJsLCBhd2FpdCBsaWtlc0pzb24oY3VycmVudElEKSk7XG4gICAgY29uc3QgZGF0YVJlc3BvbnNlSW52ID0gYXdhaXQgaGFuZGxlR0VUQVBJKHVybCk7XG4gICAgY29uc3QgcXR5TGlrZXMgPSBhd2FpdCBmaW5kTGlrZXMoY3VycmVudElELCBkYXRhUmVzcG9uc2VJbnYpO1xuICAgIGNvbnN0IHBydE5kZSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgYXdhaXQgdXBkYXRlTGlrZXNET00ocHJ0TmRlLCBhd2FpdCBxdHlMaWtlcyk7XG4gIH1cbn07XG5cbmNvbnN0IGdldExpa2VzUmVzcG9uc2UgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGludkxpa2VzVVJMID0gY3JlYXRlQXBpSW52VVJMKGludm9sdmVtZW50QVBJVXJpLmJhc2UsIGludm9sdmVtZW50QVBJVXJpLmFwcElELFxuICAgIGludm9sdmVtZW50QVBJVXJpLnF1ZXJ5TGlrZSk7XG4gIGNvbnN0IGRhdGFSZXNwb25zZSA9IGF3YWl0IGhhbmRsZUdFVEFQSShpbnZMaWtlc1VSTCk7XG4gIHJldHVybiBkYXRhUmVzcG9uc2U7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVMaWtlLCBmaW5kTGlrZXMsIGdldExpa2VzUmVzcG9uc2UsXG59OyIsImltcG9ydCB7IGNyZWF0ZUFwaU1lYWxVUkwgfSBmcm9tICcuL2NyZWF0ZVVSTEFQSS5qcyc7XG5pbXBvcnQgeyBoYW5kbGVHRVRBUEkgfSBmcm9tICcuL0dldEFQSS5qcyc7XG5pbXBvcnQgeyBtZWFBUElVcmkgfSBmcm9tICcuL2NvbnN0LmpzJztcblxuY29uc3QgZ2V0TWVhbHNJRFJlc3BvbnNlID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgY29uc3QgbWVhbElEVVJMID0gY3JlYXRlQXBpTWVhbFVSTChtZWFBUElVcmkuYmFzZUxvb2tVcCwgbWVhQVBJVXJpLnF1ZXJ5TG9va1VwLCBkYXRhKTtcbiAgY29uc3QgZGF0YVJlc3BvbnNlID0gYXdhaXQgaGFuZGxlR0VUQVBJKG1lYWxJRFVSTCk7XG4gIHJldHVybiBkYXRhUmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRNZWFsc0NhdFJlc3BvbnNlID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgY29uc3QgbWVhbElEVVJMID0gY3JlYXRlQXBpTWVhbFVSTChtZWFBUElVcmkuYmFzZUZpbHRlciwgbWVhQVBJVXJpLnF1ZXJ5RmlsdGVyLCBhd2FpdCBkYXRhKTtcbiAgY29uc3QgZGF0YVJlc3BvbnNlID0gYXdhaXQgaGFuZGxlR0VUQVBJKG1lYWxJRFVSTCk7XG4gIHJldHVybiBkYXRhUmVzcG9uc2U7XG59O1xuXG5leHBvcnQge1xuICBnZXRNZWFsc0lEUmVzcG9uc2UsIGdldE1lYWxzQ2F0UmVzcG9uc2UsXG59OyIsImNvbnN0IGNvdW50VG90YWxJdGVtID0gKG5vZGUpID0+IG5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xuXG5jb25zdCBhcHBlbmRUb3RhbCA9ICh0b3RhbCwgaWQpID0+IHtcbiAgY29uc3QgaWRTcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICBpZFNwYW4udGV4dENvbnRlbnQgPSBgICgke3RvdGFsfSlgO1xufTtcblxuZXhwb3J0IHtcbiAgY291bnRUb3RhbEl0ZW0sIGFwcGVuZFRvdGFsLFxufTsiLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgR0VUaW5nIGRhdGEgYXMgSlNPTiB3aXRoIGZldGNoLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBVUkwgdG8gR0VUIGRhdGEgdG9cbiAqIEByZXR1cm4ge09iamVjdH0gLSBSZXNwb25zZSBib2R5IGZyb20gVVJMIHRoYXQgd2FzIEdFVGVkXG4gKi9cbmNvbnN0IGZldGNoRGF0YUpTT04gPSBhc3luYyAoVVJMKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVVJMKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgfVxuICBjb25zdCBkYXRhSlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGFKU09OO1xufTtcblxuLyoqXG4gKiBFdmVudCBoYW5kbGVyIGZvciBhIGZvcm0gc3VibWl0IGV2ZW50LlxuICogQHBhcmFtIHtTdWJtaXRFdmVudH0gZXZlbnRcbiAqL1xuY29uc3QgaGFuZGxlR0VUQVBJZXZlbnQgPSBhc3luYyAoZXZlbnQsIHVybCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IGZldGNoRGF0YUpTT04odXJsKTtcbiAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufTtcblxuLyoqXG4gKiBFdmVudCBoYW5kbGVyIGZvciBhIGZvcm0gc3VibWl0IGV2ZW50LlxuICovXG5jb25zdCBoYW5kbGVHRVRBUEkgPSBhc3luYyAodXJsKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgZmV0Y2hEYXRhSlNPTih1cmwpO1xuICAgIHJldHVybiByZXNwb25zZURhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBmZXRjaERhdGFKU09OLCBoYW5kbGVHRVRBUElldmVudCwgaGFuZGxlR0VUQVBJLFxufTsiLCJpbXBvcnQge1xuICBjcmVhdGVFbGVtZW50RGVmYXVsdCwgY3JlYXRlSW1nLCBjcmVhdGVCdXR0b24sIGNyZWF0ZU5TLCBjcmVhdGVMYWJlbCxcbiAgY3JlYXRlVGV4dEFyZWEsIGNyZWF0ZUlucHV0LFxufSBmcm9tICcuL2NyZWF0ZUVsZW1lbnRNb2QuanMnO1xuaW1wb3J0IHsgY291bnRUb3RhbEl0ZW0gfSBmcm9tICcuL0NvdW50VG90YWxJdGVtcy5qcyc7XG5cbmNvbnN0IHRvZ2dsZUJsdXIgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbW9kYWwtYWN0aXZlJyk7XG59O1xuXG5jb25zdCBjbG9zZVBvcCA9ICgpID0+IHtcbiAgdG9nZ2xlQmx1cigpO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcC1pdGVtLXBvcHVwLW92ZXJsYXknKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdXQnKTtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKTtcbiAgc2V0VGltZW91dCgoKSA9PiBwb3B1cC5yZW1vdmVDaGlsZChvdmVybGF5KSwgNDAwKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUl0ZW0gPSAoZWxlbSwgY2xhc3NlcywgbWVhbEFwaSwgeGxpbmssIGxpa2VBcGksXG4gIGNhbGxiYWNrMCA9IGZhbHNlLCBjYWxsYmFjazEgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBkb2NGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBkb2NGcmFnLmFwcGVuZENoaWxkKGNyZWF0ZUltZyhjbGFzc2VzLmltYWdlLCBtZWFsQXBpLnN0ck1lYWwsIG1lYWxBcGkuc3RyTWVhbFRodW1iKSk7XG4gIGNvbnN0IGVsZW1IZWFkZXIgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgnZGl2JywgY2xhc3Nlcy50aXRsZUhlYWRlcik7XG4gIGNvbnN0IHRpdGxlSW1nID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ3AnLCBjbGFzc2VzLmxpa2VzQ3RuLCBtZWFsQXBpLnN0ck1lYWwpO1xuICBlbGVtSGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlSW1nKTtcbiAgY29uc3QgZWxlbUxpa2VzID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ2RpdicsIGNsYXNzZXMubGlrZXNJY29uKTtcbiAgY29uc3QgZWxlbUxpa2VzU1ZHID0gY3JlYXRlTlMoeGxpbmspO1xuICBlbGVtTGlrZXMuYXBwZW5kQ2hpbGQoZWxlbUxpa2VzU1ZHKTtcbiAgY29uc3QgZWxlbUxpa2VzUCA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdwJywgY2xhc3Nlcy5saWtlc1RleHQsIGAke2xpa2VBcGl9IGxpa2Uke2xpa2VBcGkgPiAxID8gJ3MnIDogJyd9YCk7XG4gIGVsZW1MaWtlcy5hcHBlbmRDaGlsZChlbGVtTGlrZXNQKTtcbiAgZWxlbUhlYWRlci5hcHBlbmRDaGlsZChlbGVtTGlrZXMpO1xuICBkb2NGcmFnLmFwcGVuZENoaWxkKGVsZW1IZWFkZXIpO1xuICBjb25zdCBidG5EaXYgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgnZGl2JywgY2xhc3Nlcy5jbGFzc0RpdkJ0bik7XG4gIGNvbnN0IGNvbW1lbnRCdG4gPSBjcmVhdGVCdXR0b24oJ2J1dHRvbicsIGNsYXNzZXMuYnRuQ29tbWVudCwgJ0dvIHRvIENvbW1lbnRzJywgJ0NvbW1lbnRzJyk7XG4gIGlmIChjYWxsYmFjazEpIGNvbW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjazEpO1xuICBidG5EaXYuYXBwZW5kQ2hpbGQoY29tbWVudEJ0bik7XG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24oJ2J1dHRvbicsIGNsYXNzZXMuYnRuUmVzZXJ2ZSwgJ0dvIHRvIFJlc2VydmF0aW9ucycsICdSZXNlcnZhdGlvbnMnKSk7XG4gIGRvY0ZyYWcuYXBwZW5kQ2hpbGQoYnRuRGl2KTtcbiAgY29uc3QgaXRlbUVsZW0gPSBjcmVhdGVFbGVtZW50RGVmYXVsdChlbGVtLCBjbGFzc2VzLmNvbnRhaW5lciwgZmFsc2UsIGRvY0ZyYWcpO1xuICBpdGVtRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBtZWFsQXBpLmlkTWVhbCk7XG4gIGlmIChjYWxsYmFjazApIGl0ZW1FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2swKTtcbiAgcmV0dXJuIGl0ZW1FbGVtO1xufTtcblxuY29uc3QgY3JlYXRlUG9wdXAgPSAoZWxlbSwgY2xhc3NlcywgbWVhbEFwaSwgY2FsbGJhY2sgPSBmYWxzZSwgY2FsbGJhY2syID0gZmFsc2UpID0+IHtcbiAgY29uc3QgZG9jRnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29uc3QgZWxlbUhlYWRlciA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdkaXYnLCBjbGFzc2VzLnRpdGxlSGVhZGVyKTtcbiAgY29uc3QgdGl0bGVQb3AgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgnaDInLCBjbGFzc2VzLnRpdGxlLCBtZWFsQXBpLnN0ck1lYWwpO1xuICBjb25zdCB0aXRsZVggPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgnc3BhbicsIGNsYXNzZXMuZXhpdCwgJ1gnKTtcbiAgdGl0bGVYLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQb3ApO1xuICBlbGVtSGVhZGVyLmFwcGVuZCh0aXRsZVBvcCwgdGl0bGVYKTtcbiAgZG9jRnJhZy5hcHBlbmRDaGlsZChlbGVtSGVhZGVyKTtcbiAgZG9jRnJhZy5hcHBlbmRDaGlsZChjcmVhdGVJbWcoY2xhc3Nlcy5pbWFnZSwgbWVhbEFwaS5zdHJNZWFsLCBtZWFsQXBpLnN0ck1lYWxUaHVtYikpO1xuICBjb25zdCBlbGVtUHJvcCA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdkaXYnLCBjbGFzc2VzLnByb3BlcnRpZXMpO1xuICBjb25zdCBtZWFsTmFtZSA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdwJywgY2xhc3Nlcy5wcm9wZXJ0eSwgYE5hbWU6ICR7bWVhbEFwaS5zdHJNZWFsfWApO1xuICBjb25zdCBtZWFsQ2F0ID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ3AnLCBjbGFzc2VzLnByb3BlcnR5LCBgQ2F0ZWdvcnk6ICR7bWVhbEFwaS5zdHJDYXRlZ29yeX1gKTtcbiAgY29uc3QgbWVhbEFyZWEgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgncCcsIGNsYXNzZXMucHJvcGVydHksIGBBcmVhOiAke21lYWxBcGkuc3RyQXJlYX1gKTtcbiAgY29uc3QgdGFnID0gbWVhbEFwaS5zdHJUYWdzID8gbWVhbEFwaS5zdHJUYWdzLnNwbGl0KCcsJykuam9pbignLCAnKSA6ICdOT05FJztcbiAgY29uc3QgbWVhbFRhZ3MgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgncCcsIGNsYXNzZXMucHJvcGVydHksIGBBcmVhOiAke3RhZ31gKTtcbiAgZWxlbVByb3AuYXBwZW5kKG1lYWxOYW1lLCBtZWFsQ2F0LCBtZWFsQXJlYSwgbWVhbFRhZ3MpO1xuICBkb2NGcmFnLmFwcGVuZENoaWxkKGVsZW1Qcm9wKTtcbiAgY29uc3Qgc2VjQ3RuID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ2RpdicsIGNsYXNzZXMuc2VjdGlvbkN0bik7XG4gIGNvbnN0IGZvcm1DdG4gPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgnZGl2JywgY2xhc3Nlcy5mb3JtQ29udGFpbmVyKTtcbiAgaWYgKGNhbGxiYWNrKSBzZWNDdG4uYXBwZW5kQ2hpbGQoY2FsbGJhY2spO1xuICBpZiAoY2FsbGJhY2syKSBmb3JtQ3RuLmFwcGVuZENoaWxkKGNhbGxiYWNrMik7XG4gIGRvY0ZyYWcuYXBwZW5kKHNlY0N0biwgZm9ybUN0bik7XG4gIGNvbnN0IGl0ZW1FbGVtID0gY3JlYXRlRWxlbWVudERlZmF1bHQoZWxlbSwgY2xhc3Nlcy5jb250YWluZXIsIGZhbHNlLCBkb2NGcmFnKTtcbiAgaXRlbUVsZW0uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgbWVhbEFwaS5pZE1lYWwpO1xuICBjb25zdCBpdGVtQ29udCA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KGVsZW0sIGNsYXNzZXMub3ZlcmxheSwgZmFsc2UsIGl0ZW1FbGVtKTtcbiAgcmV0dXJuIGl0ZW1Db250O1xufTtcblxuY29uc3QgY3JlYXRlQ29tbWVudExpbmUgPSAoZGF0YSwgY2xhc3NMaW5lKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBkYXRhLmNyZWF0aW9uX2RhdGU7XG4gIGNvbnN0IG5hbWUgPSBkYXRhLnVzZXJuYW1lO1xuICBjb25zdCBjb21tZW50SXRlbSA9IGRhdGEuY29tbWVudDtcbiAgY29uc3QgZGF0YVAgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgncCcsIGNsYXNzTGluZSwgYCR7ZGF0ZX0gJHtuYW1lfTogJHtjb21tZW50SXRlbX1gKTtcbiAgcmV0dXJuIGRhdGFQO1xufTtcblxuY29uc3QgY3JlYXRlQ29tbWVudFNlYyA9IChkYXRhQXJyLCBjbGFzc2VzID0gZmFsc2UpID0+IHtcbiAgY29uc3QgZG9jRnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29uc3QgdGl0bGVTcGFuID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ3NwYW4nLCBjbGFzc2VzLnRpdGxlLCAnQ29tbWVudHMnKTtcbiAgY29uc3QgY291bnRlclNwYW4gPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgnc3BhbicsIGNsYXNzZXMudGl0bGVDb3VudGVyKTtcbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgnaDMnLCBjbGFzc2VzLnRpdGxlaGVhZGVyKTtcbiAgY29uc3QgY29tbWVudEN0biA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdkaXYnLCBjbGFzc2VzLnBvc3RDdG4pO1xuICBsZXQgdG90YWxDb21tZW50ID0gY291bnRUb3RhbEl0ZW0oY29tbWVudEN0bik7XG4gIHRpdGxlLmFwcGVuZCh0aXRsZVNwYW4sIGNvdW50ZXJTcGFuKTtcbiAgaWYgKGRhdGFBcnIubGVuZ3RoID09PSAwKSBjb3VudGVyU3Bhbi50ZXh0Q29udGVudCA9IGAgKCR7dG90YWxDb21tZW50fSlgO1xuICBlbHNlIHtcbiAgICBkYXRhQXJyLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIGNvbW1lbnRDdG4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29tbWVudExpbmUoZGF0YSwgY2xhc3Nlcy5wb3N0SXRlbSkpO1xuICAgICAgdG90YWxDb21tZW50ID0gY291bnRUb3RhbEl0ZW0oY29tbWVudEN0bik7XG4gICAgICBjb3VudGVyU3Bhbi50ZXh0Q29udGVudCA9IGAgKCR7dG90YWxDb21tZW50fSlgO1xuICAgIH0pO1xuICB9XG4gIGRvY0ZyYWcuYXBwZW5kKHRpdGxlLCBjb21tZW50Q3RuKTtcbiAgcmV0dXJuIGRvY0ZyYWc7XG59O1xuXG5jb25zdCBjcmVhdGVDb21tZW50Rm9ybSA9IChpZCwgY2FsbGJhY2ssIGNsYXNzTGluZSA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGRvY0ZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGNvbnN0IHRpdGxlRm9ybSA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdoMycsIGNsYXNzTGluZS50aXRsZSwgJ0FkZCBhIGNvbW1lbnQnKTtcbiAgY29uc3QgZm9ybUNvbW1lbnQgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgnZm9ybScsIGNsYXNzTGluZS5mb3JtQ29udGFpbmVyKTtcbiAgZm9ybUNvbW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgY29uc3QgaW5wdUl0ZW1JRCA9IGNyZWF0ZUlucHV0KCd0ZXh0JywgY2xhc3NMaW5lLmlucHV0SGlkZGVuLCAnaXRlbV9pZCcsICdpdGVtX2lkJywgZmFsc2UsIHRydWUsIHRydWUpO1xuICBpbnB1SXRlbUlELnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpZCk7XG4gIGNvbnN0IGxhYmVsVXNlciA9IGNyZWF0ZUxhYmVsKCd1c2VybmFtZScsIGNsYXNzTGluZS5pbnB1dExhYmVsLCAnTmFtZScpO1xuICBjb25zdCBpbnB1dFVzZXIgPSBjcmVhdGVJbnB1dCgndGV4dCcsIGNsYXNzTGluZS5pbnB1dFJlZywgJ3VzZXJuYW1lJywgJ3VzZXJuYW1lJywgJ1BsZWFzZSBpbnB1dCB5b3VyIG5hbWUnLCB0cnVlLCBmYWxzZSk7XG4gIGNvbnN0IHVzZXJEaXYgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgnZGl2JywgY2xhc3NMaW5lLmlucHV0RGl2LCBmYWxzZSwgbGFiZWxVc2VyKTtcbiAgdXNlckRpdi5hcHBlbmRDaGlsZChpbnB1dFVzZXIpO1xuICBjb25zdCBsYWJlbENvbW1lbnQgPSBjcmVhdGVMYWJlbCgnY29tbWVudCcsIGNsYXNzTGluZS5pbnB1dExhYmVsLCAnQ29tbWVudCcpO1xuICBjb25zdCBjb21tZW50QXJlYSA9IGNyZWF0ZVRleHRBcmVhKCcyNTAnLCBjbGFzc0xpbmUudGV4dEFyZWEsICdjb21tZW50JywgJ2NvbW1lbnQnLCAnUGxlYXNlIGlucHV0IHlvdXIgY29tbWVudCcsIHRydWUpO1xuICBjb25zdCBjb21tZW50RGl2ID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ2RpdicsIGNsYXNzTGluZS5pbnB1dERpdiwgZmFsc2UsIGxhYmVsQ29tbWVudCk7XG4gIGNvbW1lbnREaXYuYXBwZW5kQ2hpbGQoY29tbWVudEFyZWEpO1xuICBjb25zdCBzdWJtaXRCdG4gPSBjcmVhdGVCdXR0b24oJ3N1Ym1pdCcsIGNsYXNzTGluZS5idXR0b24sICdTdWJtaXQgY29tbWVudCcsICdTdWJtaXQnKTtcbiAgZm9ybUNvbW1lbnQuYXBwZW5kKGlucHVJdGVtSUQsIHVzZXJEaXYsIGNvbW1lbnREaXYsIHN1Ym1pdEJ0bik7XG4gIGZvcm1Db21tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGNhbGxiYWNrKTtcbiAgZG9jRnJhZy5hcHBlbmQodGl0bGVGb3JtLCBmb3JtQ29tbWVudCk7XG4gIHJldHVybiBkb2NGcmFnO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlSXRlbSwgY3JlYXRlUG9wdXAsIGNyZWF0ZUNvbW1lbnRTZWMsIGNyZWF0ZUNvbW1lbnRGb3JtLCB0b2dnbGVCbHVyLFxufTsiLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgUE9TVGluZyBkYXRhIGFzIEpTT04gd2l0aCBmZXRjaC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFVSTCB0byBQT1NUIGRhdGEgdG9cbiAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhIC0gYEZvcm1EYXRhYCBpbnN0YW5jZVxuICogQHBhcmFtIHtKU09OfSBqc29uRm9ybWF0IC0ganNvbiBvYmplY3QgdG8gYmUgcGFzc2VkIGFzIGJvZHkgb2YgZmV0Y2ggYXBpLlxuICogQHJldHVybiB7T2JqZWN0fSAtIFJlc3BvbnNlIGJvZHkgZnJvbSBVUkwgdGhhdCB3YXMgUE9TVGVkIHRvXG4gKi9cbmNvbnN0IHBvc3REYXRhQXNKc29uID0gYXN5bmMgKHsgdXJsLCBmb3JtRGF0YSA9IGZhbHNlLCBqc29uRm9ybWF0ID0gZmFsc2UgfSkgPT4ge1xuICBsZXQganNvbkRhdGE7XG4gIGlmIChmb3JtRGF0YSkge1xuICAgIGpzb25EYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhLmVudHJpZXMoKSk7XG4gIH0gZWxzZSBpZiAoanNvbkZvcm1hdCkganNvbkRhdGEgPSBqc29uRm9ybWF0O1xuICBjb25zdCBKc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpO1xuICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpzb25TdHJpbmcsXG4gIH07XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGZldGNoT3B0aW9ucyk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuLyoqXG4gKiBFdmVudCBoYW5kbGVyIGZvciBhIGZvcm0gc3VibWl0IGV2ZW50LlxuICogQHBhcmFtIHtTdWJtaXRFdmVudH0gZXZlbnRcbiAqL1xuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jIChldmVudCwgdXJsKSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHNjb3JlRm9ybSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gIHRyeSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoc2NvcmVGb3JtKTtcbiAgICBzY29yZUZvcm0ucmVzZXQoKTtcbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCBwb3N0RGF0YUFzSnNvbih7IHVybCwgZm9ybURhdGEgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbi8qKlxuICogRXZlbnQgaGFuZGxlciBmb3IgYSBmb3JtIHN1Ym1pdCBldmVudC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7SlNPTn0ganNvblxuICovXG5jb25zdCBoYW5kbGVQb3N0ID0gYXN5bmMgKHVybCwganNvbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHBvc3REYXRhQXNKc29uKHsgdXJsLCBmb3JtRGF0YTogZmFsc2UsIGpzb25Gb3JtYXQ6IGpzb24gfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIGhhbmRsZUZvcm1TdWJtaXQsIHBvc3REYXRhQXNKc29uLCBoYW5kbGVQb3N0LFxufTsiLCJjb25zdCBpdGVtQ2xhc3NlcyA9IHtcbiAgY29udGFpbmVyOiAnYXBwLWl0ZW0nLFxuICBpbWFnZTogJ2FwcC1pbWcnLFxuICB0aXRsZUhlYWRlcjogJ2FwcC10aXRsZS1kaXYnLFxuICBsaWtlc0N0bjogJ2FwcC1saWtlJyxcbiAgbGlrZXNJY29uOiAnYXBwLWxpa2Utc3ZnJyxcbiAgbGlrZXNUZXh0OiAnYXBwLWxpa2UtdGV4dCcsXG4gIGJ0bkN0bjogJ2FwcC1kaXYtYnRuJyxcbiAgYnRuQ29tbWVudDogWydhcHAtYnRuJywgJ2NvbW1lbnQnXSxcbiAgYnRuUmVzZXJ2ZTogWydhcHAtYnRuJywgJ3Jlc2VydmF0aW9uJ10sXG59O1xuXG5jb25zdCBwb3BVcENsYXNzZXMgPSB7XG4gIGNvbnRhaW5lcjogJ2FwcC1pdGVtLXBvcHVwJyxcbiAgaW1hZ2U6ICdhcHAtaW1nLXBvcCcsXG4gIHRpdGxlSGVhZGVyOiAnYXBwLXRpdGxlLWhlYWRlcicsXG4gIHByb3BlcnRpZXM6ICdhcHAtcHJvcGVydHknLFxuICBwcm9wZXJ0eTogJ2FwcC1wcm9wJyxcbiAgZXhpdDogJ2FwcC1leGl0JyxcbiAgb3ZlcmxheTogJ2FwcC1pdGVtLXBvcHVwLW92ZXJsYXknLFxuICB0aXRsZTogJ2FwcC10aXRsZS1wb3AnLFxuICBzZWN0aW9uQ3RuOiAnYXBwLXNlYy1jdG4nLFxuICBmb3JtQ29udGFpbmVyOiAnYXBwLWZvcm0tc2VjLWN0bicsXG59O1xuXG5jb25zdCBwb3BVcFNlY3Rpb25DbGFzc2VzID0ge1xuICBjb250YWluZXI6ICdhcHAtc2VjLWN0bicsXG4gIHRpdGxlaGVhZGVyOiAnYXBwLXNlY3Rpb24taGVhZGVyJyxcbiAgdGl0bGU6ICdhcHAtc2VjdGlvbi10aXRsZScsXG4gIHRpdGxlQ291bnRlcjogWydhcHAtc2VjdGlvbi10aXRsZScsICdhcHAtc2VjdGlvbi1jb3VudGVyJ10sXG4gIHBvc3RDdG46ICdhcHAtc2VjdGlvbi1jdG4nLFxuICBwb3N0SXRlbTogJ2FwcC1zZWN0aW9uLWl0ZW0nLFxufTtcblxuY29uc3QgcG9wVXBGb3JtQ2xhc3NlcyA9IHtcbiAgY29udGFpbmVyOiAnYXBwLWZvcm0tc2VjLWN0bicsXG4gIHRpdGxlOiAnYXBwLWZvcm0tdGl0bGUnLFxuICBmb3JtQ29udGFpbmVyOiAnYXBwLWZvcm0tY3RuJyxcbiAgaW5wdXRIaWRkZW46ICdhcHAtZm9ybS1pbnB1dC1oaWRkZW4nLFxuICBpbnB1dERpdjogJ2FwcC1mb3JtLWlucHV0LWRpdicsXG4gIGlucHV0TGFiZWw6ICdhcHAtZm9ybS1pbnB1dC1sYWJlbCcsXG4gIGlucHV0UmVnOiAnYXBwLWZvcm0taW5wdXQtcmVnJyxcbiAgdGV4dEFyZWE6ICdhcHAtZm9ybS10ZXh0QXJlYScsXG4gIGJ1dHRvbjogJ2FwcC1idG4nLFxufTtcblxuY29uc3QgeGxpbmsgPSAnLi4vYXNzZXQvcmVzb3VyY2UvaWNvbnMuc3ZnI2hlYXJ0LWxpa2UnO1xuXG5jb25zdCBtZWFBUElVcmkgPSB7XG4gIGJhc2VGaWx0ZXI6ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvZmlsdGVyLnBocD8nLFxuICBiYXNlTG9va1VwOiAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/JyxcbiAgcXVlcnlMb29rVXA6ICdpJyxcbiAgcXVlcnlGaWx0ZXI6ICdjJyxcbn07XG5cbmNvbnN0IGludm9sdmVtZW50QVBJVXJpID0ge1xuICBiYXNlOiAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJyxcbiAgcXVlcnlMaWtlOiAnbGlrZXMvJyxcbiAgcXVlcnlDb21tZW50OiAnY29tbWVudHMnLFxuICBxdWVyeVJlc2VydmU6ICdyZXNlcnZhdGlvbnMnLFxuICBhcHBJRDogJ1diZTNJem5RMkxRb0ZQSG1WcndwJyxcbn07XG5cbmV4cG9ydCB7XG4gIHhsaW5rLCBwb3BVcFNlY3Rpb25DbGFzc2VzLCBpdGVtQ2xhc3NlcywgcG9wVXBDbGFzc2VzLCBwb3BVcEZvcm1DbGFzc2VzLFxuICBtZWFBUElVcmksIGludm9sdmVtZW50QVBJVXJpLFxufTsiLCJjb25zdCByZWRpcmVjdFdpbmRvdyA9IChocmVmKSA9PiB7XG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbn07XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gYWRkIGNsYXNzIG9yIGNsYXNzZXMgdG8gSFRNTCBFbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIEhUTUwgRWxlbWVudCB0byBiZSBtb2RpZmllZC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc2VzIFN0cmluZyBvciBBcnJheSBvZiBTdHJpbmcgdG8gYmUgYWRkZWQuXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFJldHVybnMgSFRNTCBlbGVtZW50IHdpdGggY2hvc2VuIGNsYXNzZXMuXG4gKi9cbmNvbnN0IGFkZENsYXNzID0gKGVsZW0sIGNsYXNzZXMpID0+IHtcbiAgaWYgKCh0eXBlb2YgY2xhc3NlcykgPT09ICdzdHJpbmcnKSBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3Nlcyk7XG4gIGVsc2UgaWYgKCh0eXBlb2YgY2xhc3NlcykgPT09ICdvYmplY3QnKSBlbGVtLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gIHJldHVybiBlbGVtO1xufTtcblxuLyoqXG4gKiBGdW5jdGlvbiB0byBjcmVhdGUgSFRNTCBlbGVtZW50IHVzaW5nIHRhZyBuYW1lcy5cbiAqIENsYXNzZXMgYW5kIHRleHQgY29udGVudCBjYW4gYmUgYWRkZWQgYXMgZWxlbWVudCBpcyBjcmVhdGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZWxlbSBUYWcgbmFtZSBvZiB0aGUgZWxlbWVudCB0byBiZSBjcmVhdGVkLiBFeGFtcGxlOiBgZGl2LCBwLCBzZWN0aW9uYFxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzZXMgTmFtZSBvZiBjbGFzcyBvciBjbGFzc2VzIHRvIGFkZC4gU3RyaW5nLCBhcnJheSBvZiBzdHJpbmcgc2hvdWxkIGJlIHVzZWQuXG4gKiBJZiBubyBjbGFzcyBpcyB3YW50ZWQsIGZhbHNlIHNob3VsZCBiZSB1c2UuT3B0aW9uYWwgUGFyYW1lbnRlci5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0Q29udGV4dCBUZXh0IHRvIGJlIGFkZGVkIGFzIHRleHQgY29udGVudCB0byBIVE1MIGVsZW1lbnQuXG4gKiBPcHRpb24gcGFyYW1ldGVyLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaW5uZXJDaGlsZCBIVE1MIEVsZW1lbnQgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gUmV0dXJucyBIVE1MIGVsZW1lbnQgY2hvc2VuIHdpdGggc2V0IGF0dHJpYnV0ZXMuXG4gKi9cbmNvbnN0IGNyZWF0ZUVsZW1lbnREZWZhdWx0ID0gKGVsZW0sIGNsYXNzZXMgPSBmYWxzZSwgdGV4dENvbnRlbnQgPSBmYWxzZSwgaW5uZXJDaGlsZCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW0pO1xuICBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc2VzKTtcbiAgaWYgKHRleHRDb250ZW50KSBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIGlmIChpbm5lckNoaWxkKSBlbGVtZW50LmFwcGVuZENoaWxkKGlubmVyQ2hpbGQpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBIVE1MIHN2ZyBlbGVtZW50IHRvIGJlIHJlbmRlcmVkIGRpbmFtaWNhbGx5XG4gKiBAcGFyYW0ge3N0cmluZ30gaHJlZiBIeXBlcmxpbmsgcmVmZXJlbmNlIGZvciBmaWxlIGxvY2F0aW9uXG4gKiBAcmV0dXJucyB7SFRNTE9yU1ZHRWxlbWVudH0gSFRNTCBzdmcgZWxlbWVudCB0byBiZSBhcHBlbmQgdG8gRE9NIHRvIGJlIHJlbmRlcmVkIGRpbmFtaWNhbGx5XG4gKi9cbmNvbnN0IGNyZWF0ZU5TID0gKGhyZWYpID0+IHtcbiAgY29uc3QgeGxpbmsgPSBocmVmLnNwbGl0KCcjJyk7XG4gIGNvbnN0IHVzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndXNlJyk7XG4gIHVzZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgJHtocmVmfWApO1xuICB1c2UuY2xhc3NMaXN0LmFkZCh4bGlua1sxXSk7XG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gIHN2Zy5hcHBlbmRDaGlsZCh1c2UpO1xuICBzdmcuY2xhc3NMaXN0LmFkZCh4bGlua1sxXSk7XG4gIHJldHVybiBzdmc7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBIVE1MIGxhYmVsIGVsZW1lbnQgd2l0aCBhIGZvciBhdHRyaWJ1dGUsIGRpZmZlcmV0ZSBjbGFzc2VzIGFuZCBpbm5lciBjaGlsZCBhbmQgdHh0XG4gKiBjb250ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gZm9yQXRyPWZhbHNlIEZvciBhdHRyaWJ1dGUgaW4gbGFiZWwgdGhhdCBpbmRpY2F0ZXMgd2hpY2ggaW5wdXQgb3IgdGV4dCBhcmVhXG4gKiBpdCBpcyBsaW5rZWQgd2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzZXM9ZmFsc2UgU3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZyB3aXRoIGNsYXNzIG5hbWVzXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dENvbnRlbnQ9ZmFsc2UgU3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBsYWJlbFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaW5uZXJDaGlsZD1mYWxzZSBIVE1MIGVsZW1lbnQgdG8gYmUgYXBwZW5kIHRvIGxhYmVsXG4gKiBAcmV0dXJucyB7SFRNTExhYmVsRWxlbWVudH0gSFRNTCBsYWJlbCBlbGVtZW50IHJlYWR5IHRvIGJlIGFwcGVuZCB0byB0aGUgZG9tXG4gKi9cbmNvbnN0IGNyZWF0ZUxhYmVsID0gKGZvckF0ciA9IGZhbHNlLCBjbGFzc2VzID0gZmFsc2UsIHRleHRDb250ZW50ID0gZmFsc2UsIGlubmVyQ2hpbGQgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdsYWJlbCcsIGNsYXNzZXMsIHRleHRDb250ZW50LCBpbm5lckNoaWxkKTtcbiAgaWYgKGZvckF0cikgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBmb3JBdHIpO1xuICByZXR1cm4gbGFiZWw7XG59O1xuXG5jb25zdCBjcmVhdGVUZXh0QXJlYSA9IChsZW5ndGggPSBmYWxzZSwgY2xhc3NlcyA9IGZhbHNlLFxuICBpZCA9IGZhbHNlLCBuYW1lID0gZmFsc2UsIHBsYWNlaG9sZGVyID0gZmFsc2UsIHJlcXVpcmVkID0gZmFsc2UpID0+IHtcbiAgY29uc3QgdGV4dEFyZWEgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgndGV4dGFyZWEnLCBjbGFzc2VzKTtcbiAgaWYgKGxlbmd0aCkgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCBsZW5ndGgpO1xuICBpZiAoaWQpIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIGlmIChuYW1lKSB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcbiAgaWYgKHBsYWNlaG9sZGVyKSB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xuICBpZiAocmVxdWlyZWQpIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpO1xuICBlbHNlIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnZmFsc2UnKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdzcGVsbGNoZWNrJywgJ3RydWUnKTtcbiAgcmV0dXJuIHRleHRBcmVhO1xufTtcblxuY29uc3QgY3JlYXRlSW5wdXQgPSAodHlwZSA9IGZhbHNlLCBjbGFzc2VzID0gZmFsc2UsXG4gIGlkID0gZmFsc2UsIG5hbWUgPSBmYWxzZSwgcGxhY2Vob2xkZXIgPSBmYWxzZSwgcmVxdWlyZWQgPSBmYWxzZSwgcmVhZG9ubHkgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBpbnB1dCA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdpbnB1dCcsIGNsYXNzZXMpO1xuICBpZiAodHlwZSkgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gIGlmIChpZCkgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgaWYgKG5hbWUpIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuICBpZiAocGxhY2Vob2xkZXIpIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlcik7XG4gIGlmIChyZXF1aXJlZCkgaW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICd0cnVlJyk7XG4gIGlmIChyZWFkb25seSkgaW5wdXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICd0cnVlJyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsICd0cnVlJyk7XG4gIHJldHVybiBpbnB1dDtcbn07XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gY3JlYXRlIEhUTUwgQnV0dG9uIGVsZW1lbnQuIENsYXNzZXMgYW5kIHRleHQgY29udGVudFxuICogY2FuIGJlIGFkZGVkIGFzIGVsZW1lbnQgaXMgY3JlYXRlLiBDbGljayBldmVudCB0byBhIGFub3RoZXIgd2VicGFnZSBjYW4gYmUgYWRkZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gZnVuYyBUeXBlIG9mIGJ1dHRvbiBgc3VtYml0LCByZXNldCwgYnV0dG9uYFxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzZXMgTmFtZSBvZiBjbGFzcyBvciBjbGFzc2VzIHRvIGFkZC4gU3RyaW5nLCBhcnJheSBvZiBzdHJpbmcgc2hvdWxkIGJlIHVzZWQuXG4gKiBJZiBubyBjbGFzcyBpcyB3YW50ZWQsIGZhbHNlIHNob3VsZCBiZSB1c2UuT3B0aW9uYWwgUGFyYW1lbnRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcmlhTGFiZWwgVGV4dCBmb3IgYWNjZXNzaWJpbGl0eVxuICogQHBhcmFtIHthbnl9IHRleHRDb250ZW50IFRleHQgdG8gYmUgYWRkZWQgYXMgdGV4dCBjb250ZW50IHRvIEhUTUwgZWxlbWVudC5cbiAqIE9wdGlvbiBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpbm5lckNoaWxkIEhUTUwgRWxlbWVudCB0byBiZSBhcHBlbmRlZFxuICogQHBhcmFtIHthbnl9IGhyZWYgSHlwZXJsaW5rIHJlZmVyZW5jZSB0byBiZSBmb2xsb3dlZCBpZiBidXR0b24gaXMgY2xpY2tlZC5cbiAqIE9wdGlvbiBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7SFRNTEJ1dHRvbkVsZW1lbnR9IFJldHVybnMgSFRNTCBidXR0b24gZWxlbWVudCBjaG9zZW4gd2l0aCBzZXQgYXR0cmlidXRlcy5cbiAqL1xuY29uc3QgY3JlYXRlQnV0dG9uID0gKGZ1bmMsIGNsYXNzZXMsIGFyaWFMYWJlbCwgdGV4dENvbnRlbnQgPSBmYWxzZSxcbiAgaW5uZXJDaGlsZCA9IGZhbHNlLCBocmVmID0gZmFsc2UpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi50eXBlID0gZnVuYztcbiAgYnV0dG9uLmFyaWFMYWJlbCA9IGFyaWFMYWJlbDtcbiAgYWRkQ2xhc3MoYnV0dG9uLCBjbGFzc2VzKTtcbiAgaWYgKHRleHRDb250ZW50KSBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgaWYgKGhyZWYpIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWRpcmVjdFdpbmRvdyhocmVmKSk7XG4gIH1cbiAgaWYgKGlubmVyQ2hpbGQpIGJ1dHRvbi5hcHBlbmRDaGlsZChpbm5lckNoaWxkKTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZUltZyA9IChjbGFzc2VzLCBuYW1lLCB1cmwpID0+IHtcbiAgY29uc3QgaW1nRWxlbSA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdpbWcnLCBjbGFzc2VzKTtcbiAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHVybCk7XG4gIGltZ0VsZW0uc2V0QXR0cmlidXRlKCdhbHQnLCBuYW1lKTtcbiAgcmV0dXJuIGltZ0VsZW07XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVMYWJlbCwgY3JlYXRlSW1nLCBjcmVhdGVOUywgY3JlYXRlVGV4dEFyZWEsXG4gIGFkZENsYXNzLCBjcmVhdGVFbGVtZW50RGVmYXVsdCwgY3JlYXRlQnV0dG9uLCBjcmVhdGVJbnB1dCxcbn07XG4iLCJjb25zdCBjcmVhdGVBcGlNZWFsVVJMID0gKGJhc2V1cmwsIHF1ZXJ5S2V5LCBxdWVyeVZhbHVlKSA9PiB7XG4gIGNvbnN0IHVybCA9IGAke2Jhc2V1cmx9JHtxdWVyeUtleX09JHtxdWVyeVZhbHVlfWA7XG4gIHJldHVybiB1cmw7XG59O1xuXG5jb25zdCBjcmVhdGVBcGlJbnZVUkwgPSAoYmFzZXVybCwgaWQsIGVuZHBvaW50KSA9PiB7XG4gIGNvbnN0IHVybCA9IGAke2Jhc2V1cmx9JHtpZH0ke2VuZHBvaW50fWA7XG4gIHJldHVybiB1cmw7XG59O1xuXG5jb25zdCBjcmVhdGVBcGlJbnZRdWVyeVVSTCA9IChiYXNldXJsLCBpZCwgZW5kcG9pbnQsIHF1ZXJ5KSA9PiB7XG4gIGNvbnN0IHVybCA9IGAke2Jhc2V1cmx9JHtpZH0ke2VuZHBvaW50fT9pdGVtX2lkPSR7cXVlcnl9YDtcbiAgcmV0dXJuIHVybDtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUFwaU1lYWxVUkwsIGNyZWF0ZUFwaUludlVSTCwgY3JlYXRlQXBpSW52UXVlcnlVUkwsXG59OyIsImltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tICcuL0xpc3RJdGVtTW9kLmpzJztcbmltcG9ydCB7IGl0ZW1DbGFzc2VzLCB4bGluayB9IGZyb20gJy4vY29uc3QuanMnO1xuaW1wb3J0IHsgY3JlYXRlTGlrZSwgZmluZExpa2VzLCBnZXRMaWtlc1Jlc3BvbnNlIH0gZnJvbSAnLi9BUElMaWtlSGFuZGxpbmcuanMnO1xuaW1wb3J0IHsgZ2V0TWVhbHNJRFJlc3BvbnNlLCBnZXRNZWFsc0NhdFJlc3BvbnNlIH0gZnJvbSAnLi9BUElNZWFsc0hhbmRsaW5nLmpzJztcbmltcG9ydCB7IGNyZWF0ZUNvbW1lbnRQb3BVcCB9IGZyb20gJy4vQVBJQ29tbWVudHNIYW5kbGluZy5qcyc7XG5pbXBvcnQgeyBjb3VudFRvdGFsSXRlbSwgYXBwZW5kVG90YWwgfSBmcm9tICcuL0NvdW50VG90YWxJdGVtcy5qcyc7XG5cbmNvbnN0IGFwcGVuZFJlc3BvbnNlRmVlZGJhY2sgPSBhc3luYyAobm9kZSkgPT4ge1xuICBjb25zdCBzaG93UmVzcG9uc2VGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1GZWVkYmFjaycpO1xuICBzaG93UmVzcG9uc2VGb3JtLnRleHRDb250ZW50ID0gbm9kZTtcbn07XG5cbmNvbnN0IGdldENhdGVnb3J5SXRlbXMgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgY29uc3QgY2F0SUQgPSBhd2FpdCBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gIHJldHVybiBjYXRJRDtcbn07XG5cbmNvbnN0IGFwcGVuZExpc3RJdGVtcyA9IGFzeW5jIChkYXRhQXJyLCBpbnZBcnIsIElEKSA9PiB7XG4gIGNvbnN0IGFwcEN0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAtY3RuJyk7XG4gIGFwcEN0bi5pbm5lckhUTUwgPSAnJztcbiAgZGF0YUFyci5mb3JFYWNoKGFzeW5jIChkYXRhKSA9PiB7XG4gICAgY29uc3QgbWVhbERhdGEgPSBhd2FpdCBnZXRNZWFsc0lEUmVzcG9uc2UoZGF0YS5pZE1lYWwpO1xuICAgIGNvbnN0IG1lYWxGcmFnID0gY3JlYXRlSXRlbSgnbGknLCBpdGVtQ2xhc3NlcywgbWVhbERhdGEubWVhbHNbMF0sIHhsaW5rLCBhd2FpdCBmaW5kTGlrZXMobWVhbERhdGEubWVhbHNbMF0uaWRNZWFsLCBpbnZBcnIpLFxuICAgICAgY3JlYXRlTGlrZSwgKCkgPT4gY3JlYXRlQ29tbWVudFBvcFVwKG1lYWxEYXRhLm1lYWxzWzBdKSk7XG4gICAgYXBwQ3RuLmFwcGVuZENoaWxkKG1lYWxGcmFnKTtcbiAgICBjb25zdCB0b3RhbCA9IGNvdW50VG90YWxJdGVtKGFwcEN0bik7XG4gICAgYXBwZW5kVG90YWwodG90YWwsIElEKTtcbiAgfSk7XG4gIGFwcGVuZFJlc3BvbnNlRmVlZGJhY2soJ1BsZWFzZSBTZWxlY3QgYSBNZWFsJyk7XG59O1xuXG5jb25zdCBwcmludExpc3RJdGVtcyA9IGFzeW5jIChldmVudCkgPT4ge1xuICBjb25zdCBjYXRJRCA9IGF3YWl0IGdldENhdGVnb3J5SXRlbXMoZXZlbnQpO1xuICBjb25zdCBkYXRhUmVzcG9uc2VNZWFsID0gYXdhaXQgZ2V0TWVhbHNDYXRSZXNwb25zZShjYXRJRCk7XG4gIGNvbnN0IGRhdGFSZXNwb25zZUludiA9IGF3YWl0IGdldExpa2VzUmVzcG9uc2UoKTtcbiAgaWYgKGRhdGFSZXNwb25zZU1lYWwgaW5zdGFuY2VvZiBFcnJvciB8fCBkYXRhUmVzcG9uc2VJbnYgaW5zdGFuY2VvZiBFcnJvcikgYXBwZW5kUmVzcG9uc2VGZWVkYmFjaygnVW5hYmxlIHRvIEZldGNoIERhdGEnKTtcbiAgZWxzZSBhd2FpdCBhcHBlbmRMaXN0SXRlbXMoZGF0YVJlc3BvbnNlTWVhbC5tZWFscywgZGF0YVJlc3BvbnNlSW52LCBjYXRJRCk7XG59O1xuXG5leHBvcnQge1xuICBwcmludExpc3RJdGVtcywgeGxpbmssXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==