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
/******/ ({

/***/ 110:
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

/***/ 111:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            imageUrl: "https://s3.ax1x.com/2021/02/14/yy9uGR.png"
        };
    },
    computed: {},
    methods: {}
});

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('column', [_c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {}, [_vm._v("ClipRect")])]), _c('center', [_c('clip', {
    attrs: {
      "type": "ClipRect"
    }
  }, [_c('Align', {
    attrs: {
      "alignment": "bottomCenter",
      "heightFactor": "0.5"
    }
  }, [_c('image', {
    staticClass: ["image"],
    attrs: {
      "src": _vm.imageUrl
    }
  })])], 1)], 1), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {}, [_vm._v("ClipRRect")])]), _c('center', [_c('clip', {
    attrs: {
      "type": "ClipRRect",
      "borderRadius": "100"
    }
  }, [_c('div', {
    staticStyle: {
      color: "red",
      width: "300",
      height: "100"
    }
  })])], 1), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {}, [_vm._v("ClipOval")])]), _c('center', [_c('clip', {
    attrs: {
      "type": "ClipOval"
    }
  }, [_c('div', {
    staticStyle: {
      color: "red",
      width: "300",
      height: "100"
    }
  })])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(110)
)

/* script */
__vue_exports__ = __webpack_require__(111)

/* template */
var __vue_template__ = __webpack_require__(112)
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
__vue_options__._scopeId = "data-v-ab34d458"
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


/***/ })

/******/ });