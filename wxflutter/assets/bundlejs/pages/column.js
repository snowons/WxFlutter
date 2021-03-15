// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0f3807da"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "start": {
    "crossAxisAlignment": "start",
    "mainAxisAlignment": "start"
  },
  "center": {
    "crossAxisAlignment": "center",
    "mainAxisAlignment": "center"
  },
  "end": {
    "mainAxisAlignment": "end",
    "crossAxisAlignment": "end"
  },
  "rtl": {
    "textDirection": "rtl"
  },
  "padding": {
    "paddingTop": "24",
    "paddingRight": "24",
    "paddingBottom": "24",
    "paddingLeft": "24"
  },
  "red-text": {
    "color": "#ff8888"
  },
  "green-text": {
    "color": "#88ff88"
  },
  "blue-text": {
    "color": "#8888ff",
    "paddingTop": 10,
    "paddingRight": 10,
    "paddingBottom": 10,
    "paddingLeft": 10
  },
  "label-container": {
    "paddingLeft": 10,
    "paddingTop": 5,
    "paddingBottom": 5,
    "color": "#ebebeb"
  },
  "label-text": {
    "fontSize": "18"
  }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {};
    },
    computed: {},
    methods: {}
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list-view', {
    staticClass: ["start"]
  }, [_c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {
    staticClass: ["label-text"]
  }, [_vm._v("start")])]), _c('column', {
    staticClass: ["start"]
  }, [_c('text', {
    staticClass: ["red-text"]
  }, [_vm._v("Text1")]), _c('text', {
    staticClass: ["green-text"]
  }, [_vm._v("Text2")]), _c('text', {
    staticClass: ["blue-text"]
  }, [_vm._v("Text3")])]), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {
    staticClass: ["label-text"]
  }, [_vm._v("center")])]), _c('column', {
    staticClass: ["center"]
  }, [_c('text', {
    staticClass: ["red-text"]
  }, [_vm._v("Text1")]), _c('text', {
    staticClass: ["green-text"]
  }, [_vm._v("Text2")]), _c('text', {
    staticClass: ["blue-text"]
  }, [_vm._v("Text3")])]), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {
    staticClass: ["label-text"]
  }, [_vm._v("end")])]), _c('column', {
    staticClass: ["end"]
  }, [_c('text', {
    staticClass: ["red-text"]
  }, [_vm._v("Text1")]), _c('text', {
    staticClass: ["green-text"]
  }, [_vm._v("Text2")]), _c('text', {
    staticClass: ["blue-text"]
  }, [_vm._v("Text3")])])], 1)
},staticRenderFns: []}

/***/ })
/******/ ]);