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
            var areaDistFromTop = this.closeBoxImage.offsetWidth * (11 / 28);
            $('.game > .area').style.top = areaDistFromTop + 'px';
            $('.game > .area').style.height = window.innerHeight - areaDistFromTop + 'px';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmQ2NTIwM2EwNjU5YmExMDZkZDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm94LmpzIiwid2VicGFjazovLy8uL3NyYy9WYXNlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIiQiLCJxdWVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsIkFwcCIsImltYWdlc0xvYWRlciIsInJlYWR5IiwiYmluZCIsImJveCIsIm9wZW4iLCJ2YXNlIiwiYXBwIiwiaW1hZ2VzIiwiSW1hZ2VMb2FkZXIiLCJ1cmwiLCJvbmRvbmUiLCJsb2FkZWRDb3VudCIsIm5hbWUiLCJsb2FkIiwiYWRkcmVzcyIsImltYWdlIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsIm9ubG9hZCIsImxlbmd0aCIsIkJveCIsImNvbnRhaW5lciIsIm9wZW5Cb3hJbWFnZSIsImNsb3NlQm94SW1hZ2UiLCJzdHlsZSIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJtYXJnaW5MZWZ0IiwiYXJlYURpc3RGcm9tVG9wIiwidG9wIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJmaXhTaXplcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInZhc2VFdm9sdXRpb25RdWV1ZSIsIlZhc2UiLCJzdGF0ZSIsIm5leHRJbmRleCIsImluZGV4T2YiLCJNYXRoIiwibWluIiwidG8iLCJfc3RhdGUiLCJzZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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WUFBZixDQUE0QixZQUE1QixFQUEwQ0YsRUFBMUM7QUFDSCxTOzRCQUNZO0FBQ1QsbUJBQU8sS0FBS0MsTUFBWjtBQUNIOzs7Ozs7a0JBT1VQLEkiLCJmaWxlIjoiLi9wdWJsaWMvc2NyaXB0cy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmZDY1MjAzYTA2NTliYTEwNmRkMiIsImltcG9ydCBJbWFnZUxvYWRlciBmcm9tICcuL0ltYWdlTG9hZGVyJ1xyXG5pbXBvcnQgQm94IGZyb20gJy4vQm94J1xyXG5pbXBvcnQgVmFzZSBmcm9tICcuL1Zhc2UnXHJcblxyXG53aW5kb3cuJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSlcclxud2luZG93LiQkID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KVxyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmltYWdlc0xvYWRlciA9IG5ldyBJbWFnZUxvYWRlcignLi9hc3NldHMvaW1hZ2VzJywgdGhpcy5yZWFkeS5iaW5kKHRoaXMpKVxyXG4gICAgICAgIHRoaXMuYm94ID0gbmV3IEJveCgnLmdhbWUgLmJveCcpXHJcbiAgICAgICAgdGhpcy5ib3gub3BlbigpXHJcbiAgICAgICAgdGhpcy52YXNlID0gbmV3IFZhc2UoJy5nYW1lIC52YXNlJylcclxuICAgIH1cclxuICAgIHJlYWR5ICgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImNvbnN0IGltYWdlcyA9IFsnYm94LWNsb3NlLnBuZycsICdib3gtb3Blbi5wbmcnLCAnZGVzay5zdmcnLCAnZW1wdHktdmFzZS5wbmcnLCAnZmlsbGVkLXZhc2UucG5nJywgJ2dsYXNzZXMtdGlsdGVkLnBuZycsICdnbGFzc2VzLnBuZycsICdpcGhvbmUucG5nJywgJ3BsYW50LnBuZycsICdzZWVkLnBuZycsICdzZWVkZWQtdmFzZS5wbmcnLCAnc29pbC5wbmcnLCAnc29pbGVkLXZhc2UucG5nJywgJ3dldC12YXNlLnBuZyddXHJcblxyXG5jbGFzcyBJbWFnZUxvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAodXJsLCBvbmRvbmUpIHtcclxuICAgICAgICB0aGlzLm9uZG9uZSA9IG9uZG9uZVxyXG4gICAgICAgIHRoaXMubG9hZGVkQ291bnQgPSAwXHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBpbWFnZXMpIHRoaXMubG9hZCh1cmwgKyAnLycgKyBuYW1lKVxyXG4gICAgfVxyXG4gICAgbG9hZCAoYWRkcmVzcykge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBpbWFnZS5zcmMgPSBhZGRyZXNzXHJcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlZENvdW50KytcclxuICAgICAgICAgICAgaWYgKHRoaXMubG9hZGVkQ291bnQgPT09IGltYWdlcy5sZW5ndGggJiYgdGhpcy5vbmRvbmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25kb25lKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VMb2FkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW1hZ2VMb2FkZXIuanMiLCJjbGFzcyBCb3gge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KVxyXG4gICAgICAgIHRoaXMub3BlbkJveEltYWdlID0gJChxdWVyeSArICcgLm9wZW4nKVxyXG4gICAgICAgIHRoaXMuY2xvc2VCb3hJbWFnZSA9ICQocXVlcnkgKyAnIC5jbG9zZScpXHJcbiAgICB9XHJcbiAgICBmaXhTaXplcyAoKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuQm94SW1hZ2Uuc3R5bGUud2lkdGggPSAodGhpcy5jbG9zZUJveEltYWdlLm9mZnNldFdpZHRoICogKDQ2NCAvIDMwMCkpICsgJ3B4J1xyXG4gICAgICAgIHRoaXMub3BlbkJveEltYWdlLnN0eWxlLm1hcmdpbkxlZnQgPSAodGhpcy5jbG9zZUJveEltYWdlLm9mZnNldFdpZHRoIC8gLTIwMCkgKyAncHgnXHJcbiAgICAgICAgY29uc3QgYXJlYURpc3RGcm9tVG9wID0gKHRoaXMuY2xvc2VCb3hJbWFnZS5vZmZzZXRXaWR0aCAqICgxMSAvIDI4KSlcclxuICAgICAgICAkKCcuZ2FtZSA+IC5hcmVhJykuc3R5bGUudG9wID0gYXJlYURpc3RGcm9tVG9wICsgJ3B4J1xyXG4gICAgICAgICQoJy5nYW1lID4gLmFyZWEnKS5zdHlsZS5oZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC0gYXJlYURpc3RGcm9tVG9wKSArICdweCdcclxuICAgIH1cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHRoaXMuZml4U2l6ZXMoKVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKVxyXG4gICAgfVxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMuZml4U2l6ZXMoKVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQm94LmpzIiwiY29uc3QgdmFzZUV2b2x1dGlvblF1ZXVlID0gWydlbXB0eScsICdzb2lsZWQnLCAnc2VlZGVkJywgJ2ZpbGxlZCcsICd3ZXQnLCAnZ3JlZW4nXVxyXG5cclxuY2xhc3MgVmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdlbXB0eSdcclxuICAgIH1cclxuICAgIHNldCBzdGF0ZSAodG8pIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHRvXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgdG8pXHJcbiAgICB9XHJcbiAgICBnZXQgc3RhdGUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZVxyXG4gICAgfVxyXG4gICAgbmV4dCAoKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gdmFzZUV2b2x1dGlvblF1ZXVlLmluZGV4T2YodGhpcy5zdGF0ZSkgKyAxXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHZhc2VFdm9sdXRpb25RdWV1ZVtNYXRoLm1pbihuZXh0SW5kZXgsIHZhc2VFdm9sdXRpb25RdWV1ZS5sZW5ndGggLSAxKV1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFzZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9WYXNlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==