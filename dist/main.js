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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*:before,\\r\\n*:after {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  min-height: 100vh;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\nsection {\\r\\n  max-width: 62.5rem;\\r\\n  margin: 0 auto;\\r\\n  padding: 1.5rem 1rem;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  display: block;\\r\\n  max-width: 100%;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  cursor: pointer;\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  font-size: clamp(2rem, 2.5vw, 4rem);\\r\\n  margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\n.tabs {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 2rem;\\r\\n  padding: 1rem;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),\\r\\n    0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n}\\r\\n\\r\\n.tabs>* {\\r\\n  border: none;\\r\\n  font-size: clamp(1rem, 3vw, 1.5rem);\\r\\n}\\r\\n\\r\\n.menu-grid {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.menu-card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),\\r\\n    0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n  border-radius: 1rem;\\r\\n}\\r\\n\\r\\n.menu-card-description {\\r\\n  padding-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.menu-card-title,\\r\\n.contact-card-name {\\r\\n  font-size: clamp(1.2rem, 3vw, 1.5rem);\\r\\n}\\r\\n\\r\\n.menu-card-price,\\r\\n.contact-card-number,\\r\\n.contact-card-email {\\r\\n  font-size: clamp(1rem, 3vw, 1.2rem);\\r\\n}\\r\\n\\r\\n.menu-card-price,\\r\\n.contact-card-description {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.contact-grid {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 3rem;\\r\\n}\\r\\n\\r\\n.contact-card-img {\\r\\n  aspect-ratio: 1 / 1;\\r\\n  object-fit: cover;\\r\\n  border-radius: 1rem;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_chef_mao_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/chef-mao.webp */ \"./src/img/chef-mao.webp\");\n/* harmony import */ var _img_xiangling_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/xiangling.webp */ \"./src/img/xiangling.webp\");\n/* harmony import */ var _img_guoba_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/guoba.webp */ \"./src/img/guoba.webp\");\n/* harmony import */ var _ContactItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContactItem */ \"./src/components/ContactItem.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction Contact() {\r\n    /*\r\n    <section class=\"contact\">\r\n      <h1 class=\"header\">Contact Us</h1>\r\n      <div class=\"contact-grid\">\r\n        <ContactItem />\r\n      </div>\r\n    </section>\r\n    */\r\n    // create HTML element\r\n    const contact = document.createElement(\"section\")\r\n    const header = document.createElement(\"h1\")\r\n    const grid = document.createElement(\"div\")\r\n\r\n    // add text\r\n    header.textContent = \"Contact Us\"\r\n\r\n    // add class\r\n    contact.className = \"contact\"\r\n    header.className = \"header\"\r\n    grid.className = \"contact-grid\"\r\n\r\n    // append/prepend\r\n    grid.append(\r\n        (0,_ContactItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_img_chef_mao_webp__WEBPACK_IMPORTED_MODULE_0__, \"Chef Mao\", \"(123)-456-7890\", \"chefmao@genshinimpact.com\"),\r\n        (0,_ContactItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_img_xiangling_webp__WEBPACK_IMPORTED_MODULE_1__, \"Xiangling\", \"(890)-567-1234\", \"xiangling@genshinimpact.com\"),\r\n        (0,_ContactItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_img_guoba_webp__WEBPACK_IMPORTED_MODULE_2__, \"Guoba\", \"(747)-698-0450\", \"guoba@genshinimpact.com\")\r\n    )\r\n    contact.append(\r\n        header,\r\n        grid\r\n    )\r\n\r\n    return contact\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n\n//# sourceURL=webpack://restaurant/./src/components/Contact.js?");

/***/ }),

/***/ "./src/components/ContactItem.js":
/*!***************************************!*\
  !*** ./src/components/ContactItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ContactItem(img, name, phoneNumber, email) {\r\n    /*\r\n    <article class=\"contact-card\">\r\n        <img src=\"../src/img/chef-mao.webp\" alt=\"Chef Mao\" class=\"contact-card-img\">\r\n        <div class=\"contact-card-description\">\r\n            <p class=\"contact-card-name\">Chef Mao</p>\r\n            <p class=\"contact-card-number\">(123)-456-7890</p>\r\n            <p class=\"contact-card-email\">chefmao@genshinimpact.com</p>\r\n        </div>\r\n    </article>\r\n    <article class=\"contact-card\">\r\n        <img src=\"../src/img/xiangling.jpg\" alt=\"\" class=\"contact-card-img\">\r\n        <div class=\"contact-card-description\">\r\n            <p class=\"contact-card-name\">Xiangling</p>\r\n            <p class=\"contact-card-number\">(890)-567-1234</p>\r\n            <p class=\"contact-card-email\">xiangling@genshinimpact.com</p>\r\n        </div>\r\n    </article>\r\n    */\r\n    // create HTML element\r\n    const contactCard = document.createElement(\"article\")\r\n    const contactImage = document.createElement(\"img\")\r\n    const contactDescription = document.createElement(\"div\")\r\n    const contactName = document.createElement(\"p\")\r\n    const contactNumber = document.createElement(\"p\")\r\n    const contactEmail = document.createElement(\"p\")\r\n\r\n    // add text/attributes\r\n    contactImage.src = img\r\n    contactImage.alt = name\r\n    contactName.textContent = name\r\n    contactNumber.textContent = phoneNumber\r\n    contactEmail.textContent = email\r\n\r\n    // add class\r\n    contactCard.className = \"contact-card\"\r\n    contactImage.className = \"contact-card-img\"\r\n    contactDescription.className = \"contact-card-description\"\r\n    contactName.className = \"contact-card-name\"\r\n    contactNumber.className = \"contact-card-number\"\r\n    contactEmail.className = \"contact-card-email\"\r\n\r\n    // append/prepend\r\n    contactDescription.append(contactName, contactNumber, contactEmail)\r\n    contactCard.append(contactImage, contactDescription)\r\n\r\n    return contactCard\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactItem);\n\n//# sourceURL=webpack://restaurant/./src/components/ContactItem.js?");

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Footer() {\r\n    /*\r\n    <footer>\r\n        <p>Copyright &copy; 2022 Brian Wang @bwangsta</p>\r\n    </footer>\r\n    */\r\n    const footer = document.createElement(\"footer\")\r\n    const copyright = document.createElement(\"p\")\r\n\r\n    copyright.textContent = \"Copyright © 2022 Brian Wang @bwangsta\"\r\n\r\n    footer.append(copyright)\r\n\r\n    return footer\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://restaurant/./src/components/Footer.js?");

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_wanmin_restaurant_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/wanmin-restaurant.webp */ \"./src/img/wanmin-restaurant.webp\");\n\r\n\r\nfunction Home() {\r\n    /*\r\n    <section class=\"home\">\r\n      <h1>Wanmin Restaurant</h1>\r\n      <img src=\"../src/img/wanmin-restaurant.webp\" alt=\"Wanmin Restaurant\">\r\n    </section>\r\n    */\r\n    // create HTML elements\r\n    const home = document.createElement(\"section\")\r\n    const header = document.createElement(\"h1\")\r\n    const image = document.createElement(\"img\")\r\n\r\n    // add text and attributes\r\n    header.textContent = \"Wanmin Restaurant\"\r\n    image.src = _img_wanmin_restaurant_webp__WEBPACK_IMPORTED_MODULE_0__\r\n    image.alt = \"Picture of Wanmin Restaurant\"\r\n\r\n    // add class\r\n    home.className = \"home\"\r\n\r\n    // append\r\n    home.append(header, image)\r\n\r\n    return home\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://restaurant/./src/components/Home.js?");

/***/ }),

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_grilled_tiger_fish_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/grilled-tiger-fish.webp */ \"./src/img/grilled-tiger-fish.webp\");\n/* harmony import */ var _img_dragon_beard_noodles_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/dragon-beard-noodles.webp */ \"./src/img/dragon-beard-noodles.webp\");\n/* harmony import */ var _img_minty_meat_rolls_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/minty-meat-rolls.webp */ \"./src/img/minty-meat-rolls.webp\");\n/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItem */ \"./src/components/MenuItem.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction Menu() {\r\n    /*\r\n    <section class=\"menu\">\r\n      <h1 class=\"header\">Menu</h1>\r\n      <div class=\"menu-grid\">\r\n        <MenuItem />\r\n      </div>\r\n    </section>\r\n    */\r\n    const menu = document.createElement(\"section\")\r\n    const header = document.createElement(\"h1\")\r\n    const menuGrid = document.createElement(\"div\")\r\n\r\n    header.textContent = \"Menu\"\r\n\r\n    menu.className = \"menu\"\r\n    menuGrid.className = \"menu-grid\"\r\n    header.className = \"header\"\r\n\r\n    menuGrid.append(\r\n        (0,_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_img_grilled_tiger_fish_webp__WEBPACK_IMPORTED_MODULE_0__, \"Grilled Tiger Fish\", 1250),\r\n        (0,_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_img_dragon_beard_noodles_webp__WEBPACK_IMPORTED_MODULE_1__, \"Dragon Beard Noodles\", 5000),\r\n        (0,_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_img_minty_meat_rolls_webp__WEBPACK_IMPORTED_MODULE_2__, \"Minty Meat Rolls\", 5000)\r\n    )\r\n    menu.append(header, menuGrid)\r\n\r\n    return menu\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n//# sourceURL=webpack://restaurant/./src/components/Menu.js?");

/***/ }),

/***/ "./src/components/MenuItem.js":
/*!************************************!*\
  !*** ./src/components/MenuItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction MenuItem(img, title, price) {\r\n    /*\r\n    <article class=\"menu-card\">\r\n        <img src=\"../src/img/grilled-tiger-fish.webp\" alt=\"Grilled Tiger Fish\" class=\"menu-card-img\">\r\n        <div class=\"menu-card-description\">\r\n          <p class=\"menu-card-title\">Grilled Tiger Fish</p>\r\n          <p class=\"menu-card-price\"><span>1,250</span> Mora</p>\r\n        </div>\r\n    </article>\r\n    */\r\n    // create HTML elements\r\n    const card = document.createElement(\"article\")\r\n    const cardImage = document.createElement(\"img\")\r\n    const cardDescription = document.createElement(\"div\")\r\n    const cardTitle = document.createElement(\"p\")\r\n    const cardPrice = document.createElement(\"p\")\r\n    const itemPrice = document.createElement(\"span\")\r\n\r\n    // add text and attributes\r\n    cardImage.src = img\r\n    cardImage.alt = title\r\n    cardTitle.textContent = title\r\n    cardPrice.textContent = \" Mora\"\r\n    itemPrice.textContent = price\r\n\r\n    // add classes\r\n    card.className = \"menu-card\"\r\n    cardImage.className = \"menu-card-img\"\r\n    cardDescription.className = \"menu-card-description\"\r\n    cardTitle.className = \"menu-card-title\"\r\n    cardPrice.className = \"menu-card-price\"\r\n\r\n    // append/prepend\r\n    cardPrice.prepend(itemPrice)\r\n    cardDescription.append(cardTitle, cardPrice)\r\n    card.append(cardImage, cardDescription)\r\n\r\n    return card\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItem);\n\n//# sourceURL=webpack://restaurant/./src/components/MenuItem.js?");

/***/ }),

/***/ "./src/components/Tabs.js":
/*!********************************!*\
  !*** ./src/components/Tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Tabs() {\r\n    /*\r\n    <header>\r\n        <nav class=\"tabs\">\r\n            <button class=\"home-tab\">Home</button>\r\n            <button class=\"menu-tab\">Menu</button>\r\n            <button class=\"contact-tab\">Contact Us</button>\r\n        </nav>\r\n    </header>\r\n    */\r\n    // create HTML elements\r\n    const header = document.createElement(\"header\")\r\n    const nav = document.createElement(\"nav\")\r\n    const homeTab = document.createElement(\"button\")\r\n    const menuTab = document.createElement(\"button\")\r\n    const contactTab = document.createElement(\"button\")\r\n\r\n    // set text\r\n    homeTab.textContent = \"Home\"\r\n    menuTab.textContent = \"Menu\"\r\n    contactTab.textContent = \"Contact\"\r\n\r\n    // append child nodes to parent node\r\n    nav.append(homeTab, menuTab, contactTab)\r\n    header.append(nav)\r\n\r\n    // add class to nodes\r\n    homeTab.className = \"home-tab\"\r\n    menuTab.className = \"menu-tab\"\r\n    contactTab.className = \"contact-tab\"\r\n    nav.className = \"tabs\"\r\n\r\n    return header\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);\n\n//# sourceURL=webpack://restaurant/./src/components/Tabs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialLoad */ \"./src/initialLoad.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Home */ \"./src/components/Home.js\");\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Menu */ \"./src/components/Menu.js\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Contact */ \"./src/components/Contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_initialLoad__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\nconst main = document.querySelector(\"main\")\r\nconst homeTab = document.querySelector(\".home-tab\")\r\nconst menuTab = document.querySelector(\".menu-tab\")\r\nconst contactTab = document.querySelector(\".contact-tab\")\r\n\r\nhomeTab.addEventListener(\"click\", () => {\r\n    ;(0,_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n    main.append((0,_components_Home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])())\r\n})\r\n\r\nmenuTab.addEventListener(\"click\", () => {\r\n    ;(0,_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n    main.append((0,_components_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"])())\r\n})\r\n\r\ncontactTab.addEventListener(\"click\", () => {\r\n    ;(0,_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n    main.append((0,_components_Contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"])())\r\n})\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Tabs */ \"./src/components/Tabs.js\");\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Home */ \"./src/components/Home.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Menu */ \"./src/components/Menu.js\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Contact */ \"./src/components/Contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction initialLoad() {\r\n    const main = document.querySelector(\"main\")\r\n\r\n    document.body.prepend((0,_components_Tabs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\r\n    main.append(\r\n        // Home()\r\n        // Menu()\r\n        (0,_components_Contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n    )\r\n    document.body.append((0,_components_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n//# sourceURL=webpack://restaurant/./src/initialLoad.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction render() {\r\n    const main = document.querySelector(\"main\")\r\n    while (main.firstChild) {\r\n        main.removeChild(main.firstChild);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://restaurant/./src/render.js?");

/***/ }),

/***/ "./src/img/chef-mao.webp":
/*!*******************************!*\
  !*** ./src/img/chef-mao.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"817f04ef529cde742c64.webp\";\n\n//# sourceURL=webpack://restaurant/./src/img/chef-mao.webp?");

/***/ }),

/***/ "./src/img/dragon-beard-noodles.webp":
/*!*******************************************!*\
  !*** ./src/img/dragon-beard-noodles.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"921f1de35990a24004a9.webp\";\n\n//# sourceURL=webpack://restaurant/./src/img/dragon-beard-noodles.webp?");

/***/ }),

/***/ "./src/img/grilled-tiger-fish.webp":
/*!*****************************************!*\
  !*** ./src/img/grilled-tiger-fish.webp ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fc84609644fb1e724201.webp\";\n\n//# sourceURL=webpack://restaurant/./src/img/grilled-tiger-fish.webp?");

/***/ }),

/***/ "./src/img/guoba.webp":
/*!****************************!*\
  !*** ./src/img/guoba.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0b6ff44f79f32f04fa7d.webp\";\n\n//# sourceURL=webpack://restaurant/./src/img/guoba.webp?");

/***/ }),

/***/ "./src/img/minty-meat-rolls.webp":
/*!***************************************!*\
  !*** ./src/img/minty-meat-rolls.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1708572f2e2c4ad1819.webp\";\n\n//# sourceURL=webpack://restaurant/./src/img/minty-meat-rolls.webp?");

/***/ }),

/***/ "./src/img/wanmin-restaurant.webp":
/*!****************************************!*\
  !*** ./src/img/wanmin-restaurant.webp ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d2ce1109a4fa9b1852d3.webp\";\n\n//# sourceURL=webpack://restaurant/./src/img/wanmin-restaurant.webp?");

/***/ }),

/***/ "./src/img/xiangling.webp":
/*!********************************!*\
  !*** ./src/img/xiangling.webp ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c874689e781e7ede915f.webp\";\n\n//# sourceURL=webpack://restaurant/./src/img/xiangling.webp?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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