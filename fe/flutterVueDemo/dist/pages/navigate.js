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
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ({

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(71)
)

/* script */
__vue_exports__ = __webpack_require__(72)

/* template */
var __vue_template__ = __webpack_require__(73)
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
__vue_options__._scopeId = "data-v-408aa975"
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

/***/ 71:
/***/ (function(module, exports) {

module.exports = {
  "column": {
    "crossAxisAlignment": "start"
  },
  "summary-container": {
    "color": "#FFFFFF",
    "paddingTop": 10,
    "paddingRight": 10,
    "paddingBottom": 10,
    "paddingLeft": 10,
    "marginTop": 20
  },
  "text": {
    "fontSize": "20"
  }
}

/***/ }),

/***/ 72:
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

const navigate = weex.requireModule('navigate');

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            params: {
                a: 1,
                b: 'string',
                c: ['1', 2, {}],
                d: {
                    e: [{
                        k: "v"
                    }],
                    f: {
                        g: ['1', '2', '3']
                    }
                }
            }
        };
    },
    computed: {
        getStyle() {
            return {
                width: 750,
                color: this.name == 'Snow' ? 'red' : 'blue',
                height: 400
            };
        }
    },
    created() {},
    methods: {
        onPush() {
            navigate.push({
                title: "Evn",
                url: "/pages/examples/env.js"
            }, callback => {});
        },
        onPushWithParams() {
            navigate.push({
                title: "Evn & Params",
                url: "/pages/examples/env.js",
                params: this.params
            }, callback => {});
        },
        onPop() {
            navigate.pop(callback => {});
        }
    }
});

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('center', [_c('column', {
    staticClass: ["column"]
  }, [_c('gesture-detector', {
    on: {
      "onTapDown": _vm.onPush
    }
  }, [_c('container', {
    staticClass: ["summary-container"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("Push a WeexPage")])])], 1), _c('gesture-detector', {
    on: {
      "onTapDown": _vm.onPushWithParams
    }
  }, [_c('container', {
    staticClass: ["summary-container"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("Push a WeexPage with params")])])], 1), _c('gesture-detector', {
    on: {
      "onTapDown": _vm.onPop
    }
  }, [_c('container', {
    staticClass: ["summary-container"]
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v("Back")])])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ })

/******/ });