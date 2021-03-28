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
/******/ 	return __webpack_require__(__webpack_require__.s = 105);
/******/ })
/************************************************************************/
/******/ ({

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(106)
)

/* script */
__vue_exports__ = __webpack_require__(107)

/* template */
var __vue_template__ = __webpack_require__(108)
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
__vue_options__._scopeId = "data-v-f61198d0"
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

/***/ 106:
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
  "label-container": {
    "paddingLeft": 10,
    "paddingTop": 5,
    "paddingBottom": 5,
    "color": "#ebebeb"
  },
  "label-text": {
    "fontSize": "18"
  },
  "transform-scale": {
    "transformType": "scale",
    "scale": 1.5
  },
  "transform-translate": {
    "transformType": "translate",
    "originX": 10,
    "originY": 10
  },
  "transform-rotate": {
    "transformType": "rotate",
    "originX": 20,
    "orginY": 50
  },
  "transform-skew": {
    "transformType": "skew",
    "x": 1,
    "y": 2,
    "z": 3,
    "originX": 20,
    "orginY": 50
  }
}

/***/ }),

/***/ 107:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {};
    },
    computed: {
        getAngle() {
            return Math.PI / 2;
        }
    },
    methods: {}
});

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('column', [_c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {}, [_vm._v("Transform.scale")])]), _c('container', [_c('DecoratedBox', {
    staticStyle: {
      color: "red"
    }
  }, [_c('Transform', {
    staticClass: ["transform-scale"]
  }, [_c('text', {
    staticStyle: {
      fontSize: "24px"
    }
  }, [_vm._v("Hello world")])])], 1)], 1), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {}, [_vm._v("Transform.translate")])]), _c('container', [_c('DecoratedBox', {
    staticStyle: {
      color: "red"
    }
  }, [_c('Transform', {
    staticClass: ["transform-translate"]
  }, [_c('text', {
    staticStyle: {
      fontSize: "24px"
    }
  }, [_vm._v("Hello world")])])], 1)], 1), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {}, [_vm._v("Transform.rotate")])]), _c('container', [_c('DecoratedBox', {
    staticStyle: {
      color: "red",
      height: "100"
    }
  }, [_c('Transform', {
    staticClass: ["transform-rotate"],
    attrs: {
      "angle": _vm.getAngle
    }
  }, [_c('text', {
    staticStyle: {
      fontSize: "24px"
    }
  }, [_vm._v("Hello world")])])], 1)], 1), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {}, [_vm._v("Transform.skew")])]), _c('container', [_c('DecoratedBox', {
    staticStyle: {
      color: "red",
      height: "100"
    }
  }, [_c('Transform', {
    staticClass: ["transform-skew"]
  }, [_c('text', {
    staticStyle: {
      fontSize: "24px"
    }
  }, [_vm._v("Hello world")])])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ })

/******/ });