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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _draggable = __webpack_require__(7);

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ImageLoader = __webpack_require__(2);

var _ImageLoader2 = _interopRequireDefault(_ImageLoader);

var _Box = __webpack_require__(3);

var _Box2 = _interopRequireDefault(_Box);

var _Vase = __webpack_require__(4);

var _Vase2 = _interopRequireDefault(_Vase);

var _Paper = __webpack_require__(5);

var _Paper2 = _interopRequireDefault(_Paper);

var _Soil = __webpack_require__(6);

var _Soil2 = _interopRequireDefault(_Soil);

var _Seed = __webpack_require__(8);

var _Seed2 = _interopRequireDefault(_Seed);

var _Glasses = __webpack_require__(9);

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
            after(4000, this.unBox.bind(this));
        }
    }, {
        key: 'unBox',
        value: function unBox() {
            var _this = this;

            this.box.open();
            after(200, function () {
                _this.soil.comeOut();
                _this.vase.comeOut();
                after(100, function () {
                    return _this.paper.comeOut();
                });
                after(200, function () {
                    return _this.seed.comeOut();
                });
                after(1000, function () {
                    return _this.glasses.comeOut();
                });
                after(3000, function () {
                    return _this.paper.next();
                });
            });
        }
    }]);

    return Game;
}();

window.game = new Game();

/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DragHandler = __webpack_require__(0);

var _DragHandler2 = _interopRequireDefault(_DragHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Soil = function () {
    function Soil(query) {
        var _this = this;

        _classCallCheck(this, Soil);

        this.container = $(query);
        window.addEventListener('resize', function () {
            _this.container.style.top = '';
            _this.container.style.left = '';
        });
    }

    _createClass(Soil, [{
        key: 'makeDraggable',
        value: function makeDraggable() {
            this.container.style.transitionDuration = '0s';
            this.draggable = new _DragHandler2.default(this.container, { x: 100, y: 0 });
        }
    }, {
        key: 'comeOut',
        value: function comeOut() {
            this.container.classList.add('out');
            after(1000, this.makeDraggable.bind(this));
        }
    }]);

    return Soil;
}();

exports.default = Soil;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

!function(a,b){ true?module.exports=b():"function"==typeof define&&define.amd?define([],b):a.Draggable=b()}(this,function(){"use strict";function a(a,b){var c=this,d=k.bind(c.start,c),e=k.bind(c.drag,c),g=k.bind(c.stop,c);if(!f(a))throw new TypeError("Draggable expects argument 0 to be an Element");b=k.assign({},i,b),k.assign(c,{element:a,handle:b.handle&&f(b.handle)?b.handle:a,handlers:{start:{mousedown:d,touchstart:d},move:{mousemove:e,mouseup:g,touchmove:e,touchend:g}},options:b}),c.initialize()}function b(a){return parseInt(a,10)}function c(a){return"currentStyle"in a?a.currentStyle:getComputedStyle(a)}function d(a){return a instanceof Array}function e(a){return void 0!==a&&null!==a}function f(a){return a instanceof Element||"undefined"!=typeof HTMLDocument&&a instanceof HTMLDocument}function g(a){return a instanceof Function}function h(){}var i={grid:0,filterTarget:null,limit:{x:null,y:null},threshold:0,setCursor:!1,setPosition:!0,smoothDrag:!0,useGPU:!0,onDrag:h,onDragStart:h,onDragEnd:h},j={transform:function(){for(var a=" -o- -ms- -moz- -webkit-".split(" "),b=document.body.style,c=a.length;c--;){var d=a[c]+"transform";if(d in b)return d}}()},k={assign:function(){for(var a=arguments[0],b=arguments.length,c=1;b>c;c++){var d=arguments[c];for(var e in d)a[e]=d[e]}return a},bind:function(a,b){return function(){a.apply(b,arguments)}},on:function(a,b,c){if(b&&c)k.addEvent(a,b,c);else if(b)for(var d in b)k.addEvent(a,d,b[d])},off:function(a,b,c){if(b&&c)k.removeEvent(a,b,c);else if(b)for(var d in b)k.removeEvent(a,d,b[d])},limit:function(a,b){return d(b)?(b=[+b[0],+b[1]],a<b[0]?a=b[0]:a>b[1]&&(a=b[1])):a=+b,a},addEvent:"attachEvent"in Element.prototype?function(a,b,c){a.attachEvent("on"+b,c)}:function(a,b,c){a.addEventListener(b,c,!1)},removeEvent:"attachEvent"in Element.prototype?function(a,b,c){a.detachEvent("on"+b,c)}:function(a,b,c){a.removeEventListener(b,c)}};return k.assign(a.prototype,{setOption:function(a,b){var c=this;return c.options[a]=b,c.initialize(),c},get:function(){var a=this.dragEvent;return{x:a.x,y:a.y}},set:function(a,b){var c=this,d=c.dragEvent;return d.original={x:d.x,y:d.y},c.move(a,b),c},dragEvent:{started:!1,x:0,y:0},initialize:function(){var a,b=this,d=b.element,e=(b.handle,d.style),f=c(d),g=b.options,h=j.transform,i=b._dimensions={height:d.offsetHeight,left:d.offsetLeft,top:d.offsetTop,width:d.offsetWidth};g.useGPU&&h&&(a=f[h],"none"===a&&(a=""),e[h]=a+" translate3d(0,0,0)"),g.setPosition&&(e.display="block",e.left=i.left+"px",e.top=i.top+"px",e.bottom=e.right="auto",e.margin=0,e.position="absolute"),g.setCursor&&(e.cursor="move"),b.setLimit(g.limit),k.assign(b.dragEvent,{x:i.left,y:i.top}),k.on(b.handle,b.handlers.start)},start:function(a){var b=this,c=b.getCursor(a),d=b.element;b.useTarget(a.target||a.srcElement)&&(a.preventDefault?a.preventDefault():a.returnValue=!1,b.dragEvent.oldZindex=d.style.zIndex,d.style.zIndex=1e4,b.setCursor(c),b.setPosition(),b.setZoom(),k.on(document,b.handlers.move))},drag:function(a){var b=this,c=b.dragEvent,d=b.element,e=b._cursor,f=b._dimensions,g=b.options,h=f.zoom,i=b.getCursor(a),j=g.threshold,k=(i.x-e.x)/h+f.left,l=(i.y-e.y)/h+f.top;!c.started&&j&&Math.abs(e.x-i.x)<j&&Math.abs(e.y-i.y)<j||(c.original||(c.original={x:k,y:l}),c.started||(g.onDragStart(d,k,l,a),c.started=!0),b.move(k,l)&&g.onDrag(d,c.x,c.y,a))},move:function(a,b){var c=this,d=c.dragEvent,e=c.options,f=e.grid,g=c.element.style,h=c.limit(a,b,d.original.x,d.original.y);return!e.smoothDrag&&f&&(h=c.round(h,f)),h.x!==d.x||h.y!==d.y?(d.x=h.x,d.y=h.y,g.left=h.x+"px",g.top=h.y+"px",!0):!1},stop:function(a){var b,c=this,d=c.dragEvent,e=c.element,f=c.options,g=f.grid;k.off(document,c.handlers.move),e.style.zIndex=d.oldZindex,f.smoothDrag&&g&&(b=c.round({x:d.x,y:d.y},g),c.move(b.x,b.y),k.assign(c.dragEvent,b)),c.dragEvent.started&&f.onDragEnd(e,d.x,d.y,a),c.reset()},reset:function(){this.dragEvent.started=!1},round:function(a){var b=this.options.grid;return{x:b*Math.round(a.x/b),y:b*Math.round(a.y/b)}},getCursor:function(a){return{x:(a.targetTouches?a.targetTouches[0]:a).clientX,y:(a.targetTouches?a.targetTouches[0]:a).clientY}},setCursor:function(a){this._cursor=a},setLimit:function(a){var b=this,c=function(a,b){return{x:a,y:b}};if(g(a))b.limit=a;else if(f(a)){var d=b._dimensions,h=a.scrollHeight-d.height,i=a.scrollWidth-d.width;b.limit=function(a,b){return{x:k.limit(a,[0,i]),y:k.limit(b,[0,h])}}}else if(a){var j={x:e(a.x),y:e(a.y)};b.limit=j.x||j.y?function(b,c){return{x:j.x?k.limit(b,a.x):b,y:j.y?k.limit(c,a.y):c}}:c}else b.limit=c},setPosition:function(){var a=this,c=a.element,d=c.style;k.assign(a._dimensions,{left:b(d.left)||c.offsetLeft,top:b(d.top)||c.offsetTop})},setZoom:function(){for(var a=this,b=a.element,d=1;b=b.offsetParent;){var e=c(b).zoom;if(e&&"normal"!==e){d=e;break}}a._dimensions.zoom=d},useTarget:function(a){var b=this.options.filterTarget;return b instanceof Function?b(a):!0},destroy:function(){k.off(this.handle,this.handlers.start),k.off(document,this.handlers.move)}}),a});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DragHandler = __webpack_require__(0);

var _DragHandler2 = _interopRequireDefault(_DragHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Seed = function () {
    function Seed(query) {
        var _this = this;

        _classCallCheck(this, Seed);

        this.container = $(query);
        window.addEventListener('resize', function () {
            _this.container.style.top = '';
            _this.container.style.left = '';
        });
    }

    _createClass(Seed, [{
        key: 'makeDraggable',
        value: function makeDraggable() {
            this.container.style.transitionDuration = '0s';
            this.draggable = new _DragHandler2.default(this.container, { x: 50, y: 0 });
        }
    }, {
        key: 'comeOut',
        value: function comeOut() {
            this.container.classList.add('out');
            after(1000, this.makeDraggable.bind(this));
        }
    }]);

    return Seed;
}();

exports.default = Seed;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DragHandler = __webpack_require__(0);

var _DragHandler2 = _interopRequireDefault(_DragHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Glasses = function () {
    function Glasses(query) {
        var _this = this;

        _classCallCheck(this, Glasses);

        this.container = $(query);
        window.addEventListener('resize', function () {
            _this.container.style.top = '';
            _this.container.style.left = '';
        });
    }

    _createClass(Glasses, [{
        key: 'makeDraggable',
        value: function makeDraggable() {
            this.container.style.transitionDuration = '0s';
            this.draggable = new _DragHandler2.default(this.container, { x: 0, y: 80 });
        }
    }, {
        key: 'comeOut',
        value: function comeOut() {
            this.container.classList.add('out');
            after(2000, this.makeDraggable.bind(this));
        }
    }]);

    return Glasses;
}();

exports.default = Glasses;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmJjZmUxYTQ4N2UzZDUxYmM2OTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RyYWdIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NvaWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RyYWdnYWJsZS9kaXN0L2RyYWdnYWJsZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dsYXNzZXMuanMiXSwibmFtZXMiOlsiRHJhZ0hhbmRsZXIiLCJlbGVtZW50Iiwib3JpZ2luIiwiaW5UYXJnZXQiLCJ4IiwieSIsInRhcmdldFJlY3QiLCJvbkVuZENiIiwib25TdGFydENiIiwib25Nb3ZlQ2IiLCJjb250YWluZXIiLCJzdHlsZSIsImN1cnNvciIsImRyYWdnYWJsZSIsInVzZUdQVSIsImxpbWl0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwib25EcmFnU3RhcnQiLCJldmVudCIsImNsYXNzTGlzdCIsImFkZCIsImdhbWUiLCJ2YXNlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmV0IiwicG9zaXRpb24iLCJpc0luUmVjdCIsIm9uRHJhZyIsIm9uRHJhZ0VuZCIsInJlbW92ZSIsImRyb3BwZWRPblRhcmdldCIsIm9uRXhpdERyb3BwYWJsZSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInBvaW50ZXJFdmVudHMiLCJ0b3AiLCJsZWZ0IiwiYWZ0ZXIiLCJjYiIsIm9uRHJvcCIsInJlY3QiLCJ0YXJnZXRDZW50ZXJYIiwid2lkdGgiLCJ0YXJnZXRDZW50ZXJZIiwiaGVpZ2h0IiwiZGlzdGFuY2UiLCJNYXRoIiwic3FydCIsInBvdyIsIm5ld0luVGFyZ2V0Q2FsY3VsYXRlZCIsIm9uRW50ZXJEcm9wcGFibGUiLCIkIiwicXVlcnkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0aW1lIiwiZG9XaGF0Iiwic2V0VGltZW91dCIsImV2ZXJ5Iiwic2V0SW50ZXJ2YWwiLCJHYW1lIiwicmVhZHkiLCJiaW5kIiwiYm94IiwicGFwZXIiLCJzb2lsIiwic2VlZCIsImdsYXNzZXMiLCJ1bkJveCIsIm9wZW4iLCJjb21lT3V0IiwibmV4dCIsImltYWdlcyIsIkltYWdlTG9hZGVyIiwidXJsIiwib25kb25lIiwibG9hZGVkQ291bnQiLCJuYW1lIiwibG9hZCIsImFkZHJlc3MiLCJpbWFnZSIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJvbmxvYWQiLCJsZW5ndGgiLCJCb3giLCJvcGVuQm94SW1hZ2UiLCJjbG9zZUJveEltYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpeFNpemVzIiwib2Zmc2V0V2lkdGgiLCJtYXJnaW5MZWZ0IiwiYXJlYURpc3RGcm9tVG9wIiwidmFzZUV2b2x1dGlvblF1ZXVlIiwibGV2ZWxzIiwiVmFzZSIsInN0YXRlIiwibmV4dEluZGV4IiwiaW5kZXhPZiIsIm1pbiIsImluY2x1ZGVzIiwiZHJvcHBlZCIsImdldEF0dHJpYnV0ZSIsInNoaWZ0IiwidG8iLCJfc3RhdGUiLCJzZXRBdHRyaWJ1dGUiLCJQYXBlciIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsIml0ZW1JbmRleCIsImR1cmF0aW9uIiwiYm9sZCIsIlNvaWwiLCJtYWtlRHJhZ2dhYmxlIiwiU2VlZCIsIkdsYXNzZXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7Ozs7Ozs7SUFFTUEsVztBQUNGLHlCQUFZQyxPQUFaLEVBQXFCQyxNQUFyQixFQUE2QjtBQUFBOztBQUFBOztBQUN6QixhQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsYUFBS0QsTUFBTCxHQUFjQSxVQUFVLEVBQUNFLEdBQUcsQ0FBSixFQUFPQyxHQUFHLENBQVYsRUFBeEI7QUFDQSxhQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsYUFBS0MsT0FBTCxHQUFlLEtBQUtDLFNBQUwsR0FBaUIsS0FBS0MsUUFBTCxHQUFnQixJQUFoRDtBQUNBLGFBQUtDLFNBQUwsR0FBaUJULE9BQWpCO0FBQ0EsYUFBS1MsU0FBTCxDQUFlQyxLQUFmLENBQXFCQyxNQUFyQixHQUE4QixNQUE5QjtBQUNBLGFBQUtDLFNBQUwsR0FBaUIsd0JBQWMsS0FBS0gsU0FBbkIsRUFBOEI7QUFDM0NJLG9CQUFRLElBRG1DO0FBRTNDQyxtQkFBTztBQUNIWCxtQkFBRyxDQUFDLENBQUQsRUFBSVksT0FBT0MsVUFBWCxDQURBO0FBRUhaLG1CQUFHLENBQUMsQ0FBRCxFQUFJVyxPQUFPRSxXQUFYO0FBRkEsYUFGb0M7QUFNM0NDLHlCQUFhLHFCQUFDbEIsT0FBRCxFQUFVRyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JlLEtBQWhCLEVBQTBCO0FBQ25DLHNCQUFLVixTQUFMLENBQWVXLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLGdCQUE3QjtBQUNBLHNCQUFLaEIsVUFBTCxHQUFrQmlCLEtBQUtDLElBQUwsQ0FBVWQsU0FBVixDQUFvQmUscUJBQXBCLEVBQWxCO0FBQ0Esb0JBQUksTUFBS2pCLFNBQVQsRUFBb0I7QUFDaEIsd0JBQU1rQixNQUFNO0FBQ1J6QixpQ0FBU0EsT0FERDtBQUVSMEIsa0NBQVUxQixRQUFRd0IscUJBQVIsRUFGRjtBQUdSTCwrQkFBT0E7QUFIQyxxQkFBWjtBQUtBTSx3QkFBSXZCLFFBQUosR0FBZSxNQUFLeUIsUUFBTCxDQUFjRixJQUFJQyxRQUFsQixDQUFmO0FBQ0EsMEJBQUtuQixTQUFMLENBQWVrQixHQUFmO0FBQ0g7QUFDSixhQWxCMEM7QUFtQjNDRyxvQkFBUSxnQkFBQzVCLE9BQUQsRUFBVUcsQ0FBVixFQUFhQyxDQUFiLEVBQWdCZSxLQUFoQixFQUEwQjtBQUM5QixvQkFBTU0sTUFBTTtBQUNSekIsNkJBQVNBLE9BREQ7QUFFUjBCLDhCQUFVMUIsUUFBUXdCLHFCQUFSLEVBRkY7QUFHUkwsMkJBQU9BO0FBSEMsaUJBQVo7QUFLQU0sb0JBQUl2QixRQUFKLEdBQWUsTUFBS3lCLFFBQUwsQ0FBY0YsSUFBSUMsUUFBbEIsQ0FBZjtBQUNBLG9CQUFJLE1BQUtsQixRQUFULEVBQW1CLE1BQUtBLFFBQUwsQ0FBY2lCLEdBQWQ7QUFDdEIsYUEzQjBDO0FBNEIzQ0ksdUJBQVcsbUJBQUM3QixPQUFELEVBQVVHLENBQVYsRUFBYUMsQ0FBYixFQUFnQmUsS0FBaEIsRUFBMEI7QUFDakMsc0JBQUtWLFNBQUwsQ0FBZVcsU0FBZixDQUF5QlUsTUFBekIsQ0FBZ0MsZ0JBQWhDO0FBQ0Esb0JBQU1MLE1BQU07QUFDUnpCLDZCQUFTQSxPQUREO0FBRVIwQiw4QkFBVTFCLFFBQVF3QixxQkFBUixFQUZGO0FBR1JMLDJCQUFPQTtBQUhDLGlCQUFaO0FBS0FNLG9CQUFJdkIsUUFBSixHQUFlLE1BQUt5QixRQUFMLENBQWNGLElBQUlDLFFBQWxCLENBQWY7QUFDQSxvQkFBSUQsSUFBSXZCLFFBQVIsRUFBa0IsTUFBSzZCLGVBQUw7QUFDbEIsc0JBQUtDLGVBQUw7QUFDQSxzQkFBS3ZCLFNBQUwsQ0FBZUMsS0FBZixDQUFxQnVCLGtCQUFyQixHQUEwQyxJQUExQztBQUNBLHNCQUFLeEIsU0FBTCxDQUFlQyxLQUFmLENBQXFCd0IsYUFBckIsR0FBcUMsTUFBckM7QUFDQSxzQkFBS3pCLFNBQUwsQ0FBZUMsS0FBZixDQUFxQnlCLEdBQXJCLEdBQTJCLEVBQTNCO0FBQ0Esc0JBQUsxQixTQUFMLENBQWVDLEtBQWYsQ0FBcUIwQixJQUFyQixHQUE0QixFQUE1QjtBQUNBQyxzQkFBTSxJQUFOLEVBQVksWUFBTTtBQUNkLDBCQUFLNUIsU0FBTCxDQUFlQyxLQUFmLENBQXFCdUIsa0JBQXJCLEdBQTBDLElBQTFDO0FBQ0EsMEJBQUt4QixTQUFMLENBQWVDLEtBQWYsQ0FBcUJ3QixhQUFyQixHQUFxQyxNQUFyQztBQUNILGlCQUhEO0FBSUEsb0JBQUksTUFBSzVCLE9BQVQsRUFBa0IsTUFBS0EsT0FBTCxDQUFhbUIsR0FBYjtBQUNyQjtBQS9DMEMsU0FBOUIsQ0FBakI7QUFpREg7Ozs7Z0NBQ1FhLEUsRUFBSTtBQUNULGlCQUFLL0IsU0FBTCxHQUFpQitCLEVBQWpCO0FBQ0g7OzsrQkFDT0EsRSxFQUFJO0FBQ1IsaUJBQUs5QixRQUFMLEdBQWdCOEIsRUFBaEI7QUFDSDs7OzhCQUNNQSxFLEVBQUk7QUFDUCxpQkFBS2hDLE9BQUwsR0FBZWdDLEVBQWY7QUFDSDs7OzJDQUNtQjtBQUNoQmhCLGlCQUFLQyxJQUFMLENBQVVkLFNBQVYsQ0FBb0JXLFNBQXBCLENBQThCQyxHQUE5QixDQUFrQyxnQkFBbEM7QUFDSDs7OzBDQUNrQjtBQUNmQyxpQkFBS0MsSUFBTCxDQUFVZCxTQUFWLENBQW9CVyxTQUFwQixDQUE4QlUsTUFBOUIsQ0FBcUMsZ0JBQXJDO0FBQ0g7OzswQ0FDa0I7QUFDZlIsaUJBQUtDLElBQUwsQ0FBVWdCLE1BQVYsQ0FBaUIsS0FBSzlCLFNBQXRCO0FBQ0g7OztpQ0FDU2lCLFEsRUFBVTtBQUNoQixnQkFBTWMsT0FBTyxLQUFLbkMsVUFBbEI7QUFDQSxnQkFBTW9DLGdCQUFnQkQsS0FBS0osSUFBTCxHQUFZSSxLQUFLRSxLQUFMLEdBQVcsQ0FBN0M7QUFDQSxnQkFBTUMsZ0JBQWdCSCxLQUFLTCxHQUFMLEdBQVdLLEtBQUtJLE1BQUwsR0FBWSxDQUE3QztBQUNBLGdCQUFNQyxXQUFXQyxLQUFLQyxJQUFMLENBQ2JELEtBQUtFLEdBQUwsQ0FBVVAsZ0JBQWdCZixTQUFTVSxJQUF6QixHQUFnQyxLQUFLbkMsTUFBTCxDQUFZRSxDQUF0RCxFQUEwRCxDQUExRCxJQUNBMkMsS0FBS0UsR0FBTCxDQUFVTCxnQkFBZ0JqQixTQUFTUyxHQUF6QixHQUErQixLQUFLbEMsTUFBTCxDQUFZRyxDQUFyRCxFQUF5RCxDQUF6RCxDQUZhLENBQWpCO0FBSUEsZ0JBQU02Qyx3QkFBd0JKLFdBQVcsRUFBekM7QUFDQSxnQkFBSSxLQUFLM0MsUUFBTCxJQUFpQixDQUFDK0MscUJBQXRCLEVBQTZDLEtBQUtqQixlQUFMLEdBQTdDLEtBQ0ssSUFBSSxDQUFDLEtBQUs5QixRQUFOLElBQWtCK0MscUJBQXRCLEVBQTZDLEtBQUtDLGdCQUFMO0FBQ2xELGlCQUFLaEQsUUFBTCxHQUFnQitDLHFCQUFoQjtBQUNBLG1CQUFPQSxxQkFBUDtBQUNIOzs7Ozs7a0JBR1VsRCxXOzs7Ozs7Ozs7OztBQzlGZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQWdCLE9BQU9vQyxDQUFQLEdBQVcsVUFBQ0MsS0FBRDtBQUFBLFdBQVdDLFNBQVNDLGFBQVQsQ0FBdUJGLEtBQXZCLENBQVg7QUFBQSxDQUFYO0FBQ0FyQyxPQUFPd0MsRUFBUCxHQUFZLFVBQUNILEtBQUQ7QUFBQSxXQUFXQyxTQUFTRyxnQkFBVCxDQUEwQkosS0FBMUIsQ0FBWDtBQUFBLENBQVo7O0FBRUFyQyxPQUFPc0IsS0FBUCxHQUFlLFVBQUNvQixJQUFELEVBQU9DLE1BQVA7QUFBQSxXQUFrQkMsV0FBV0QsTUFBWCxFQUFtQkQsSUFBbkIsQ0FBbEI7QUFBQSxDQUFmO0FBQ0ExQyxPQUFPNkMsS0FBUCxHQUFlLFVBQUNILElBQUQsRUFBT0MsTUFBUDtBQUFBLFdBQWtCRyxZQUFZSCxNQUFaLEVBQW9CRCxJQUFwQixDQUFsQjtBQUFBLENBQWY7O0lBRU1LLEk7QUFDRixvQkFBZTtBQUFBOztBQUNYLGtDQUFnQixpQkFBaEIsRUFBbUMsS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCLElBQWhCLENBQW5DO0FBQ0EsYUFBS0MsR0FBTCxHQUFXLGtCQUFRLFlBQVIsQ0FBWDtBQUNBLGFBQUsxQyxJQUFMLEdBQVksbUJBQVMsYUFBVCxFQUF3QixJQUF4QixDQUFaO0FBQ0EsYUFBSzJDLEtBQUwsR0FBYSxvQkFBVSxjQUFWLEVBQTBCLElBQTFCLENBQWI7QUFDQSxhQUFLQyxJQUFMLEdBQVksbUJBQVMsYUFBVCxDQUFaO0FBQ0EsYUFBS0MsSUFBTCxHQUFZLG1CQUFTLGFBQVQsQ0FBWjtBQUNBLGFBQUtDLE9BQUwsR0FBZSxzQkFBWSxnQkFBWixDQUFmO0FBQ0g7Ozs7Z0NBQ1E7QUFDTGhDLGtCQUFNLElBQU4sRUFBWSxLQUFLaUMsS0FBTCxDQUFXTixJQUFYLENBQWdCLElBQWhCLENBQVo7QUFDSDs7O2dDQUNRO0FBQUE7O0FBQ0wsaUJBQUtDLEdBQUwsQ0FBU00sSUFBVDtBQUNBbEMsa0JBQU0sR0FBTixFQUFXLFlBQU07QUFDYixzQkFBSzhCLElBQUwsQ0FBVUssT0FBVjtBQUNBLHNCQUFLakQsSUFBTCxDQUFVaUQsT0FBVjtBQUNBbkMsc0JBQU0sR0FBTixFQUFXO0FBQUEsMkJBQU0sTUFBSzZCLEtBQUwsQ0FBV00sT0FBWCxFQUFOO0FBQUEsaUJBQVg7QUFDQW5DLHNCQUFNLEdBQU4sRUFBVztBQUFBLDJCQUFNLE1BQUsrQixJQUFMLENBQVVJLE9BQVYsRUFBTjtBQUFBLGlCQUFYO0FBQ0FuQyxzQkFBTSxJQUFOLEVBQVk7QUFBQSwyQkFBTSxNQUFLZ0MsT0FBTCxDQUFhRyxPQUFiLEVBQU47QUFBQSxpQkFBWjtBQUNBbkMsc0JBQU0sSUFBTixFQUFZO0FBQUEsMkJBQU0sTUFBSzZCLEtBQUwsQ0FBV08sSUFBWCxFQUFOO0FBQUEsaUJBQVo7QUFDSCxhQVBEO0FBUUg7Ozs7OztBQUdMMUQsT0FBT08sSUFBUCxHQUFjLElBQUl3QyxJQUFKLEVBQWQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0EsSUFBTVksU0FBUyxDQUFDLGVBQUQsRUFBa0IsY0FBbEIsRUFBa0MsVUFBbEMsRUFBOEMsZ0JBQTlDLEVBQWdFLGlCQUFoRSxFQUFtRixvQkFBbkYsRUFBeUcsYUFBekcsRUFBd0gsWUFBeEgsRUFBc0ksV0FBdEksRUFBbUosVUFBbkosRUFBK0osaUJBQS9KLEVBQWtMLFVBQWxMLEVBQThMLGlCQUE5TCxFQUFpTixjQUFqTixDQUFmOztJQUVNQyxXO0FBQ0YseUJBQWFDLEdBQWIsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQUE7O0FBQ3RCLGFBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGFBQUtDLFdBQUwsR0FBbUIsQ0FBbkI7QUFGc0I7QUFBQTtBQUFBOztBQUFBO0FBR3RCLGlDQUFpQkosTUFBakI7QUFBQSxvQkFBU0ssSUFBVDtBQUF5QixxQkFBS0MsSUFBTCxDQUFVSixNQUFNLEdBQU4sR0FBWUcsSUFBdEI7QUFBekI7QUFIc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUl6Qjs7Ozs2QkFDS0UsTyxFQUFTO0FBQUE7O0FBQ1gsZ0JBQU1DLFFBQVE3QixTQUFTOEIsYUFBVCxDQUF1QixLQUF2QixDQUFkO0FBQ0FELGtCQUFNRSxHQUFOLEdBQVlILE9BQVo7QUFDQUMsa0JBQU1HLE1BQU4sR0FBZSxZQUFNO0FBQ2pCLHNCQUFLUCxXQUFMO0FBQ0Esb0JBQUksTUFBS0EsV0FBTCxLQUFxQkosT0FBT1ksTUFBNUIsSUFBc0MsTUFBS1QsTUFBL0MsRUFBdUQ7QUFDbkQsMEJBQUtBLE1BQUw7QUFDSDtBQUNKLGFBTEQ7QUFNSDs7Ozs7O2tCQUdVRixXOzs7Ozs7Ozs7Ozs7Ozs7OztJQ3BCVFksRztBQUNGLGlCQUFhbkMsS0FBYixFQUFvQjtBQUFBOztBQUNoQixhQUFLM0MsU0FBTCxHQUFpQjBDLEVBQUVDLEtBQUYsQ0FBakI7QUFDQSxhQUFLb0MsWUFBTCxHQUFvQnJDLEVBQUVDLFFBQVEsUUFBVixDQUFwQjtBQUNBLGFBQUtxQyxhQUFMLEdBQXFCdEMsRUFBRUMsUUFBUSxTQUFWLENBQXJCO0FBQ0FyQyxlQUFPMkUsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBS0MsUUFBTCxDQUFjM0IsSUFBZCxDQUFtQixJQUFuQixDQUFsQztBQUNIOzs7O21DQUNXO0FBQ1IsaUJBQUt3QixZQUFMLENBQWtCOUUsS0FBbEIsQ0FBd0JnQyxLQUF4QixHQUFpQyxLQUFLK0MsYUFBTCxDQUFtQkcsV0FBbkIsSUFBa0MsTUFBTSxHQUF4QyxDQUFELEdBQWlELElBQWpGO0FBQ0EsaUJBQUtKLFlBQUwsQ0FBa0I5RSxLQUFsQixDQUF3Qm1GLFVBQXhCLEdBQXNDLEtBQUtKLGFBQUwsQ0FBbUJHLFdBQW5CLEdBQWlDLENBQUMsR0FBbkMsR0FBMEMsSUFBL0U7QUFDQTdFLG1CQUFPK0UsZUFBUCxHQUEwQixLQUFLTCxhQUFMLENBQW1CRyxXQUFuQixJQUFrQyxLQUFLLEVBQXZDLENBQTFCO0FBQ0F6QyxjQUFFLGVBQUYsRUFBbUJ6QyxLQUFuQixDQUF5QnlCLEdBQXpCLEdBQStCMkQsa0JBQWtCLElBQWpEO0FBQ0EzQyxjQUFFLGVBQUYsRUFBbUJ6QyxLQUFuQixDQUF5QmtDLE1BQXpCLEdBQW1DN0IsT0FBT0UsV0FBUCxHQUFxQjZFLGVBQXRCLEdBQXlDLElBQTNFO0FBQ0g7OzsrQkFDTztBQUNKLGlCQUFLSCxRQUFMO0FBQ0EsaUJBQUtsRixTQUFMLENBQWVXLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLE1BQTdCO0FBQ0g7OztnQ0FDUTtBQUNMLGlCQUFLc0UsUUFBTDtBQUNBLGlCQUFLbEYsU0FBTCxDQUFlVyxTQUFmLENBQXlCVSxNQUF6QixDQUFnQyxNQUFoQztBQUNIOzs7Ozs7a0JBR1V5RCxHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCZixJQUFNUSxxQkFBcUIsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixRQUFwQixFQUE4QixRQUE5QixFQUF3QyxLQUF4QyxFQUErQyxjQUEvQyxFQUErRCxjQUEvRCxFQUErRSxZQUEvRSxDQUEzQjtBQUNBLElBQUlDLFNBQVMsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixPQUF6QixFQUFrQyxPQUFsQyxFQUEyQyxPQUEzQyxDQUFiOztJQUVNQyxJO0FBQ0Ysa0JBQWE3QyxLQUFiLEVBQW9COUIsSUFBcEIsRUFBMEI7QUFBQTs7QUFDdEIsYUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsYUFBS2IsU0FBTCxHQUFpQjBDLEVBQUVDLEtBQUYsQ0FBakI7QUFDQSxhQUFLOEMsS0FBTCxHQUFhLE9BQWI7QUFDSDs7OztrQ0FRVTtBQUFBOztBQUNQLGlCQUFLekYsU0FBTCxDQUFlVyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixLQUE3QjtBQUNBZ0Isa0JBQU0sSUFBTixFQUFZLFlBQU07QUFBRSxzQkFBSzVCLFNBQUwsQ0FBZUMsS0FBZixDQUFxQnVCLGtCQUFyQixHQUEwQyxNQUExQztBQUFrRCxhQUF0RTtBQUNIOzs7K0JBQ087QUFDSixnQkFBTWtFLFlBQVlKLG1CQUFtQkssT0FBbkIsQ0FBMkIsS0FBS0YsS0FBaEMsSUFBeUMsQ0FBM0Q7QUFDQSxpQkFBS0EsS0FBTCxHQUFhSCxtQkFBbUJqRCxLQUFLdUQsR0FBTCxDQUFTRixTQUFULEVBQW9CSixtQkFBbUJULE1BQW5CLEdBQTRCLENBQWhELENBQW5CLENBQWI7QUFDQSxnQkFBSSxLQUFLWSxLQUFMLEtBQWUsS0FBbkIsRUFBMEI3RCxNQUFNLEdBQU4sRUFBVyxLQUFLb0MsSUFBTCxDQUFVVCxJQUFWLENBQWUsSUFBZixDQUFYO0FBQzFCLGdCQUFJLENBQUMsQ0FBQyxLQUFELEVBQVEsY0FBUixFQUF3QixjQUF4QixFQUF3Q3NDLFFBQXhDLENBQWlELEtBQUtKLEtBQXRELENBQUwsRUFBbUUsS0FBSzVFLElBQUwsQ0FBVTRDLEtBQVYsQ0FBZ0JPLElBQWhCO0FBQ3RFOzs7K0JBQ096RSxPLEVBQVM7QUFDYixnQkFBTXVHLFVBQVV2RyxRQUFRd0csWUFBUixDQUFxQixXQUFyQixDQUFoQjtBQUNBLGdCQUFJRCxZQUFZUCxPQUFPLENBQVAsQ0FBaEIsRUFBMkI7QUFDdkJBLHVCQUFPUyxLQUFQO0FBQ0EscUJBQUtoQyxJQUFMO0FBQ0g7QUFDSjs7OzBCQXZCVWlDLEUsRUFBSTtBQUNYLGlCQUFLQyxNQUFMLEdBQWNELEVBQWQ7QUFDQSxpQkFBS2pHLFNBQUwsQ0FBZW1HLFlBQWYsQ0FBNEIsWUFBNUIsRUFBMENGLEVBQTFDO0FBQ0gsUzs0QkFDWTtBQUNULG1CQUFPLEtBQUtDLE1BQVo7QUFDSDs7Ozs7O2tCQW9CVVYsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNuQ1RZLEs7QUFDRixtQkFBYXpELEtBQWIsRUFBb0I5QixJQUFwQixFQUEwQjtBQUFBOztBQUN0QixhQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxhQUFLYixTQUFMLEdBQWlCMEMsRUFBRUMsS0FBRixDQUFqQjtBQUNBLGFBQUswRCxLQUFMLEdBQWF2RCxHQUFHSCxRQUFRLEtBQVgsQ0FBYjtBQUNBMkQsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLRixLQUFqQjtBQUNBLGFBQUtHLFNBQUwsR0FBaUIsQ0FBakI7QUFDSDs7OztrQ0FDVTtBQUNQLGlCQUFLeEcsU0FBTCxDQUFlVyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixLQUE3QjtBQUNIOzs7K0JBQ087QUFBQTs7QUFDSixpQkFBS1osU0FBTCxDQUFlVyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixNQUE3QjtBQUNBZ0Isa0JBQU0sSUFBTixFQUFZLFlBQUk7QUFBRSxzQkFBSzVCLFNBQUwsQ0FBZVcsU0FBZixDQUF5QlUsTUFBekIsQ0FBZ0MsTUFBaEM7QUFBeUMsYUFBM0Q7QUFDSDs7OytCQUNPO0FBQUE7O0FBQ0osZ0JBQU1vRixXQUFXLEtBQUtELFNBQUwsS0FBbUIsQ0FBbkIsR0FBdUIsQ0FBdkIsR0FBMkIsSUFBNUM7QUFDQSxnQkFBSSxLQUFLQSxTQUFMLEdBQWlCLENBQXJCLEVBQXdCLEtBQUtILEtBQUwsQ0FBVyxLQUFLRyxTQUFMLEdBQWUsQ0FBMUIsRUFBNkI3RixTQUE3QixDQUF1Q0MsR0FBdkMsQ0FBMkMsTUFBM0M7QUFDeEIsZ0JBQUksS0FBSzRGLFNBQUwsR0FBaUIsS0FBS0gsS0FBTCxDQUFXeEIsTUFBaEMsRUFBd0M7QUFBRWpELHNCQUFNNkUsUUFBTixFQUFnQixZQUFNO0FBQzVELDJCQUFLQyxJQUFMO0FBQ0EsMkJBQUtMLEtBQUwsQ0FBVyxPQUFLRyxTQUFoQixFQUEyQjdGLFNBQTNCLENBQXFDQyxHQUFyQyxDQUF5QyxRQUF6QztBQUNBLDJCQUFLNEYsU0FBTDtBQUNILGlCQUp5QztBQUl0QztBQUNQOzs7Ozs7a0JBR1VKLEs7Ozs7Ozs7Ozs7Ozs7OztBQzFCZjs7Ozs7Ozs7SUFFTU8sSTtBQUNGLGtCQUFZaEUsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLGFBQUszQyxTQUFMLEdBQWlCMEMsRUFBRUMsS0FBRixDQUFqQjtBQUNBckMsZUFBTzJFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDcEMsa0JBQUtqRixTQUFMLENBQWVDLEtBQWYsQ0FBcUJ5QixHQUFyQixHQUEyQixFQUEzQjtBQUNBLGtCQUFLMUIsU0FBTCxDQUFlQyxLQUFmLENBQXFCMEIsSUFBckIsR0FBNEIsRUFBNUI7QUFDSCxTQUhEO0FBSUg7Ozs7d0NBQ2dCO0FBQ2IsaUJBQUszQixTQUFMLENBQWVDLEtBQWYsQ0FBcUJ1QixrQkFBckIsR0FBMEMsSUFBMUM7QUFDQSxpQkFBS3JCLFNBQUwsR0FBaUIsMEJBQWdCLEtBQUtILFNBQXJCLEVBQWdDLEVBQUNOLEdBQUcsR0FBSixFQUFTQyxHQUFHLENBQVosRUFBaEMsQ0FBakI7QUFDSDs7O2tDQUNVO0FBQ1AsaUJBQUtLLFNBQUwsQ0FBZVcsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsS0FBN0I7QUFDQWdCLGtCQUFNLElBQU4sRUFBWSxLQUFLZ0YsYUFBTCxDQUFtQnJELElBQW5CLENBQXdCLElBQXhCLENBQVo7QUFDSDs7Ozs7O2tCQUdVb0QsSTs7Ozs7O0FDcEJmLGVBQWUsNEZBQStHLGlCQUFpQixhQUFhLGdCQUFnQixxRUFBcUUsOEVBQThFLGFBQWEsa0JBQWtCLDREQUE0RCxPQUFPLHlCQUF5QixPQUFPLDhDQUE4QyxXQUFXLGlCQUFpQixjQUFjLHNCQUFzQixjQUFjLDREQUE0RCxjQUFjLDBCQUEwQixjQUFjLDRCQUE0QixjQUFjLHlGQUF5RixjQUFjLDZCQUE2QixjQUFjLE9BQU8sZ0NBQWdDLGNBQWMsb0dBQW9HLElBQUkscUJBQXFCLGlGQUFpRixJQUFJLEVBQUUsdUJBQXVCLG9CQUFvQixHQUFHLElBQUksa0JBQWtCLDhDQUE4QyxJQUFJLEtBQUssbUJBQW1CLHlCQUF5QixTQUFTLG9CQUFvQixrQkFBa0Isc0JBQXNCLG9CQUFvQiwwQkFBMEIsOENBQThDLHFCQUFxQiw2QkFBNkIsaURBQWlELHFCQUFxQixvRUFBb0UsNERBQTRELHdCQUF3QixpQkFBaUIsMkJBQTJCLCtEQUErRCx3QkFBd0IsaUJBQWlCLDZCQUE2Qiw2QkFBNkIsd0JBQXdCLFdBQVcsdUNBQXVDLGdCQUFnQixxQkFBcUIsT0FBTyxhQUFhLG1CQUFtQix5QkFBeUIsbUJBQW1CLFlBQVksZUFBZSxZQUFZLG1CQUFtQix1QkFBdUIsZ0dBQWdHLDZFQUE2RSwrUUFBK1EsaUJBQWlCLGtDQUFrQyxtQkFBbUIsd0NBQXdDLDhOQUE4TixrQkFBa0IsOEpBQThKLG1GQUFtRixRQUFRLHVGQUF1RixvQkFBb0IseUdBQXlHLHFIQUFxSCxrQkFBa0IsNERBQTRELHdGQUF3RixZQUFZLHFHQUFxRyxrQkFBa0IsMEJBQTBCLG1CQUFtQix3QkFBd0IsT0FBTyw2Q0FBNkMsdUJBQXVCLE9BQU8sbUdBQW1HLHVCQUF1QixlQUFlLHNCQUFzQiwyQkFBMkIsT0FBTyxVQUFVLGtCQUFrQixjQUFjLHNFQUFzRSxzQkFBc0IsT0FBTyx3Q0FBd0MsV0FBVyxPQUFPLG1CQUFtQiwrQkFBK0IsT0FBTywrQ0FBK0MsR0FBRyxlQUFlLHdCQUF3QixpQ0FBaUMsd0JBQXdCLHVEQUF1RCxFQUFFLG9CQUFvQiwrQkFBK0IsaUJBQWlCLEVBQUUsZ0JBQWdCLG9CQUFvQixJQUFJLE9BQU8scUJBQXFCLHVCQUF1QixnQ0FBZ0MscUNBQXFDLG9CQUFvQiwyRUFBMkUsSUFBSSxFOzs7Ozs7Ozs7Ozs7Ozs7QUNBOTVKOzs7Ozs7OztJQUVNRSxJO0FBQ0Ysa0JBQVlsRSxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsYUFBSzNDLFNBQUwsR0FBaUIwQyxFQUFFQyxLQUFGLENBQWpCO0FBQ0FyQyxlQUFPMkUsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUNwQyxrQkFBS2pGLFNBQUwsQ0FBZUMsS0FBZixDQUFxQnlCLEdBQXJCLEdBQTJCLEVBQTNCO0FBQ0Esa0JBQUsxQixTQUFMLENBQWVDLEtBQWYsQ0FBcUIwQixJQUFyQixHQUE0QixFQUE1QjtBQUNILFNBSEQ7QUFJSDs7Ozt3Q0FDZ0I7QUFDYixpQkFBSzNCLFNBQUwsQ0FBZUMsS0FBZixDQUFxQnVCLGtCQUFyQixHQUEwQyxJQUExQztBQUNBLGlCQUFLckIsU0FBTCxHQUFpQiwwQkFBZ0IsS0FBS0gsU0FBckIsRUFBZ0MsRUFBQ04sR0FBRyxFQUFKLEVBQVFDLEdBQUcsQ0FBWCxFQUFoQyxDQUFqQjtBQUNIOzs7a0NBQ1U7QUFDUCxpQkFBS0ssU0FBTCxDQUFlVyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixLQUE3QjtBQUNBZ0Isa0JBQU0sSUFBTixFQUFZLEtBQUtnRixhQUFMLENBQW1CckQsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBWjtBQUNIOzs7Ozs7a0JBR1VzRCxJOzs7Ozs7Ozs7Ozs7Ozs7QUNwQmY7Ozs7Ozs7O0lBRU1DLE87QUFDRixxQkFBWW5FLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZixhQUFLM0MsU0FBTCxHQUFpQjBDLEVBQUVDLEtBQUYsQ0FBakI7QUFDQXJDLGVBQU8yRSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3BDLGtCQUFLakYsU0FBTCxDQUFlQyxLQUFmLENBQXFCeUIsR0FBckIsR0FBMkIsRUFBM0I7QUFDQSxrQkFBSzFCLFNBQUwsQ0FBZUMsS0FBZixDQUFxQjBCLElBQXJCLEdBQTRCLEVBQTVCO0FBQ0gsU0FIRDtBQUlIOzs7O3dDQUNnQjtBQUNiLGlCQUFLM0IsU0FBTCxDQUFlQyxLQUFmLENBQXFCdUIsa0JBQXJCLEdBQTBDLElBQTFDO0FBQ0EsaUJBQUtyQixTQUFMLEdBQWlCLDBCQUFnQixLQUFLSCxTQUFyQixFQUFnQyxFQUFDTixHQUFHLENBQUosRUFBT0MsR0FBRyxFQUFWLEVBQWhDLENBQWpCO0FBQ0g7OztrQ0FDVTtBQUNQLGlCQUFLSyxTQUFMLENBQWVXLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLEtBQTdCO0FBQ0FnQixrQkFBTSxJQUFOLEVBQVksS0FBS2dGLGFBQUwsQ0FBbUJyRCxJQUFuQixDQUF3QixJQUF4QixDQUFaO0FBQ0g7Ozs7OztrQkFHVXVELE8iLCJmaWxlIjoiLi9wdWJsaWMvc2NyaXB0cy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmYmNmZTFhNDg3ZTNkNTFiYzY5OCIsImltcG9ydCBEcmFnZ2FibGUgZnJvbSAnZHJhZ2dhYmxlJ1xyXG5cclxuY2xhc3MgRHJhZ0hhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3JpZ2luKSB7XHJcbiAgICAgICAgdGhpcy5pblRhcmdldCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3JpZ2luID0gb3JpZ2luIHx8IHt4OiAwLCB5OiAwfTtcclxuICAgICAgICB0aGlzLnRhcmdldFJlY3QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25FbmRDYiA9IHRoaXMub25TdGFydENiID0gdGhpcy5vbk1vdmVDYiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcclxuICAgICAgICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUodGhpcy5jb250YWluZXIsIHtcclxuICAgICAgICAgICAgdXNlR1BVOiB0cnVlLFxyXG4gICAgICAgICAgICBsaW1pdDoge1xyXG4gICAgICAgICAgICAgICAgeDogWzAsIHdpbmRvdy5pbm5lcldpZHRoXSxcclxuICAgICAgICAgICAgICAgIHk6IFswLCB3aW5kb3cuaW5uZXJIZWlnaHRdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0OiAoZWxlbWVudCwgeCwgeSwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ292ZXItZHJvcHBhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFJlY3QgPSBnYW1lLnZhc2UuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25TdGFydENiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXQuaW5UYXJnZXQgPSB0aGlzLmlzSW5SZWN0KHJldC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblN0YXJ0Q2IocmV0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkRyYWc6IChlbGVtZW50LCB4LCB5LCBldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0LmluVGFyZ2V0ID0gdGhpcy5pc0luUmVjdChyZXQucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25Nb3ZlQ2IpIHRoaXMub25Nb3ZlQ2IocmV0KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkRyYWdFbmQ6IChlbGVtZW50LCB4LCB5LCBldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3Zlci1kcm9wcGFibGUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldC5pblRhcmdldCA9IHRoaXMuaXNJblJlY3QocmV0LnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXQuaW5UYXJnZXQpIHRoaXMuZHJvcHBlZE9uVGFyZ2V0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXhpdERyb3BwYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzFzJztcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSAnJztcclxuICAgICAgICAgICAgICAgIGFmdGVyKDEwMDAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMHMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0bydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25FbmRDYikgdGhpcy5vbkVuZENiKHJldClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25TdGFydCAoY2IpIHtcclxuICAgICAgICB0aGlzLm9uU3RhcnRDYiA9IGNiXHJcbiAgICB9XHJcbiAgICBvbk1vdmUgKGNiKSB7XHJcbiAgICAgICAgdGhpcy5vbk1vdmVDYiA9IGNiXHJcbiAgICB9XHJcbiAgICBvbkVuZCAoY2IpIHtcclxuICAgICAgICB0aGlzLm9uRW5kQ2IgPSBjYlxyXG4gICAgfVxyXG4gICAgb25FbnRlckRyb3BwYWJsZSAoKSB7XHJcbiAgICAgICAgZ2FtZS52YXNlLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkcmFnZ2FibGUtb3ZlcicpXHJcbiAgICB9XHJcbiAgICBvbkV4aXREcm9wcGFibGUgKCkge1xyXG4gICAgICAgIGdhbWUudmFzZS5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dhYmxlLW92ZXInKVxyXG4gICAgfVxyXG4gICAgZHJvcHBlZE9uVGFyZ2V0ICgpIHtcclxuICAgICAgICBnYW1lLnZhc2Uub25Ecm9wKHRoaXMuY29udGFpbmVyKVxyXG4gICAgfVxyXG4gICAgaXNJblJlY3QgKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMudGFyZ2V0UmVjdDtcclxuICAgICAgICBjb25zdCB0YXJnZXRDZW50ZXJYID0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aC8yO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldENlbnRlclkgPSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0LzI7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgIE1hdGgucG93KCh0YXJnZXRDZW50ZXJYIC0gcG9zaXRpb24ubGVmdCAtIHRoaXMub3JpZ2luLngpLCAyKSArXHJcbiAgICAgICAgICAgIE1hdGgucG93KCh0YXJnZXRDZW50ZXJZIC0gcG9zaXRpb24udG9wIC0gdGhpcy5vcmlnaW4ueSksIDIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBuZXdJblRhcmdldENhbGN1bGF0ZWQgPSBkaXN0YW5jZSA8IDcwO1xyXG4gICAgICAgIGlmICh0aGlzLmluVGFyZ2V0ICYmICFuZXdJblRhcmdldENhbGN1bGF0ZWQpIHRoaXMub25FeGl0RHJvcHBhYmxlKCk7XHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuaW5UYXJnZXQgJiYgbmV3SW5UYXJnZXRDYWxjdWxhdGVkKSB0aGlzLm9uRW50ZXJEcm9wcGFibGUoKTtcclxuICAgICAgICB0aGlzLmluVGFyZ2V0ID0gbmV3SW5UYXJnZXRDYWxjdWxhdGVkO1xyXG4gICAgICAgIHJldHVybiBuZXdJblRhcmdldENhbGN1bGF0ZWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhZ0hhbmRsZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRHJhZ0hhbmRsZXIuanMiLCJpbXBvcnQgSW1hZ2VMb2FkZXIgZnJvbSAnLi9JbWFnZUxvYWRlcidcclxuaW1wb3J0IEJveCBmcm9tICcuL0JveCdcclxuaW1wb3J0IFZhc2UgZnJvbSAnLi9WYXNlJ1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9QYXBlcidcclxuaW1wb3J0IFNvaWwgZnJvbSAnLi9Tb2lsJ1xyXG5pbXBvcnQgU2VlZCBmcm9tICcuL1NlZWQnXHJcbmltcG9ydCBHbGFzc2VzIGZyb20gJy4vR2xhc3NlcydcclxuXHJcbndpbmRvdy4kID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcclxud2luZG93LiQkID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcclxuXHJcbndpbmRvdy5hZnRlciA9ICh0aW1lLCBkb1doYXQpID0+IHNldFRpbWVvdXQoZG9XaGF0LCB0aW1lKTtcclxud2luZG93LmV2ZXJ5ID0gKHRpbWUsIGRvV2hhdCkgPT4gc2V0SW50ZXJ2YWwoZG9XaGF0LCB0aW1lKTtcclxuXHJcbmNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIG5ldyBJbWFnZUxvYWRlcignLi9hc3NldHMvaW1hZ2VzJywgdGhpcy5yZWFkeS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmJveCA9IG5ldyBCb3goJy5nYW1lIC5ib3gnKTtcclxuICAgICAgICB0aGlzLnZhc2UgPSBuZXcgVmFzZSgnLmdhbWUgLnZhc2UnLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnBhcGVyID0gbmV3IFBhcGVyKCcuZ2FtZSAucGFwZXInLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNvaWwgPSBuZXcgU29pbCgnLmdhbWUgLnNvaWwnKTtcclxuICAgICAgICB0aGlzLnNlZWQgPSBuZXcgU2VlZCgnLmdhbWUgLnNlZWQnKTtcclxuICAgICAgICB0aGlzLmdsYXNzZXMgPSBuZXcgR2xhc3NlcygnLmdhbWUgLmdsYXNzZXMnKVxyXG4gICAgfVxyXG4gICAgcmVhZHkgKCkge1xyXG4gICAgICAgIGFmdGVyKDQwMDAsIHRoaXMudW5Cb3guYmluZCh0aGlzKSlcclxuICAgIH1cclxuICAgIHVuQm94ICgpIHtcclxuICAgICAgICB0aGlzLmJveC5vcGVuKCk7XHJcbiAgICAgICAgYWZ0ZXIoMjAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc29pbC5jb21lT3V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMudmFzZS5jb21lT3V0KCk7XHJcbiAgICAgICAgICAgIGFmdGVyKDEwMCwgKCkgPT4gdGhpcy5wYXBlci5jb21lT3V0KCkpO1xyXG4gICAgICAgICAgICBhZnRlcigyMDAsICgpID0+IHRoaXMuc2VlZC5jb21lT3V0KCkpO1xyXG4gICAgICAgICAgICBhZnRlcigxMDAwLCAoKSA9PiB0aGlzLmdsYXNzZXMuY29tZU91dCgpKTtcclxuICAgICAgICAgICAgYWZ0ZXIoMzAwMCwgKCkgPT4gdGhpcy5wYXBlci5uZXh0KCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5nYW1lID0gbmV3IEdhbWUoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJjb25zdCBpbWFnZXMgPSBbJ2JveC1jbG9zZS5wbmcnLCAnYm94LW9wZW4ucG5nJywgJ2Rlc2suc3ZnJywgJ2VtcHR5LXZhc2UucG5nJywgJ2ZpbGxlZC12YXNlLnBuZycsICdnbGFzc2VzLXRpbHRlZC5wbmcnLCAnZ2xhc3Nlcy5wbmcnLCAnaXBob25lLnBuZycsICdwbGFudC5wbmcnLCAnc2VlZC5wbmcnLCAnc2VlZGVkLXZhc2UucG5nJywgJ3NvaWwucG5nJywgJ3NvaWxlZC12YXNlLnBuZycsICd3ZXQtdmFzZS5wbmcnXVxyXG5cclxuY2xhc3MgSW1hZ2VMb2FkZXIge1xyXG4gICAgY29uc3RydWN0b3IgKHVybCwgb25kb25lKSB7XHJcbiAgICAgICAgdGhpcy5vbmRvbmUgPSBvbmRvbmVcclxuICAgICAgICB0aGlzLmxvYWRlZENvdW50ID0gMFxyXG4gICAgICAgIGZvciAobGV0IG5hbWUgb2YgaW1hZ2VzKSB0aGlzLmxvYWQodXJsICsgJy8nICsgbmFtZSlcclxuICAgIH1cclxuICAgIGxvYWQgKGFkZHJlc3MpIHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gYWRkcmVzc1xyXG4gICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZWRDb3VudCsrXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvYWRlZENvdW50ID09PSBpbWFnZXMubGVuZ3RoICYmIHRoaXMub25kb25lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uZG9uZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlTG9hZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ltYWdlTG9hZGVyLmpzIiwiY2xhc3MgQm94IHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5vcGVuQm94SW1hZ2UgPSAkKHF1ZXJ5ICsgJyAub3BlbicpO1xyXG4gICAgICAgIHRoaXMuY2xvc2VCb3hJbWFnZSA9ICQocXVlcnkgKyAnIC5jbG9zZScpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmZpeFNpemVzLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgZml4U2l6ZXMgKCkge1xyXG4gICAgICAgIHRoaXMub3BlbkJveEltYWdlLnN0eWxlLndpZHRoID0gKHRoaXMuY2xvc2VCb3hJbWFnZS5vZmZzZXRXaWR0aCAqICg0NjQgLyAzMDApKSArICdweCc7XHJcbiAgICAgICAgdGhpcy5vcGVuQm94SW1hZ2Uuc3R5bGUubWFyZ2luTGVmdCA9ICh0aGlzLmNsb3NlQm94SW1hZ2Uub2Zmc2V0V2lkdGggLyAtMjAwKSArICdweCc7XHJcbiAgICAgICAgd2luZG93LmFyZWFEaXN0RnJvbVRvcCA9ICh0aGlzLmNsb3NlQm94SW1hZ2Uub2Zmc2V0V2lkdGggKiAoMTEgLyAyOCkpO1xyXG4gICAgICAgICQoJy5nYW1lID4gLmFyZWEnKS5zdHlsZS50b3AgPSBhcmVhRGlzdEZyb21Ub3AgKyAncHgnO1xyXG4gICAgICAgICQoJy5nYW1lID4gLmFyZWEnKS5zdHlsZS5oZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC0gYXJlYURpc3RGcm9tVG9wKSArICdweCdcclxuICAgIH1cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHRoaXMuZml4U2l6ZXMoKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvcGVuJylcclxuICAgIH1cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLmZpeFNpemVzKCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJveFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Cb3guanMiLCJjb25zdCB2YXNlRXZvbHV0aW9uUXVldWUgPSBbJ2VtcHR5JywgJ3NvaWxlZCcsICdzZWVkZWQnLCAnZmlsbGVkJywgJ3dldCcsICdncmVlbi1saXR0bGUnLCAnZ3JlZW4tbWVkaXVtJywgJ2dyZWVuLWZ1bGwnXTtcclxubGV0IGxldmVscyA9IFsnc29pbCcsICdzZWVkJywgJ3NvaWwnLCAnd2F0ZXInLCAnd2F0ZXInLCAnd2F0ZXInXTtcclxuXHJcbmNsYXNzIFZhc2Uge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5LCBnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAnZW1wdHknXHJcbiAgICB9XHJcbiAgICBzZXQgc3RhdGUgKHRvKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB0bztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCB0bylcclxuICAgIH1cclxuICAgIGdldCBzdGF0ZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlXHJcbiAgICB9XHJcbiAgICBjb21lT3V0ICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdXQnKTtcclxuICAgICAgICBhZnRlcigyMDAwLCAoKSA9PiB7IHRoaXMuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwLjNzJyB9KVxyXG4gICAgfVxyXG4gICAgbmV4dCAoKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gdmFzZUV2b2x1dGlvblF1ZXVlLmluZGV4T2YodGhpcy5zdGF0ZSkgKyAxO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB2YXNlRXZvbHV0aW9uUXVldWVbTWF0aC5taW4obmV4dEluZGV4LCB2YXNlRXZvbHV0aW9uUXVldWUubGVuZ3RoIC0gMSldO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSAnd2V0JykgYWZ0ZXIoMzAwLCB0aGlzLm5leHQuYmluZCh0aGlzKSlcclxuICAgICAgICBpZiAoIVsnd2V0JywgJ2dyZWVuLWxpdHRsZScsICdncmVlbi1tZWRpdW0nXS5pbmNsdWRlcyh0aGlzLnN0YXRlKSkgdGhpcy5nYW1lLnBhcGVyLm5leHQoKVxyXG4gICAgfVxyXG4gICAgb25Ecm9wIChlbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3QgZHJvcHBlZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKTtcclxuICAgICAgICBpZiAoZHJvcHBlZCA9PT0gbGV2ZWxzWzBdKSB7XHJcbiAgICAgICAgICAgIGxldmVscy5zaGlmdCgpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFzZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9WYXNlLmpzIiwiY2xhc3MgUGFwZXIge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5LCBnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSAkJChxdWVyeSArICcgbGknKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLml0ZW1zKTtcclxuICAgICAgICB0aGlzLml0ZW1JbmRleCA9IDA7XHJcbiAgICB9XHJcbiAgICBjb21lT3V0ICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdXQnKVxyXG4gICAgfVxyXG4gICAgYm9sZCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9sZCcpO1xyXG4gICAgICAgIGFmdGVyKDIwMDAsICgpPT57IHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JvbGQnKSB9KVxyXG4gICAgfVxyXG4gICAgbmV4dCAoKSB7XHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLml0ZW1JbmRleCA9PT0gMCA/IDAgOiAxMDAwO1xyXG4gICAgICAgIGlmICh0aGlzLml0ZW1JbmRleCA+IDApIHRoaXMuaXRlbXNbdGhpcy5pdGVtSW5kZXgtMV0uY2xhc3NMaXN0LmFkZCgndGljaycpO1xyXG4gICAgICAgIGlmICh0aGlzLml0ZW1JbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoKSB7IGFmdGVyKGR1cmF0aW9uLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9sZCgpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zW3RoaXMuaXRlbUluZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtSW5kZXgrK1xyXG4gICAgICAgIH0pIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFwZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUGFwZXIuanMiLCJpbXBvcnQgRHJhZ0hhbmRsZXIgZnJvbSAnLi9EcmFnSGFuZGxlcidcclxuXHJcbmNsYXNzIFNvaWwge1xyXG4gICAgY29uc3RydWN0b3IocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJyc7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIG1ha2VEcmFnZ2FibGUgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwcyc7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUgPSBuZXcgRHJhZ0hhbmRsZXIodGhpcy5jb250YWluZXIsIHt4OiAxMDAsIHk6IDB9KTtcclxuICAgIH1cclxuICAgIGNvbWVPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dCcpO1xyXG4gICAgICAgIGFmdGVyKDEwMDAsIHRoaXMubWFrZURyYWdnYWJsZS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2lsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NvaWwuanMiLCIhZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxiKTphLkRyYWdnYWJsZT1iKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBhKGEsYil7dmFyIGM9dGhpcyxkPWsuYmluZChjLnN0YXJ0LGMpLGU9ay5iaW5kKGMuZHJhZyxjKSxnPWsuYmluZChjLnN0b3AsYyk7aWYoIWYoYSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRyYWdnYWJsZSBleHBlY3RzIGFyZ3VtZW50IDAgdG8gYmUgYW4gRWxlbWVudFwiKTtiPWsuYXNzaWduKHt9LGksYiksay5hc3NpZ24oYyx7ZWxlbWVudDphLGhhbmRsZTpiLmhhbmRsZSYmZihiLmhhbmRsZSk/Yi5oYW5kbGU6YSxoYW5kbGVyczp7c3RhcnQ6e21vdXNlZG93bjpkLHRvdWNoc3RhcnQ6ZH0sbW92ZTp7bW91c2Vtb3ZlOmUsbW91c2V1cDpnLHRvdWNobW92ZTplLHRvdWNoZW5kOmd9fSxvcHRpb25zOmJ9KSxjLmluaXRpYWxpemUoKX1mdW5jdGlvbiBiKGEpe3JldHVybiBwYXJzZUludChhLDEwKX1mdW5jdGlvbiBjKGEpe3JldHVyblwiY3VycmVudFN0eWxlXCJpbiBhP2EuY3VycmVudFN0eWxlOmdldENvbXB1dGVkU3R5bGUoYSl9ZnVuY3Rpb24gZChhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIEFycmF5fWZ1bmN0aW9uIGUoYSl7cmV0dXJuIHZvaWQgMCE9PWEmJm51bGwhPT1hfWZ1bmN0aW9uIGYoYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBFbGVtZW50fHxcInVuZGVmaW5lZFwiIT10eXBlb2YgSFRNTERvY3VtZW50JiZhIGluc3RhbmNlb2YgSFRNTERvY3VtZW50fWZ1bmN0aW9uIGcoYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBGdW5jdGlvbn1mdW5jdGlvbiBoKCl7fXZhciBpPXtncmlkOjAsZmlsdGVyVGFyZ2V0Om51bGwsbGltaXQ6e3g6bnVsbCx5Om51bGx9LHRocmVzaG9sZDowLHNldEN1cnNvcjohMSxzZXRQb3NpdGlvbjohMCxzbW9vdGhEcmFnOiEwLHVzZUdQVTohMCxvbkRyYWc6aCxvbkRyYWdTdGFydDpoLG9uRHJhZ0VuZDpofSxqPXt0cmFuc2Zvcm06ZnVuY3Rpb24oKXtmb3IodmFyIGE9XCIgLW8tIC1tcy0gLW1vei0gLXdlYmtpdC1cIi5zcGxpdChcIiBcIiksYj1kb2N1bWVudC5ib2R5LnN0eWxlLGM9YS5sZW5ndGg7Yy0tOyl7dmFyIGQ9YVtjXStcInRyYW5zZm9ybVwiO2lmKGQgaW4gYilyZXR1cm4gZH19KCl9LGs9e2Fzc2lnbjpmdW5jdGlvbigpe2Zvcih2YXIgYT1hcmd1bWVudHNbMF0sYj1hcmd1bWVudHMubGVuZ3RoLGM9MTtiPmM7YysrKXt2YXIgZD1hcmd1bWVudHNbY107Zm9yKHZhciBlIGluIGQpYVtlXT1kW2VdfXJldHVybiBhfSxiaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGZ1bmN0aW9uKCl7YS5hcHBseShiLGFyZ3VtZW50cyl9fSxvbjpmdW5jdGlvbihhLGIsYyl7aWYoYiYmYylrLmFkZEV2ZW50KGEsYixjKTtlbHNlIGlmKGIpZm9yKHZhciBkIGluIGIpay5hZGRFdmVudChhLGQsYltkXSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7aWYoYiYmYylrLnJlbW92ZUV2ZW50KGEsYixjKTtlbHNlIGlmKGIpZm9yKHZhciBkIGluIGIpay5yZW1vdmVFdmVudChhLGQsYltkXSl9LGxpbWl0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIGQoYik/KGI9WytiWzBdLCtiWzFdXSxhPGJbMF0/YT1iWzBdOmE+YlsxXSYmKGE9YlsxXSkpOmE9K2IsYX0sYWRkRXZlbnQ6XCJhdHRhY2hFdmVudFwiaW4gRWxlbWVudC5wcm90b3R5cGU/ZnVuY3Rpb24oYSxiLGMpe2EuYXR0YWNoRXZlbnQoXCJvblwiK2IsYyl9OmZ1bmN0aW9uKGEsYixjKXthLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKX0scmVtb3ZlRXZlbnQ6XCJhdHRhY2hFdmVudFwiaW4gRWxlbWVudC5wcm90b3R5cGU/ZnVuY3Rpb24oYSxiLGMpe2EuZGV0YWNoRXZlbnQoXCJvblwiK2IsYyl9OmZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjKX19O3JldHVybiBrLmFzc2lnbihhLnByb3RvdHlwZSx7c2V0T3B0aW9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztyZXR1cm4gYy5vcHRpb25zW2FdPWIsYy5pbml0aWFsaXplKCksY30sZ2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5kcmFnRXZlbnQ7cmV0dXJue3g6YS54LHk6YS55fX0sc2V0OmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxkPWMuZHJhZ0V2ZW50O3JldHVybiBkLm9yaWdpbmFsPXt4OmQueCx5OmQueX0sYy5tb3ZlKGEsYiksY30sZHJhZ0V2ZW50OntzdGFydGVkOiExLHg6MCx5OjB9LGluaXRpYWxpemU6ZnVuY3Rpb24oKXt2YXIgYSxiPXRoaXMsZD1iLmVsZW1lbnQsZT0oYi5oYW5kbGUsZC5zdHlsZSksZj1jKGQpLGc9Yi5vcHRpb25zLGg9ai50cmFuc2Zvcm0saT1iLl9kaW1lbnNpb25zPXtoZWlnaHQ6ZC5vZmZzZXRIZWlnaHQsbGVmdDpkLm9mZnNldExlZnQsdG9wOmQub2Zmc2V0VG9wLHdpZHRoOmQub2Zmc2V0V2lkdGh9O2cudXNlR1BVJiZoJiYoYT1mW2hdLFwibm9uZVwiPT09YSYmKGE9XCJcIiksZVtoXT1hK1wiIHRyYW5zbGF0ZTNkKDAsMCwwKVwiKSxnLnNldFBvc2l0aW9uJiYoZS5kaXNwbGF5PVwiYmxvY2tcIixlLmxlZnQ9aS5sZWZ0K1wicHhcIixlLnRvcD1pLnRvcCtcInB4XCIsZS5ib3R0b209ZS5yaWdodD1cImF1dG9cIixlLm1hcmdpbj0wLGUucG9zaXRpb249XCJhYnNvbHV0ZVwiKSxnLnNldEN1cnNvciYmKGUuY3Vyc29yPVwibW92ZVwiKSxiLnNldExpbWl0KGcubGltaXQpLGsuYXNzaWduKGIuZHJhZ0V2ZW50LHt4OmkubGVmdCx5OmkudG9wfSksay5vbihiLmhhbmRsZSxiLmhhbmRsZXJzLnN0YXJ0KX0sc3RhcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPWIuZ2V0Q3Vyc29yKGEpLGQ9Yi5lbGVtZW50O2IudXNlVGFyZ2V0KGEudGFyZ2V0fHxhLnNyY0VsZW1lbnQpJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT0hMSxiLmRyYWdFdmVudC5vbGRaaW5kZXg9ZC5zdHlsZS56SW5kZXgsZC5zdHlsZS56SW5kZXg9MWU0LGIuc2V0Q3Vyc29yKGMpLGIuc2V0UG9zaXRpb24oKSxiLnNldFpvb20oKSxrLm9uKGRvY3VtZW50LGIuaGFuZGxlcnMubW92ZSkpfSxkcmFnOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1iLmRyYWdFdmVudCxkPWIuZWxlbWVudCxlPWIuX2N1cnNvcixmPWIuX2RpbWVuc2lvbnMsZz1iLm9wdGlvbnMsaD1mLnpvb20saT1iLmdldEN1cnNvcihhKSxqPWcudGhyZXNob2xkLGs9KGkueC1lLngpL2grZi5sZWZ0LGw9KGkueS1lLnkpL2grZi50b3A7IWMuc3RhcnRlZCYmaiYmTWF0aC5hYnMoZS54LWkueCk8aiYmTWF0aC5hYnMoZS55LWkueSk8anx8KGMub3JpZ2luYWx8fChjLm9yaWdpbmFsPXt4OmsseTpsfSksYy5zdGFydGVkfHwoZy5vbkRyYWdTdGFydChkLGssbCxhKSxjLnN0YXJ0ZWQ9ITApLGIubW92ZShrLGwpJiZnLm9uRHJhZyhkLGMueCxjLnksYSkpfSxtb3ZlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxkPWMuZHJhZ0V2ZW50LGU9Yy5vcHRpb25zLGY9ZS5ncmlkLGc9Yy5lbGVtZW50LnN0eWxlLGg9Yy5saW1pdChhLGIsZC5vcmlnaW5hbC54LGQub3JpZ2luYWwueSk7cmV0dXJuIWUuc21vb3RoRHJhZyYmZiYmKGg9Yy5yb3VuZChoLGYpKSxoLnghPT1kLnh8fGgueSE9PWQueT8oZC54PWgueCxkLnk9aC55LGcubGVmdD1oLngrXCJweFwiLGcudG9wPWgueStcInB4XCIsITApOiExfSxzdG9wOmZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcyxkPWMuZHJhZ0V2ZW50LGU9Yy5lbGVtZW50LGY9Yy5vcHRpb25zLGc9Zi5ncmlkO2sub2ZmKGRvY3VtZW50LGMuaGFuZGxlcnMubW92ZSksZS5zdHlsZS56SW5kZXg9ZC5vbGRaaW5kZXgsZi5zbW9vdGhEcmFnJiZnJiYoYj1jLnJvdW5kKHt4OmQueCx5OmQueX0sZyksYy5tb3ZlKGIueCxiLnkpLGsuYXNzaWduKGMuZHJhZ0V2ZW50LGIpKSxjLmRyYWdFdmVudC5zdGFydGVkJiZmLm9uRHJhZ0VuZChlLGQueCxkLnksYSksYy5yZXNldCgpfSxyZXNldDpmdW5jdGlvbigpe3RoaXMuZHJhZ0V2ZW50LnN0YXJ0ZWQ9ITF9LHJvdW5kOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucy5ncmlkO3JldHVybnt4OmIqTWF0aC5yb3VuZChhLngvYikseTpiKk1hdGgucm91bmQoYS55L2IpfX0sZ2V0Q3Vyc29yOmZ1bmN0aW9uKGEpe3JldHVybnt4OihhLnRhcmdldFRvdWNoZXM/YS50YXJnZXRUb3VjaGVzWzBdOmEpLmNsaWVudFgseTooYS50YXJnZXRUb3VjaGVzP2EudGFyZ2V0VG91Y2hlc1swXTphKS5jbGllbnRZfX0sc2V0Q3Vyc29yOmZ1bmN0aW9uKGEpe3RoaXMuX2N1cnNvcj1hfSxzZXRMaW1pdDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9ZnVuY3Rpb24oYSxiKXtyZXR1cm57eDphLHk6Yn19O2lmKGcoYSkpYi5saW1pdD1hO2Vsc2UgaWYoZihhKSl7dmFyIGQ9Yi5fZGltZW5zaW9ucyxoPWEuc2Nyb2xsSGVpZ2h0LWQuaGVpZ2h0LGk9YS5zY3JvbGxXaWR0aC1kLndpZHRoO2IubGltaXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm57eDprLmxpbWl0KGEsWzAsaV0pLHk6ay5saW1pdChiLFswLGhdKX19fWVsc2UgaWYoYSl7dmFyIGo9e3g6ZShhLngpLHk6ZShhLnkpfTtiLmxpbWl0PWoueHx8ai55P2Z1bmN0aW9uKGIsYyl7cmV0dXJue3g6ai54P2subGltaXQoYixhLngpOmIseTpqLnk/ay5saW1pdChjLGEueSk6Y319OmN9ZWxzZSBiLmxpbWl0PWN9LHNldFBvc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxjPWEuZWxlbWVudCxkPWMuc3R5bGU7ay5hc3NpZ24oYS5fZGltZW5zaW9ucyx7bGVmdDpiKGQubGVmdCl8fGMub2Zmc2V0TGVmdCx0b3A6YihkLnRvcCl8fGMub2Zmc2V0VG9wfSl9LHNldFpvb206ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcyxiPWEuZWxlbWVudCxkPTE7Yj1iLm9mZnNldFBhcmVudDspe3ZhciBlPWMoYikuem9vbTtpZihlJiZcIm5vcm1hbFwiIT09ZSl7ZD1lO2JyZWFrfX1hLl9kaW1lbnNpb25zLnpvb209ZH0sdXNlVGFyZ2V0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucy5maWx0ZXJUYXJnZXQ7cmV0dXJuIGIgaW5zdGFuY2VvZiBGdW5jdGlvbj9iKGEpOiEwfSxkZXN0cm95OmZ1bmN0aW9uKCl7ay5vZmYodGhpcy5oYW5kbGUsdGhpcy5oYW5kbGVycy5zdGFydCksay5vZmYoZG9jdW1lbnQsdGhpcy5oYW5kbGVycy5tb3ZlKX19KSxhfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZHJhZ2dhYmxlL2Rpc3QvZHJhZ2dhYmxlLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgRHJhZ0hhbmRsZXIgZnJvbSAnLi9EcmFnSGFuZGxlcidcclxuXHJcbmNsYXNzIFNlZWQge1xyXG4gICAgY29uc3RydWN0b3IocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJyc7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIG1ha2VEcmFnZ2FibGUgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwcyc7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUgPSBuZXcgRHJhZ0hhbmRsZXIodGhpcy5jb250YWluZXIsIHt4OiA1MCwgeTogMH0pO1xyXG4gICAgfVxyXG4gICAgY29tZU91dCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3V0Jyk7XHJcbiAgICAgICAgYWZ0ZXIoMTAwMCwgdGhpcy5tYWtlRHJhZ2dhYmxlLmJpbmQodGhpcykpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlZWRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU2VlZC5qcyIsImltcG9ydCBEcmFnSGFuZGxlciBmcm9tICcuL0RyYWdIYW5kbGVyJ1xyXG5cclxuY2xhc3MgR2xhc3NlcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSAnJztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgbWFrZURyYWdnYWJsZSAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBzJztcclxuICAgICAgICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnSGFuZGxlcih0aGlzLmNvbnRhaW5lciwge3g6IDAsIHk6IDgwfSk7XHJcbiAgICB9XHJcbiAgICBjb21lT3V0ICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdXQnKTtcclxuICAgICAgICBhZnRlcigyMDAwLCB0aGlzLm1ha2VEcmFnZ2FibGUuYmluZCh0aGlzKSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2xhc3Nlc1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9HbGFzc2VzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==