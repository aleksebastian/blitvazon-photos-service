(self["webpackChunkFEC_Blitva_Photos"] = self["webpackChunkFEC_Blitva_Photos"] || []).push([["client_src_components_ZoomPopover_jsx"],{

/***/ "./client/src/components/ZoomPopover.jsx":
/*!***********************************************!*\
  !*** ./client/src/components/ZoomPopover.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var ZoomPopoverWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.withConfig({
  displayName: "ZoomPopover__ZoomPopoverWrapper"
})(["width:27vw;height:45em;margin-left:0.7em;border:1px solid black;position:absolute;display:inline;z-index:10;background-repeat:no-repeat;background-size:1400px 1400px;@media screen and (max-width:1400px){width:40%;height:40em;}@media screen and (max-width:1100px){display:none;}"]);

var ZoomPopover = function ZoomPopover(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ZoomPopoverWrapper, {
    style: {
      backgroundImage: "url(".concat(props.primaryPhotoUrl, ")"),
      backgroundPosition: "".concat(-props.coordinates.x * 2, "px ").concat(-props.coordinates.y * 1.5, "px")
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZoomPopover);

/***/ })

}]);
//# sourceMappingURL=client_src_components_ZoomPopover_jsx.photos_bundle.js.map