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

        new _ImageLoader2.default('./assets/images', this.ready.bind(this));
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
            window.areaDistFromTop = this.closeBoxImage.offsetWidth * (11 / 28);
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
            var _this = this;

            this.container.classList.add('out');
            after(2000, function () {
                _this.container.style.transitionDuration = '0.3s';
            });
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

var _DragHandler = __webpack_require__(10);

var _DragHandler2 = _interopRequireDefault(_DragHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Glasses = function () {
    function Glasses(query) {
        var _this = this;

        _classCallCheck(this, Glasses);

        this.container = $(query);
        this.draggable = new _DragHandler2.default(this.container, { x: 0, y: 80 });
        this.draggable.onStart(function (e) {
            _this.tilt();
        });
        this.draggable.onMove(function (e) {
            console.log(e.inTarget);
        });
        this.draggable.onEnd(function (e) {
            _this.untilt();
        });
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

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

!function(a,b){ true?module.exports=b():"function"==typeof define&&define.amd?define([],b):a.Draggable=b()}(this,function(){"use strict";function a(a,b){var c=this,d=k.bind(c.start,c),e=k.bind(c.drag,c),g=k.bind(c.stop,c);if(!f(a))throw new TypeError("Draggable expects argument 0 to be an Element");b=k.assign({},i,b),k.assign(c,{element:a,handle:b.handle&&f(b.handle)?b.handle:a,handlers:{start:{mousedown:d,touchstart:d},move:{mousemove:e,mouseup:g,touchmove:e,touchend:g}},options:b}),c.initialize()}function b(a){return parseInt(a,10)}function c(a){return"currentStyle"in a?a.currentStyle:getComputedStyle(a)}function d(a){return a instanceof Array}function e(a){return void 0!==a&&null!==a}function f(a){return a instanceof Element||"undefined"!=typeof HTMLDocument&&a instanceof HTMLDocument}function g(a){return a instanceof Function}function h(){}var i={grid:0,filterTarget:null,limit:{x:null,y:null},threshold:0,setCursor:!1,setPosition:!0,smoothDrag:!0,useGPU:!0,onDrag:h,onDragStart:h,onDragEnd:h},j={transform:function(){for(var a=" -o- -ms- -moz- -webkit-".split(" "),b=document.body.style,c=a.length;c--;){var d=a[c]+"transform";if(d in b)return d}}()},k={assign:function(){for(var a=arguments[0],b=arguments.length,c=1;b>c;c++){var d=arguments[c];for(var e in d)a[e]=d[e]}return a},bind:function(a,b){return function(){a.apply(b,arguments)}},on:function(a,b,c){if(b&&c)k.addEvent(a,b,c);else if(b)for(var d in b)k.addEvent(a,d,b[d])},off:function(a,b,c){if(b&&c)k.removeEvent(a,b,c);else if(b)for(var d in b)k.removeEvent(a,d,b[d])},limit:function(a,b){return d(b)?(b=[+b[0],+b[1]],a<b[0]?a=b[0]:a>b[1]&&(a=b[1])):a=+b,a},addEvent:"attachEvent"in Element.prototype?function(a,b,c){a.attachEvent("on"+b,c)}:function(a,b,c){a.addEventListener(b,c,!1)},removeEvent:"attachEvent"in Element.prototype?function(a,b,c){a.detachEvent("on"+b,c)}:function(a,b,c){a.removeEventListener(b,c)}};return k.assign(a.prototype,{setOption:function(a,b){var c=this;return c.options[a]=b,c.initialize(),c},get:function(){var a=this.dragEvent;return{x:a.x,y:a.y}},set:function(a,b){var c=this,d=c.dragEvent;return d.original={x:d.x,y:d.y},c.move(a,b),c},dragEvent:{started:!1,x:0,y:0},initialize:function(){var a,b=this,d=b.element,e=(b.handle,d.style),f=c(d),g=b.options,h=j.transform,i=b._dimensions={height:d.offsetHeight,left:d.offsetLeft,top:d.offsetTop,width:d.offsetWidth};g.useGPU&&h&&(a=f[h],"none"===a&&(a=""),e[h]=a+" translate3d(0,0,0)"),g.setPosition&&(e.display="block",e.left=i.left+"px",e.top=i.top+"px",e.bottom=e.right="auto",e.margin=0,e.position="absolute"),g.setCursor&&(e.cursor="move"),b.setLimit(g.limit),k.assign(b.dragEvent,{x:i.left,y:i.top}),k.on(b.handle,b.handlers.start)},start:function(a){var b=this,c=b.getCursor(a),d=b.element;b.useTarget(a.target||a.srcElement)&&(a.preventDefault?a.preventDefault():a.returnValue=!1,b.dragEvent.oldZindex=d.style.zIndex,d.style.zIndex=1e4,b.setCursor(c),b.setPosition(),b.setZoom(),k.on(document,b.handlers.move))},drag:function(a){var b=this,c=b.dragEvent,d=b.element,e=b._cursor,f=b._dimensions,g=b.options,h=f.zoom,i=b.getCursor(a),j=g.threshold,k=(i.x-e.x)/h+f.left,l=(i.y-e.y)/h+f.top;!c.started&&j&&Math.abs(e.x-i.x)<j&&Math.abs(e.y-i.y)<j||(c.original||(c.original={x:k,y:l}),c.started||(g.onDragStart(d,k,l,a),c.started=!0),b.move(k,l)&&g.onDrag(d,c.x,c.y,a))},move:function(a,b){var c=this,d=c.dragEvent,e=c.options,f=e.grid,g=c.element.style,h=c.limit(a,b,d.original.x,d.original.y);return!e.smoothDrag&&f&&(h=c.round(h,f)),h.x!==d.x||h.y!==d.y?(d.x=h.x,d.y=h.y,g.left=h.x+"px",g.top=h.y+"px",!0):!1},stop:function(a){var b,c=this,d=c.dragEvent,e=c.element,f=c.options,g=f.grid;k.off(document,c.handlers.move),e.style.zIndex=d.oldZindex,f.smoothDrag&&g&&(b=c.round({x:d.x,y:d.y},g),c.move(b.x,b.y),k.assign(c.dragEvent,b)),c.dragEvent.started&&f.onDragEnd(e,d.x,d.y,a),c.reset()},reset:function(){this.dragEvent.started=!1},round:function(a){var b=this.options.grid;return{x:b*Math.round(a.x/b),y:b*Math.round(a.y/b)}},getCursor:function(a){return{x:(a.targetTouches?a.targetTouches[0]:a).clientX,y:(a.targetTouches?a.targetTouches[0]:a).clientY}},setCursor:function(a){this._cursor=a},setLimit:function(a){var b=this,c=function(a,b){return{x:a,y:b}};if(g(a))b.limit=a;else if(f(a)){var d=b._dimensions,h=a.scrollHeight-d.height,i=a.scrollWidth-d.width;b.limit=function(a,b){return{x:k.limit(a,[0,i]),y:k.limit(b,[0,h])}}}else if(a){var j={x:e(a.x),y:e(a.y)};b.limit=j.x||j.y?function(b,c){return{x:j.x?k.limit(b,a.x):b,y:j.y?k.limit(c,a.y):c}}:c}else b.limit=c},setPosition:function(){var a=this,c=a.element,d=c.style;k.assign(a._dimensions,{left:b(d.left)||c.offsetLeft,top:b(d.top)||c.offsetTop})},setZoom:function(){for(var a=this,b=a.element,d=1;b=b.offsetParent;){var e=c(b).zoom;if(e&&"normal"!==e){d=e;break}}a._dimensions.zoom=d},useTarget:function(a){var b=this.options.filterTarget;return b instanceof Function?b(a):!0},destroy:function(){k.off(this.handle,this.handlers.start),k.off(document,this.handlers.move)}}),a});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _draggable = __webpack_require__(9);

var _draggable2 = _interopRequireDefault(_draggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DragHandler = function () {
    function DragHandler(element, origin) {
        var _this = this;

        _classCallCheck(this, DragHandler);

        this.inTarget = false;
        this.origin = origin || { x: 0, y: 0 };
        this.targetRect = null;
        this.onEndCb = this.onStartCb = this.onMoveCb = null;
        this.container = element;
        this.container.style.cursor = 'move';
        this.draggable = new _draggable2.default(this.container, {
            useGPU: true,
            limit: {
                x: [0, window.innerWidth],
                y: [0, window.innerHeight]
            },
            onDragStart: function onDragStart(element, x, y, event) {
                _this.targetRect = game.vase.container.getBoundingClientRect();
                if (_this.onStartCb) {
                    var ret = {
                        element: element,
                        position: element.getBoundingClientRect(),
                        event: event
                    };
                    ret.inTarget = _this.isInRect(ret.position);
                    _this.onStartCb(ret);
                }
            },
            onDrag: function onDrag(element, x, y, event) {
                if (_this.onMoveCb) {
                    var ret = {
                        element: element,
                        position: element.getBoundingClientRect(),
                        event: event
                    };
                    ret.inTarget = _this.isInRect(ret.position);
                    _this.onMoveCb(ret);
                }
            },
            onDragEnd: function onDragEnd(element, x, y, event) {
                var ret = {
                    element: element,
                    position: element.getBoundingClientRect(),
                    event: event
                };
                ret.inTarget = _this.isInRect(ret.position);
                _this.onExitDroppable();
                _this.container.style.transitionDuration = '1s';
                _this.container.style.pointerEvents = 'none';
                _this.container.style.top = '';
                _this.container.style.left = '';
                after(1000, function () {
                    _this.container.style.transitionDuration = '0s';
                    _this.container.style.pointerEvents = 'auto';
                });
                if (_this.onEndCb) _this.onEndCb(ret);
            }
        });
    }

    _createClass(DragHandler, [{
        key: 'onStart',
        value: function onStart(cb) {
            this.onStartCb = cb;
        }
    }, {
        key: 'onMove',
        value: function onMove(cb) {
            this.onMoveCb = cb;
        }
    }, {
        key: 'onEnd',
        value: function onEnd(cb) {
            this.onEndCb = cb;
        }
    }, {
        key: 'onEnterDroppable',
        value: function onEnterDroppable() {
            game.vase.container.classList.add('draggable-over');
        }
    }, {
        key: 'onExitDroppable',
        value: function onExitDroppable() {
            game.vase.container.classList.remove('draggable-over');
        }
    }, {
        key: 'isInRect',
        value: function isInRect(position) {
            var rect = this.targetRect;
            var targetCenterX = rect.left + rect.width / 2;
            var targetCenterY = rect.top + rect.height / 2;
            var distance = Math.sqrt(Math.pow(targetCenterX - position.left + this.origin.x, 2) + Math.pow(targetCenterY - position.top - this.origin.y, 2));
            var newInTargetCalculated = distance < 70;
            if (this.inTarget && !newInTargetCalculated) this.onExitDroppable();else if (!this.inTarget && newInTargetCalculated) this.onEnterDroppable();
            this.inTarget = newInTargetCalculated;
            return newInTargetCalculated;
        }
    }]);

    return DragHandler;
}();

exports.default = DragHandler;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzIzNjk3N2UxZGI0NjNkMWM4NDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm94LmpzIiwid2VicGFjazovLy8uL3NyYy9WYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9QYXBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU29pbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZHJhZ2dhYmxlL2Rpc3QvZHJhZ2dhYmxlLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhZ0hhbmRsZXIuanMiXSwibmFtZXMiOlsid2luZG93IiwiJCIsInF1ZXJ5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJCQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWZ0ZXIiLCJ0aW1lIiwiZG9XaGF0Iiwic2V0VGltZW91dCIsImV2ZXJ5Iiwic2V0SW50ZXJ2YWwiLCJHYW1lIiwicmVhZHkiLCJiaW5kIiwiYm94IiwidmFzZSIsInBhcGVyIiwic29pbCIsInNlZWQiLCJnbGFzc2VzIiwidW5ib3giLCJvcGVuIiwiY29tZU91dCIsIm5leHQiLCJjb25zb2xlIiwibG9nIiwiZ2FtZSIsImltYWdlcyIsIkltYWdlTG9hZGVyIiwidXJsIiwib25kb25lIiwibG9hZGVkQ291bnQiLCJuYW1lIiwibG9hZCIsImFkZHJlc3MiLCJpbWFnZSIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJvbmxvYWQiLCJsZW5ndGgiLCJCb3giLCJjb250YWluZXIiLCJvcGVuQm94SW1hZ2UiLCJjbG9zZUJveEltYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpeFNpemVzIiwic3R5bGUiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwibWFyZ2luTGVmdCIsImFyZWFEaXN0RnJvbVRvcCIsInRvcCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidmFzZUV2b2x1dGlvblF1ZXVlIiwiVmFzZSIsInN0YXRlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwibmV4dEluZGV4IiwiaW5kZXhPZiIsIk1hdGgiLCJtaW4iLCJ0byIsIl9zdGF0ZSIsInNldEF0dHJpYnV0ZSIsIlBhcGVyIiwiaXRlbXMiLCJpdGVtSW5kZXgiLCJkdXJhdGlvbiIsImJvbGQiLCJvbkRvbmUiLCJTb2lsIiwiU2VlZCIsIkdsYXNzZXMiLCJkcmFnZ2FibGUiLCJ4IiwieSIsIm9uU3RhcnQiLCJ0aWx0Iiwib25Nb3ZlIiwiZSIsImluVGFyZ2V0Iiwib25FbmQiLCJ1bnRpbHQiLCJEcmFnSGFuZGxlciIsImVsZW1lbnQiLCJvcmlnaW4iLCJ0YXJnZXRSZWN0Iiwib25FbmRDYiIsIm9uU3RhcnRDYiIsIm9uTW92ZUNiIiwiY3Vyc29yIiwidXNlR1BVIiwibGltaXQiLCJpbm5lcldpZHRoIiwib25EcmFnU3RhcnQiLCJldmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJldCIsInBvc2l0aW9uIiwiaXNJblJlY3QiLCJvbkRyYWciLCJvbkRyYWdFbmQiLCJvbkV4aXREcm9wcGFibGUiLCJwb2ludGVyRXZlbnRzIiwibGVmdCIsImNiIiwicmVjdCIsInRhcmdldENlbnRlclgiLCJ0YXJnZXRDZW50ZXJZIiwiZGlzdGFuY2UiLCJzcXJ0IiwicG93IiwibmV3SW5UYXJnZXRDYWxjdWxhdGVkIiwib25FbnRlckRyb3BwYWJsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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U25ELEdBQXpCLEdBQStCLEtBQUtzQyxNQUFMLENBQVlWLENBQXJELEVBQXlELENBQXpELENBRmEsQ0FBakI7QUFJQSxnQkFBTXFDLHdCQUF3QkgsV0FBVyxFQUF6QztBQUNBLGdCQUFJLEtBQUs3QixRQUFMLElBQWlCLENBQUNnQyxxQkFBdEIsRUFBNkMsS0FBS1YsZUFBTCxHQUE3QyxLQUNLLElBQUksQ0FBQyxLQUFLdEIsUUFBTixJQUFrQmdDLHFCQUF0QixFQUE2QyxLQUFLQyxnQkFBTDtBQUNsRCxpQkFBS2pDLFFBQUwsR0FBZ0JnQyxxQkFBaEI7QUFDQSxtQkFBT0EscUJBQVA7QUFDSDs7Ozs7O2tCQUdVN0IsVyIsImZpbGUiOiIuL3B1YmxpYy9zY3JpcHRzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDcyMzY5NzdlMWRiNDYzZDFjODQ3IiwiaW1wb3J0IEltYWdlTG9hZGVyIGZyb20gJy4vSW1hZ2VMb2FkZXInXHJcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnXHJcbmltcG9ydCBWYXNlIGZyb20gJy4vVmFzZSdcclxuaW1wb3J0IFBhcGVyIGZyb20gJy4vUGFwZXInXHJcbmltcG9ydCBTb2lsIGZyb20gJy4vU29pbCdcclxuaW1wb3J0IFNlZWQgZnJvbSAnLi9TZWVkJ1xyXG5pbXBvcnQgR2xhc3NlcyBmcm9tICcuL0dsYXNzZXMnXHJcblxyXG53aW5kb3cuJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XHJcbndpbmRvdy4kJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSk7XHJcblxyXG53aW5kb3cuYWZ0ZXIgPSAodGltZSwgZG9XaGF0KSA9PiBzZXRUaW1lb3V0KGRvV2hhdCwgdGltZSk7XHJcbndpbmRvdy5ldmVyeSA9ICh0aW1lLCBkb1doYXQpID0+IHNldEludGVydmFsKGRvV2hhdCwgdGltZSk7XHJcblxyXG5jbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBuZXcgSW1hZ2VMb2FkZXIoJy4vYXNzZXRzL2ltYWdlcycsIHRoaXMucmVhZHkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5ib3ggPSBuZXcgQm94KCcuZ2FtZSAuYm94Jyk7XHJcbiAgICAgICAgdGhpcy52YXNlID0gbmV3IFZhc2UoJy5nYW1lIC52YXNlJyk7XHJcbiAgICAgICAgdGhpcy5wYXBlciA9IG5ldyBQYXBlcignLmdhbWUgLnBhcGVyJywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zb2lsID0gbmV3IFNvaWwoJy5nYW1lIC5zb2lsJyk7XHJcbiAgICAgICAgdGhpcy5zZWVkID0gbmV3IFNlZWQoJy5nYW1lIC5zZWVkJyk7XHJcbiAgICAgICAgdGhpcy5nbGFzc2VzID0gbmV3IEdsYXNzZXMoJy5nYW1lIC5nbGFzc2VzJylcclxuICAgIH1cclxuICAgIHJlYWR5ICgpIHtcclxuICAgICAgICBhZnRlcigxMDAwLCB0aGlzLnVuYm94LmJpbmQodGhpcykpXHJcbiAgICB9XHJcbiAgICB1bmJveCAoKSB7XHJcbiAgICAgICAgdGhpcy5ib3gub3BlbigpO1xyXG4gICAgICAgIGFmdGVyKDIwMCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnZhc2UuY29tZU91dCgpO1xyXG4gICAgICAgICAgICBhZnRlcigxMDAsICgpID0+IHt0aGlzLnBhcGVyLmNvbWVPdXQoKTt9KTtcclxuICAgICAgICAgICAgYWZ0ZXIoMzAwMCwgKCkgPT4ge3RoaXMucGFwZXIubmV4dCgpO30pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIG9uRG9uZSAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RvbmUnKVxyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuZ2FtZSA9IG5ldyBHYW1lKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiY29uc3QgaW1hZ2VzID0gWydib3gtY2xvc2UucG5nJywgJ2JveC1vcGVuLnBuZycsICdkZXNrLnN2ZycsICdlbXB0eS12YXNlLnBuZycsICdmaWxsZWQtdmFzZS5wbmcnLCAnZ2xhc3Nlcy10aWx0ZWQucG5nJywgJ2dsYXNzZXMucG5nJywgJ2lwaG9uZS5wbmcnLCAncGxhbnQucG5nJywgJ3NlZWQucG5nJywgJ3NlZWRlZC12YXNlLnBuZycsICdzb2lsLnBuZycsICdzb2lsZWQtdmFzZS5wbmcnLCAnd2V0LXZhc2UucG5nJ11cclxuXHJcbmNsYXNzIEltYWdlTG9hZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yICh1cmwsIG9uZG9uZSkge1xyXG4gICAgICAgIHRoaXMub25kb25lID0gb25kb25lXHJcbiAgICAgICAgdGhpcy5sb2FkZWRDb3VudCA9IDBcclxuICAgICAgICBmb3IgKGxldCBuYW1lIG9mIGltYWdlcykgdGhpcy5sb2FkKHVybCArICcvJyArIG5hbWUpXHJcbiAgICB9XHJcbiAgICBsb2FkIChhZGRyZXNzKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgIGltYWdlLnNyYyA9IGFkZHJlc3NcclxuICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVkQ291bnQrK1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2FkZWRDb3VudCA9PT0gaW1hZ2VzLmxlbmd0aCAmJiB0aGlzLm9uZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbmRvbmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUxvYWRlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JbWFnZUxvYWRlci5qcyIsImNsYXNzIEJveCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHRoaXMub3BlbkJveEltYWdlID0gJChxdWVyeSArICcgLm9wZW4nKTtcclxuICAgICAgICB0aGlzLmNsb3NlQm94SW1hZ2UgPSAkKHF1ZXJ5ICsgJyAuY2xvc2UnKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5maXhTaXplcy5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIGZpeFNpemVzICgpIHtcclxuICAgICAgICB0aGlzLm9wZW5Cb3hJbWFnZS5zdHlsZS53aWR0aCA9ICh0aGlzLmNsb3NlQm94SW1hZ2Uub2Zmc2V0V2lkdGggKiAoNDY0IC8gMzAwKSkgKyAncHgnO1xyXG4gICAgICAgIHRoaXMub3BlbkJveEltYWdlLnN0eWxlLm1hcmdpbkxlZnQgPSAodGhpcy5jbG9zZUJveEltYWdlLm9mZnNldFdpZHRoIC8gLTIwMCkgKyAncHgnO1xyXG4gICAgICAgIHdpbmRvdy5hcmVhRGlzdEZyb21Ub3AgPSAodGhpcy5jbG9zZUJveEltYWdlLm9mZnNldFdpZHRoICogKDExIC8gMjgpKTtcclxuICAgICAgICAkKCcuZ2FtZSA+IC5hcmVhJykuc3R5bGUudG9wID0gYXJlYURpc3RGcm9tVG9wICsgJ3B4JztcclxuICAgICAgICAkKCcuZ2FtZSA+IC5hcmVhJykuc3R5bGUuaGVpZ2h0ID0gKHdpbmRvdy5pbm5lckhlaWdodCAtIGFyZWFEaXN0RnJvbVRvcCkgKyAncHgnXHJcbiAgICB9XHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLmZpeFNpemVzKCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpXHJcbiAgICB9XHJcbiAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5maXhTaXplcygpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQm94LmpzIiwiY29uc3QgdmFzZUV2b2x1dGlvblF1ZXVlID0gWydlbXB0eScsICdzb2lsZWQnLCAnc2VlZGVkJywgJ2ZpbGxlZCcsICd3ZXQnLCAnZ3JlZW4nXTtcclxuXHJcbmNsYXNzIFZhc2Uge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gJ2VtcHR5J1xyXG4gICAgfVxyXG4gICAgc2V0IHN0YXRlICh0bykge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdG87XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgdG8pXHJcbiAgICB9XHJcbiAgICBnZXQgc3RhdGUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZVxyXG4gICAgfVxyXG4gICAgY29tZU91dCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3V0JylcclxuICAgICAgICBhZnRlcigyMDAwLCAoKSA9PiB7IHRoaXMuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwLjNzJyB9KVxyXG4gICAgfVxyXG4gICAgbmV4dCAoKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gdmFzZUV2b2x1dGlvblF1ZXVlLmluZGV4T2YodGhpcy5zdGF0ZSkgKyAxO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB2YXNlRXZvbHV0aW9uUXVldWVbTWF0aC5taW4obmV4dEluZGV4LCB2YXNlRXZvbHV0aW9uUXVldWUubGVuZ3RoIC0gMSldXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZhc2VcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVmFzZS5qcyIsImNsYXNzIFBhcGVyIHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSwgZ2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gJCQocXVlcnkgKyAnIGxpJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pdGVtcyk7XHJcbiAgICAgICAgdGhpcy5pdGVtSW5kZXggPSAwO1xyXG4gICAgfVxyXG4gICAgY29tZU91dCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3V0JylcclxuICAgIH1cclxuICAgIGJvbGQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvbGQnKTtcclxuICAgICAgICBhZnRlcigyMDAwLCAoKT0+eyB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdib2xkJykgfSlcclxuICAgIH1cclxuICAgIG5leHQgKCkge1xyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5pdGVtSW5kZXggPT09IDAgPyAwIDogMTAwMDtcclxuICAgICAgICBpZiAodGhpcy5pdGVtSW5kZXggPiAwKSB0aGlzLml0ZW1zW3RoaXMuaXRlbUluZGV4LTFdLmNsYXNzTGlzdC5hZGQoJ3RpY2snKTtcclxuICAgICAgICBpZiAodGhpcy5pdGVtSW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aCkgeyBhZnRlcihkdXJhdGlvbiwgKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ib2xkKClcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLml0ZW1JbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUluZGV4KytcclxuICAgICAgICB9KSB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUub25Eb25lKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1BhcGVyLmpzIiwiY2xhc3MgU29pbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29pbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Tb2lsLmpzIiwiY2xhc3MgU2VlZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VlZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TZWVkLmpzIiwiaW1wb3J0IERyYWdIYW5kbGVyIGZyb20gJy4vRHJhZ0hhbmRsZXInXHJcblxyXG5jbGFzcyBHbGFzc2VzIHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUgPSBuZXcgRHJhZ0hhbmRsZXIodGhpcy5jb250YWluZXIsIHt4OiAwLCB5OiA4MH0pO1xyXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlLm9uU3RhcnQoZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGlsdCgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUub25Nb3ZlKGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLmluVGFyZ2V0KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlLm9uRW5kKGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVudGlsdCgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aWx0ICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aWx0JylcclxuICAgIH1cclxuICAgIHVudGlsdCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndGlsdCcpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsYXNzZXNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvR2xhc3Nlcy5qcyIsIiFmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWIoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGIpOmEuRHJhZ2dhYmxlPWIoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGEoYSxiKXt2YXIgYz10aGlzLGQ9ay5iaW5kKGMuc3RhcnQsYyksZT1rLmJpbmQoYy5kcmFnLGMpLGc9ay5iaW5kKGMuc3RvcCxjKTtpZighZihhKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiRHJhZ2dhYmxlIGV4cGVjdHMgYXJndW1lbnQgMCB0byBiZSBhbiBFbGVtZW50XCIpO2I9ay5hc3NpZ24oe30saSxiKSxrLmFzc2lnbihjLHtlbGVtZW50OmEsaGFuZGxlOmIuaGFuZGxlJiZmKGIuaGFuZGxlKT9iLmhhbmRsZTphLGhhbmRsZXJzOntzdGFydDp7bW91c2Vkb3duOmQsdG91Y2hzdGFydDpkfSxtb3ZlOnttb3VzZW1vdmU6ZSxtb3VzZXVwOmcsdG91Y2htb3ZlOmUsdG91Y2hlbmQ6Z319LG9wdGlvbnM6Yn0pLGMuaW5pdGlhbGl6ZSgpfWZ1bmN0aW9uIGIoYSl7cmV0dXJuIHBhcnNlSW50KGEsMTApfWZ1bmN0aW9uIGMoYSl7cmV0dXJuXCJjdXJyZW50U3R5bGVcImluIGE/YS5jdXJyZW50U3R5bGU6Z2V0Q29tcHV0ZWRTdHlsZShhKX1mdW5jdGlvbiBkKGEpe3JldHVybiBhIGluc3RhbmNlb2YgQXJyYXl9ZnVuY3Rpb24gZShhKXtyZXR1cm4gdm9pZCAwIT09YSYmbnVsbCE9PWF9ZnVuY3Rpb24gZihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIEVsZW1lbnR8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBIVE1MRG9jdW1lbnQmJmEgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnR9ZnVuY3Rpb24gZyhhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIEZ1bmN0aW9ufWZ1bmN0aW9uIGgoKXt9dmFyIGk9e2dyaWQ6MCxmaWx0ZXJUYXJnZXQ6bnVsbCxsaW1pdDp7eDpudWxsLHk6bnVsbH0sdGhyZXNob2xkOjAsc2V0Q3Vyc29yOiExLHNldFBvc2l0aW9uOiEwLHNtb290aERyYWc6ITAsdXNlR1BVOiEwLG9uRHJhZzpoLG9uRHJhZ1N0YXJ0Omgsb25EcmFnRW5kOmh9LGo9e3RyYW5zZm9ybTpmdW5jdGlvbigpe2Zvcih2YXIgYT1cIiAtby0gLW1zLSAtbW96LSAtd2Via2l0LVwiLnNwbGl0KFwiIFwiKSxiPWRvY3VtZW50LmJvZHkuc3R5bGUsYz1hLmxlbmd0aDtjLS07KXt2YXIgZD1hW2NdK1widHJhbnNmb3JtXCI7aWYoZCBpbiBiKXJldHVybiBkfX0oKX0saz17YXNzaWduOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPWFyZ3VtZW50c1swXSxiPWFyZ3VtZW50cy5sZW5ndGgsYz0xO2I+YztjKyspe3ZhciBkPWFyZ3VtZW50c1tjXTtmb3IodmFyIGUgaW4gZClhW2VdPWRbZV19cmV0dXJuIGF9LGJpbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZnVuY3Rpb24oKXthLmFwcGx5KGIsYXJndW1lbnRzKX19LG9uOmZ1bmN0aW9uKGEsYixjKXtpZihiJiZjKWsuYWRkRXZlbnQoYSxiLGMpO2Vsc2UgaWYoYilmb3IodmFyIGQgaW4gYilrLmFkZEV2ZW50KGEsZCxiW2RdKX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXtpZihiJiZjKWsucmVtb3ZlRXZlbnQoYSxiLGMpO2Vsc2UgaWYoYilmb3IodmFyIGQgaW4gYilrLnJlbW92ZUV2ZW50KGEsZCxiW2RdKX0sbGltaXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZChiKT8oYj1bK2JbMF0sK2JbMV1dLGE8YlswXT9hPWJbMF06YT5iWzFdJiYoYT1iWzFdKSk6YT0rYixhfSxhZGRFdmVudDpcImF0dGFjaEV2ZW50XCJpbiBFbGVtZW50LnByb3RvdHlwZT9mdW5jdGlvbihhLGIsYyl7YS5hdHRhY2hFdmVudChcIm9uXCIrYixjKX06ZnVuY3Rpb24oYSxiLGMpe2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfSxyZW1vdmVFdmVudDpcImF0dGFjaEV2ZW50XCJpbiBFbGVtZW50LnByb3RvdHlwZT9mdW5jdGlvbihhLGIsYyl7YS5kZXRhY2hFdmVudChcIm9uXCIrYixjKX06ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMpfX07cmV0dXJuIGsuYXNzaWduKGEucHJvdG90eXBlLHtzZXRPcHRpb246ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBjLm9wdGlvbnNbYV09YixjLmluaXRpYWxpemUoKSxjfSxnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmRyYWdFdmVudDtyZXR1cm57eDphLngseTphLnl9fSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQ9Yy5kcmFnRXZlbnQ7cmV0dXJuIGQub3JpZ2luYWw9e3g6ZC54LHk6ZC55fSxjLm1vdmUoYSxiKSxjfSxkcmFnRXZlbnQ6e3N0YXJ0ZWQ6ITEseDowLHk6MH0saW5pdGlhbGl6ZTpmdW5jdGlvbigpe3ZhciBhLGI9dGhpcyxkPWIuZWxlbWVudCxlPShiLmhhbmRsZSxkLnN0eWxlKSxmPWMoZCksZz1iLm9wdGlvbnMsaD1qLnRyYW5zZm9ybSxpPWIuX2RpbWVuc2lvbnM9e2hlaWdodDpkLm9mZnNldEhlaWdodCxsZWZ0OmQub2Zmc2V0TGVmdCx0b3A6ZC5vZmZzZXRUb3Asd2lkdGg6ZC5vZmZzZXRXaWR0aH07Zy51c2VHUFUmJmgmJihhPWZbaF0sXCJub25lXCI9PT1hJiYoYT1cIlwiKSxlW2hdPWErXCIgdHJhbnNsYXRlM2QoMCwwLDApXCIpLGcuc2V0UG9zaXRpb24mJihlLmRpc3BsYXk9XCJibG9ja1wiLGUubGVmdD1pLmxlZnQrXCJweFwiLGUudG9wPWkudG9wK1wicHhcIixlLmJvdHRvbT1lLnJpZ2h0PVwiYXV0b1wiLGUubWFyZ2luPTAsZS5wb3NpdGlvbj1cImFic29sdXRlXCIpLGcuc2V0Q3Vyc29yJiYoZS5jdXJzb3I9XCJtb3ZlXCIpLGIuc2V0TGltaXQoZy5saW1pdCksay5hc3NpZ24oYi5kcmFnRXZlbnQse3g6aS5sZWZ0LHk6aS50b3B9KSxrLm9uKGIuaGFuZGxlLGIuaGFuZGxlcnMuc3RhcnQpfSxzdGFydDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9Yi5nZXRDdXJzb3IoYSksZD1iLmVsZW1lbnQ7Yi51c2VUYXJnZXQoYS50YXJnZXR8fGEuc3JjRWxlbWVudCkmJihhLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTphLnJldHVyblZhbHVlPSExLGIuZHJhZ0V2ZW50Lm9sZFppbmRleD1kLnN0eWxlLnpJbmRleCxkLnN0eWxlLnpJbmRleD0xZTQsYi5zZXRDdXJzb3IoYyksYi5zZXRQb3NpdGlvbigpLGIuc2V0Wm9vbSgpLGsub24oZG9jdW1lbnQsYi5oYW5kbGVycy5tb3ZlKSl9LGRyYWc6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPWIuZHJhZ0V2ZW50LGQ9Yi5lbGVtZW50LGU9Yi5fY3Vyc29yLGY9Yi5fZGltZW5zaW9ucyxnPWIub3B0aW9ucyxoPWYuem9vbSxpPWIuZ2V0Q3Vyc29yKGEpLGo9Zy50aHJlc2hvbGQsaz0oaS54LWUueCkvaCtmLmxlZnQsbD0oaS55LWUueSkvaCtmLnRvcDshYy5zdGFydGVkJiZqJiZNYXRoLmFicyhlLngtaS54KTxqJiZNYXRoLmFicyhlLnktaS55KTxqfHwoYy5vcmlnaW5hbHx8KGMub3JpZ2luYWw9e3g6ayx5Omx9KSxjLnN0YXJ0ZWR8fChnLm9uRHJhZ1N0YXJ0KGQsayxsLGEpLGMuc3RhcnRlZD0hMCksYi5tb3ZlKGssbCkmJmcub25EcmFnKGQsYy54LGMueSxhKSl9LG1vdmU6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQ9Yy5kcmFnRXZlbnQsZT1jLm9wdGlvbnMsZj1lLmdyaWQsZz1jLmVsZW1lbnQuc3R5bGUsaD1jLmxpbWl0KGEsYixkLm9yaWdpbmFsLngsZC5vcmlnaW5hbC55KTtyZXR1cm4hZS5zbW9vdGhEcmFnJiZmJiYoaD1jLnJvdW5kKGgsZikpLGgueCE9PWQueHx8aC55IT09ZC55PyhkLng9aC54LGQueT1oLnksZy5sZWZ0PWgueCtcInB4XCIsZy50b3A9aC55K1wicHhcIiwhMCk6ITF9LHN0b3A6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLGQ9Yy5kcmFnRXZlbnQsZT1jLmVsZW1lbnQsZj1jLm9wdGlvbnMsZz1mLmdyaWQ7ay5vZmYoZG9jdW1lbnQsYy5oYW5kbGVycy5tb3ZlKSxlLnN0eWxlLnpJbmRleD1kLm9sZFppbmRleCxmLnNtb290aERyYWcmJmcmJihiPWMucm91bmQoe3g6ZC54LHk6ZC55fSxnKSxjLm1vdmUoYi54LGIueSksay5hc3NpZ24oYy5kcmFnRXZlbnQsYikpLGMuZHJhZ0V2ZW50LnN0YXJ0ZWQmJmYub25EcmFnRW5kKGUsZC54LGQueSxhKSxjLnJlc2V0KCl9LHJlc2V0OmZ1bmN0aW9uKCl7dGhpcy5kcmFnRXZlbnQuc3RhcnRlZD0hMX0scm91bmQ6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLmdyaWQ7cmV0dXJue3g6YipNYXRoLnJvdW5kKGEueC9iKSx5OmIqTWF0aC5yb3VuZChhLnkvYil9fSxnZXRDdXJzb3I6ZnVuY3Rpb24oYSl7cmV0dXJue3g6KGEudGFyZ2V0VG91Y2hlcz9hLnRhcmdldFRvdWNoZXNbMF06YSkuY2xpZW50WCx5OihhLnRhcmdldFRvdWNoZXM/YS50YXJnZXRUb3VjaGVzWzBdOmEpLmNsaWVudFl9fSxzZXRDdXJzb3I6ZnVuY3Rpb24oYSl7dGhpcy5fY3Vyc29yPWF9LHNldExpbWl0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1mdW5jdGlvbihhLGIpe3JldHVybnt4OmEseTpifX07aWYoZyhhKSliLmxpbWl0PWE7ZWxzZSBpZihmKGEpKXt2YXIgZD1iLl9kaW1lbnNpb25zLGg9YS5zY3JvbGxIZWlnaHQtZC5oZWlnaHQsaT1hLnNjcm9sbFdpZHRoLWQud2lkdGg7Yi5saW1pdD1mdW5jdGlvbihhLGIpe3JldHVybnt4OmsubGltaXQoYSxbMCxpXSkseTprLmxpbWl0KGIsWzAsaF0pfX19ZWxzZSBpZihhKXt2YXIgaj17eDplKGEueCkseTplKGEueSl9O2IubGltaXQ9ai54fHxqLnk/ZnVuY3Rpb24oYixjKXtyZXR1cm57eDpqLng/ay5saW1pdChiLGEueCk6Yix5OmoueT9rLmxpbWl0KGMsYS55KTpjfX06Y31lbHNlIGIubGltaXQ9Y30sc2V0UG9zaXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGM9YS5lbGVtZW50LGQ9Yy5zdHlsZTtrLmFzc2lnbihhLl9kaW1lbnNpb25zLHtsZWZ0OmIoZC5sZWZ0KXx8Yy5vZmZzZXRMZWZ0LHRvcDpiKGQudG9wKXx8Yy5vZmZzZXRUb3B9KX0sc2V0Wm9vbTpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLGI9YS5lbGVtZW50LGQ9MTtiPWIub2Zmc2V0UGFyZW50Oyl7dmFyIGU9YyhiKS56b29tO2lmKGUmJlwibm9ybWFsXCIhPT1lKXtkPWU7YnJlYWt9fWEuX2RpbWVuc2lvbnMuem9vbT1kfSx1c2VUYXJnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLmZpbHRlclRhcmdldDtyZXR1cm4gYiBpbnN0YW5jZW9mIEZ1bmN0aW9uP2IoYSk6ITB9LGRlc3Ryb3k6ZnVuY3Rpb24oKXtrLm9mZih0aGlzLmhhbmRsZSx0aGlzLmhhbmRsZXJzLnN0YXJ0KSxrLm9mZihkb2N1bWVudCx0aGlzLmhhbmRsZXJzLm1vdmUpfX0pLGF9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kcmFnZ2FibGUvZGlzdC9kcmFnZ2FibGUubWluLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBEcmFnZ2FibGUgZnJvbSAnZHJhZ2dhYmxlJ1xyXG5cclxuY2xhc3MgRHJhZ0hhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3JpZ2luKSB7XHJcbiAgICAgICAgdGhpcy5pblRhcmdldCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5vcmlnaW4gPSBvcmlnaW4gfHwge3g6IDAsIHk6IDB9O1xyXG4gICAgICAgIHRoaXMudGFyZ2V0UmVjdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbkVuZENiID0gdGhpcy5vblN0YXJ0Q2IgPSB0aGlzLm9uTW92ZUNiID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xyXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZSh0aGlzLmNvbnRhaW5lciwge1xyXG4gICAgICAgICAgICB1c2VHUFU6IHRydWUsXHJcbiAgICAgICAgICAgIGxpbWl0OiB7XHJcbiAgICAgICAgICAgICAgICB4OiBbMCwgd2luZG93LmlubmVyV2lkdGhdLFxyXG4gICAgICAgICAgICAgICAgeTogWzAsIHdpbmRvdy5pbm5lckhlaWdodF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25EcmFnU3RhcnQ6IChlbGVtZW50LCB4LCB5LCBldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRSZWN0ID0gZ2FtZS52YXNlLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uU3RhcnRDYikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0LmluVGFyZ2V0ID0gdGhpcy5pc0luUmVjdChyZXQucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25TdGFydENiKHJldClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25EcmFnOiAoZWxlbWVudCwgeCwgeSwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uTW92ZUNiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXQuaW5UYXJnZXQgPSB0aGlzLmlzSW5SZWN0KHJldC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk1vdmVDYihyZXQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRHJhZ0VuZDogKGVsZW1lbnQsIHgsIHksIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICAgICAgICAgICAgICBldmVudDogZXZlbnRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZXQuaW5UYXJnZXQgPSB0aGlzLmlzSW5SZWN0KHJldC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXhpdERyb3BwYWJsZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMXMnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUubGVmdCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXIoMTAwMCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbkVuZENiKSB0aGlzLm9uRW5kQ2IocmV0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvblN0YXJ0IChjYikge1xyXG4gICAgICAgIHRoaXMub25TdGFydENiID0gY2JcclxuICAgIH1cclxuICAgIG9uTW92ZSAoY2IpIHtcclxuICAgICAgICB0aGlzLm9uTW92ZUNiID0gY2JcclxuICAgIH1cclxuICAgIG9uRW5kIChjYikge1xyXG4gICAgICAgIHRoaXMub25FbmRDYiA9IGNiXHJcbiAgICB9XHJcbiAgICBvbkVudGVyRHJvcHBhYmxlICgpIHtcclxuICAgICAgICBnYW1lLnZhc2UuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RyYWdnYWJsZS1vdmVyJylcclxuICAgIH1cclxuICAgIG9uRXhpdERyb3BwYWJsZSAoKSB7XHJcbiAgICAgICAgZ2FtZS52YXNlLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2FibGUtb3ZlcicpXHJcbiAgICB9XHJcbiAgICBpc0luUmVjdCAocG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy50YXJnZXRSZWN0O1xyXG4gICAgICAgIGNvbnN0IHRhcmdldENlbnRlclggPSByZWN0LmxlZnQgKyByZWN0LndpZHRoLzI7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Q2VudGVyWSA9IHJlY3QudG9wICsgcmVjdC5oZWlnaHQvMjtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChcclxuICAgICAgICAgICAgTWF0aC5wb3coKHRhcmdldENlbnRlclggLSBwb3NpdGlvbi5sZWZ0ICsgdGhpcy5vcmlnaW4ueCksIDIpICtcclxuICAgICAgICAgICAgTWF0aC5wb3coKHRhcmdldENlbnRlclkgLSBwb3NpdGlvbi50b3AgLSB0aGlzLm9yaWdpbi55KSwgMilcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IG5ld0luVGFyZ2V0Q2FsY3VsYXRlZCA9IGRpc3RhbmNlIDwgNzA7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5UYXJnZXQgJiYgIW5ld0luVGFyZ2V0Q2FsY3VsYXRlZCkgdGhpcy5vbkV4aXREcm9wcGFibGUoKTtcclxuICAgICAgICBlbHNlIGlmICghdGhpcy5pblRhcmdldCAmJiBuZXdJblRhcmdldENhbGN1bGF0ZWQpIHRoaXMub25FbnRlckRyb3BwYWJsZSgpO1xyXG4gICAgICAgIHRoaXMuaW5UYXJnZXQgPSBuZXdJblRhcmdldENhbGN1bGF0ZWQ7XHJcbiAgICAgICAgcmV0dXJuIG5ld0luVGFyZ2V0Q2FsY3VsYXRlZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmFnSGFuZGxlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9EcmFnSGFuZGxlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=