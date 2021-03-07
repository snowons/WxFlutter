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
__vue_options__._scopeId = "data-v-1db5ccca"
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
  "scroll-container": {
    "widthFactor": 1,
    "heightFactor": 1
  },
  "column": {
    "crossAxisAlignment": "start"
  },
  "row-container": {
    "color": "#FFFFFF",
    "paddingTop": 10,
    "paddingRight": 10,
    "paddingBottom": 10,
    "paddingLeft": 10
  },
  "image-container": {
    "width": "120",
    "height": "160",
    "marginRight": 5
  },
  "title": {
    "fontSize": "14",
    "color": "#000000"
  },
  "summary-container": {
    "color": "#FFFFFF",
    "paddingTop": 10,
    "paddingRight": 10,
    "paddingBottom": 10,
    "paddingLeft": 10
  },
  "label-container": {
    "paddingLeft": 10,
    "paddingTop": 5,
    "paddingBottom": 5
  },
  "summary-label": {
    "fontSize": 16,
    "color": "#008000"
  },
  "catalog-container": {
    "color": "#FFFFFF",
    "paddingTop": 10,
    "paddingLeft": 10,
    "paddingRight": 10
  },
  "more-container": {
    "paddingLeft": 10,
    "paddingRight": 10,
    "paddingBottom": 10,
    "color": "#FFFFFF"
  },
  "more-btn": {
    "color": "#FFFFFF"
  },
  "more": {
    "color": "#0000FF"
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
            name: 'Snow',
            catalogShort: "",
            showLong: false,
            btnText: "查看更多",
            detail: {
                title: '历史学家的修养和技艺',
                catalog: '在当代中国，社会群体干预历史写作的现象并不常见，现实政治往往以另外的方式作用于历史编纂。20世纪30年代，历史学家蒋廷黻写成《中国近代史大纲》，最后一节题为“蒋总裁贯彻总理的遗教”，不免使人联想到他与国民党政权的特殊关系；近60年后，大陆重印这本书，则以这一节“所论有失公允”为由，毫不留情地予以删去。蒋廷黻当年写这一节，就有“蛇足”意味；而重版时的删削，则有“不尊重历史”之嫌。已经写成的史书尚且可以在现实力量的作用下任意删改，而在写作过程中依据现实要求来取舍和诠释，就更不足为怪了',
                author: '李剑鸣',
                publisher: '上海三联书店',
                subtitle: '治史三书',
                summary: '本书取材自李剑鸣教授开设的史学方法课程，前身为此课程的教学讲义。为初学者简要梳理史学方法论，并介绍了古今中外史学大家的治学经验。',
                author_intro: '李剑鸣，1960年6月生，湖南常德人，历史学博士。现为北京大学历史学系教授、博士生导师，南开大学近现代史研究中心研究人员，兼任中国美国史研究会理事长、国务院学位委员会学科评议组成员、教育部社会科学委员会委员。著有《大转折的年代》、《文化的边疆》、《美国的奠基时代》等。',
                image: 'https://img1.doubanio.com/view/subject/l/public/s4129408.jpg'
            }
        };
    },
    computed: {
        getStyle() {
            return {
                width: 750,
                color: this.name == 'Snow' ? 'red' : 'blue',
                height: 100
            };
        }
    },
    methods: {
        onclick() {
            var result = this.color1 === "black" ? "green" : "black";
            this.color1 = result;
            this.color2 = result;
            this.color3 = result;
        },
        onMoreClick(e) {
            console.log("js --- onMoreClick ");
            this.showLong = !this.showLong;
            var catalogShort = this.detail.catalog;
            var btnText = "收起更多";
            if (!this.showLong) {
                if (catalogShort.length > 50) {
                    catalogShort = catalogShort.substring(0, 50) + "...";
                }
                btnText = "查看更多";
            }
            this.btnText = btnText;
            this.catalogShort = catalogShort;
        }
    }
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('fractionally-sized-box', {
    staticClass: ["scroll-container"]
  }, [_c('single-child-scroll-view', [_c('column', {
    staticClass: ["column"]
  }, [_c('container', {
    staticClass: ["row-container"]
  }, [_c('row', [_c('container', {
    staticClass: ["image-container"]
  }, [_c('image', {
    staticClass: ["image"],
    attrs: {
      "src": _vm.detail.image
    }
  })]), _c('column', {
    staticClass: ["column"]
  }, [_c('container', [_c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s("书名：" + _vm.detail.title))])]), _c('container', [_c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s("作者：" + _vm.detail.author))])]), _c('container', [_c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s("出版社：" + _vm.detail.publisher))])]), _c('container', [_c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s("副标题：" + _vm.detail.subtitle))])])], 1)], 1)], 1), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {
    staticClass: ["summary-label"]
  }, [_vm._v("内容简介")])]), _c('container', {
    staticClass: ["summary-container"]
  }, [_c('text', {
    staticClass: ["summary"]
  }, [_vm._v(_vm._s(_vm.detail.summary))])]), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {
    staticClass: ["summary-label"]
  }, [_vm._v("作者简介")])]), _c('container', {
    staticClass: ["summary-container"]
  }, [_c('text', {
    staticClass: ["author"]
  }, [_vm._v(_vm._s(_vm.detail.author_intro))])]), _c('container', {
    staticClass: ["label-container"]
  }, [_c('text', {
    staticClass: ["summary-label"]
  }, [_vm._v("目录")])]), _c('container', {
    staticClass: ["catalog-container"]
  }, [_c('text', {
    staticClass: ["catalog"]
  }, [_vm._v(_vm._s(_vm.catalogShort))])]), _c('container', {
    staticClass: ["more-container"]
  }, [_c('raised-button', {
    staticClass: ["more-btn"],
    on: {
      "onPressed": _vm.onMoreClick
    }
  }, [_c('text', {
    staticClass: ["more"]
  }, [_vm._v(_vm._s(_vm.btnText))])])], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ })
/******/ ]);