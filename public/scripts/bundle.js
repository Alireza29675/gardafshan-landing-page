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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDA1NmY2YTI1YjJkZjdiOGFhZjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm94LmpzIiwid2VicGFjazovLy8uL3NyYy9WYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9QYXBlci5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCIkIiwicXVlcnkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZnRlciIsInRpbWUiLCJkb1doYXQiLCJzZXRUaW1lb3V0IiwiZXZlcnkiLCJzZXRJbnRlcnZhbCIsIkdhbWUiLCJpbWFnZXNMb2FkZXIiLCJyZWFkeSIsImJpbmQiLCJib3giLCJ2YXNlIiwicGFwZXIiLCJ1bmJveCIsIm9wZW4iLCJjb21lT3V0IiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJnYW1lIiwiaW1hZ2VzIiwiSW1hZ2VMb2FkZXIiLCJ1cmwiLCJvbmRvbmUiLCJsb2FkZWRDb3VudCIsIm5hbWUiLCJsb2FkIiwiYWRkcmVzcyIsImltYWdlIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsIm9ubG9hZCIsImxlbmd0aCIsIkJveCIsImNvbnRhaW5lciIsIm9wZW5Cb3hJbWFnZSIsImNsb3NlQm94SW1hZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZml4U2l6ZXMiLCJzdHlsZSIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJtYXJnaW5MZWZ0IiwiYXJlYURpc3RGcm9tVG9wIiwidG9wIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ2YXNlRXZvbHV0aW9uUXVldWUiLCJWYXNlIiwic3RhdGUiLCJuZXh0SW5kZXgiLCJpbmRleE9mIiwiTWF0aCIsIm1pbiIsInRvIiwiX3N0YXRlIiwic2V0QXR0cmlidXRlIiwiUGFwZXIi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S0MsSUFBTDtBQUNBLDJCQUFLSCxLQUFMLENBQVcsT0FBS0MsU0FBaEIsRUFBMkJmLFNBQTNCLENBQXFDQyxHQUFyQyxDQUF5QyxRQUF6QztBQUNBLDJCQUFLYyxTQUFMO0FBQ0gsaUJBSnlDO0FBSXRDLGFBSkosTUFJVTtBQUNOLHFCQUFLM0MsSUFBTCxDQUFVOEMsTUFBVjtBQUNIO0FBQ0o7Ozs7OztrQkFHVUwsSyIsImZpbGUiOiIuL3B1YmxpYy9zY3JpcHRzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQwNTZmNmEyNWIyZGY3YjhhYWY2IiwiaW1wb3J0IEltYWdlTG9hZGVyIGZyb20gJy4vSW1hZ2VMb2FkZXInXHJcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnXHJcbmltcG9ydCBWYXNlIGZyb20gJy4vVmFzZSdcclxuaW1wb3J0IFBhcGVyIGZyb20gJy4vUGFwZXInXHJcblxyXG53aW5kb3cuJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XHJcbndpbmRvdy4kJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSk7XHJcblxyXG53aW5kb3cuYWZ0ZXIgPSAodGltZSwgZG9XaGF0KSA9PiBzZXRUaW1lb3V0KGRvV2hhdCwgdGltZSk7XHJcbndpbmRvdy5ldmVyeSA9ICh0aW1lLCBkb1doYXQpID0+IHNldEludGVydmFsKGRvV2hhdCwgdGltZSk7XHJcblxyXG5jbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmltYWdlc0xvYWRlciA9IG5ldyBJbWFnZUxvYWRlcignLi9hc3NldHMvaW1hZ2VzJywgdGhpcy5yZWFkeS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmJveCA9IG5ldyBCb3goJy5nYW1lIC5ib3gnKTtcclxuICAgICAgICB0aGlzLnZhc2UgPSBuZXcgVmFzZSgnLmdhbWUgLnZhc2UnKVxyXG4gICAgICAgIHRoaXMucGFwZXIgPSBuZXcgUGFwZXIoJy5nYW1lIC5wYXBlcicsIHRoaXMpXHJcbiAgICB9XHJcbiAgICByZWFkeSAoKSB7XHJcbiAgICAgICAgYWZ0ZXIoMTAwMCwgdGhpcy51bmJveC5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgdW5ib3ggKCkge1xyXG4gICAgICAgIHRoaXMuYm94Lm9wZW4oKTtcclxuICAgICAgICBhZnRlcigyMDAsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52YXNlLmNvbWVPdXQoKTtcclxuICAgICAgICAgICAgYWZ0ZXIoMTAwLCAoKSA9PiB7dGhpcy5wYXBlci5jb21lT3V0KCk7fSlcclxuICAgICAgICAgICAgYWZ0ZXIoMzAwMCwgKCkgPT4ge3RoaXMucGFwZXIubmV4dCgpO30pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIG9uRG9uZSAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RvbmUnKVxyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuZ2FtZSA9IG5ldyBHYW1lKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiY29uc3QgaW1hZ2VzID0gWydib3gtY2xvc2UucG5nJywgJ2JveC1vcGVuLnBuZycsICdkZXNrLnN2ZycsICdlbXB0eS12YXNlLnBuZycsICdmaWxsZWQtdmFzZS5wbmcnLCAnZ2xhc3Nlcy10aWx0ZWQucG5nJywgJ2dsYXNzZXMucG5nJywgJ2lwaG9uZS5wbmcnLCAncGxhbnQucG5nJywgJ3NlZWQucG5nJywgJ3NlZWRlZC12YXNlLnBuZycsICdzb2lsLnBuZycsICdzb2lsZWQtdmFzZS5wbmcnLCAnd2V0LXZhc2UucG5nJ11cclxuXHJcbmNsYXNzIEltYWdlTG9hZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yICh1cmwsIG9uZG9uZSkge1xyXG4gICAgICAgIHRoaXMub25kb25lID0gb25kb25lXHJcbiAgICAgICAgdGhpcy5sb2FkZWRDb3VudCA9IDBcclxuICAgICAgICBmb3IgKGxldCBuYW1lIG9mIGltYWdlcykgdGhpcy5sb2FkKHVybCArICcvJyArIG5hbWUpXHJcbiAgICB9XHJcbiAgICBsb2FkIChhZGRyZXNzKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGltYWdlLnNyYyA9IGFkZHJlc3NcclxuICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVkQ291bnQrK1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2FkZWRDb3VudCA9PT0gaW1hZ2VzLmxlbmd0aCAmJiB0aGlzLm9uZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmRvbmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUxvYWRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbWFnZUxvYWRlci5qcyIsImNsYXNzIEJveCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHRoaXMub3BlbkJveEltYWdlID0gJChxdWVyeSArICcgLm9wZW4nKTtcclxuICAgICAgICB0aGlzLmNsb3NlQm94SW1hZ2UgPSAkKHF1ZXJ5ICsgJyAuY2xvc2UnKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5maXhTaXplcy5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIGZpeFNpemVzICgpIHtcclxuICAgICAgICB0aGlzLm9wZW5Cb3hJbWFnZS5zdHlsZS53aWR0aCA9ICh0aGlzLmNsb3NlQm94SW1hZ2Uub2Zmc2V0V2lkdGggKiAoNDY0IC8gMzAwKSkgKyAncHgnO1xyXG4gICAgICAgIHRoaXMub3BlbkJveEltYWdlLnN0eWxlLm1hcmdpbkxlZnQgPSAodGhpcy5jbG9zZUJveEltYWdlLm9mZnNldFdpZHRoIC8gLTIwMCkgKyAncHgnO1xyXG4gICAgICAgIGNvbnN0IGFyZWFEaXN0RnJvbVRvcCA9ICh0aGlzLmNsb3NlQm94SW1hZ2Uub2Zmc2V0V2lkdGggKiAoMTEgLyAyOCkpO1xyXG4gICAgICAgICQoJy5nYW1lID4gLmFyZWEnKS5zdHlsZS50b3AgPSBhcmVhRGlzdEZyb21Ub3AgKyAncHgnO1xyXG4gICAgICAgICQoJy5nYW1lID4gLmFyZWEnKS5zdHlsZS5oZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC0gYXJlYURpc3RGcm9tVG9wKSArICdweCdcclxuICAgIH1cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHRoaXMuZml4U2l6ZXMoKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvcGVuJylcclxuICAgIH1cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLmZpeFNpemVzKCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJveFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Cb3guanMiLCJjb25zdCB2YXNlRXZvbHV0aW9uUXVldWUgPSBbJ2VtcHR5JywgJ3NvaWxlZCcsICdzZWVkZWQnLCAnZmlsbGVkJywgJ3dldCcsICdncmVlbiddXHJcblxyXG5jbGFzcyBWYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSlcclxuICAgICAgICB0aGlzLnN0YXRlID0gJ2VtcHR5J1xyXG4gICAgfVxyXG4gICAgc2V0IHN0YXRlICh0bykge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdG9cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCB0bylcclxuICAgIH1cclxuICAgIGdldCBzdGF0ZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlXHJcbiAgICB9XHJcbiAgICBjb21lT3V0ICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdXQnKVxyXG4gICAgfVxyXG4gICAgbmV4dCAoKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gdmFzZUV2b2x1dGlvblF1ZXVlLmluZGV4T2YodGhpcy5zdGF0ZSkgKyAxXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHZhc2VFdm9sdXRpb25RdWV1ZVtNYXRoLm1pbihuZXh0SW5kZXgsIHZhc2VFdm9sdXRpb25RdWV1ZS5sZW5ndGggLSAxKV1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFzZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9WYXNlLmpzIiwiY2xhc3MgUGFwZXIge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5LCBnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSlcclxuICAgICAgICB0aGlzLml0ZW1zID0gJCQocXVlcnkgKyAnIGxpJylcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLml0ZW1zKVxyXG4gICAgICAgIHRoaXMuaXRlbUluZGV4ID0gMDtcclxuICAgIH1cclxuICAgIGNvbWVPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dCcpXHJcbiAgICB9XHJcbiAgICBib2xkICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2xkJylcclxuICAgICAgICBhZnRlcigyMDAwLCAoKT0+eyB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdib2xkJykgfSlcclxuICAgIH1cclxuICAgIG5leHQgKCkge1xyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5pdGVtSW5kZXggPT09IDAgPyAwIDogMTAwMDtcclxuICAgICAgICBpZiAodGhpcy5pdGVtSW5kZXggPiAwKSB0aGlzLml0ZW1zW3RoaXMuaXRlbUluZGV4LTFdLmNsYXNzTGlzdC5hZGQoJ3RpY2snKVxyXG4gICAgICAgIGlmICh0aGlzLml0ZW1JbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoKSB7IGFmdGVyKGR1cmF0aW9uLCAoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmJvbGQoKVxyXG4gICAgICAgICAgICB0aGlzLml0ZW1zW3RoaXMuaXRlbUluZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB0aGlzLml0ZW1JbmRleCsrXHJcbiAgICAgICAgfSkgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLm9uRG9uZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXBlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QYXBlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=