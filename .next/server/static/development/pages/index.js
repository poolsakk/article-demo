module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CardHorizontal.js":
/*!**************************************!*\
  !*** ./components/CardHorizontal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\next-js\\article-demo\\components\\CardHorizontal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const imgNothing = "https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

const CardHorizontal = props => __jsx("article", {
  className: "jsx-2047025475",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2047025475" + " " + "card",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("img", {
  src: props.image || imgNothing,
  className: "jsx-2047025475",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-2047025475" + " " + "contents",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-2047025475",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, props.title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2047025475",
  __self: undefined
}, "h3.jsx-2047025475{margin:0;}.contents.jsx-2047025475{padding:16px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}img.jsx-2047025475{width:100%;height:225px;padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXh0LWpzXFxhcnRpY2xlLWRlbW9cXGNvbXBvbmVudHNcXENhcmRIb3Jpem9udGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNnQixBQUdrQixBQUlJLEFBS0YsU0FSYixFQVNlLEVBTCtELFdBTS9ELGFBQ2YsNkNBTkEiLCJmaWxlIjoiQzpcXG5leHQtanNcXGFydGljbGUtZGVtb1xcY29tcG9uZW50c1xcQ2FyZEhvcml6b250YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBpbWdOb3RoaW5nID1cclxuICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzIwMDM4ODU0MDktZWQ4NGQzMzRmNmNjP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDUwJnE9ODBcIjtcclxuXHJcbmNvbnN0IENhcmRIb3Jpem9udGFsID0gcHJvcHMgPT4gKFxyXG4gIDxhcnRpY2xlPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZSB8fCBpbWdOb3RoaW5nfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRzXCI+XHJcbiAgICAgICAgPGgzPntwcm9wcy50aXRsZX08L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvbnRlbnRzIHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMjVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9hcnRpY2xlPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZEhvcml6b250YWw7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\next-js\\\\article-demo\\\\components\\\\CardHorizontal.js */"));

/* harmony default export */ __webpack_exports__["default"] = (CardHorizontal);

/***/ }),

/***/ "./components/CardVertical.js":
/*!************************************!*\
  !*** ./components/CardVertical.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\next-js\\article-demo\\components\\CardVertical.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const imgNothing = "https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

const CardVertical = props => __jsx("article", {
  className: "jsx-1344734248",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1344734248" + " " + "card",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("img", {
  src: props.image || imgNothing,
  className: "jsx-1344734248",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-1344734248" + " " + "content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("h4", {
  className: "jsx-1344734248" + " " + "depart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "POLITIC"), __jsx("h4", {
  className: "jsx-1344734248" + " " + "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, props.title))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1344734248",
  __self: undefined
}, "article.jsx-1344734248{font-size:30px;}.card.jsx-1344734248{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}img.jsx-1344734248{padding:8px 6px 8px 6px;width:35%;height:13vh;}.content.jsx-1344734248{padding-left:8px;}h4.jsx-1344734248{margin:0;}.depart.jsx-1344734248{font-size:0.25em;color:rgb(96,96,96);margin-bottom:6px;}.title.jsx-1344734248{font-size:0.44em;}@media only screen and (min-width:600px){img.jsx-1344734248{padding:20px;width:40%;height:18vh;}.depart.jsx-1344734248{font-size:0.35em;}.title.jsx-1344734248{font-size:19px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXh0LWpzXFxhcnRpY2xlLWRlbW9cXGNvbXBvbmVudHNcXENhcmRWZXJ0aWNhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFHMEIsQUFJRixBQUlhLEFBTVQsQUFJUixBQUlRLEFBTUEsQUFLRSxBQU1JLEFBSUYsU0F4QnZCLElBZWtCLEVBakNsQixBQTJDSSxFQTdCSixBQVF3QixBQU14QixBQVdNLE1BTGMsQ0ExQk4sVUFDRSxDQTBCWixFQVpnQixTQWJwQixTQWNBLG1CQXBCQSIsImZpbGUiOiJDOlxcbmV4dC1qc1xcYXJ0aWNsZS1kZW1vXFxjb21wb25lbnRzXFxDYXJkVmVydGljYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBpbWdOb3RoaW5nID1cclxuICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzIwMDM4ODU0MDktZWQ4NGQzMzRmNmNjP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMDUwJnE9ODBcIjtcclxuXHJcbmNvbnN0IENhcmRWZXJ0aWNhbCA9IHByb3BzID0+IChcclxuICAgIDxhcnRpY2xlPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2UgfHwgaW1nTm90aGluZ30gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJkZXBhcnRcIj5QT0xJVElDPC9oND5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9wcy50aXRsZX08L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBhcnRpY2xlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggNnB4IDhweCA2cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTN2aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlcGFydCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuMjVlbTtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoOTYsIDk2LCA5Nik7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjQ0ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTh2aDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRlcGFydCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuMzVlbTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2FydGljbGU+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRWZXJ0aWNhbCJdfQ== */\n/*@ sourceURL=C:\\\\next-js\\\\article-demo\\\\components\\\\CardVertical.js */"));

/* harmony default export */ __webpack_exports__["default"] = (CardVertical);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\next-js\\article-demo\\components\\Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Footer = props => __jsx("div", {
  className: "jsx-2540388729" + " " + "footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("h1", {
  className: "jsx-2540388729",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, "Footer"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2540388729",
  __self: undefined
}, ".footer.jsx-2540388729{text-align:center;width:100%;float:left;background-color:#f1f1f1;}@media only screen and (max-width:600px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXh0LWpzXFxhcnRpY2xlLWRlbW9cXGNvbXBvbmVudHNcXEZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJb0IsQUFHbUMsa0JBQ1AsV0FDQSxXQUNjLHlCQUM3QiIsImZpbGUiOiJDOlxcbmV4dC1qc1xcYXJ0aWNsZS1kZW1vXFxjb21wb25lbnRzXFxGb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBGb290ZXIgPSBwcm9wcyA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgIDxoMT5Gb290ZXI8L2gxPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlciJdfQ== */\n/*@ sourceURL=C:\\\\next-js\\\\article-demo\\\\components\\\\Footer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\next-js\\article-demo\\components\\Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Header = props => __jsx("div", {
  className: "jsx-3514578376" + " " + "header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("h1", {
  className: "jsx-3514578376",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, "Header"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3514578376",
  __self: undefined
}, ".header.jsx-3514578376{display:none;background-color:#f1f1f1;}@media only screen and (min-width:600px){.header.jsx-3514578376{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXh0LWpzXFxhcnRpY2xlLWRlbW9cXGNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJb0IsQUFHOEIsQUFNSyxhQUxPLENBTXpCLHdCQUxKIiwiZmlsZSI6IkM6XFxuZXh0LWpzXFxhcnRpY2xlLWRlbW9cXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEhlYWRlciA9IHByb3BzID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgPGgxPkhlYWRlcjwvaDE+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl19 */\n/*@ sourceURL=C:\\\\next-js\\\\article-demo\\\\components\\\\Header.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\next-js\\article-demo\\components\\Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // const styleMain = {
//     maxWidth: '900px',
//     margin: 'auto',
//     display: 'table',
// }

const Layout = props => __jsx("main", {
  className: "jsx-2791135876",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2791135876",
  __self: undefined
}, "*{box-sizing:border-box;}body{font-family:Arial,Helvetica,sans-serif;margin:auto;}h1{margin:0;}main{max-width:900px;margin:auto;}main:after{content:\"\";display:table;clear:both;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXh0LWpzXFxhcnRpY2xlLWRlbW9cXGNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlMkIsQUFHdUMsQUFJbUIsQUFLaEMsQUFJTyxBQUtMLFNBUmYsRUFTa0IsS0FMRixNQWJoQixHQW1CZSxHQUxmLFFBTUEsR0FoQmdCLFlBQ2hCIiwiZmlsZSI6IkM6XFxuZXh0LWpzXFxhcnRpY2xlLWRlbW9cXGNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXHJcblxyXG4vLyBjb25zdCBzdHlsZU1haW4gPSB7XHJcbi8vICAgICBtYXhXaWR0aDogJzkwMHB4JyxcclxuLy8gICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4vLyAgICAgZGlzcGxheTogJ3RhYmxlJyxcclxuLy8gfVxyXG5cclxuY29uc3QgTGF5b3V0ID0gcHJvcHMgPT4gKFxyXG4gICAgPG1haW4+XHJcbiAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDxGb290ZXIvPlxyXG5cclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBtYWluIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1haW46YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L21haW4+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dCJdfQ== */\n/*@ sourceURL=C:\\\\next-js\\\\article-demo\\\\components\\\\Layout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./containers/ListHorizontal.js":
/*!**************************************!*\
  !*** ./containers/ListHorizontal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CardHorizontal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CardHorizontal */ "./components/CardHorizontal.js");
var _jsxFileName = "C:\\next-js\\article-demo\\containers\\ListHorizontal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const ListHorizontal = props => __jsx("div", {
  className: "jsx-1127830795" + " " + "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("ul", {
  className: "jsx-1127830795",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, props.store.image.map(item => __jsx("li", {
  className: "jsx-1127830795",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(_components_CardHorizontal__WEBPACK_IMPORTED_MODULE_2__["default"], {
  image: item,
  title: props.store.text,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1127830795",
  __self: undefined
}, ".container.jsx-1127830795{padding:10px;}ul.jsx-1127830795{margin:0;padding:0;list-style-type:none;}li.jsx-1127830795{padding-bottom:20px;}@media only screen and (min-width:600px){.container.jsx-1127830795{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXh0LWpzXFxhcnRpY2xlLWRlbW9cXGNvbnRhaW5lcnNcXExpc3RIb3Jpem9udGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNvQixBQUc4QixBQUlKLEFBTVcsQUFLSCxTQVZQLElBSmQsQUFlQSxNQVZ5QixDQUt6QixvQkFKQSIsImZpbGUiOiJDOlxcbmV4dC1qc1xcYXJ0aWNsZS1kZW1vXFxjb250YWluZXJzXFxMaXN0SG9yaXpvbnRhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhcmRIb3Jpem9udGFsIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZEhvcml6b250YWwnXHJcblxyXG5jb25zdCBMaXN0SG9yaXpvbnRhbCA9IHByb3BzID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zdG9yZS5pbWFnZS5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEhvcml6b250YWwgaW1hZ2U9e2l0ZW19IHRpdGxlPXtwcm9wcy5zdG9yZS50ZXh0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdEhvcml6b250YWwiXX0= */\n/*@ sourceURL=C:\\\\next-js\\\\article-demo\\\\containers\\\\ListHorizontal.js */"));

/* harmony default export */ __webpack_exports__["default"] = (ListHorizontal);

/***/ }),

/***/ "./containers/ListVertical.js":
/*!************************************!*\
  !*** ./containers/ListVertical.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CardVertical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CardVertical */ "./components/CardVertical.js");
var _jsxFileName = "C:\\next-js\\article-demo\\containers\\ListVertical.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const ListVertical = props => __jsx("div", {
  className: "jsx-1650950117" + " " + "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("ul", {
  className: "jsx-1650950117",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, props.store.image.map(item => __jsx("li", {
  className: "jsx-1650950117",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(_components_CardVertical__WEBPACK_IMPORTED_MODULE_2__["default"], {
  image: item,
  title: props.store.text,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1650950117",
  __self: undefined
}, ".container.jsx-1650950117{padding-left:10px;padding-right:10px;}ul.jsx-1650950117{margin:0;padding:0;list-style-type:none;}li.jsx-1650950117{padding-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXh0LWpzXFxhcnRpY2xlLWRlbW9cXGNvbnRhaW5lcnNcXExpc3RWZXJ0aWNhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjb0IsQUFHbUMsQUFLVCxBQU1XLFNBTFYsU0FMUyxDQU1FLENBS3pCLGlCQVZBLEdBTUEiLCJmaWxlIjoiQzpcXG5leHQtanNcXGFydGljbGUtZGVtb1xcY29udGFpbmVyc1xcTGlzdFZlcnRpY2FsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2FyZFZlcnRpY2FsIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZFZlcnRpY2FsJ1xyXG5cclxuY29uc3QgTGlzdFZlcnRpY2FsID0gcHJvcHMgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnN0b3JlLmltYWdlLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVmVydGljYWwgaW1hZ2U9e2l0ZW19IHRpdGxlPXtwcm9wcy5zdG9yZS50ZXh0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdFZlcnRpY2FsIl19 */\n/*@ sourceURL=C:\\\\next-js\\\\article-demo\\\\containers\\\\ListVertical.js */"));

/* harmony default export */ __webpack_exports__["default"] = (ListVertical);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _containers_ListHorizontal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/ListHorizontal */ "./containers/ListHorizontal.js");
/* harmony import */ var _containers_ListVertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/ListVertical */ "./containers/ListVertical.js");
var _jsxFileName = "C:\\next-js\\article-demo\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const MockupData = {
  text: "To fit ratios in a variety of mediums is often a challenge to designers, particularly.",
  image: [null, "https://images.unsplash.com/photo-1482268015045-1e9932ce47f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", "https://images.unsplash.com/photo-1560761716-ec8eb63ea39c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80", "https://images.unsplash.com/photo-1544510558-8cbb2f009cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80", "https://images.unsplash.com/photo-1530669731069-48706bc794ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1563891217861-7924b471afb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"]
};

const Index = props => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2907447402",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2907447402" + " " + "container left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx(_containers_ListHorizontal__WEBPACK_IMPORTED_MODULE_3__["default"], {
  store: MockupData,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx(_containers_ListVertical__WEBPACK_IMPORTED_MODULE_4__["default"], {
  store: MockupData,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2907447402" + " " + "container right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "RIGHT")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2907447402",
  __self: undefined
}, ".container{float:left;}.left{width:100%;}.right{display:none;width:30%;background-color:yellow;}@media only screen and (min-width:600px){.left{width:70%;}.right{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxuZXh0LWpzXFxhcnRpY2xlLWRlbW9cXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QjJCLEFBRzRCLEFBSUEsQUFJRSxBQU9DLEFBSUksVUFIbEIsQ0FmSixBQUlBLEVBSWMsQ0FXVixTQVZ3Qix3QkFDNUIiLCJmaWxlIjoiQzpcXG5leHQtanNcXGFydGljbGUtZGVtb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgTGlzdEhvcml6b250YWwgZnJvbSAnLi4vY29udGFpbmVycy9MaXN0SG9yaXpvbnRhbCdcclxuaW1wb3J0IExpc3RWZXJ0aWNhbCBmcm9tICcuLi9jb250YWluZXJzL0xpc3RWZXJ0aWNhbCdcclxuXHJcbmNvbnN0IE1vY2t1cERhdGEgPSB7XHJcbiAgICB0ZXh0OlxyXG4gICAgICBcIlRvIGZpdCByYXRpb3MgaW4gYSB2YXJpZXR5IG9mIG1lZGl1bXMgaXMgb2Z0ZW4gYSBjaGFsbGVuZ2UgdG8gZGVzaWduZXJzLCBwYXJ0aWN1bGFybHkuXCIsXHJcbiAgICBpbWFnZTogW1xyXG4gICAgICBudWxsLFxyXG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDgyMjY4MDE1MDQ1LTFlOTkzMmNlNDdmNz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTA1MCZxPTgwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NjA3NjE3MTYtZWM4ZWI2M2VhMzljP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01NjQmcT04MFwiLFxyXG4gICAgICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTQ0NTEwNTU4LThjYmIyZjAwOWNjND9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9Njc1JnE9ODBcIixcclxuICAgICAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzMDY2OTczMTA2OS00ODcwNmJjNzk0YWI/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTgwMCZxPTgwXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NjM4OTEyMTc4NjEtNzkyNGI0NzFhZmIzP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02NzUmcT04MFwiXHJcbiAgICBdXHJcbiAgfTtcclxuXHJcbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEhvcml6b250YWwgc3RvcmU9e01vY2t1cERhdGF9Lz5cclxuICAgICAgICAgICAgICAgIDxMaXN0VmVydGljYWwgc3RvcmU9e01vY2t1cERhdGF9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICBSSUdIVFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdfQ== */\n/*@ sourceURL=C:\\\\next-js\\\\article-demo\\\\pages\\\\index.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\next-js\article-demo\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map