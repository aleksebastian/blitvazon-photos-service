(self["webpackChunkFEC_Blitva_Photos"] = self["webpackChunkFEC_Blitva_Photos"] || []).push([["client_src_components_PhotosModal_jsx"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./client/src/components/PhotosModal.jsx":
/*!***********************************************!*\
  !*** ./client/src/components/PhotosModal.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Photos_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Photos.jsx */ "./client/src/components/Photos.jsx");




var PhotosModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "PhotosModal__PhotosModalWrapper"
})(["position:absolute;border-color:#d5d9d9;box-shadow:0 0 14px 0 rgba(15,17,17,0.5);background:white;width:85vw;height:90vh;z-index:1000;border-radius:8px;@media screen and (max-width:1100px){display:none;}-webkit-animation:fadein 0.5s;-moz-animation:fadein 0.5s;-ms-animation:fadein 0.5s;-o-animation:fadein 0.5s;animation:fadein 0.5s;@keyframes fadein{from{opacity:0;}to{opacity:1;}}@-moz-keyframes fadein{from{opacity:0;}to{opacity:1;}}@-webkit-keyframes fadein{from{opacity:0;}to{opacity:1;}}"]);
var PhotosModalEl = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "PhotosModal__PhotosModalEl"
})(["display:flex;justify-content:space-around;align-items:center;"]);
var PrimaryPhotoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "PhotosModal__PrimaryPhotoWrapper"
})(["height:auto;"]);
var PrimaryPhoto = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.img.withConfig({
  displayName: "PhotosModal__PrimaryPhoto"
})(["max-width:100%;height:auto;@media (max-width:1400px){max-width:83%;};"]);
var ProductInfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "PhotosModal__ProductInfoWrapper"
})(["padding-top:2%;flex-basis:30%;align-self:flex-start;"]);
var ProductInfo = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "PhotosModal__ProductInfo"
})([""]);
var ProductTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.span.withConfig({
  displayName: "PhotosModal__ProductTitle"
})(["display:block;font-family:verdana,arial,helvetica,sans-serif;font-size:17px;margin-bottom:2em;"]);
var ProductColorAndConfiguration = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.span.withConfig({
  displayName: "PhotosModal__ProductColorAndConfiguration"
})(["display:block;font-family:verdana,arial,helvetica,sans-serif;font-size:12px;color:#767676;margin-bottom:1.5em;"]);
var X = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.span.withConfig({
  displayName: "PhotosModal__X"
})(["font-family:\"Amazon Ember\",Arial,sans-serif;display:block;margin-left:97%;margin-top:1.5em;cursor:pointer;"]);

var PhotosModal = function PhotosModal(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      openModal = _useState2[0],
      setModal = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(PhotosModalWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(X, {
    onClick: function onClick() {
      return props.toggleModal();
    }
  }, "x"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(PhotosModalEl, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(PrimaryPhotoWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(PrimaryPhoto, {
    src: props.primaryPhotoUrl
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ProductInfoWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ProductInfo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ProductTitle, null, props.productInfo.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ProductColorAndConfiguration, null, "Color: ", props.productInfo.color), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ProductColorAndConfiguration, null, "Configuration: ", props.productInfo.configuration)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Photos_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
    setPrimary: props.setPrimary,
    primaryPhotoUrl: props.primaryPhotoUrl,
    photos: props.photos
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhotosModal);

/***/ })

}]);
//# sourceMappingURL=client_src_components_PhotosModal_jsx.photos_bundle.js.map