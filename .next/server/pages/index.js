module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Coment.js":
/*!*************************!*\
  !*** ./pages/Coment.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Comment; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/Mac/Brntecnology/pages/Coment.js\";\n\nclass Comment extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: this.props.text\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Db21lbnQuanM/ZmU5MiJdLCJuYW1lcyI6WyJDb21tZW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxNQUFNQSxPQUFOLFNBQXNCQyw0Q0FBSyxDQUFDQyxTQUE1QixDQUFxQztBQUNoREMsUUFBTSxHQUFFO0FBQ0osd0JBQ0E7QUFBQSxnQkFBSyxLQUFLQyxLQUFMLENBQVdDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQTtBQUdIOztBQUwrQyIsImZpbGUiOiIuL3BhZ2VzL0NvbWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgPHA+eyB0aGlzLnByb3BzLnRleHQgfTwvcD5cbiAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Coment.js\n");

/***/ }),

/***/ "./pages/Post.js":
/*!***********************!*\
  !*** ./pages/Post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Coment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Coment */ \"./pages/Coment.js\");\n\nvar _jsxFileName = \"/Users/Mac/Brntecnology/pages/Post.js\";\n\n\nclass Post extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      comments: [],\n      newCommentText: ''\n    };\n    this.handleSubmit = this.handleSubmit.bind(this);\n    this.handleTextChange = this.handleTextChange.bind(this);\n  }\n\n  handleSubmit(e) {\n    this.setState({\n      comments: [...this.state.comments, {\n        text: this.state.newCommentText\n      }]\n    });\n    this.setState({\n      newCommentText: ''\n    });\n    e.preventDefault();\n  }\n\n  handleTextChange(e) {\n    this.setState({\n      newCommentText: e.target.value\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: this.props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: this.props.pag\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        onSubmit: this.handleSubmit,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          value: this.state.newCommentText,\n          onChange: this.handleTextChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          children: \"Comentar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 5\n      }, this), this.state.comments.map((comment, index) => {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Coment__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          text: comment.text\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 4\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9Qb3N0LmpzP2UzNWYiXSwibmFtZXMiOlsiUG9zdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY29tbWVudHMiLCJuZXdDb21tZW50VGV4dCIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJoYW5kbGVUZXh0Q2hhbmdlIiwiZSIsInNldFN0YXRlIiwidGV4dCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXIiLCJ0aXRsZSIsInBhZyIsIm1hcCIsImNvbW1lbnQiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVlLE1BQU1BLElBQU4sU0FBbUJDLDRDQUFLLENBQUNDLFNBQXpCLENBQW1DO0FBQzlDQyxhQUFXLENBQUNDLEtBQUQsRUFBTztBQUNwQixVQUFNQSxLQUFOO0FBRUEsU0FBS0MsS0FBTCxHQUFXO0FBQ1ZDLGNBQVEsRUFBRSxFQURBO0FBRVZDLG9CQUFjLEVBQUU7QUFGTixLQUFYO0FBS0EsU0FBS0MsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNBLFNBQUtDLGdCQUFMLEdBQXNCLEtBQUtBLGdCQUFMLENBQXNCRCxJQUF0QixDQUEyQixJQUEzQixDQUF0QjtBQUVBOztBQUVERCxjQUFZLENBQUNHLENBQUQsRUFDWjtBQUNDLFNBQUtDLFFBQUwsQ0FBYztBQUNiTixjQUFRLEVBQUUsQ0FDVCxHQUFHLEtBQUtELEtBQUwsQ0FBV0MsUUFETCxFQUVUO0FBQUVPLFlBQUksRUFBQyxLQUFLUixLQUFMLENBQVdFO0FBQWxCLE9BRlM7QUFERyxLQUFkO0FBT0EsU0FBS0ssUUFBTCxDQUFjO0FBQUNMLG9CQUFjLEVBQUU7QUFBakIsS0FBZDtBQUVBSSxLQUFDLENBQUNHLGNBQUY7QUFDQTs7QUFHREosa0JBQWdCLENBQUNDLENBQUQsRUFDaEI7QUFDQyxTQUFLQyxRQUFMLENBQWM7QUFBRUwsb0JBQWMsRUFBRUksQ0FBQyxDQUFDSSxNQUFGLENBQVNDO0FBQTNCLEtBQWQ7QUFDQTs7QUFFREMsUUFBTSxHQUFHO0FBQ1Isd0JBRUM7QUFBQSw4QkFFQztBQUFBLGtCQUFNLEtBQUtiLEtBQUwsQ0FBV2M7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZELGVBR2E7QUFBQSxrQkFBSyxLQUFLZCxLQUFMLENBQVdlO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIYixlQUlDO0FBQU0sZ0JBQVEsRUFBRSxLQUFLWCxZQUFyQjtBQUFBLGdDQUNDO0FBQ0MsZUFBSyxFQUFFLEtBQUtILEtBQUwsQ0FBV0UsY0FEbkI7QUFFQyxrQkFBUSxFQUFFLEtBQUtHO0FBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFLQTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpELEVBV0UsS0FBS0wsS0FBTCxDQUFXQyxRQUFYLENBQW9CYyxHQUFwQixDQUF3QixDQUFDQyxPQUFELEVBQVVDLEtBQVYsS0FBb0I7QUFDNUMsNEJBQU8scUVBQUMsK0NBQUQ7QUFBcUIsY0FBSSxFQUFFRCxPQUFPLENBQUNSO0FBQW5DLFdBQWNTLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQUNBLE9BRkEsQ0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRDtBQWtCQTs7QUFyRGdEIiwiZmlsZSI6Ii4vcGFnZXMvUG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDb21tZW50IGZyb20gJy4vQ29tZW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0dGhpcy5zdGF0ZT17XG5cdFx0XHRjb21tZW50czogW10sXG5cdFx0XHRuZXdDb21tZW50VGV4dDogJydcblx0XHR9O1xuXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaGFuZGxlVGV4dENoYW5nZT10aGlzLmhhbmRsZVRleHRDaGFuZ2UuYmluZCh0aGlzKTtcblxuXHR9XG5cblx0aGFuZGxlU3VibWl0KGUpXG5cdHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGNvbW1lbnRzOiBbXG5cdFx0XHRcdC4uLnRoaXMuc3RhdGUuY29tbWVudHMsXG5cdFx0XHRcdHsgdGV4dDp0aGlzLnN0YXRlLm5ld0NvbW1lbnRUZXh0fVxuXHRcdFx0XVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7bmV3Q29tbWVudFRleHQ6ICcnfSk7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXG5cdGhhbmRsZVRleHRDaGFuZ2UoZSlcblx0e1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBuZXdDb21tZW50VGV4dDogZS50YXJnZXQudmFsdWUgfSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXG5cdFx0XHQ8ZGl2PlxuXG5cdFx0XHRcdDxoMj57IHRoaXMucHJvcHMudGl0bGUgfTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+eyB0aGlzLnByb3BzLnBhZyB9PC9wPlxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuXHRcdFx0XHRcdDxpbnB1dCBcblx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm5ld0NvbW1lbnRUZXh0fSBcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRleHRDaGFuZ2V9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q29tZW50YXI8L2J1dHRvbj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5jb21tZW50cy5tYXAoKGNvbW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIDxDb21tZW50IGtleT17aW5kZXh9IHRleHQ9e2NvbW1lbnQudGV4dH0gLz5cblx0XHRcdFx0fSkgfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Post.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Post */ \"./pages/Post.js\");\n\nvar _jsxFileName = \"/Users/Mac/Brntecnology/pages/index.js\";\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Brn Tecnology\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"todas atualiza\\xE7\\xF5es sobre tecnologia encontre aqui.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Post__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"AConsola (PS5, XBOXXbox Series X), OU UM PC GAMER?\",\n        pag: \"Vamos aqui de forma resumida falar das coisas positivas e negativas dos novos super consoles da sony (o PS5) e da microsoft( Xbox Series X), e de um pc gamer sabendo que a um grande diversidade de gameres no mercado Angolano como internacional.\\nEmbora os consoles n\\xE3o estando livremente dispon\\xEDveis em Angola \\xE9 momento de come\\xE7ar a fazer j\\xE1 a revis\\xE3o do produto e saber se aquela compra valer\\xE1 apena.\\nPC Gamer\\nPontos positivos\\n+Pode ser mais poderoso.\\nO primeiro ponto positivo de ter um PC gamer \\xE9 a possibilidade de montar um computador mais poderoso, superior tanto ao PlayStation 5 (PS5) quanto ao Xbox Series X. \\xC9 poss\\xEDvel equipar a m\\xE1quina com processadores mais r\\xE1pidos e com mais n\\xFAcleos.\\n'Jogos mais baratos.\\nOutro ponto positivo do computador enquanto uma plataforma de games est\\xE1 na oferta de jogos. Nos PCs, jogos t\\xEAm pre\\xE7os mais baixos, em m\\xE9dia. Al\\xE9m disso, as promo\\xE7\\xF5es de lojas como a Steam e Epic oferecem descontos muito mais agressivosdo que as ofertas para Xbox e PlayStation, por exemplo.\\nPontos negativos\\nMenor custo-benef\\xEDcio.\\n\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Post__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"\",\n        pag: \"Nokia \\xE9 a marca de celular Android mais confi\\xE1vel.\",\n        pag: \"A Nokia \\xE9 uma empresa de telefones que conquistou o mundo e os angolanos com os seus aparelhos bem duradouros e potentes nos anos 2005-2011.\\na Nokia tentou se juntar com a microsoft e usou o windowsphone em alguns aparelhos nos anos de 2012-2016. nos nossos dias usam o sistema internacionalizado o Android, e atualmente \\xE9 um dos aparelhos mais seguro e que merece muita confian\\xE7a dos seus utilizadores por ser o melhor da plataforma Android, por dois simples motivos.\\n-A Nokia \\xE9 a marca Android mais segura e duradoura.\\n-Atualiza\\xE7\\xF5es do sistema e de seguran\\xE7a.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Post__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"Apple anuncia evento para novembro e pode lan\\xE7ar Mac com chip pr\\xF3prio\",\n        pag: \"intitulado -One More Thing- (Mais Uma Coisa na tradu\\xE7\\xE3o do ingl\\xEAs), o evento vai acontecer na ter\\xE7a-feira que vem, dia 10 de novembro, \\xE0s 19:00 (hor\\xE1rio de Angola). Rumores apontam que a Apple vai apresentar uma nova linha de MacBooks com processadores Apple Silicon, CPUs exclusivamente desenvolvidas pela companhia e que s\\xE3o usadas nos iPhones e iPads.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBO0FBRWUsTUFBTUEsR0FBTixTQUFrQkMsNENBQUssQ0FBQ0MsU0FBeEIsQ0FBa0M7QUFDN0NDLFFBQU0sR0FBRTtBQUNKLHdCQUNBO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSSxxRUFBQyw2Q0FBRDtBQUFNLGFBQUssRUFBQyxvREFBWjtBQUFpRSxXQUFHLEVBQUM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBY0kscUVBQUMsNkNBQUQ7QUFBTSxhQUFLLEVBQUMsRUFBWjtBQUFlLFdBQUcsRUFBQywwREFBbkI7QUFBd0UsV0FBRyxFQUFDO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkSixlQWtCSSxxRUFBQyw2Q0FBRDtBQUFNLGFBQUssRUFBQyw2RUFBWjtBQUFvRixXQUFHLEVBQUM7QUFBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQTtBQXNCSDs7QUF4QjRDIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUG9zdCBmcm9tICcuL1Bvc3QnOyBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxoMT5Ccm4gVGVjbm9sb2d5PC9oMT5cbiAgICAgICAgICAgIDxwPnRvZGFzIGF0dWFsaXphw6fDtWVzIHNvYnJlIHRlY25vbG9naWEgZW5jb250cmUgYXF1aS48L3A+XG4gICAgICAgICAgICA8UG9zdCB0aXRsZT1cIkFDb25zb2xhIChQUzUsIFhCT1hYYm94IFNlcmllcyBYKSwgT1UgVU0gUEMgR0FNRVI/XCIgcGFnPVwiVmFtb3MgYXF1aSBkZSBmb3JtYSByZXN1bWlkYSBmYWxhciBkYXMgY29pc2FzIHBvc2l0aXZhcyBlIG5lZ2F0aXZhcyBkb3Mgbm92b3Mgc3VwZXIgY29uc29sZXMgZGEgc29ueSAobyBQUzUpIGUgZGEgbWljcm9zb2Z0KCBYYm94IFNlcmllcyBYKSwgZSBkZSB1bSBwYyBnYW1lciBzYWJlbmRvIHF1ZSBhIHVtIGdyYW5kZSBkaXZlcnNpZGFkZSBkZSBnYW1lcmVzIG5vIG1lcmNhZG8gQW5nb2xhbm8gY29tbyBpbnRlcm5hY2lvbmFsLlxuRW1ib3JhIG9zIGNvbnNvbGVzIG7Do28gZXN0YW5kbyBsaXZyZW1lbnRlIGRpc3BvbsOtdmVpcyBlbSBBbmdvbGEgw6kgbW9tZW50byBkZSBjb21lw6dhciBhIGZhemVyIGrDoSBhIHJldmlzw6NvIGRvIHByb2R1dG8gZSBzYWJlciBzZSBhcXVlbGEgY29tcHJhIHZhbGVyw6EgYXBlbmEuXG5QQyBHYW1lclxuUG9udG9zIHBvc2l0aXZvc1xuK1BvZGUgc2VyIG1haXMgcG9kZXJvc28uXG5PIHByaW1laXJvIHBvbnRvIHBvc2l0aXZvIGRlIHRlciB1bSBQQyBnYW1lciDDqSBhIHBvc3NpYmlsaWRhZGUgZGUgbW9udGFyIHVtIGNvbXB1dGFkb3IgbWFpcyBwb2Rlcm9zbywgc3VwZXJpb3IgdGFudG8gYW8gUGxheVN0YXRpb24gNSAoUFM1KSBxdWFudG8gYW8gWGJveCBTZXJpZXMgWC4gw4kgcG9zc8OtdmVsIGVxdWlwYXIgYSBtw6FxdWluYSBjb20gcHJvY2Vzc2Fkb3JlcyBtYWlzIHLDoXBpZG9zIGUgY29tIG1haXMgbsO6Y2xlb3MuXG4nSm9nb3MgbWFpcyBiYXJhdG9zLlxuT3V0cm8gcG9udG8gcG9zaXRpdm8gZG8gY29tcHV0YWRvciBlbnF1YW50byB1bWEgcGxhdGFmb3JtYSBkZSBnYW1lcyBlc3TDoSBuYSBvZmVydGEgZGUgam9nb3MuIE5vcyBQQ3MsIGpvZ29zIHTDqm0gcHJlw6dvcyBtYWlzIGJhaXhvcywgZW0gbcOpZGlhLiBBbMOpbSBkaXNzbywgYXMgcHJvbW/Dp8O1ZXMgZGUgbG9qYXMgY29tbyBhIFN0ZWFtIGUgRXBpYyBvZmVyZWNlbSBkZXNjb250b3MgbXVpdG8gbWFpcyBhZ3Jlc3Npdm9zZG8gcXVlIGFzIG9mZXJ0YXMgcGFyYSBYYm94IGUgUGxheVN0YXRpb24sIHBvciBleGVtcGxvLlxuUG9udG9zIG5lZ2F0aXZvc1xuTWVub3IgY3VzdG8tYmVuZWbDrWNpby5cblwiLz5cbiAgICAgICAgICAgIDxQb3N0IHRpdGxlPVwiXCIgcGFnPVwiTm9raWEgw6kgYSBtYXJjYSBkZSBjZWx1bGFyIEFuZHJvaWQgbWFpcyBjb25macOhdmVsLlwiIHBhZz1cIkEgTm9raWEgw6kgdW1hIGVtcHJlc2EgZGUgdGVsZWZvbmVzIHF1ZSBjb25xdWlzdG91IG8gbXVuZG8gZSBvcyBhbmdvbGFub3MgY29tIG9zIHNldXMgYXBhcmVsaG9zIGJlbSBkdXJhZG91cm9zIGUgcG90ZW50ZXMgbm9zIGFub3MgMjAwNS0yMDExLlxuYSBOb2tpYSB0ZW50b3Ugc2UganVudGFyIGNvbSBhIG1pY3Jvc29mdCBlIHVzb3UgbyB3aW5kb3dzcGhvbmUgZW0gYWxndW5zIGFwYXJlbGhvcyBub3MgYW5vcyBkZSAyMDEyLTIwMTYuIG5vcyBub3Nzb3MgZGlhcyB1c2FtIG8gc2lzdGVtYSBpbnRlcm5hY2lvbmFsaXphZG8gbyBBbmRyb2lkLCBlIGF0dWFsbWVudGUgw6kgdW0gZG9zIGFwYXJlbGhvcyBtYWlzIHNlZ3VybyBlIHF1ZSBtZXJlY2UgbXVpdGEgY29uZmlhbsOnYSBkb3Mgc2V1cyB1dGlsaXphZG9yZXMgcG9yIHNlciBvIG1lbGhvciBkYSBwbGF0YWZvcm1hIEFuZHJvaWQsIHBvciBkb2lzIHNpbXBsZXMgbW90aXZvcy5cbi1BIE5va2lhIMOpIGEgbWFyY2EgQW5kcm9pZCBtYWlzIHNlZ3VyYSBlIGR1cmFkb3VyYS5cbi1BdHVhbGl6YcOnw7VlcyBkbyBzaXN0ZW1hIGUgZGUgc2VndXJhbsOnYS5cIi8+XG4gICAgICAgICAgICA8UG9zdCB0aXRsZT1cIkFwcGxlIGFudW5jaWEgZXZlbnRvIHBhcmEgbm92ZW1icm8gZSBwb2RlIGxhbsOnYXIgTWFjIGNvbSBjaGlwIHByw7NwcmlvXCIgcGFnPVwiaW50aXR1bGFkbyAtT25lIE1vcmUgVGhpbmctIChNYWlzIFVtYSBDb2lzYSBuYSB0cmFkdcOnw6NvIGRvIGluZ2zDqnMpLCBvIGV2ZW50byB2YWkgYWNvbnRlY2VyIG5hIHRlcsOnYS1mZWlyYSBxdWUgdmVtLCBkaWEgMTAgZGUgbm92ZW1icm8sIMOgcyAxOTowMCAoaG9yw6FyaW8gZGUgQW5nb2xhKS4gUnVtb3JlcyBhcG9udGFtIHF1ZSBhIEFwcGxlIHZhaSBhcHJlc2VudGFyIHVtYSBub3ZhIGxpbmhhIGRlIE1hY0Jvb2tzIGNvbSBwcm9jZXNzYWRvcmVzIEFwcGxlIFNpbGljb24sIENQVXMgZXhjbHVzaXZhbWVudGUgZGVzZW52b2x2aWRhcyBwZWxhIGNvbXBhbmhpYSBlIHF1ZSBzw6NvIHVzYWRhcyBub3MgaVBob25lcyBlIGlQYWRzLlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });