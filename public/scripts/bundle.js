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

var _Vase = __webpack_require__(7);

var _Vase2 = _interopRequireDefault(_Vase);

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
        this.box.open();
        this.vase = new _Vase2.default('.game .vase');
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
    }

    _createClass(Box, [{
        key: 'fixSizes',
        value: function fixSizes() {
            this.openBoxImage.style.width = this.closeBoxImage.offsetWidth * (464 / 300) + 'px';
            this.openBoxImage.style.marginLeft = this.closeBoxImage.offsetWidth / -200 + 'px';
        }
    }, {
        key: 'open',
        value: function open() {
            this.fixSizes();
            this.container.classList.add('open');
        }
    }, {
        key: 'close',
        value: function close() {
            this.fixSizes();
            this.container.classList.remove('open');
        }
    }]);

    return Box;
}();

exports.default = Box;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vaseEvolutionQueue = ['empty', 'soiled', 'seeded', 'filled', 'wet', 'green'];

var Vase = function () {
    function Vase(query) {
        _classCallCheck(this, Vase);

        this.container = $(query);
        this.state = 'empty';
    }

    _createClass(Vase, [{
        key: 'next',
        value: function next() {
            var nextIndex = vaseEvolutionQueue.indexOf(this.state) + 1;
            this.state = vaseEvolutionQueue[Math.min(nextIndex, vaseEvolutionQueue.length - 1)];
        }
    }, {
        key: 'state',
        set: function set(to) {
            this._state = to;
            this.container.setAttribute('data-state', to);
        },
        get: function get() {
            return this._state;
        }
    }]);

    return Vase;
}();

exports.default = Vase;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTczNjM1ZmJlOTZmMjY4YWFjNDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm94LmpzIiwid2VicGFjazovLy8uL3NyYy9WYXNlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIiQiLCJxdWVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsIkFwcCIsImltYWdlc0xvYWRlciIsInJlYWR5IiwiYmluZCIsImJveCIsIm9wZW4iLCJ2YXNlIiwiYXBwIiwiaW1hZ2VzIiwiSW1hZ2VMb2FkZXIiLCJ1cmwiLCJvbmRvbmUiLCJsb2FkZWRDb3VudCIsIm5hbWUiLCJsb2FkIiwiYWRkcmVzcyIsImltYWdlIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsIm9ubG9hZCIsImxlbmd0aCIsIkJveCIsImNvbnRhaW5lciIsIm9wZW5Cb3hJbWFnZSIsImNsb3NlQm94SW1hZ2UiLCJzdHlsZSIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJtYXJnaW5MZWZ0IiwiZml4U2l6ZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ2YXNlRXZvbHV0aW9uUXVldWUiLCJWYXNlIiwic3RhdGUiLCJuZXh0SW5kZXgiLCJpbmRleE9mIiwiTWF0aCIsIm1pbiIsInRvIiwiX3N0YXRlIiwic2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FB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QkFBS0UsUUFBTDtBQUNBLGlCQUFLUCxTQUFMLENBQWVRLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLE1BQTdCO0FBQ0g7OztnQ0FDUTtBQUNMLGlCQUFLRixRQUFMO0FBQ0EsaUJBQUtQLFNBQUwsQ0FBZVEsU0FBZixDQUF5QkUsTUFBekIsQ0FBZ0MsTUFBaEM7QUFDSDs7Ozs7O2tCQUdVWCxHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCZixJQUFNWSxxQkFBcUIsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixRQUFwQixFQUE4QixRQUE5QixFQUF3QyxLQUF4QyxFQUErQyxPQUEvQyxDQUEzQjs7SUFFTUMsSTtBQUNGLGtCQUFhdkMsS0FBYixFQUFvQjtBQUFBOztBQUNoQixhQUFLMkIsU0FBTCxHQUFpQjVCLEVBQUVDLEtBQUYsQ0FBakI7QUFDQSxhQUFLd0MsS0FBTCxHQUFhLE9BQWI7QUFDSDs7OzsrQkFRTztBQUNKLGdCQUFNQyxZQUFZSCxtQkFBbUJJLE9BQW5CLENBQTJCLEtBQUtGLEtBQWhDLElBQXlDLENBQTNEO0FBQ0EsaUJBQUtBLEtBQUwsR0FBYUYsbUJBQW1CSyxLQUFLQyxHQUFMLENBQVNILFNBQVQsRUFBb0JILG1CQUFtQmIsTUFBbkIsR0FBNEIsQ0FBaEQsQ0FBbkIsQ0FBYjtBQUNIOzs7MEJBVlVvQixFLEVBQUk7QUFDWCxpQkFBS0MsTUFBTCxHQUFjRCxFQUFkO0FBQ0EsaUJBQUtsQixTQUFMLENBQWVvQixZQUFmLENBQTRCLFlBQTVCLEVBQTBDRixFQUExQztBQUNILFM7NEJBQ1k7QUFDVCxtQkFBTyxLQUFLQyxNQUFaO0FBQ0g7Ozs7OztrQkFPVVAsSSIsImZpbGUiOiIuL3B1YmxpYy9zY3JpcHRzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE3MzYzNWZiZTk2ZjI2OGFhYzQ2IiwiaW1wb3J0IEltYWdlTG9hZGVyIGZyb20gJy4vSW1hZ2VMb2FkZXInXHJcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnXHJcbmltcG9ydCBWYXNlIGZyb20gJy4vVmFzZSdcclxuXHJcbndpbmRvdy4kID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KVxyXG53aW5kb3cuJCQgPSAocXVlcnkpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpXHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzTG9hZGVyID0gbmV3IEltYWdlTG9hZGVyKCcuL2Fzc2V0cy9pbWFnZXMnLCB0aGlzLnJlYWR5LmJpbmQodGhpcykpXHJcbiAgICAgICAgdGhpcy5ib3ggPSBuZXcgQm94KCcuZ2FtZSAuYm94JylcclxuICAgICAgICB0aGlzLmJveC5vcGVuKClcclxuICAgICAgICB0aGlzLnZhc2UgPSBuZXcgVmFzZSgnLmdhbWUgLnZhc2UnKVxyXG4gICAgfVxyXG4gICAgcmVhZHkgKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQXBwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiY29uc3QgaW1hZ2VzID0gWydib3gtY2xvc2UucG5nJywgJ2JveC1vcGVuLnBuZycsICdkZXNrLnN2ZycsICdlbXB0eS12YXNlLnBuZycsICdmaWxsZWQtdmFzZS5wbmcnLCAnZ2xhc3Nlcy10aWx0ZWQucG5nJywgJ2dsYXNzZXMucG5nJywgJ2lwaG9uZS5wbmcnLCAncGxhbnQucG5nJywgJ3NlZWQucG5nJywgJ3NlZWRlZC12YXNlLnBuZycsICdzb2lsLnBuZycsICdzb2lsZWQtdmFzZS5wbmcnLCAnd2V0LXZhc2UucG5nJ11cclxuXHJcbmNsYXNzIEltYWdlTG9hZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yICh1cmwsIG9uZG9uZSkge1xyXG4gICAgICAgIHRoaXMub25kb25lID0gb25kb25lXHJcbiAgICAgICAgdGhpcy5sb2FkZWRDb3VudCA9IDBcclxuICAgICAgICBmb3IgKGxldCBuYW1lIG9mIGltYWdlcykgdGhpcy5sb2FkKHVybCArICcvJyArIG5hbWUpXHJcbiAgICB9XHJcbiAgICBsb2FkIChhZGRyZXNzKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGltYWdlLnNyYyA9IGFkZHJlc3NcclxuICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVkQ291bnQrK1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2FkZWRDb3VudCA9PT0gaW1hZ2VzLmxlbmd0aCAmJiB0aGlzLm9uZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmRvbmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUxvYWRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbWFnZUxvYWRlci5qcyIsImNsYXNzIEJveCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpXHJcbiAgICAgICAgdGhpcy5vcGVuQm94SW1hZ2UgPSAkKHF1ZXJ5ICsgJyAub3BlbicpXHJcbiAgICAgICAgdGhpcy5jbG9zZUJveEltYWdlID0gJChxdWVyeSArICcgLmNsb3NlJylcclxuICAgIH1cclxuICAgIGZpeFNpemVzICgpIHtcclxuICAgICAgICB0aGlzLm9wZW5Cb3hJbWFnZS5zdHlsZS53aWR0aCA9ICh0aGlzLmNsb3NlQm94SW1hZ2Uub2Zmc2V0V2lkdGggKiAoNDY0IC8gMzAwKSkgKyAncHgnXHJcbiAgICAgICAgdGhpcy5vcGVuQm94SW1hZ2Uuc3R5bGUubWFyZ2luTGVmdCA9ICh0aGlzLmNsb3NlQm94SW1hZ2Uub2Zmc2V0V2lkdGggLyAtMjAwKSArICdweCdcclxuICAgIH1cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHRoaXMuZml4U2l6ZXMoKVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKVxyXG4gICAgfVxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMuZml4U2l6ZXMoKVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQm94LmpzIiwiY29uc3QgdmFzZUV2b2x1dGlvblF1ZXVlID0gWydlbXB0eScsICdzb2lsZWQnLCAnc2VlZGVkJywgJ2ZpbGxlZCcsICd3ZXQnLCAnZ3JlZW4nXVxyXG5cclxuY2xhc3MgVmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdlbXB0eSdcclxuICAgIH1cclxuICAgIHNldCBzdGF0ZSAodG8pIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHRvXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgdG8pXHJcbiAgICB9XHJcbiAgICBnZXQgc3RhdGUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZVxyXG4gICAgfVxyXG4gICAgbmV4dCAoKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gdmFzZUV2b2x1dGlvblF1ZXVlLmluZGV4T2YodGhpcy5zdGF0ZSkgKyAxXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHZhc2VFdm9sdXRpb25RdWV1ZVtNYXRoLm1pbihuZXh0SW5kZXgsIHZhc2VFdm9sdXRpb25RdWV1ZS5sZW5ndGggLSAxKV1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFzZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9WYXNlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==