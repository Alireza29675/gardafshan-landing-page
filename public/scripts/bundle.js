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
        var _this = this;

        _classCallCheck(this, Paper);

        this.game = game;
        this.container = $(query);
        this.items = $$(query + ' li');
        console.log(this.items);
        this.itemIndex = 0;
        window.onclick = function () {
            _this.container.classList.toggle('out');
        };
    }

    _createClass(Paper, [{
        key: 'comeOut',
        value: function comeOut() {
            this.container.classList.add('out');
        }
    }, {
        key: 'bold',
        value: function bold() {
            var _this2 = this;

            this.container.classList.add('bold');
            after(2000, function () {
                _this2.container.classList.remove('bold');
            });
        }
    }, {
        key: 'next',
        value: function next() {
            var _this3 = this;

            var duration = this.itemIndex === 0 ? 0 : 1000;
            if (this.itemIndex > 0) this.items[this.itemIndex - 1].classList.add('tick');
            if (this.itemIndex < this.items.length) {
                after(duration, function () {
                    _this3.bold();
                    _this3.items[_this3.itemIndex].classList.add('active');
                    _this3.itemIndex++;
                });
            } else {
                this.game.onDone();
            }
        }
    }]);

    return Paper;
}();

exports.default = Paper;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2QzNDlkZTY0N2ZlNGY3ZjYyMDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm94LmpzIiwid2VicGFjazovLy8uL3NyYy9WYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9QYXBlci5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCIkIiwicXVlcnkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZnRlciIsInRpbWUiLCJkb1doYXQiLCJzZXRUaW1lb3V0IiwiZXZlcnkiLCJzZXRJbnRlcnZhbCIsIkdhbWUiLCJpbWFnZXNMb2FkZXIiLCJyZWFkeSIsImJpbmQiLCJib3giLCJ2YXNlIiwicGFwZXIiLCJ1bmJveCIsIm9wZW4iLCJjb21lT3V0IiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lIiwiaW1hZ2VzIiwiSW1hZ2VMb2FkZXIiLCJ1cmwiLCJvbmRvbmUiLCJsb2FkZWRDb3VudCIsIm5hbWUiLCJsb2FkIiwiYWRkcmVzcyIsImltYWdlIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsIm9ubG9hZCIsImxlbmd0aCIsIkJveCIsImNvbnRhaW5lciIsIm9wZW5Cb3hJbWFnZSIsImNsb3NlQm94SW1hZ2UiLCJzdHlsZSIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJtYXJnaW5MZWZ0IiwiYXJlYURpc3RGcm9tVG9wIiwidG9wIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJmaXhTaXplcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInZhc2VFdm9sdXRpb25RdWV1ZSIsIlZhc2UiLCJzdGF0ZSIsIm5leHRJbmRleCIsImluZGV4T2YiLCJNYXRoIiwibWluIiwidG8iLCJfc3RhdGUiLCJzZXRBdHRyaWJ1dGUiLCJQYXBlciIsIml0ZW1zIiwiaXRlbUluZGV4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QUFOLEVBQWdCLFlBQUk7QUFDMUQsMkJBQUtDLElBQUw7QUFDQSwyQkFBS0wsS0FBTCxDQUFXLE9BQUtDLFNBQWhCLEVBQTJCZixTQUEzQixDQUFxQ0MsR0FBckMsQ0FBeUMsUUFBekM7QUFDQSwyQkFBS2MsU0FBTDtBQUNILGlCQUp5QztBQUl0QyxhQUpKLE1BSVU7QUFDTixxQkFBSzFDLElBQUwsQ0FBVStDLE1BQVY7QUFDSDtBQUNKOzs7Ozs7a0JBR1VQLEsiLCJmaWxlIjoiLi9wdWJsaWMvc2NyaXB0cy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZDM0OWRlNjQ3ZmU0ZjdmNjIwMiIsImltcG9ydCBJbWFnZUxvYWRlciBmcm9tICcuL0ltYWdlTG9hZGVyJ1xyXG5pbXBvcnQgQm94IGZyb20gJy4vQm94J1xyXG5pbXBvcnQgVmFzZSBmcm9tICcuL1Zhc2UnXHJcbmltcG9ydCBQYXBlciBmcm9tICcuL1BhcGVyJ1xyXG5cclxud2luZG93LiQgPSAocXVlcnkpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xyXG53aW5kb3cuJCQgPSAocXVlcnkpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpO1xyXG5cclxud2luZG93LmFmdGVyID0gKHRpbWUsIGRvV2hhdCkgPT4gc2V0VGltZW91dChkb1doYXQsIHRpbWUpO1xyXG53aW5kb3cuZXZlcnkgPSAodGltZSwgZG9XaGF0KSA9PiBzZXRJbnRlcnZhbChkb1doYXQsIHRpbWUpO1xyXG5cclxuY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZXNMb2FkZXIgPSBuZXcgSW1hZ2VMb2FkZXIoJy4vYXNzZXRzL2ltYWdlcycsIHRoaXMucmVhZHkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5ib3ggPSBuZXcgQm94KCcuZ2FtZSAuYm94Jyk7XHJcbiAgICAgICAgdGhpcy52YXNlID0gbmV3IFZhc2UoJy5nYW1lIC52YXNlJylcclxuICAgICAgICB0aGlzLnBhcGVyID0gbmV3IFBhcGVyKCcuZ2FtZSAucGFwZXInLCB0aGlzKVxyXG4gICAgfVxyXG4gICAgcmVhZHkgKCkge1xyXG4gICAgICAgIGFmdGVyKDEwMDAsIHRoaXMudW5ib3guYmluZCh0aGlzKSlcclxuICAgIH1cclxuICAgIHVuYm94ICgpIHtcclxuICAgICAgICB0aGlzLmJveC5vcGVuKCk7XHJcbiAgICAgICAgYWZ0ZXIoMjAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmFzZS5jb21lT3V0KCk7XHJcbiAgICAgICAgICAgIGFmdGVyKDEwMCwgKCkgPT4ge3RoaXMucGFwZXIuY29tZU91dCgpO30pXHJcbiAgICAgICAgICAgIGFmdGVyKDMwMDAsICgpID0+IHt0aGlzLnBhcGVyLm5leHQoKTt9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBvbkRvbmUgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEb25lJylcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LmdhbWUgPSBuZXcgR2FtZSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImNvbnN0IGltYWdlcyA9IFsnYm94LWNsb3NlLnBuZycsICdib3gtb3Blbi5wbmcnLCAnZGVzay5zdmcnLCAnZW1wdHktdmFzZS5wbmcnLCAnZmlsbGVkLXZhc2UucG5nJywgJ2dsYXNzZXMtdGlsdGVkLnBuZycsICdnbGFzc2VzLnBuZycsICdpcGhvbmUucG5nJywgJ3BsYW50LnBuZycsICdzZWVkLnBuZycsICdzZWVkZWQtdmFzZS5wbmcnLCAnc29pbC5wbmcnLCAnc29pbGVkLXZhc2UucG5nJywgJ3dldC12YXNlLnBuZyddXHJcblxyXG5jbGFzcyBJbWFnZUxvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAodXJsLCBvbmRvbmUpIHtcclxuICAgICAgICB0aGlzLm9uZG9uZSA9IG9uZG9uZVxyXG4gICAgICAgIHRoaXMubG9hZGVkQ291bnQgPSAwXHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBpbWFnZXMpIHRoaXMubG9hZCh1cmwgKyAnLycgKyBuYW1lKVxyXG4gICAgfVxyXG4gICAgbG9hZCAoYWRkcmVzcykge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBpbWFnZS5zcmMgPSBhZGRyZXNzXHJcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlZENvdW50KytcclxuICAgICAgICAgICAgaWYgKHRoaXMubG9hZGVkQ291bnQgPT09IGltYWdlcy5sZW5ndGggJiYgdGhpcy5vbmRvbmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25kb25lKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VMb2FkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW1hZ2VMb2FkZXIuanMiLCJjbGFzcyBCb3gge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLm9wZW5Cb3hJbWFnZSA9ICQocXVlcnkgKyAnIC5vcGVuJyk7XHJcbiAgICAgICAgdGhpcy5jbG9zZUJveEltYWdlID0gJChxdWVyeSArICcgLmNsb3NlJylcclxuICAgIH1cclxuICAgIGZpeFNpemVzICgpIHtcclxuICAgICAgICB0aGlzLm9wZW5Cb3hJbWFnZS5zdHlsZS53aWR0aCA9ICh0aGlzLmNsb3NlQm94SW1hZ2Uub2Zmc2V0V2lkdGggKiAoNDY0IC8gMzAwKSkgKyAncHgnO1xyXG4gICAgICAgIHRoaXMub3BlbkJveEltYWdlLnN0eWxlLm1hcmdpbkxlZnQgPSAodGhpcy5jbG9zZUJveEltYWdlLm9mZnNldFdpZHRoIC8gLTIwMCkgKyAncHgnO1xyXG4gICAgICAgIGNvbnN0IGFyZWFEaXN0RnJvbVRvcCA9ICh0aGlzLmNsb3NlQm94SW1hZ2Uub2Zmc2V0V2lkdGggKiAoMTEgLyAyOCkpO1xyXG4gICAgICAgICQoJy5nYW1lID4gLmFyZWEnKS5zdHlsZS50b3AgPSBhcmVhRGlzdEZyb21Ub3AgKyAncHgnO1xyXG4gICAgICAgICQoJy5nYW1lID4gLmFyZWEnKS5zdHlsZS5oZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC0gYXJlYURpc3RGcm9tVG9wKSArICdweCdcclxuICAgIH1cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHRoaXMuZml4U2l6ZXMoKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvcGVuJylcclxuICAgIH1cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLmZpeFNpemVzKCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJveFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Cb3guanMiLCJjb25zdCB2YXNlRXZvbHV0aW9uUXVldWUgPSBbJ2VtcHR5JywgJ3NvaWxlZCcsICdzZWVkZWQnLCAnZmlsbGVkJywgJ3dldCcsICdncmVlbiddXHJcblxyXG5jbGFzcyBWYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSlcclxuICAgICAgICB0aGlzLnN0YXRlID0gJ2VtcHR5J1xyXG4gICAgfVxyXG4gICAgc2V0IHN0YXRlICh0bykge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdG9cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCB0bylcclxuICAgIH1cclxuICAgIGdldCBzdGF0ZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlXHJcbiAgICB9XHJcbiAgICBjb21lT3V0ICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdXQnKVxyXG4gICAgfVxyXG4gICAgbmV4dCAoKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gdmFzZUV2b2x1dGlvblF1ZXVlLmluZGV4T2YodGhpcy5zdGF0ZSkgKyAxXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHZhc2VFdm9sdXRpb25RdWV1ZVtNYXRoLm1pbihuZXh0SW5kZXgsIHZhc2VFdm9sdXRpb25RdWV1ZS5sZW5ndGggLSAxKV1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFzZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9WYXNlLmpzIiwiY2xhc3MgUGFwZXIge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5LCBnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSlcclxuICAgICAgICB0aGlzLml0ZW1zID0gJCQocXVlcnkgKyAnIGxpJylcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLml0ZW1zKVxyXG4gICAgICAgIHRoaXMuaXRlbUluZGV4ID0gMDtcclxuICAgICAgICB3aW5kb3cub25jbGljayA9ICgpID0+IHsgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3V0JykgfVxyXG4gICAgfVxyXG4gICAgY29tZU91dCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3V0JylcclxuICAgIH1cclxuICAgIGJvbGQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvbGQnKVxyXG4gICAgICAgIGFmdGVyKDIwMDAsICgpPT57IHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JvbGQnKSB9KVxyXG4gICAgfVxyXG4gICAgbmV4dCAoKSB7XHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLml0ZW1JbmRleCA9PT0gMCA/IDAgOiAxMDAwO1xyXG4gICAgICAgIGlmICh0aGlzLml0ZW1JbmRleCA+IDApIHRoaXMuaXRlbXNbdGhpcy5pdGVtSW5kZXgtMV0uY2xhc3NMaXN0LmFkZCgndGljaycpXHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbUluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGgpIHsgYWZ0ZXIoZHVyYXRpb24sICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuYm9sZCgpXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5pdGVtSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUluZGV4KytcclxuICAgICAgICB9KSB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUub25Eb25lKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1BhcGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==