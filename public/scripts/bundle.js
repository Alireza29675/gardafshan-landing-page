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
    }

    _createClass(Game, [{
        key: 'ready',
        value: function ready() {
            after(1000, this.unbox.bind(this));
        }
    }, {
        key: 'unbox',
        value: function unbox() {
            this.box.open();
            this.vase.comeOut();
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGRiMGIzNGE3NGQ3MzBjMjY0MDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm94LmpzIiwid2VicGFjazovLy8uL3NyYy9WYXNlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIiQiLCJxdWVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiQkIiwicXVlcnlTZWxlY3RvckFsbCIsImFmdGVyIiwidGltZSIsImRvV2hhdCIsInNldFRpbWVvdXQiLCJldmVyeSIsInNldEludGVydmFsIiwiR2FtZSIsImltYWdlc0xvYWRlciIsInJlYWR5IiwiYmluZCIsImJveCIsInZhc2UiLCJ1bmJveCIsIm9wZW4iLCJjb21lT3V0IiwiZ2FtZSIsImltYWdlcyIsIkltYWdlTG9hZGVyIiwidXJsIiwib25kb25lIiwibG9hZGVkQ291bnQiLCJuYW1lIiwibG9hZCIsImFkZHJlc3MiLCJpbWFnZSIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJvbmxvYWQiLCJsZW5ndGgiLCJCb3giLCJjb250YWluZXIiLCJvcGVuQm94SW1hZ2UiLCJjbG9zZUJveEltYWdlIiwic3R5bGUiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwibWFyZ2luTGVmdCIsImFyZWFEaXN0RnJvbVRvcCIsInRvcCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiZml4U2l6ZXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ2YXNlRXZvbHV0aW9uUXVldWUiLCJWYXNlIiwic3RhdGUiLCJuZXh0SW5kZXgiLCJpbmRleE9mIiwiTWF0aCIsIm1pbiIsInRvIiwiX3N0YXRlIiwic2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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eEMsRUFBK0MsT0FBL0MsQ0FBM0I7O0lBRU1DLEk7QUFDRixrQkFBYW5ELEtBQWIsRUFBb0I7QUFBQTs7QUFDaEIsYUFBS21DLFNBQUwsR0FBaUJwQyxFQUFFQyxLQUFGLENBQWpCO0FBQ0EsYUFBS29ELEtBQUwsR0FBYSxPQUFiO0FBQ0g7Ozs7a0NBUVU7QUFDUCxpQkFBS2pCLFNBQUwsQ0FBZVksU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsS0FBN0I7QUFDSDs7OytCQUNPO0FBQ0osZ0JBQU1LLFlBQVlILG1CQUFtQkksT0FBbkIsQ0FBMkIsS0FBS0YsS0FBaEMsSUFBeUMsQ0FBM0Q7QUFDQSxpQkFBS0EsS0FBTCxHQUFhRixtQkFBbUJLLEtBQUtDLEdBQUwsQ0FBU0gsU0FBVCxFQUFvQkgsbUJBQW1CakIsTUFBbkIsR0FBNEIsQ0FBaEQsQ0FBbkIsQ0FBYjtBQUNIOzs7MEJBYlV3QixFLEVBQUk7QUFDWCxpQkFBS0MsTUFBTCxHQUFjRCxFQUFkO0FBQ0EsaUJBQUt0QixTQUFMLENBQWV3QixZQUFmLENBQTRCLFlBQTVCLEVBQTBDRixFQUExQztBQUNILFM7NEJBQ1k7QUFDVCxtQkFBTyxLQUFLQyxNQUFaO0FBQ0g7Ozs7OztrQkFVVVAsSSIsImZpbGUiOiIuL3B1YmxpYy9zY3JpcHRzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRkYjBiMzRhNzRkNzMwYzI2NDA4IiwiaW1wb3J0IEltYWdlTG9hZGVyIGZyb20gJy4vSW1hZ2VMb2FkZXInXHJcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnXHJcbmltcG9ydCBWYXNlIGZyb20gJy4vVmFzZSdcclxuXHJcbndpbmRvdy4kID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcclxud2luZG93LiQkID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcclxuXHJcbndpbmRvdy5hZnRlciA9ICh0aW1lLCBkb1doYXQpID0+IHNldFRpbWVvdXQoZG9XaGF0LCB0aW1lKTtcclxud2luZG93LmV2ZXJ5ID0gKHRpbWUsIGRvV2hhdCkgPT4gc2V0SW50ZXJ2YWwoZG9XaGF0LCB0aW1lKTtcclxuXHJcbmNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzTG9hZGVyID0gbmV3IEltYWdlTG9hZGVyKCcuL2Fzc2V0cy9pbWFnZXMnLCB0aGlzLnJlYWR5LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuYm94ID0gbmV3IEJveCgnLmdhbWUgLmJveCcpO1xyXG4gICAgICAgIHRoaXMudmFzZSA9IG5ldyBWYXNlKCcuZ2FtZSAudmFzZScpXHJcbiAgICB9XHJcbiAgICByZWFkeSAoKSB7XHJcbiAgICAgICAgYWZ0ZXIoMTAwMCwgdGhpcy51bmJveC5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgdW5ib3ggKCkge1xyXG4gICAgICAgIHRoaXMuYm94Lm9wZW4oKTtcclxuICAgICAgICB0aGlzLnZhc2UuY29tZU91dCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuZ2FtZSA9IG5ldyBHYW1lKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiY29uc3QgaW1hZ2VzID0gWydib3gtY2xvc2UucG5nJywgJ2JveC1vcGVuLnBuZycsICdkZXNrLnN2ZycsICdlbXB0eS12YXNlLnBuZycsICdmaWxsZWQtdmFzZS5wbmcnLCAnZ2xhc3Nlcy10aWx0ZWQucG5nJywgJ2dsYXNzZXMucG5nJywgJ2lwaG9uZS5wbmcnLCAncGxhbnQucG5nJywgJ3NlZWQucG5nJywgJ3NlZWRlZC12YXNlLnBuZycsICdzb2lsLnBuZycsICdzb2lsZWQtdmFzZS5wbmcnLCAnd2V0LXZhc2UucG5nJ11cclxuXHJcbmNsYXNzIEltYWdlTG9hZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yICh1cmwsIG9uZG9uZSkge1xyXG4gICAgICAgIHRoaXMub25kb25lID0gb25kb25lXHJcbiAgICAgICAgdGhpcy5sb2FkZWRDb3VudCA9IDBcclxuICAgICAgICBmb3IgKGxldCBuYW1lIG9mIGltYWdlcykgdGhpcy5sb2FkKHVybCArICcvJyArIG5hbWUpXHJcbiAgICB9XHJcbiAgICBsb2FkIChhZGRyZXNzKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGltYWdlLnNyYyA9IGFkZHJlc3NcclxuICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVkQ291bnQrK1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2FkZWRDb3VudCA9PT0gaW1hZ2VzLmxlbmd0aCAmJiB0aGlzLm9uZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmRvbmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUxvYWRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbWFnZUxvYWRlci5qcyIsImNsYXNzIEJveCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHRoaXMub3BlbkJveEltYWdlID0gJChxdWVyeSArICcgLm9wZW4nKTtcclxuICAgICAgICB0aGlzLmNsb3NlQm94SW1hZ2UgPSAkKHF1ZXJ5ICsgJyAuY2xvc2UnKVxyXG4gICAgfVxyXG4gICAgZml4U2l6ZXMgKCkge1xyXG4gICAgICAgIHRoaXMub3BlbkJveEltYWdlLnN0eWxlLndpZHRoID0gKHRoaXMuY2xvc2VCb3hJbWFnZS5vZmZzZXRXaWR0aCAqICg0NjQgLyAzMDApKSArICdweCc7XHJcbiAgICAgICAgdGhpcy5vcGVuQm94SW1hZ2Uuc3R5bGUubWFyZ2luTGVmdCA9ICh0aGlzLmNsb3NlQm94SW1hZ2Uub2Zmc2V0V2lkdGggLyAtMjAwKSArICdweCc7XHJcbiAgICAgICAgY29uc3QgYXJlYURpc3RGcm9tVG9wID0gKHRoaXMuY2xvc2VCb3hJbWFnZS5vZmZzZXRXaWR0aCAqICgxMSAvIDI4KSk7XHJcbiAgICAgICAgJCgnLmdhbWUgPiAuYXJlYScpLnN0eWxlLnRvcCA9IGFyZWFEaXN0RnJvbVRvcCArICdweCc7XHJcbiAgICAgICAgJCgnLmdhbWUgPiAuYXJlYScpLnN0eWxlLmhlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBhcmVhRGlzdEZyb21Ub3ApICsgJ3B4J1xyXG4gICAgfVxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5maXhTaXplcygpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKVxyXG4gICAgfVxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMuZml4U2l6ZXMoKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm94XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0JveC5qcyIsImNvbnN0IHZhc2VFdm9sdXRpb25RdWV1ZSA9IFsnZW1wdHknLCAnc29pbGVkJywgJ3NlZWRlZCcsICdmaWxsZWQnLCAnd2V0JywgJ2dyZWVuJ11cclxuXHJcbmNsYXNzIFZhc2Uge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAnZW1wdHknXHJcbiAgICB9XHJcbiAgICBzZXQgc3RhdGUgKHRvKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB0b1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsIHRvKVxyXG4gICAgfVxyXG4gICAgZ2V0IHN0YXRlICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGVcclxuICAgIH1cclxuICAgIGNvbWVPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dCcpXHJcbiAgICB9XHJcbiAgICBuZXh0ICgpIHtcclxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSB2YXNlRXZvbHV0aW9uUXVldWUuaW5kZXhPZih0aGlzLnN0YXRlKSArIDFcclxuICAgICAgICB0aGlzLnN0YXRlID0gdmFzZUV2b2x1dGlvblF1ZXVlW01hdGgubWluKG5leHRJbmRleCwgdmFzZUV2b2x1dGlvblF1ZXVlLmxlbmd0aCAtIDEpXVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWYXNlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Zhc2UuanMiXSwic291cmNlUm9vdCI6IiJ9