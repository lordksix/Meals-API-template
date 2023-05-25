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
    const url = (0,_createURLAPI_js__WEBPACK_IMPORTED_MODULE_1__.createApiInvURL)(_const_js__WEBPACK_IMPORTED_MODULE_3__.baseurlInvolvement, _const_js__WEBPACK_IMPORTED_MODULE_3__.parameterIDApp, _const_js__WEBPACK_IMPORTED_MODULE_3__.parameterLikeApp);
    await (0,_PostAPI_js__WEBPACK_IMPORTED_MODULE_0__.handlePost)(url, await likesJson(currentID));
    const dataResponseInv = await (0,_GetAPI_js__WEBPACK_IMPORTED_MODULE_2__.handleGETAPI)(url);
    const qtyLikes = await findLikes(currentID, dataResponseInv);
    const prtNde = event.target.parentNode.parentNode;
    await updateLikesDOM(prtNde, await qtyLikes);
  }
};

const getLikesResponse = async () => {
  const invLikesURL = (0,_createURLAPI_js__WEBPACK_IMPORTED_MODULE_1__.createApiInvURL)(_const_js__WEBPACK_IMPORTED_MODULE_3__.baseurlInvolvement, _const_js__WEBPACK_IMPORTED_MODULE_3__.parameterIDApp, _const_js__WEBPACK_IMPORTED_MODULE_3__.parameterLikeApp);
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
  const mealIDURL = (0,_createURLAPI_js__WEBPACK_IMPORTED_MODULE_0__.createApiMealURL)(_const_js__WEBPACK_IMPORTED_MODULE_2__.baseurllookupMeal, _const_js__WEBPACK_IMPORTED_MODULE_2__.parameterMealID, data);
  const dataResponse = await (0,_GetAPI_js__WEBPACK_IMPORTED_MODULE_1__.handleGETAPI)(mealIDURL);
  return dataResponse;
};

const getMealsCatResponse = async (data) => {
  const mealIDURL = (0,_createURLAPI_js__WEBPACK_IMPORTED_MODULE_0__.createApiMealURL)(_const_js__WEBPACK_IMPORTED_MODULE_2__.baseurlFilterMeal, _const_js__WEBPACK_IMPORTED_MODULE_2__.parameterMealCat, await data);
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
/* harmony export */   createElementDefault: () => (/* reexport safe */ _createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault),
/* harmony export */   createItem: () => (/* binding */ createItem)
/* harmony export */ });
/* harmony import */ var _createElementMod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElementMod.js */ "./src/modules/createElementMod.js");


const createItem = async (elem, classes, mealApi, xlink, likeApi,
  callback0 = false, callback1 = false) => {
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
  btnDiv.appendChild((0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createButton)('button', classes[8], 'Go to Reservations', 'Reservations'));
  docFrag.appendChild(btnDiv);
  const itemElem = (0,_createElementMod_js__WEBPACK_IMPORTED_MODULE_0__.createElementDefault)(elem, classes[0], false, docFrag);
  itemElem.setAttribute('data-id', mealApi[0].idMeal);
  if (callback0) itemElem.addEventListener('click', callback0);
  if (callback1) itemElem.addEventListener('click', callback1);
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
const classBtnComment = ['app-btn', 'comment'];
const classBtnReservation = ['app-btn', 'reservation'];

const classes = [
  classCtn, classImg, classTittle, classLikes,
  classLikesSVG, classLikesText, classDivBtn, classBtnComment,
  classBtnReservation,
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
/* harmony export */   printList: () => (/* binding */ printList),
/* harmony export */   xlink: () => (/* reexport safe */ _const_js__WEBPACK_IMPORTED_MODULE_1__.xlink)
/* harmony export */ });
/* harmony import */ var _ListItemMod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItemMod.js */ "./src/modules/ListItemMod.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const.js */ "./src/modules/const.js");
/* harmony import */ var _APILikeHandling_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./APILikeHandling.js */ "./src/modules/APILikeHandling.js");
/* harmony import */ var _APIMealsHandling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./APIMealsHandling.js */ "./src/modules/APIMealsHandling.js");
/* harmony import */ var _CountTotalItems_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CountTotalItems.js */ "./src/modules/CountTotalItems.js");






const appendResponsePara = async (node) => {
  const showResponseForm = document.getElementById('formFeedback');
  showResponseForm.textContent = node;
};

const getCat = async (event) => {
  const catID = await event.target.getAttribute('href');
  return catID;
};

const appendItems = async (dataArr, invArr, ID) => {
  const appCtn = document.getElementById('app-ctn');
  appCtn.innerHTML = '';
  dataArr.forEach(async (data) => {
    const mealData = await (0,_APIMealsHandling_js__WEBPACK_IMPORTED_MODULE_3__.getMealsIDResponse)(data.idMeal);
    const mealFrag = await (0,_ListItemMod_js__WEBPACK_IMPORTED_MODULE_0__.createItem)('li', _const_js__WEBPACK_IMPORTED_MODULE_1__.classes, mealData.meals, _const_js__WEBPACK_IMPORTED_MODULE_1__.xlink, await (0,_APILikeHandling_js__WEBPACK_IMPORTED_MODULE_2__.findLikes)(mealData.meals[0].idMeal, invArr), _APILikeHandling_js__WEBPACK_IMPORTED_MODULE_2__.createLike);
    appCtn.appendChild(mealFrag);
    
    const total = (0,_CountTotalItems_js__WEBPACK_IMPORTED_MODULE_4__.countTotalItem)(appCtn);

    (0,_CountTotalItems_js__WEBPACK_IMPORTED_MODULE_4__.appendTotal)(total, ID);
  });
};

const printList = async (event) => {
  const catID = await getCat(event);
  const dataResponseMeal = await (0,_APIMealsHandling_js__WEBPACK_IMPORTED_MODULE_3__.getMealsCatResponse)(catID);
  const dataResponseInv = await (0,_APILikeHandling_js__WEBPACK_IMPORTED_MODULE_2__.getLikesResponse)();
  if (dataResponseMeal instanceof Error || dataResponseInv instanceof Error) appendResponsePara('Unable to Fetch Data');
  else await appendItems(dataResponseMeal.meals, dataResponseInv, catID);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLGFBQWE7QUFDeEIsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxLQUFLO0FBQ2hCO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsS0FBSztBQUNoQjtBQUNBLGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9FOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkhGO0FBQ0EsaUJBQWlCLFFBQVEsRUFBRSxTQUFTLEdBQUcsV0FBVztBQUNsRDtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLFFBQVEsRUFBRSxHQUFHLEVBQUUsU0FBUztBQUN6QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjhDO0FBQ0Y7QUFDbUM7QUFDQztBQUNiOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3RUFBa0I7QUFDN0MsMkJBQTJCLDJEQUFVLE9BQU8sOENBQU8sa0JBQWtCLDRDQUFLLFFBQVEsOERBQVMsb0NBQW9DLDJEQUFVO0FBQ3pJO0FBQ0Esa0JBQWtCLG1FQUFjO0FBQ2hDLElBQUksZ0VBQVc7QUFDZixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyx5RUFBbUI7QUFDcEQsZ0NBQWdDLHFFQUFnQjtBQUNoRDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL0FQSUxpa2VIYW5kbGluZy5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9BUElNZWFsc0hhbmRsaW5nLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL0NvdW50VG90YWxJdGVtcy5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9HZXRBUEkuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvTGlzdEl0ZW1Nb2QuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvUG9zdEFQSS5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9jb25zdC5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9jcmVhdGVFbGVtZW50TW9kLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL2NyZWF0ZVVSTEFQSS5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tc3ZnLXNpZGU6IGNsYW1wKDE2cHgsICgxMDB2dyAtIDMyMHB4KSAqIDEwMDAsIGNsYW1wKDIwcHgsICgxMDB2dyAtIDY0MHB4KSAqIDEwMDAsIGNsYW1wKDI1cHgsICgxMDB2dyAtIDEyODBweCkgKiAxMDAwLCAzMHB4KSkpO1xcbiAgLS1mb250LXNpemU6IGNhbGModmFyKC0tc3ZnLXNpZGUpICogMC44KTtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTZjZTk7XFxuICBmb250LWZhbWlseTogJ1BhbmdvbGluJywgJ01lcnJpd2VhdGhlcicsIHNlcmlmLCBjdXJzaXZlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDhiZjE7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5sb2dvIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1zdmctc2lkZSkgKiAyKTtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubmF2LWl0ZW1zIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMnJlbTtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxufVxcblxcbi5uYXYtaXRlbXMgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5leHRyZW1pdHkge1xcbiAgcGFkZGluZy1ibG9jazogMTBweDtcXG4gIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc3ZnIHtcXG4gIG1hcmdpbi1ibG9jazogYXV0bztcXG59XFxuXFxuLmZvb3Rlci1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmFwcC1pdGVtIHN2ZyxcXG4uZm9vdGVyLXJvdyBzdmcge1xcbiAgaGVpZ2h0OiB2YXIoLS1zdmctc2lkZSk7XFxuICB3aWR0aDogdmFyKC0tc3ZnLXNpZGUpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiNmb3JtRmVlZGJhY2sge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbiNhcHAtY3RuIHtcXG4gIC0tbjogMjtcXG4gIC0tdzogMzUwcHg7XFxuICAtLW4xOiAzO1xcbiAgLS13MTogNzAwcHg7XFxuICAtLW4yOiA0O1xcbiAgLS13MjogMTA1MHB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGNvbHVtbi1nYXA6IDMwcHg7XFxuICByb3ctZ2FwOiAzMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChjbGFtcChjbGFtcChjbGFtcCgxMDAlLyh2YXIoLS1uMikgKyAxKSArIDAuMSUsICh2YXIoLS13MikgLSAxMDB2dykgKiAxMDAwLCAxMDAlLyh2YXIoLS1uMSkgKyAxKSArIDAuMSUpLCAodmFyKC0tdzEpIC0gMTAwdncpICogMTAwMCwgMTAwJS8odmFyKC0tbikgKyAxKSArIDAuMSUpLCAodmFyKC0tdykgLSAxMDB2dykgKiAxMDAwLCAxMDAlKSwgM2ZyKSk7XFxuICBwYWRkaW5nLWJsb2NrOiA1MHB4O1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbi5hcHAtaXRlbSB7XFxuICBwYWRkaW5nOiA1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDhiZjE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYXBwLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmFwcC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctaW5saW5lOiA1JTtcXG59XFxuXFxuLmFwcC1kaXYtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDE1JTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYXBwLWxpa2UtdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hcHAtbGlrZS1zdmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uYXBwLWJ0biB7XFxuICBwYWRkaW5nLWlubGluZTogMTBweDtcXG4gIHBhZGRpbmctYmxvY2s6IDVweDtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXBwLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCA0NiwgNDYpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0lBQWdJO0VBQ2hJLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1REFBdUQ7RUFDdkQsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsU0FBUztFQUNULGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxNQUFNO0VBQ04sVUFBVTtFQUNWLE9BQU87RUFDUCxXQUFXO0VBQ1gsT0FBTztFQUNQLFlBQVk7O0VBRVosYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isd1BBQXdQO0VBQ3hQLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsUUFBUTtFQUNSLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tc3ZnLXNpZGU6IGNsYW1wKDE2cHgsICgxMDB2dyAtIDMyMHB4KSAqIDEwMDAsIGNsYW1wKDIwcHgsICgxMDB2dyAtIDY0MHB4KSAqIDEwMDAsIGNsYW1wKDI1cHgsICgxMDB2dyAtIDEyODBweCkgKiAxMDAwLCAzMHB4KSkpO1xcbiAgLS1mb250LXNpemU6IGNhbGModmFyKC0tc3ZnLXNpZGUpICogMC44KTtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTZjZTk7XFxuICBmb250LWZhbWlseTogJ1BhbmdvbGluJywgJ01lcnJpd2VhdGhlcicsIHNlcmlmLCBjdXJzaXZlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDhiZjE7XFxuICBwYWRkaW5nOiAyJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5sb2dvIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1zdmctc2lkZSkgKiAyKTtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubmF2LWl0ZW1zIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMnJlbTtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDNyZW07XFxufVxcblxcbi5uYXYtaXRlbXMgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5leHRyZW1pdHkge1xcbiAgcGFkZGluZy1ibG9jazogMTBweDtcXG4gIHBhZGRpbmctaW5saW5lOiAyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc3ZnIHtcXG4gIG1hcmdpbi1ibG9jazogYXV0bztcXG59XFxuXFxuLmZvb3Rlci1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmFwcC1pdGVtIHN2ZyxcXG4uZm9vdGVyLXJvdyBzdmcge1xcbiAgaGVpZ2h0OiB2YXIoLS1zdmctc2lkZSk7XFxuICB3aWR0aDogdmFyKC0tc3ZnLXNpZGUpO1xcbn1cXG5cXG5tYWluIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiNmb3JtRmVlZGJhY2sge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbiNhcHAtY3RuIHtcXG4gIC0tbjogMjtcXG4gIC0tdzogMzUwcHg7XFxuICAtLW4xOiAzO1xcbiAgLS13MTogNzAwcHg7XFxuICAtLW4yOiA0O1xcbiAgLS13MjogMTA1MHB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGNvbHVtbi1nYXA6IDMwcHg7XFxuICByb3ctZ2FwOiAzMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChjbGFtcChjbGFtcChjbGFtcCgxMDAlLyh2YXIoLS1uMikgKyAxKSArIDAuMSUsICh2YXIoLS13MikgLSAxMDB2dykgKiAxMDAwLCAxMDAlLyh2YXIoLS1uMSkgKyAxKSArIDAuMSUpLCAodmFyKC0tdzEpIC0gMTAwdncpICogMTAwMCwgMTAwJS8odmFyKC0tbikgKyAxKSArIDAuMSUpLCAodmFyKC0tdykgLSAxMDB2dykgKiAxMDAwLCAxMDAlKSwgM2ZyKSk7XFxuICBwYWRkaW5nLWJsb2NrOiA1MHB4O1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbi5hcHAtaXRlbSB7XFxuICBwYWRkaW5nOiA1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDhiZjE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYXBwLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmFwcC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctaW5saW5lOiA1JTtcXG59XFxuXFxuLmFwcC1kaXYtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDE1JTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYXBwLWxpa2UtdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hcHAtbGlrZS1zdmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uYXBwLWJ0biB7XFxuICBwYWRkaW5nLWlubGluZTogMTBweDtcXG4gIHBhZGRpbmctYmxvY2s6IDVweDtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXBwLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCA0NiwgNDYpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vYXNzZXQvcmVzb3VyY2UvaWNvbnMuc3ZnJztcbmltcG9ydCB7XG4gIHByaW50TGlzdCxcbn0gZnJvbSAnLi9tb2R1bGVzL3V0aWxzLmpzJztcblxuY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5xdWVyeSBhJyk7XG5cbi8vIFNlbGVjdCBzZWN0aW9uIHRvIHNob3dcbm5hdkl0ZW0uZm9yRWFjaCgobGluaykgPT4ge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbmF2SXRlbS5mb3JFYWNoKChuYXZJdGVtKSA9PiBuYXZJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHByaW50TGlzdChlKTtcbiAgfSk7XG59KTtcbiIsImltcG9ydCB7IGhhbmRsZVBvc3QgfSBmcm9tICcuL1Bvc3RBUEkuanMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlQXBpSW52VVJMLFxufSBmcm9tICcuL2NyZWF0ZVVSTEFQSS5qcyc7XG5pbXBvcnQgeyBoYW5kbGVHRVRBUEkgfSBmcm9tICcuL0dldEFQSS5qcyc7XG5pbXBvcnQge1xuICBiYXNldXJsSW52b2x2ZW1lbnQsIHBhcmFtZXRlckxpa2VBcHAsXG4gIHBhcmFtZXRlcklEQXBwLFxufSBmcm9tICcuL2NvbnN0LmpzJztcblxuY29uc3QgbGlrZXNKc29uID0gYXN5bmMgKGlkKSA9PiAoXG4gIHtcbiAgICBpdGVtX2lkOiBpZCxcbiAgfVxuKTtcblxuY29uc3QgZmluZExpa2VzID0gYXN5bmMgKGlkLCBpbnZBcnIpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gaW52QXJyLmZpbHRlcigoaW52QXJyKSA9PiBpbnZBcnIuaXRlbV9pZCA9PT0gaWQpO1xuICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHJldHVybiByZXN1bHRbMF0ubGlrZXM7XG4gIHJldHVybiAwO1xufTtcblxuY29uc3QgdXBkYXRlTGlrZXNET00gPSBhc3luYyAobm9kZSwgbGlrZXMpID0+IHtcbiAgY29uc3QgbGlrZVRleHQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy5hcHAtbGlrZS10ZXh0Jyk7XG4gIGxpa2VUZXh0LnRleHRDb250ZW50ID0gYCR7bGlrZXN9IGxpa2Uke2xpa2VzID4gMSA/ICdzJyA6ICcnfWA7XG4gIGNvbnN0IHVzZVZTRyA9IG5vZGUucXVlcnlTZWxlY3RvcigndXNlJyk7XG4gIGNvbnN0IHN2Z1ZTRyA9IG5vZGUucXVlcnlTZWxlY3Rvcignc3ZnJyk7XG4gIHVzZVZTRy5jbGFzc0xpc3QuYWRkKCdsaWtlcycpO1xuICBzdmdWU0cuY2xhc3NMaXN0LmFkZCgnbGlrZXMnKTtcbiAgdXNlVlNHLnNldEF0dHJpYnV0ZSgnaHJlZicsICcuLi9hc3NldC9yZXNvdXJjZS9pY29ucy5zdmcjaGVhcnQtbGlrZS1yZWQnKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUxpa2UgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYXJ0LWxpa2UnKSAmJiAhZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGlrZXMnKSkge1xuICAgIGNvbnN0IGN1cnJlbnRJRCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcbiAgICBjb25zdCB1cmwgPSBjcmVhdGVBcGlJbnZVUkwoYmFzZXVybEludm9sdmVtZW50LCBwYXJhbWV0ZXJJREFwcCwgcGFyYW1ldGVyTGlrZUFwcCk7XG4gICAgYXdhaXQgaGFuZGxlUG9zdCh1cmwsIGF3YWl0IGxpa2VzSnNvbihjdXJyZW50SUQpKTtcbiAgICBjb25zdCBkYXRhUmVzcG9uc2VJbnYgPSBhd2FpdCBoYW5kbGVHRVRBUEkodXJsKTtcbiAgICBjb25zdCBxdHlMaWtlcyA9IGF3YWl0IGZpbmRMaWtlcyhjdXJyZW50SUQsIGRhdGFSZXNwb25zZUludik7XG4gICAgY29uc3QgcHJ0TmRlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBhd2FpdCB1cGRhdGVMaWtlc0RPTShwcnROZGUsIGF3YWl0IHF0eUxpa2VzKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0TGlrZXNSZXNwb25zZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgaW52TGlrZXNVUkwgPSBjcmVhdGVBcGlJbnZVUkwoYmFzZXVybEludm9sdmVtZW50LCBwYXJhbWV0ZXJJREFwcCwgcGFyYW1ldGVyTGlrZUFwcCk7XG4gIGNvbnN0IGRhdGFSZXNwb25zZSA9IGF3YWl0IGhhbmRsZUdFVEFQSShpbnZMaWtlc1VSTCk7XG4gIHJldHVybiBkYXRhUmVzcG9uc2U7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVMaWtlLCBmaW5kTGlrZXMsIGdldExpa2VzUmVzcG9uc2UsXG59OyIsImltcG9ydCB7IGNyZWF0ZUFwaU1lYWxVUkwgfSBmcm9tICcuL2NyZWF0ZVVSTEFQSS5qcyc7XG5pbXBvcnQgeyBoYW5kbGVHRVRBUEkgfSBmcm9tICcuL0dldEFQSS5qcyc7XG5pbXBvcnQge1xuICBiYXNldXJsbG9va3VwTWVhbCwgcGFyYW1ldGVyTWVhbElELCBiYXNldXJsRmlsdGVyTWVhbCwgcGFyYW1ldGVyTWVhbENhdCxcbn0gZnJvbSAnLi9jb25zdC5qcyc7XG5cbmNvbnN0IGdldE1lYWxzSURSZXNwb25zZSA9IGFzeW5jIChkYXRhKSA9PiB7XG4gIGNvbnN0IG1lYWxJRFVSTCA9IGNyZWF0ZUFwaU1lYWxVUkwoYmFzZXVybGxvb2t1cE1lYWwsIHBhcmFtZXRlck1lYWxJRCwgZGF0YSk7XG4gIGNvbnN0IGRhdGFSZXNwb25zZSA9IGF3YWl0IGhhbmRsZUdFVEFQSShtZWFsSURVUkwpO1xuICByZXR1cm4gZGF0YVJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0TWVhbHNDYXRSZXNwb25zZSA9IGFzeW5jIChkYXRhKSA9PiB7XG4gIGNvbnN0IG1lYWxJRFVSTCA9IGNyZWF0ZUFwaU1lYWxVUkwoYmFzZXVybEZpbHRlck1lYWwsIHBhcmFtZXRlck1lYWxDYXQsIGF3YWl0IGRhdGEpO1xuICBjb25zdCBkYXRhUmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVHRVRBUEkobWVhbElEVVJMKTtcbiAgcmV0dXJuIGRhdGFSZXNwb25zZTtcbn07XG5cbmV4cG9ydCB7XG4gIGdldE1lYWxzSURSZXNwb25zZSwgZ2V0TWVhbHNDYXRSZXNwb25zZSxcbn07IiwiY29uc3QgY291bnRUb3RhbEl0ZW0gPSAobm9kZSkgPT4gbm9kZS5jaGlsZHJlbi5sZW5ndGg7XG5cbmNvbnN0IGFwcGVuZFRvdGFsID0gKHRvdGFsLCBpZCkgPT4ge1xuICBjb25zdCBpZFNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIGlkU3Bhbi50ZXh0Q29udGVudCA9IGAgKCR7dG90YWx9KWA7XG59O1xuXG5leHBvcnQge1xuICBjb3VudFRvdGFsSXRlbSwgYXBwZW5kVG90YWwsXG59OyIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBHRVRpbmcgZGF0YSBhcyBKU09OIHdpdGggZmV0Y2guXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFVSTCB0byBHRVQgZGF0YSB0b1xuICogQHJldHVybiB7T2JqZWN0fSAtIFJlc3BvbnNlIGJvZHkgZnJvbSBVUkwgdGhhdCB3YXMgR0VUZWRcbiAqL1xuY29uc3QgZmV0Y2hEYXRhSlNPTiA9IGFzeW5jIChVUkwpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChVUkwpO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICB9XG4gIGNvbnN0IGRhdGFKU09OID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YUpTT047XG59O1xuXG4vKipcbiAqIEV2ZW50IGhhbmRsZXIgZm9yIGEgZm9ybSBzdWJtaXQgZXZlbnQuXG4gKiBAcGFyYW0ge1N1Ym1pdEV2ZW50fSBldmVudFxuICovXG5jb25zdCBoYW5kbGVHRVRBUElldmVudCA9IGFzeW5jIChldmVudCwgdXJsKSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgZmV0Y2hEYXRhSlNPTih1cmwpO1xuICAgIHJldHVybiByZXNwb25zZURhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59O1xuXG4vKipcbiAqIEV2ZW50IGhhbmRsZXIgZm9yIGEgZm9ybSBzdWJtaXQgZXZlbnQuXG4gKi9cbmNvbnN0IGhhbmRsZUdFVEFQSSA9IGFzeW5jICh1cmwpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCBmZXRjaERhdGFKU09OKHVybCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIGZldGNoRGF0YUpTT04sIGhhbmRsZUdFVEFQSWV2ZW50LCBoYW5kbGVHRVRBUEksXG59OyIsImltcG9ydCB7XG4gIGNyZWF0ZUVsZW1lbnREZWZhdWx0LCBjcmVhdGVJbWcsIGNyZWF0ZUJ1dHRvbiwgY3JlYXRlTlMsXG59IGZyb20gJy4vY3JlYXRlRWxlbWVudE1vZC5qcyc7XG5cbmNvbnN0IGNyZWF0ZUl0ZW0gPSBhc3luYyAoZWxlbSwgY2xhc3NlcywgbWVhbEFwaSwgeGxpbmssIGxpa2VBcGksXG4gIGNhbGxiYWNrMCA9IGZhbHNlLCBjYWxsYmFjazEgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBkb2NGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBkb2NGcmFnLmFwcGVuZENoaWxkKGNyZWF0ZUltZyhjbGFzc2VzWzFdLCBtZWFsQXBpWzBdLnN0ck1lYWwsIG1lYWxBcGlbMF0uc3RyTWVhbFRodW1iKSk7XG4gIGNvbnN0IGVsZW1IZWFkZXIgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgnZGl2JywgY2xhc3Nlc1syXSk7XG4gIGNvbnN0IHRpdGxlSW1nID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ3AnLCBjbGFzc2VzWzNdLCBtZWFsQXBpWzBdLnN0ck1lYWwpO1xuICBlbGVtSGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlSW1nKTtcbiAgY29uc3QgZWxlbUxpa2VzID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ2RpdicsIGNsYXNzZXNbNF0pO1xuICBjb25zdCBlbGVtTGlrZXNTVkcgPSBjcmVhdGVOUyh4bGluayk7XG4gIGVsZW1MaWtlcy5hcHBlbmRDaGlsZChlbGVtTGlrZXNTVkcpO1xuICBjb25zdCBlbGVtTGlrZXNQID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ3AnLCBjbGFzc2VzWzVdLCBgJHtsaWtlQXBpfSBsaWtlJHtsaWtlQXBpID4gMSA/ICdzJyA6ICcnfWApO1xuICBlbGVtTGlrZXMuYXBwZW5kQ2hpbGQoZWxlbUxpa2VzUCk7XG4gIGVsZW1IZWFkZXIuYXBwZW5kQ2hpbGQoZWxlbUxpa2VzKTtcbiAgZG9jRnJhZy5hcHBlbmRDaGlsZChlbGVtSGVhZGVyKTtcbiAgY29uc3QgYnRuRGl2ID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ2RpdicsIGNsYXNzZXNbNl0pO1xuICBidG5EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKCdidXR0b24nLCBjbGFzc2VzWzddLCAnR28gdG8gQ29tbWVudHMnLCAnQ29tbWVudHMnKSk7XG4gIGJ0bkRpdi5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24oJ2J1dHRvbicsIGNsYXNzZXNbOF0sICdHbyB0byBSZXNlcnZhdGlvbnMnLCAnUmVzZXJ2YXRpb25zJykpO1xuICBkb2NGcmFnLmFwcGVuZENoaWxkKGJ0bkRpdik7XG4gIGNvbnN0IGl0ZW1FbGVtID0gY3JlYXRlRWxlbWVudERlZmF1bHQoZWxlbSwgY2xhc3Nlc1swXSwgZmFsc2UsIGRvY0ZyYWcpO1xuICBpdGVtRWxlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBtZWFsQXBpWzBdLmlkTWVhbCk7XG4gIGlmIChjYWxsYmFjazApIGl0ZW1FbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2swKTtcbiAgaWYgKGNhbGxiYWNrMSkgaXRlbUVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxsYmFjazEpO1xuICByZXR1cm4gaXRlbUVsZW07XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVFbGVtZW50RGVmYXVsdCwgY3JlYXRlSXRlbSxcbn07IiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIFBPU1RpbmcgZGF0YSBhcyBKU09OIHdpdGggZmV0Y2guXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBVUkwgdG8gUE9TVCBkYXRhIHRvXG4gKiBAcGFyYW0ge0Zvcm1EYXRhfSBmb3JtRGF0YSAtIGBGb3JtRGF0YWAgaW5zdGFuY2VcbiAqIEBwYXJhbSB7SlNPTn0ganNvbkZvcm1hdCAtIGpzb24gb2JqZWN0IHRvIGJlIHBhc3NlZCBhcyBib2R5IG9mIGZldGNoIGFwaS5cbiAqIEByZXR1cm4ge09iamVjdH0gLSBSZXNwb25zZSBib2R5IGZyb20gVVJMIHRoYXQgd2FzIFBPU1RlZCB0b1xuICovXG5jb25zdCBwb3N0RGF0YUFzSnNvbiA9IGFzeW5jICh7IHVybCwgZm9ybURhdGEgPSBmYWxzZSwganNvbkZvcm1hdCA9IGZhbHNlIH0pID0+IHtcbiAgbGV0IGpzb25EYXRhO1xuICBpZiAoZm9ybURhdGEpIHtcbiAgICBqc29uRGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YS5lbnRyaWVzKCkpO1xuICB9IGVsc2UgaWYgKGpzb25Gb3JtYXQpIGpzb25EYXRhID0ganNvbkZvcm1hdDtcbiAgY29uc3QgSnNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKTtcbiAgY29uc3QgZmV0Y2hPcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKc29uU3RyaW5nLFxuICB9O1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBmZXRjaE9wdGlvbnMpO1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbi8qKlxuICogRXZlbnQgaGFuZGxlciBmb3IgYSBmb3JtIHN1Ym1pdCBldmVudC5cbiAqIEBwYXJhbSB7U3VibWl0RXZlbnR9IGV2ZW50XG4gKi9cbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBhc3luYyAoZXZlbnQsIHVybCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBzY29yZUZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICB0cnkge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHNjb3JlRm9ybSk7XG4gICAgc2NvcmVGb3JtLnJlc2V0KCk7XG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcG9zdERhdGFBc0pzb24oeyB1cmwsIGZvcm1EYXRhIH0pO1xuICAgIHJldHVybiByZXNwb25zZURhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59O1xuXG4vKipcbiAqIEV2ZW50IGhhbmRsZXIgZm9yIGEgZm9ybSBzdWJtaXQgZXZlbnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge0pTT059IGpzb25cbiAqL1xuY29uc3QgaGFuZGxlUG9zdCA9IGFzeW5jICh1cmwsIGpzb24pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCBwb3N0RGF0YUFzSnNvbih7IHVybCwgZm9ybURhdGE6IGZhbHNlLCBqc29uRm9ybWF0OiBqc29uIH0pO1xuICAgIHJldHVybiByZXNwb25zZURhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBoYW5kbGVGb3JtU3VibWl0LCBwb3N0RGF0YUFzSnNvbiwgaGFuZGxlUG9zdCxcbn07IiwiY29uc3QgY2xhc3NDdG4gPSAnYXBwLWl0ZW0nO1xuY29uc3QgY2xhc3NJbWcgPSAnYXBwLWltZyc7XG5jb25zdCBjbGFzc1RpdHRsZSA9ICdhcHAtdGl0bGUnO1xuY29uc3QgY2xhc3NMaWtlcyA9ICdhcHAtbGlrZSc7XG5jb25zdCBjbGFzc0xpa2VzU1ZHID0gJ2FwcC1saWtlLXN2Zyc7XG5jb25zdCBjbGFzc0xpa2VzVGV4dCA9ICdhcHAtbGlrZS10ZXh0JztcbmNvbnN0IGNsYXNzRGl2QnRuID0gJ2FwcC1kaXYtYnRuJztcbmNvbnN0IGNsYXNzQnRuQ29tbWVudCA9IFsnYXBwLWJ0bicsICdjb21tZW50J107XG5jb25zdCBjbGFzc0J0blJlc2VydmF0aW9uID0gWydhcHAtYnRuJywgJ3Jlc2VydmF0aW9uJ107XG5cbmNvbnN0IGNsYXNzZXMgPSBbXG4gIGNsYXNzQ3RuLCBjbGFzc0ltZywgY2xhc3NUaXR0bGUsIGNsYXNzTGlrZXMsXG4gIGNsYXNzTGlrZXNTVkcsIGNsYXNzTGlrZXNUZXh0LCBjbGFzc0RpdkJ0biwgY2xhc3NCdG5Db21tZW50LFxuICBjbGFzc0J0blJlc2VydmF0aW9uLFxuXTtcblxuY29uc3QgeGxpbmsgPSAnLi4vYXNzZXQvcmVzb3VyY2UvaWNvbnMuc3ZnI2hlYXJ0LWxpa2UnO1xuXG5jb25zdCBiYXNldXJsRmlsdGVyTWVhbCA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvZmlsdGVyLnBocD8nO1xuY29uc3QgYmFzZXVybGxvb2t1cE1lYWwgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/JztcbmNvbnN0IHBhcmFtZXRlck1lYWxJRCA9ICdpJztcbmNvbnN0IHBhcmFtZXRlck1lYWxDYXQgPSAnYyc7XG5cbmNvbnN0IGJhc2V1cmxJbnZvbHZlbWVudCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuY29uc3QgcGFyYW1ldGVyTGlrZUFwcCA9ICdsaWtlcy8nO1xuY29uc3QgcGFyYW1ldGVyQ29tbUFwcCA9ICdjb21tZW50cy8nO1xuY29uc3QgcGFyYW1ldGVyUmVzZXJ2QXBwID0gJ3Jlc2VydmF0aW9ucy8nO1xuY29uc3QgcGFyYW1ldGVySURBcHAgPSAnV2JlM0l6blEyTFFvRlBIbVZyd3AvJztcblxuZXhwb3J0IHtcbiAgY2xhc3NlcywgYmFzZXVybEZpbHRlck1lYWwsIGJhc2V1cmxsb29rdXBNZWFsLCBwYXJhbWV0ZXJNZWFsSUQsIHBhcmFtZXRlck1lYWxDYXQsXG4gIHhsaW5rLCBiYXNldXJsSW52b2x2ZW1lbnQsIHBhcmFtZXRlckxpa2VBcHAsIHBhcmFtZXRlckNvbW1BcHAsIHBhcmFtZXRlclJlc2VydkFwcCxcbiAgcGFyYW1ldGVySURBcHAsXG59OyIsImNvbnN0IHJlZGlyZWN0V2luZG93ID0gKGhyZWYpID0+IHtcbiAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xufTtcblxuLyoqXG4gKiBGdW5jdGlvbiB0byBhZGQgY2xhc3Mgb3IgY2xhc3NlcyB0byBIVE1MIEVsZW1lbnRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW0gSFRNTCBFbGVtZW50IHRvIGJlIG1vZGlmaWVkLlxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzZXMgU3RyaW5nIG9yIEFycmF5IG9mIFN0cmluZyB0byBiZSBhZGRlZC5cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gUmV0dXJucyBIVE1MIGVsZW1lbnQgd2l0aCBjaG9zZW4gY2xhc3Nlcy5cbiAqL1xuY29uc3QgYWRkQ2xhc3MgPSAoZWxlbSwgY2xhc3NlcykgPT4ge1xuICBpZiAoKHR5cGVvZiBjbGFzc2VzKSA9PT0gJ3N0cmluZycpIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc2VzKTtcbiAgZWxzZSBpZiAoKHR5cGVvZiBjbGFzc2VzKSA9PT0gJ29iamVjdCcpIGVsZW0uY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgcmV0dXJuIGVsZW07XG59O1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGNyZWF0ZSBIVE1MIGVsZW1lbnQgdXNpbmcgdGFnIG5hbWVzLlxuICogQ2xhc3NlcyBhbmQgdGV4dCBjb250ZW50IGNhbiBiZSBhZGRlZCBhcyBlbGVtZW50IGlzIGNyZWF0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtIFRhZyBuYW1lIG9mIHRoZSBlbGVtZW50IHRvIGJlIGNyZWF0ZWQuIEV4YW1wbGU6IGBkaXYsIHAsIHNlY3Rpb25gXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NlcyBOYW1lIG9mIGNsYXNzIG9yIGNsYXNzZXMgdG8gYWRkLiBTdHJpbmcsIGFycmF5IG9mIHN0cmluZyBzaG91bGQgYmUgdXNlZC5cbiAqIElmIG5vIGNsYXNzIGlzIHdhbnRlZCwgZmFsc2Ugc2hvdWxkIGJlIHVzZS5PcHRpb25hbCBQYXJhbWVudGVyLlxuICogQHBhcmFtIHtTdHJpbmd9IHRleHRDb250ZXh0IFRleHQgdG8gYmUgYWRkZWQgYXMgdGV4dCBjb250ZW50IHRvIEhUTUwgZWxlbWVudC5cbiAqIE9wdGlvbiBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpbm5lckNoaWxkIEhUTUwgRWxlbWVudCB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSBSZXR1cm5zIEhUTUwgZWxlbWVudCBjaG9zZW4gd2l0aCBzZXQgYXR0cmlidXRlcy5cbiAqL1xuY29uc3QgY3JlYXRlRWxlbWVudERlZmF1bHQgPSAoZWxlbSwgY2xhc3NlcyA9IGZhbHNlLCB0ZXh0Q29udGVudCA9IGZhbHNlLCBpbm5lckNoaWxkID0gZmFsc2UpID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbSk7XG4gIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzZXMpO1xuICBpZiAodGV4dENvbnRlbnQpIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgaWYgKGlubmVyQ2hpbGQpIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5uZXJDaGlsZCk7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIEhUTUwgc3ZnIGVsZW1lbnQgdG8gYmUgcmVuZGVyZWQgZGluYW1pY2FsbHlcbiAqIEBwYXJhbSB7c3RyaW5nfSBocmVmIEh5cGVybGluayByZWZlcmVuY2UgZm9yIGZpbGUgbG9jYXRpb25cbiAqIEByZXR1cm5zIHtIVE1MT3JTVkdFbGVtZW50fSBIVE1MIHN2ZyBlbGVtZW50IHRvIGJlIGFwcGVuZCB0byBET00gdG8gYmUgcmVuZGVyZWQgZGluYW1pY2FsbHlcbiAqL1xuY29uc3QgY3JlYXRlTlMgPSAoaHJlZikgPT4ge1xuICBjb25zdCB4bGluayA9IGhyZWYuc3BsaXQoJyMnKTtcbiAgY29uc3QgdXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICd1c2UnKTtcbiAgdXNlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAke2hyZWZ9YCk7XG4gIHVzZS5jbGFzc0xpc3QuYWRkKHhsaW5rWzFdKTtcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgc3ZnLmFwcGVuZENoaWxkKHVzZSk7XG4gIHN2Zy5jbGFzc0xpc3QuYWRkKHhsaW5rWzFdKTtcbiAgcmV0dXJuIHN2Zztcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIEhUTUwgbGFiZWwgZWxlbWVudCB3aXRoIGEgZm9yIGF0dHJpYnV0ZSwgZGlmZmVyZXRlIGNsYXNzZXMgYW5kIGlubmVyIGNoaWxkIGFuZCB0eHRcbiAqIGNvbnRlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JBdHI9ZmFsc2UgRm9yIGF0dHJpYnV0ZSBpbiBsYWJlbCB0aGF0IGluZGljYXRlcyB3aGljaCBpbnB1dCBvciB0ZXh0IGFyZWFcbiAqIGl0IGlzIGxpbmtlZCB3aXRoXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3Nlcz1mYWxzZSBTdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5nIHdpdGggY2xhc3MgbmFtZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0Q29udGVudD1mYWxzZSBTdHJpbmcgdGhhdCByZXByZXNlbnRzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgdGhlIGxhYmVsXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpbm5lckNoaWxkPWZhbHNlIEhUTUwgZWxlbWVudCB0byBiZSBhcHBlbmQgdG8gbGFiZWxcbiAqIEByZXR1cm5zIHtIVE1MTGFiZWxFbGVtZW50fSBIVE1MIGxhYmVsIGVsZW1lbnQgcmVhZHkgdG8gYmUgYXBwZW5kIHRvIHRoZSBkb21cbiAqL1xuY29uc3QgY3JlYXRlTGFiZWwgPSAoZm9yQXRyID0gZmFsc2UsIGNsYXNzZXMgPSBmYWxzZSwgdGV4dENvbnRlbnQgPSBmYWxzZSwgaW5uZXJDaGlsZCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ2xhYmVsJywgY2xhc3NlcywgdGV4dENvbnRlbnQsIGlubmVyQ2hpbGQpO1xuICBpZiAoZm9yQXRyKSBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGZvckF0cik7XG4gIHJldHVybiBsYWJlbDtcbn07XG5cbmNvbnN0IGNyZWF0ZVRleHRBcmVhID0gKGxlbmd0aCA9IGZhbHNlLCBjbGFzc2VzID0gZmFsc2UsXG4gIHRleHRDb250ZW50ID0gZmFsc2UsIGlubmVyQ2hpbGQgPSBmYWxzZSkgPT4ge1xuICBjb25zdCB0ZXh0QXJlYSA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCd0ZXh0YXJlYScsIGNsYXNzZXMsIHRleHRDb250ZW50LCBpbm5lckNoaWxkKTtcbiAgaWYgKGxlbmd0aCkgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCBsZW5ndGgpO1xuICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3NwZWxsY2hlY2snLCAndHJ1ZScpO1xuICByZXR1cm4gdGV4dEFyZWE7XG59O1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGNyZWF0ZSBIVE1MIEJ1dHRvbiBlbGVtZW50LiBDbGFzc2VzIGFuZCB0ZXh0IGNvbnRlbnRcbiAqIGNhbiBiZSBhZGRlZCBhcyBlbGVtZW50IGlzIGNyZWF0ZS4gQ2xpY2sgZXZlbnQgdG8gYSBhbm90aGVyIHdlYnBhZ2UgY2FuIGJlIGFkZGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IGZ1bmMgVHlwZSBvZiBidXR0b24gYHN1bWJpdCwgcmVzZXQsIGJ1dHRvbmBcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc2VzIE5hbWUgb2YgY2xhc3Mgb3IgY2xhc3NlcyB0byBhZGQuIFN0cmluZywgYXJyYXkgb2Ygc3RyaW5nIHNob3VsZCBiZSB1c2VkLlxuICogSWYgbm8gY2xhc3MgaXMgd2FudGVkLCBmYWxzZSBzaG91bGQgYmUgdXNlLk9wdGlvbmFsIFBhcmFtZW50ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXJpYUxhYmVsIFRleHQgZm9yIGFjY2Vzc2liaWxpdHlcbiAqIEBwYXJhbSB7YW55fSB0ZXh0Q29udGVudCBUZXh0IHRvIGJlIGFkZGVkIGFzIHRleHQgY29udGVudCB0byBIVE1MIGVsZW1lbnQuXG4gKiBPcHRpb24gcGFyYW1ldGVyLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaW5uZXJDaGlsZCBIVE1MIEVsZW1lbnQgdG8gYmUgYXBwZW5kZWRcbiAqIEBwYXJhbSB7YW55fSBocmVmIEh5cGVybGluayByZWZlcmVuY2UgdG8gYmUgZm9sbG93ZWQgaWYgYnV0dG9uIGlzIGNsaWNrZWQuXG4gKiBPcHRpb24gcGFyYW1ldGVyLlxuICogQHJldHVybnMge0hUTUxCdXR0b25FbGVtZW50fSBSZXR1cm5zIEhUTUwgYnV0dG9uIGVsZW1lbnQgY2hvc2VuIHdpdGggc2V0IGF0dHJpYnV0ZXMuXG4gKi9cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChmdW5jLCBjbGFzc2VzLCBhcmlhTGFiZWwsIHRleHRDb250ZW50ID0gZmFsc2UsXG4gIGlubmVyQ2hpbGQgPSBmYWxzZSwgaHJlZiA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24udHlwZSA9IGZ1bmM7XG4gIGJ1dHRvbi5hcmlhTGFiZWwgPSBhcmlhTGFiZWw7XG4gIGFkZENsYXNzKGJ1dHRvbiwgY2xhc3Nlcyk7XG4gIGlmICh0ZXh0Q29udGVudCkgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIGlmIChocmVmKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVkaXJlY3RXaW5kb3coaHJlZikpO1xuICB9XG4gIGlmIChpbm5lckNoaWxkKSBidXR0b24uYXBwZW5kQ2hpbGQoaW5uZXJDaGlsZCk7XG4gIHJldHVybiBidXR0b247XG59O1xuXG5jb25zdCBjcmVhdGVJbWcgPSAoY2xhc3NlcywgbmFtZSwgdXJsKSA9PiB7XG4gIGNvbnN0IGltZ0VsZW0gPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgnaW1nJywgY2xhc3Nlcyk7XG4gIGltZ0VsZW0uc2V0QXR0cmlidXRlKCdzcmMnLCB1cmwpO1xuICBpbWdFbGVtLnNldEF0dHJpYnV0ZSgnYWx0JywgbmFtZSk7XG4gIHJldHVybiBpbWdFbGVtO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlTGFiZWwsIGNyZWF0ZUltZyxcbiAgY3JlYXRlTlMsIGNyZWF0ZVRleHRBcmVhLFxuICBhZGRDbGFzcywgY3JlYXRlRWxlbWVudERlZmF1bHQsXG4gIGNyZWF0ZUJ1dHRvbixcbn07XG4iLCJjb25zdCBjcmVhdGVBcGlNZWFsVVJMID0gKGJhc2V1cmwsIHF1ZXJ5S2V5LCBxdWVyeVZhbHVlKSA9PiB7XG4gIGNvbnN0IHVybCA9IGAke2Jhc2V1cmx9JHtxdWVyeUtleX09JHtxdWVyeVZhbHVlfWA7XG4gIHJldHVybiB1cmw7XG59O1xuXG5jb25zdCBjcmVhdGVBcGlJbnZVUkwgPSAoYmFzZXVybCwgaWQgPSBmYWxzZSwgZW5kcG9pbnQgPSBmYWxzZSkgPT4ge1xuICBjb25zdCB1cmwgPSBgJHtiYXNldXJsfSR7aWR9JHtlbmRwb2ludH1gO1xuICByZXR1cm4gdXJsO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlQXBpTWVhbFVSTCwgY3JlYXRlQXBpSW52VVJMLFxufTsiLCJpbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSAnLi9MaXN0SXRlbU1vZC5qcyc7XG5pbXBvcnQgeyBjbGFzc2VzLCB4bGluayB9IGZyb20gJy4vY29uc3QuanMnO1xuaW1wb3J0IHsgY3JlYXRlTGlrZSwgZmluZExpa2VzLCBnZXRMaWtlc1Jlc3BvbnNlIH0gZnJvbSAnLi9BUElMaWtlSGFuZGxpbmcuanMnO1xuaW1wb3J0IHsgZ2V0TWVhbHNJRFJlc3BvbnNlLCBnZXRNZWFsc0NhdFJlc3BvbnNlIH0gZnJvbSAnLi9BUElNZWFsc0hhbmRsaW5nLmpzJztcbmltcG9ydCB7IGNvdW50VG90YWxJdGVtLCBhcHBlbmRUb3RhbCB9IGZyb20gJy4vQ291bnRUb3RhbEl0ZW1zLmpzJztcblxuY29uc3QgYXBwZW5kUmVzcG9uc2VQYXJhID0gYXN5bmMgKG5vZGUpID0+IHtcbiAgY29uc3Qgc2hvd1Jlc3BvbnNlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtRmVlZGJhY2snKTtcbiAgc2hvd1Jlc3BvbnNlRm9ybS50ZXh0Q29udGVudCA9IG5vZGU7XG59O1xuXG5jb25zdCBnZXRDYXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgY29uc3QgY2F0SUQgPSBhd2FpdCBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gIHJldHVybiBjYXRJRDtcbn07XG5cbmNvbnN0IGFwcGVuZEl0ZW1zID0gYXN5bmMgKGRhdGFBcnIsIGludkFyciwgSUQpID0+IHtcbiAgY29uc3QgYXBwQ3RuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcC1jdG4nKTtcbiAgYXBwQ3RuLmlubmVySFRNTCA9ICcnO1xuICBkYXRhQXJyLmZvckVhY2goYXN5bmMgKGRhdGEpID0+IHtcbiAgICBjb25zdCBtZWFsRGF0YSA9IGF3YWl0IGdldE1lYWxzSURSZXNwb25zZShkYXRhLmlkTWVhbCk7XG4gICAgY29uc3QgbWVhbEZyYWcgPSBhd2FpdCBjcmVhdGVJdGVtKCdsaScsIGNsYXNzZXMsIG1lYWxEYXRhLm1lYWxzLCB4bGluaywgYXdhaXQgZmluZExpa2VzKG1lYWxEYXRhLm1lYWxzWzBdLmlkTWVhbCwgaW52QXJyKSwgY3JlYXRlTGlrZSk7XG4gICAgYXBwQ3RuLmFwcGVuZENoaWxkKG1lYWxGcmFnKTtcbiAgICBjb25zdCB0b3RhbCA9IGNvdW50VG90YWxJdGVtKGFwcEN0bik7XG4gICAgYXBwZW5kVG90YWwodG90YWwsIElEKTtcbiAgfSk7XG59O1xuXG5jb25zdCBwcmludExpc3QgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgY29uc3QgY2F0SUQgPSBhd2FpdCBnZXRDYXQoZXZlbnQpO1xuICBjb25zdCBkYXRhUmVzcG9uc2VNZWFsID0gYXdhaXQgZ2V0TWVhbHNDYXRSZXNwb25zZShjYXRJRCk7XG4gIGNvbnN0IGRhdGFSZXNwb25zZUludiA9IGF3YWl0IGdldExpa2VzUmVzcG9uc2UoKTtcbiAgaWYgKGRhdGFSZXNwb25zZU1lYWwgaW5zdGFuY2VvZiBFcnJvciB8fCBkYXRhUmVzcG9uc2VJbnYgaW5zdGFuY2VvZiBFcnJvcikgYXBwZW5kUmVzcG9uc2VQYXJhKCdVbmFibGUgdG8gRmV0Y2ggRGF0YScpO1xuICBlbHNlIGF3YWl0IGFwcGVuZEl0ZW1zKGRhdGFSZXNwb25zZU1lYWwubWVhbHMsIGRhdGFSZXNwb25zZUludiwgY2F0SUQpO1xufTtcblxuZXhwb3J0IHtcbiAgcHJpbnRMaXN0LCB4bGluayxcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9

