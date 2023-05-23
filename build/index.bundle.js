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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --svg-side: clamp(16px, (100vw - 320px) * 1000, clamp(20px, (100vw - 640px) * 1000, clamp(25px, (100vw - 1280px) * 1000, 30px)));\n  --font-size: calc(var(--svg-side) * 0.8);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nul,\nli {\n  list-style-type: none;\n}\n\nbody {\n  background-color: #6e6ce9;\n  font-family: 'Pangolin', 'Merriweather', serif, cursive;\n  min-height: 100vh;\n  display: flex;\n  flex-flow: column;\n  padding: 5px;\n}\n\n.nav-bar {\n  background-color: #848bf1;\n  padding: 2%;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.logo {\n  height: calc(var(--svg-side) * 2);\n}\n\n.nav-list {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.nav-items {\n  list-style: none;\n  color: white;\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin-top: 15px;\n  margin-right: 3rem;\n}\n\n.nav-items a {\n  text-decoration: none;\n  color: black;\n}\n\n.extremity {\n  padding-block: 10px;\n  padding-inline: 20px;\n  border: 2px solid black;\n  display: flex;\n  justify-content: space-between;\n}\n\n.svg {\n  margin-block: auto;\n}\n\n.footer-row {\n  display: flex;\n  gap: 10px;\n}\n\n.app-item svg,\n.footer-row svg {\n  height: var(--svg-side);\n  width: var(--svg-side);\n}\n\nmain {\n  height: auto;\n  flex-grow: 1;\n}\n\n.active {\n  font-weight: bolder;\n}\n\n#app-ctn {\n  --n: 2;\n  --w: 350px;\n  --n1: 3;\n  --w1: 700px;\n  --n2: 4;\n  --w2: 1050px;\n\n  display: grid;\n  column-gap: 30px;\n  row-gap: 30px;\n  grid-template-columns: repeat(auto-fit, minmax(clamp(clamp(clamp(100%/(var(--n2) + 1) + 0.1%, (var(--w2) - 100vw) * 1000, 100%/(var(--n1) + 1) + 0.1%), (var(--w1) - 100vw) * 1000, 100%/(var(--n) + 1) + 0.1%), (var(--w) - 100vw) * 1000, 100%), 3fr));\n  padding-block: 50px;\n  padding-inline: 20px;\n  max-width: 1200px;\n  margin-inline: auto;\n}\n\n.app-item {\n  padding: 5%;\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n  background-color: #848bf1;\n  border-radius: 10px;\n}\n\n.app-img {\n  width: 100%;\n  height: auto;\n}\n\n.app-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-inline: 5%;\n}\n\n.app-div-btn {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15%;\n  justify-content: center;\n}\n\n.app-like-text {\n  text-align: center;\n}\n\n.app-like-svg {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  gap: 5px;\n}\n\n.app-btn {\n  padding-inline: 10px;\n  padding-block: 5px;\n  z-index: 1;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.app-btn:hover {\n  background-color: rgb(114, 46, 46);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,gIAAgI;EAChI,wCAAwC;AAC1C;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,uDAAuD;EACvD,iBAAiB;EACjB,aAAa;EACb,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,eAAe;EACf,SAAS;EACT,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;EACvB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;EAEE,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,MAAM;EACN,UAAU;EACV,OAAO;EACP,WAAW;EACX,OAAO;EACP,YAAY;;EAEZ,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,wPAAwP;EACxP,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,QAAQ;EACR,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,UAAU;EACV,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,kCAAkC;AACpC","sourcesContent":[":root {\n  --svg-side: clamp(16px, (100vw - 320px) * 1000, clamp(20px, (100vw - 640px) * 1000, clamp(25px, (100vw - 1280px) * 1000, 30px)));\n  --font-size: calc(var(--svg-side) * 0.8);\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nul,\nli {\n  list-style-type: none;\n}\n\nbody {\n  background-color: #6e6ce9;\n  font-family: 'Pangolin', 'Merriweather', serif, cursive;\n  min-height: 100vh;\n  display: flex;\n  flex-flow: column;\n  padding: 5px;\n}\n\n.nav-bar {\n  background-color: #848bf1;\n  padding: 2%;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.logo {\n  height: calc(var(--svg-side) * 2);\n}\n\n.nav-list {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.nav-items {\n  list-style: none;\n  color: white;\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin-top: 15px;\n  margin-right: 3rem;\n}\n\n.nav-items a {\n  text-decoration: none;\n  color: black;\n}\n\n.extremity {\n  padding-block: 10px;\n  padding-inline: 20px;\n  border: 2px solid black;\n  display: flex;\n  justify-content: space-between;\n}\n\n.svg {\n  margin-block: auto;\n}\n\n.footer-row {\n  display: flex;\n  gap: 10px;\n}\n\n.app-item svg,\n.footer-row svg {\n  height: var(--svg-side);\n  width: var(--svg-side);\n}\n\nmain {\n  height: auto;\n  flex-grow: 1;\n}\n\n.active {\n  font-weight: bolder;\n}\n\n#app-ctn {\n  --n: 2;\n  --w: 350px;\n  --n1: 3;\n  --w1: 700px;\n  --n2: 4;\n  --w2: 1050px;\n\n  display: grid;\n  column-gap: 30px;\n  row-gap: 30px;\n  grid-template-columns: repeat(auto-fit, minmax(clamp(clamp(clamp(100%/(var(--n2) + 1) + 0.1%, (var(--w2) - 100vw) * 1000, 100%/(var(--n1) + 1) + 0.1%), (var(--w1) - 100vw) * 1000, 100%/(var(--n) + 1) + 0.1%), (var(--w) - 100vw) * 1000, 100%), 3fr));\n  padding-block: 50px;\n  padding-inline: 20px;\n  max-width: 1200px;\n  margin-inline: auto;\n}\n\n.app-item {\n  padding: 5%;\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n  background-color: #848bf1;\n  border-radius: 10px;\n}\n\n.app-img {\n  width: 100%;\n  height: auto;\n}\n\n.app-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-inline: 5%;\n}\n\n.app-div-btn {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15%;\n  justify-content: center;\n}\n\n.app-like-text {\n  text-align: center;\n}\n\n.app-like-svg {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  gap: 5px;\n}\n\n.app-btn {\n  padding-inline: 10px;\n  padding-block: 5px;\n  z-index: 1;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.app-btn:hover {\n  background-color: rgb(114, 46, 46);\n}\n"],"sourceRoot":""}]);
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




const navItem = document.querySelectorAll('.nav-items a');

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

const createLike = async (event) => {
  if (event.target.classList.contains('heart-like')) {
    const currentID = event.currentTarget.dataset.id;
    const url = (0,_createURLAPI_js__WEBPACK_IMPORTED_MODULE_0__.createApiInvURL)(_const_js__WEBPACK_IMPORTED_MODULE_4__.baseurlInvolvement, _const_js__WEBPACK_IMPORTED_MODULE_4__.parameterIDApp, _const_js__WEBPACK_IMPORTED_MODULE_4__.parameterLikeApp);
    await (0,_PostAPI_js__WEBPACK_IMPORTED_MODULE_2__.handlePost)(url, await likesJson(currentID));
    const dataResponseInv = await (0,_GetAPI_js__WEBPACK_IMPORTED_MODULE_3__.handleGETAPI)(url);
    const qtyLikes = await findLikes(currentID, dataResponseInv);
    const likeText = event.target.parentNode.parentNode.querySelector('.app-like-text');
    likeText.textContent = `${qtyLikes} like${qtyLikes > 1 ? 's' : ''}`;
    const useVSG = event.target.querySelector('use');
    useVSG.setAttribute('href', '../asset/resource/icons.svg#heart-like-red');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBQXdCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGtFQUFnQixDQUFDLHdEQUFpQixFQUFFLHNEQUFlO0FBQ3ZFLDZCQUE2Qix3REFBWTtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkRBQVUsT0FBTyw4Q0FBTyxZQUFZLDRDQUFLO0FBQ3BFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EscUJBQXFCLGtFQUFnQixDQUFDLHdEQUFpQixFQUFFLHVEQUFnQjtBQUN6RSxzQkFBc0IsaUVBQWUsQ0FBQyx5REFBa0IsRUFBRSxxREFBYyxFQUFFLHVEQUFnQjtBQUMxRixpQ0FBaUMsd0RBQVk7QUFDN0MsZ0NBQWdDLHdEQUFZO0FBQzVDO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvR2V0QVBJLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL0xpc3RJdGVtTW9kLmpzIiwid2VicGFjazovL21lYWxzLWFwaS10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL1Bvc3RBUEkuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvY3JlYXRlRWxlbWVudE1vZC5qcyIsIndlYnBhY2s6Ly9tZWFscy1hcGktdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9jcmVhdGVVUkxBUEkuanMiLCJ3ZWJwYWNrOi8vbWVhbHMtYXBpLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXN2Zy1zaWRlOiBjbGFtcCgxNnB4LCAoMTAwdncgLSAzMjBweCkgKiAxMDAwLCBjbGFtcCgyMHB4LCAoMTAwdncgLSA2NDBweCkgKiAxMDAwLCBjbGFtcCgyNXB4LCAoMTAwdncgLSAxMjgwcHgpICogMTAwMCwgMzBweCkpKTtcXG4gIC0tZm9udC1zaXplOiBjYWxjKHZhcigtLXN2Zy1zaWRlKSAqIDAuOCk7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmU2Y2U5O1xcbiAgZm9udC1mYW1pbHk6ICdQYW5nb2xpbicsICdNZXJyaXdlYXRoZXInLCBzZXJpZiwgY3Vyc2l2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ4YmYxO1xcbiAgcGFkZGluZzogMiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tc3ZnLXNpZGUpICogMik7XFxufVxcblxcbi5uYXYtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLm5hdi1pdGVtcyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDJyZW07XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcbn1cXG5cXG4ubmF2LWl0ZW1zIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZXh0cmVtaXR5IHtcXG4gIHBhZGRpbmctYmxvY2s6IDEwcHg7XFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnN2ZyB7XFxuICBtYXJnaW4tYmxvY2s6IGF1dG87XFxufVxcblxcbi5mb290ZXItcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5hcHAtaXRlbSBzdmcsXFxuLmZvb3Rlci1yb3cgc3ZnIHtcXG4gIGhlaWdodDogdmFyKC0tc3ZnLXNpZGUpO1xcbiAgd2lkdGg6IHZhcigtLXN2Zy1zaWRlKTtcXG59XFxuXFxubWFpbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuI2FwcC1jdG4ge1xcbiAgLS1uOiAyO1xcbiAgLS13OiAzNTBweDtcXG4gIC0tbjE6IDM7XFxuICAtLXcxOiA3MDBweDtcXG4gIC0tbjI6IDQ7XFxuICAtLXcyOiAxMDUwcHg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgY29sdW1uLWdhcDogMzBweDtcXG4gIHJvdy1nYXA6IDMwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KGNsYW1wKGNsYW1wKGNsYW1wKDEwMCUvKHZhcigtLW4yKSArIDEpICsgMC4xJSwgKHZhcigtLXcyKSAtIDEwMHZ3KSAqIDEwMDAsIDEwMCUvKHZhcigtLW4xKSArIDEpICsgMC4xJSksICh2YXIoLS13MSkgLSAxMDB2dykgKiAxMDAwLCAxMDAlLyh2YXIoLS1uKSArIDEpICsgMC4xJSksICh2YXIoLS13KSAtIDEwMHZ3KSAqIDEwMDAsIDEwMCUpLCAzZnIpKTtcXG4gIHBhZGRpbmctYmxvY2s6IDUwcHg7XFxuICBwYWRkaW5nLWlubGluZTogMjBweDtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLmFwcC1pdGVtIHtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0OGJmMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5hcHAtaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uYXBwLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1pbmxpbmU6IDUlO1xcbn1cXG5cXG4uYXBwLWRpdi1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogMTUlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hcHAtbGlrZS10ZXh0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1saWtlLXN2ZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5hcHAtYnRuIHtcXG4gIHBhZGRpbmctaW5saW5lOiAxMHB4O1xcbiAgcGFkZGluZy1ibG9jazogNXB4O1xcbiAgei1pbmRleDogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hcHAtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTQsIDQ2LCA0Nik7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnSUFBZ0k7RUFDaEksd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHVEQUF1RDtFQUN2RCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE1BQU07RUFDTixVQUFVO0VBQ1YsT0FBTztFQUNQLFdBQVc7RUFDWCxPQUFPO0VBQ1AsWUFBWTs7RUFFWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix3UEFBd1A7RUFDeFAsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixRQUFRO0VBQ1IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1zdmctc2lkZTogY2xhbXAoMTZweCwgKDEwMHZ3IC0gMzIwcHgpICogMTAwMCwgY2xhbXAoMjBweCwgKDEwMHZ3IC0gNjQwcHgpICogMTAwMCwgY2xhbXAoMjVweCwgKDEwMHZ3IC0gMTI4MHB4KSAqIDEwMDAsIDMwcHgpKSk7XFxuICAtLWZvbnQtc2l6ZTogY2FsYyh2YXIoLS1zdmctc2lkZSkgKiAwLjgpO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlNmNlOTtcXG4gIGZvbnQtZmFtaWx5OiAnUGFuZ29saW4nLCAnTWVycml3ZWF0aGVyJywgc2VyaWYsIGN1cnNpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm5hdi1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0OGJmMTtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLXN2Zy1zaWRlKSAqIDIpO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5uYXYtaXRlbXMge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1yaWdodDogM3JlbTtcXG59XFxuXFxuLm5hdi1pdGVtcyBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmV4dHJlbWl0eSB7XFxuICBwYWRkaW5nLWJsb2NrOiAxMHB4O1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zdmcge1xcbiAgbWFyZ2luLWJsb2NrOiBhdXRvO1xcbn1cXG5cXG4uZm9vdGVyLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYXBwLWl0ZW0gc3ZnLFxcbi5mb290ZXItcm93IHN2ZyB7XFxuICBoZWlnaHQ6IHZhcigtLXN2Zy1zaWRlKTtcXG4gIHdpZHRoOiB2YXIoLS1zdmctc2lkZSk7XFxufVxcblxcbm1haW4ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbiNhcHAtY3RuIHtcXG4gIC0tbjogMjtcXG4gIC0tdzogMzUwcHg7XFxuICAtLW4xOiAzO1xcbiAgLS13MTogNzAwcHg7XFxuICAtLW4yOiA0O1xcbiAgLS13MjogMTA1MHB4O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGNvbHVtbi1nYXA6IDMwcHg7XFxuICByb3ctZ2FwOiAzMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChjbGFtcChjbGFtcChjbGFtcCgxMDAlLyh2YXIoLS1uMikgKyAxKSArIDAuMSUsICh2YXIoLS13MikgLSAxMDB2dykgKiAxMDAwLCAxMDAlLyh2YXIoLS1uMSkgKyAxKSArIDAuMSUpLCAodmFyKC0tdzEpIC0gMTAwdncpICogMTAwMCwgMTAwJS8odmFyKC0tbikgKyAxKSArIDAuMSUpLCAodmFyKC0tdykgLSAxMDB2dykgKiAxMDAwLCAxMDAlKSwgM2ZyKSk7XFxuICBwYWRkaW5nLWJsb2NrOiA1MHB4O1xcbiAgcGFkZGluZy1pbmxpbmU6IDIwcHg7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbi5hcHAtaXRlbSB7XFxuICBwYWRkaW5nOiA1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDhiZjE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYXBwLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmFwcC10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctaW5saW5lOiA1JTtcXG59XFxuXFxuLmFwcC1kaXYtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDE1JTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYXBwLWxpa2UtdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hcHAtbGlrZS1zdmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uYXBwLWJ0biB7XFxuICBwYWRkaW5nLWlubGluZTogMTBweDtcXG4gIHBhZGRpbmctYmxvY2s6IDVweDtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXBwLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE0LCA0NiwgNDYpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vYXNzZXQvcmVzb3VyY2UvaWNvbnMuc3ZnJztcbmltcG9ydCB7XG4gIHByaW50TGlzdCxcbn0gZnJvbSAnLi9tb2R1bGVzL3V0aWxzLmpzJztcblxuY29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtaXRlbXMgYScpO1xuXG4vLyBTZWxlY3Qgc2VjdGlvbiB0byBzaG93XG5uYXZJdGVtLmZvckVhY2goKGxpbmspID0+IHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG5hdkl0ZW0uZm9yRWFjaCgobmF2SXRlbSkgPT4gbmF2SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBwcmludExpc3QoZSk7XG4gIH0pO1xufSk7IiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIEdFVGluZyBkYXRhIGFzIEpTT04gd2l0aCBmZXRjaC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVVJMIHRvIEdFVCBkYXRhIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gUmVzcG9uc2UgYm9keSBmcm9tIFVSTCB0aGF0IHdhcyBHRVRlZFxuICovXG5jb25zdCBmZXRjaERhdGFKU09OID0gYXN5bmMgKFVSTCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFVSTCk7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gIH1cbiAgY29uc3QgZGF0YUpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhSlNPTjtcbn07XG5cbi8qKlxuICogRXZlbnQgaGFuZGxlciBmb3IgYSBmb3JtIHN1Ym1pdCBldmVudC5cbiAqIEBwYXJhbSB7U3VibWl0RXZlbnR9IGV2ZW50XG4gKi9cbmNvbnN0IGhhbmRsZUdFVEFQSWV2ZW50ID0gYXN5bmMgKGV2ZW50LCB1cmwpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCBmZXRjaERhdGFKU09OKHVybCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn07XG5cbi8qKlxuICogRXZlbnQgaGFuZGxlciBmb3IgYSBmb3JtIHN1Ym1pdCBldmVudC5cbiAqL1xuY29uc3QgaGFuZGxlR0VUQVBJID0gYXN5bmMgKHVybCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IGZldGNoRGF0YUpTT04odXJsKTtcbiAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgZmV0Y2hEYXRhSlNPTiwgaGFuZGxlR0VUQVBJZXZlbnQsIGhhbmRsZUdFVEFQSSxcbn07IiwiaW1wb3J0IHtcbiAgY3JlYXRlRWxlbWVudERlZmF1bHQsIGNyZWF0ZUltZywgY3JlYXRlQnV0dG9uLCBjcmVhdGVOUyxcbn0gZnJvbSAnLi9jcmVhdGVFbGVtZW50TW9kLmpzJztcblxuY29uc3QgY3JlYXRlSXRlbSA9IGFzeW5jIChlbGVtLCBjbGFzc2VzLCBtZWFsQXBpLCB4bGluaywgbGlrZUFwaSwgY2IpID0+IHtcbiAgY29uc3QgZG9jRnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgZG9jRnJhZy5hcHBlbmRDaGlsZChjcmVhdGVJbWcoY2xhc3Nlc1sxXSwgbWVhbEFwaVswXS5zdHJNZWFsLCBtZWFsQXBpWzBdLnN0ck1lYWxUaHVtYikpO1xuICBjb25zdCBlbGVtSGVhZGVyID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ2RpdicsIGNsYXNzZXNbMl0pO1xuICBjb25zdCB0aXRsZUltZyA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdwJywgY2xhc3Nlc1szXSwgbWVhbEFwaVswXS5zdHJNZWFsKTtcbiAgZWxlbUhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZUltZyk7XG4gIGNvbnN0IGVsZW1MaWtlcyA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdkaXYnLCBjbGFzc2VzWzRdKTtcbiAgY29uc3QgZWxlbUxpa2VzU1ZHID0gY3JlYXRlTlMoeGxpbmspO1xuICBlbGVtTGlrZXMuYXBwZW5kQ2hpbGQoZWxlbUxpa2VzU1ZHKTtcbiAgY29uc3QgZWxlbUxpa2VzUCA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdwJywgY2xhc3Nlc1s1XSwgYCR7bGlrZUFwaX0gbGlrZSR7bGlrZUFwaSA+IDEgPyAncycgOiAnJ31gKTtcbiAgZWxlbUxpa2VzLmFwcGVuZENoaWxkKGVsZW1MaWtlc1ApO1xuICBlbGVtSGVhZGVyLmFwcGVuZENoaWxkKGVsZW1MaWtlcyk7XG4gIGRvY0ZyYWcuYXBwZW5kQ2hpbGQoZWxlbUhlYWRlcik7XG4gIGNvbnN0IGJ0bkRpdiA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdkaXYnLCBjbGFzc2VzWzZdKTtcbiAgYnRuRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbignYnV0dG9uJywgY2xhc3Nlc1s3XSwgJ0dvIHRvIENvbW1lbnRzJywgJ0NvbW1lbnRzJykpO1xuICBidG5EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKCdidXR0b24nLCBjbGFzc2VzWzddLCAnR28gdG8gUmVzZXJ2YXRpb25zJywgJ1Jlc2VydmF0aW9ucycpKTtcbiAgZG9jRnJhZy5hcHBlbmRDaGlsZChidG5EaXYpO1xuICBjb25zdCBpdGVtRWxlbSA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KGVsZW0sIGNsYXNzZXNbMF0sIGZhbHNlLCBkb2NGcmFnKTtcbiAgaXRlbUVsZW0uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgbWVhbEFwaVswXS5pZE1lYWwpO1xuICBpdGVtRWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNiKTtcbiAgcmV0dXJuIGl0ZW1FbGVtO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlRWxlbWVudERlZmF1bHQsIGNyZWF0ZUl0ZW0sXG59OyIsIi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBQT1NUaW5nIGRhdGEgYXMgSlNPTiB3aXRoIGZldGNoLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVVJMIHRvIFBPU1QgZGF0YSB0b1xuICogQHBhcmFtIHtGb3JtRGF0YX0gZm9ybURhdGEgLSBgRm9ybURhdGFgIGluc3RhbmNlXG4gKiBAcGFyYW0ge0pTT059IGpzb25Gb3JtYXQgLSBqc29uIG9iamVjdCB0byBiZSBwYXNzZWQgYXMgYm9keSBvZiBmZXRjaCBhcGkuXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gUmVzcG9uc2UgYm9keSBmcm9tIFVSTCB0aGF0IHdhcyBQT1NUZWQgdG9cbiAqL1xuY29uc3QgcG9zdERhdGFBc0pzb24gPSBhc3luYyAoeyB1cmwsIGZvcm1EYXRhID0gZmFsc2UsIGpzb25Gb3JtYXQgPSBmYWxzZSB9KSA9PiB7XG4gIGxldCBqc29uRGF0YTtcbiAgaWYgKGZvcm1EYXRhKSB7XG4gICAganNvbkRhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEuZW50cmllcygpKTtcbiAgfSBlbHNlIGlmIChqc29uRm9ybWF0KSBqc29uRGF0YSA9IGpzb25Gb3JtYXQ7XG4gIGNvbnN0IEpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uRGF0YSk7XG4gIGNvbnN0IGZldGNoT3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSnNvblN0cmluZyxcbiAgfTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgZmV0Y2hPcHRpb25zKTtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG4vKipcbiAqIEV2ZW50IGhhbmRsZXIgZm9yIGEgZm9ybSBzdWJtaXQgZXZlbnQuXG4gKiBAcGFyYW0ge1N1Ym1pdEV2ZW50fSBldmVudFxuICovXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gYXN5bmMgKGV2ZW50LCB1cmwpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgc2NvcmVGb3JtID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgdHJ5IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShzY29yZUZvcm0pO1xuICAgIHNjb3JlRm9ybS5yZXNldCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHBvc3REYXRhQXNKc29uKHsgdXJsLCBmb3JtRGF0YSB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufTtcblxuLyoqXG4gKiBFdmVudCBoYW5kbGVyIGZvciBhIGZvcm0gc3VibWl0IGV2ZW50LlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtKU09OfSBqc29uXG4gKi9cbmNvbnN0IGhhbmRsZVBvc3QgPSBhc3luYyAodXJsLCBqc29uKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcG9zdERhdGFBc0pzb24oeyB1cmwsIGZvcm1EYXRhOiBmYWxzZSwganNvbkZvcm1hdDoganNvbiB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgaGFuZGxlRm9ybVN1Ym1pdCwgcG9zdERhdGFBc0pzb24sIGhhbmRsZVBvc3QsXG59OyIsImNvbnN0IGNsYXNzQ3RuID0gJ2FwcC1pdGVtJztcbmNvbnN0IGNsYXNzSW1nID0gJ2FwcC1pbWcnO1xuY29uc3QgY2xhc3NUaXR0bGUgPSAnYXBwLXRpdGxlJztcbmNvbnN0IGNsYXNzTGlrZXMgPSAnYXBwLWxpa2UnO1xuY29uc3QgY2xhc3NMaWtlc1NWRyA9ICdhcHAtbGlrZS1zdmcnO1xuY29uc3QgY2xhc3NMaWtlc1RleHQgPSAnYXBwLWxpa2UtdGV4dCc7XG5jb25zdCBjbGFzc0RpdkJ0biA9ICdhcHAtZGl2LWJ0bic7XG5jb25zdCBjbGFzc0J0biA9ICdhcHAtYnRuJztcblxuY29uc3QgY2xhc3NlcyA9IFtcbiAgY2xhc3NDdG4sIGNsYXNzSW1nLCBjbGFzc1RpdHRsZSwgY2xhc3NMaWtlcyxcbiAgY2xhc3NMaWtlc1NWRywgY2xhc3NMaWtlc1RleHQsIGNsYXNzRGl2QnRuLCBjbGFzc0J0bixcbl07XG5cbmNvbnN0IHhsaW5rID0gJy4uL2Fzc2V0L3Jlc291cmNlL2ljb25zLnN2ZyNoZWFydC1saWtlJztcblxuY29uc3QgYmFzZXVybEZpbHRlck1lYWwgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/JztcbmNvbnN0IGJhc2V1cmxsb29rdXBNZWFsID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwPyc7XG5jb25zdCBwYXJhbWV0ZXJNZWFsSUQgPSAnaSc7XG5jb25zdCBwYXJhbWV0ZXJNZWFsQ2F0ID0gJ2MnO1xuXG5jb25zdCBiYXNldXJsSW52b2x2ZW1lbnQgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcbmNvbnN0IHBhcmFtZXRlckxpa2VBcHAgPSAnbGlrZXMvJztcbmNvbnN0IHBhcmFtZXRlckNvbW1BcHAgPSAnY29tbWVudHMvJztcbmNvbnN0IHBhcmFtZXRlclJlc2VydkFwcCA9ICdyZXNlcnZhdGlvbnMvJztcbmNvbnN0IHBhcmFtZXRlcklEQXBwID0gJ1diZTNJem5RMkxRb0ZQSG1WcndwLyc7XG5cbmV4cG9ydCB7XG4gIGNsYXNzZXMsIGJhc2V1cmxGaWx0ZXJNZWFsLCBiYXNldXJsbG9va3VwTWVhbCwgcGFyYW1ldGVyTWVhbElELCBwYXJhbWV0ZXJNZWFsQ2F0LFxuICB4bGluaywgYmFzZXVybEludm9sdmVtZW50LCBwYXJhbWV0ZXJMaWtlQXBwLCBwYXJhbWV0ZXJDb21tQXBwLCBwYXJhbWV0ZXJSZXNlcnZBcHAsXG4gIHBhcmFtZXRlcklEQXBwLFxufTsiLCJjb25zdCByZWRpcmVjdFdpbmRvdyA9IChocmVmKSA9PiB7XG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbn07XG5cbi8qKlxuICogRnVuY3Rpb24gdG8gYWRkIGNsYXNzIG9yIGNsYXNzZXMgdG8gSFRNTCBFbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtIEhUTUwgRWxlbWVudCB0byBiZSBtb2RpZmllZC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc2VzIFN0cmluZyBvciBBcnJheSBvZiBTdHJpbmcgdG8gYmUgYWRkZWQuXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFJldHVybnMgSFRNTCBlbGVtZW50IHdpdGggY2hvc2VuIGNsYXNzZXMuXG4gKi9cbmNvbnN0IGFkZENsYXNzID0gKGVsZW0sIGNsYXNzZXMpID0+IHtcbiAgaWYgKCh0eXBlb2YgY2xhc3NlcykgPT09ICdzdHJpbmcnKSBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3Nlcyk7XG4gIGVsc2UgaWYgKCh0eXBlb2YgY2xhc3NlcykgPT09ICdvYmplY3QnKSBlbGVtLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gIHJldHVybiBlbGVtO1xufTtcblxuLyoqXG4gKiBGdW5jdGlvbiB0byBjcmVhdGUgSFRNTCBlbGVtZW50IHVzaW5nIHRhZyBuYW1lcy5cbiAqIENsYXNzZXMgYW5kIHRleHQgY29udGVudCBjYW4gYmUgYWRkZWQgYXMgZWxlbWVudCBpcyBjcmVhdGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZWxlbSBUYWcgbmFtZSBvZiB0aGUgZWxlbWVudCB0byBiZSBjcmVhdGVkLiBFeGFtcGxlOiBgZGl2LCBwLCBzZWN0aW9uYFxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzZXMgTmFtZSBvZiBjbGFzcyBvciBjbGFzc2VzIHRvIGFkZC4gU3RyaW5nLCBhcnJheSBvZiBzdHJpbmcgc2hvdWxkIGJlIHVzZWQuXG4gKiBJZiBubyBjbGFzcyBpcyB3YW50ZWQsIGZhbHNlIHNob3VsZCBiZSB1c2UuT3B0aW9uYWwgUGFyYW1lbnRlci5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0Q29udGV4dCBUZXh0IHRvIGJlIGFkZGVkIGFzIHRleHQgY29udGVudCB0byBIVE1MIGVsZW1lbnQuXG4gKiBPcHRpb24gcGFyYW1ldGVyLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaW5uZXJDaGlsZCBIVE1MIEVsZW1lbnQgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gUmV0dXJucyBIVE1MIGVsZW1lbnQgY2hvc2VuIHdpdGggc2V0IGF0dHJpYnV0ZXMuXG4gKi9cbmNvbnN0IGNyZWF0ZUVsZW1lbnREZWZhdWx0ID0gKGVsZW0sIGNsYXNzZXMgPSBmYWxzZSwgdGV4dENvbnRlbnQgPSBmYWxzZSwgaW5uZXJDaGlsZCA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW0pO1xuICBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc2VzKTtcbiAgaWYgKHRleHRDb250ZW50KSBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIGlmIChpbm5lckNoaWxkKSBlbGVtZW50LmFwcGVuZENoaWxkKGlubmVyQ2hpbGQpO1xuICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBIVE1MIHN2ZyBlbGVtZW50IHRvIGJlIHJlbmRlcmVkIGRpbmFtaWNhbGx5XG4gKiBAcGFyYW0ge3N0cmluZ30gaHJlZiBIeXBlcmxpbmsgcmVmZXJlbmNlIGZvciBmaWxlIGxvY2F0aW9uXG4gKiBAcmV0dXJucyB7SFRNTE9yU1ZHRWxlbWVudH0gSFRNTCBzdmcgZWxlbWVudCB0byBiZSBhcHBlbmQgdG8gRE9NIHRvIGJlIHJlbmRlcmVkIGRpbmFtaWNhbGx5XG4gKi9cbmNvbnN0IGNyZWF0ZU5TID0gKGhyZWYpID0+IHtcbiAgY29uc3QgeGxpbmsgPSBocmVmLnNwbGl0KCcjJyk7XG4gIGNvbnN0IHVzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAndXNlJyk7XG4gIHVzZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgJHtocmVmfWApO1xuICB1c2UuY2xhc3NMaXN0LmFkZCh4bGlua1sxXSk7XG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG4gIHN2Zy5hcHBlbmRDaGlsZCh1c2UpO1xuICBzdmcuY2xhc3NMaXN0LmFkZCh4bGlua1sxXSk7XG4gIHJldHVybiBzdmc7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBIVE1MIGxhYmVsIGVsZW1lbnQgd2l0aCBhIGZvciBhdHRyaWJ1dGUsIGRpZmZlcmV0ZSBjbGFzc2VzIGFuZCBpbm5lciBjaGlsZCBhbmQgdHh0XG4gKiBjb250ZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gZm9yQXRyPWZhbHNlIEZvciBhdHRyaWJ1dGUgaW4gbGFiZWwgdGhhdCBpbmRpY2F0ZXMgd2hpY2ggaW5wdXQgb3IgdGV4dCBhcmVhXG4gKiBpdCBpcyBsaW5rZWQgd2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzZXM9ZmFsc2UgU3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZyB3aXRoIGNsYXNzIG5hbWVzXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dENvbnRlbnQ9ZmFsc2UgU3RyaW5nIHRoYXQgcmVwcmVzZW50cyB0aGUgdGV4dCBjb250ZW50IG9mIHRoZSBsYWJlbFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaW5uZXJDaGlsZD1mYWxzZSBIVE1MIGVsZW1lbnQgdG8gYmUgYXBwZW5kIHRvIGxhYmVsXG4gKiBAcmV0dXJucyB7SFRNTExhYmVsRWxlbWVudH0gSFRNTCBsYWJlbCBlbGVtZW50IHJlYWR5IHRvIGJlIGFwcGVuZCB0byB0aGUgZG9tXG4gKi9cbmNvbnN0IGNyZWF0ZUxhYmVsID0gKGZvckF0ciA9IGZhbHNlLCBjbGFzc2VzID0gZmFsc2UsIHRleHRDb250ZW50ID0gZmFsc2UsIGlubmVyQ2hpbGQgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBsYWJlbCA9IGNyZWF0ZUVsZW1lbnREZWZhdWx0KCdsYWJlbCcsIGNsYXNzZXMsIHRleHRDb250ZW50LCBpbm5lckNoaWxkKTtcbiAgaWYgKGZvckF0cikgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBmb3JBdHIpO1xuICByZXR1cm4gbGFiZWw7XG59O1xuXG5jb25zdCBjcmVhdGVUZXh0QXJlYSA9IChsZW5ndGggPSBmYWxzZSwgY2xhc3NlcyA9IGZhbHNlLFxuICB0ZXh0Q29udGVudCA9IGZhbHNlLCBpbm5lckNoaWxkID0gZmFsc2UpID0+IHtcbiAgY29uc3QgdGV4dEFyZWEgPSBjcmVhdGVFbGVtZW50RGVmYXVsdCgndGV4dGFyZWEnLCBjbGFzc2VzLCB0ZXh0Q29udGVudCwgaW5uZXJDaGlsZCk7XG4gIGlmIChsZW5ndGgpIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgbGVuZ3RoKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdzcGVsbGNoZWNrJywgJ3RydWUnKTtcbiAgcmV0dXJuIHRleHRBcmVhO1xufTtcblxuLyoqXG4gKiBGdW5jdGlvbiB0byBjcmVhdGUgSFRNTCBCdXR0b24gZWxlbWVudC4gQ2xhc3NlcyBhbmQgdGV4dCBjb250ZW50XG4gKiBjYW4gYmUgYWRkZWQgYXMgZWxlbWVudCBpcyBjcmVhdGUuIENsaWNrIGV2ZW50IHRvIGEgYW5vdGhlciB3ZWJwYWdlIGNhbiBiZSBhZGRlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBmdW5jIFR5cGUgb2YgYnV0dG9uIGBzdW1iaXQsIHJlc2V0LCBidXR0b25gXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NlcyBOYW1lIG9mIGNsYXNzIG9yIGNsYXNzZXMgdG8gYWRkLiBTdHJpbmcsIGFycmF5IG9mIHN0cmluZyBzaG91bGQgYmUgdXNlZC5cbiAqIElmIG5vIGNsYXNzIGlzIHdhbnRlZCwgZmFsc2Ugc2hvdWxkIGJlIHVzZS5PcHRpb25hbCBQYXJhbWVudGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IGFyaWFMYWJlbCBUZXh0IGZvciBhY2Nlc3NpYmlsaXR5XG4gKiBAcGFyYW0ge2FueX0gdGV4dENvbnRlbnQgVGV4dCB0byBiZSBhZGRlZCBhcyB0ZXh0IGNvbnRlbnQgdG8gSFRNTCBlbGVtZW50LlxuICogT3B0aW9uIHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGlubmVyQ2hpbGQgSFRNTCBFbGVtZW50IHRvIGJlIGFwcGVuZGVkXG4gKiBAcGFyYW0ge2FueX0gaHJlZiBIeXBlcmxpbmsgcmVmZXJlbmNlIHRvIGJlIGZvbGxvd2VkIGlmIGJ1dHRvbiBpcyBjbGlja2VkLlxuICogT3B0aW9uIHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtIVE1MQnV0dG9uRWxlbWVudH0gUmV0dXJucyBIVE1MIGJ1dHRvbiBlbGVtZW50IGNob3NlbiB3aXRoIHNldCBhdHRyaWJ1dGVzLlxuICovXG5jb25zdCBjcmVhdGVCdXR0b24gPSAoZnVuYywgY2xhc3NlcywgYXJpYUxhYmVsLCB0ZXh0Q29udGVudCA9IGZhbHNlLFxuICBpbm5lckNoaWxkID0gZmFsc2UsIGhyZWYgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLnR5cGUgPSBmdW5jO1xuICBidXR0b24uYXJpYUxhYmVsID0gYXJpYUxhYmVsO1xuICBhZGRDbGFzcyhidXR0b24sIGNsYXNzZXMpO1xuICBpZiAodGV4dENvbnRlbnQpIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICBpZiAoaHJlZikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlZGlyZWN0V2luZG93KGhyZWYpKTtcbiAgfVxuICBpZiAoaW5uZXJDaGlsZCkgYnV0dG9uLmFwcGVuZENoaWxkKGlubmVyQ2hpbGQpO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3QgY3JlYXRlSW1nID0gKGNsYXNzZXMsIG5hbWUsIHVybCkgPT4ge1xuICBjb25zdCBpbWdFbGVtID0gY3JlYXRlRWxlbWVudERlZmF1bHQoJ2ltZycsIGNsYXNzZXMpO1xuICBpbWdFbGVtLnNldEF0dHJpYnV0ZSgnc3JjJywgdXJsKTtcbiAgaW1nRWxlbS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIG5hbWUpO1xuICByZXR1cm4gaW1nRWxlbTtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUxhYmVsLCBjcmVhdGVJbWcsXG4gIGNyZWF0ZU5TLCBjcmVhdGVUZXh0QXJlYSxcbiAgYWRkQ2xhc3MsIGNyZWF0ZUVsZW1lbnREZWZhdWx0LFxuICBjcmVhdGVCdXR0b24sXG59O1xuIiwiY29uc3QgY3JlYXRlQXBpTWVhbFVSTCA9IChiYXNldXJsLCBxdWVyeUtleSwgcXVlcnlWYWx1ZSkgPT4ge1xuICBjb25zdCB1cmwgPSBgJHtiYXNldXJsfSR7cXVlcnlLZXl9PSR7cXVlcnlWYWx1ZX1gO1xuICByZXR1cm4gdXJsO1xufTtcblxuY29uc3QgY3JlYXRlQXBpSW52VVJMID0gKGJhc2V1cmwsIGlkID0gZmFsc2UsIGVuZHBvaW50ID0gZmFsc2UpID0+IHtcbiAgY29uc3QgdXJsID0gYCR7YmFzZXVybH0ke2lkfSR7ZW5kcG9pbnR9YDtcbiAgcmV0dXJuIHVybDtcbn07XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUFwaU1lYWxVUkwsIGNyZWF0ZUFwaUludlVSTCxcbn07IiwiaW1wb3J0IHtcbiAgY3JlYXRlQXBpTWVhbFVSTCwgY3JlYXRlQXBpSW52VVJMLFxufSBmcm9tICcuL2NyZWF0ZVVSTEFQSS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSAnLi9MaXN0SXRlbU1vZC5qcyc7XG5pbXBvcnQgeyBoYW5kbGVQb3N0IH0gZnJvbSAnLi9Qb3N0QVBJLmpzJztcbmltcG9ydCB7IGhhbmRsZUdFVEFQSSB9IGZyb20gJy4vR2V0QVBJLmpzJztcbmltcG9ydCB7XG4gIGNsYXNzZXMsIGJhc2V1cmxGaWx0ZXJNZWFsLCBiYXNldXJsbG9va3VwTWVhbCwgcGFyYW1ldGVyTWVhbElELCBwYXJhbWV0ZXJNZWFsQ2F0LFxuICB4bGluaywgYmFzZXVybEludm9sdmVtZW50LCBwYXJhbWV0ZXJMaWtlQXBwLFxuICBwYXJhbWV0ZXJJREFwcCxcbn0gZnJvbSAnLi9jb25zdC5qcyc7XG5cbmNvbnN0IGFwcGVuZFJlc3BvbnNlUGFyYSA9IGFzeW5jIChub2RlKSA9PiB7XG4gIGNvbnN0IHNob3dSZXNwb25zZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybUZlZWRiYWNrJyk7XG4gIHNob3dSZXNwb25zZUZvcm0udGV4dENvbnRlbnQgPSBub2RlO1xufTtcblxuY29uc3QgbGlrZXNKc29uID0gYXN5bmMgKGlkKSA9PiAoXG4gIHtcbiAgICBpdGVtX2lkOiBpZCxcbiAgfVxuKTtcblxuY29uc3QgZmluZExpa2VzID0gYXN5bmMgKGlkLCBpbnZBcnIpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gaW52QXJyLmZpbHRlcigoaW52QXJyKSA9PiBpbnZBcnIuaXRlbV9pZCA9PT0gaWQpO1xuICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHJldHVybiByZXN1bHRbMF0ubGlrZXM7XG4gIHJldHVybiAwO1xufTtcblxuY29uc3QgY3JlYXRlTGlrZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGVhcnQtbGlrZScpKSB7XG4gICAgY29uc3QgY3VycmVudElEID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgIGNvbnN0IHVybCA9IGNyZWF0ZUFwaUludlVSTChiYXNldXJsSW52b2x2ZW1lbnQsIHBhcmFtZXRlcklEQXBwLCBwYXJhbWV0ZXJMaWtlQXBwKTtcbiAgICBhd2FpdCBoYW5kbGVQb3N0KHVybCwgYXdhaXQgbGlrZXNKc29uKGN1cnJlbnRJRCkpO1xuICAgIGNvbnN0IGRhdGFSZXNwb25zZUludiA9IGF3YWl0IGhhbmRsZUdFVEFQSSh1cmwpO1xuICAgIGNvbnN0IHF0eUxpa2VzID0gYXdhaXQgZmluZExpa2VzKGN1cnJlbnRJRCwgZGF0YVJlc3BvbnNlSW52KTtcbiAgICBjb25zdCBsaWtlVGV4dCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmFwcC1saWtlLXRleHQnKTtcbiAgICBsaWtlVGV4dC50ZXh0Q29udGVudCA9IGAke3F0eUxpa2VzfSBsaWtlJHtxdHlMaWtlcyA+IDEgPyAncycgOiAnJ31gO1xuICAgIGNvbnN0IHVzZVZTRyA9IGV2ZW50LnRhcmdldC5xdWVyeVNlbGVjdG9yKCd1c2UnKTtcbiAgICB1c2VWU0cuc2V0QXR0cmlidXRlKCdocmVmJywgJy4uL2Fzc2V0L3Jlc291cmNlL2ljb25zLnN2ZyNoZWFydC1saWtlLXJlZCcpO1xuICB9XG59O1xuXG5jb25zdCBnZXRNZWFsc0FQSVJlc3BvbnNlID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgY29uc3QgbWVhbElEVVJMID0gY3JlYXRlQXBpTWVhbFVSTChiYXNldXJsbG9va3VwTWVhbCwgcGFyYW1ldGVyTWVhbElELCBkYXRhLmlkTWVhbCk7XG4gIGNvbnN0IGRhdGFSZXNwb25zZSA9IGF3YWl0IGhhbmRsZUdFVEFQSShtZWFsSURVUkwpO1xuICByZXR1cm4gZGF0YVJlc3BvbnNlLm1lYWxzO1xufTtcblxuY29uc3QgYXBwZW5kSXRlbXMgPSBhc3luYyAoZGF0YUFyciwgaW52QXJyKSA9PiB7XG4gIGNvbnN0IGFwcEN0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAtY3RuJyk7XG4gIGFwcEN0bi5pbm5lckhUTUwgPSAnJztcbiAgZGF0YUFyci5mb3JFYWNoKGFzeW5jIChkYXRhKSA9PiB7XG4gICAgY29uc3QgbWVhbERhdGEgPSBhd2FpdCBnZXRNZWFsc0FQSVJlc3BvbnNlKGRhdGEpO1xuICAgIGNvbnN0IG1lYWxGcmFnID0gYXdhaXQgY3JlYXRlSXRlbSgnbGknLCBjbGFzc2VzLCBtZWFsRGF0YSwgeGxpbmssIGF3YWl0IGZpbmRMaWtlcyhtZWFsRGF0YVswXS5pZE1lYWwsIGludkFyciksIGNyZWF0ZUxpa2UpO1xuICAgIGFwcEN0bi5hcHBlbmRDaGlsZChtZWFsRnJhZyk7XG4gIH0pO1xufTtcblxuY29uc3QgcHJpbnRMaXN0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IG1lYWxDYXRVUkwgPSBjcmVhdGVBcGlNZWFsVVJMKGJhc2V1cmxGaWx0ZXJNZWFsLCBwYXJhbWV0ZXJNZWFsQ2F0LCBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuICBjb25zdCBpbnZMaWtlc1VSTCA9IGNyZWF0ZUFwaUludlVSTChiYXNldXJsSW52b2x2ZW1lbnQsIHBhcmFtZXRlcklEQXBwLCBwYXJhbWV0ZXJMaWtlQXBwKTtcbiAgY29uc3QgZGF0YVJlc3BvbnNlTWVhbCA9IGF3YWl0IGhhbmRsZUdFVEFQSShtZWFsQ2F0VVJMKTtcbiAgY29uc3QgZGF0YVJlc3BvbnNlSW52ID0gYXdhaXQgaGFuZGxlR0VUQVBJKGludkxpa2VzVVJMKTtcbiAgaWYgKGRhdGFSZXNwb25zZU1lYWwgaW5zdGFuY2VvZiBFcnJvciB8fCBkYXRhUmVzcG9uc2VJbnYgaW5zdGFuY2VvZiBFcnJvcikgYXBwZW5kUmVzcG9uc2VQYXJhKCdVbmFibGUgdG8gRmV0Y2ggRGF0YScpO1xuICBlbHNlIGF3YWl0IGFwcGVuZEl0ZW1zKGRhdGFSZXNwb25zZU1lYWwubWVhbHMsIGRhdGFSZXNwb25zZUludik7XG59O1xuXG5leHBvcnQge1xuICBwcmludExpc3QsIGJhc2V1cmxGaWx0ZXJNZWFsLFxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=