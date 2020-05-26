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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/swiper.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/event.js":
/*!***************************!*\
  !*** ./src/core/event.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _typeOrigin_eventOrigin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typeOrigin/eventOrigin */ \"./src/typeOrigin/eventOrigin.js\");\n/* harmony import */ var _typeBlock_eventBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../typeBlock/eventBlock */ \"./src/typeBlock/eventBlock.js\");\n\r\n\r\n\r\nfunction event(CSwiper) {\r\n    // \r\n    CSwiper.prototype.event = function () {\r\n\r\n        switch(this.$op.type) {\r\n            case 1:\r\n                Object(_typeOrigin_eventOrigin__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this)\r\n                break;\r\n            default:\r\n                Object(_typeBlock_eventBlock__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this)\r\n                return \r\n        }\r\n\r\n\r\n    }\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (event);\n\n//# sourceURL=webpack:///./src/core/event.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _typeOrigin_renderOrigin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typeOrigin/renderOrigin */ \"./src/typeOrigin/renderOrigin.js\");\n/* harmony import */ var _typeBlock_renderBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../typeBlock/renderBlock */ \"./src/typeBlock/renderBlock.js\");\n\r\n\r\n\r\nfunction render(CSwiper) {\r\n    //\r\n    CSwiper.prototype.render = function () {\r\n        //\r\n        switch (this.$op.type) {\r\n            case 1:\r\n                this.$dom = Object(_typeOrigin_renderOrigin__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.$op.imgList, this.$dom)\r\n                break;\r\n            default:\r\n                this.$dom = Object(_typeBlock_renderBlock__WEBPACK_IMPORTED_MODULE_1__[\"renderBlock\"])(this.$op.imgList, this.$op.type, this.$dom)\r\n                break;\r\n\r\n        }\r\n\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (render);\n\n//# sourceURL=webpack:///./src/core/render.js?");

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

/***/ "./src/typeBlock/eventBlock.js":
/*!*************************************!*\
  !*** ./src/typeBlock/eventBlock.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderBlock */ \"./src/typeBlock/renderBlock.js\");\n\r\n\r\nfunction eventBlock(CSwiper) {\r\n    let that = CSwiper\r\n\r\n    that.$el.addEventListener('animationend', animationend.bind(that))\r\n\r\n    that.__proto__.onNext = function () {\r\n        if (this.$data.transition) return\r\n        this.$data.transition = true\r\n        //\r\n        if (!this.$data.cssAnimation) this.$data.cssIndex = Object(_renderBlock__WEBPACK_IMPORTED_MODULE_0__[\"cssAnimation\"])(this.$op.type)\r\n\r\n\r\n        // \r\n        let oldNum = this.$num\r\n        //\r\n        if (this.$num < this.$dom.lis.length - 1) {\r\n            this.$num++\r\n        } else {\r\n            this.$num = 0\r\n        }\r\n        // \r\n        this.$data.active = this.$dom.lis[this.$num].el\r\n        this.$data.oldActive = this.$dom.lis[oldNum].el\r\n        // \r\n        this.$data.cssIndex = Object(_renderBlock__WEBPACK_IMPORTED_MODULE_0__[\"actionBlock\"])(this.$dom.mask, this.$op.imgList[this.$num], this.$op.type)\r\n\r\n    }\r\n\r\n    that.__proto__.onPrev = function () {\r\n        if (this.$data.transition) return\r\n        this.$data.transition = true\r\n        //\r\n        if (!this.$data.cssAnimation) this.$data.cssIndex = Object(_renderBlock__WEBPACK_IMPORTED_MODULE_0__[\"cssAnimation\"])(this.$op.type)\r\n        // \r\n        let oldNum = this.$num\r\n        //\r\n        if (this.$num > 0) {\r\n            this.$num--\r\n        } else {\r\n            this.$num = this.$dom.lis.length - 1\r\n        }\r\n        // \r\n        this.$data.active = this.$dom.lis[this.$num].el\r\n        this.$data.oldActive = this.$dom.lis[oldNum].el\r\n        // \r\n        this.$data.cssIndex = Object(_renderBlock__WEBPACK_IMPORTED_MODULE_0__[\"actionBlock\"])(this.$dom.mask, this.$op.imgList[this.$num], this.$op.type)\r\n    }\r\n\r\n    that.__proto__.onChange = function (num) {\r\n        if (num >= 0 && num <= this.$dom.lis.length - 1 && num != this.$num) {\r\n            if (this.$data.transition) return\r\n            this.$data.transition = true\r\n            if (!this.$data.cssAnimation) this.$data.cssIndex = Object(_renderBlock__WEBPACK_IMPORTED_MODULE_0__[\"cssAnimation\"])(this.$op.type)\r\n            let oldNum = this.$num\r\n            this.$num = num\r\n            // \r\n            this.$data.active = this.$dom.lis[this.$num].el\r\n            this.$data.oldActive = this.$dom.lis[oldNum].el\r\n            console.log(this.$data)\r\n\r\n            // \r\n            this.$data.cssIndex = Object(_renderBlock__WEBPACK_IMPORTED_MODULE_0__[\"actionBlock\"])(this.$dom.mask, this.$op.imgList[this.$num], this.$op.type)\r\n        }\r\n    }\r\n\r\n    that.__proto__.remove = function () {\r\n        that.el.removeEventListener('animationend', animationend.bind(that))\r\n        let CSSStyleSheet = document.styleSheets[0]\r\n        CSSStyleSheet.deleteRule(that.$data.cssAnimation)\r\n    }\r\n\r\n\r\n}\r\n\r\n\r\nfunction animationend(ev) {\r\n    ev.stopPropagation()\r\n    if (!this.$data.transition) return\r\n    // 当最后一个元素执行完毕\r\n    let elNum = Number(ev.target.getAttribute('data-index'))\r\n    let len = this.$op.type.rows * this.$op.type.cols - 1\r\n    //\r\n    if (elNum === len) {\r\n\r\n        this.$data.transition = false\r\n\r\n        this.$data.oldActive.style.visibility = 'hidden'\r\n        this.$data.active.style.visibility = ''\r\n\r\n        // 初始化mask\r\n        Object(_renderBlock__WEBPACK_IMPORTED_MODULE_0__[\"initBlock\"])(this.$dom.mask)\r\n    }\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (eventBlock);\n\n//# sourceURL=webpack:///./src/typeBlock/eventBlock.js?");

/***/ }),

/***/ "./src/typeBlock/renderBlock.js":
/*!**************************************!*\
  !*** ./src/typeBlock/renderBlock.js ***!
  \**************************************/
/*! exports provided: renderBlock, initBlock, actionBlock, cssAnimation, deteteAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderBlock\", function() { return renderBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initBlock\", function() { return initBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actionBlock\", function() { return actionBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cssAnimation\", function() { return cssAnimation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deteteAnimation\", function() { return deteteAnimation; });\n/**\r\n * @name    添加image\r\n * @param   {Array}     imgList\r\n * @param   {Object}    type\r\n * @param   {Object}    lis \r\n * @return  {Object}    返回this.$dom\r\n */\r\nfunction renderBlock(imgList, type, dom) {\r\n    return renderLis(imgList, type, dom)\r\n}\r\n/**\r\n * @param   {Array}     imgList\r\n * @param   {Object}    type\r\n * @param   {Object}    dom\r\n * @return  {Object}    $dom \r\n */\r\nfunction renderLis(imgList, type, dom) {\r\n    let $imgList = imgList\r\n    let $dom = dom\r\n    $dom.mask = {}\r\n    // dom = {\r\n    //     el:null,\r\n    //     ul:null,\r\n    //     lis:[],\r\n    //     mask:{\r\n    //         el:null,\r\n    //         block:[]\r\n    //     }\r\n    // }\r\n    // ul\r\n    $dom.ul = document.createElement('div')\r\n    $dom.ul.setAttribute('style', 'width:100%;height:100%;position:relative;overflow:hidden;')\r\n    //\r\n    // li\r\n    $dom.lis = $imgList.map((src, index) => {\r\n        let actionStyle = `width:100%;\r\n        height:100%;\r\n        position:absolute;\r\n        top :0px;\r\n        left:0px;\r\n        display:flex;\r\n        flex-wrap:wrap;\r\n        background-image:url(${src});\r\n        background-size:100% 100%`\r\n        let style = `visibility:hidden;\r\n        width:100%;\r\n        height:100%;\r\n        position:absolute;\r\n        top:0px;\r\n        left:0px;\r\n        display:flex;\r\n        flex-wrap:wrap;\r\n        background-image:url(${src});\r\n        background-size:100% 100%`               // width height 100%\r\n        // create\r\n        let li = document.createElement('div')\r\n        // 标注序号\r\n        li.setAttribute('data-num', index)\r\n        // style\r\n        // display\r\n        if (index === 0) {\r\n            li.setAttribute('style', actionStyle)\r\n        } else {\r\n            li.setAttribute('style', style)\r\n        }\r\n\r\n        // createImg\r\n        let liObj = {\r\n            el: li,\r\n            src: src,\r\n            child: []\r\n        }\r\n        // appchild\r\n        $dom.ul.appendChild(li)\r\n\r\n        return liObj\r\n    })\r\n    // mask\r\n    $dom.mask.el = document.createElement('div')\r\n    $dom.mask.el.setAttribute('style', `width:100%;height:100%;position:absolute;top:0px;left:-100%;display:flex;flex-wrap:wrap;`)\r\n    $dom.ul.appendChild($dom.mask.el)\r\n    // block\r\n    $dom.mask.block = renderMaskBlock(type, $dom.mask)\r\n\r\n\r\n    // render \r\n    $dom.el.appendChild($dom.ul)\r\n\r\n    return $dom\r\n}\r\n\r\nfunction renderMaskBlock(type, mask) {\r\n    let block = []\r\n    let $type = type\r\n    let $mask = mask\r\n    let index = 0\r\n\r\n    for (let r = 0; r < $type.rows; r++) {\r\n        for (let c = 0; c < $type.cols; c++) {\r\n            let style = `width:${100 / $type.rows}%;\r\n            height:${100 / $type.cols}%;\r\n            background-image:'';\r\n            background-size:${100 * $type.rows}% ${100 * $type.cols}%;\r\n            background-position:${100 * c / ($type.rows - 1)}% ${100 * r / ($type.cols - 1)}%`\r\n\r\n            let div = document.createElement('div')\r\n            // data-row data-col data-index\r\n            div.setAttribute('data-row', r)\r\n            div.setAttribute('data-col', c)\r\n            div.setAttribute('data-index', index)\r\n            // style\r\n            div.setAttribute('style', style)\r\n            // appendChild\r\n            $mask.el.appendChild(div)\r\n            block.push(div)\r\n\r\n            // index\r\n            index++\r\n        }\r\n    }\r\n\r\n\r\n\r\n    return block\r\n}\r\n// 初始化\r\nfunction initBlock(mask) {\r\n    let $mask = mask\r\n\r\n    $mask.block.forEach(ele => {\r\n        ele.style.backgroundImage = ''\r\n        ele.style.animation = ''\r\n    });\r\n\r\n}\r\n// 执行动画移入\r\n/**\r\n * @name  执行动画移入\r\n * @param {Object} mask \r\n * @param {String} imgSrc \r\n * @return {Number} 返回css动画列表索引\r\n */\r\nfunction actionBlock(mask, imgSrc, type) {\r\n    let $mask = mask\r\n    let $imgSrc = imgSrc\r\n\r\n    $mask.block.forEach((ele, index) => {\r\n        let row = ele.getAttribute('data-row')\r\n        let col = ele.getAttribute('data-col')\r\n        ele.style.backgroundImage = `url(${$imgSrc})`\r\n        if (row == 0 && col == 0) {\r\n            ele.style.animation = `blockAnimation 1s ${0.1 * col * row}s forwards`\r\n        } else if (row == 0) {\r\n            ele.style.animation = `blockAnimation 1s ${0.1 * col}s forwards`\r\n        } else if (col == 0) {\r\n            ele.style.animation = `blockAnimation 1s ${0.1 * row}s forwards`\r\n        } else {\r\n            ele.style.animation = `blockAnimation 1s ${0.1 * col * row}s forwards`\r\n        }\r\n\r\n\r\n\r\n    })\r\n\r\n\r\n}\r\n\r\nfunction cssAnimation(type) {\r\n    let keyframes = `@keyframes blockAnimation {\r\n        0% {transform:translate3d(0px,0px,0px)}\r\n        70% {transform:translate3d(${100 * type.rows + 50}%, 50% ,0px)}\r\n        100% {transform:translate3d(${100 * type.rows}%, 0px,0px)}\r\n    } `\r\n\r\n    // 插入动画\r\n    let CSSStyleSheet = document.styleSheets[0]\r\n    let cssIndex = CSSStyleSheet.insertRule(keyframes)\r\n    return cssIndex\r\n}\r\n\r\nfunction deteteAnimation(cssIndex) {\r\n    let CSSStyleSheet = document.styleSheets[0]\r\n    CSSStyleSheet.deteteRule(cssIndex)\r\n}\r\n\r\n \n\n//# sourceURL=webpack:///./src/typeBlock/renderBlock.js?");

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

/***/ })

/******/ });