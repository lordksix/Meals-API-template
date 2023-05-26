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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --svg-side: clamp(16px, (100vw - 320px) * 1000, clamp(20px, (100vw - 640px) * 1000, clamp(25px, (100vw - 1280px) * 1000, 30px)));\n  --font-size: calc(var(--svg-side) * 0.8);\n  --bckgrd-0: #fff0;\n  --bg-modal: #c1c7d0be;\n  --bckgrd: #fff;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nul,\nli {\n  list-style-type: none;\n}\n\nbody {\n  background-color: #6e6ce9;\n  font-family: 'Pangolin', 'Merriweather', serif, cursive;\n  min-height: 100vh;\n  display: flex;\n  flex-flow: column;\n  padding: 5px;\n}\n\n.svg {\n  margin-block: auto;\n}\n\n.modal-active .modal-bg {\n  filter: blur(5px);\n}\n\n/* Navbar */\n\n.nav-bar {\n  background-color: #848bf1;\n  padding: 2%;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.logo {\n  height: calc(var(--svg-side) * 2);\n}\n\n.nav-list {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.nav-items {\n  list-style: none;\n  color: white;\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin-top: 15px;\n  margin-right: 3rem;\n}\n\n.nav-items a {\n  text-decoration: none;\n  color: black;\n}\n\n.active {\n  font-weight: bolder;\n}\n\n/* Footer */\n\n.extremity {\n  padding-block: 10px;\n  padding-inline: 20px;\n  border: 2px solid black;\n  display: flex;\n  justify-content: space-between;\n}\n\n.footer-row {\n  display: flex;\n  gap: 10px;\n}\n\n.app-item svg,\n.footer-row svg,\n.app-item use,\n.footer-row use {\n  height: var(--svg-side);\n  width: var(--svg-side);\n}\n\n/* Main App */\n\nmain {\n  height: auto;\n  flex-grow: 1;\n  padding: 20px;\n}\n\n#formFeedback {\n  text-align: center;\n  font-size: 2rem;\n}\n\n/* Item Container */\n\n#app-ctn {\n  --n: 2;\n  --w: 350px;\n  --n1: 3;\n  --w1: 700px;\n  --n2: 4;\n  --w2: 1050px;\n\n  display: grid;\n  column-gap: 30px;\n  row-gap: 30px;\n  grid-template-columns: repeat(auto-fit, minmax(clamp(clamp(clamp(100%/(var(--n2) + 1) + 0.1%, (var(--w2) - 100vw) * 1000, 100%/(var(--n1) + 1) + 0.1%), (var(--w1) - 100vw) * 1000, 100%/(var(--n) + 1) + 0.1%), (var(--w) - 100vw) * 1000, 100%), 3fr));\n  padding-block: 50px;\n  padding-inline: 20px;\n  max-width: 1200px;\n  margin-inline: auto;\n}\n\n.app-item {\n  padding: 5%;\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n  background-color: #848bf1;\n  border-radius: 10px;\n}\n\n.app-img {\n  width: 80%;\n  height: auto;\n  margin-inline: auto;\n}\n\n.app-title-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-inline: 5%;\n}\n\n.app-div-btn {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15%;\n  justify-content: center;\n}\n\n.app-like-text {\n  text-align: center;\n}\n\n.app-like-svg {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  gap: 5px;\n}\n\n.app-btn {\n  padding-inline: 10px;\n  padding-block: 5px;\n  z-index: 1;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.app-btn:hover {\n  background-color: rgb(114, 46, 46);\n}\n\n/* Pop-up */\n\n.app-item-popup-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  background-color: var(--bckgrd-0);\n  top: 0;\n  left: 0;\n  z-index: 20;\n  padding-inline: 20vw;\n  padding-block: 2.5vh 15vh;\n  animation: fadeInProject 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n\n.app-item-popup-overlay.out {\n  animation: fadeOutProject 0.3s ease-out forwards;\n}\n\n@keyframes fadeInProject {\n  0% {\n    z-index: -3;\n    background: var(--bckgrd-0);\n  }\n\n  100% {\n    z-index: 20;\n    background: var(--bg-modal);\n  }\n}\n\n@keyframes fadOutnProject {\n  0% {\n    z-index: 20;\n    background: var(--bg-modal);\n  }\n\n  100% {\n    z-index: -3;\n    background: var(--bckgrd-0);\n  }\n}\n\n.app-item-popup {\n  padding-inline: 5%;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  background-color: var(--bckgrd);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  padding-block: 2.5% 5%;\n  max-width: 500px;\n  margin-inline: auto;\n  gap: 10px;\n  transform: scale(0.3);\n  animation: scaleUpProject 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n\n.out .app-item-popup {\n  animation: scaleDownProject 0.3s ease-out forwards;\n}\n\n@keyframes scaleUpProject {\n  0% {\n    transform: scale(0.3) translateY(1000px);\n    opacity: 0;\n  }\n\n  100% {\n    transform: scale(1) translateY(0);\n    opacity: 100%;\n  }\n}\n\n@keyframes scaleDownProject {\n  0% {\n    transform: scale(1) translateY(0);\n    opacity: 100%;\n  }\n\n  100% {\n    transform: scale(0.3) translateY(1000px);\n    opacity: 0;\n  }\n}\n\n.app-exit,\n.app-title-pop {\n  font-weight: bolder;\n}\n\n.app-exit {\n  font-size: 2rem;\n  text-align: right;\n  cursor: pointer;\n}\n\n.app-property {\n  --wap: 800px;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(clamp(100%/3 + 0.1%, (var(--wap) - 100vw) * 1000, 100%), 1fr));\n  column-gap: 10px;\n  row-gap: 10px;\n}\n\n.app-img-pop {\n  width: 25vw;\n  height: auto;\n  margin-inline: auto;\n  max-width: 350px;\n}\n\n.app-title-header {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n}\n\n/* Comments and Reservation Section */\n\n.app-section-header {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.app-section-ctn {\n  height: 14vh;\n  overflow-y: scroll;\n}\n\n/* Comments and Reservation Form */\n\n.app-form-title {\n  text-align: center;\n}\n\n.app-form-ctn {\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n}\n\n.app-form-input-div {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  padding-inline: 0 5%;\n}\n\n.app-form-input-hidden {\n  display: none;\n}\n\n.app-form-input-reg,\n.app-form-textArea {\n  padding-inline: 7px;\n  padding-block: 5px;\n  z-index: 1;\n  border-radius: 10px;\n}\n\n.app-form-textArea {\n  resize: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --svg-side: clamp(16px, (100vw - 320px) * 1000, clamp(20px, (100vw - 640px) * 1000, clamp(25px, (100vw - 1280px) * 1000, 30px)));\n  --font-size: calc(var(--svg-side) * 0.8);\n  --bckgrd-0: #fff0;\n  --bg-modal: #c1c7d0be;\n  --bckgrd: #fff;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nul,\nli {\n  list-style-type: none;\n}\n\nbody {\n  background-color: #6e6ce9;\n  font-family: 'Pangolin', 'Merriweather', serif, cursive;\n  min-height: 100vh;\n  display: flex;\n  flex-flow: column;\n  padding: 5px;\n}\n\n.svg {\n  margin-block: auto;\n}\n\n.modal-active .modal-bg {\n  filter: blur(5px);\n}\n\n/* Navbar */\n\n.nav-bar {\n  background-color: #848bf1;\n  padding: 2%;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.logo {\n  height: calc(var(--svg-side) * 2);\n}\n\n.nav-list {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.nav-items {\n  list-style: none;\n  color: white;\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin-top: 15px;\n  margin-right: 3rem;\n}\n\n.nav-items a {\n  text-decoration: none;\n  color: black;\n}\n\n.active {\n  font-weight: bolder;\n}\n\n/* Footer */\n\n.extremity {\n  padding-block: 10px;\n  padding-inline: 20px;\n  border: 2px solid black;\n  display: flex;\n  justify-content: space-between;\n}\n\n.footer-row {\n  display: flex;\n  gap: 10px;\n}\n\n.app-item svg,\n.footer-row svg,\n.app-item use,\n.footer-row use {\n  height: var(--svg-side);\n  width: var(--svg-side);\n}\n\n/* Main App */\n\nmain {\n  height: auto;\n  flex-grow: 1;\n  padding: 20px;\n}\n\n#formFeedback {\n  text-align: center;\n  font-size: 2rem;\n}\n\n/* Item Container */\n\n#app-ctn {\n  --n: 2;\n  --w: 350px;\n  --n1: 3;\n  --w1: 700px;\n  --n2: 4;\n  --w2: 1050px;\n\n  display: grid;\n  column-gap: 30px;\n  row-gap: 30px;\n  grid-template-columns: repeat(auto-fit, minmax(clamp(clamp(clamp(100%/(var(--n2) + 1) + 0.1%, (var(--w2) - 100vw) * 1000, 100%/(var(--n1) + 1) + 0.1%), (var(--w1) - 100vw) * 1000, 100%/(var(--n) + 1) + 0.1%), (var(--w) - 100vw) * 1000, 100%), 3fr));\n  padding-block: 50px;\n  padding-inline: 20px;\n  max-width: 1200px;\n  margin-inline: auto;\n}\n\n.app-item {\n  padding: 5%;\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n  background-color: #848bf1;\n  border-radius: 10px;\n}\n\n.app-img {\n  width: 80%;\n  height: auto;\n  margin-inline: auto;\n}\n\n.app-title-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-inline: 5%;\n}\n\n.app-div-btn {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15%;\n  justify-content: center;\n}\n\n.app-like-text {\n  text-align: center;\n}\n\n.app-like-svg {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  gap: 5px;\n}\n\n.app-btn {\n  padding-inline: 10px;\n  padding-block: 5px;\n  z-index: 1;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.app-btn:hover {\n  background-color: rgb(114, 46, 46);\n}\n\n/* Pop-up */\n\n.app-item-popup-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  background-color: var(--bckgrd-0);\n  top: 0;\n  left: 0;\n  z-index: 20;\n  padding-inline: 20vw;\n  padding-block: 2.5vh 15vh;\n  animation: fadeInProject 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n\n.app-item-popup-overlay.out {\n  animation: fadeOutProject 0.3s ease-out forwards;\n}\n\n@keyframes fadeInProject {\n  0% {\n    z-index: -3;\n    background: var(--bckgrd-0);\n  }\n\n  100% {\n    z-index: 20;\n    background: var(--bg-modal);\n  }\n}\n\n@keyframes fadOutnProject {\n  0% {\n    z-index: 20;\n    background: var(--bg-modal);\n  }\n\n  100% {\n    z-index: -3;\n    background: var(--bckgrd-0);\n  }\n}\n\n.app-item-popup {\n  padding-inline: 5%;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  background-color: var(--bckgrd);\n  border: 1px solid var(--border);\n  border-radius: 16px;\n  padding-block: 2.5% 5%;\n  max-width: 500px;\n  margin-inline: auto;\n  gap: 10px;\n  transform: scale(0.3);\n  animation: scaleUpProject 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n}\n\n.out .app-item-popup {\n  animation: scaleDownProject 0.3s ease-out forwards;\n}\n\n@keyframes scaleUpProject {\n  0% {\n    transform: scale(0.3) translateY(1000px);\n    opacity: 0;\n  }\n\n  100% {\n    transform: scale(1) translateY(0);\n    opacity: 100%;\n  }\n}\n\n@keyframes scaleDownProject {\n  0% {\n    transform: scale(1) translateY(0);\n    opacity: 100%;\n  }\n\n  100% {\n    transform: scale(0.3) translateY(1000px);\n    opacity: 0;\n  }\n}\n\n.app-exit,\n.app-title-pop {\n  font-weight: bolder;\n}\n\n.app-exit {\n  font-size: 2rem;\n  text-align: right;\n  cursor: pointer;\n}\n\n.app-property {\n  --wap: 800px;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(clamp(100%/3 + 0.1%, (var(--wap) - 100vw) * 1000, 100%), 1fr));\n  column-gap: 10px;\n  row-gap: 10px;\n}\n\n.app-img-pop {\n  width: 25vw;\n  height: auto;\n  margin-inline: auto;\n  max-width: 350px;\n}\n\n.app-title-header {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: center;\n}\n\n/* Comments and Reservation Section */\n\n.app-section-header {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.app-section-ctn {\n  height: 14vh;\n  overflow-y: scroll;\n}\n\n/* Comments and Reservation Form */\n\n.app-form-title {\n  text-align: center;\n}\n\n.app-form-ctn {\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n}\n\n.app-form-input-div {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  padding-inline: 0 5%;\n}\n\n.app-form-input-hidden {\n  display: none;\n}\n\n.app-form-input-reg,\n.app-form-textArea {\n  padding-inline: 7px;\n  padding-block: 5px;\n  z-index: 1;\n  border-radius: 10px;\n}\n\n.app-form-textArea {\n  resize: none;\n}\n"],"sourceRoot":""}]);
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
const navItemCounter = document.querySelectorAll('.counter');

// Select section to show
navItem.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navItem.forEach((navItem) => navItem.classList.remove('active'));
    link.classList.add('active');
    navItemCounter.forEach((span) => {
      span.textContent = '';
    });
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
  const mealIDURL = (0,_createURLAPI_js__WEBPACK_IMPORTED_MODULE_0__.createApiMealURL)(_const_js__WEBPACK_IMPORTED_MODULE_2__.meaAPIUri.baseLookUp, _const_js__WEBPACK_IMPORTED_MODULE_2__.meaAPIUri.queryLookUp, await data);
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
  appID: 'Wbe3IznQ2LQoFPHmVrwp/',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixXQUFXLEtBQUs7QUFDaEI7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSUY7QUFDQSxpQkFBaUIsUUFBUSxFQUFFLFNBQVMsR0FBRyxXQUFXO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUSxFQUFFLEdBQUcsRUFBRSxTQUFTO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsUUFBUSxFQUFFLEdBQUcsRUFBRSxTQUFTLFdBQVcsTUFBTTtBQUMxRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2I4QztBQUNFO0FBQytCO0FBQ0M7QUFDbEI7QUFDSzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsd0VBQWtCO0FBQzdDLHFCQUFxQiwyREFBVSxPQUFPLGtEQUFXLHFCQUFxQiw0Q0FBSyxRQUFRLDhEQUFTO0FBQzVGLE1BQU0sMkRBQVUsUUFBUSwyRUFBa0I7QUFDMUM7QUFDQSxrQkFBa0IsbUVBQWM7QUFDaEMsSUFBSSxnRUFBVztBQUNmLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMseUVBQW1CO0FBQ3BELGdDQUFnQyxxRUFBZ0I7QUFDaEQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9BUElDb21tZW50c0hhbmRsaW5nLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL0FQSUxpa2VIYW5kbGluZy5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9BUElNZWFsc0hhbmRsaW5nLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL0NvdW50VG90YWxJdGVtcy5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9HZXRBUEkuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvTGlzdEl0ZW1Nb2QuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvUG9zdEFQSS5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9jb25zdC5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9jcmVhdGVFbGVtZW50TW9kLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL2NyZWF0ZVVSTEFQSS5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tc3ZnLXNpZGU6IGNsYW1wKDE2cHgsICgxMDB2dyAtIDMyMHB4KSAqIDEwMDAsIGNsYW1wKDIwcHgsICgxMDB2dyAtIDY0MHB4KSAqIDEwMDAsIGNsYW1wKDI1cHgsICgxMDB2dyAtIDEyODBweCkgKiAxMDAwLCAzMHB4KSkpO1xcbiAgLS1mb250LXNpemU6IGNhbGModmFyKC0tc3ZnLXNpZGUpICogMC44KTtcXG4gIC0tYmNrZ3JkLTA6ICNmZmYwO1xcbiAgLS1iZy1tb2RhbDogI2MxYzdkMGJlO1xcbiAgLS1iY2tncmQ6ICNmZmY7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmU2Y2U5O1xcbiAgZm9udC1mYW1pbHk6ICdQYW5nb2xpbicsICdNZXJyaXdlYXRoZXInLCBzZXJpZiwgY3Vyc2l2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uc3ZnIHtcXG4gIG1hcmdpbi1ibG9jazogYXV0bztcXG59XFxuXFxuLm1vZGFsLWFjdGl2ZSAubW9kYWwtYmcge1xcbiAgZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbi8qIE5hdmJhciAqL1xcblxcbi5uYXYtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDhiZjE7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5sb2dvIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1zdmctc2lkZSkgKiAyKTtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubmF2LWl0ZW1zIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMnJlbTtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxufVxcblxcbi5uYXYtaXRlbXMgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuXFxuLmV4dHJlbWl0eSB7XFxuICBwYWRkaW5nLWJsb2NrOiAxMHB4O1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5mb290ZXItcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5hcHAtaXRlbSBzdmcsXFxuLmZvb3Rlci1yb3cgc3ZnLFxcbi5hcHAtaXRlbSB1c2UsXFxuLmZvb3Rlci1yb3cgdXNlIHtcXG4gIGhlaWdodDogdmFyKC0tc3ZnLXNpZGUpO1xcbiAgd2lkdGg6IHZhcigtLXN2Zy1zaWRlKTtcXG59XFxuXFxuLyogTWFpbiBBcHAgKi9cXG5cXG5tYWluIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiNmb3JtRmVlZGJhY2sge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4vKiBJdGVtIENvbnRhaW5lciAqL1xcblxcbiNhcHAtY3RuIHtcXG4gIC0tbjogMjtcXG4gIC0tdzogMzUwcHg7XFxuICAtLW4xOiAzO1xcbiAgLS13MTogNzAwcHg7XFxuICAtLW4yOiA0O1xcbiAgLS13MjogMTA1MHB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGNvbHVtbi1nYXA6IDMwcHg7XFxuICByb3ctZ2FwOiAzMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChjbGFtcChjbGFtcChjbGFtcCgxMDAlLyh2YXIoLS1uMikgKyAxKSArIDAuMSUsICh2YXIoLS13MikgLSAxMDB2dykgKiAxMDAwLCAxMDAlLyh2YXIoLS1uMSkgKyAxKSArIDAuMSUpLCAodmFyKC0tdzEpIC0gMTAwdncpICogMTAwMCwgMTAwJS8odmFyKC0tbikgKyAxKSArIDAuMSUpLCAodmFyKC0tdykgLSAxMDB2dykgKiAxMDAwLCAxMDAlKSwgM2ZyKSk7XFxuICBwYWRkaW5nLWJsb2NrOiA1MHB4O1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbi5hcHAtaXRlbSB7XFxuICBwYWRkaW5nOiA1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDhiZjE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYXBwLWltZyB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLmFwcC10aXRsZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWlubGluZTogNSU7XFxufVxcblxcbi5hcHAtZGl2LWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxNSU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1saWtlLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYXBwLWxpa2Utc3ZnIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmFwcC1idG4ge1xcbiAgcGFkZGluZy1pbmxpbmU6IDEwcHg7XFxuICBwYWRkaW5nLWJsb2NrOiA1cHg7XFxuICB6LWluZGV4OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFwcC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNCwgNDYsIDQ2KTtcXG59XFxuXFxuLyogUG9wLXVwICovXFxuXFxuLmFwcC1pdGVtLXBvcHVwLW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmNrZ3JkLTApO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDIwO1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwdnc7XFxuICBwYWRkaW5nLWJsb2NrOiAyLjV2aCAxNXZoO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW5Qcm9qZWN0IDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcXG59XFxuXFxuLmFwcC1pdGVtLXBvcHVwLW92ZXJsYXkub3V0IHtcXG4gIGFuaW1hdGlvbjogZmFkZU91dFByb2plY3QgMC4zcyBlYXNlLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5Qcm9qZWN0IHtcXG4gIDAlIHtcXG4gICAgei1pbmRleDogLTM7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJja2dyZC0wKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB6LWluZGV4OiAyMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctbW9kYWwpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZE91dG5Qcm9qZWN0IHtcXG4gIDAlIHtcXG4gICAgei1pbmRleDogMjA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLW1vZGFsKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB6LWluZGV4OiAtMztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmNrZ3JkLTApO1xcbiAgfVxcbn1cXG5cXG4uYXBwLWl0ZW0tcG9wdXAge1xcbiAgcGFkZGluZy1pbmxpbmU6IDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iY2tncmQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBwYWRkaW5nLWJsb2NrOiAyLjUlIDUlO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBnYXA6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7XFxuICBhbmltYXRpb246IHNjYWxlVXBQcm9qZWN0IDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcXG59XFxuXFxuLm91dCAuYXBwLWl0ZW0tcG9wdXAge1xcbiAgYW5pbWF0aW9uOiBzY2FsZURvd25Qcm9qZWN0IDAuM3MgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2NhbGVVcFByb2plY3Qge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWSgxMDAwcHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzY2FsZURvd25Qcm9qZWN0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVZKDEwMDBweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbi5hcHAtZXhpdCxcXG4uYXBwLXRpdGxlLXBvcCB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4uYXBwLWV4aXQge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hcHAtcHJvcGVydHkge1xcbiAgLS13YXA6IDgwMHB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoY2xhbXAoMTAwJS8zICsgMC4xJSwgKHZhcigtLXdhcCkgLSAxMDB2dykgKiAxMDAwLCAxMDAlKSwgMWZyKSk7XFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgcm93LWdhcDogMTBweDtcXG59XFxuXFxuLmFwcC1pbWctcG9wIHtcXG4gIHdpZHRoOiAyNXZ3O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIG1heC13aWR0aDogMzUwcHg7XFxufVxcblxcbi5hcHAtdGl0bGUtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogQ29tbWVudHMgYW5kIFJlc2VydmF0aW9uIFNlY3Rpb24gKi9cXG5cXG4uYXBwLXNlY3Rpb24taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmFwcC1zZWN0aW9uLWN0biB7XFxuICBoZWlnaHQ6IDE0dmg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi8qIENvbW1lbnRzIGFuZCBSZXNlcnZhdGlvbiBGb3JtICovXFxuXFxuLmFwcC1mb3JtLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1mb3JtLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5hcHAtZm9ybS1pbnB1dC1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIHBhZGRpbmctaW5saW5lOiAwIDUlO1xcbn1cXG5cXG4uYXBwLWZvcm0taW5wdXQtaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hcHAtZm9ybS1pbnB1dC1yZWcsXFxuLmFwcC1mb3JtLXRleHRBcmVhIHtcXG4gIHBhZGRpbmctaW5saW5lOiA3cHg7XFxuICBwYWRkaW5nLWJsb2NrOiA1cHg7XFxuICB6LWluZGV4OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmFwcC1mb3JtLXRleHRBcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdJQUFnSTtFQUNoSSx3Q0FBd0M7RUFDeEMsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Us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QkFBcUI7RUFDckIsMEVBQTBFO0FBQzVFOztBQUVBO0VBQ0Usa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0U7SUFDRSx3Q0FBd0M7SUFDeEMsVUFBVTtFQUNaOztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQ0FBaUM7SUFDakMsYUFBYTtFQUNmOztFQUVBO0lBQ0Usd0NBQXdDO0lBQ3hDLFVBQVU7RUFDWjtBQUNGOztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7O0VBRVosYUFBYTtFQUNiLDZHQUE2RztFQUM3RyxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixtQkFBbUI7QUFDckI7O0FBRUEscUNBQXFDOztBQUVyQztFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUEsa0NBQWtDOztBQUVsQztFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tc3ZnLXNpZGU6IGNsYW1wKDE2cHgsICgxMDB2dyAtIDMyMHB4KSAqIDEwMDAsIGNsYW1wKDIwcHgsICgxMDB2dyAtIDY0MHB4KSAqIDEwMDAsIGNsYW1wKDI1cHgsICgxMDB2dyAtIDEyODBweCkgKiAxMDAwLCAzMHB4KSkpO1xcbiAgLS1mb250LXNpemU6IGNhbGModmFyKC0tc3ZnLXNpZGUpICogMC44KTtcXG4gIC0tYmNrZ3JkLTA6ICNmZmYwO1xcbiAgLS1iZy1tb2RhbDogI2MxYzdkMGJlO1xcbiAgLS1iY2tncmQ6ICNmZmY7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmU2Y2U5O1xcbiAgZm9udC1mYW1pbHk6ICdQYW5nb2xpbicsICdNZXJyaXdlYXRoZXInLCBzZXJpZiwgY3Vyc2l2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uc3ZnIHtcXG4gIG1hcmdpbi1ibG9jazogYXV0bztcXG59XFxuXFxuLm1vZGFsLWFjdGl2ZSAubW9kYWwtYmcge1xcbiAgZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbi8qIE5hdmJhciAqL1xcblxcbi5uYXYtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDhiZjE7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5sb2dvIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1zdmctc2lkZSkgKiAyKTtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubmF2LWl0ZW1zIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMnJlbTtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxufVxcblxcbi5uYXYtaXRlbXMgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuXFxuLmV4dHJlbWl0eSB7XFxuICBwYWRkaW5nLWJsb2NrOiAxMHB4O1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5mb290ZXItcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5hcHAtaXRlbSBzdmcsXFxuLmZvb3Rlci1yb3cgc3ZnLFxcbi5hcHAtaXRlbSB1c2UsXFxuLmZvb3Rlci1yb3cgdXNlIHtcXG4gIGhlaWdodDogdmFyKC0tc3ZnLXNpZGUpO1xcbiAgd2lkdGg6IHZhcigtLXN2Zy1zaWRlKTtcXG59XFxuXFxuLyogTWFpbiBBcHAgKi9cXG5cXG5tYWluIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiNmb3JtRmVlZGJhY2sge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4vKiBJdGVtIENvbnRhaW5lciAqL1xcblxcbiNhcHAtY3RuIHtcXG4gIC0tbjogMjtcXG4gIC0tdzogMzUwcHg7XFxuICAtLW4xOiAzO1xcbiAgLS13MTogNzAwcHg7XFxuICAtLW4yOiA0O1xcbiAgLS13MjogMTA1MHB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGNvbHVtbi1nYXA6IDMwcHg7XFxuICByb3ctZ2FwOiAzMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChjbGFtcChjbGFtcChjbGFtcCgxMDAlLyh2YXIoLS1uMikgKyAxKSArIDAuMSUsICh2YXIoLS13MikgLSAxMDB2dykgKiAxMDAwLCAxMDAlLyh2YXIoLS1uMSkgKyAxKSArIDAuMSUpLCAodmFyKC0tdzEpIC0gMTAwdncpICogMTAwMCwgMTAwJS8odmFyKC0tbikgKyAxKSArIDAuMSUpLCAodmFyKC0tdykgLSAxMDB2dykgKiAxMDAwLCAxMDAlKSwgM2ZyKSk7XFxuICBwYWRkaW5nLWJsb2NrOiA1MHB4O1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbi5hcHAtaXRlbSB7XFxuICBwYWRkaW5nOiA1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDhiZjE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYXBwLWltZyB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLmFwcC10aXRsZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWlubGluZTogNSU7XFxufVxcblxcbi5hcHAtZGl2LWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxNSU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1saWtlLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYXBwLWxpa2Utc3ZnIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmFwcC1idG4ge1xcbiAgcGFkZGluZy1pbmxpbmU6IDEwcHg7XFxuICBwYWRkaW5nLWJsb2NrOiA1cHg7XFxuICB6LWluZGV4OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFwcC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNCwgNDYsIDQ2KTtcXG59XFxuXFxuLyogUG9wLXVwICovXFxuXFxuLmFwcC1pdGVtLXBvcHVwLW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmNrZ3JkLTApO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDIwO1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwdnc7XFxuICBwYWRkaW5nLWJsb2NrOiAyLjV2aCAxNXZoO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW5Qcm9qZWN0IDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcXG59XFxuXFxuLmFwcC1pdGVtLXBvcHVwLW92ZXJsYXkub3V0IHtcXG4gIGFuaW1hdGlvbjogZmFkZU91dFByb2plY3QgMC4zcyBlYXNlLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW5Qcm9qZWN0IHtcXG4gIDAlIHtcXG4gICAgei1pbmRleDogLTM7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJja2dyZC0wKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB6LWluZGV4OiAyMDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctbW9kYWwpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZE91dG5Qcm9qZWN0IHtcXG4gIDAlIHtcXG4gICAgei1pbmRleDogMjA7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLW1vZGFsKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB6LWluZGV4OiAtMztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmNrZ3JkLTApO1xcbiAgfVxcbn1cXG5cXG4uYXBwLWl0ZW0tcG9wdXAge1xcbiAgcGFkZGluZy1pbmxpbmU6IDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iY2tncmQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICBwYWRkaW5nLWJsb2NrOiAyLjUlIDUlO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBnYXA6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7XFxuICBhbmltYXRpb246IHNjYWxlVXBQcm9qZWN0IDAuM3MgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKSBmb3J3YXJkcztcXG59XFxuXFxuLm91dCAuYXBwLWl0ZW0tcG9wdXAge1xcbiAgYW5pbWF0aW9uOiBzY2FsZURvd25Qcm9qZWN0IDAuM3MgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2NhbGVVcFByb2plY3Qge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMykgdHJhbnNsYXRlWSgxMDAwcHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzY2FsZURvd25Qcm9qZWN0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKSB0cmFuc2xhdGVZKDEwMDBweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcblxcbi5hcHAtZXhpdCxcXG4uYXBwLXRpdGxlLXBvcCB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4uYXBwLWV4aXQge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hcHAtcHJvcGVydHkge1xcbiAgLS13YXA6IDgwMHB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoY2xhbXAoMTAwJS8zICsgMC4xJSwgKHZhcigtLXdhcCkgLSAxMDB2dykgKiAxMDAwLCAxMDAlKSwgMWZyKSk7XFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgcm93LWdhcDogMTBweDtcXG59XFxuXFxuLmFwcC1pbWctcG9wIHtcXG4gIHdpZHRoOiAyNXZ3O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIG1heC13aWR0aDogMzUwcHg7XFxufVxcblxcbi5hcHAtdGl0bGUtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogQ29tbWVudHMgYW5kIFJlc2VydmF0aW9uIFNlY3Rpb24gKi9cXG5cXG4uYXBwLXNlY3Rpb24taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmFwcC1zZWN0aW9uLWN0biB7XFxuICBoZWlnaHQ6IDE0dmg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi8qIENvbW1lbnRzIGFuZCBSZXNlcnZhdGlvbiBGb3JtICovXFxuXFxuLmFwcC1mb3JtLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1mb3JtLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5hcHAtZm9ybS1pbnB1dC1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIHBhZGRpbmctaW5saW5lOiAwIDUlO1xcbn1cXG5cXG4uYXBwLWZvcm0taW5wdXQtaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hcHAtZm9ybS1pbnB1dC1yZWcsXFxuLmFwcC1mb3JtLXRleHRBcmVhIHtcXG4gIHBhZGRpbmctaW5saW5lOiA3cHg7XFxuICBwYWRkaW5nLWJsb2NrOiA1cHg7XFxuICB6LWluZGV4OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmFwcC1mb3JtLXRleHRBcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2Fzc2V0L3Jlc291cmNlL2ljb25zLnN2Zyc7XG5pbXBvcnQgeyBwcmludExpc3RJdGVtcyB9IGZyb20gJy4vbW9kdWxlcy91dGlscy5qcyc7XG5cbmNvbnN0IG5hdkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucXVlcnkgYScpO1xuY29uc3QgbmF2SXRlbUNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY291bnRlcicpO1xuXG4vLyBTZWxlY3Qgc2VjdGlvbiB0byBzaG93XG5uYXZJdGVtLmZvckVhY2goKGxpbmspID0+IHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG5hdkl0ZW0uZm9yRWFjaCgobmF2SXRlbSkgPT4gbmF2SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBuYXZJdGVtQ291bnRlci5mb3JFYWNoKChzcGFuKSA9PiB7XG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gJyc7XG4gICAgfSk7XG4gICAgcHJpbnRMaXN0SXRlbXMoZSk7XG4gIH0pO1xufSk7XG4iLCJpbXBvcnQgeyBoYW5kbGVGb3JtU3VibWl0IH0gZnJvbSAnLi9Qb3N0QVBJLmpzJztcbmltcG9ydCB7XG4gIGNyZWF0ZVBvcHVwLCB0b2dnbGVCbHVyLCBjcmVhdGVDb21tZW50U2VjLCBjcmVhdGVDb21tZW50Rm9ybSxcbn0gZnJvbSAnLi9MaXN0SXRlbU1vZC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVBcGlJbnZVUkwsIGNyZWF0ZUFwaUludlF1ZXJ5VVJMIH0gZnJvbSAnLi9jcmVhdGVVUkxBUEkuanMnO1xuaW1wb3J0IHsgaGFuZGxlR0VUQVBJIH0gZnJvbSAnLi9HZXRBUEkuanMnO1xuaW1wb3J0IHtcbiAgaW52b2x2ZW1lbnRBUElVcmksIHBvcFVwQ2xhc3NlcywgcG9wVXBTZWN0aW9uQ2xhc3NlcywgcG9wVXBGb3JtQ2xhc3Nlcyxcbn0gZnJvbSAnLi9jb25zdC5qcyc7XG5cbmNvbnN0IGdldENvbW1lbnRSZXNwb25zZSA9IGFzeW5jIChpZEl0ZW0pID0+IHtcbiAgY29uc3QgaW52TGlrZXNVUkwgPSBjcmVhdGVBcGlJbnZRdWVyeVVSTChcbiAgICBpbnZvbHZlbWVudEFQSVVyaS5iYXNlLCBpbnZvbHZlbWVudEFQSVVyaS5hcHBJRCwgaW52b2x2ZW1lbnRBUElVcmkucXVlcnlDb21tZW50LCBpZEl0ZW0sXG4gICk7XG4gIGNvbnN0IGRhdGFSZXNwb25zZSA9IGF3YWl0IGhhbmRsZUdFVEFQSShpbnZMaWtlc1VSTCk7XG4gIHJldHVybiBkYXRhUmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRDb21tZW50QXJyYXkgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgY29tbWVudFJlc3BvbnNlID0gYXdhaXQgZ2V0Q29tbWVudFJlc3BvbnNlKGlkKTtcbiAgaWYgKGNvbW1lbnRSZXNwb25zZSBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gW107XG4gIHJldHVybiBjb21tZW50UmVzcG9uc2U7XG59O1xuXG5jb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBwb3N0VVJMID0gY3JlYXRlQXBpSW52VVJMKGludm9sdmVtZW50QVBJVXJpLmJhc2UsIGludm9sdmVtZW50QVBJVXJpLmFwcElELFxuICAgIGludm9sdmVtZW50QVBJVXJpLnF1ZXJ5Q29tbWVudCk7XG4gIGNvbnN0IGlkTWVhbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQ7XG4gIGNvbnN0IGNvbW1lbnRDdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwLXNlYy1jdG4nKTtcbiAgYXdhaXQgaGFuZGxlRm9ybVN1Ym1pdChldmVudCwgcG9zdFVSTCk7XG4gIGNvbnN0IG5ld0NvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudEFycmF5KGlkTWVhbCk7XG4gIGNvbW1lbnRDdG4uaW5uZXJIVE1MID0gJyc7XG4gIGNvbW1lbnRDdG4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29tbWVudFNlYyhuZXdDb21tZW50cywgcG9wVXBTZWN0aW9uQ2xhc3NlcykpO1xufTtcblxuY29uc3QgY3JlYXRlQ29tbWVudFBvcFVwID0gYXN5bmMgKG1lYWxBUGkpID0+IHtcbiAgY29uc3QgY29tbWVudCA9IGF3YWl0IGdldENvbW1lbnRBcnJheShtZWFsQVBpLmlkTWVhbCk7XG4gIHRvZ2dsZUJsdXIoKTtcbiAgY29uc3QgcG9wVVAgPSBjcmVhdGVQb3B1cCgnZGl2JywgcG9wVXBDbGFzc2VzLCBtZWFsQVBpLCBjcmVhdGVDb21tZW50U2VjKGNvbW1lbnQsIHBvcFVwU2VjdGlvbkNsYXNzZXMpLFxuICAgIGNyZWF0ZUNvbW1lbnRGb3JtKG1lYWxBUGkuaWRNZWFsLCBwb3N0Q29tbWVudCwgcG9wVXBGb3JtQ2xhc3NlcykpO1xuICBjb25zdCBwb3B1cERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpO1xuICBwb3B1cERpdi5pbm5lckhUTUwgPSAnJztcbiAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQocG9wVVApO1xufTtcblxuZXhwb3J0IHtcbiAgZ2V0Q29tbWVudFJlc3BvbnNlLCBjcmVhdGVDb21tZW50UG9wVXAsXG59OyIsImltcG9ydCB7IGhhbmRsZVBvc3QgfSBmcm9tICcuL1Bvc3RBUEkuanMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlQXBpSW52VVJMLFxufSBmcm9tICcuL2NyZWF0ZVVSTEFQSS5qcyc7XG5pbXBvcnQgeyBoYW5kbGVHRVRBUEkgfSBmcm9tICcuL0dldEFQSS5qcyc7XG5pbXBvcnQgeyBpbnZvbHZlbWVudEFQSVVyaSB9IGZyb20gJy4vY29uc3QuanMnO1xuXG5jb25zdCBsaWtlc0pzb24gPSBhc3luYyAoaWQpID0+IChcbiAge1xuICAgIGl0ZW1faWQ6IGlkLFxuICB9XG4pO1xuXG5jb25zdCBmaW5kTGlrZXMgPSBhc3luYyAoaWQsIGludkFycikgPT4ge1xuICBjb25zdCByZXN1bHQgPSBpbnZBcnIuZmlsdGVyKChpbnZBcnIpID0+IGludkFyci5pdGVtX2lkID09PSBpZCk7XG4gIGlmIChyZXN1bHQubGVuZ3RoID4gMCkgcmV0dXJuIHJlc3VsdFswXS5saWtlcztcbiAgcmV0dXJuIDA7XG59O1xuXG5jb25zdCB1cGRhdGVMaWtlc0RPTSA9IGFzeW5jIChub2RlLCBsaWtlcykgPT4ge1xuICBjb25zdCBsaWtlVGV4dCA9IG5vZGUucXVlcnlTZWxlY3RvcignLmFwcC1saWtlLXRleHQnKTtcbiAgbGlrZVRleHQudGV4dENvbnRlbnQgPSBgJHtsaWtlc30gbGlrZSR7bGlrZXMgPiAxID8gJ3MnIDogJyd9YDtcbiAgY29uc3QgdXNlVlNHID0gbm9kZS5xdWVyeVNlbGVjdG9yKCd1c2UnKTtcbiAgY29uc3Qgc3ZnVlNHID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdzdmcnKTtcbiAgdXNlVlNHLmNsYXNzTGlzdC5hZGQoJ2xpa2VzJyk7XG4gIHN2Z1ZTRy5jbGFzc0xpc3QuYWRkKCdsaWtlcycpO1xuICB1c2VWU0cuc2V0QXR0cmlidXRlKCdocmVmJywgJy4uL2Fzc2V0L3Jlc291cmNlL2ljb25zLnN2ZyNoZWFydC1saWtlLXJlZCcpO1xufTtcblxuY29uc3QgY3JlYXRlTGlrZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGVhcnQtbGlrZScpICYmICFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaWtlcycpKSB7XG4gICAgY29uc3QgY3VycmVudElEID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgIGNvbnN0IHVybCA9IGNyZWF0ZUFwaUludlVSTChpbnZvbHZlbWVudEFQSVVyaS5iYXNlLCBpbnZvbHZlbWVudEFQSVVyaS5hcHBJRCxcbiAgICAgIGludm9sdmVtZW50QVBJVXJpLnF1ZXJ5TGlrZSk7XG4gICAgYXdhaXQgaGFuZGxlUG9zdCh1cmwsIGF3YWl0IGxpa2VzSnNvbihjdXJyZW50SUQpKTtcbiAgICBjb25zdCBkYXRhUmVzcG9uc2VJbnYgPSBhd2FpdCBoYW5kbGVHRVRBUEkodXJsKTtcbiAgICBjb25zdCBxdHlMaWtlcyA9IGF3YWl0IGZpbmRMaWtlcyhjdXJyZW50SUQsIGRhdGFSZXNwb25zZUludik7XG4gICAgY29uc3QgcHJ0TmRlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBhd2FpdCB1cGRhdGVMaWtlc0RPTShwcnROZGUsIGF3YWl0IHF0eUxpa2VzKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0TGlrZXNSZXNwb25zZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgaW52TGlrZXNVUkwgPSBjcmVhdGVBcGlJbnZVUkwoaW52b2x2ZW1lbnRBUElVcmkuYmFzZSwgaW52b2x2ZW1lbnRBUElVcmkuYXBwSUQsXG4gICAgaW52b2x2ZW1lbnRBUElVcmkucXVlcnlMaWtlKTtcbiAgY29uc3QgZGF0YVJlc3BvbnNlID0gYXdhaXQgaGFuZGxlR0VUQVBJKGludkxpa2VzVVJMKTtcbiAgcmV0dXJuIGRhdGFSZXNwb25zZTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUxpa2UsIGZpbmRMaWtlcywgZ2V0TGlrZXNSZXNwb25zZSxcbn07IiwiaW1wb3J0IHsgY3JlYXRlQXBpTWVhbFVSTCB9IGZyb20gJy4vY3JlYXRlVVJMQVBJLmpzJztcbmltcG9ydCB7IGhhbmRsZUdFVEFQSSB9IGZyb20gJy4vR2V0QVBJLmpzJztcbmltcG9ydCB7IG1lYUFQSVVyaSB9IGZyb20gJy4vY29uc3QuanMnO1xuXG5jb25zdCBnZXRNZWFsc0lEUmVzcG9uc2UgPSBhc3luYyAoZGF0YSkgPT4ge1xuICBjb25zdCBtZWFsSURVUkwgPSBjcmVhdGVBcGlNZWFsVVJMKG1lYUFQSVVyaS5iYXNlTG9va1VwLCBtZWFBUElVcmkucXVlcnlMb29rVXAsIGF3YWl0IGRhdGEpO1xuICBjb25zdCBkYXRhUmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVHRVRBUEkobWVhbElEVVJMKTtcbiAgcmV0dXJuIGRhdGFSZXNwb25zZTtcbn07XG5cbmNvbnN0IGdldE1lYWxzQ2F0UmVzcG9uc2UgPSBhc3luYyAoZGF0YSkgPT4ge1xuICBjb25zdCBtZWFsSURVUkwgPSBjcmVhdGVBcGlNZWFsVVJMKG1lYUFQSVVyaS5iYXNlRmlsdGVyLCBtZWFBUElVcmkucXVlcnlGaWx0ZXIsIGF3YWl0IGRhdGEpO1xuICBjb25zdCBkYXRhUmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVHRVRBUEkobWVhbElEVVJMKTtcbiAgcmV0dXJuIGRhdGFSZXNwb25zZTtcbn07XG5cbmV4cG9ydCB7XG4gIGdldE1lYWxzSURSZXNwb25zZSwgZ2V0TWVhbHNDYXRSZXNwb25zZSxcbn07IiwiY29uc3QgY291bnRUb3RhbEl0ZW0gPSAobm9kZSkgPT4gbm9kZS5jaGlsZHJlbi5sZW5ndGg7XG5cbmNvbnN0IGFwcGVuZFRvdGFsID0gKHRvdGFsLCBpZCkgPT4ge1xuICBjb25zdCBpZFNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGlkU3Bhbi50ZXh0Q29udGVudCA9IGAgKCR7dG90YWx9KWA7XG59O1xuXG5leHBvcnQge1xuICBjb3VudFRvdGFsSXRlbSwgYXBwZW5kVG90YWwsXG59OyIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBHRVRpbmcgZGF0YSBhcyBKU09OIHdpdGggZmV0Y2guXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFVSTCB0byBHRVQgZGF0YSB0b1xuICogQHJldHVybiB7T2JqZWN0fSAtIFJlc3BvbnNlIGJvZHkgZnJvbSBVUkwgdGhhdCB3YXMgR0VUZWRcbiAqL1xuY29uc3QgZmV0Y2hEYXRhSlNPTiA9IGFzeW5jIChVUkwpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICB9XG4gIGNvbnN0IGRhdGFKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YUpTT047XG59O1xuXG4vKipcbiAqIEV2ZW50IGhhbmRsZXIgZm9yIGEgZm9ybSBzdWJtaXQgZXZlbnQuXG4gKiBAcGFyYW0ge1N1Ym1pdEV2ZW50fSBldmVudFxuICovXG5jb25zdCBoYW5kbGVHRVRBUElldmVudCA9IGFzeW5jIChldmVudCwgdXJsKSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgZmV0Y2hEYXRhSlNPTih1cmwpO1xuICAgIHJldHVybiByZXNwb25zZURhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59O1xuXG4vKipcbiAqIEV2ZW50IGhhbmRsZXIgZm9yIGEgZm9ybSBzdWJtaXQgZXZlbnQuXG4gKi9cbmNvbnN0IGhhbmRsZUdFVEFQSSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCBmZXRjaERhdGFKU09OKHVybCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIGZldGNoRGF0YUpTT04sIGhhbmRsZUdFVEFQSWV2ZW50LCBoYW5kbGVHRVRBUEksXG59OyIsImltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnREZWZhdWx0LCBjcmVhdGVJbWcsIGNyZWF0ZUJ1dHRvbiwgY3JlYXRlTlMsIGNyZWF0ZUxhYmVsLFxuICBjcmVhdGVUZXh0QXJlYSwgY3JlYXRlSW5wdXQsXG59IGZyb20gJy4vY3JlYXRlRWxlbWVudE1vZC5qcyc7XG5pbXBvcnQgeyBjb3VudFRvdGFsSXRlbSB9IGZyb20gJy4vQ291bnRUb3RhbEl0ZW1zLmpzJztcblxuY29uc3QgdG9nZ2xlQmx1ciA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdtb2RhbC1hY3RpdmUnKTtcbn07XG5cbmNvbnN0IGNsb3NlUG9wID0gKCkgPT4ge1xuICB0b2dnbGVCbHVyKCk7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwLWl0ZW0tcG9wdXAtb3ZlcmxheScpO1xuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ291dCcpO1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpO1xuICBzZXRUaW1lb3V0KCgpID0+IHBvcHVwLnJlbW92ZUNoaWxkKG92ZXJsYXkpLCA0MDApO1xufTtcblxuY29uc3QgY3JlYXRlSXRlbSA9IChlbGVtLCBjbGFzc2VzLCBtZWFsQXBpLCB4bGluaywgbGlrZUFwaSxcbiAgY2FsbGJhY2swID0gZmFsc2UsIGNhbGxiYWNrMSA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGRvY0ZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGRvY0ZyYWcuYXBwZW5kQ2hpbGQoY3JlYXRlSW1nKGNsYXNzZXMuaW1hZ2UsIG1lYWxBcGkuc3RyTWVhbCwgbWVhbEFwaS5zdHJNZWFsVGh1bWIpKTtcbiAgY29uc3QgZWxlbUhlYWRlciA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdkaXYnLCBjbGFzc2VzLnRpdGxlSGVhZGVyKTtcbiAgY29uc3QgdGl0bGVJbWcgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgncCcsIGNsYXNzZXMubGlrZXNDdG4sIG1lYWxBcGkuc3RyTWVhbCk7XG4gIGVsZW1IZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVJbWcpO1xuICBjb25zdCBlbGVtTGlrZXMgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgnZGl2JywgY2xhc3Nlcy5saWtlc0ljb24pO1xuICBjb25zdCBlbGVtTGlrZXNTVkcgPSBjcmVhdGVOUyh4bGluayk7XG4gIGVsZW1MaWtlcy5hcHBlbmRDaGlsZChlbGVtTGlrZXNTVkcpO1xuICBjb25zdCBlbGVtTGlrZXNQID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ3AnLCBjbGFzc2VzLmxpa2VzVGV4dCwgYCR7bGlrZUFwaX0gbGlrZSR7bGlrZUFwaSA+IDEgPyAncycgOiAnJ31gKTtcbiAgZWxlbUxpa2VzLmFwcGVuZENoaWxkKGVsZW1MaWtlc1ApO1xuICBlbGVtSGVhZGVyLmFwcGVuZENoaWxkKGVsZW1MaWtlcyk7XG4gIGRvY0ZyYWcuYXBwZW5kQ2hpbGQoZWxlbUhlYWRlcik7XG4gIGNvbnN0IGJ0bkRpdiA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdkaXYnLCBjbGFzc2VzLmNsYXNzRGl2QnRuKTtcbiAgY29uc3QgY29tbWVudEJ0biA9IGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgY2xhc3Nlcy5idG5Db21tZW50LCAnR28gdG8gQ29tbWVudHMnLCAnQ29tbWVudHMnKTtcbiAgaWYgKGNhbGxiYWNrMSkgY29tbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrMSk7XG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChjb21tZW50QnRuKTtcbiAgYnRuRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgY2xhc3Nlcy5idG5SZXNlcnZlLCAnR28gdG8gUmVzZXJ2YXRpb25zJywgJ1Jlc2VydmF0aW9ucycpKTtcbiAgZG9jRnJhZy5hcHBlbmRDaGlsZChidG5EaXYpO1xuICBjb25zdCBpdGVtRWxlbSA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KGVsZW0sIGNsYXNzZXMuY29udGFpbmVyLCBmYWxzZSwgZG9jRnJhZyk7XG4gIGl0ZW1FbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIG1lYWxBcGkuaWRNZWFsKTtcbiAgaWYgKGNhbGxiYWNrMCkgaXRlbUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjazApO1xuICByZXR1cm4gaXRlbUVsZW07XG59O1xuXG5jb25zdCBjcmVhdGVQb3B1cCA9IChlbGVtLCBjbGFzc2VzLCBtZWFsQXBpLCBjYWxsYmFjayA9IGZhbHNlLCBjYWxsYmFjazIgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBkb2NGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBjb25zdCBlbGVtSGVhZGVyID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ2RpdicsIGNsYXNzZXMudGl0bGVIZWFkZXIpO1xuICBjb25zdCB0aXRsZVBvcCA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdoMicsIGNsYXNzZXMudGl0bGUsIG1lYWxBcGkuc3RyTWVhbCk7XG4gIGNvbnN0IHRpdGxlWCA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdzcGFuJywgY2xhc3Nlcy5leGl0LCAnWCcpO1xuICB0aXRsZVguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcCk7XG4gIGVsZW1IZWFkZXIuYXBwZW5kKHRpdGxlUG9wLCB0aXRsZVgpO1xuICBkb2NGcmFnLmFwcGVuZENoaWxkKGVsZW1IZWFkZXIpO1xuICBkb2NGcmFnLmFwcGVuZENoaWxkKGNyZWF0ZUltZyhjbGFzc2VzLmltYWdlLCBtZWFsQXBpLnN0ck1lYWwsIG1lYWxBcGkuc3RyTWVhbFRodW1iKSk7XG4gIGNvbnN0IGVsZW1Qcm9wID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ2RpdicsIGNsYXNzZXMucHJvcGVydGllcyk7XG4gIGNvbnN0IG1lYWxOYW1lID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ3AnLCBjbGFzc2VzLnByb3BlcnR5LCBgTmFtZTogJHttZWFsQXBpLnN0ck1lYWx9YCk7XG4gIGNvbnN0IG1lYWxDYXQgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgncCcsIGNsYXNzZXMucHJvcGVydHksIGBDYXRlZ29yeTogJHttZWFsQXBpLnN0ckNhdGVnb3J5fWApO1xuICBjb25zdCBtZWFsQXJlYSA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdwJywgY2xhc3Nlcy5wcm9wZXJ0eSwgYEFyZWE6ICR7bWVhbEFwaS5zdHJBcmVhfWApO1xuICBjb25zdCB0YWcgPSBtZWFsQXBpLnN0clRhZ3MgPyBtZWFsQXBpLnN0clRhZ3Muc3BsaXQoJywnKS5qb2luKCcsICcpIDogJ05PTkUnO1xuICBjb25zdCBtZWFsVGFncyA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdwJywgY2xhc3Nlcy5wcm9wZXJ0eSwgYEFyZWE6ICR7dGFnfWApO1xuICBlbGVtUHJvcC5hcHBlbmQobWVhbE5hbWUsIG1lYWxDYXQsIG1lYWxBcmVhLCBtZWFsVGFncyk7XG4gIGRvY0ZyYWcuYXBwZW5kQ2hpbGQoZWxlbVByb3ApO1xuICBjb25zdCBzZWNDdG4gPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgnZGl2JywgY2xhc3Nlcy5zZWN0aW9uQ3RuKTtcbiAgY29uc3QgZm9ybUN0biA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdkaXYnLCBjbGFzc2VzLmZvcm1Db250YWluZXIpO1xuICBpZiAoY2FsbGJhY2spIHNlY0N0bi5hcHBlbmRDaGlsZChjYWxsYmFjayk7XG4gIGlmIChjYWxsYmFjazIpIGZvcm1DdG4uYXBwZW5kQ2hpbGQoY2FsbGJhY2syKTtcbiAgZG9jRnJhZy5hcHBlbmQoc2VjQ3RuLCBmb3JtQ3RuKTtcbiAgY29uc3QgaXRlbUVsZW0gPSBjcmVhdGVFbGVtZW50RGVmYXVsdChlbGVtLCBjbGFzc2VzLmNvbnRhaW5lciwgZmFsc2UsIGRvY0ZyYWcpO1xuICBpdGVtRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBtZWFsQXBpLmlkTWVhbCk7XG4gIGNvbnN0IGl0ZW1Db250ID0gY3JlYXRlRWxlbWVudERlZmF1bHQoZWxlbSwgY2xhc3Nlcy5vdmVybGF5LCBmYWxzZSwgaXRlbUVsZW0pO1xuICByZXR1cm4gaXRlbUNvbnQ7XG59O1xuXG5jb25zdCBjcmVhdGVDb21tZW50TGluZSA9IChkYXRhLCBjbGFzc0xpbmUpID0+IHtcbiAgY29uc3QgZGF0ZSA9IGRhdGEuY3JlYXRpb25fZGF0ZTtcbiAgY29uc3QgbmFtZSA9IGRhdGEudXNlcm5hbWU7XG4gIGNvbnN0IGNvbW1lbnRJdGVtID0gZGF0YS5jb21tZW50O1xuICBjb25zdCBkYXRhUCA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdwJywgY2xhc3NMaW5lLCBgJHtkYXRlfSAke25hbWV9OiAke2NvbW1lbnRJdGVtfWApO1xuICByZXR1cm4gZGF0YVA7XG59O1xuXG5jb25zdCBjcmVhdGVDb21tZW50U2VjID0gKGRhdGFBcnIsIGNsYXNzZXMgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBkb2NGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBjb25zdCB0aXRsZVNwYW4gPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgnc3BhbicsIGNsYXNzZXMudGl0bGUsICdDb21tZW50cycpO1xuICBjb25zdCBjb3VudGVyU3BhbiA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdzcGFuJywgY2xhc3Nlcy50aXRsZUNvdW50ZXIpO1xuICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdoMycsIGNsYXNzZXMudGl0bGVoZWFkZXIpO1xuICBjb25zdCBjb21tZW50Q3RuID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ2RpdicsIGNsYXNzZXMucG9zdEN0bik7XG4gIGxldCB0b3RhbENvbW1lbnQgPSBjb3VudFRvdGFsSXRlbShjb21tZW50Q3RuKTtcbiAgdGl0bGUuYXBwZW5kKHRpdGxlU3BhbiwgY291bnRlclNwYW4pO1xuICBpZiAoZGF0YUFyci5sZW5ndGggPT09IDApIGNvdW50ZXJTcGFuLnRleHRDb250ZW50ID0gYCAoJHt0b3RhbENvbW1lbnR9KWA7XG4gIGVsc2Uge1xuICAgIGRhdGFBcnIuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgY29tbWVudEN0bi5hcHBlbmRDaGlsZChjcmVhdGVDb21tZW50TGluZShkYXRhLCBjbGFzc2VzLnBvc3RJdGVtKSk7XG4gICAgICB0b3RhbENvbW1lbnQgPSBjb3VudFRvdGFsSXRlbShjb21tZW50Q3RuKTtcbiAgICAgIGNvdW50ZXJTcGFuLnRleHRDb250ZW50ID0gYCAoJHt0b3RhbENvbW1lbnR9KWA7XG4gICAgfSk7XG4gIH1cbiAgZG9jRnJhZy5hcHBlbmQodGl0bGUsIGNvbW1lbnRDdG4pO1xuICByZXR1cm4gZG9jRnJhZztcbn07XG5cbmNvbnN0IGNyZWF0ZUNvbW1lbnRGb3JtID0gKGlkLCBjYWxsYmFjaywgY2xhc3NMaW5lID0gZmFsc2UpID0+IHtcbiAgY29uc3QgZG9jRnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29uc3QgdGl0bGVGb3JtID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ2gzJywgY2xhc3NMaW5lLnRpdGxlLCAnQWRkIGEgY29tbWVudCcpO1xuICBjb25zdCBmb3JtQ29tbWVudCA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdmb3JtJywgY2xhc3NMaW5lLmZvcm1Db250YWluZXIpO1xuICBmb3JtQ29tbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICBjb25zdCBpbnB1SXRlbUlEID0gY3JlYXRlSW5wdXQoJ3RleHQnLCBjbGFzc0xpbmUuaW5wdXRIaWRkZW4sICdpdGVtX2lkJywgJ2l0ZW1faWQnLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSk7XG4gIGlucHVJdGVtSUQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGlkKTtcbiAgY29uc3QgbGFiZWxVc2VyID0gY3JlYXRlTGFiZWwoJ3VzZXJuYW1lJywgY2xhc3NMaW5lLmlucHV0TGFiZWwsICdOYW1lJyk7XG4gIGNvbnN0IGlucHV0VXNlciA9IGNyZWF0ZUlucHV0KCd0ZXh0JywgY2xhc3NMaW5lLmlucHV0UmVnLCAndXNlcm5hbWUnLCAndXNlcm5hbWUnLCAnUGxlYXNlIGlucHV0IHlvdXIgbmFtZScsIHRydWUsIGZhbHNlKTtcbiAgY29uc3QgdXNlckRpdiA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdkaXYnLCBjbGFzc0xpbmUuaW5wdXREaXYsIGZhbHNlLCBsYWJlbFVzZXIpO1xuICB1c2VyRGl2LmFwcGVuZENoaWxkKGlucHV0VXNlcik7XG4gIGNvbnN0IGxhYmVsQ29tbWVudCA9IGNyZWF0ZUxhYmVsKCdjb21tZW50JywgY2xhc3NMaW5lLmlucHV0TGFiZWwsICdDb21tZW50Jyk7XG4gIGNvbnN0IGNvbW1lbnRBcmVhID0gY3JlYXRlVGV4dEFyZWEoJzI1MCcsIGNsYXNzTGluZS50ZXh0QXJlYSwgJ2NvbW1lbnQnLCAnY29tbWVudCcsICdQbGVhc2UgaW5wdXQgeW91ciBjb21tZW50JywgdHJ1ZSk7XG4gIGNvbnN0IGNvbW1lbnREaXYgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgnZGl2JywgY2xhc3NMaW5lLmlucHV0RGl2LCBmYWxzZSwgbGFiZWxDb21tZW50KTtcbiAgY29tbWVudERpdi5hcHBlbmRDaGlsZChjb21tZW50QXJlYSk7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGNyZWF0ZUJ1dHRvbignc3VibWl0JywgY2xhc3NMaW5lLmJ1dHRvbiwgJ1N1Ym1pdCBjb21tZW50JywgJ1N1Ym1pdCcpO1xuICBmb3JtQ29tbWVudC5hcHBlbmQoaW5wdUl0ZW1JRCwgdXNlckRpdiwgY29tbWVudERpdiwgc3VibWl0QnRuKTtcbiAgZm9ybUNvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY2FsbGJhY2spO1xuICBkb2NGcmFnLmFwcGVuZCh0aXRsZUZvcm0sIGZvcm1Db21tZW50KTtcbiAgcmV0dXJuIGRvY0ZyYWc7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVJdGVtLCBjcmVhdGVQb3B1cCwgY3JlYXRlQ29tbWVudFNlYywgY3JlYXRlQ29tbWVudEZvcm0sIHRvZ2dsZUJsdXIsXG59OyIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBQT1NUaW5nIGRhdGEgYXMgSlNPTiB3aXRoIGZldGNoLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVVJMIHRvIFBPU1QgZGF0YSB0b1xuICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGEgLSBgRm9ybURhdGFgIGluc3RhbmNlXG4gKiBAcGFyYW0ge0pTT059IGpzb25Gb3JtYXQgLSBqc29uIG9iamVjdCB0byBiZSBwYXNzZWQgYXMgYm9keSBvZiBmZXRjaCBhcGkuXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gUmVzcG9uc2UgYm9keSBmcm9tIFVSTCB0aGF0IHdhcyBQT1NUZWQgdG9cbiAqL1xuY29uc3QgcG9zdERhdGFBc0pzb24gPSBhc3luYyAoeyB1cmwsIGZvcm1EYXRhID0gZmFsc2UsIGpzb25Gb3JtYXQgPSBmYWxzZSB9KSA9PiB7XG4gIGxldCBqc29uRGF0YTtcbiAgaWYgKGZvcm1EYXRhKSB7XG4gICAganNvbkRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEuZW50cmllcygpKTtcbiAgfSBlbHNlIGlmIChqc29uRm9ybWF0KSBqc29uRGF0YSA9IGpzb25Gb3JtYXQ7XG4gIGNvbnN0IEpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uRGF0YSk7XG4gIGNvbnN0IGZldGNoT3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSnNvblN0cmluZyxcbiAgfTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgZmV0Y2hPcHRpb25zKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG4vKipcbiAqIEV2ZW50IGhhbmRsZXIgZm9yIGEgZm9ybSBzdWJtaXQgZXZlbnQuXG4gKiBAcGFyYW0ge1N1Ym1pdEV2ZW50fSBldmVudFxuICovXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKGV2ZW50LCB1cmwpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgc2NvcmVGb3JtID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShzY29yZUZvcm0pO1xuICAgIHNjb3JlRm9ybS5yZXNldCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHBvc3REYXRhQXNKc29uKHsgdXJsLCBmb3JtRGF0YSB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufTtcblxuLyoqXG4gKiBFdmVudCBoYW5kbGVyIGZvciBhIGZvcm0gc3VibWl0IGV2ZW50LlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtKU09OfSBqc29uXG4gKi9cbmNvbnN0IGhhbmRsZVBvc3QgPSBhc3luYyAodXJsLCBqc29uKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcG9zdERhdGFBc0pzb24oeyB1cmwsIGZvcm1EYXRhOiBmYWxzZSwganNvbkZvcm1hdDoganNvbiB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgaGFuZGxlRm9ybVN1Ym1pdCwgcG9zdERhdGFBc0pzb24sIGhhbmRsZVBvc3QsXG59OyIsImNvbnN0IGl0ZW1DbGFzc2VzID0ge1xuICBjb250YWluZXI6ICdhcHAtaXRlbScsXG4gIGltYWdlOiAnYXBwLWltZycsXG4gIHRpdGxlSGVhZGVyOiAnYXBwLXRpdGxlLWRpdicsXG4gIGxpa2VzQ3RuOiAnYXBwLWxpa2UnLFxuICBsaWtlc0ljb246ICdhcHAtbGlrZS1zdmcnLFxuICBsaWtlc1RleHQ6ICdhcHAtbGlrZS10ZXh0JyxcbiAgYnRuQ3RuOiAnYXBwLWRpdi1idG4nLFxuICBidG5Db21tZW50OiBbJ2FwcC1idG4nLCAnY29tbWVudCddLFxuICBidG5SZXNlcnZlOiBbJ2FwcC1idG4nLCAncmVzZXJ2YXRpb24nXSxcbn07XG5cbmNvbnN0IHBvcFVwQ2xhc3NlcyA9IHtcbiAgY29udGFpbmVyOiAnYXBwLWl0ZW0tcG9wdXAnLFxuICBpbWFnZTogJ2FwcC1pbWctcG9wJyxcbiAgdGl0bGVIZWFkZXI6ICdhcHAtdGl0bGUtaGVhZGVyJyxcbiAgcHJvcGVydGllczogJ2FwcC1wcm9wZXJ0eScsXG4gIHByb3BlcnR5OiAnYXBwLXByb3AnLFxuICBleGl0OiAnYXBwLWV4aXQnLFxuICBvdmVybGF5OiAnYXBwLWl0ZW0tcG9wdXAtb3ZlcmxheScsXG4gIHRpdGxlOiAnYXBwLXRpdGxlLXBvcCcsXG4gIHNlY3Rpb25DdG46ICdhcHAtc2VjLWN0bicsXG4gIGZvcm1Db250YWluZXI6ICdhcHAtZm9ybS1zZWMtY3RuJyxcbn07XG5cbmNvbnN0IHBvcFVwU2VjdGlvbkNsYXNzZXMgPSB7XG4gIGNvbnRhaW5lcjogJ2FwcC1zZWMtY3RuJyxcbiAgdGl0bGVoZWFkZXI6ICdhcHAtc2VjdGlvbi1oZWFkZXInLFxuICB0aXRsZTogJ2FwcC1zZWN0aW9uLXRpdGxlJyxcbiAgdGl0bGVDb3VudGVyOiBbJ2FwcC1zZWN0aW9uLXRpdGxlJywgJ2FwcC1zZWN0aW9uLWNvdW50ZXInXSxcbiAgcG9zdEN0bjogJ2FwcC1zZWN0aW9uLWN0bicsXG4gIHBvc3RJdGVtOiAnYXBwLXNlY3Rpb24taXRlbScsXG59O1xuXG5jb25zdCBwb3BVcEZvcm1DbGFzc2VzID0ge1xuICBjb250YWluZXI6ICdhcHAtZm9ybS1zZWMtY3RuJyxcbiAgdGl0bGU6ICdhcHAtZm9ybS10aXRsZScsXG4gIGZvcm1Db250YWluZXI6ICdhcHAtZm9ybS1jdG4nLFxuICBpbnB1dEhpZGRlbjogJ2FwcC1mb3JtLWlucHV0LWhpZGRlbicsXG4gIGlucHV0RGl2OiAnYXBwLWZvcm0taW5wdXQtZGl2JyxcbiAgaW5wdXRMYWJlbDogJ2FwcC1mb3JtLWlucHV0LWxhYmVsJyxcbiAgaW5wdXRSZWc6ICdhcHAtZm9ybS1pbnB1dC1yZWcnLFxuICB0ZXh0QXJlYTogJ2FwcC1mb3JtLXRleHRBcmVhJyxcbiAgYnV0dG9uOiAnYXBwLWJ0bicsXG59O1xuXG5jb25zdCB4bGluayA9ICcuLi9hc3NldC9yZXNvdXJjZS9pY29ucy5zdmcjaGVhcnQtbGlrZSc7XG5cbmNvbnN0IG1lYUFQSVVyaSA9IHtcbiAgYmFzZUZpbHRlcjogJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9maWx0ZXIucGhwPycsXG4gIGJhc2VMb29rVXA6ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvbG9va3VwLnBocD8nLFxuICBxdWVyeUxvb2tVcDogJ2knLFxuICBxdWVyeUZpbHRlcjogJ2MnLFxufTtcblxuY29uc3QgaW52b2x2ZW1lbnRBUElVcmkgPSB7XG4gIGJhc2U6ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nLFxuICBxdWVyeUxpa2U6ICdsaWtlcy8nLFxuICBxdWVyeUNvbW1lbnQ6ICdjb21tZW50cycsXG4gIHF1ZXJ5UmVzZXJ2ZTogJ3Jlc2VydmF0aW9ucycsXG4gIGFwcElEOiAnV2JlM0l6blEyTFFvRlBIbVZyd3AvJyxcbn07XG5cbmV4cG9ydCB7XG4gIHhsaW5rLCBwb3BVcFNlY3Rpb25DbGFzc2VzLCBpdGVtQ2xhc3NlcywgcG9wVXBDbGFzc2VzLCBwb3BVcEZvcm1DbGFzc2VzLFxuICBtZWFBUElVcmksIGludm9sdmVtZW50QVBJVXJpLFxufTsiLCJjb25zdCByZWRpcmVjdFdpbmRvdyA9IChocmVmKSA9PiB7XG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbn07XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gYWRkIGNsYXNzIG9yIGNsYXNzZXMgdG8gSFRNTCBFbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIEhUTUwgRWxlbWVudCB0byBiZSBtb2RpZmllZC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc2VzIFN0cmluZyBvciBBcnJheSBvZiBTdHJpbmcgdG8gYmUgYWRkZWQuXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFJldHVybnMgSFRNTCBlbGVtZW50IHdpdGggY2hvc2VuIGNsYXNzZXMuXG4gKi9cbmNvbnN0IGFkZENsYXNzID0gKGVsZW0sIGNsYXNzZXMpID0+IHtcbiAgaWYgKCh0eXBlb2YgY2xhc3NlcykgPT09ICdzdHJpbmcnKSBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3Nlcyk7XG4gIGVsc2UgaWYgKCh0eXBlb2YgY2xhc3NlcykgPT09ICdvYmplY3QnKSBlbGVtLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gIHJldHVybiBlbGVtO1xufTtcblxuLyoqXG4gKiBGdW5jdGlvbiB0byBjcmVhdGUgSFRNTCBlbGVtZW50IHVzaW5nIHRhZyBuYW1lcy5cbiAqIENsYXNzZXMgYW5kIHRleHQgY29udGVudCBjYW4gYmUgYWRkZWQgYXMgZWxlbWVudCBpcyBjcmVhdGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZWxlbSBUYWcgbmFtZSBvZiB0aGUgZWxlbWVudCB0byBiZSBjcmVhdGVkLiBFeGFtcGxlOiBgZGl2LCBwLCBzZWN0aW9uYFxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzZXMgTmFtZSBvZiBjbGFzcyBvciBjbGFzc2VzIHRvIGFkZC4gU3RyaW5nLCBhcnJheSBvZiBzdHJpbmcgc2hvdWxkIGJlIHVzZWQuXG4gKiBJZiBubyBjbGFzcyBpcyB3YW50ZWQsIGZhbHNlIHNob3VsZCBiZSB1c2UuT3B0aW9uYWwgUGFyYW1lbnRlci5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0Q29udGV4dCBUZXh0IHRvIGJlIGFkZGVkIGFzIHRleHQgY29udGVudCB0byBIVE1MIGVsZW1lbnQuXG4gKiBPcHRpb24gcGFyYW1ldGVyLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaW5uZXJDaGlsZCBIVE1MIEVsZW1lbnQgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gUmV0dXJucyBIVE1MIGVsZW1lbnQgY2hvc2VuIHdpdGggc2V0IGF0dHJpYnV0ZXMuXG4gKi9cbmNvbnN0IGNyZWF0ZUVsZW1lbnREZWZhdWx0ID0gKGVsZW0sIGNsYXNzZXMgPSBmYWxzZSwgdGV4dENvbnRlbnQgPSBmYWxzZSwgaW5uZXJDaGlsZCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW0pO1xuICBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc2VzKTtcbiAgaWYgKHRleHRDb250ZW50KSBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIGlmIChpbm5lckNoaWxkKSBlbGVtZW50LmFwcGVuZENoaWxkKGlubmVyQ2hpbGQpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBIVE1MIHN2ZyBlbGVtZW50IHRvIGJlIHJlbmRlcmVkIGRpbmFtaWNhbGx5XG4gKiBAcGFyYW0ge3N0cmluZ30gaHJlZiBIeXBlcmxpbmsgcmVmZXJlbmNlIGZvciBmaWxlIGxvY2F0aW9uXG4gKiBAcmV0dXJucyB7SFRNTE9yU1ZHRWxlbWVudH0gSFRNTCBzdmcgZWxlbWVudCB0byBiZSBhcHBlbmQgdG8gRE9NIHRvIGJlIHJlbmRlcmVkIGRpbmFtaWNhbGx5XG4gKi9cbmNvbnN0IGNyZWF0ZU5TID0gKGhyZWYpID0+IHtcbiAgY29uc3QgeGxpbmsgPSBocmVmLnNwbGl0KCcjJyk7XG4gIGNvbnN0IHVzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndXNlJyk7XG4gIHVzZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgJHtocmVmfWApO1xuICB1c2UuY2xhc3NMaXN0LmFkZCh4bGlua1sxXSk7XG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gIHN2Zy5hcHBlbmRDaGlsZCh1c2UpO1xuICBzdmcuY2xhc3NMaXN0LmFkZCh4bGlua1sxXSk7XG4gIHJldHVybiBzdmc7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBIVE1MIGxhYmVsIGVsZW1lbnQgd2l0aCBhIGZvciBhdHRyaWJ1dGUsIGRpZmZlcmV0ZSBjbGFzc2VzIGFuZCBpbm5lciBjaGlsZCBhbmQgdHh0XG4gKiBjb250ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gZm9yQXRyPWZhbHNlIEZvciBhdHRyaWJ1dGUgaW4gbGFiZWwgdGhhdCBpbmRpY2F0ZXMgd2hpY2ggaW5wdXQgb3IgdGV4dCBhcmVhXG4gKiBpdCBpcyBsaW5rZWQgd2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzZXM9ZmFsc2UgU3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZyB3aXRoIGNsYXNzIG5hbWVzXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dENvbnRlbnQ9ZmFsc2UgU3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBsYWJlbFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaW5uZXJDaGlsZD1mYWxzZSBIVE1MIGVsZW1lbnQgdG8gYmUgYXBwZW5kIHRvIGxhYmVsXG4gKiBAcmV0dXJucyB7SFRNTExhYmVsRWxlbWVudH0gSFRNTCBsYWJlbCBlbGVtZW50IHJlYWR5IHRvIGJlIGFwcGVuZCB0byB0aGUgZG9tXG4gKi9cbmNvbnN0IGNyZWF0ZUxhYmVsID0gKGZvckF0ciA9IGZhbHNlLCBjbGFzc2VzID0gZmFsc2UsIHRleHRDb250ZW50ID0gZmFsc2UsIGlubmVyQ2hpbGQgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdsYWJlbCcsIGNsYXNzZXMsIHRleHRDb250ZW50LCBpbm5lckNoaWxkKTtcbiAgaWYgKGZvckF0cikgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBmb3JBdHIpO1xuICByZXR1cm4gbGFiZWw7XG59O1xuXG5jb25zdCBjcmVhdGVUZXh0QXJlYSA9IChsZW5ndGggPSBmYWxzZSwgY2xhc3NlcyA9IGZhbHNlLFxuICBpZCA9IGZhbHNlLCBuYW1lID0gZmFsc2UsIHBsYWNlaG9sZGVyID0gZmFsc2UsIHJlcXVpcmVkID0gZmFsc2UpID0+IHtcbiAgY29uc3QgdGV4dEFyZWEgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgndGV4dGFyZWEnLCBjbGFzc2VzKTtcbiAgaWYgKGxlbmd0aCkgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCBsZW5ndGgpO1xuICBpZiAoaWQpIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gIGlmIChuYW1lKSB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBuYW1lKTtcbiAgaWYgKHBsYWNlaG9sZGVyKSB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpO1xuICBpZiAocmVxdWlyZWQpIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpO1xuICBlbHNlIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnZmFsc2UnKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdzcGVsbGNoZWNrJywgJ3RydWUnKTtcbiAgcmV0dXJuIHRleHRBcmVhO1xufTtcblxuY29uc3QgY3JlYXRlSW5wdXQgPSAodHlwZSA9IGZhbHNlLCBjbGFzc2VzID0gZmFsc2UsXG4gIGlkID0gZmFsc2UsIG5hbWUgPSBmYWxzZSwgcGxhY2Vob2xkZXIgPSBmYWxzZSwgcmVxdWlyZWQgPSBmYWxzZSwgcmVhZG9ubHkgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBpbnB1dCA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdpbnB1dCcsIGNsYXNzZXMpO1xuICBpZiAodHlwZSkgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgdHlwZSk7XG4gIGlmIChpZCkgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgaWYgKG5hbWUpIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIG5hbWUpO1xuICBpZiAocGxhY2Vob2xkZXIpIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBwbGFjZWhvbGRlcik7XG4gIGlmIChyZXF1aXJlZCkgaW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICd0cnVlJyk7XG4gIGlmIChyZWFkb25seSkgaW5wdXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICd0cnVlJyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsICd0cnVlJyk7XG4gIHJldHVybiBpbnB1dDtcbn07XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gY3JlYXRlIEhUTUwgQnV0dG9uIGVsZW1lbnQuIENsYXNzZXMgYW5kIHRleHQgY29udGVudFxuICogY2FuIGJlIGFkZGVkIGFzIGVsZW1lbnQgaXMgY3JlYXRlLiBDbGljayBldmVudCB0byBhIGFub3RoZXIgd2VicGFnZSBjYW4gYmUgYWRkZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gZnVuYyBUeXBlIG9mIGJ1dHRvbiBgc3VtYml0LCByZXNldCwgYnV0dG9uYFxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzZXMgTmFtZSBvZiBjbGFzcyBvciBjbGFzc2VzIHRvIGFkZC4gU3RyaW5nLCBhcnJheSBvZiBzdHJpbmcgc2hvdWxkIGJlIHVzZWQuXG4gKiBJZiBubyBjbGFzcyBpcyB3YW50ZWQsIGZhbHNlIHNob3VsZCBiZSB1c2UuT3B0aW9uYWwgUGFyYW1lbnRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcmlhTGFiZWwgVGV4dCBmb3IgYWNjZXNzaWJpbGl0eVxuICogQHBhcmFtIHthbnl9IHRleHRDb250ZW50IFRleHQgdG8gYmUgYWRkZWQgYXMgdGV4dCBjb250ZW50IHRvIEhUTUwgZWxlbWVudC5cbiAqIE9wdGlvbiBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpbm5lckNoaWxkIEhUTUwgRWxlbWVudCB0byBiZSBhcHBlbmRlZFxuICogQHBhcmFtIHthbnl9IGhyZWYgSHlwZXJsaW5rIHJlZmVyZW5jZSB0byBiZSBmb2xsb3dlZCBpZiBidXR0b24gaXMgY2xpY2tlZC5cbiAqIE9wdGlvbiBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7SFRNTEJ1dHRvbkVsZW1lbnR9IFJldHVybnMgSFRNTCBidXR0b24gZWxlbWVudCBjaG9zZW4gd2l0aCBzZXQgYXR0cmlidXRlcy5cbiAqL1xuY29uc3QgY3JlYXRlQnV0dG9uID0gKGZ1bmMsIGNsYXNzZXMsIGFyaWFMYWJlbCwgdGV4dENvbnRlbnQgPSBmYWxzZSxcbiAgaW5uZXJDaGlsZCA9IGZhbHNlLCBocmVmID0gZmFsc2UpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi50eXBlID0gZnVuYztcbiAgYnV0dG9uLmFyaWFMYWJlbCA9IGFyaWFMYWJlbDtcbiAgYWRkQ2xhc3MoYnV0dG9uLCBjbGFzc2VzKTtcbiAgaWYgKHRleHRDb250ZW50KSBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgaWYgKGhyZWYpIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWRpcmVjdFdpbmRvdyhocmVmKSk7XG4gIH1cbiAgaWYgKGlubmVyQ2hpbGQpIGJ1dHRvbi5hcHBlbmRDaGlsZChpbm5lckNoaWxkKTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZUltZyA9IChjbGFzc2VzLCBuYW1lLCB1cmwpID0+IHtcbiAgY29uc3QgaW1nRWxlbSA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdpbWcnLCBjbGFzc2VzKTtcbiAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHVybCk7XG4gIGltZ0VsZW0uc2V0QXR0cmlidXRlKCdhbHQnLCBuYW1lKTtcbiAgcmV0dXJuIGltZ0VsZW07XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVMYWJlbCwgY3JlYXRlSW1nLCBjcmVhdGVOUywgY3JlYXRlVGV4dEFyZWEsXG4gIGFkZENsYXNzLCBjcmVhdGVFbGVtZW50RGVmYXVsdCwgY3JlYXRlQnV0dG9uLCBjcmVhdGVJbnB1dCxcbn07XG4iLCJjb25zdCBjcmVhdGVBcGlNZWFsVVJMID0gKGJhc2V1cmwsIHF1ZXJ5S2V5LCBxdWVyeVZhbHVlKSA9PiB7XG4gIGNvbnN0IHVybCA9IGAke2Jhc2V1cmx9JHtxdWVyeUtleX09JHtxdWVyeVZhbHVlfWA7XG4gIHJldHVybiB1cmw7XG59O1xuXG5jb25zdCBjcmVhdGVBcGlJbnZVUkwgPSAoYmFzZXVybCwgaWQsIGVuZHBvaW50KSA9PiB7XG4gIGNvbnN0IHVybCA9IGAke2Jhc2V1cmx9JHtpZH0ke2VuZHBvaW50fWA7XG4gIHJldHVybiB1cmw7XG59O1xuXG5jb25zdCBjcmVhdGVBcGlJbnZRdWVyeVVSTCA9IChiYXNldXJsLCBpZCwgZW5kcG9pbnQsIHF1ZXJ5KSA9PiB7XG4gIGNvbnN0IHVybCA9IGAke2Jhc2V1cmx9JHtpZH0ke2VuZHBvaW50fT9pdGVtX2lkPSR7cXVlcnl9YDtcbiAgcmV0dXJuIHVybDtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUFwaU1lYWxVUkwsIGNyZWF0ZUFwaUludlVSTCwgY3JlYXRlQXBpSW52UXVlcnlVUkwsXG59OyIsImltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tICcuL0xpc3RJdGVtTW9kLmpzJztcbmltcG9ydCB7IGl0ZW1DbGFzc2VzLCB4bGluayB9IGZyb20gJy4vY29uc3QuanMnO1xuaW1wb3J0IHsgY3JlYXRlTGlrZSwgZmluZExpa2VzLCBnZXRMaWtlc1Jlc3BvbnNlIH0gZnJvbSAnLi9BUElMaWtlSGFuZGxpbmcuanMnO1xuaW1wb3J0IHsgZ2V0TWVhbHNJRFJlc3BvbnNlLCBnZXRNZWFsc0NhdFJlc3BvbnNlIH0gZnJvbSAnLi9BUElNZWFsc0hhbmRsaW5nLmpzJztcbmltcG9ydCB7IGNyZWF0ZUNvbW1lbnRQb3BVcCB9IGZyb20gJy4vQVBJQ29tbWVudHNIYW5kbGluZy5qcyc7XG5pbXBvcnQgeyBjb3VudFRvdGFsSXRlbSwgYXBwZW5kVG90YWwgfSBmcm9tICcuL0NvdW50VG90YWxJdGVtcy5qcyc7XG5cbmNvbnN0IGFwcGVuZFJlc3BvbnNlRmVlZGJhY2sgPSBhc3luYyAobm9kZSkgPT4ge1xuICBjb25zdCBzaG93UmVzcG9uc2VGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1GZWVkYmFjaycpO1xuICBzaG93UmVzcG9uc2VGb3JtLnRleHRDb250ZW50ID0gbm9kZTtcbn07XG5cbmNvbnN0IGdldENhdGVnb3J5SXRlbXMgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgY29uc3QgY2F0SUQgPSBhd2FpdCBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gIHJldHVybiBjYXRJRDtcbn07XG5cbmNvbnN0IGFwcGVuZExpc3RJdGVtcyA9IGFzeW5jIChkYXRhQXJyLCBpbnZBcnIsIElEKSA9PiB7XG4gIGNvbnN0IGFwcEN0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAtY3RuJyk7XG4gIGFwcEN0bi5pbm5lckhUTUwgPSAnJztcbiAgZGF0YUFyci5mb3JFYWNoKGFzeW5jIChkYXRhKSA9PiB7XG4gICAgY29uc3QgbWVhbERhdGEgPSBhd2FpdCBnZXRNZWFsc0lEUmVzcG9uc2UoZGF0YS5pZE1lYWwpO1xuICAgIGNvbnN0IG1lYWxGcmFnID0gY3JlYXRlSXRlbSgnbGknLCBpdGVtQ2xhc3NlcywgbWVhbERhdGEubWVhbHNbMF0sIHhsaW5rLCBhd2FpdCBmaW5kTGlrZXMobWVhbERhdGEubWVhbHNbMF0uaWRNZWFsLCBpbnZBcnIpLFxuICAgICAgY3JlYXRlTGlrZSwgKCkgPT4gY3JlYXRlQ29tbWVudFBvcFVwKG1lYWxEYXRhLm1lYWxzWzBdKSk7XG4gICAgYXBwQ3RuLmFwcGVuZENoaWxkKG1lYWxGcmFnKTtcbiAgICBjb25zdCB0b3RhbCA9IGNvdW50VG90YWxJdGVtKGFwcEN0bik7XG4gICAgYXBwZW5kVG90YWwodG90YWwsIElEKTtcbiAgfSk7XG4gIGFwcGVuZFJlc3BvbnNlRmVlZGJhY2soJ1BsZWFzZSBTZWxlY3QgYSBNZWFsJyk7XG59O1xuXG5jb25zdCBwcmludExpc3RJdGVtcyA9IGFzeW5jIChldmVudCkgPT4ge1xuICBjb25zdCBjYXRJRCA9IGF3YWl0IGdldENhdGVnb3J5SXRlbXMoZXZlbnQpO1xuICBjb25zdCBkYXRhUmVzcG9uc2VNZWFsID0gYXdhaXQgZ2V0TWVhbHNDYXRSZXNwb25zZShjYXRJRCk7XG4gIGNvbnN0IGRhdGFSZXNwb25zZUludiA9IGF3YWl0IGdldExpa2VzUmVzcG9uc2UoKTtcbiAgaWYgKGRhdGFSZXNwb25zZU1lYWwgaW5zdGFuY2VvZiBFcnJvciB8fCBkYXRhUmVzcG9uc2VJbnYgaW5zdGFuY2VvZiBFcnJvcikgYXBwZW5kUmVzcG9uc2VGZWVkYmFjaygnVW5hYmxlIHRvIEZldGNoIERhdGEnKTtcbiAgZWxzZSBhd2FpdCBhcHBlbmRMaXN0SXRlbXMoZGF0YVJlc3BvbnNlTWVhbC5tZWFscywgZGF0YVJlc3BvbnNlSW52LCBjYXRJRCk7XG59O1xuXG5leHBvcnQge1xuICBwcmludExpc3RJdGVtcywgeGxpbmssXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==