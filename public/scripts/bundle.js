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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjU5YTUyODI4Nzg0MTFlODc5NzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm94LmpzIiwid2VicGFjazovLy8uL3NyYy9WYXNlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIiQiLCJxdWVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsIkFwcCIsImltYWdlc0xvYWRlciIsInJlYWR5IiwiYmluZCIsImJveCIsInZhc2UiLCJhcHAiLCJpbWFnZXMiLCJJbWFnZUxvYWRlciIsInVybCIsIm9uZG9uZSIsImxvYWRlZENvdW50IiwibmFtZSIsImxvYWQiLCJhZGRyZXNzIiwiaW1hZ2UiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwib25sb2FkIiwibGVuZ3RoIiwiQm94IiwiY29udGFpbmVyIiwib3BlbkJveEltYWdlIiwiY2xvc2VCb3hJbWFnZSIsInN0eWxlIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsIm1hcmdpbkxlZnQiLCJmaXhTaXplcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInZhc2VFdm9sdXRpb25RdWV1ZSIsIlZhc2UiLCJzdGF0ZSIsIm5leHRJbmRleCIsImluZGV4T2YiLCJNYXRoIiwibWluIiwidG8iLCJfc3RhdGUiLCJzZXRBdHRyaWJ1dGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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U0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsTUFBN0I7QUFDSDs7O2dDQUNRO0FBQ0wsaUJBQUtGLFFBQUw7QUFDQSxpQkFBS1AsU0FBTCxDQUFlUSxTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxNQUFoQztBQUNIOzs7Ozs7a0JBR1VYLEc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJmLElBQU1ZLHFCQUFxQixDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLFFBQXBCLEVBQThCLFFBQTlCLEVBQXdDLEtBQXhDLEVBQStDLE9BQS9DLENBQTNCOztJQUVNQyxJO0FBQ0Ysa0JBQWF0QyxLQUFiLEVBQW9CO0FBQUE7O0FBQ2hCLGFBQUswQixTQUFMLEdBQWlCM0IsRUFBRUMsS0FBRixDQUFqQjtBQUNBLGFBQUt1QyxLQUFMLEdBQWEsT0FBYjtBQUNIOzs7OytCQVFPO0FBQ0osZ0JBQU1DLFlBQVlILG1CQUFtQkksT0FBbkIsQ0FBMkIsS0FBS0YsS0FBaEMsSUFBeUMsQ0FBM0Q7QUFDQSxpQkFBS0EsS0FBTCxHQUFhRixtQkFBbUJLLEtBQUtDLEdBQUwsQ0FBU0gsU0FBVCxFQUFvQkgsbUJBQW1CYixNQUFuQixHQUE0QixDQUFoRCxDQUFuQixDQUFiO0FBQ0g7OzswQkFWVW9CLEUsRUFBSTtBQUNYLGlCQUFLQyxNQUFMLEdBQWNELEVBQWQ7QUFDQSxpQkFBS2xCLFNBQUwsQ0FBZW9CLFlBQWYsQ0FBNEIsWUFBNUIsRUFBMENGLEVBQTFDO0FBQ0gsUzs0QkFDWTtBQUNULG1CQUFPLEtBQUtDLE1BQVo7QUFDSDs7Ozs7O2tCQU9VUCxJIiwiZmlsZSI6Ii4vcHVibGljL3NjcmlwdHMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjU5YTUyODI4Nzg0MTFlODc5NzAiLCJpbXBvcnQgSW1hZ2VMb2FkZXIgZnJvbSAnLi9JbWFnZUxvYWRlcidcclxuaW1wb3J0IEJveCBmcm9tICcuL0JveCdcclxuaW1wb3J0IFZhc2UgZnJvbSAnLi9WYXNlJ1xyXG5cclxud2luZG93LiQgPSAocXVlcnkpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpXHJcbndpbmRvdy4kJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSlcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZXNMb2FkZXIgPSBuZXcgSW1hZ2VMb2FkZXIoJy4vYXNzZXRzL2ltYWdlcycsIHRoaXMucmVhZHkuYmluZCh0aGlzKSlcclxuICAgICAgICB0aGlzLmJveCA9IG5ldyBCb3goJy5nYW1lIC5ib3gnKVxyXG4gICAgICAgIHRoaXMudmFzZSA9IG5ldyBWYXNlKCcuZ2FtZSAudmFzZScpXHJcbiAgICB9XHJcbiAgICByZWFkeSAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJjb25zdCBpbWFnZXMgPSBbJ2JveC1jbG9zZS5wbmcnLCAnYm94LW9wZW4ucG5nJywgJ2Rlc2suc3ZnJywgJ2VtcHR5LXZhc2UucG5nJywgJ2ZpbGxlZC12YXNlLnBuZycsICdnbGFzc2VzLXRpbHRlZC5wbmcnLCAnZ2xhc3Nlcy5wbmcnLCAnaXBob25lLnBuZycsICdwbGFudC5wbmcnLCAnc2VlZC5wbmcnLCAnc2VlZGVkLXZhc2UucG5nJywgJ3NvaWwucG5nJywgJ3NvaWxlZC12YXNlLnBuZycsICd3ZXQtdmFzZS5wbmcnXVxyXG5cclxuY2xhc3MgSW1hZ2VMb2FkZXIge1xyXG4gICAgY29uc3RydWN0b3IgKHVybCwgb25kb25lKSB7XHJcbiAgICAgICAgdGhpcy5vbmRvbmUgPSBvbmRvbmVcclxuICAgICAgICB0aGlzLmxvYWRlZENvdW50ID0gMFxyXG4gICAgICAgIGZvciAobGV0IG5hbWUgb2YgaW1hZ2VzKSB0aGlzLmxvYWQodXJsICsgJy8nICsgbmFtZSlcclxuICAgIH1cclxuICAgIGxvYWQgKGFkZHJlc3MpIHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gYWRkcmVzc1xyXG4gICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZWRDb3VudCsrXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvYWRlZENvdW50ID09PSBpbWFnZXMubGVuZ3RoICYmIHRoaXMub25kb25lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uZG9uZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlTG9hZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ltYWdlTG9hZGVyLmpzIiwiY2xhc3MgQm94IHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSlcclxuICAgICAgICB0aGlzLm9wZW5Cb3hJbWFnZSA9ICQocXVlcnkgKyAnIC5vcGVuJylcclxuICAgICAgICB0aGlzLmNsb3NlQm94SW1hZ2UgPSAkKHF1ZXJ5ICsgJyAuY2xvc2UnKVxyXG4gICAgfVxyXG4gICAgZml4U2l6ZXMgKCkge1xyXG4gICAgICAgIHRoaXMub3BlbkJveEltYWdlLnN0eWxlLndpZHRoID0gKHRoaXMuY2xvc2VCb3hJbWFnZS5vZmZzZXRXaWR0aCAqICg0NjQgLyAzMDApKSArICdweCdcclxuICAgICAgICB0aGlzLm9wZW5Cb3hJbWFnZS5zdHlsZS5tYXJnaW5MZWZ0ID0gKHRoaXMuY2xvc2VCb3hJbWFnZS5vZmZzZXRXaWR0aCAvIC0yMDApICsgJ3B4J1xyXG4gICAgfVxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5maXhTaXplcygpXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpXHJcbiAgICB9XHJcbiAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5maXhTaXplcygpXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJveFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Cb3guanMiLCJjb25zdCB2YXNlRXZvbHV0aW9uUXVldWUgPSBbJ2VtcHR5JywgJ3NvaWxlZCcsICdzZWVkZWQnLCAnZmlsbGVkJywgJ3dldCcsICdncmVlbiddXHJcblxyXG5jbGFzcyBWYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSlcclxuICAgICAgICB0aGlzLnN0YXRlID0gJ2VtcHR5J1xyXG4gICAgfVxyXG4gICAgc2V0IHN0YXRlICh0bykge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdG9cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCB0bylcclxuICAgIH1cclxuICAgIGdldCBzdGF0ZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlXHJcbiAgICB9XHJcbiAgICBuZXh0ICgpIHtcclxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSB2YXNlRXZvbHV0aW9uUXVldWUuaW5kZXhPZih0aGlzLnN0YXRlKSArIDFcclxuICAgICAgICB0aGlzLnN0YXRlID0gdmFzZUV2b2x1dGlvblF1ZXVlW01hdGgubWluKG5leHRJbmRleCwgdmFzZUV2b2x1dGlvblF1ZXVlLmxlbmd0aCAtIDEpXVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWYXNlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Zhc2UuanMiXSwic291cmNlUm9vdCI6IiJ9