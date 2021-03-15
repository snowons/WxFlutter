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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(35)
)

/* script */
__vue_exports__ = __webpack_require__(36)

/* template */
var __vue_template__ = __webpack_require__(37)
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
__vue_options__._scopeId = "data-v-6bc29f0c"
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

/***/ 35:
/***/ (function(module, exports) {

module.exports = {
  "padding": {
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30"
  },
  "scroll-container": {
    "widthFactor": 1,
    "heightFactor": 1
  },
  "column": {
    "crossAxisAlignment": "start"
  },
  "title": {
    "fontSize": "27",
    "color": "#41b883"
  },
  "count": {
    "fontSize": "20",
    "color": "#888888",
    "maxLines": 10
  }
}

/***/ }),

/***/ 36:
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

const http = weex.requireModule('http');

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            getResult: 'loading...',
            postResult: 'loading...',
            putResult: 'loading...',
            deleteResult: 'loading...',
            patchResult: 'loading...'
        };
    },
    created() {
        var me = this;
        var GET_URL = 'http://httpbin.org/get';
        var POST_URL = 'http://httpbin.org/post';
        var PUT_URL = 'http://httpbin.org/put';
        var DELETE_URL = 'http://httpbin.org/delete';
        var PATCH_URL = 'http://httpbin.org/patch';

        http.fetch({
            method: 'GET',
            url: GET_URL
        }, ret => {
            if (!ret.ok) {
                me.getResult = "request failed";
            } else {
                console.log('get:' + ret);
                me.getResult = JSON.stringify(ret.data);
            }
        });

        http.fetch({
            method: 'POST',
            url: POST_URL
        }, function (ret) {
            if (!ret.ok) {
                me.postResult = "request failed";
            } else {
                console.log('get:' + JSON.stringify(ret));
                me.postResult = JSON.stringify(ret.data);
            }
        });

        http.fetch({
            method: 'PUT',
            url: PUT_URL
        }, ret => {
            if (!ret.ok) {
                me.putResult = "request failed";
            } else {
                console.log('get:' + JSON.stringify(ret));
                me.putResult = JSON.stringify(ret.data);
            }
        });

        http.fetch({
            method: 'DELETE',
            url: DELETE_URL
        }, ret => {

            if (!ret.ok) {
                me.deleteResult = "request failed";
            } else {
                console.log('get:' + JSON.stringify(ret));
                me.deleteResult = JSON.stringify(ret.data);
            }
        });

        http.fetch({
            method: 'PATCH',
            url: PATCH_URL
        }, ret => {
            if (!ret.ok) {
                me.patchResult = "request failed";
            } else {
                console.log('get:' + JSON.stringify(ret));
                me.patchResult = JSON.stringify(ret.data);
            }
        });
    }
});

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('fractionally-sized-box', {
    staticClass: ["scroll-container"]
  }, [_c('single-child-scroll-view', [_c('column', {
    staticClass: ["column"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("method = GET")]), _c('text', {
    staticClass: ["count"]
  }, [_vm._v(_vm._s(_vm.getResult))]), _c('padding', {
    staticClass: ["padding"]
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("method = POST")]), _c('text', {
    staticClass: ["count"]
  }, [_vm._v(_vm._s(_vm.postResult))]), _c('padding', {
    staticClass: ["padding"]
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("method = PUT")]), _c('text', {
    staticClass: ["count"]
  }, [_vm._v(_vm._s(_vm.putResult))]), _c('padding', {
    staticClass: ["padding"]
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("method = DELETE")]), _c('text', {
    staticClass: ["count"]
  }, [_vm._v(_vm._s(_vm.deleteResult))]), _c('padding', {
    staticClass: ["padding"]
  }), _c('text', {
    staticClass: ["title"]
  }, [_vm._v("method = PATCH")]), _c('text', {
    staticClass: ["count"]
  }, [_vm._v(_vm._s(_vm.patchResult))])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ })

/******/ });