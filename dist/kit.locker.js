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
/******/ 	__webpack_require__.p = "/Users/andrejponomarenko/Projects/kit.locker/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dev/kit.locker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev/kit.locker.css":
/*!****************************!*\
  !*** ./dev/kit.locker.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./dev/kit.locker.css?");

/***/ }),

/***/ "./dev/kit.locker.js":
/*!***************************!*\
  !*** ./dev/kit.locker.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./kit.locker.css */ \"./dev/kit.locker.css\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * UI Kit Locker v1.0.0\n * Copyright 2017-2019 Andrey Ponomarenko\n * Licensed under  ()\n */\n\n// ======================= MODEL ============================\n\nif (!document.kit) document.kit = {};\nif (!document.kit.locker) document.kit.locker = {};\nwindow.kit = document.kit;\n\n// == Инициализация ==\n\n// == Опции ==\n\n// == Методы окна ==\n\n// == Глобальные методы ==\n\n// == Коллбеки ==\n\n// == Полезные параметры ==\n\n// =Дополнительное=\n// Если у вас есть fixed элементы, нужно повесить класс\n//\n\nvar KitLocker = function KitLocker(id) {\n\tvar _this = this;\n\n\t_classCallCheck(this, KitLocker);\n\n\tthis.lock = function () {\n\t\tif (isScroll()) lockScroll(_this);\n\t};\n\n\tthis.unlock = function () {\n\t\tif (_this.active) releaseScroll(_this);\n\t};\n\n\tthis.id = id;\n\tthis.lockKeys = [32, 33, 34, 35, 36, 37, 38, 39, 40];\n\tthis.active = false;\n};\n\ndocument.kit.locker.createLocker = function (params) {\n\tif (document.kit.locker['instance']) return new Error('Kit Locker already exist');\n\tvar l = new KitLocker('locker');\n\tdocument.kit.locker['instance'] = l;\n\tif (params) Object.assign(l, params);\n\tl.overlay = createOverlay('kit-locker-overlay');\n\tl.fixed = document.querySelectorAll('.kit-set-fixed');\n\tdocument.kit.locker.lock = l.lock;\n\tdocument.kit.locker.unlock = l.unlock;\n};\n\nfunction createOverlay(className) {\n\tdocument.body.insertAdjacentHTML('afterbegin', '<div class=\"' + className + ' kit-none\"></div>');\n\treturn document.querySelector('.' + className);\n}\n\nfunction lockScroll(obj) {\n\tvar d = document.documentElement,\n\t    width = d.offsetWidth;\n\tdocument.addEventListener('touchmove', preventDefault, { passive: false });\n\tdocument.addEventListener('gesturechange', preventDefault);\n\tdocument.addEventListener('keydown', preventKeys.bind(obj));\n\td.kitAddClass('kit-locker-document');\n\tobj.overlay.kitAddClass('kit-locker-overlay-scroll');\n\tobj.overlay.kitRemoveClass('kit-none');\n\tvar padding = d.offsetWidth - width + 'px';\n\td.style.paddingRight = padding;\n\tObject.keys(obj.fixed).forEach(function (t) {\n\t\tobj.fixed[t].style.paddingRight = padding;\n\t});\n\tobj.active = true;\n}\n\nfunction releaseScroll(obj) {\n\tvar d = document.documentElement;\n\tdocument.removeEventListener('touchmove', preventDefault, { passive: false });\n\tdocument.removeEventListener('gesturechange', preventDefault);\n\tdocument.removeEventListener('keydown', preventKeys.bind(obj));\n\td.style.paddingRight = '';\n\tObject.keys(obj.fixed).forEach(function (t) {\n\t\treturn obj.fixed[t].style.paddingRight = '';\n\t});\n\td.kitRemoveClass('kit-locker-document');\n\tobj.overlay.kitRemoveClass('kit-locker-overlay-scroll');\n\tobj.overlay.kitAddClass('kit-none');\n\tobj.active = false;\n}\n\nfunction preventDefault(e) {\n\te.preventDefault ? e.preventDefault() : e.returnValue = false;\n}\n\nfunction isScroll() {\n\treturn parseInt(window.getComputedStyle(document.documentElement, null).height) >= window.innerHeight;\n}\nfunction preventKeys(e) {\n\tif (this.lockKeys.indexOf(e.keyCode) >= 0) {\n\t\tpreventDefault(e);\n\t}\n}\n\nElement.prototype.kitAddClass = function (classN) {\n\tif (!this.kitHasClass(classN)) this.className += \" \" + classN;\n\treturn this;\n};\n\nElement.prototype.kitRemoveClass = function (classN) {\n\tthis.kitHasClass(classN) ? this.className = this.className.replace(new RegExp('[\\\\s]{0,1}\\\\b' + classN + '\\\\b', \"g\"), \"\") : false;\n\treturn this;\n};\n\nElement.prototype.kitHasClass = function (classN) {\n\treturn this.className.indexOf(classN) >= 0;\n};\n\n//# sourceURL=webpack:///./dev/kit.locker.js?");

/***/ })

/******/ });