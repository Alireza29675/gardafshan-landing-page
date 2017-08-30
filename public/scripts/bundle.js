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
        this.vase = new _Vase2.default('.game .vase', this);
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

var vaseEvolutionQueue = ['empty', 'soiled', 'seeded', 'filled', 'wet', 'green-little', 'green-medium', 'green-full'];
var levels = ['soil', 'seed', 'soil', 'water', 'water', 'water'];

var Vase = function () {
    function Vase(query, game) {
        _classCallCheck(this, Vase);

        this.game = game;
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
            if (this.state === 'wet') after(300, this.next.bind(this));
            if (!['wet', 'green-little', 'green-medium'].includes(this.state)) this.game.paper.next();
        }
    }, {
        key: 'onDrop',
        value: function onDrop(element) {
            var dropped = element.getAttribute('data-name');
            if (dropped === levels[0]) {
                levels.shift();
                this.next();
            }
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

var _DragHandler = __webpack_require__(10);

var _DragHandler2 = _interopRequireDefault(_DragHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Soil = function Soil(query) {
    var _this = this;

    _classCallCheck(this, Soil);

    this.container = $(query);
    this.draggable = new _DragHandler2.default(this.container, { x: 100, y: 0 });
    window.addEventListener('resize', function () {
        _this.container.style.top = '';
        _this.container.style.left = '';
    });
};

exports.default = Soil;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DragHandler = __webpack_require__(10);

var _DragHandler2 = _interopRequireDefault(_DragHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Seed = function Seed(query) {
    var _this = this;

    _classCallCheck(this, Seed);

    this.container = $(query);
    this.draggable = new _DragHandler2.default(this.container, { x: 50, y: 0 });
    window.addEventListener('resize', function () {
        _this.container.style.top = '';
        _this.container.style.left = '';
    });
};

exports.default = Seed;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DragHandler = __webpack_require__(10);

var _DragHandler2 = _interopRequireDefault(_DragHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Glasses = function Glasses(query) {
    var _this = this;

    _classCallCheck(this, Glasses);

    this.container = $(query);
    this.draggable = new _DragHandler2.default(this.container, { x: 0, y: 80 });
    window.addEventListener('resize', function () {
        _this.container.style.top = '';
        _this.container.style.left = '';
    });
};

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
                _this.container.classList.add('over-droppable');
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
                var ret = {
                    element: element,
                    position: element.getBoundingClientRect(),
                    event: event
                };
                ret.inTarget = _this.isInRect(ret.position);
                if (_this.onMoveCb) _this.onMoveCb(ret);
            },
            onDragEnd: function onDragEnd(element, x, y, event) {
                _this.container.classList.remove('over-droppable');
                var ret = {
                    element: element,
                    position: element.getBoundingClientRect(),
                    event: event
                };
                ret.inTarget = _this.isInRect(ret.position);
                if (ret.inTarget) _this.droppedOnTarget();
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
        key: 'droppedOnTarget',
        value: function droppedOnTarget() {
            game.vase.onDrop(this.container);
        }
    }, {
        key: 'isInRect',
        value: function isInRect(position) {
            var rect = this.targetRect;
            var targetCenterX = rect.left + rect.width / 2;
            var targetCenterY = rect.top + rect.height / 2;
            var distance = Math.sqrt(Math.pow(targetCenterX - position.left - this.origin.x, 2) + Math.pow(targetCenterY - position.top - this.origin.y, 2));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDU5OGMxODM0YWNlY2M5N2ViNmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9JbWFnZUxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQm94LmpzIiwid2VicGFjazovLy8uL3NyYy9WYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9QYXBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU29pbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZHJhZ2dhYmxlL2Rpc3QvZHJhZ2dhYmxlLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJhZ0hhbmRsZXIuanMiXSwibmFtZXMiOlsid2luZG93IiwiJCIsInF1ZXJ5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJCQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWZ0ZXIiLCJ0aW1lIiwiZG9XaGF0Iiwic2V0VGltZW91dCIsImV2ZXJ5Iiwic2V0SW50ZXJ2YWwiLCJHYW1lIiwicmVhZHkiLCJiaW5kIiwiYm94IiwidmFzZSIsInBhcGVyIiwic29pbCIsInNlZWQiLCJnbGFzc2VzIiwidW5ib3giLCJvcGVuIiwiY29tZU91dCIsIm5leHQiLCJnYW1lIiwiaW1hZ2VzIiwiSW1hZ2VMb2FkZXIiLCJ1cmwiLCJvbmRvbmUiLCJsb2FkZWRDb3VudCIsIm5hbWUiLCJsb2FkIiwiYWRkcmVzcyIsImltYWdlIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsIm9ubG9hZCIsImxlbmd0aCIsIkJveCIsImNvbnRhaW5lciIsIm9wZW5Cb3hJbWFnZSIsImNsb3NlQm94SW1hZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZml4U2l6ZXMiLCJzdHlsZSIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJtYXJnaW5MZWZ0IiwiYXJlYURpc3RGcm9tVG9wIiwidG9wIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ2YXNlRXZvbHV0aW9uUXVldWUiLCJsZXZlbHMiLCJWYXNlIiwic3RhdGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJuZXh0SW5kZXgiLCJpbmRleE9mIiwiTWF0aCIsIm1pbiIsImluY2x1ZGVzIiwiZWxlbWVudCIsImRyb3BwZWQiLCJnZXRBdHRyaWJ1dGUiLCJzaGlmdCIsInRvIiwiX3N0YXRlIiwic2V0QXR0cmlidXRlIiwiUGFwZXIiLCJpdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJpdGVtSW5kZXgiLCJkdXJhdGlvbiIsImJvbGQiLCJTb2lsIiwiZHJhZ2dhYmxlIiwieCIsInkiLCJsZWZ0IiwiU2VlZCIsIkdsYXNzZXMiLCJEcmFnSGFuZGxlciIsIm9yaWdpbiIsImluVGFyZ2V0IiwidGFyZ2V0UmVjdCIsIm9uRW5kQ2IiLCJvblN0YXJ0Q2IiLCJvbk1vdmVDYiIsImN1cnNvciIsInVzZUdQVSIsImxpbWl0IiwiaW5uZXJXaWR0aCIsIm9uRHJhZ1N0YXJ0IiwiZXZlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyZXQiLCJwb3NpdGlvbiIsImlzSW5SZWN0Iiwib25EcmFnIiwib25EcmFnRW5kIiwiZHJvcHBlZE9uVGFyZ2V0Iiwib25FeGl0RHJvcHBhYmxlIiwicG9pbnRlckV2ZW50cyIsImNiIiwib25Ecm9wIiwicmVjdCIsInRhcmdldENlbnRlclgiLCJ0YXJnZXRDZW50ZXJZIiwiZGlzdGFuY2UiLCJzcXJ0IiwicG93IiwibmV3SW5UYXJnZXRDYWxjdWxhdGVkIiwib25FbnRlckRyb3BwYWJsZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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bkQsS0FBS29ELElBQUwsQ0FDYnBELEtBQUtxRCxHQUFMLENBQVVKLGdCQUFnQlYsU0FBU2xCLElBQXpCLEdBQWdDLEtBQUtJLE1BQUwsQ0FBWU4sQ0FBdEQsRUFBMEQsQ0FBMUQsSUFDQW5CLEtBQUtxRCxHQUFMLENBQVVILGdCQUFnQlgsU0FBU3BELEdBQXpCLEdBQStCLEtBQUtzQyxNQUFMLENBQVlMLENBQXJELEVBQXlELENBQXpELENBRmEsQ0FBakI7QUFJQSxnQkFBTWtDLHdCQUF3QkgsV0FBVyxFQUF6QztBQUNBLGdCQUFJLEtBQUt6QixRQUFMLElBQWlCLENBQUM0QixxQkFBdEIsRUFBNkMsS0FBS1YsZUFBTCxHQUE3QyxLQUNLLElBQUksQ0FBQyxLQUFLbEIsUUFBTixJQUFrQjRCLHFCQUF0QixFQUE2QyxLQUFLQyxnQkFBTDtBQUNsRCxpQkFBSzdCLFFBQUwsR0FBZ0I0QixxQkFBaEI7QUFDQSxtQkFBT0EscUJBQVA7QUFDSDs7Ozs7O2tCQUdVOUIsVyIsImZpbGUiOiIuL3B1YmxpYy9zY3JpcHRzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ1OThjMTgzNGFjZWNjOTdlYjZiIiwiaW1wb3J0IEltYWdlTG9hZGVyIGZyb20gJy4vSW1hZ2VMb2FkZXInXHJcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnXHJcbmltcG9ydCBWYXNlIGZyb20gJy4vVmFzZSdcclxuaW1wb3J0IFBhcGVyIGZyb20gJy4vUGFwZXInXHJcbmltcG9ydCBTb2lsIGZyb20gJy4vU29pbCdcclxuaW1wb3J0IFNlZWQgZnJvbSAnLi9TZWVkJ1xyXG5pbXBvcnQgR2xhc3NlcyBmcm9tICcuL0dsYXNzZXMnXHJcblxyXG53aW5kb3cuJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XHJcbndpbmRvdy4kJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSk7XHJcblxyXG53aW5kb3cuYWZ0ZXIgPSAodGltZSwgZG9XaGF0KSA9PiBzZXRUaW1lb3V0KGRvV2hhdCwgdGltZSk7XHJcbndpbmRvdy5ldmVyeSA9ICh0aW1lLCBkb1doYXQpID0+IHNldEludGVydmFsKGRvV2hhdCwgdGltZSk7XHJcblxyXG5jbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBuZXcgSW1hZ2VMb2FkZXIoJy4vYXNzZXRzL2ltYWdlcycsIHRoaXMucmVhZHkuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5ib3ggPSBuZXcgQm94KCcuZ2FtZSAuYm94Jyk7XHJcbiAgICAgICAgdGhpcy52YXNlID0gbmV3IFZhc2UoJy5nYW1lIC52YXNlJywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wYXBlciA9IG5ldyBQYXBlcignLmdhbWUgLnBhcGVyJywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zb2lsID0gbmV3IFNvaWwoJy5nYW1lIC5zb2lsJyk7XHJcbiAgICAgICAgdGhpcy5zZWVkID0gbmV3IFNlZWQoJy5nYW1lIC5zZWVkJyk7XHJcbiAgICAgICAgdGhpcy5nbGFzc2VzID0gbmV3IEdsYXNzZXMoJy5nYW1lIC5nbGFzc2VzJylcclxuICAgIH1cclxuICAgIHJlYWR5ICgpIHtcclxuICAgICAgICBhZnRlcigxMDAwLCB0aGlzLnVuYm94LmJpbmQodGhpcykpXHJcbiAgICB9XHJcbiAgICB1bmJveCAoKSB7XHJcbiAgICAgICAgdGhpcy5ib3gub3BlbigpO1xyXG4gICAgICAgIGFmdGVyKDIwMCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnZhc2UuY29tZU91dCgpO1xyXG4gICAgICAgICAgICBhZnRlcigxMDAsICgpID0+IHt0aGlzLnBhcGVyLmNvbWVPdXQoKTt9KTtcclxuICAgICAgICAgICAgYWZ0ZXIoMzAwMCwgKCkgPT4ge3RoaXMucGFwZXIubmV4dCgpO30pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LmdhbWUgPSBuZXcgR2FtZSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImNvbnN0IGltYWdlcyA9IFsnYm94LWNsb3NlLnBuZycsICdib3gtb3Blbi5wbmcnLCAnZGVzay5zdmcnLCAnZW1wdHktdmFzZS5wbmcnLCAnZmlsbGVkLXZhc2UucG5nJywgJ2dsYXNzZXMtdGlsdGVkLnBuZycsICdnbGFzc2VzLnBuZycsICdpcGhvbmUucG5nJywgJ3BsYW50LnBuZycsICdzZWVkLnBuZycsICdzZWVkZWQtdmFzZS5wbmcnLCAnc29pbC5wbmcnLCAnc29pbGVkLXZhc2UucG5nJywgJ3dldC12YXNlLnBuZyddXHJcblxyXG5jbGFzcyBJbWFnZUxvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAodXJsLCBvbmRvbmUpIHtcclxuICAgICAgICB0aGlzLm9uZG9uZSA9IG9uZG9uZVxyXG4gICAgICAgIHRoaXMubG9hZGVkQ291bnQgPSAwXHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBvZiBpbWFnZXMpIHRoaXMubG9hZCh1cmwgKyAnLycgKyBuYW1lKVxyXG4gICAgfVxyXG4gICAgbG9hZCAoYWRkcmVzcykge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICBpbWFnZS5zcmMgPSBhZGRyZXNzXHJcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlZENvdW50KytcclxuICAgICAgICAgICAgaWYgKHRoaXMubG9hZGVkQ291bnQgPT09IGltYWdlcy5sZW5ndGggJiYgdGhpcy5vbmRvbmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25kb25lKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VMb2FkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSW1hZ2VMb2FkZXIuanMiLCJjbGFzcyBCb3gge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLm9wZW5Cb3hJbWFnZSA9ICQocXVlcnkgKyAnIC5vcGVuJyk7XHJcbiAgICAgICAgdGhpcy5jbG9zZUJveEltYWdlID0gJChxdWVyeSArICcgLmNsb3NlJyk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZml4U2l6ZXMuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBmaXhTaXplcyAoKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuQm94SW1hZ2Uuc3R5bGUud2lkdGggPSAodGhpcy5jbG9zZUJveEltYWdlLm9mZnNldFdpZHRoICogKDQ2NCAvIDMwMCkpICsgJ3B4JztcclxuICAgICAgICB0aGlzLm9wZW5Cb3hJbWFnZS5zdHlsZS5tYXJnaW5MZWZ0ID0gKHRoaXMuY2xvc2VCb3hJbWFnZS5vZmZzZXRXaWR0aCAvIC0yMDApICsgJ3B4JztcclxuICAgICAgICB3aW5kb3cuYXJlYURpc3RGcm9tVG9wID0gKHRoaXMuY2xvc2VCb3hJbWFnZS5vZmZzZXRXaWR0aCAqICgxMSAvIDI4KSk7XHJcbiAgICAgICAgJCgnLmdhbWUgPiAuYXJlYScpLnN0eWxlLnRvcCA9IGFyZWFEaXN0RnJvbVRvcCArICdweCc7XHJcbiAgICAgICAgJCgnLmdhbWUgPiAuYXJlYScpLnN0eWxlLmhlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBhcmVhRGlzdEZyb21Ub3ApICsgJ3B4J1xyXG4gICAgfVxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5maXhTaXplcygpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKVxyXG4gICAgfVxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMuZml4U2l6ZXMoKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm94XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0JveC5qcyIsImNvbnN0IHZhc2VFdm9sdXRpb25RdWV1ZSA9IFsnZW1wdHknLCAnc29pbGVkJywgJ3NlZWRlZCcsICdmaWxsZWQnLCAnd2V0JywgJ2dyZWVuLWxpdHRsZScsICdncmVlbi1tZWRpdW0nLCAnZ3JlZW4tZnVsbCddO1xyXG5sZXQgbGV2ZWxzID0gWydzb2lsJywgJ3NlZWQnLCAnc29pbCcsICd3YXRlcicsICd3YXRlcicsICd3YXRlciddO1xyXG5cclxuY2xhc3MgVmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnksIGdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdlbXB0eSdcclxuICAgIH1cclxuICAgIHNldCBzdGF0ZSAodG8pIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHRvO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsIHRvKVxyXG4gICAgfVxyXG4gICAgZ2V0IHN0YXRlICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGVcclxuICAgIH1cclxuICAgIGNvbWVPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dCcpO1xyXG4gICAgICAgIGFmdGVyKDIwMDAsICgpID0+IHsgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzAuM3MnIH0pXHJcbiAgICB9XHJcbiAgICBuZXh0ICgpIHtcclxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSB2YXNlRXZvbHV0aW9uUXVldWUuaW5kZXhPZih0aGlzLnN0YXRlKSArIDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHZhc2VFdm9sdXRpb25RdWV1ZVtNYXRoLm1pbihuZXh0SW5kZXgsIHZhc2VFdm9sdXRpb25RdWV1ZS5sZW5ndGggLSAxKV07XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICd3ZXQnKSBhZnRlcigzMDAsIHRoaXMubmV4dC5iaW5kKHRoaXMpKVxyXG4gICAgICAgIGlmICghWyd3ZXQnLCAnZ3JlZW4tbGl0dGxlJywgJ2dyZWVuLW1lZGl1bSddLmluY2x1ZGVzKHRoaXMuc3RhdGUpKSB0aGlzLmdhbWUucGFwZXIubmV4dCgpXHJcbiAgICB9XHJcbiAgICBvbkRyb3AgKGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBkcm9wcGVkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG4gICAgICAgIGlmIChkcm9wcGVkID09PSBsZXZlbHNbMF0pIHtcclxuICAgICAgICAgICAgbGV2ZWxzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWYXNlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Zhc2UuanMiLCJjbGFzcyBQYXBlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnksIGdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9ICQkKHF1ZXJ5ICsgJyBsaScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXRlbXMpO1xyXG4gICAgICAgIHRoaXMuaXRlbUluZGV4ID0gMDtcclxuICAgIH1cclxuICAgIGNvbWVPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dCcpXHJcbiAgICB9XHJcbiAgICBib2xkICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2xkJyk7XHJcbiAgICAgICAgYWZ0ZXIoMjAwMCwgKCk9PnsgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYm9sZCcpIH0pXHJcbiAgICB9XHJcbiAgICBuZXh0ICgpIHtcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuaXRlbUluZGV4ID09PSAwID8gMCA6IDEwMDA7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbUluZGV4ID4gMCkgdGhpcy5pdGVtc1t0aGlzLml0ZW1JbmRleC0xXS5jbGFzc0xpc3QuYWRkKCd0aWNrJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbUluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGgpIHsgYWZ0ZXIoZHVyYXRpb24sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ib2xkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5pdGVtSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1JbmRleCsrXHJcbiAgICAgICAgfSkgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXBlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QYXBlci5qcyIsImltcG9ydCBEcmFnSGFuZGxlciBmcm9tICcuL0RyYWdIYW5kbGVyJ1xyXG5cclxuY2xhc3MgU29pbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUgPSBuZXcgRHJhZ0hhbmRsZXIodGhpcy5jb250YWluZXIsIHt4OiAxMDAsIHk6IDB9KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUubGVmdCA9ICcnO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvaWxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU29pbC5qcyIsImltcG9ydCBEcmFnSGFuZGxlciBmcm9tICcuL0RyYWdIYW5kbGVyJ1xyXG5cclxuY2xhc3MgU2VlZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSlcclxuICAgICAgICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnSGFuZGxlcih0aGlzLmNvbnRhaW5lciwge3g6IDUwLCB5OiAwfSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSAnJztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWVkXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NlZWQuanMiLCJpbXBvcnQgRHJhZ0hhbmRsZXIgZnJvbSAnLi9EcmFnSGFuZGxlcidcclxuXHJcbmNsYXNzIEdsYXNzZXMge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnSGFuZGxlcih0aGlzLmNvbnRhaW5lciwge3g6IDAsIHk6IDgwfSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSAnJztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbGFzc2VzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0dsYXNzZXMuanMiLCIhZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxiKTphLkRyYWdnYWJsZT1iKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBhKGEsYil7dmFyIGM9dGhpcyxkPWsuYmluZChjLnN0YXJ0LGMpLGU9ay5iaW5kKGMuZHJhZyxjKSxnPWsuYmluZChjLnN0b3AsYyk7aWYoIWYoYSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRyYWdnYWJsZSBleHBlY3RzIGFyZ3VtZW50IDAgdG8gYmUgYW4gRWxlbWVudFwiKTtiPWsuYXNzaWduKHt9LGksYiksay5hc3NpZ24oYyx7ZWxlbWVudDphLGhhbmRsZTpiLmhhbmRsZSYmZihiLmhhbmRsZSk/Yi5oYW5kbGU6YSxoYW5kbGVyczp7c3RhcnQ6e21vdXNlZG93bjpkLHRvdWNoc3RhcnQ6ZH0sbW92ZTp7bW91c2Vtb3ZlOmUsbW91c2V1cDpnLHRvdWNobW92ZTplLHRvdWNoZW5kOmd9fSxvcHRpb25zOmJ9KSxjLmluaXRpYWxpemUoKX1mdW5jdGlvbiBiKGEpe3JldHVybiBwYXJzZUludChhLDEwKX1mdW5jdGlvbiBjKGEpe3JldHVyblwiY3VycmVudFN0eWxlXCJpbiBhP2EuY3VycmVudFN0eWxlOmdldENvbXB1dGVkU3R5bGUoYSl9ZnVuY3Rpb24gZChhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIEFycmF5fWZ1bmN0aW9uIGUoYSl7cmV0dXJuIHZvaWQgMCE9PWEmJm51bGwhPT1hfWZ1bmN0aW9uIGYoYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBFbGVtZW50fHxcInVuZGVmaW5lZFwiIT10eXBlb2YgSFRNTERvY3VtZW50JiZhIGluc3RhbmNlb2YgSFRNTERvY3VtZW50fWZ1bmN0aW9uIGcoYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBGdW5jdGlvbn1mdW5jdGlvbiBoKCl7fXZhciBpPXtncmlkOjAsZmlsdGVyVGFyZ2V0Om51bGwsbGltaXQ6e3g6bnVsbCx5Om51bGx9LHRocmVzaG9sZDowLHNldEN1cnNvcjohMSxzZXRQb3NpdGlvbjohMCxzbW9vdGhEcmFnOiEwLHVzZUdQVTohMCxvbkRyYWc6aCxvbkRyYWdTdGFydDpoLG9uRHJhZ0VuZDpofSxqPXt0cmFuc2Zvcm06ZnVuY3Rpb24oKXtmb3IodmFyIGE9XCIgLW8tIC1tcy0gLW1vei0gLXdlYmtpdC1cIi5zcGxpdChcIiBcIiksYj1kb2N1bWVudC5ib2R5LnN0eWxlLGM9YS5sZW5ndGg7Yy0tOyl7dmFyIGQ9YVtjXStcInRyYW5zZm9ybVwiO2lmKGQgaW4gYilyZXR1cm4gZH19KCl9LGs9e2Fzc2lnbjpmdW5jdGlvbigpe2Zvcih2YXIgYT1hcmd1bWVudHNbMF0sYj1hcmd1bWVudHMubGVuZ3RoLGM9MTtiPmM7YysrKXt2YXIgZD1hcmd1bWVudHNbY107Zm9yKHZhciBlIGluIGQpYVtlXT1kW2VdfXJldHVybiBhfSxiaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGZ1bmN0aW9uKCl7YS5hcHBseShiLGFyZ3VtZW50cyl9fSxvbjpmdW5jdGlvbihhLGIsYyl7aWYoYiYmYylrLmFkZEV2ZW50KGEsYixjKTtlbHNlIGlmKGIpZm9yKHZhciBkIGluIGIpay5hZGRFdmVudChhLGQsYltkXSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7aWYoYiYmYylrLnJlbW92ZUV2ZW50KGEsYixjKTtlbHNlIGlmKGIpZm9yKHZhciBkIGluIGIpay5yZW1vdmVFdmVudChhLGQsYltkXSl9LGxpbWl0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIGQoYik/KGI9WytiWzBdLCtiWzFdXSxhPGJbMF0/YT1iWzBdOmE+YlsxXSYmKGE9YlsxXSkpOmE9K2IsYX0sYWRkRXZlbnQ6XCJhdHRhY2hFdmVudFwiaW4gRWxlbWVudC5wcm90b3R5cGU/ZnVuY3Rpb24oYSxiLGMpe2EuYXR0YWNoRXZlbnQoXCJvblwiK2IsYyl9OmZ1bmN0aW9uKGEsYixjKXthLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKX0scmVtb3ZlRXZlbnQ6XCJhdHRhY2hFdmVudFwiaW4gRWxlbWVudC5wcm90b3R5cGU/ZnVuY3Rpb24oYSxiLGMpe2EuZGV0YWNoRXZlbnQoXCJvblwiK2IsYyl9OmZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjKX19O3JldHVybiBrLmFzc2lnbihhLnByb3RvdHlwZSx7c2V0T3B0aW9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztyZXR1cm4gYy5vcHRpb25zW2FdPWIsYy5pbml0aWFsaXplKCksY30sZ2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5kcmFnRXZlbnQ7cmV0dXJue3g6YS54LHk6YS55fX0sc2V0OmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxkPWMuZHJhZ0V2ZW50O3JldHVybiBkLm9yaWdpbmFsPXt4OmQueCx5OmQueX0sYy5tb3ZlKGEsYiksY30sZHJhZ0V2ZW50OntzdGFydGVkOiExLHg6MCx5OjB9LGluaXRpYWxpemU6ZnVuY3Rpb24oKXt2YXIgYSxiPXRoaXMsZD1iLmVsZW1lbnQsZT0oYi5oYW5kbGUsZC5zdHlsZSksZj1jKGQpLGc9Yi5vcHRpb25zLGg9ai50cmFuc2Zvcm0saT1iLl9kaW1lbnNpb25zPXtoZWlnaHQ6ZC5vZmZzZXRIZWlnaHQsbGVmdDpkLm9mZnNldExlZnQsdG9wOmQub2Zmc2V0VG9wLHdpZHRoOmQub2Zmc2V0V2lkdGh9O2cudXNlR1BVJiZoJiYoYT1mW2hdLFwibm9uZVwiPT09YSYmKGE9XCJcIiksZVtoXT1hK1wiIHRyYW5zbGF0ZTNkKDAsMCwwKVwiKSxnLnNldFBvc2l0aW9uJiYoZS5kaXNwbGF5PVwiYmxvY2tcIixlLmxlZnQ9aS5sZWZ0K1wicHhcIixlLnRvcD1pLnRvcCtcInB4XCIsZS5ib3R0b209ZS5yaWdodD1cImF1dG9cIixlLm1hcmdpbj0wLGUucG9zaXRpb249XCJhYnNvbHV0ZVwiKSxnLnNldEN1cnNvciYmKGUuY3Vyc29yPVwibW92ZVwiKSxiLnNldExpbWl0KGcubGltaXQpLGsuYXNzaWduKGIuZHJhZ0V2ZW50LHt4OmkubGVmdCx5OmkudG9wfSksay5vbihiLmhhbmRsZSxiLmhhbmRsZXJzLnN0YXJ0KX0sc3RhcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPWIuZ2V0Q3Vyc29yKGEpLGQ9Yi5lbGVtZW50O2IudXNlVGFyZ2V0KGEudGFyZ2V0fHxhLnNyY0VsZW1lbnQpJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT0hMSxiLmRyYWdFdmVudC5vbGRaaW5kZXg9ZC5zdHlsZS56SW5kZXgsZC5zdHlsZS56SW5kZXg9MWU0LGIuc2V0Q3Vyc29yKGMpLGIuc2V0UG9zaXRpb24oKSxiLnNldFpvb20oKSxrLm9uKGRvY3VtZW50LGIuaGFuZGxlcnMubW92ZSkpfSxkcmFnOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1iLmRyYWdFdmVudCxkPWIuZWxlbWVudCxlPWIuX2N1cnNvcixmPWIuX2RpbWVuc2lvbnMsZz1iLm9wdGlvbnMsaD1mLnpvb20saT1iLmdldEN1cnNvcihhKSxqPWcudGhyZXNob2xkLGs9KGkueC1lLngpL2grZi5sZWZ0LGw9KGkueS1lLnkpL2grZi50b3A7IWMuc3RhcnRlZCYmaiYmTWF0aC5hYnMoZS54LWkueCk8aiYmTWF0aC5hYnMoZS55LWkueSk8anx8KGMub3JpZ2luYWx8fChjLm9yaWdpbmFsPXt4OmsseTpsfSksYy5zdGFydGVkfHwoZy5vbkRyYWdTdGFydChkLGssbCxhKSxjLnN0YXJ0ZWQ9ITApLGIubW92ZShrLGwpJiZnLm9uRHJhZyhkLGMueCxjLnksYSkpfSxtb3ZlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxkPWMuZHJhZ0V2ZW50LGU9Yy5vcHRpb25zLGY9ZS5ncmlkLGc9Yy5lbGVtZW50LnN0eWxlLGg9Yy5saW1pdChhLGIsZC5vcmlnaW5hbC54LGQub3JpZ2luYWwueSk7cmV0dXJuIWUuc21vb3RoRHJhZyYmZiYmKGg9Yy5yb3VuZChoLGYpKSxoLnghPT1kLnh8fGgueSE9PWQueT8oZC54PWgueCxkLnk9aC55LGcubGVmdD1oLngrXCJweFwiLGcudG9wPWgueStcInB4XCIsITApOiExfSxzdG9wOmZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcyxkPWMuZHJhZ0V2ZW50LGU9Yy5lbGVtZW50LGY9Yy5vcHRpb25zLGc9Zi5ncmlkO2sub2ZmKGRvY3VtZW50LGMuaGFuZGxlcnMubW92ZSksZS5zdHlsZS56SW5kZXg9ZC5vbGRaaW5kZXgsZi5zbW9vdGhEcmFnJiZnJiYoYj1jLnJvdW5kKHt4OmQueCx5OmQueX0sZyksYy5tb3ZlKGIueCxiLnkpLGsuYXNzaWduKGMuZHJhZ0V2ZW50LGIpKSxjLmRyYWdFdmVudC5zdGFydGVkJiZmLm9uRHJhZ0VuZChlLGQueCxkLnksYSksYy5yZXNldCgpfSxyZXNldDpmdW5jdGlvbigpe3RoaXMuZHJhZ0V2ZW50LnN0YXJ0ZWQ9ITF9LHJvdW5kOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucy5ncmlkO3JldHVybnt4OmIqTWF0aC5yb3VuZChhLngvYikseTpiKk1hdGgucm91bmQoYS55L2IpfX0sZ2V0Q3Vyc29yOmZ1bmN0aW9uKGEpe3JldHVybnt4OihhLnRhcmdldFRvdWNoZXM/YS50YXJnZXRUb3VjaGVzWzBdOmEpLmNsaWVudFgseTooYS50YXJnZXRUb3VjaGVzP2EudGFyZ2V0VG91Y2hlc1swXTphKS5jbGllbnRZfX0sc2V0Q3Vyc29yOmZ1bmN0aW9uKGEpe3RoaXMuX2N1cnNvcj1hfSxzZXRMaW1pdDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9ZnVuY3Rpb24oYSxiKXtyZXR1cm57eDphLHk6Yn19O2lmKGcoYSkpYi5saW1pdD1hO2Vsc2UgaWYoZihhKSl7dmFyIGQ9Yi5fZGltZW5zaW9ucyxoPWEuc2Nyb2xsSGVpZ2h0LWQuaGVpZ2h0LGk9YS5zY3JvbGxXaWR0aC1kLndpZHRoO2IubGltaXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm57eDprLmxpbWl0KGEsWzAsaV0pLHk6ay5saW1pdChiLFswLGhdKX19fWVsc2UgaWYoYSl7dmFyIGo9e3g6ZShhLngpLHk6ZShhLnkpfTtiLmxpbWl0PWoueHx8ai55P2Z1bmN0aW9uKGIsYyl7cmV0dXJue3g6ai54P2subGltaXQoYixhLngpOmIseTpqLnk/ay5saW1pdChjLGEueSk6Y319OmN9ZWxzZSBiLmxpbWl0PWN9LHNldFBvc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxjPWEuZWxlbWVudCxkPWMuc3R5bGU7ay5hc3NpZ24oYS5fZGltZW5zaW9ucyx7bGVmdDpiKGQubGVmdCl8fGMub2Zmc2V0TGVmdCx0b3A6YihkLnRvcCl8fGMub2Zmc2V0VG9wfSl9LHNldFpvb206ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcyxiPWEuZWxlbWVudCxkPTE7Yj1iLm9mZnNldFBhcmVudDspe3ZhciBlPWMoYikuem9vbTtpZihlJiZcIm5vcm1hbFwiIT09ZSl7ZD1lO2JyZWFrfX1hLl9kaW1lbnNpb25zLnpvb209ZH0sdXNlVGFyZ2V0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucy5maWx0ZXJUYXJnZXQ7cmV0dXJuIGIgaW5zdGFuY2VvZiBGdW5jdGlvbj9iKGEpOiEwfSxkZXN0cm95OmZ1bmN0aW9uKCl7ay5vZmYodGhpcy5oYW5kbGUsdGhpcy5oYW5kbGVycy5zdGFydCksay5vZmYoZG9jdW1lbnQsdGhpcy5oYW5kbGVycy5tb3ZlKX19KSxhfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZHJhZ2dhYmxlL2Rpc3QvZHJhZ2dhYmxlLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgRHJhZ2dhYmxlIGZyb20gJ2RyYWdnYWJsZSdcclxuXHJcbmNsYXNzIERyYWdIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9yaWdpbikge1xyXG4gICAgICAgIHRoaXMuaW5UYXJnZXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbiB8fCB7eDogMCwgeTogMH07XHJcbiAgICAgICAgdGhpcy50YXJnZXRSZWN0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uRW5kQ2IgPSB0aGlzLm9uU3RhcnRDYiA9IHRoaXMub25Nb3ZlQ2IgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKHRoaXMuY29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgIHVzZUdQVTogdHJ1ZSxcclxuICAgICAgICAgICAgbGltaXQ6IHtcclxuICAgICAgICAgICAgICAgIHg6IFswLCB3aW5kb3cuaW5uZXJXaWR0aF0sXHJcbiAgICAgICAgICAgICAgICB5OiBbMCwgd2luZG93LmlubmVySGVpZ2h0XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkRyYWdTdGFydDogKGVsZW1lbnQsIHgsIHksIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdmVyLWRyb3BwYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRSZWN0ID0gZ2FtZS52YXNlLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uU3RhcnRDYikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0LmluVGFyZ2V0ID0gdGhpcy5pc0luUmVjdChyZXQucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25TdGFydENiKHJldClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25EcmFnOiAoZWxlbWVudCwgeCwgeSwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldC5pblRhcmdldCA9IHRoaXMuaXNJblJlY3QocmV0LnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uTW92ZUNiKSB0aGlzLm9uTW92ZUNiKHJldClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25EcmFnRW5kOiAoZWxlbWVudCwgeCwgeSwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXItZHJvcHBhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICAgICAgICAgICAgICBldmVudDogZXZlbnRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZXQuaW5UYXJnZXQgPSB0aGlzLmlzSW5SZWN0KHJldC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAocmV0LmluVGFyZ2V0KSB0aGlzLmRyb3BwZWRPblRhcmdldCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkV4aXREcm9wcGFibGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcxcyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBhZnRlcigxMDAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBzJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uRW5kQ2IpIHRoaXMub25FbmRDYihyZXQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uU3RhcnQgKGNiKSB7XHJcbiAgICAgICAgdGhpcy5vblN0YXJ0Q2IgPSBjYlxyXG4gICAgfVxyXG4gICAgb25Nb3ZlIChjYikge1xyXG4gICAgICAgIHRoaXMub25Nb3ZlQ2IgPSBjYlxyXG4gICAgfVxyXG4gICAgb25FbmQgKGNiKSB7XHJcbiAgICAgICAgdGhpcy5vbkVuZENiID0gY2JcclxuICAgIH1cclxuICAgIG9uRW50ZXJEcm9wcGFibGUgKCkge1xyXG4gICAgICAgIGdhbWUudmFzZS5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJhZ2dhYmxlLW92ZXInKVxyXG4gICAgfVxyXG4gICAgb25FeGl0RHJvcHBhYmxlICgpIHtcclxuICAgICAgICBnYW1lLnZhc2UuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnYWJsZS1vdmVyJylcclxuICAgIH1cclxuICAgIGRyb3BwZWRPblRhcmdldCAoKSB7XHJcbiAgICAgICAgZ2FtZS52YXNlLm9uRHJvcCh0aGlzLmNvbnRhaW5lcilcclxuICAgIH1cclxuICAgIGlzSW5SZWN0IChwb3NpdGlvbikge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLnRhcmdldFJlY3Q7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Q2VudGVyWCA9IHJlY3QubGVmdCArIHJlY3Qud2lkdGgvMjtcclxuICAgICAgICBjb25zdCB0YXJnZXRDZW50ZXJZID0gcmVjdC50b3AgKyByZWN0LmhlaWdodC8yO1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KFxyXG4gICAgICAgICAgICBNYXRoLnBvdygodGFyZ2V0Q2VudGVyWCAtIHBvc2l0aW9uLmxlZnQgLSB0aGlzLm9yaWdpbi54KSwgMikgK1xyXG4gICAgICAgICAgICBNYXRoLnBvdygodGFyZ2V0Q2VudGVyWSAtIHBvc2l0aW9uLnRvcCAtIHRoaXMub3JpZ2luLnkpLCAyKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbmV3SW5UYXJnZXRDYWxjdWxhdGVkID0gZGlzdGFuY2UgPCA3MDtcclxuICAgICAgICBpZiAodGhpcy5pblRhcmdldCAmJiAhbmV3SW5UYXJnZXRDYWxjdWxhdGVkKSB0aGlzLm9uRXhpdERyb3BwYWJsZSgpO1xyXG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmluVGFyZ2V0ICYmIG5ld0luVGFyZ2V0Q2FsY3VsYXRlZCkgdGhpcy5vbkVudGVyRHJvcHBhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5pblRhcmdldCA9IG5ld0luVGFyZ2V0Q2FsY3VsYXRlZDtcclxuICAgICAgICByZXR1cm4gbmV3SW5UYXJnZXRDYWxjdWxhdGVkXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYWdIYW5kbGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RyYWdIYW5kbGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==