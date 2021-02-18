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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(18)

/* template */
var __vue_template__ = __webpack_require__(19)
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
__vue_options__._scopeId = "data-v-18a7e7d8"
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

/***/ 17:
/***/ (function(module, exports) {

module.exports = {
  "column": {
    "crossAxisAlignment": "start"
  }
}

/***/ }),

/***/ 18:
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

const system = weex.requireModule('system');
/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            value: ''
        };
    },
    computed: {},
    created() {},
    methods: {
        onTextFiledChanged(e) {
            this.value = e.value;
            console.log("onTextFiledChanged --- > " + JSON.stringify(e));
        },
        onCleanClick() {
            this.$refs.tf.clear(data => {
                console.log("TextFiled clear callback--- > " + JSON.stringify(data));
            });
        },
        onSetValueClick() {
            this.$refs.tf.setValue('hello', data => {
                console.log("TextFiled setValue callback--- > " + JSON.stringify(data));
            });
        },
        onFocusClick() {
            this.$refs.tf.requestFocus(data => {
                console.log("TextFiled requestFocus callback--- > " + JSON.stringify(data));
            });
        },
        onUnfocusClick() {
            this.$refs.tf.unfocus(data => {
                console.log("TextFiled unfocus callback--- > " + JSON.stringify(data));
            });
        }
    }
});

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('column', {
    staticClass: ["column"]
  }, [_c('text-filed', {
    ref: "tf",
    on: {
      "onChanged": _vm.onTextFiledChanged
    }
  }), _c('text', {
    staticStyle: {
      fontSize: "27px"
    }
  }, [_vm._v("Input Value: " + _vm._s(_vm.value))]), _c('row', [_c('raised-button', {
    staticStyle: {
      color: "red"
    },
    on: {
      "onPressed": function($event) {
        _vm.onCleanClick()
      }
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "14px",
      color: "white"
    }
  }, [_vm._v("clean")])]), _c('raised-button', {
    staticStyle: {
      color: "green"
    },
    on: {
      "onPressed": _vm.onSetValueClick
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "14px",
      color: "white"
    }
  }, [_vm._v("setValue")])]), _c('raised-button', {
    staticStyle: {
      color: "blue"
    },
    on: {
      "onPressed": _vm.onFocusClick
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "14px",
      color: "white"
    }
  }, [_vm._v("requestFocus")])]), _c('raised-button', {
    staticStyle: {
      color: "yellow"
    },
    on: {
      "onPressed": _vm.onUnfocusClick
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "14px",
      color: "white"
    }
  }, [_vm._v("unfocus")])])], 1)], 1)
},staticRenderFns: []}

/***/ })

/******/ });