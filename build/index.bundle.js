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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --svg-side: clamp(16px, (100vw - 320px) * 1000, clamp(20px, (100vw - 640px) * 1000, clamp(25px, (100vw - 1280px) * 1000, 30px)));\n  --font-size: calc(var(--svg-side) * 0.8);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nul,\nli {\n  list-style-type: none;\n}\n\nbody {\n  background-color: #6e6ce9;\n  font-family: 'Pangolin', 'Merriweather', serif, cursive;\n  min-height: 100vh;\n  display: flex;\n  flex-flow: column;\n  padding: 5px;\n}\n\n.nav-bar {\n  background-color: #848bf1;\n  padding: 2%;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.logo {\n  height: calc(var(--svg-side) * 2);\n}\n\n.nav-list {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.nav-items {\n  list-style: none;\n  color: white;\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin-top: 15px;\n  margin-right: 3rem;\n}\n\n.nav-items a {\n  text-decoration: none;\n  color: black;\n}\n\n.extremity {\n  padding-block: 10px;\n  padding-inline: 20px;\n  border: 2px solid black;\n  display: flex;\n  justify-content: space-between;\n}\n\n.svg {\n  margin-block: auto;\n}\n\n.footer-row {\n  display: flex;\n  gap: 10px;\n}\n\n.app-item svg,\n.footer-row svg {\n  height: var(--svg-side);\n  width: var(--svg-side);\n}\n\nmain {\n  height: auto;\n  flex-grow: 1;\n  padding: 20px;\n}\n\n#formFeedback {\n  text-align: center;\n  font-size: 2rem;\n}\n\n.active {\n  font-weight: bolder;\n}\n\n#app-ctn {\n  --n: 2;\n  --w: 350px;\n  --n1: 3;\n  --w1: 700px;\n  --n2: 4;\n  --w2: 1050px;\n\n  display: grid;\n  column-gap: 30px;\n  row-gap: 30px;\n  grid-template-columns: repeat(auto-fit, minmax(clamp(clamp(clamp(100%/(var(--n2) + 1) + 0.1%, (var(--w2) - 100vw) * 1000, 100%/(var(--n1) + 1) + 0.1%), (var(--w1) - 100vw) * 1000, 100%/(var(--n) + 1) + 0.1%), (var(--w) - 100vw) * 1000, 100%), 3fr));\n  padding-block: 50px;\n  padding-inline: 20px;\n  max-width: 1200px;\n  margin-inline: auto;\n}\n\n.app-item {\n  padding: 5%;\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n  background-color: #848bf1;\n  border-radius: 10px;\n}\n\n.app-img {\n  width: 100%;\n  height: auto;\n}\n\n.app-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-inline: 5%;\n}\n\n.app-div-btn {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15%;\n  justify-content: center;\n}\n\n.app-like-text {\n  text-align: center;\n}\n\n.app-like-svg {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  gap: 5px;\n}\n\n.app-btn {\n  padding-inline: 10px;\n  padding-block: 5px;\n  z-index: 1;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.app-btn:hover {\n  background-color: rgb(114, 46, 46);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,gIAAgI;EAChI,wCAAwC;AAC1C;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,uDAAuD;EACvD,iBAAiB;EACjB,aAAa;EACb,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,eAAe;EACf,SAAS;EACT,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;EACvB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;EAEE,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,MAAM;EACN,UAAU;EACV,OAAO;EACP,WAAW;EACX,OAAO;EACP,YAAY;;EAEZ,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,wPAAwP;EACxP,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,QAAQ;EACR,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,UAAU;EACV,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,kCAAkC;AACpC","sourcesContent":[":root {\n  --svg-side: clamp(16px, (100vw - 320px) * 1000, clamp(20px, (100vw - 640px) * 1000, clamp(25px, (100vw - 1280px) * 1000, 30px)));\n  --font-size: calc(var(--svg-side) * 0.8);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nul,\nli {\n  list-style-type: none;\n}\n\nbody {\n  background-color: #6e6ce9;\n  font-family: 'Pangolin', 'Merriweather', serif, cursive;\n  min-height: 100vh;\n  display: flex;\n  flex-flow: column;\n  padding: 5px;\n}\n\n.nav-bar {\n  background-color: #848bf1;\n  padding: 2%;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.logo {\n  height: calc(var(--svg-side) * 2);\n}\n\n.nav-list {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.nav-items {\n  list-style: none;\n  color: white;\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin-top: 15px;\n  margin-right: 3rem;\n}\n\n.nav-items a {\n  text-decoration: none;\n  color: black;\n}\n\n.extremity {\n  padding-block: 10px;\n  padding-inline: 20px;\n  border: 2px solid black;\n  display: flex;\n  justify-content: space-between;\n}\n\n.svg {\n  margin-block: auto;\n}\n\n.footer-row {\n  display: flex;\n  gap: 10px;\n}\n\n.app-item svg,\n.footer-row svg {\n  height: var(--svg-side);\n  width: var(--svg-side);\n}\n\nmain {\n  height: auto;\n  flex-grow: 1;\n  padding: 20px;\n}\n\n#formFeedback {\n  text-align: center;\n  font-size: 2rem;\n}\n\n.active {\n  font-weight: bolder;\n}\n\n#app-ctn {\n  --n: 2;\n  --w: 350px;\n  --n1: 3;\n  --w1: 700px;\n  --n2: 4;\n  --w2: 1050px;\n\n  display: grid;\n  column-gap: 30px;\n  row-gap: 30px;\n  grid-template-columns: repeat(auto-fit, minmax(clamp(clamp(clamp(100%/(var(--n2) + 1) + 0.1%, (var(--w2) - 100vw) * 1000, 100%/(var(--n1) + 1) + 0.1%), (var(--w1) - 100vw) * 1000, 100%/(var(--n) + 1) + 0.1%), (var(--w) - 100vw) * 1000, 100%), 3fr));\n  padding-block: 50px;\n  padding-inline: 20px;\n  max-width: 1200px;\n  margin-inline: auto;\n}\n\n.app-item {\n  padding: 5%;\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n  background-color: #848bf1;\n  border-radius: 10px;\n}\n\n.app-img {\n  width: 100%;\n  height: auto;\n}\n\n.app-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-inline: 5%;\n}\n\n.app-div-btn {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15%;\n  justify-content: center;\n}\n\n.app-like-text {\n  text-align: center;\n}\n\n.app-like-svg {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  gap: 5px;\n}\n\n.app-btn {\n  padding-inline: 10px;\n  padding-block: 5px;\n  z-index: 1;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.app-btn:hover {\n  background-color: rgb(114, 46, 46);\n}\n"],"sourceRoot":""}]);
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
    (0,_modules_utils_js__WEBPACK_IMPORTED_MODULE_2__.printList)(e);
  });
});

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
/* harmony export */   createElementDefault: () => (/* reexport safe */ _createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault),
/* harmony export */   createItem: () => (/* binding */ createItem)
/* harmony export */ });
/* harmony import */ var _createElementMod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElementMod.js */ "./src/modules/createElementMod.js");


const createItem = async (elem, classes, mealApi, xlink, likeApi, cb) => {
  const docFrag = document.createDocumentFragment();
  docFrag.appendChild((0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createImg)(classes[1], mealApi[0].strMeal, mealApi[0].strMealThumb));
  const elemHeader = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('div', classes[2]);
  const titleImg = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('p', classes[3], mealApi[0].strMeal);
  elemHeader.appendChild(titleImg);
  const elemLikes = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('div', classes[4]);
  const elemLikesSVG = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createNS)(xlink);
  elemLikes.appendChild(elemLikesSVG);
  const elemLikesP = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('p', classes[5], `${likeApi} like${likeApi > 1 ? 's' : ''}`);
  elemLikes.appendChild(elemLikesP);
  elemHeader.appendChild(elemLikes);
  docFrag.appendChild(elemHeader);
  const btnDiv = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)('div', classes[6]);
  btnDiv.appendChild((0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', classes[7], 'Go to Comments', 'Comments'));
  btnDiv.appendChild((0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', classes[7], 'Go to Reservations', 'Reservations'));
  docFrag.appendChild(btnDiv);
  const itemElem = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)(elem, classes[0], false, docFrag);
  itemElem.setAttribute('data-id', mealApi[0].idMeal);
  itemElem.addEventListener('click', cb);
  return itemElem;
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
/* harmony export */   baseurlFilterMeal: () => (/* binding */ baseurlFilterMeal),
/* harmony export */   baseurlInvolvement: () => (/* binding */ baseurlInvolvement),
/* harmony export */   baseurllookupMeal: () => (/* binding */ baseurllookupMeal),
/* harmony export */   classes: () => (/* binding */ classes),
/* harmony export */   parameterCommApp: () => (/* binding */ parameterCommApp),
/* harmony export */   parameterIDApp: () => (/* binding */ parameterIDApp),
/* harmony export */   parameterLikeApp: () => (/* binding */ parameterLikeApp),
/* harmony export */   parameterMealCat: () => (/* binding */ parameterMealCat),
/* harmony export */   parameterMealID: () => (/* binding */ parameterMealID),
/* harmony export */   parameterReservApp: () => (/* binding */ parameterReservApp),
/* harmony export */   xlink: () => (/* binding */ xlink)
/* harmony export */ });
const classCtn = 'app-item';
const classImg = 'app-img';
const classTittle = 'app-title';
const classLikes = 'app-like';
const classLikesSVG = 'app-like-svg';
const classLikesText = 'app-like-text';
const classDivBtn = 'app-div-btn';
const classBtn = 'app-btn';

const classes = [
  classCtn, classImg, classTittle, classLikes,
  classLikesSVG, classLikesText, classDivBtn, classBtn,
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
  textContent = false, innerChild = false) => {
  const textArea = createElementDefault('textarea', classes, textContent, innerChild);
  if (length) textArea.setAttribute('maxlength', length);
  textArea.setAttribute('spellcheck', 'true');
  return textArea;
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
/* harmony export */   createApiInvURL: () => (/* binding */ createApiInvURL),
/* harmony export */   createApiMealURL: () => (/* binding */ createApiMealURL)
/* harmony export */ });
const createApiMealURL = (baseurl, queryKey, queryValue) => {
  const url = `${baseurl}${queryKey}=${queryValue}`;
  return url;
};

const createApiInvURL = (baseurl, id = false, endpoint = false) => {
  const url = `${baseurl}${id}${endpoint}`;
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
/* harmony export */   baseurlFilterMeal: () => (/* reexport safe */ _const_js__WEBPACK_IMPORTED_MODULE_4__.baseurlFilterMeal),
/* harmony export */   printList: () => (/* binding */ printList)
/* harmony export */ });
/* harmony import */ var _createURLAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createURLAPI.js */ "./src/modules/createURLAPI.js");
/* harmony import */ var _ListItemMod_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListItemMod.js */ "./src/modules/ListItemMod.js");
/* harmony import */ var _PostAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostAPI.js */ "./src/modules/PostAPI.js");
/* harmony import */ var _GetAPI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetAPI.js */ "./src/modules/GetAPI.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./const.js */ "./src/modules/const.js");






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
    const url = (0,_createURLAPI_js__WEBPACK_IMPORTED_MODULE_0__.createApiInvURL)(_const_js__WEBPACK_IMPORTED_MODULE_4__.baseurlInvolvement, _const_js__WEBPACK_IMPORTED_MODULE_4__.parameterIDApp, _const_js__WEBPACK_IMPORTED_MODULE_4__.parameterLikeApp);
    await (0,_PostAPI_js__WEBPACK_IMPORTED_MODULE_2__.handlePost)(url, await likesJson(currentID));
    const dataResponseInv = await (0,_GetAPI_js__WEBPACK_IMPORTED_MODULE_3__.handleGETAPI)(url);
    const qtyLikes = await findLikes(currentID, dataResponseInv);
    const prtNde = event.target.parentNode.parentNode;
    await updateLikesDOM(prtNde, await qtyLikes);
  }
};

const getMealsAPIResponse = async (data) => {
  const mealIDURL = (0,_createURLAPI_js__WEBPACK_IMPORTED_MODULE_0__.createApiMealURL)(_const_js__WEBPACK_IMPORTED_MODULE_4__.baseurllookupMeal, _const_js__WEBPACK_IMPORTED_MODULE_4__.parameterMealID, data.idMeal);
  const dataResponse = await (0,_GetAPI_js__WEBPACK_IMPORTED_MODULE_3__.handleGETAPI)(mealIDURL);
  return dataResponse.meals;
};

const appendItems = async (dataArr, invArr) => {
  const appCtn = document.getElementById('app-ctn');
  appCtn.innerHTML = '';
  dataArr.forEach(async (data) => {
    const mealData = await getMealsAPIResponse(data);
    const mealFrag = await (0,_ListItemMod_js__WEBPACK_IMPORTED_MODULE_1__.createItem)('li', _const_js__WEBPACK_IMPORTED_MODULE_4__.classes, mealData, _const_js__WEBPACK_IMPORTED_MODULE_4__.xlink, await findLikes(mealData[0].idMeal, invArr), createLike);
    appCtn.appendChild(mealFrag);
  });
};

const printList = async (event) => {
  const mealCatURL = (0,_createURLAPI_js__WEBPACK_IMPORTED_MODULE_0__.createApiMealURL)(_const_js__WEBPACK_IMPORTED_MODULE_4__.baseurlFilterMeal, _const_js__WEBPACK_IMPORTED_MODULE_4__.parameterMealCat, event.target.getAttribute('href'));
  const invLikesURL = (0,_createURLAPI_js__WEBPACK_IMPORTED_MODULE_0__.createApiInvURL)(_const_js__WEBPACK_IMPORTED_MODULE_4__.baseurlInvolvement, _const_js__WEBPACK_IMPORTED_MODULE_4__.parameterIDApp, _const_js__WEBPACK_IMPORTED_MODULE_4__.parameterLikeApp);
  const dataResponseMeal = await (0,_GetAPI_js__WEBPACK_IMPORTED_MODULE_3__.handleGETAPI)(mealCatURL);
  const dataResponseInv = await (0,_GetAPI_js__WEBPACK_IMPORTED_MODULE_3__.handleGETAPI)(invLikesURL);
  if (dataResponseMeal instanceof Error || dataResponseInv instanceof Error) appendResponsePara('Unable to Fetch Data');
  else await appendItems(dataResponseMeal.meals, dataResponseInv);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlFQUFlLENBQUMseURBQWtCLEVBQUUscURBQWMsRUFBRSx1REFBZ0I7QUFDcEYsVUFBVSx1REFBVTtBQUNwQixrQ0FBa0Msd0RBQVk7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixrRUFBZ0IsQ0FBQyx3REFBaUIsRUFBRSxzREFBZTtBQUN2RSw2QkFBNkIsd0RBQVk7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDJEQUFVLE9BQU8sOENBQU8sWUFBWSw0Q0FBSztBQUNwRTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHFCQUFxQixrRUFBZ0IsQ0FBQyx3REFBaUIsRUFBRSx1REFBZ0I7QUFDekUsc0JBQXNCLGlFQUFlLENBQUMseURBQWtCLEVBQUUscURBQWMsRUFBRSx1REFBZ0I7QUFDMUYsaUNBQWlDLHdEQUFZO0FBQzdDLGdDQUFnQyx3REFBWTtBQUM1QztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL0dldEFQSS5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9MaXN0SXRlbU1vZC5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9Qb3N0QVBJLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL2NvbnN0LmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL2NyZWF0ZUVsZW1lbnRNb2QuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvY3JlYXRlVVJMQVBJLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1zdmctc2lkZTogY2xhbXAoMTZweCwgKDEwMHZ3IC0gMzIwcHgpICogMTAwMCwgY2xhbXAoMjBweCwgKDEwMHZ3IC0gNjQwcHgpICogMTAwMCwgY2xhbXAoMjVweCwgKDEwMHZ3IC0gMTI4MHB4KSAqIDEwMDAsIDMwcHgpKSk7XFxuICAtLWZvbnQtc2l6ZTogY2FsYyh2YXIoLS1zdmctc2lkZSkgKiAwLjgpO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlNmNlOTtcXG4gIGZvbnQtZmFtaWx5OiAnUGFuZ29saW4nLCAnTWVycml3ZWF0aGVyJywgc2VyaWYsIGN1cnNpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0OGJmMTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXN2Zy1zaWRlKSAqIDIpO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5uYXYtaXRlbXMge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogM3JlbTtcXG59XFxuXFxuLm5hdi1pdGVtcyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmV4dHJlbWl0eSB7XFxuICBwYWRkaW5nLWJsb2NrOiAxMHB4O1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zdmcge1xcbiAgbWFyZ2luLWJsb2NrOiBhdXRvO1xcbn1cXG5cXG4uZm9vdGVyLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYXBwLWl0ZW0gc3ZnLFxcbi5mb290ZXItcm93IHN2ZyB7XFxuICBoZWlnaHQ6IHZhcigtLXN2Zy1zaWRlKTtcXG4gIHdpZHRoOiB2YXIoLS1zdmctc2lkZSk7XFxufVxcblxcbm1haW4ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI2Zvcm1GZWVkYmFjayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuI2FwcC1jdG4ge1xcbiAgLS1uOiAyO1xcbiAgLS13OiAzNTBweDtcXG4gIC0tbjE6IDM7XFxuICAtLXcxOiA3MDBweDtcXG4gIC0tbjI6IDQ7XFxuICAtLXcyOiAxMDUwcHg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgY29sdW1uLWdhcDogMzBweDtcXG4gIHJvdy1nYXA6IDMwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGNsYW1wKGNsYW1wKGNsYW1wKDEwMCUvKHZhcigtLW4yKSArIDEpICsgMC4xJSwgKHZhcigtLXcyKSAtIDEwMHZ3KSAqIDEwMDAsIDEwMCUvKHZhcigtLW4xKSArIDEpICsgMC4xJSksICh2YXIoLS13MSkgLSAxMDB2dykgKiAxMDAwLCAxMDAlLyh2YXIoLS1uKSArIDEpICsgMC4xJSksICh2YXIoLS13KSAtIDEwMHZ3KSAqIDEwMDAsIDEwMCUpLCAzZnIpKTtcXG4gIHBhZGRpbmctYmxvY2s6IDUwcHg7XFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLmFwcC1pdGVtIHtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0OGJmMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5hcHAtaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uYXBwLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1pbmxpbmU6IDUlO1xcbn1cXG5cXG4uYXBwLWRpdi1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMTUlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hcHAtbGlrZS10ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1saWtlLXN2ZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5hcHAtYnRuIHtcXG4gIHBhZGRpbmctaW5saW5lOiAxMHB4O1xcbiAgcGFkZGluZy1ibG9jazogNXB4O1xcbiAgei1pbmRleDogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hcHAtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTQsIDQ2LCA0Nik7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnSUFBZ0k7RUFDaEksd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVEQUF1RDtFQUN2RCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE1BQU07RUFDTixVQUFVO0VBQ1YsT0FBTztFQUNQLFdBQVc7RUFDWCxPQUFPO0VBQ1AsWUFBWTs7RUFFWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix3UEFBd1A7RUFDeFAsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixRQUFRO0VBQ1IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1zdmctc2lkZTogY2xhbXAoMTZweCwgKDEwMHZ3IC0gMzIwcHgpICogMTAwMCwgY2xhbXAoMjBweCwgKDEwMHZ3IC0gNjQwcHgpICogMTAwMCwgY2xhbXAoMjVweCwgKDEwMHZ3IC0gMTI4MHB4KSAqIDEwMDAsIDMwcHgpKSk7XFxuICAtLWZvbnQtc2l6ZTogY2FsYyh2YXIoLS1zdmctc2lkZSkgKiAwLjgpO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlNmNlOTtcXG4gIGZvbnQtZmFtaWx5OiAnUGFuZ29saW4nLCAnTWVycml3ZWF0aGVyJywgc2VyaWYsIGN1cnNpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0OGJmMTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXN2Zy1zaWRlKSAqIDIpO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5uYXYtaXRlbXMge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogM3JlbTtcXG59XFxuXFxuLm5hdi1pdGVtcyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmV4dHJlbWl0eSB7XFxuICBwYWRkaW5nLWJsb2NrOiAxMHB4O1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zdmcge1xcbiAgbWFyZ2luLWJsb2NrOiBhdXRvO1xcbn1cXG5cXG4uZm9vdGVyLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYXBwLWl0ZW0gc3ZnLFxcbi5mb290ZXItcm93IHN2ZyB7XFxuICBoZWlnaHQ6IHZhcigtLXN2Zy1zaWRlKTtcXG4gIHdpZHRoOiB2YXIoLS1zdmctc2lkZSk7XFxufVxcblxcbm1haW4ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI2Zvcm1GZWVkYmFjayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuI2FwcC1jdG4ge1xcbiAgLS1uOiAyO1xcbiAgLS13OiAzNTBweDtcXG4gIC0tbjE6IDM7XFxuICAtLXcxOiA3MDBweDtcXG4gIC0tbjI6IDQ7XFxuICAtLXcyOiAxMDUwcHg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgY29sdW1uLWdhcDogMzBweDtcXG4gIHJvdy1nYXA6IDMwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGNsYW1wKGNsYW1wKGNsYW1wKDEwMCUvKHZhcigtLW4yKSArIDEpICsgMC4xJSwgKHZhcigtLXcyKSAtIDEwMHZ3KSAqIDEwMDAsIDEwMCUvKHZhcigtLW4xKSArIDEpICsgMC4xJSksICh2YXIoLS13MSkgLSAxMDB2dykgKiAxMDAwLCAxMDAlLyh2YXIoLS1uKSArIDEpICsgMC4xJSksICh2YXIoLS13KSAtIDEwMHZ3KSAqIDEwMDAsIDEwMCUpLCAzZnIpKTtcXG4gIHBhZGRpbmctYmxvY2s6IDUwcHg7XFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLmFwcC1pdGVtIHtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0OGJmMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5hcHAtaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uYXBwLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1pbmxpbmU6IDUlO1xcbn1cXG5cXG4uYXBwLWRpdi1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMTUlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hcHAtbGlrZS10ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1saWtlLXN2ZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5hcHAtYnRuIHtcXG4gIHBhZGRpbmctaW5saW5lOiAxMHB4O1xcbiAgcGFkZGluZy1ibG9jazogNXB4O1xcbiAgei1pbmRleDogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hcHAtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTQsIDQ2LCA0Nik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9hc3NldC9yZXNvdXJjZS9pY29ucy5zdmcnO1xuaW1wb3J0IHtcbiAgcHJpbnRMaXN0LFxufSBmcm9tICcuL21vZHVsZXMvdXRpbHMuanMnO1xuXG5jb25zdCBuYXZJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnF1ZXJ5IGEnKTtcblxuLy8gU2VsZWN0IHNlY3Rpb24gdG8gc2hvd1xubmF2SXRlbS5mb3JFYWNoKChsaW5rKSA9PiB7XG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBuYXZJdGVtLmZvckVhY2goKG5hdkl0ZW0pID0+IG5hdkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgcHJpbnRMaXN0KGUpO1xuICB9KTtcbn0pOyIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBHRVRpbmcgZGF0YSBhcyBKU09OIHdpdGggZmV0Y2guXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFVSTCB0byBHRVQgZGF0YSB0b1xuICogQHJldHVybiB7T2JqZWN0fSAtIFJlc3BvbnNlIGJvZHkgZnJvbSBVUkwgdGhhdCB3YXMgR0VUZWRcbiAqL1xuY29uc3QgZmV0Y2hEYXRhSlNPTiA9IGFzeW5jIChVUkwpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICB9XG4gIGNvbnN0IGRhdGFKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YUpTT047XG59O1xuXG4vKipcbiAqIEV2ZW50IGhhbmRsZXIgZm9yIGEgZm9ybSBzdWJtaXQgZXZlbnQuXG4gKiBAcGFyYW0ge1N1Ym1pdEV2ZW50fSBldmVudFxuICovXG5jb25zdCBoYW5kbGVHRVRBUElldmVudCA9IGFzeW5jIChldmVudCwgdXJsKSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgZmV0Y2hEYXRhSlNPTih1cmwpO1xuICAgIHJldHVybiByZXNwb25zZURhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59O1xuXG4vKipcbiAqIEV2ZW50IGhhbmRsZXIgZm9yIGEgZm9ybSBzdWJtaXQgZXZlbnQuXG4gKi9cbmNvbnN0IGhhbmRsZUdFVEFQSSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCBmZXRjaERhdGFKU09OKHVybCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIGZldGNoRGF0YUpTT04sIGhhbmRsZUdFVEFQSWV2ZW50LCBoYW5kbGVHRVRBUEksXG59OyIsImltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnREZWZhdWx0LCBjcmVhdGVJbWcsIGNyZWF0ZUJ1dHRvbiwgY3JlYXRlTlMsXG59IGZyb20gJy4vY3JlYXRlRWxlbWVudE1vZC5qcyc7XG5cbmNvbnN0IGNyZWF0ZUl0ZW0gPSBhc3luYyAoZWxlbSwgY2xhc3NlcywgbWVhbEFwaSwgeGxpbmssIGxpa2VBcGksIGNiKSA9PiB7XG4gIGNvbnN0IGRvY0ZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGRvY0ZyYWcuYXBwZW5kQ2hpbGQoY3JlYXRlSW1nKGNsYXNzZXNbMV0sIG1lYWxBcGlbMF0uc3RyTWVhbCwgbWVhbEFwaVswXS5zdHJNZWFsVGh1bWIpKTtcbiAgY29uc3QgZWxlbUhlYWRlciA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdkaXYnLCBjbGFzc2VzWzJdKTtcbiAgY29uc3QgdGl0bGVJbWcgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgncCcsIGNsYXNzZXNbM10sIG1lYWxBcGlbMF0uc3RyTWVhbCk7XG4gIGVsZW1IZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVJbWcpO1xuICBjb25zdCBlbGVtTGlrZXMgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgnZGl2JywgY2xhc3Nlc1s0XSk7XG4gIGNvbnN0IGVsZW1MaWtlc1NWRyA9IGNyZWF0ZU5TKHhsaW5rKTtcbiAgZWxlbUxpa2VzLmFwcGVuZENoaWxkKGVsZW1MaWtlc1NWRyk7XG4gIGNvbnN0IGVsZW1MaWtlc1AgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgncCcsIGNsYXNzZXNbNV0sIGAke2xpa2VBcGl9IGxpa2Uke2xpa2VBcGkgPiAxID8gJ3MnIDogJyd9YCk7XG4gIGVsZW1MaWtlcy5hcHBlbmRDaGlsZChlbGVtTGlrZXNQKTtcbiAgZWxlbUhlYWRlci5hcHBlbmRDaGlsZChlbGVtTGlrZXMpO1xuICBkb2NGcmFnLmFwcGVuZENoaWxkKGVsZW1IZWFkZXIpO1xuICBjb25zdCBidG5EaXYgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgnZGl2JywgY2xhc3Nlc1s2XSk7XG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24oJ2J1dHRvbicsIGNsYXNzZXNbN10sICdHbyB0byBDb21tZW50cycsICdDb21tZW50cycpKTtcbiAgYnRuRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgY2xhc3Nlc1s3XSwgJ0dvIHRvIFJlc2VydmF0aW9ucycsICdSZXNlcnZhdGlvbnMnKSk7XG4gIGRvY0ZyYWcuYXBwZW5kQ2hpbGQoYnRuRGl2KTtcbiAgY29uc3QgaXRlbUVsZW0gPSBjcmVhdGVFbGVtZW50RGVmYXVsdChlbGVtLCBjbGFzc2VzWzBdLCBmYWxzZSwgZG9jRnJhZyk7XG4gIGl0ZW1FbGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIG1lYWxBcGlbMF0uaWRNZWFsKTtcbiAgaXRlbUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYik7XG4gIHJldHVybiBpdGVtRWxlbTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnREZWZhdWx0LCBjcmVhdGVJdGVtLFxufTsiLCIvKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgUE9TVGluZyBkYXRhIGFzIEpTT04gd2l0aCBmZXRjaC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFVSTCB0byBQT1NUIGRhdGEgdG9cbiAqIEBwYXJhbSB7Rm9ybURhdGF9IGZvcm1EYXRhIC0gYEZvcm1EYXRhYCBpbnN0YW5jZVxuICogQHBhcmFtIHtKU09OfSBqc29uRm9ybWF0IC0ganNvbiBvYmplY3QgdG8gYmUgcGFzc2VkIGFzIGJvZHkgb2YgZmV0Y2ggYXBpLlxuICogQHJldHVybiB7T2JqZWN0fSAtIFJlc3BvbnNlIGJvZHkgZnJvbSBVUkwgdGhhdCB3YXMgUE9TVGVkIHRvXG4gKi9cbmNvbnN0IHBvc3REYXRhQXNKc29uID0gYXN5bmMgKHsgdXJsLCBmb3JtRGF0YSA9IGZhbHNlLCBqc29uRm9ybWF0ID0gZmFsc2UgfSkgPT4ge1xuICBsZXQganNvbkRhdGE7XG4gIGlmIChmb3JtRGF0YSkge1xuICAgIGpzb25EYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhLmVudHJpZXMoKSk7XG4gIH0gZWxzZSBpZiAoanNvbkZvcm1hdCkganNvbkRhdGEgPSBqc29uRm9ybWF0O1xuICBjb25zdCBKc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEpO1xuICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpzb25TdHJpbmcsXG4gIH07XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGZldGNoT3B0aW9ucyk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuLyoqXG4gKiBFdmVudCBoYW5kbGVyIGZvciBhIGZvcm0gc3VibWl0IGV2ZW50LlxuICogQHBhcmFtIHtTdWJtaXRFdmVudH0gZXZlbnRcbiAqL1xuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGFzeW5jIChldmVudCwgdXJsKSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHNjb3JlRm9ybSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gIHRyeSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoc2NvcmVGb3JtKTtcbiAgICBzY29yZUZvcm0ucmVzZXQoKTtcbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCBwb3N0RGF0YUFzSnNvbih7IHVybCwgZm9ybURhdGEgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbi8qKlxuICogRXZlbnQgaGFuZGxlciBmb3IgYSBmb3JtIHN1Ym1pdCBldmVudC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7SlNPTn0ganNvblxuICovXG5jb25zdCBoYW5kbGVQb3N0ID0gYXN5bmMgKHVybCwganNvbikgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHBvc3REYXRhQXNKc29uKHsgdXJsLCBmb3JtRGF0YTogZmFsc2UsIGpzb25Gb3JtYXQ6IGpzb24gfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIGhhbmRsZUZvcm1TdWJtaXQsIHBvc3REYXRhQXNKc29uLCBoYW5kbGVQb3N0LFxufTsiLCJjb25zdCBjbGFzc0N0biA9ICdhcHAtaXRlbSc7XG5jb25zdCBjbGFzc0ltZyA9ICdhcHAtaW1nJztcbmNvbnN0IGNsYXNzVGl0dGxlID0gJ2FwcC10aXRsZSc7XG5jb25zdCBjbGFzc0xpa2VzID0gJ2FwcC1saWtlJztcbmNvbnN0IGNsYXNzTGlrZXNTVkcgPSAnYXBwLWxpa2Utc3ZnJztcbmNvbnN0IGNsYXNzTGlrZXNUZXh0ID0gJ2FwcC1saWtlLXRleHQnO1xuY29uc3QgY2xhc3NEaXZCdG4gPSAnYXBwLWRpdi1idG4nO1xuY29uc3QgY2xhc3NCdG4gPSAnYXBwLWJ0bic7XG5cbmNvbnN0IGNsYXNzZXMgPSBbXG4gIGNsYXNzQ3RuLCBjbGFzc0ltZywgY2xhc3NUaXR0bGUsIGNsYXNzTGlrZXMsXG4gIGNsYXNzTGlrZXNTVkcsIGNsYXNzTGlrZXNUZXh0LCBjbGFzc0RpdkJ0biwgY2xhc3NCdG4sXG5dO1xuXG5jb25zdCB4bGluayA9ICcuLi9hc3NldC9yZXNvdXJjZS9pY29ucy5zdmcjaGVhcnQtbGlrZSc7XG5cbmNvbnN0IGJhc2V1cmxGaWx0ZXJNZWFsID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9maWx0ZXIucGhwPyc7XG5jb25zdCBiYXNldXJsbG9va3VwTWVhbCA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvbG9va3VwLnBocD8nO1xuY29uc3QgcGFyYW1ldGVyTWVhbElEID0gJ2knO1xuY29uc3QgcGFyYW1ldGVyTWVhbENhdCA9ICdjJztcblxuY29uc3QgYmFzZXVybEludm9sdmVtZW50ID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5jb25zdCBwYXJhbWV0ZXJMaWtlQXBwID0gJ2xpa2VzLyc7XG5jb25zdCBwYXJhbWV0ZXJDb21tQXBwID0gJ2NvbW1lbnRzLyc7XG5jb25zdCBwYXJhbWV0ZXJSZXNlcnZBcHAgPSAncmVzZXJ2YXRpb25zLyc7XG5jb25zdCBwYXJhbWV0ZXJJREFwcCA9ICdXYmUzSXpuUTJMUW9GUEhtVnJ3cC8nO1xuXG5leHBvcnQge1xuICBjbGFzc2VzLCBiYXNldXJsRmlsdGVyTWVhbCwgYmFzZXVybGxvb2t1cE1lYWwsIHBhcmFtZXRlck1lYWxJRCwgcGFyYW1ldGVyTWVhbENhdCxcbiAgeGxpbmssIGJhc2V1cmxJbnZvbHZlbWVudCwgcGFyYW1ldGVyTGlrZUFwcCwgcGFyYW1ldGVyQ29tbUFwcCwgcGFyYW1ldGVyUmVzZXJ2QXBwLFxuICBwYXJhbWV0ZXJJREFwcCxcbn07IiwiY29uc3QgcmVkaXJlY3RXaW5kb3cgPSAoaHJlZikgPT4ge1xuICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG59O1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGFkZCBjbGFzcyBvciBjbGFzc2VzIHRvIEhUTUwgRWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbSBIVE1MIEVsZW1lbnQgdG8gYmUgbW9kaWZpZWQuXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NlcyBTdHJpbmcgb3IgQXJyYXkgb2YgU3RyaW5nIHRvIGJlIGFkZGVkLlxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBSZXR1cm5zIEhUTUwgZWxlbWVudCB3aXRoIGNob3NlbiBjbGFzc2VzLlxuICovXG5jb25zdCBhZGRDbGFzcyA9IChlbGVtLCBjbGFzc2VzKSA9PiB7XG4gIGlmICgodHlwZW9mIGNsYXNzZXMpID09PSAnc3RyaW5nJykgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzZXMpO1xuICBlbHNlIGlmICgodHlwZW9mIGNsYXNzZXMpID09PSAnb2JqZWN0JykgZWxlbS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICByZXR1cm4gZWxlbTtcbn07XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gY3JlYXRlIEhUTUwgZWxlbWVudCB1c2luZyB0YWcgbmFtZXMuXG4gKiBDbGFzc2VzIGFuZCB0ZXh0IGNvbnRlbnQgY2FuIGJlIGFkZGVkIGFzIGVsZW1lbnQgaXMgY3JlYXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IGVsZW0gVGFnIG5hbWUgb2YgdGhlIGVsZW1lbnQgdG8gYmUgY3JlYXRlZC4gRXhhbXBsZTogYGRpdiwgcCwgc2VjdGlvbmBcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc2VzIE5hbWUgb2YgY2xhc3Mgb3IgY2xhc3NlcyB0byBhZGQuIFN0cmluZywgYXJyYXkgb2Ygc3RyaW5nIHNob3VsZCBiZSB1c2VkLlxuICogSWYgbm8gY2xhc3MgaXMgd2FudGVkLCBmYWxzZSBzaG91bGQgYmUgdXNlLk9wdGlvbmFsIFBhcmFtZW50ZXIuXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dENvbnRleHQgVGV4dCB0byBiZSBhZGRlZCBhcyB0ZXh0IGNvbnRlbnQgdG8gSFRNTCBlbGVtZW50LlxuICogT3B0aW9uIHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGlubmVyQ2hpbGQgSFRNTCBFbGVtZW50IHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFJldHVybnMgSFRNTCBlbGVtZW50IGNob3NlbiB3aXRoIHNldCBhdHRyaWJ1dGVzLlxuICovXG5jb25zdCBjcmVhdGVFbGVtZW50RGVmYXVsdCA9IChlbGVtLCBjbGFzc2VzID0gZmFsc2UsIHRleHRDb250ZW50ID0gZmFsc2UsIGlubmVyQ2hpbGQgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtKTtcbiAgYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3Nlcyk7XG4gIGlmICh0ZXh0Q29udGVudCkgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICBpZiAoaW5uZXJDaGlsZCkgZWxlbWVudC5hcHBlbmRDaGlsZChpbm5lckNoaWxkKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gSFRNTCBzdmcgZWxlbWVudCB0byBiZSByZW5kZXJlZCBkaW5hbWljYWxseVxuICogQHBhcmFtIHtzdHJpbmd9IGhyZWYgSHlwZXJsaW5rIHJlZmVyZW5jZSBmb3IgZmlsZSBsb2NhdGlvblxuICogQHJldHVybnMge0hUTUxPclNWR0VsZW1lbnR9IEhUTUwgc3ZnIGVsZW1lbnQgdG8gYmUgYXBwZW5kIHRvIERPTSB0byBiZSByZW5kZXJlZCBkaW5hbWljYWxseVxuICovXG5jb25zdCBjcmVhdGVOUyA9IChocmVmKSA9PiB7XG4gIGNvbnN0IHhsaW5rID0gaHJlZi5zcGxpdCgnIycpO1xuICBjb25zdCB1c2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3VzZScpO1xuICB1c2Uuc2V0QXR0cmlidXRlKCdocmVmJywgYCR7aHJlZn1gKTtcbiAgdXNlLmNsYXNzTGlzdC5hZGQoeGxpbmtbMV0pO1xuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICBzdmcuYXBwZW5kQ2hpbGQodXNlKTtcbiAgc3ZnLmNsYXNzTGlzdC5hZGQoeGxpbmtbMV0pO1xuICByZXR1cm4gc3ZnO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgSFRNTCBsYWJlbCBlbGVtZW50IHdpdGggYSBmb3IgYXR0cmlidXRlLCBkaWZmZXJldGUgY2xhc3NlcyBhbmQgaW5uZXIgY2hpbGQgYW5kIHR4dFxuICogY29udGVudFxuICogQHBhcmFtIHtzdHJpbmd9IGZvckF0cj1mYWxzZSBGb3IgYXR0cmlidXRlIGluIGxhYmVsIHRoYXQgaW5kaWNhdGVzIHdoaWNoIGlucHV0IG9yIHRleHQgYXJlYVxuICogaXQgaXMgbGlua2VkIHdpdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc2VzPWZhbHNlIFN0cmluZyBvciBhcnJheSBvZiBzdHJpbmcgd2l0aCBjbGFzcyBuYW1lc1xuICogQHBhcmFtIHtzdHJpbmd9IHRleHRDb250ZW50PWZhbHNlIFN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIHRleHQgY29udGVudCBvZiB0aGUgbGFiZWxcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGlubmVyQ2hpbGQ9ZmFsc2UgSFRNTCBlbGVtZW50IHRvIGJlIGFwcGVuZCB0byBsYWJlbFxuICogQHJldHVybnMge0hUTUxMYWJlbEVsZW1lbnR9IEhUTUwgbGFiZWwgZWxlbWVudCByZWFkeSB0byBiZSBhcHBlbmQgdG8gdGhlIGRvbVxuICovXG5jb25zdCBjcmVhdGVMYWJlbCA9IChmb3JBdHIgPSBmYWxzZSwgY2xhc3NlcyA9IGZhbHNlLCB0ZXh0Q29udGVudCA9IGZhbHNlLCBpbm5lckNoaWxkID0gZmFsc2UpID0+IHtcbiAgY29uc3QgbGFiZWwgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgnbGFiZWwnLCBjbGFzc2VzLCB0ZXh0Q29udGVudCwgaW5uZXJDaGlsZCk7XG4gIGlmIChmb3JBdHIpIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgZm9yQXRyKTtcbiAgcmV0dXJuIGxhYmVsO1xufTtcblxuY29uc3QgY3JlYXRlVGV4dEFyZWEgPSAobGVuZ3RoID0gZmFsc2UsIGNsYXNzZXMgPSBmYWxzZSxcbiAgdGV4dENvbnRlbnQgPSBmYWxzZSwgaW5uZXJDaGlsZCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHRleHRBcmVhID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ3RleHRhcmVhJywgY2xhc3NlcywgdGV4dENvbnRlbnQsIGlubmVyQ2hpbGQpO1xuICBpZiAobGVuZ3RoKSB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIGxlbmd0aCk7XG4gIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsICd0cnVlJyk7XG4gIHJldHVybiB0ZXh0QXJlYTtcbn07XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gY3JlYXRlIEhUTUwgQnV0dG9uIGVsZW1lbnQuIENsYXNzZXMgYW5kIHRleHQgY29udGVudFxuICogY2FuIGJlIGFkZGVkIGFzIGVsZW1lbnQgaXMgY3JlYXRlLiBDbGljayBldmVudCB0byBhIGFub3RoZXIgd2VicGFnZSBjYW4gYmUgYWRkZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gZnVuYyBUeXBlIG9mIGJ1dHRvbiBgc3VtYml0LCByZXNldCwgYnV0dG9uYFxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzZXMgTmFtZSBvZiBjbGFzcyBvciBjbGFzc2VzIHRvIGFkZC4gU3RyaW5nLCBhcnJheSBvZiBzdHJpbmcgc2hvdWxkIGJlIHVzZWQuXG4gKiBJZiBubyBjbGFzcyBpcyB3YW50ZWQsIGZhbHNlIHNob3VsZCBiZSB1c2UuT3B0aW9uYWwgUGFyYW1lbnRlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcmlhTGFiZWwgVGV4dCBmb3IgYWNjZXNzaWJpbGl0eVxuICogQHBhcmFtIHthbnl9IHRleHRDb250ZW50IFRleHQgdG8gYmUgYWRkZWQgYXMgdGV4dCBjb250ZW50IHRvIEhUTUwgZWxlbWVudC5cbiAqIE9wdGlvbiBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpbm5lckNoaWxkIEhUTUwgRWxlbWVudCB0byBiZSBhcHBlbmRlZFxuICogQHBhcmFtIHthbnl9IGhyZWYgSHlwZXJsaW5rIHJlZmVyZW5jZSB0byBiZSBmb2xsb3dlZCBpZiBidXR0b24gaXMgY2xpY2tlZC5cbiAqIE9wdGlvbiBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7SFRNTEJ1dHRvbkVsZW1lbnR9IFJldHVybnMgSFRNTCBidXR0b24gZWxlbWVudCBjaG9zZW4gd2l0aCBzZXQgYXR0cmlidXRlcy5cbiAqL1xuY29uc3QgY3JlYXRlQnV0dG9uID0gKGZ1bmMsIGNsYXNzZXMsIGFyaWFMYWJlbCwgdGV4dENvbnRlbnQgPSBmYWxzZSxcbiAgaW5uZXJDaGlsZCA9IGZhbHNlLCBocmVmID0gZmFsc2UpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi50eXBlID0gZnVuYztcbiAgYnV0dG9uLmFyaWFMYWJlbCA9IGFyaWFMYWJlbDtcbiAgYWRkQ2xhc3MoYnV0dG9uLCBjbGFzc2VzKTtcbiAgaWYgKHRleHRDb250ZW50KSBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgaWYgKGhyZWYpIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWRpcmVjdFdpbmRvdyhocmVmKSk7XG4gIH1cbiAgaWYgKGlubmVyQ2hpbGQpIGJ1dHRvbi5hcHBlbmRDaGlsZChpbm5lckNoaWxkKTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZUltZyA9IChjbGFzc2VzLCBuYW1lLCB1cmwpID0+IHtcbiAgY29uc3QgaW1nRWxlbSA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdpbWcnLCBjbGFzc2VzKTtcbiAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHVybCk7XG4gIGltZ0VsZW0uc2V0QXR0cmlidXRlKCdhbHQnLCBuYW1lKTtcbiAgcmV0dXJuIGltZ0VsZW07XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVMYWJlbCwgY3JlYXRlSW1nLFxuICBjcmVhdGVOUywgY3JlYXRlVGV4dEFyZWEsXG4gIGFkZENsYXNzLCBjcmVhdGVFbGVtZW50RGVmYXVsdCxcbiAgY3JlYXRlQnV0dG9uLFxufTtcbiIsImNvbnN0IGNyZWF0ZUFwaU1lYWxVUkwgPSAoYmFzZXVybCwgcXVlcnlLZXksIHF1ZXJ5VmFsdWUpID0+IHtcbiAgY29uc3QgdXJsID0gYCR7YmFzZXVybH0ke3F1ZXJ5S2V5fT0ke3F1ZXJ5VmFsdWV9YDtcbiAgcmV0dXJuIHVybDtcbn07XG5cbmNvbnN0IGNyZWF0ZUFwaUludlVSTCA9IChiYXNldXJsLCBpZCA9IGZhbHNlLCBlbmRwb2ludCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHVybCA9IGAke2Jhc2V1cmx9JHtpZH0ke2VuZHBvaW50fWA7XG4gIHJldHVybiB1cmw7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVBcGlNZWFsVVJMLCBjcmVhdGVBcGlJbnZVUkwsXG59OyIsImltcG9ydCB7XG4gIGNyZWF0ZUFwaU1lYWxVUkwsIGNyZWF0ZUFwaUludlVSTCxcbn0gZnJvbSAnLi9jcmVhdGVVUkxBUEkuanMnO1xuaW1wb3J0IHsgY3JlYXRlSXRlbSB9IGZyb20gJy4vTGlzdEl0ZW1Nb2QuanMnO1xuaW1wb3J0IHsgaGFuZGxlUG9zdCB9IGZyb20gJy4vUG9zdEFQSS5qcyc7XG5pbXBvcnQgeyBoYW5kbGVHRVRBUEkgfSBmcm9tICcuL0dldEFQSS5qcyc7XG5pbXBvcnQge1xuICBjbGFzc2VzLCBiYXNldXJsRmlsdGVyTWVhbCwgYmFzZXVybGxvb2t1cE1lYWwsIHBhcmFtZXRlck1lYWxJRCwgcGFyYW1ldGVyTWVhbENhdCxcbiAgeGxpbmssIGJhc2V1cmxJbnZvbHZlbWVudCwgcGFyYW1ldGVyTGlrZUFwcCxcbiAgcGFyYW1ldGVySURBcHAsXG59IGZyb20gJy4vY29uc3QuanMnO1xuXG5jb25zdCBhcHBlbmRSZXNwb25zZVBhcmEgPSBhc3luYyAobm9kZSkgPT4ge1xuICBjb25zdCBzaG93UmVzcG9uc2VGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1GZWVkYmFjaycpO1xuICBzaG93UmVzcG9uc2VGb3JtLnRleHRDb250ZW50ID0gbm9kZTtcbn07XG5cbmNvbnN0IGxpa2VzSnNvbiA9IGFzeW5jIChpZCkgPT4gKFxuICB7XG4gICAgaXRlbV9pZDogaWQsXG4gIH1cbik7XG5cbmNvbnN0IGZpbmRMaWtlcyA9IGFzeW5jIChpZCwgaW52QXJyKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGludkFyci5maWx0ZXIoKGludkFycikgPT4gaW52QXJyLml0ZW1faWQgPT09IGlkKTtcbiAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSByZXR1cm4gcmVzdWx0WzBdLmxpa2VzO1xuICByZXR1cm4gMDtcbn07XG5cbmNvbnN0IHVwZGF0ZUxpa2VzRE9NID0gYXN5bmMgKG5vZGUsIGxpa2VzKSA9PiB7XG4gIGNvbnN0IGxpa2VUZXh0ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCcuYXBwLWxpa2UtdGV4dCcpO1xuICBsaWtlVGV4dC50ZXh0Q29udGVudCA9IGAke2xpa2VzfSBsaWtlJHtsaWtlcyA+IDEgPyAncycgOiAnJ31gO1xuICBjb25zdCB1c2VWU0cgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ3VzZScpO1xuICBjb25zdCBzdmdWU0cgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpO1xuICB1c2VWU0cuY2xhc3NMaXN0LmFkZCgnbGlrZXMnKTtcbiAgc3ZnVlNHLmNsYXNzTGlzdC5hZGQoJ2xpa2VzJyk7XG4gIHVzZVZTRy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnLi4vYXNzZXQvcmVzb3VyY2UvaWNvbnMuc3ZnI2hlYXJ0LWxpa2UtcmVkJyk7XG59O1xuXG5jb25zdCBjcmVhdGVMaWtlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFydC1saWtlJykgJiYgIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpa2VzJykpIHtcbiAgICBjb25zdCBjdXJyZW50SUQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgY29uc3QgdXJsID0gY3JlYXRlQXBpSW52VVJMKGJhc2V1cmxJbnZvbHZlbWVudCwgcGFyYW1ldGVySURBcHAsIHBhcmFtZXRlckxpa2VBcHApO1xuICAgIGF3YWl0IGhhbmRsZVBvc3QodXJsLCBhd2FpdCBsaWtlc0pzb24oY3VycmVudElEKSk7XG4gICAgY29uc3QgZGF0YVJlc3BvbnNlSW52ID0gYXdhaXQgaGFuZGxlR0VUQVBJKHVybCk7XG4gICAgY29uc3QgcXR5TGlrZXMgPSBhd2FpdCBmaW5kTGlrZXMoY3VycmVudElELCBkYXRhUmVzcG9uc2VJbnYpO1xuICAgIGNvbnN0IHBydE5kZSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgYXdhaXQgdXBkYXRlTGlrZXNET00ocHJ0TmRlLCBhd2FpdCBxdHlMaWtlcyk7XG4gIH1cbn07XG5cbmNvbnN0IGdldE1lYWxzQVBJUmVzcG9uc2UgPSBhc3luYyAoZGF0YSkgPT4ge1xuICBjb25zdCBtZWFsSURVUkwgPSBjcmVhdGVBcGlNZWFsVVJMKGJhc2V1cmxsb29rdXBNZWFsLCBwYXJhbWV0ZXJNZWFsSUQsIGRhdGEuaWRNZWFsKTtcbiAgY29uc3QgZGF0YVJlc3BvbnNlID0gYXdhaXQgaGFuZGxlR0VUQVBJKG1lYWxJRFVSTCk7XG4gIHJldHVybiBkYXRhUmVzcG9uc2UubWVhbHM7XG59O1xuXG5jb25zdCBhcHBlbmRJdGVtcyA9IGFzeW5jIChkYXRhQXJyLCBpbnZBcnIpID0+IHtcbiAgY29uc3QgYXBwQ3RuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1jdG4nKTtcbiAgYXBwQ3RuLmlubmVySFRNTCA9ICcnO1xuICBkYXRhQXJyLmZvckVhY2goYXN5bmMgKGRhdGEpID0+IHtcbiAgICBjb25zdCBtZWFsRGF0YSA9IGF3YWl0IGdldE1lYWxzQVBJUmVzcG9uc2UoZGF0YSk7XG4gICAgY29uc3QgbWVhbEZyYWcgPSBhd2FpdCBjcmVhdGVJdGVtKCdsaScsIGNsYXNzZXMsIG1lYWxEYXRhLCB4bGluaywgYXdhaXQgZmluZExpa2VzKG1lYWxEYXRhWzBdLmlkTWVhbCwgaW52QXJyKSwgY3JlYXRlTGlrZSk7XG4gICAgYXBwQ3RuLmFwcGVuZENoaWxkKG1lYWxGcmFnKTtcbiAgfSk7XG59O1xuXG5jb25zdCBwcmludExpc3QgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgY29uc3QgbWVhbENhdFVSTCA9IGNyZWF0ZUFwaU1lYWxVUkwoYmFzZXVybEZpbHRlck1lYWwsIHBhcmFtZXRlck1lYWxDYXQsIGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG4gIGNvbnN0IGludkxpa2VzVVJMID0gY3JlYXRlQXBpSW52VVJMKGJhc2V1cmxJbnZvbHZlbWVudCwgcGFyYW1ldGVySURBcHAsIHBhcmFtZXRlckxpa2VBcHApO1xuICBjb25zdCBkYXRhUmVzcG9uc2VNZWFsID0gYXdhaXQgaGFuZGxlR0VUQVBJKG1lYWxDYXRVUkwpO1xuICBjb25zdCBkYXRhUmVzcG9uc2VJbnYgPSBhd2FpdCBoYW5kbGVHRVRBUEkoaW52TGlrZXNVUkwpO1xuICBpZiAoZGF0YVJlc3BvbnNlTWVhbCBpbnN0YW5jZW9mIEVycm9yIHx8IGRhdGFSZXNwb25zZUludiBpbnN0YW5jZW9mIEVycm9yKSBhcHBlbmRSZXNwb25zZVBhcmEoJ1VuYWJsZSB0byBGZXRjaCBEYXRhJyk7XG4gIGVsc2UgYXdhaXQgYXBwZW5kSXRlbXMoZGF0YVJlc3BvbnNlTWVhbC5tZWFscywgZGF0YVJlc3BvbnNlSW52KTtcbn07XG5cbmV4cG9ydCB7XG4gIHByaW50TGlzdCwgYmFzZXVybEZpbHRlck1lYWwsXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==