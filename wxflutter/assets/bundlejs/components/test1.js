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
__vue_options__._scopeId = "data-v-2e66127f"
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
  "mr-base": {
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10"
  },
  "title": {
    "height": "100",
    "marginTop": "30",
    "marginBottom": "20",
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "output": {
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "width": "650",
    "height": "200",
    "marginLeft": "50",
    "marginTop": "20",
    "marginBottom": "30"
  },
  "desc": {
    "color": "#aa0000",
    "fontSize": "30"
  },
  "input": {
    "width": "650",
    "height": "100",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "placeholderColor": "#41b883",
    "marginLeft": "50",
    "paddingLeft": "20",
    "fontSize": "28"
  },
  "panel": {
    "height": "100",
    "flexDirection": "column",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)",
    "marginLeft": "20",
    "display": "inline-block",
    "paddingTop": "20",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  },
  "group": {
    "flexDirection": "row",
    "marginTop": "30",
    "marginLeft": "45"
  }
}

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

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


module.exports = {
    data: {
        state: '1',
        keyboard_state: ''
    },
    created() {},
    methods: {
        eventInput: function (e) {
            this.state = 'input: ' + JSON.stringify(e);
        },
        onChange: function (e) {
            this.state = 'change: ' + JSON.stringify(e);
        },
        onFocus: function (e) {
            this.state = 'focus: ' + JSON.stringify(e);
        },
        onBlur: function (e) {
            this.state = 'blur: ' + JSON.stringify(e);
        },
        onKeyBoard: function (e) {
            this.keyboard_state = "\n onkeyboard: " + JSON.stringify(e);
        },
        setRange() {
            this.$refs.range.setSelectionRange(1, 4);
        },
        getRange() {
            let el = this.$refs.range;
            console.log("el = " + JSON.stringify(el));
            this.state = JSON.stringify(el);
            this.$refs.range.getSelectionRange(params => {
                this.state = `当前文本选区为 ${params.selectionStart} ~ ${params.selectionEnd}`;
                this.keyboard_state = "";
            });
        }
    }
};

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _c('div', {
    staticClass: ["output"]
  }, [_c('scroller', [_c('text', [_vm._v("\n                " + _vm._s(_vm.state) + " " + _vm._s(_vm.keyboard_state) + "\n            ")])])]), _c('div', [_c('input', {
    ref: "range",
    staticClass: ["input"],
    attrs: {
      "testId": "input-obj",
      "type": "text",
      "placeholder": "input placeholder"
    },
    on: {
      "input": _vm.eventInput,
      "change": _vm.onChange,
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "keyboard": _vm.onKeyBoard
    }
  })]), _c('div', {
    staticClass: ["group"]
  }, [_c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["text"],
    on: {
      "click": _vm.setRange
    }
  }, [_vm._v("setSelectionRange")])]), _c('div', {
    staticClass: ["panel"]
  }, [_c('text', {
    staticClass: ["text"],
    on: {
      "click": _vm.getRange
    }
  }, [_vm._v("getSelectionRange")])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["title"]
  }, [_c('text', {
    staticStyle: {
      textAlign: "center",
      fontSize: "50px"
    }
  }, [_vm._v("<input> Component Demo")])])
}]}

/***/ })

/******/ });