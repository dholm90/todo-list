/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --white: #eae8ff;\\n    --gray: #d8d5db;\\n    --silver: #ADACB5;\\n    --darkblue: #2D3142;\\n    --babyblue: #B0D7FF;\\n    --green: lightgreen;\\n    --darkgreen: rgb(77, 189, 77);\\n    --red: #ff6868;\\n    --darkred: #c34c4c;\\n}\\n\\nhtml,\\nbody,\\nh1,\\nh2,\\nh3,\\nh4,\\np,\\nul,\\nli,\\nbutton,\\np {\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nli {\\n    list-style: none;\\n}\\n\\nbody {\\n    background-color: var(--darkblue);\\n}\\n\\n#content {\\n    height: 100vh;\\n    display: grid;\\n    grid-template-columns: auto 1fr;\\n    grid-template-rows: auto 1fr auto;\\n    grid-template-areas:\\n        \\\"header header\\\"\\n        \\\"aside main\\\"\\n        \\\"footer footer\\\";\\n}\\n\\nheader {\\n    grid-area: header;\\n    padding: 1rem;\\n    color: var(--white);\\n    font-weight: 900;\\n    font-size: 1.5rem;\\n}\\n\\naside {\\n    grid-area: aside;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1rem;\\n    background-color: var(--silver);\\n    padding: 2rem 4rem 2rem 2rem;\\n    color: var(--darkblue);\\n    min-width: 286px;\\n}\\n\\naside h2 {\\n    color: var(--darkblue);\\n    font-size: 2rem;\\n    font-weight: 700;\\n}\\n\\naside ul {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 0.5rem;\\n    color: var(--darkblue)\\n}\\n\\n.project {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 0.5rem;\\n    font-size: 1.5rem;\\n    cursor: pointer;\\n    background-color: var(--white);\\n}\\n\\n.project:hover {\\n    background-color: var(--gray);\\n}\\n\\n.project div {\\n    display: flex;\\n    align-items: center;\\n}\\n\\n.project svg {\\n    background-color: var(--red);\\n    border-radius: 2rem;\\n}\\n\\n.project svg:hover {\\n    color: var(--darkred);\\n}\\n\\n.selected {\\n    background-color: var(--darkblue);\\n    color: var(--white);\\n\\n}\\n\\n.project-form {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1rem;\\n}\\n\\n.addProject {\\n    border: none;\\n    background-color: var(--babyblue);\\n    border: 1px solid var(--darkblue);\\n    color: var(--darkblue);\\n    padding: 0.5rem 1rem;\\n    font-size: 1rem;\\n    font-weight: 700;\\n    cursor: pointer;\\n}\\n\\n.addProject:hover {\\n    background-color: var(--darkblue);\\n    color: var(--white);\\n}\\n\\nmain {\\n\\n    grid-area: main;\\n    background-color: var(--gray);\\n    padding: 2rem 4rem 2rem 2rem;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1rem;\\n    overflow-y: auto;\\n    background-color: var(--white);\\n}\\n\\n.topBar {\\n    display: flex;\\n    justify-content: space-between;\\n}\\n\\nmain h2 {\\n    font-size: 2rem;\\n    font-weight: 700;\\n    color: var(--darkblue);\\n}\\n\\n.newItem {\\n    border: 1px solid var(--darkblue);\\n    background-color: var(--babyblue);\\n    color: var(--darkblue);\\n    padding: 0.5rem 1rem;\\n    font-size: 1rem;\\n    font-weight: 700;\\n    cursor: pointer;\\n}\\n\\n.newItem:hover {\\n    background-color: var(--darkblue);\\n    color: var(--white);\\n}\\n\\narticle {\\n    background-color: white;\\n    /* border: 1px solid var(--darkblue); */\\n\\n    padding: 1rem;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    position: relative;\\n}\\n\\n.delete-container {\\n    position: absolute;\\n    top: 0.2rem;\\n    right: 0.2rem;\\n}\\n\\n.delete {\\n\\n    color: var(--red);\\n    display: flex;\\n    justify-content: center;\\n    font-weight: 900;\\n    cursor: pointer;\\n\\n}\\n\\n.delete:hover {\\n    color: var(--darkred);\\n}\\n\\n.selected:hover {\\n    background-color: var(--darkblue);\\n\\n}\\n\\narticle .left {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1rem;\\n}\\n\\n.list-grid {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1rem;\\n}\\n\\n.inputForm {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1rem;\\n}\\n\\n.hide {\\n    display: none;\\n}\\n\\n.top {\\n    display: flex;\\n    justify-content: space-between;\\n}\\n\\n#inputTitle,\\n#newProjectName {\\n    padding: 0.5rem;\\n    border: 1px solid var(--darkblue);\\n    font-size: 1.25rem;\\n    font-weight: 700;\\n    color: var(--darkblue);\\n}\\n\\n#inputDesc {\\n    padding: 0.5rem;\\n    color: var(--darkblue);\\n    border: 1px solid var(--darkblue);\\n    font-weight: 600;\\n}\\n\\n.bottom,\\n.projectButtons {\\n    display: flex;\\n    flex-direction: row;\\n    gap: 1rem;\\n}\\n\\n.bottom button,\\n.add,\\n.cancel,\\n.addList,\\n.cancelList {\\n    width: 50%;\\n    border: 1px solid var(--darkblue);\\n    /* background-color: var(--babyblue); */\\n    color: var(--darkblue);\\n    padding: 0.5rem 1rem;\\n    font-size: 1rem;\\n    font-weight: 700;\\n    cursor: pointer;\\n\\n}\\n\\n.add,\\n.addList {\\n    background-color: var(--green);\\n    color: var(--darkblue);\\n}\\n\\n.add:hover,\\n.addList:hover {\\n    background-color: var(--darkblue);\\n    color: var(--white);\\n}\\n\\n.cancel,\\n.cancelList {\\n    background-color: var(--red);\\n}\\n\\n.cancel:hover,\\n.cancelList:hover {\\n    background-color: var(--darkblue);\\n    color: var(--white);\\n}\\n\\nfooter {\\n    grid-area: footer;\\n    display: flex;\\n    padding: 0.5rem;\\n    justify-content: center;\\n    color: var(--silver);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_interface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/interface.js */ \"./src/modules/interface.js\");\n\n\n\n_modules_interface_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadPage();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/interface.js":
/*!**********************************!*\
  !*** ./src/modules/interface.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Interface)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/modules/projects.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos */ \"./src/modules/todos.js\");\n\n\n\n\n\n\n\nclass Interface {\n\n    static loadProjects() {\n        _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodoList()\n            .getProjects()\n            .forEach((project) => {\n                this.createProject(project.name);\n            })\n        // Interface.createProject(project.name);\n    }\n\n    static loadTasks(projectName) {\n        _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodoList()\n            .getProject(projectName)\n            .getTasks()\n            .forEach((task) => Interface.createTask(task.name, task.desc, task.dueDate));\n\n        Interface.initAddTaskButton();\n\n    }\n\n    static createProject(name) {\n        const ul = document.querySelector('#project-list');\n        ul.innerHTML += `<button type='button' class=\"project\">\n            <li>${name}</li>\n            <svg class=\"delete-project\" style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n                \n            </svg>\n        </button>`\n        Interface.initProjectButtons();\n    }\n\n    static createTask(name, desc, dueDate) {\n        const listGrid = document.querySelector('.list-grid');\n        listGrid.innerHTML += `<article>\n        <div class=\"left\">\n            <h3 class=\"title\">${name}</h3>\n            <p class=\"desc\">${desc}</p>\n        </div>\n        <div class=\"right\">\n            <p class=\"date\">${dueDate}</p>\n        </div>\n        <svg class=\"delete\" style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z\" />\n        </svg>\n    </article>`\n        Interface.initTaskButtons();\n\n\n    }\n\n    static clear() {\n        this.clearProjects();\n        this.clearTasks();\n    }\n\n    static clearProjects() {\n        const projectsList = document.getElementById('project-list');\n        projectsList.textContent = '';\n    }\n\n    static clearTasks() {\n        const tasksList = document.querySelector('.list-grid');\n        tasksList.textContent = ''\n    }\n\n    static clearProjectContent() {\n        const projectContent = document.querySelector('main');\n        projectContent.textContent = '';\n    }\n\n    static loadProjectContent(projectName) {\n        const main = document.querySelector('main');\n        main.innerHTML = `<h2 class=\"projectHeader\">${projectName}</h2>`;\n        main.innerHTML += `<section class=\"list-grid\"></section>`\n        main.innerHTML += `<section class=\"inputForm\">\n        <div class=\"top\">\n            <input type=\"text\" name=\"inputTitle\" id=\"inputTitle\" placeholder=\"Title\">\n            <input type=\"date\" name=\"inputDate\" id=\"inputDate\" >\n        </div>\n        \n        <textarea name=\"inputDesc\" id=\"inputDesc\" rows=\"10\" placeholder=\"Description\"></textarea>\n        <div class=\"bottom\">\n            <button class=\"addList\" id=\"addList\">Add</button>\n            <button class=\"cancelList\" id=\"cancelList\">Cancel</button>\n        </div>\n    </section>`\n\n        Interface.loadTasks(projectName);\n\n\n\n    }\n\n    static addProject() {\n        const projectInput = document.querySelector('#newProjectName');\n        const projectName = projectInput.value;\n\n        if (projectName === '') {\n            alert('Field must not be empty.')\n            return\n        }\n\n        if (_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodoList().contains(projectName)) {\n            projectInput.value = '';\n            alert('Project name already in use.');\n            return\n        }\n\n        _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addProject(new _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectName));\n        Interface.createProject(projectName);\n        projectInput.value = '';\n\n    }\n\n\n    static initProjectButtons() {\n        const projectButtons = document.querySelectorAll('.project');\n\n        projectButtons.forEach((projectButton) => {\n            projectButton.addEventListener('click', this.handleProjectButton);\n        })\n    }\n\n\n    static openProject(projectName, projectButton) {\n        const projectButtons = document.querySelectorAll('.project');\n        projectButtons.forEach((button) => button.classList.remove('selected'))\n        projectButton.classList.add('selected');\n        this.loadProjectContent(projectName);\n\n    }\n\n    static deleteProject(projectName, button) {\n        if (button.classList.contains('selected')) {\n            Interface.clearProjectContent();\n        }\n        _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteProject(projectName);\n        Interface.clearProjects();\n        Interface.loadProjects();\n    }\n\n    static handleProjectButton(e) {\n        const projectName = this.children[0].textContent;\n\n        if (e.target.classList.contains('delete-project')) {\n            Interface.deleteProject(projectName, this)\n            return;\n        }\n\n        Interface.openProject(projectName, this);\n        // console.log(projectName);\n    }\n\n    static initAddTaskButton() {\n        const addListButton = document.getElementById('addList');\n        const newItem = document.querySelector('.newItem');\n        addListButton.addEventListener('click', Interface.addTask);\n    }\n\n    static initTaskButtons() {\n\n        const taskButtons = document.querySelectorAll('.delete');\n\n        taskButtons.forEach((taskButton) =>\n            taskButton.addEventListener('click', Interface.handleTaskButton)\n        )\n\n    }\n\n    static handleTaskButton() {\n        Interface.deleteTask(this)\n\n    }\n\n    static deleteTask(taskButton) {\n        const projectName = document.querySelector('.projectHeader').textContent;\n        const taskName = taskButton.parentNode.children[0].children[0].textContent;\n\n        _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteTask(projectName, taskName);\n        Interface.clearTasks();\n        Interface.loadTasks(projectName);\n    }\n\n    static addTask() {\n        const projectName = document.querySelector('.projectHeader').textContent;\n        const taskName = document.getElementById('inputTitle');\n        const taskDesc = document.getElementById('inputDesc');\n        const taskDate = document.getElementById('inputDate');\n\n\n\n        if (taskName.value === '' || taskDesc.value === '' || taskDate.value === '') {\n            alert('Fields cannot be empty')\n            return\n        }\n\n        if (_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodoList().getProject(projectName).contains(taskName.value)) {\n            alert('Task names must be different');\n            Interface.resetInput();\n            return\n        }\n\n        _storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTask(projectName, new _task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](taskName.value, taskDesc.value, taskDate.value));\n        Interface.createTask(taskName.value, taskDesc.value, taskDate.value);\n        Interface.resetInput()\n\n    }\n\n    static resetInput() {\n        const taskName = document.getElementById('inputTitle');\n        const taskDesc = document.getElementById('inputDesc');\n        const taskDate = document.getElementById('inputDate');\n\n        taskName.value = '';\n        taskDesc.value = '';\n        taskDate.value = '';\n    }\n\n\n\n\n\n    // Helper Functions\n    static toggleForm(element, button, cancelButton, bool) {\n        button.addEventListener('click', () => {\n            element.classList.remove('hide');\n            button.classList.add('hide');\n\n\n        })\n        cancelButton.addEventListener('click', () => {\n            element.classList.add('hide');\n            button.classList.remove('hide');\n\n\n        })\n\n    }\n    static setAttributes(element, attributes) {\n        Object.keys(attributes).forEach(attr => {\n            element.setAttribute(attr, attributes[attr]);\n        });\n    }\n\n    // Create Content wrapper\n    static createContentWrapper() {\n        const body = document.querySelector('body');\n        const content = document.createElement('div');\n        content.setAttribute('id', 'content');\n        return body.appendChild(content);\n\n    }\n    static createHeader() {\n        const content = document.querySelector('#content');\n        const header = document.createElement('header');\n\n        // Page Title\n        const h1 = document.createElement('h1');\n        h1.innerText = \"Todo List App\";\n        header.appendChild(h1);\n        return content.appendChild(header);\n    }\n    static createSidebar() {\n        const content = document.querySelector('#content');\n        const aside = document.createElement('aside');\n\n        // Sidebar Title\n        const h2 = document.createElement('h2');\n        h2.innerText = 'Projects';\n        aside.appendChild(h2);\n\n        // Project List\n        const ul = document.createElement('ul');\n        ul.setAttribute('id', 'project-list');\n        aside.appendChild(ul);\n\n        // New Project Form\n        const projectForm = document.createElement('div');\n        const projectName = document.createElement('input');\n        const projectButtons = document.createElement('div');\n        const addButton = document.createElement('button');\n        const cancelButton = document.createElement('button');\n\n        projectForm.classList.add('project-form');\n        projectForm.classList.add('hide');\n\n        projectName.setAttribute('type', 'text');\n        projectName.setAttribute('name', 'newProjectName');\n        projectName.setAttribute('id', 'newProjectName');\n\n        projectButtons.classList.add('projectButtons');\n        addButton.addEventListener('click', Interface.addProject);\n\n        addButton.classList.add('add');\n        addButton.innerText = 'Add';\n\n\n        cancelButton.classList.add('cancel');\n        cancelButton.innerText = 'Cancel';\n\n        aside.appendChild(projectForm);\n\n        projectForm.appendChild(projectName);\n        projectForm.appendChild(projectButtons);\n        projectButtons.appendChild(addButton);\n        projectButtons.appendChild(cancelButton);\n\n        // Form Toggle\n        const addProject = document.createElement('button');\n        addProject.classList.add('addProject');\n        addProject.innerText = '+ New Project';\n\n        aside.appendChild(addProject);\n        this.toggleForm(projectForm, addProject, cancelButton, false);\n\n\n        return content.appendChild(aside);\n    }\n    static createMain() {\n        const content = document.querySelector('#content');\n        const main = document.createElement('main');\n\n\n        return content.appendChild(main);\n    }\n    static createFooter() {\n        const content = document.querySelector('#content');\n        const footer = document.createElement('footer');\n        const h4 = document.createElement('h4');\n        h4.innerText = 'Copyright Devan Holm';\n        footer.appendChild(h4);\n\n        return content.appendChild(footer);\n\n    }\n    static loadPage() {\n        this.createContentWrapper();\n        this.createHeader();\n        this.createSidebar();\n        this.createMain();\n        this.createFooter();\n        this.loadProjects();\n        this.initProjectButtons();\n        this.initTaskButtons();\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/interface.js?");

/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\n\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.tasks = [];\n\n    }\n    setName(name) {\n        this.name = name;\n    }\n    getName() {\n        return this.name;\n    }\n    setTasks(tasks) {\n        this.tasks = tasks;\n    }\n    getTasks() {\n        return this.tasks;\n    }\n    getTask(taskName) {\n        return this.tasks.find((task) => task.getName() === taskName);\n    }\n    contains(taskName) {\n        return this.tasks.some((task) => task.getName() === taskName);\n    }\n    addTask(newTask) {\n        if (this.tasks.find((task) => task.getName() === newTask)) return\n        this.tasks.push(newTask);\n    }\n    deleteTask(taskName) {\n        this.tasks = this.tasks.filter((task) => task.name !== taskName);\n    }\n\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/projects.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/modules/projects.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos.js */ \"./src/modules/todos.js\");\n\n\n\n\nclass Storage {\n    static saveTodoList(data) {\n        localStorage.setItem('todoList', JSON.stringify(data));\n    }\n\n    static getTodoList() {\n        const todoList = Object.assign(\n            new _todos_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](),\n            JSON.parse(localStorage.getItem('todoList'))\n        )\n\n        todoList.setProjects(\n            todoList\n                .getProjects()\n                .map((project) => Object.assign(new _projects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), project))\n        )\n\n        todoList\n            .getProjects()\n            .forEach((project) =>\n                project.setTasks(\n                    project.getTasks().map((task) => Object.assign(new _task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), task))\n                )\n            )\n        return todoList;\n    }\n\n    static addProject(project) {\n        const todoList = Storage.getTodoList();\n        todoList.addProject(project);\n        Storage.saveTodoList(todoList);\n    }\n\n    static deleteProject(projectName) {\n        const todoList = Storage.getTodoList();\n        todoList.deleteProject(projectName);\n        Storage.saveTodoList(todoList);\n    }\n\n    static addTask(projectName, task) {\n        const todoList = Storage.getTodoList();\n        todoList.getProject(projectName).addTask(task);\n        Storage.saveTodoList(todoList);\n    }\n\n    static deleteTask(projectName, taskName) {\n        const todoList = Storage.getTodoList();\n        todoList.getProject(projectName).deleteTask(taskName);\n        Storage.saveTodoList(todoList);\n    }\n\n    static renameTask(projectName, taskName, newTaskName) {\n        const todoList = Storage.getTodoList();\n        todoList.getProject(projectName).getTask(taskName).setName(newTaskName);\n        Storage.saveTodoList(todoList);\n    }\n\n    static setTaskDate(projectName, taskName, newDueDate) {\n        const todoList = Storage.getTodoList();\n        todoList.getProject(projectName).getTask(taskName).setDate(newDueDate)\n        Storage.saveTodoList(todoList);\n    }\n\n    static setTaskDescription(projectName, taskName, newDescription) {\n        const todoList = Storage.getTodoList();\n        todoList.getProject(projectName).getTask(taskName).setDesc(newDescription);\n        Storage.saveTodoList(todoList);\n    }\n\n    static setTaskPriority(projectName, taskName, newPriority) {\n        const todoList = Storage.getTodoList();\n        todoList.getProject(projectName).getTask(taskName).setPriority(newPriority);\n        Storage.saveTodoList(todoList);\n    }\n\n\n\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(name, desc = 'No Description', dueDate = 'No Date') {\n        this.name = name;\n        this.desc = desc;\n        this.dueDate = dueDate;\n\n    }\n    setName(name) {\n        this.name = name;\n    }\n    getName() {\n        return this.name;\n    }\n    setDesc(desc) {\n        this.desc = desc;\n    }\n    getDesc() {\n        return this.desc;\n    }\n    setDate(dueDate) {\n        this.dueDate = dueDate;\n    }\n    getDate() {\n        return this.dueDate;\n    }\n\n\n    getDateFormatted() {\n        const day = this.dueDate.split('/')[0]\n        const month = this.dueDate.split('/')[1]\n        const year = this.dueDate.split('/')[2]\n        return `${month}/${day}/${year}`\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ \"./src/modules/projects.js\");\n\n// import Task from \"./task.js\";\n\nclass TodoList {\n    constructor() {\n        this.projects = []\n        this.projects.push(new _projects_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Default List'));\n\n    }\n\n    setProjects(projects) {\n        this.projects = projects;\n\n    }\n\n    getProjects() {\n        return this.projects;\n\n    }\n\n    getProject(projectName) {\n        return this.projects.find((project) => project.getName() === projectName);\n    }\n\n    contains(projectName) {\n        return this.projects.some((project) => project.getName() === projectName);\n    }\n\n    addProject(newProject) {\n        if (this.projects.find((project) => project.name === newProject.name))\n            return\n        this.projects.push(newProject);\n    }\n\n    deleteProject(projectName) {\n        const projectToDelete = this.projects.find((project) => project.getName() === projectName);\n        this.projects.splice(this.projects.indexOf(projectToDelete), 1);\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/todos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;