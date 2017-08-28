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

var _Box = __webpack_require__(2);

var _Box2 = _interopRequireDefault(_Box);

var _Vase = __webpack_require__(3);

var _Vase2 = _interopRequireDefault(_Vase);

var _Paper = __webpack_require__(4);

var _Paper2 = _interopRequireDefault(_Paper);

var _Soil = __webpack_require__(5);

var _Soil2 = _interopRequireDefault(_Soil);

var _Seed = __webpack_require__(6);

var _Seed2 = _interopRequireDefault(_Seed);

var _Glasses = __webpack_require__(7);

var _Glasses2 = _interopRequireDefault(_Glasses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.$ = function (query) {
    return document.querySelector(query);
};
window.$$ = function (query) {
    return document.querySelectorAll(query);
};

window.after = function (time, doWhat) {
    return setTimeout(doWhat, time);
};
window.every = function (time, doWhat) {
    return setInterval(doWhat, time);
};

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        this.imagesLoader = new _ImageLoader2.default('./assets/images', this.ready.bind(this));
        this.box = new _Box2.default('.game .box');
        this.vase = new _Vase2.default('.game .vase');
        this.paper = new _Paper2.default('.game .paper', this);
        this.soil = new _Soil2.default('.game .soil');
        this.seed = new _Seed2.default('.game .seed');
        this.glasses = new _Glasses2.default('.game .glasses');
    }

    _createClass(Game, [{
        key: 'ready',
        value: function ready() {
            after(1000, this.unbox.bind(this));
        }
    }, {
        key: 'unbox',
        value: function unbox() {
            var _this = this;

            this.box.open();
            after(200, function () {
                _this.vase.comeOut();
                after(100, function () {
                    _this.paper.comeOut();
                });
                after(3000, function () {
                    _this.paper.next();
                });
            });
        }
    }, {
        key: 'onDone',
        value: function onDone() {
            console.log('Done');
        }
    }]);

    return Game;
}();

window.game = new Game();

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
/* 2 */
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
        window.addEventListener('resize', this.fixSizes.bind(this));
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
/* 3 */
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
        key: 'comeOut',
        value: function comeOut() {
            this.container.classList.add('out');
        }
    }, {
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Paper = function () {
    function Paper(query, game) {
        _classCallCheck(this, Paper);

        this.game = game;
        this.container = $(query);
        this.items = $$(query + ' li');
        console.log(this.items);
        this.itemIndex = 0;
    }

    _createClass(Paper, [{
        key: 'comeOut',
        value: function comeOut() {
            this.container.classList.add('out');
        }
    }, {
        key: 'bold',
        value: function bold() {
            var _this = this;

            this.container.classList.add('bold');
            after(2000, function () {
                _this.container.classList.remove('bold');
            });
        }
    }, {
        key: 'next',
        value: function next() {
            var _this2 = this;

            var duration = this.itemIndex === 0 ? 0 : 1000;
            if (this.itemIndex > 0) this.items[this.itemIndex - 1].classList.add('tick');
            if (this.itemIndex < this.items.length) {
                after(duration, function () {
                    _this2.bold();
                    _this2.items[_this2.itemIndex].classList.add('active');
                    _this2.itemIndex++;
                });
            } else {
                this.game.onDone();
            }
        }
    }]);

    return Paper;
}();

exports.default = Paper;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Soil = function Soil(query) {
    _classCallCheck(this, Soil);

    this.container = $(query);
};

exports.default = Soil;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Seed = function Seed(query) {
    _classCallCheck(this, Seed);

    this.container = $(query);
};

exports.default = Seed;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Glasses = function () {
    function Glasses(query) {
        var _this = this;

        _classCallCheck(this, Glasses);

        this.container = $(query);
        this.container.onmousedown = function () {
            _this.container.classList.toggle('tilt');
        };
    }

    _createClass(Glasses, [{
        key: 'tilt',
        value: function tilt() {
            this.container.classList.add('tilt');
        }
    }, {
        key: 'untilt',
        value: function untilt() {
            this.container.classList.remove('tilt');
        }
    }]);

    return Glasses;
}();

exports.default = Glasses;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjhiMWI0MjdjYzU4NzYxNjA1N2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm94LmpzIiwid2VicGFjazovLy8uL3NyYy9WYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9QYXBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU29pbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR2xhc3Nlcy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCIkIiwicXVlcnkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZnRlciIsInRpbWUiLCJkb1doYXQiLCJzZXRUaW1lb3V0IiwiZXZlcnkiLCJzZXRJbnRlcnZhbCIsIkdhbWUiLCJpbWFnZXNMb2FkZXIiLCJyZWFkeSIsImJpbmQiLCJib3giLCJ2YXNlIiwicGFwZXIiLCJzb2lsIiwic2VlZCIsImdsYXNzZXMiLCJ1bmJveCIsIm9wZW4iLCJjb21lT3V0IiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lIiwiaW1hZ2VzIiwiSW1hZ2VMb2FkZXIiLCJ1cmwiLCJvbmRvbmUiLCJsb2FkZWRDb3VudCIsIm5hbWUiLCJsb2FkIiwiYWRkcmVzcyIsImltYWdlIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsIm9ubG9hZCIsImxlbmd0aCIsIkJveCIsImNvbnRhaW5lciIsIm9wZW5Cb3hJbWFnZSIsImNsb3NlQm94SW1hZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZml4U2l6ZXMiLCJzdHlsZSIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJtYXJnaW5MZWZ0IiwiYXJlYURpc3RGcm9tVG9wIiwidG9wIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ2YXNlRXZvbHV0aW9uUXVldWUiLCJWYXNlIiwic3RhdGUiLCJuZXh0SW5kZXgiLCJpbmRleE9mIiwiTWF0aCIsIm1pbiIsInRvIiwiX3N0YXRlIiwic2V0QXR0cmlidXRlIiwiUGFwZXIiLCJpdGVtcyIsIml0ZW1JbmRleCIsImR1cmF0aW9uIiwiYm9sZCIsIm9uRG9uZSIsIlNvaWwiLCJTZWVkIiwiR2xhc3NlcyIsIm9ubW91c2Vkb3duIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQUEsT0FBT0MsQ0FBUCxHQUFXLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQyxTQUFTQyxhQUFULENBQXVCRixLQUF2QixDQUFYO0FBQUEsQ0FBWDtBQUNBRixPQUFPSyxFQUFQLEdBQVksVUFBQ0gsS0FBRDtBQUFBLFdBQVdDLFNBQVNHLGdCQUFULENBQTBCSixLQUExQixDQUFYO0FBQUEsQ0FBWjs7QUFFQUYsT0FBT08sS0FBUCxHQUFlLFVBQUNDLElBQUQsRUFBT0MsTUFBUDtBQUFBLFdBQWtCQyxXQUFXRCxNQUFYLEVBQW1CRCxJQUFuQixDQUFsQjtBQUFBLENBQWY7QUFDQVIsT0FBT1csS0FBUCxHQUFlLFVBQUNILElBQUQsRUFB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eUMsU0FBOUU7QUFDSDs7OzsrQkFDTztBQUNKLGlCQUFLcEMsU0FBTCxDQUFlYSxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixNQUE3QjtBQUNIOzs7aUNBQ1M7QUFDTixpQkFBS2QsU0FBTCxDQUFlYSxTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxNQUFoQztBQUNIOzs7Ozs7a0JBR1VtQixPIiwiZmlsZSI6Ii4vcHVibGljL3NjcmlwdHMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjhiMWI0MjdjYzU4NzYxNjA1N2YiLCJpbXBvcnQgSW1hZ2VMb2FkZXIgZnJvbSAnLi9JbWFnZUxvYWRlcidcclxuaW1wb3J0IEJveCBmcm9tICcuL0JveCdcclxuaW1wb3J0IFZhc2UgZnJvbSAnLi9WYXNlJ1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9QYXBlcidcclxuaW1wb3J0IFNvaWwgZnJvbSAnLi9Tb2lsJ1xyXG5pbXBvcnQgU2VlZCBmcm9tICcuL1NlZWQnXHJcbmltcG9ydCBHbGFzc2VzIGZyb20gJy4vR2xhc3NlcydcclxuXHJcbndpbmRvdy4kID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcclxud2luZG93LiQkID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcclxuXHJcbndpbmRvdy5hZnRlciA9ICh0aW1lLCBkb1doYXQpID0+IHNldFRpbWVvdXQoZG9XaGF0LCB0aW1lKTtcclxud2luZG93LmV2ZXJ5ID0gKHRpbWUsIGRvV2hhdCkgPT4gc2V0SW50ZXJ2YWwoZG9XaGF0LCB0aW1lKTtcclxuXHJcbmNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzTG9hZGVyID0gbmV3IEltYWdlTG9hZGVyKCcuL2Fzc2V0cy9pbWFnZXMnLCB0aGlzLnJlYWR5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuYm94ID0gbmV3IEJveCgnLmdhbWUgLmJveCcpO1xyXG4gICAgICAgIHRoaXMudmFzZSA9IG5ldyBWYXNlKCcuZ2FtZSAudmFzZScpO1xyXG4gICAgICAgIHRoaXMucGFwZXIgPSBuZXcgUGFwZXIoJy5nYW1lIC5wYXBlcicsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc29pbCA9IG5ldyBTb2lsKCcuZ2FtZSAuc29pbCcpO1xyXG4gICAgICAgIHRoaXMuc2VlZCA9IG5ldyBTZWVkKCcuZ2FtZSAuc2VlZCcpO1xyXG4gICAgICAgIHRoaXMuZ2xhc3NlcyA9IG5ldyBHbGFzc2VzKCcuZ2FtZSAuZ2xhc3NlcycpXHJcbiAgICB9XHJcbiAgICByZWFkeSAoKSB7XHJcbiAgICAgICAgYWZ0ZXIoMTAwMCwgdGhpcy51bmJveC5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgdW5ib3ggKCkge1xyXG4gICAgICAgIHRoaXMuYm94Lm9wZW4oKTtcclxuICAgICAgICBhZnRlcigyMDAsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52YXNlLmNvbWVPdXQoKTtcclxuICAgICAgICAgICAgYWZ0ZXIoMTAwLCAoKSA9PiB7dGhpcy5wYXBlci5jb21lT3V0KCk7fSk7XHJcbiAgICAgICAgICAgIGFmdGVyKDMwMDAsICgpID0+IHt0aGlzLnBhcGVyLm5leHQoKTt9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBvbkRvbmUgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEb25lJylcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LmdhbWUgPSBuZXcgR2FtZSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImNvbnN0IGltYWdlcyA9IFsnYm94LWNsb3NlLnBuZycsICdib3gtb3Blbi5wbmcnLCAnZGVzay5zdmcnLCAnZW1wdHktdmFzZS5wbmcnLCAnZmlsbGVkLXZhc2UucG5nJywgJ2dsYXNzZXMtdGlsdGVkLnBuZycsICdnbGFzc2VzLnBuZycsICdpcGhvbmUucG5nJywgJ3BsYW50LnBuZycsICdzZWVkLnBuZycsICdzZWVkZWQtdmFzZS5wbmcnLCAnc29pbC5wbmcnLCAnc29pbGVkLXZhc2UucG5nJywgJ3dldC12YXNlLnBuZyddXHJcblxyXG5jbGFzcyBJbWFnZUxvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAodXJsLCBvbmRvbmUpIHtcclxuICAgICAgICB0aGlzLm9uZG9uZSA9IG9uZG9uZVxyXG4gICAgICAgIHRoaXMubG9hZGVkQ291bnQgPSAwXHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBpbWFnZXMpIHRoaXMubG9hZCh1cmwgKyAnLycgKyBuYW1lKVxyXG4gICAgfVxyXG4gICAgbG9hZCAoYWRkcmVzcykge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBpbWFnZS5zcmMgPSBhZGRyZXNzXHJcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlZENvdW50KytcclxuICAgICAgICAgICAgaWYgKHRoaXMubG9hZGVkQ291bnQgPT09IGltYWdlcy5sZW5ndGggJiYgdGhpcy5vbmRvbmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25kb25lKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VMb2FkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW1hZ2VMb2FkZXIuanMiLCJjbGFzcyBCb3gge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLm9wZW5Cb3hJbWFnZSA9ICQocXVlcnkgKyAnIC5vcGVuJyk7XHJcbiAgICAgICAgdGhpcy5jbG9zZUJveEltYWdlID0gJChxdWVyeSArICcgLmNsb3NlJyk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZml4U2l6ZXMuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBmaXhTaXplcyAoKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuQm94SW1hZ2Uuc3R5bGUud2lkdGggPSAodGhpcy5jbG9zZUJveEltYWdlLm9mZnNldFdpZHRoICogKDQ2NCAvIDMwMCkpICsgJ3B4JztcclxuICAgICAgICB0aGlzLm9wZW5Cb3hJbWFnZS5zdHlsZS5tYXJnaW5MZWZ0ID0gKHRoaXMuY2xvc2VCb3hJbWFnZS5vZmZzZXRXaWR0aCAvIC0yMDApICsgJ3B4JztcclxuICAgICAgICBjb25zdCBhcmVhRGlzdEZyb21Ub3AgPSAodGhpcy5jbG9zZUJveEltYWdlLm9mZnNldFdpZHRoICogKDExIC8gMjgpKTtcclxuICAgICAgICAkKCcuZ2FtZSA+IC5hcmVhJykuc3R5bGUudG9wID0gYXJlYURpc3RGcm9tVG9wICsgJ3B4JztcclxuICAgICAgICAkKCcuZ2FtZSA+IC5hcmVhJykuc3R5bGUuaGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCAtIGFyZWFEaXN0RnJvbVRvcCkgKyAncHgnXHJcbiAgICB9XHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLmZpeFNpemVzKCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpXHJcbiAgICB9XHJcbiAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5maXhTaXplcygpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQm94LmpzIiwiY29uc3QgdmFzZUV2b2x1dGlvblF1ZXVlID0gWydlbXB0eScsICdzb2lsZWQnLCAnc2VlZGVkJywgJ2ZpbGxlZCcsICd3ZXQnLCAnZ3JlZW4nXTtcclxuXHJcbmNsYXNzIFZhc2Uge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gJ2VtcHR5J1xyXG4gICAgfVxyXG4gICAgc2V0IHN0YXRlICh0bykge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdG87XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgdG8pXHJcbiAgICB9XHJcbiAgICBnZXQgc3RhdGUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZVxyXG4gICAgfVxyXG4gICAgY29tZU91dCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3V0JylcclxuICAgIH1cclxuICAgIG5leHQgKCkge1xyXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IHZhc2VFdm9sdXRpb25RdWV1ZS5pbmRleE9mKHRoaXMuc3RhdGUpICsgMTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdmFzZUV2b2x1dGlvblF1ZXVlW01hdGgubWluKG5leHRJbmRleCwgdmFzZUV2b2x1dGlvblF1ZXVlLmxlbmd0aCAtIDEpXVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWYXNlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Zhc2UuanMiLCJjbGFzcyBQYXBlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnksIGdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9ICQkKHF1ZXJ5ICsgJyBsaScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXRlbXMpO1xyXG4gICAgICAgIHRoaXMuaXRlbUluZGV4ID0gMDtcclxuICAgIH1cclxuICAgIGNvbWVPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dCcpXHJcbiAgICB9XHJcbiAgICBib2xkICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2xkJyk7XHJcbiAgICAgICAgYWZ0ZXIoMjAwMCwgKCk9PnsgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYm9sZCcpIH0pXHJcbiAgICB9XHJcbiAgICBuZXh0ICgpIHtcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuaXRlbUluZGV4ID09PSAwID8gMCA6IDEwMDA7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbUluZGV4ID4gMCkgdGhpcy5pdGVtc1t0aGlzLml0ZW1JbmRleC0xXS5jbGFzc0xpc3QuYWRkKCd0aWNrJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbUluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGgpIHsgYWZ0ZXIoZHVyYXRpb24sICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuYm9sZCgpXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5pdGVtSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1JbmRleCsrXHJcbiAgICAgICAgfSkgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLm9uRG9uZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXBlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QYXBlci5qcyIsImNsYXNzIFNvaWwge1xyXG4gICAgY29uc3RydWN0b3IocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvaWxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU29pbC5qcyIsImNsYXNzIFNlZWQge1xyXG4gICAgY29uc3RydWN0b3IocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlZWRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2VlZC5qcyIsImNsYXNzIEdsYXNzZXMge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLm9ubW91c2Vkb3duID0gKCkgPT4geyB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCd0aWx0JykgfVxyXG4gICAgfVxyXG4gICAgdGlsdCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGlsdCcpXHJcbiAgICB9XHJcbiAgICB1bnRpbHQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3RpbHQnKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbGFzc2VzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0dsYXNzZXMuanMiXSwic291cmNlUm9vdCI6IiJ9