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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ImageLoader = __webpack_require__(1);

var _ImageLoader2 = _interopRequireDefault(_ImageLoader);

var _Box = __webpack_require__(6);

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.$ = function (query) {
    return document.querySelector(query);
};
window.$$ = function (query) {
    return document.querySelectorAll(query);
};

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.imagesLoader = new _ImageLoader2.default('./assets/images', this.ready.bind(this));
        this.box = new _Box2.default('.game .box');
    }

    _createClass(App, [{
        key: 'ready',
        value: function ready() {}
    }]);

    return App;
}();

var app = new App();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var images = ['box-close.png', 'box-open.png', 'desk.svg', 'empty-vase.png', 'filled-vase.png', 'glasses-tilted.png', 'glasses.png', 'iphone.png', 'plant.png', 'seed.png', 'seeded-vase.png', 'soil.png', 'soiled-vase.png', 'wet-vase.png'];

var ImageLoader = function () {
    function ImageLoader(url, ondone) {
        _classCallCheck(this, ImageLoader);

        this.ondone = ondone;
        this.loadedCount = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var name = _step.value;
                this.load(url + '/' + name);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }

    _createClass(ImageLoader, [{
        key: 'load',
        value: function load(address) {
            var _this = this;

            var image = document.createElement('img');
            image.src = address;
            image.onload = function () {
                _this.loadedCount++;
                if (_this.loadedCount === images.length && _this.ondone) {
                    _this.ondone();
                }
            };
        }
    }]);

    return ImageLoader;
}();

exports.default = ImageLoader;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Box = function () {
    function Box(query) {
        _classCallCheck(this, Box);

        this.container = $(query);
        this.openBoxImage = $(query + ' .open');
        this.closeBoxImage = $(query + ' .close');
        this.openBoxImage.style.width = this.closeBoxImage.offsetWidth * (464 / 300) + 'px';
        this.openBoxImage.style.marginLeft = this.closeBoxImage.offsetWidth / -200 + 'px';
        this.container.onclick = this.toggle.bind(this);
    }

    _createClass(Box, [{
        key: 'toggle',
        value: function toggle() {
            this.container.classList.toggle('open');
        }
    }, {
        key: 'open',
        value: function open() {
            this.container.classList.add('open');
        }
    }, {
        key: 'close',
        value: function close() {
            this.container.classList.remove('open');
        }
    }]);

    return Box;
}();

exports.default = Box;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTAyMjIwMGIxZDg2Y2UyYjk2YTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm94LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIiQiLCJxdWVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsIkFwcCIsImltYWdlc0xvYWRlciIsInJlYWR5IiwiYmluZCIsImJveCIsImFwcCIsImltYWdlcyIsIkltYWdlTG9hZGVyIiwidXJsIiwib25kb25lIiwibG9hZGVkQ291bnQiLCJuYW1lIiwibG9hZCIsImFkZHJlc3MiLCJpbWFnZSIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJvbmxvYWQiLCJsZW5ndGgiLCJCb3giLCJjb250YWluZXIiLCJvcGVuQm94SW1hZ2UiLCJjbG9zZUJveEltYWdlIiwic3R5bGUiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwibWFyZ2luTGVmdCIsIm9uY2xpY2siLCJ0b2dnbGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0RBOzs7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QWVTLFNBQWYsQ0FBeUJFLE1BQXpCLENBQWdDLE1BQWhDO0FBQ0g7Ozs7OztrQkFHVVosRyIsImZpbGUiOiIuL3B1YmxpYy9zY3JpcHRzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGUwMjIyMDBiMWQ4NmNlMmI5NmExIiwiaW1wb3J0IEltYWdlTG9hZGVyIGZyb20gJy4vSW1hZ2VMb2FkZXInXHJcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnXHJcblxyXG53aW5kb3cuJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSlcclxud2luZG93LiQkID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KVxyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmltYWdlc0xvYWRlciA9IG5ldyBJbWFnZUxvYWRlcignLi9hc3NldHMvaW1hZ2VzJywgdGhpcy5yZWFkeS5iaW5kKHRoaXMpKVxyXG4gICAgICAgIHRoaXMuYm94ID0gbmV3IEJveCgnLmdhbWUgLmJveCcpXHJcbiAgICB9XHJcbiAgICByZWFkeSAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJjb25zdCBpbWFnZXMgPSBbJ2JveC1jbG9zZS5wbmcnLCAnYm94LW9wZW4ucG5nJywgJ2Rlc2suc3ZnJywgJ2VtcHR5LXZhc2UucG5nJywgJ2ZpbGxlZC12YXNlLnBuZycsICdnbGFzc2VzLXRpbHRlZC5wbmcnLCAnZ2xhc3Nlcy5wbmcnLCAnaXBob25lLnBuZycsICdwbGFudC5wbmcnLCAnc2VlZC5wbmcnLCAnc2VlZGVkLXZhc2UucG5nJywgJ3NvaWwucG5nJywgJ3NvaWxlZC12YXNlLnBuZycsICd3ZXQtdmFzZS5wbmcnXVxyXG5cclxuY2xhc3MgSW1hZ2VMb2FkZXIge1xyXG4gICAgY29uc3RydWN0b3IgKHVybCwgb25kb25lKSB7XHJcbiAgICAgICAgdGhpcy5vbmRvbmUgPSBvbmRvbmVcclxuICAgICAgICB0aGlzLmxvYWRlZENvdW50ID0gMFxyXG4gICAgICAgIGZvciAobGV0IG5hbWUgb2YgaW1hZ2VzKSB0aGlzLmxvYWQodXJsICsgJy8nICsgbmFtZSlcclxuICAgIH1cclxuICAgIGxvYWQgKGFkZHJlc3MpIHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gYWRkcmVzc1xyXG4gICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZWRDb3VudCsrXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvYWRlZENvdW50ID09PSBpbWFnZXMubGVuZ3RoICYmIHRoaXMub25kb25lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uZG9uZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlTG9hZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ltYWdlTG9hZGVyLmpzIiwiY2xhc3MgQm94IHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSlcclxuICAgICAgICB0aGlzLm9wZW5Cb3hJbWFnZSA9ICQocXVlcnkgKyAnIC5vcGVuJylcclxuICAgICAgICB0aGlzLmNsb3NlQm94SW1hZ2UgPSAkKHF1ZXJ5ICsgJyAuY2xvc2UnKVxyXG4gICAgICAgIHRoaXMub3BlbkJveEltYWdlLnN0eWxlLndpZHRoID0gKHRoaXMuY2xvc2VCb3hJbWFnZS5vZmZzZXRXaWR0aCAqICg0NjQgLyAzMDApKSArICdweCdcclxuICAgICAgICB0aGlzLm9wZW5Cb3hJbWFnZS5zdHlsZS5tYXJnaW5MZWZ0ID0gKHRoaXMuY2xvc2VCb3hJbWFnZS5vZmZzZXRXaWR0aCAvIC0yMDApICsgJ3B4J1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLm9uY2xpY2sgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpXHJcbiAgICB9XHJcbiAgICB0b2dnbGUgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKVxyXG4gICAgfVxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpXHJcbiAgICB9XHJcbiAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJveFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Cb3guanMiXSwic291cmNlUm9vdCI6IiJ9