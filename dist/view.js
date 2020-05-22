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
/******/ 	return __webpack_require__(__webpack_require__.s = "./view/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/swiper */ \"./src/swiper.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/core/event.js":
/*!***************************!*\
  !*** ./src/core/event.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _typeOrigin_eventOrigin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typeOrigin/eventOrigin */ \"./src/typeOrigin/eventOrigin.js\");\n\r\n\r\n\r\nfunction event(CSwiper) {\r\n    // \r\n    CSwiper.prototype.event = function () {\r\n\r\n        switch(this.$op.type) {\r\n            case 1:\r\n                Object(_typeOrigin_eventOrigin__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this)\r\n                break;\r\n            default:\r\n                return \r\n        }\r\n\r\n\r\n    }\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (event);\n\n//# sourceURL=webpack:///./src/core/event.js?");

/***/ }),

/***/ "./src/core/init.js":
/*!**************************!*\
  !*** ./src/core/init.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction init(CSwiper) {\r\n    CSwiper.prototype.initData = function (){\r\n        \r\n    }\r\n\r\n\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (init);\n\n//# sourceURL=webpack:///./src/core/init.js?");

/***/ }),

/***/ "./src/core/render.js":
/*!****************************!*\
  !*** ./src/core/render.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _typeOrigin_renderOrigin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typeOrigin/renderOrigin */ \"./src/typeOrigin/renderOrigin.js\");\n\r\n\r\nfunction render(CSwiper) {\r\n    //\r\n    CSwiper.prototype.render = function () {\r\n            //\r\n            switch (this.$op.type) {\r\n                case 1:\r\n                    this.$dom = Object(_typeOrigin_renderOrigin__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.$op.imgList,this.$dom)\r\n                    break;\r\n                default:\r\n                    break;\r\n        \r\n            }\r\n\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n//# sourceURL=webpack:///./src/core/render.js?");

/***/ }),

/***/ "./src/swiper.js":
/*!***********************!*\
  !*** ./src/swiper.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/init */ \"./src/core/init.js\");\n/* harmony import */ var _core_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/render */ \"./src/core/render.js\");\n/* harmony import */ var _core_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/event */ \"./src/core/event.js\");\n\r\n\r\n\r\n\r\nvar option = {\r\n    imgList: [],\r\n    type: {\r\n        rows: 5,\r\n        cols: 5\r\n    }\r\n}\r\n\r\nvar dom = {\r\n    el:null,\r\n    lis:[{\r\n        el:null,\r\n        imgSrc:null,\r\n        child:null\r\n    }]\r\n}\r\n\r\n\r\nfunction CSwiper(el, option) {\r\n    this.$el = typeof el === 'string' ? document.querySelector(el) : el\r\n    this.$op = option\r\n    this.$dom = {\r\n        el:this.$el\r\n    }\r\n    this.$data = {\r\n        active:null,\r\n        oldActive:null,\r\n        transition:false\r\n    }\r\n    this.$num = 0\r\n\r\n    this.render()\r\n    this.event()\r\n}\r\n\r\nObject(_core_init__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(CSwiper)\r\nObject(_core_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(CSwiper)\r\nObject(_core_event__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(CSwiper)\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (CSwiper);\r\n\n\n//# sourceURL=webpack:///./src/swiper.js?");

/***/ }),

/***/ "./src/typeOrigin/eventOrigin.js":
/*!***************************************!*\
  !*** ./src/typeOrigin/eventOrigin.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nfunction eventOrigin(CSwiper) {\r\n    let that = CSwiper\r\n\r\n    that.$el.addEventListener('transitionend', transitionend.bind(that))\r\n\r\n    // left\r\n    that.__proto__.onNext = function () {\r\n\r\n        // 动画在移动中则退出\r\n        if (this.$data.transition) return\r\n        let oldNum = this.$num\r\n        this.$data.transition = true\r\n        //\r\n\r\n        // \r\n        if (this.$num < this.$dom.lis.length - 1) {\r\n            this.$num++\r\n        } else {\r\n            this.$num = 0\r\n        }\r\n\r\n        // 绑定准备移动的元素\r\n        this.$data.active = this.$dom.lis[this.$num].el\r\n        this.$data.oldActive = this.$dom.lis[oldNum].el\r\n\r\n\r\n        // transition \r\n        // 初始化\r\n        this.$data.oldActive.setAttribute('style', 'width:100%;height:100%;visibility:visible;position:absolute;top:0px;left:0px;')\r\n        // 准备进入\r\n        this.$data.active.style.visibility = 'visible'\r\n        this.$data.active.style.left = `100%`\r\n        this.$data.active.style.transform = `translate3d(-100%,0px,0px)`\r\n        this.$data.active.style.transition = `transform 1s ease 0s`\r\n\r\n        // 准备移出\r\n        this.$data.oldActive.style.visibility = 'visible'\r\n        this.$data.oldActive.style.left = `0px`\r\n        this.$data.oldActive.style.transform = `translate3d(-100%,0px,0px)`\r\n        this.$data.oldActive.style.transition = `transform 1s ease 0s`\r\n\r\n\r\n\r\n    }\r\n\r\n    // right\r\n    that.__proto__.onPrev = function () {\r\n        // 动画在移动中则退出\r\n        if (this.$data.transition) return\r\n        let oldNum = this.$num\r\n        this.$data.transition = true\r\n        //\r\n\r\n        // \r\n        if (this.$num > 0) {\r\n            this.$num--\r\n        } else {\r\n            this.$num = this.$dom.lis.length - 1\r\n        }\r\n\r\n        // 绑定准备移动的元素\r\n        this.$data.active = this.$dom.lis[this.$num].el\r\n        this.$data.oldActive = this.$dom.lis[oldNum].el\r\n\r\n\r\n        // transition \r\n        // 初始化\r\n        this.$data.oldActive.setAttribute('style', 'width:100%;height:100%;visibility:visible;position:absolute;top:0px;left:0px;')\r\n        // 准备进入\r\n        this.$data.active.style.visibility = 'visible'\r\n        this.$data.active.style.left = `-100%`\r\n        this.$data.active.style.transform = `translate3d(100%,0px,0px)`\r\n        this.$data.active.style.transition = `transform 1s ease 0s`\r\n\r\n        // 准备移出\r\n        this.$data.oldActive.style.visibility = 'visible'\r\n        this.$data.oldActive.style.left = `0px`\r\n        this.$data.oldActive.style.transform = `translate3d(100%,0px,0px)`\r\n        this.$data.oldActive.style.transition = `transform 1s ease 0s`\r\n\r\n\r\n    }\r\n\r\n    // \r\n    that.__proto__.onChange = function (number) {\r\n        let num = Number(number)\r\n        let dirRight = true\r\n        // 动画在移动中则退出\r\n        if (this.$data.transition) return\r\n        // 顺序跟当前一致则退出\r\n        if (num === this.$num) return\r\n        //\r\n        //\r\n        let oldNum = this.$num\r\n        this.$data.transition = true\r\n        // \r\n\r\n        if (num >= 0 && num <= this.$dom.lis.length) {\r\n            this.$num = num\r\n            this.$num > oldNum ?\r\n            dirRight = true : dirRight = false\r\n        }\r\n\r\n        // 绑定准备移动的元素\r\n        this.$data.active = this.$dom.lis[this.$num].el\r\n        this.$data.oldActive = this.$dom.lis[oldNum].el\r\n\r\n        if (dirRight) {\r\n            // transition \r\n            // 初始化\r\n            this.$data.oldActive.setAttribute('style', 'width:100%;height:100%;visibility:visible;position:absolute;top:0px;left:0px;')\r\n            // 准备进入\r\n            this.$data.active.style.visibility = 'visible'\r\n            this.$data.active.style.left = `100%`\r\n            this.$data.active.style.transform = `translate3d(-100%,0px,0px)`\r\n            this.$data.active.style.transition = `transform 1s ease 0s`\r\n\r\n            // 准备移出\r\n            this.$data.oldActive.style.visibility = 'visible'\r\n            this.$data.oldActive.style.left = `0px`\r\n            this.$data.oldActive.style.transform = `translate3d(-100%,0px,0px)`\r\n            this.$data.oldActive.style.transition = `transform 1s ease 0s`\r\n        } else {\r\n            // 初始化\r\n            this.$data.oldActive.setAttribute('style', 'width:100%;height:100%;visibility:visible;position:absolute;top:0px;left:0px;')\r\n            // 准备进入\r\n            this.$data.active.style.visibility = 'visible'\r\n            this.$data.active.style.left = `-100%`\r\n            this.$data.active.style.transform = `translate3d(100%,0px,0px)`\r\n            this.$data.active.style.transition = `transform 1s ease 0s`\r\n\r\n            // 准备移出\r\n            this.$data.oldActive.style.visibility = 'visible'\r\n            this.$data.oldActive.style.left = `0px`\r\n            this.$data.oldActive.style.transform = `translate3d(100%,0px,0px)`\r\n            this.$data.oldActive.style.transition = `transform 1s ease 0s`\r\n        }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    }\r\n\r\n\r\n\r\n}\r\n\r\nfunction transitionend(ev) {\r\n    ev.stopPropagation()\r\n\r\n    // 初始化\r\n    this.$data.active.setAttribute('style', 'width:100%;height:100%;position:absolute;top:0px;left:0px;')\r\n    this.$data.oldActive.setAttribute('style', 'width:100%;height:100%;visibility:hidden;position:absolute;top:0px;left:0px;')\r\n    //\r\n    this.$data.transition = false\r\n    // \r\n\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (eventOrigin);\n\n//# sourceURL=webpack:///./src/typeOrigin/eventOrigin.js?");

/***/ }),

/***/ "./src/typeOrigin/renderOrigin.js":
/*!****************************************!*\
  !*** ./src/typeOrigin/renderOrigin.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * @name    添加image\r\n * @param   {Array}     imgList\r\n * @param   {Object}    lis \r\n * @return  {Object}    返回this.$dom\r\n */\r\nfunction typeOrigin(imgList, dom) {\r\n    return renderLis(imgList, dom)\r\n}\r\n/**\r\n * @param   {Array}     imgList\r\n * @param   {Object}    dom\r\n * @return  {Object}    $dom \r\n */\r\nfunction renderLis(imgList, dom) {\r\n    let $imgList = imgList\r\n    let $dom = dom\r\n\r\n    // ul\r\n    $dom.ul = document.createElement('div')\r\n    $dom.ul.setAttribute('style', 'width:100%;height:100%;position:relative;overflow:hidden;')\r\n    //\r\n    // li\r\n    $dom.lis = $imgList.map((src, index) => {\r\n        // create\r\n        let li = document.createElement('div')\r\n        // 标注序号\r\n        li.setAttribute('data-num', index)\r\n        // style\r\n        // display\r\n        if (index === 0) {\r\n            li.setAttribute('style', 'width:100%;height:100%;position:absolute;top:0px;left:0px;')\r\n        } else {\r\n            li.setAttribute('style', 'width:100%;height:100%;visibility:hidden;position:absolute;top:0px;left:0px;')\r\n        }\r\n\r\n        // createImg\r\n        let liObj = renderImg({\r\n            el:li,\r\n            src:src,\r\n            child:null\r\n        })\r\n\r\n        // appchild\r\n        $dom.ul.appendChild(li)\r\n\r\n        return liObj\r\n    })\r\n\r\n    // render \r\n    $dom.el.appendChild($dom.ul)\r\n\r\n    return $dom\r\n}\r\n\r\nfunction renderImg(li) {\r\n    let obj = li\r\n    // create img\r\n    let img = document.createElement('img')\r\n    // setSrc\r\n    img.setAttribute('src', obj.src)\r\n    // style\r\n    img.setAttribute('style', 'width:100%')\r\n    // appendChild\r\n    obj.el.appendChild(img)\r\n    // lis\r\n    obj.child = img\r\n\r\n\r\n    return obj\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (typeOrigin);\n\n//# sourceURL=webpack:///./src/typeOrigin/renderOrigin.js?");

/***/ }),

/***/ "./view/index.js":
/*!***********************!*\
  !*** ./view/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n\r\n// import swiper_0 from './image/swiper-0.webp'\r\n// import swiper_1 from './image/swiper-1.webp'\r\n// import swiper_2 from './image/swiper-2.webp'\r\n\r\nconst swiper = new _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.swiper', {\r\n    imgList: ['./image/swiper-0.webp', './image/swiper-1.webp', './image/swiper-2.webp'],\r\n    type: 1\r\n})\r\n\r\nlet next = document.querySelector('.next')\r\nlet prev = document.querySelector('.prev')\r\nlet one = document.querySelector('.one')\r\nlet two = document.querySelector('.two')\r\nlet three = document.querySelector('.three')\r\n\r\n\r\n\r\nnext.addEventListener('click',function(){\r\n    // swiper.onNext.call(swiper)\r\n    swiper.onNext()\r\n})\r\n\r\nprev.addEventListener('click',function(){\r\n    // swiper.onNext.call(swiper)\r\n    swiper.onPrev()\r\n})\r\n\r\none.addEventListener('click',function(){\r\n    // swiper.onNext.call(swiper)\r\n    swiper.onChange(0)\r\n})\r\n\r\ntwo.addEventListener('click',function(){\r\n    // swiper.onNext.call(swiper)\r\n    swiper.onChange(1)\r\n})\r\n\r\nthree.addEventListener('click',function(){\r\n    // swiper.onNext.call(swiper)\r\n    swiper.onChange(2)\r\n})\r\n\r\n\r\n\r\nconsole.log(swiper)\n\n//# sourceURL=webpack:///./view/index.js?");

/***/ })

/******/ });