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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(14)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(16)
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
__vue_options__._scopeId = "data-v-6089822d"
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

/***/ 14:
/***/ (function(module, exports) {

module.exports = {
  "label-container": {
    "paddingLeft": 10,
    "paddingTop": 5,
    "paddingBottom": 5,
    "color": "#ebebeb"
  },
  "container": {
    "width": "100",
    "height": "100"
  },
  "label-text": {
    "fontSize": "18"
  }
}

/***/ }),

/***/ 15:
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

/***/ 16:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list-view', {
    staticClass: ["start"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {
    staticClass: ["label-text"]
  }, [_vm._v("color")])]), _c('container', {
    staticClass: ["container"],
    staticStyle: {
      color: "red"
    }
  }), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {
    staticClass: ["label-text"]
  }, [_vm._v("margin")])]), _c('container', {
    staticClass: ["container"],
    staticStyle: {
      margin: "20",
      color: "green"
    }
  }), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {
    staticClass: ["label-text"]
  }, [_vm._v("padding")])]), _c('container', {
    staticClass: ["container"],
    staticStyle: {
      padding: "20",
      color: "blue"
    }
  }, [_c('text', {
    staticStyle: {
      maxLines: "5"
    }
  }, [_vm._v("This padding is in addition to any padding inherent in the [decoration];see [Decoration.padding]")])]), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {
    staticClass: ["label-text"]
  }, [_vm._v("alignment")])]), _c('container', {
    staticClass: ["container"],
    staticStyle: {
      color: "yellow",
      alignment: "top-left"
    }
  }, [_c('text', [_vm._v("topLeft")])]), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {
    staticClass: ["label-text"]
  }, [_vm._v("alignment")])]), _c('container', {
    staticClass: ["container"],
    staticStyle: {
      color: "yellow",
      alignment: "top-center"
    }
  }, [_c('text', [_vm._v("topCenter")])]), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {
    staticClass: ["label-text"]
  }, [_vm._v("alignment")])]), _c('container', {
    staticClass: ["container"],
    staticStyle: {
      color: "yellow",
      alignment: "top-right"
    }
  }, [_c('text', [_vm._v("topRight")])]), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {
    staticClass: ["label-text"]
  }, [_vm._v("alignment")])]), _c('container', {
    staticClass: ["container"],
    staticStyle: {
      color: "yellow",
      alignment: "center"
    }
  }, [_c('text', [_vm._v("center")])]), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {
    staticClass: ["label-text"]
  }, [_vm._v("alignment")])]), _c('container', {
    staticClass: ["container"],
    staticStyle: {
      color: "yellow",
      alignment: "center-left"
    }
  }, [_c('text', [_vm._v("centerLeft")])]), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {
    staticClass: ["label-text"]
  }, [_vm._v("alignment")])]), _c('container', {
    staticClass: ["container"],
    staticStyle: {
      color: "yellow",
      alignment: "center-right"
    }
  }, [_c('text', [_vm._v("centerRight")])]), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {
    staticClass: ["label-text"]
  }, [_vm._v("alignment")])]), _c('container', {
    staticClass: ["container"],
    staticStyle: {
      color: "yellow",
      alignment: "bottom-left"
    }
  }, [_c('text', [_vm._v("bottomLeft")])]), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {
    staticClass: ["label-text"]
  }, [_vm._v("alignment")])]), _c('container', {
    staticClass: ["container"],
    staticStyle: {
      color: "yellow",
      alignment: "bottom-center"
    }
  }, [_c('text', [_vm._v("bottomCenter")])]), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {
    staticClass: ["label-text"]
  }, [_vm._v("alignment")])]), _c('container', {
    staticClass: ["container"],
    staticStyle: {
      color: "yellow",
      alignment: "bottom-right"
    }
  }, [_c('text', [_vm._v("bottomRight")])]), _c('div', {
    staticStyle: {
      height: "30"
    }
  })], 1)
},staticRenderFns: []}

/***/ })

/******/ });