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

var _draggable = __webpack_require__(8);

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
                _this.targetRect = window.app.game.vase.container.getBoundingClientRect();
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
            window.app.game.vase.container.classList.add('draggable-over');
        }
    }, {
        key: 'onExitDroppable',
        value: function onExitDroppable() {
            window.app.game.vase.container.classList.remove('draggable-over');
        }
    }, {
        key: 'droppedOnTarget',
        value: function droppedOnTarget() {
            window.app.game.vase.onDrop(this.container);
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

var _Game = __webpack_require__(2);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.game = new _Game2.default();
        window.onload = this.ready.bind(this);
    }

    _createClass(App, [{
        key: 'ready',
        value: function ready() {
            // this.game.unBox()
        }
    }]);

    return App;
}();

window.app = new App();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Box = __webpack_require__(4);

var _Box2 = _interopRequireDefault(_Box);

var _Vase = __webpack_require__(5);

var _Vase2 = _interopRequireDefault(_Vase);

var _Paper = __webpack_require__(6);

var _Paper2 = _interopRequireDefault(_Paper);

var _Soil = __webpack_require__(7);

var _Soil2 = _interopRequireDefault(_Soil);

var _Seed = __webpack_require__(9);

var _Seed2 = _interopRequireDefault(_Seed);

var _Glasses = __webpack_require__(10);

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

        this.box = new _Box2.default('.game .box');
        this.vase = new _Vase2.default('.game .vase', this);
        this.paper = new _Paper2.default('.game .paper', this);
        this.soil = new _Soil2.default('.game .soil');
        this.seed = new _Seed2.default('.game .seed');
        this.glasses = new _Glasses2.default('.game .glasses');
    }

    _createClass(Game, [{
        key: 'unBox',
        value: function unBox() {
            var _this = this;

            this.box.open().then(function () {
                after(500, function () {
                    after(200, function () {
                        return _this.seed.comeOut();
                    });
                    after(1000, function () {
                        return _this.soil.comeOut();
                    });
                    after(2000, function () {
                        return _this.vase.comeOut();
                    });
                    after(2100, function () {
                        return _this.paper.comeOut();
                    });
                    after(2500, function () {
                        return _this.glasses.comeOut();
                    });
                    after(7000, function () {
                        return _this.paper.next();
                    });
                });
            });
        }
    }]);

    return Game;
}();

exports.default = Game;

/***/ }),
/* 3 */,
/* 4 */
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
        this.closeBoxImage = $(query + ' .closed');
        window.addEventListener('resize', this.fixSizes.bind(this));
    }

    _createClass(Box, [{
        key: 'goBack',
        value: function goBack() {
            this.container.classList.add('back');
        }
    }, {
        key: 'fixSizes',
        value: function fixSizes() {
            window.areaDistFromTop = this.closeBoxImage.getBoundingClientRect().top;
            $('.game > .area').style.top = areaDistFromTop + 'px';
            $('.game > .area').style.height = window.innerHeight - areaDistFromTop + 'px';
        }
    }, {
        key: 'open',
        value: function open() {
            var _this = this;

            return new Promise(function (resolve) {
                _this.goBack();
                after(1200, function () {
                    _this.container.classList.add('open');
                    _this.fixSizes();
                    resolve();
                });
            });
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

!function(a,b){ true?module.exports=b():"function"==typeof define&&define.amd?define([],b):a.Draggable=b()}(this,function(){"use strict";function a(a,b){var c=this,d=k.bind(c.start,c),e=k.bind(c.drag,c),g=k.bind(c.stop,c);if(!f(a))throw new TypeError("Draggable expects argument 0 to be an Element");b=k.assign({},i,b),k.assign(c,{element:a,handle:b.handle&&f(b.handle)?b.handle:a,handlers:{start:{mousedown:d,touchstart:d},move:{mousemove:e,mouseup:g,touchmove:e,touchend:g}},options:b}),c.initialize()}function b(a){return parseInt(a,10)}function c(a){return"currentStyle"in a?a.currentStyle:getComputedStyle(a)}function d(a){return a instanceof Array}function e(a){return void 0!==a&&null!==a}function f(a){return a instanceof Element||"undefined"!=typeof HTMLDocument&&a instanceof HTMLDocument}function g(a){return a instanceof Function}function h(){}var i={grid:0,filterTarget:null,limit:{x:null,y:null},threshold:0,setCursor:!1,setPosition:!0,smoothDrag:!0,useGPU:!0,onDrag:h,onDragStart:h,onDragEnd:h},j={transform:function(){for(var a=" -o- -ms- -moz- -webkit-".split(" "),b=document.body.style,c=a.length;c--;){var d=a[c]+"transform";if(d in b)return d}}()},k={assign:function(){for(var a=arguments[0],b=arguments.length,c=1;b>c;c++){var d=arguments[c];for(var e in d)a[e]=d[e]}return a},bind:function(a,b){return function(){a.apply(b,arguments)}},on:function(a,b,c){if(b&&c)k.addEvent(a,b,c);else if(b)for(var d in b)k.addEvent(a,d,b[d])},off:function(a,b,c){if(b&&c)k.removeEvent(a,b,c);else if(b)for(var d in b)k.removeEvent(a,d,b[d])},limit:function(a,b){return d(b)?(b=[+b[0],+b[1]],a<b[0]?a=b[0]:a>b[1]&&(a=b[1])):a=+b,a},addEvent:"attachEvent"in Element.prototype?function(a,b,c){a.attachEvent("on"+b,c)}:function(a,b,c){a.addEventListener(b,c,!1)},removeEvent:"attachEvent"in Element.prototype?function(a,b,c){a.detachEvent("on"+b,c)}:function(a,b,c){a.removeEventListener(b,c)}};return k.assign(a.prototype,{setOption:function(a,b){var c=this;return c.options[a]=b,c.initialize(),c},get:function(){var a=this.dragEvent;return{x:a.x,y:a.y}},set:function(a,b){var c=this,d=c.dragEvent;return d.original={x:d.x,y:d.y},c.move(a,b),c},dragEvent:{started:!1,x:0,y:0},initialize:function(){var a,b=this,d=b.element,e=(b.handle,d.style),f=c(d),g=b.options,h=j.transform,i=b._dimensions={height:d.offsetHeight,left:d.offsetLeft,top:d.offsetTop,width:d.offsetWidth};g.useGPU&&h&&(a=f[h],"none"===a&&(a=""),e[h]=a+" translate3d(0,0,0)"),g.setPosition&&(e.display="block",e.left=i.left+"px",e.top=i.top+"px",e.bottom=e.right="auto",e.margin=0,e.position="absolute"),g.setCursor&&(e.cursor="move"),b.setLimit(g.limit),k.assign(b.dragEvent,{x:i.left,y:i.top}),k.on(b.handle,b.handlers.start)},start:function(a){var b=this,c=b.getCursor(a),d=b.element;b.useTarget(a.target||a.srcElement)&&(a.preventDefault?a.preventDefault():a.returnValue=!1,b.dragEvent.oldZindex=d.style.zIndex,d.style.zIndex=1e4,b.setCursor(c),b.setPosition(),b.setZoom(),k.on(document,b.handlers.move))},drag:function(a){var b=this,c=b.dragEvent,d=b.element,e=b._cursor,f=b._dimensions,g=b.options,h=f.zoom,i=b.getCursor(a),j=g.threshold,k=(i.x-e.x)/h+f.left,l=(i.y-e.y)/h+f.top;!c.started&&j&&Math.abs(e.x-i.x)<j&&Math.abs(e.y-i.y)<j||(c.original||(c.original={x:k,y:l}),c.started||(g.onDragStart(d,k,l,a),c.started=!0),b.move(k,l)&&g.onDrag(d,c.x,c.y,a))},move:function(a,b){var c=this,d=c.dragEvent,e=c.options,f=e.grid,g=c.element.style,h=c.limit(a,b,d.original.x,d.original.y);return!e.smoothDrag&&f&&(h=c.round(h,f)),h.x!==d.x||h.y!==d.y?(d.x=h.x,d.y=h.y,g.left=h.x+"px",g.top=h.y+"px",!0):!1},stop:function(a){var b,c=this,d=c.dragEvent,e=c.element,f=c.options,g=f.grid;k.off(document,c.handlers.move),e.style.zIndex=d.oldZindex,f.smoothDrag&&g&&(b=c.round({x:d.x,y:d.y},g),c.move(b.x,b.y),k.assign(c.dragEvent,b)),c.dragEvent.started&&f.onDragEnd(e,d.x,d.y,a),c.reset()},reset:function(){this.dragEvent.started=!1},round:function(a){var b=this.options.grid;return{x:b*Math.round(a.x/b),y:b*Math.round(a.y/b)}},getCursor:function(a){return{x:(a.targetTouches?a.targetTouches[0]:a).clientX,y:(a.targetTouches?a.targetTouches[0]:a).clientY}},setCursor:function(a){this._cursor=a},setLimit:function(a){var b=this,c=function(a,b){return{x:a,y:b}};if(g(a))b.limit=a;else if(f(a)){var d=b._dimensions,h=a.scrollHeight-d.height,i=a.scrollWidth-d.width;b.limit=function(a,b){return{x:k.limit(a,[0,i]),y:k.limit(b,[0,h])}}}else if(a){var j={x:e(a.x),y:e(a.y)};b.limit=j.x||j.y?function(b,c){return{x:j.x?k.limit(b,a.x):b,y:j.y?k.limit(c,a.y):c}}:c}else b.limit=c},setPosition:function(){var a=this,c=a.element,d=c.style;k.assign(a._dimensions,{left:b(d.left)||c.offsetLeft,top:b(d.top)||c.offsetTop})},setZoom:function(){for(var a=this,b=a.element,d=1;b=b.offsetParent;){var e=c(b).zoom;if(e&&"normal"!==e){d=e;break}}a._dimensions.zoom=d},useTarget:function(a){var b=this.options.filterTarget;return b instanceof Function?b(a):!0},destroy:function(){k.off(this.handle,this.handlers.start),k.off(document,this.handlers.move)}}),a});

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
/* 10 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDUzMzVhMWI5NzM3NThmM2EzZWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RyYWdIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NvaWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RyYWdnYWJsZS9kaXN0L2RyYWdnYWJsZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dsYXNzZXMuanMiXSwibmFtZXMiOlsiRHJhZ0hhbmRsZXIiLCJlbGVtZW50Iiwib3JpZ2luIiwiaW5UYXJnZXQiLCJ4IiwieSIsInRhcmdldFJlY3QiLCJvbkVuZENiIiwib25TdGFydENiIiwib25Nb3ZlQ2IiLCJjb250YWluZXIiLCJzdHlsZSIsImN1cnNvciIsImRyYWdnYWJsZSIsInVzZUdQVSIsImxpbWl0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwib25EcmFnU3RhcnQiLCJldmVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcCIsImdhbWUiLCJ2YXNlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmV0IiwicG9zaXRpb24iLCJpc0luUmVjdCIsIm9uRHJhZyIsIm9uRHJhZ0VuZCIsInJlbW92ZSIsImRyb3BwZWRPblRhcmdldCIsIm9uRXhpdERyb3BwYWJsZSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInBvaW50ZXJFdmVudHMiLCJ0b3AiLCJsZWZ0IiwiYWZ0ZXIiLCJjYiIsIm9uRHJvcCIsInJlY3QiLCJ0YXJnZXRDZW50ZXJYIiwid2lkdGgiLCJ0YXJnZXRDZW50ZXJZIiwiaGVpZ2h0IiwiZGlzdGFuY2UiLCJNYXRoIiwic3FydCIsInBvdyIsIm5ld0luVGFyZ2V0Q2FsY3VsYXRlZCIsIm9uRW50ZXJEcm9wcGFibGUiLCJBcHAiLCJvbmxvYWQiLCJyZWFkeSIsImJpbmQiLCIkIiwicXVlcnkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0aW1lIiwiZG9XaGF0Iiwic2V0VGltZW91dCIsImV2ZXJ5Iiwic2V0SW50ZXJ2YWwiLCJHYW1lIiwiYm94IiwicGFwZXIiLCJzb2lsIiwic2VlZCIsImdsYXNzZXMiLCJvcGVuIiwidGhlbiIsImNvbWVPdXQiLCJuZXh0IiwiQm94IiwiY2xvc2VCb3hJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaXhTaXplcyIsImFyZWFEaXN0RnJvbVRvcCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ29CYWNrIiwidmFzZUV2b2x1dGlvblF1ZXVlIiwibGV2ZWxzIiwiVmFzZSIsInN0YXRlIiwibmV4dEluZGV4IiwiaW5kZXhPZiIsIm1pbiIsImxlbmd0aCIsImluY2x1ZGVzIiwiZHJvcHBlZCIsImdldEF0dHJpYnV0ZSIsInNoaWZ0IiwidG8iLCJfc3RhdGUiLCJzZXRBdHRyaWJ1dGUiLCJQYXBlciIsIml0ZW1zIiwiaXRlbUluZGV4IiwiZHVyYXRpb24iLCJib2xkIiwiU29pbCIsIm1ha2VEcmFnZ2FibGUiLCJTZWVkIiwiR2xhc3NlcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFD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QUFBOztBQUNmLGFBQUtoRCxTQUFMLEdBQWlCK0MsRUFBRUMsS0FBRixDQUFqQjtBQUNBMUMsZUFBT2dFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFDcEMsa0JBQUt0RSxTQUFMLENBQWVDLEtBQWYsQ0FBcUIwQixHQUFyQixHQUEyQixFQUEzQjtBQUNBLGtCQUFLM0IsU0FBTCxDQUFlQyxLQUFmLENBQXFCMkIsSUFBckIsR0FBNEIsRUFBNUI7QUFDSCxTQUhEO0FBSUg7Ozs7d0NBQ2dCO0FBQ2IsaUJBQUs1QixTQUFMLENBQWVDLEtBQWYsQ0FBcUJ3QixrQkFBckIsR0FBMEMsSUFBMUM7QUFDQSxpQkFBS3RCLFNBQUwsR0FBaUIsMEJBQWdCLEtBQUtILFNBQXJCLEVBQWdDLEVBQUNOLEdBQUcsQ0FBSixFQUFPQyxHQUFHLEVBQVYsRUFBaEMsQ0FBakI7QUFDSDs7O2tDQUNVO0FBQ1AsaUJBQUtLLFNBQUwsQ0FBZVcsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsS0FBN0I7QUFDQWlCLGtCQUFNLElBQU4sRUFBWSxLQUFLb0UsYUFBTCxDQUFtQm5ELElBQW5CLENBQXdCLElBQXhCLENBQVo7QUFDSDs7Ozs7O2tCQUdVcUQsTyIsImZpbGUiOiIuL3B1YmxpYy9zY3JpcHRzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA1MzM1YTFiOTczNzU4ZjNhM2VmIiwiaW1wb3J0IERyYWdnYWJsZSBmcm9tICdkcmFnZ2FibGUnXHJcblxyXG5jbGFzcyBEcmFnSGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcmlnaW4pIHtcclxuICAgICAgICB0aGlzLmluVGFyZ2V0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vcmlnaW4gPSBvcmlnaW4gfHwge3g6IDAsIHk6IDB9O1xyXG4gICAgICAgIHRoaXMudGFyZ2V0UmVjdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbkVuZENiID0gdGhpcy5vblN0YXJ0Q2IgPSB0aGlzLm9uTW92ZUNiID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xyXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlID0gbmV3IERyYWdnYWJsZSh0aGlzLmNvbnRhaW5lciwge1xyXG4gICAgICAgICAgICB1c2VHUFU6IHRydWUsXHJcbiAgICAgICAgICAgIGxpbWl0OiB7XHJcbiAgICAgICAgICAgICAgICB4OiBbMCwgd2luZG93LmlubmVyV2lkdGhdLFxyXG4gICAgICAgICAgICAgICAgeTogWzAsIHdpbmRvdy5pbm5lckhlaWdodF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25EcmFnU3RhcnQ6IChlbGVtZW50LCB4LCB5LCBldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3Zlci1kcm9wcGFibGUnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UmVjdCA9IHdpbmRvdy5hcHAuZ2FtZS52YXNlLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uU3RhcnRDYikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0LmluVGFyZ2V0ID0gdGhpcy5pc0luUmVjdChyZXQucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25TdGFydENiKHJldClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25EcmFnOiAoZWxlbWVudCwgeCwgeSwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldC5pblRhcmdldCA9IHRoaXMuaXNJblJlY3QocmV0LnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uTW92ZUNiKSB0aGlzLm9uTW92ZUNiKHJldClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25EcmFnRW5kOiAoZWxlbWVudCwgeCwgeSwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXItZHJvcHBhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICAgICAgICAgICAgICBldmVudDogZXZlbnRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZXQuaW5UYXJnZXQgPSB0aGlzLmlzSW5SZWN0KHJldC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAocmV0LmluVGFyZ2V0KSB0aGlzLmRyb3BwZWRPblRhcmdldCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkV4aXREcm9wcGFibGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcxcyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBhZnRlcigxMDAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBzJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uRW5kQ2IpIHRoaXMub25FbmRDYihyZXQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uU3RhcnQgKGNiKSB7XHJcbiAgICAgICAgdGhpcy5vblN0YXJ0Q2IgPSBjYlxyXG4gICAgfVxyXG4gICAgb25Nb3ZlIChjYikge1xyXG4gICAgICAgIHRoaXMub25Nb3ZlQ2IgPSBjYlxyXG4gICAgfVxyXG4gICAgb25FbmQgKGNiKSB7XHJcbiAgICAgICAgdGhpcy5vbkVuZENiID0gY2JcclxuICAgIH1cclxuICAgIG9uRW50ZXJEcm9wcGFibGUgKCkge1xyXG4gICAgICAgIHdpbmRvdy5hcHAuZ2FtZS52YXNlLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkcmFnZ2FibGUtb3ZlcicpXHJcbiAgICB9XHJcbiAgICBvbkV4aXREcm9wcGFibGUgKCkge1xyXG4gICAgICAgIHdpbmRvdy5hcHAuZ2FtZS52YXNlLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2FibGUtb3ZlcicpXHJcbiAgICB9XHJcbiAgICBkcm9wcGVkT25UYXJnZXQgKCkge1xyXG4gICAgICAgIHdpbmRvdy5hcHAuZ2FtZS52YXNlLm9uRHJvcCh0aGlzLmNvbnRhaW5lcilcclxuICAgIH1cclxuICAgIGlzSW5SZWN0IChwb3NpdGlvbikge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLnRhcmdldFJlY3Q7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Q2VudGVyWCA9IHJlY3QubGVmdCArIHJlY3Qud2lkdGgvMjtcclxuICAgICAgICBjb25zdCB0YXJnZXRDZW50ZXJZID0gcmVjdC50b3AgKyByZWN0LmhlaWdodC8yO1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KFxyXG4gICAgICAgICAgICBNYXRoLnBvdygodGFyZ2V0Q2VudGVyWCAtIHBvc2l0aW9uLmxlZnQgLSB0aGlzLm9yaWdpbi54KSwgMikgK1xyXG4gICAgICAgICAgICBNYXRoLnBvdygodGFyZ2V0Q2VudGVyWSAtIHBvc2l0aW9uLnRvcCAtIHRoaXMub3JpZ2luLnkpLCAyKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbmV3SW5UYXJnZXRDYWxjdWxhdGVkID0gZGlzdGFuY2UgPCA3MDtcclxuICAgICAgICBpZiAodGhpcy5pblRhcmdldCAmJiAhbmV3SW5UYXJnZXRDYWxjdWxhdGVkKSB0aGlzLm9uRXhpdERyb3BwYWJsZSgpO1xyXG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLmluVGFyZ2V0ICYmIG5ld0luVGFyZ2V0Q2FsY3VsYXRlZCkgdGhpcy5vbkVudGVyRHJvcHBhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5pblRhcmdldCA9IG5ld0luVGFyZ2V0Q2FsY3VsYXRlZDtcclxuICAgICAgICByZXR1cm4gbmV3SW5UYXJnZXRDYWxjdWxhdGVkXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYWdIYW5kbGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0RyYWdIYW5kbGVyLmpzIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJ1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpO1xyXG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSB0aGlzLnJlYWR5LmJpbmQodGhpcylcclxuICAgIH1cclxuICAgIHJlYWR5ICgpIHtcclxuICAgICAgICAvLyB0aGlzLmdhbWUudW5Cb3goKVxyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuYXBwID0gbmV3IEFwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQXBwLmpzIiwiaW1wb3J0IEJveCBmcm9tICcuL0JveCdcclxuaW1wb3J0IFZhc2UgZnJvbSAnLi9WYXNlJ1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9QYXBlcidcclxuaW1wb3J0IFNvaWwgZnJvbSAnLi9Tb2lsJ1xyXG5pbXBvcnQgU2VlZCBmcm9tICcuL1NlZWQnXHJcbmltcG9ydCBHbGFzc2VzIGZyb20gJy4vR2xhc3NlcydcclxuXHJcbndpbmRvdy4kID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcclxud2luZG93LiQkID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcclxuXHJcbndpbmRvdy5hZnRlciA9ICh0aW1lLCBkb1doYXQpID0+IHNldFRpbWVvdXQoZG9XaGF0LCB0aW1lKTtcclxud2luZG93LmV2ZXJ5ID0gKHRpbWUsIGRvV2hhdCkgPT4gc2V0SW50ZXJ2YWwoZG9XaGF0LCB0aW1lKTtcclxuXHJcbmNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuYm94ID0gbmV3IEJveCgnLmdhbWUgLmJveCcpO1xyXG4gICAgICAgIHRoaXMudmFzZSA9IG5ldyBWYXNlKCcuZ2FtZSAudmFzZScsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGFwZXIgPSBuZXcgUGFwZXIoJy5nYW1lIC5wYXBlcicsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc29pbCA9IG5ldyBTb2lsKCcuZ2FtZSAuc29pbCcpO1xyXG4gICAgICAgIHRoaXMuc2VlZCA9IG5ldyBTZWVkKCcuZ2FtZSAuc2VlZCcpO1xyXG4gICAgICAgIHRoaXMuZ2xhc3NlcyA9IG5ldyBHbGFzc2VzKCcuZ2FtZSAuZ2xhc3NlcycpO1xyXG4gICAgfVxyXG4gICAgdW5Cb3ggKCkge1xyXG4gICAgICAgIHRoaXMuYm94Lm9wZW4oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgYWZ0ZXIoNTAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZnRlcigyMDAsICgpID0+IHRoaXMuc2VlZC5jb21lT3V0KCkpO1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXIoMTAwMCwgKCkgPT4gdGhpcy5zb2lsLmNvbWVPdXQoKSk7XHJcbiAgICAgICAgICAgICAgICBhZnRlcigyMDAwLCAoKSA9PiB0aGlzLnZhc2UuY29tZU91dCgpKTtcclxuICAgICAgICAgICAgICAgIGFmdGVyKDIxMDAsICgpID0+IHRoaXMucGFwZXIuY29tZU91dCgpKTtcclxuICAgICAgICAgICAgICAgIGFmdGVyKDI1MDAsICgpID0+IHRoaXMuZ2xhc3Nlcy5jb21lT3V0KCkpO1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXIoNzAwMCwgKCkgPT4gdGhpcy5wYXBlci5uZXh0KCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0dhbWUuanMiLCJjbGFzcyBCb3gge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLmNsb3NlQm94SW1hZ2UgPSAkKHF1ZXJ5ICsgJyAuY2xvc2VkJyk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZml4U2l6ZXMuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBnb0JhY2sgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JhY2snKVxyXG4gICAgfVxyXG4gICAgZml4U2l6ZXMgKCkge1xyXG4gICAgICAgIHdpbmRvdy5hcmVhRGlzdEZyb21Ub3AgPSB0aGlzLmNsb3NlQm94SW1hZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgICAgICQoJy5nYW1lID4gLmFyZWEnKS5zdHlsZS50b3AgPSBhcmVhRGlzdEZyb21Ub3AgKyAncHgnO1xyXG4gICAgICAgICQoJy5nYW1lID4gLmFyZWEnKS5zdHlsZS5oZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC0gYXJlYURpc3RGcm9tVG9wKSArICdweCdcclxuICAgIH1cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgICAgICAgICBhZnRlcigxMjAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvcGVuJylcclxuICAgICAgICAgICAgICAgIHRoaXMuZml4U2l6ZXMoKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMuZml4U2l6ZXMoKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm94XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0JveC5qcyIsImNvbnN0IHZhc2VFdm9sdXRpb25RdWV1ZSA9IFsnZW1wdHknLCAnc29pbGVkJywgJ3NlZWRlZCcsICdmaWxsZWQnLCAnd2V0JywgJ2dyZWVuLWxpdHRsZScsICdncmVlbi1tZWRpdW0nLCAnZ3JlZW4tZnVsbCddO1xyXG5sZXQgbGV2ZWxzID0gWydzb2lsJywgJ3NlZWQnLCAnc29pbCcsICd3YXRlcicsICd3YXRlcicsICd3YXRlciddO1xyXG5cclxuY2xhc3MgVmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnksIGdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdlbXB0eSdcclxuICAgIH1cclxuICAgIHNldCBzdGF0ZSAodG8pIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHRvO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsIHRvKVxyXG4gICAgfVxyXG4gICAgZ2V0IHN0YXRlICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGVcclxuICAgIH1cclxuICAgIGNvbWVPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dCcpO1xyXG4gICAgICAgIGFmdGVyKDIwMDAsICgpID0+IHsgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzAuM3MnIH0pXHJcbiAgICB9XHJcbiAgICBuZXh0ICgpIHtcclxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSB2YXNlRXZvbHV0aW9uUXVldWUuaW5kZXhPZih0aGlzLnN0YXRlKSArIDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHZhc2VFdm9sdXRpb25RdWV1ZVtNYXRoLm1pbihuZXh0SW5kZXgsIHZhc2VFdm9sdXRpb25RdWV1ZS5sZW5ndGggLSAxKV07XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICd3ZXQnKSBhZnRlcigzMDAsIHRoaXMubmV4dC5iaW5kKHRoaXMpKVxyXG4gICAgICAgIGlmICghWyd3ZXQnLCAnZ3JlZW4tbGl0dGxlJywgJ2dyZWVuLW1lZGl1bSddLmluY2x1ZGVzKHRoaXMuc3RhdGUpKSB0aGlzLmdhbWUucGFwZXIubmV4dCgpXHJcbiAgICB9XHJcbiAgICBvbkRyb3AgKGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBkcm9wcGVkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG4gICAgICAgIGlmIChkcm9wcGVkID09PSBsZXZlbHNbMF0pIHtcclxuICAgICAgICAgICAgbGV2ZWxzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWYXNlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Zhc2UuanMiLCJjbGFzcyBQYXBlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnksIGdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9ICQkKHF1ZXJ5ICsgJyBsaScpO1xyXG4gICAgICAgIHRoaXMuaXRlbUluZGV4ID0gMDtcclxuICAgIH1cclxuICAgIGNvbWVPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dCcpXHJcbiAgICB9XHJcbiAgICBib2xkICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2xkJyk7XHJcbiAgICAgICAgYWZ0ZXIoMjAwMCwgKCk9PnsgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYm9sZCcpIH0pXHJcbiAgICB9XHJcbiAgICBuZXh0ICgpIHtcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuaXRlbUluZGV4ID09PSAwID8gMCA6IDEwMDA7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbUluZGV4ID4gMCkgdGhpcy5pdGVtc1t0aGlzLml0ZW1JbmRleC0xXS5jbGFzc0xpc3QuYWRkKCd0aWNrJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXRlbUluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGgpIHsgYWZ0ZXIoZHVyYXRpb24sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ib2xkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5pdGVtSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1JbmRleCsrXHJcbiAgICAgICAgfSkgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXBlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QYXBlci5qcyIsImltcG9ydCBEcmFnSGFuZGxlciBmcm9tICcuL0RyYWdIYW5kbGVyJ1xyXG5cclxuY2xhc3MgU29pbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSAnJztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgbWFrZURyYWdnYWJsZSAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBzJztcclxuICAgICAgICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnSGFuZGxlcih0aGlzLmNvbnRhaW5lciwge3g6IDEwMCwgeTogMH0pO1xyXG4gICAgfVxyXG4gICAgY29tZU91dCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3V0Jyk7XHJcbiAgICAgICAgYWZ0ZXIoMTAwMCwgdGhpcy5tYWtlRHJhZ2dhYmxlLmJpbmQodGhpcykpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvaWxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU29pbC5qcyIsIiFmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWIoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGIpOmEuRHJhZ2dhYmxlPWIoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGEoYSxiKXt2YXIgYz10aGlzLGQ9ay5iaW5kKGMuc3RhcnQsYyksZT1rLmJpbmQoYy5kcmFnLGMpLGc9ay5iaW5kKGMuc3RvcCxjKTtpZighZihhKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiRHJhZ2dhYmxlIGV4cGVjdHMgYXJndW1lbnQgMCB0byBiZSBhbiBFbGVtZW50XCIpO2I9ay5hc3NpZ24oe30saSxiKSxrLmFzc2lnbihjLHtlbGVtZW50OmEsaGFuZGxlOmIuaGFuZGxlJiZmKGIuaGFuZGxlKT9iLmhhbmRsZTphLGhhbmRsZXJzOntzdGFydDp7bW91c2Vkb3duOmQsdG91Y2hzdGFydDpkfSxtb3ZlOnttb3VzZW1vdmU6ZSxtb3VzZXVwOmcsdG91Y2htb3ZlOmUsdG91Y2hlbmQ6Z319LG9wdGlvbnM6Yn0pLGMuaW5pdGlhbGl6ZSgpfWZ1bmN0aW9uIGIoYSl7cmV0dXJuIHBhcnNlSW50KGEsMTApfWZ1bmN0aW9uIGMoYSl7cmV0dXJuXCJjdXJyZW50U3R5bGVcImluIGE/YS5jdXJyZW50U3R5bGU6Z2V0Q29tcHV0ZWRTdHlsZShhKX1mdW5jdGlvbiBkKGEpe3JldHVybiBhIGluc3RhbmNlb2YgQXJyYXl9ZnVuY3Rpb24gZShhKXtyZXR1cm4gdm9pZCAwIT09YSYmbnVsbCE9PWF9ZnVuY3Rpb24gZihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIEVsZW1lbnR8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBIVE1MRG9jdW1lbnQmJmEgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnR9ZnVuY3Rpb24gZyhhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIEZ1bmN0aW9ufWZ1bmN0aW9uIGgoKXt9dmFyIGk9e2dyaWQ6MCxmaWx0ZXJUYXJnZXQ6bnVsbCxsaW1pdDp7eDpudWxsLHk6bnVsbH0sdGhyZXNob2xkOjAsc2V0Q3Vyc29yOiExLHNldFBvc2l0aW9uOiEwLHNtb290aERyYWc6ITAsdXNlR1BVOiEwLG9uRHJhZzpoLG9uRHJhZ1N0YXJ0Omgsb25EcmFnRW5kOmh9LGo9e3RyYW5zZm9ybTpmdW5jdGlvbigpe2Zvcih2YXIgYT1cIiAtby0gLW1zLSAtbW96LSAtd2Via2l0LVwiLnNwbGl0KFwiIFwiKSxiPWRvY3VtZW50LmJvZHkuc3R5bGUsYz1hLmxlbmd0aDtjLS07KXt2YXIgZD1hW2NdK1widHJhbnNmb3JtXCI7aWYoZCBpbiBiKXJldHVybiBkfX0oKX0saz17YXNzaWduOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPWFyZ3VtZW50c1swXSxiPWFyZ3VtZW50cy5sZW5ndGgsYz0xO2I+YztjKyspe3ZhciBkPWFyZ3VtZW50c1tjXTtmb3IodmFyIGUgaW4gZClhW2VdPWRbZV19cmV0dXJuIGF9LGJpbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZnVuY3Rpb24oKXthLmFwcGx5KGIsYXJndW1lbnRzKX19LG9uOmZ1bmN0aW9uKGEsYixjKXtpZihiJiZjKWsuYWRkRXZlbnQoYSxiLGMpO2Vsc2UgaWYoYilmb3IodmFyIGQgaW4gYilrLmFkZEV2ZW50KGEsZCxiW2RdKX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXtpZihiJiZjKWsucmVtb3ZlRXZlbnQoYSxiLGMpO2Vsc2UgaWYoYilmb3IodmFyIGQgaW4gYilrLnJlbW92ZUV2ZW50KGEsZCxiW2RdKX0sbGltaXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZChiKT8oYj1bK2JbMF0sK2JbMV1dLGE8YlswXT9hPWJbMF06YT5iWzFdJiYoYT1iWzFdKSk6YT0rYixhfSxhZGRFdmVudDpcImF0dGFjaEV2ZW50XCJpbiBFbGVtZW50LnByb3RvdHlwZT9mdW5jdGlvbihhLGIsYyl7YS5hdHRhY2hFdmVudChcIm9uXCIrYixjKX06ZnVuY3Rpb24oYSxiLGMpe2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfSxyZW1vdmVFdmVudDpcImF0dGFjaEV2ZW50XCJpbiBFbGVtZW50LnByb3RvdHlwZT9mdW5jdGlvbihhLGIsYyl7YS5kZXRhY2hFdmVudChcIm9uXCIrYixjKX06ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMpfX07cmV0dXJuIGsuYXNzaWduKGEucHJvdG90eXBlLHtzZXRPcHRpb246ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBjLm9wdGlvbnNbYV09YixjLmluaXRpYWxpemUoKSxjfSxnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmRyYWdFdmVudDtyZXR1cm57eDphLngseTphLnl9fSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQ9Yy5kcmFnRXZlbnQ7cmV0dXJuIGQub3JpZ2luYWw9e3g6ZC54LHk6ZC55fSxjLm1vdmUoYSxiKSxjfSxkcmFnRXZlbnQ6e3N0YXJ0ZWQ6ITEseDowLHk6MH0saW5pdGlhbGl6ZTpmdW5jdGlvbigpe3ZhciBhLGI9dGhpcyxkPWIuZWxlbWVudCxlPShiLmhhbmRsZSxkLnN0eWxlKSxmPWMoZCksZz1iLm9wdGlvbnMsaD1qLnRyYW5zZm9ybSxpPWIuX2RpbWVuc2lvbnM9e2hlaWdodDpkLm9mZnNldEhlaWdodCxsZWZ0OmQub2Zmc2V0TGVmdCx0b3A6ZC5vZmZzZXRUb3Asd2lkdGg6ZC5vZmZzZXRXaWR0aH07Zy51c2VHUFUmJmgmJihhPWZbaF0sXCJub25lXCI9PT1hJiYoYT1cIlwiKSxlW2hdPWErXCIgdHJhbnNsYXRlM2QoMCwwLDApXCIpLGcuc2V0UG9zaXRpb24mJihlLmRpc3BsYXk9XCJibG9ja1wiLGUubGVmdD1pLmxlZnQrXCJweFwiLGUudG9wPWkudG9wK1wicHhcIixlLmJvdHRvbT1lLnJpZ2h0PVwiYXV0b1wiLGUubWFyZ2luPTAsZS5wb3NpdGlvbj1cImFic29sdXRlXCIpLGcuc2V0Q3Vyc29yJiYoZS5jdXJzb3I9XCJtb3ZlXCIpLGIuc2V0TGltaXQoZy5saW1pdCksay5hc3NpZ24oYi5kcmFnRXZlbnQse3g6aS5sZWZ0LHk6aS50b3B9KSxrLm9uKGIuaGFuZGxlLGIuaGFuZGxlcnMuc3RhcnQpfSxzdGFydDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9Yi5nZXRDdXJzb3IoYSksZD1iLmVsZW1lbnQ7Yi51c2VUYXJnZXQoYS50YXJnZXR8fGEuc3JjRWxlbWVudCkmJihhLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTphLnJldHVyblZhbHVlPSExLGIuZHJhZ0V2ZW50Lm9sZFppbmRleD1kLnN0eWxlLnpJbmRleCxkLnN0eWxlLnpJbmRleD0xZTQsYi5zZXRDdXJzb3IoYyksYi5zZXRQb3NpdGlvbigpLGIuc2V0Wm9vbSgpLGsub24oZG9jdW1lbnQsYi5oYW5kbGVycy5tb3ZlKSl9LGRyYWc6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPWIuZHJhZ0V2ZW50LGQ9Yi5lbGVtZW50LGU9Yi5fY3Vyc29yLGY9Yi5fZGltZW5zaW9ucyxnPWIub3B0aW9ucyxoPWYuem9vbSxpPWIuZ2V0Q3Vyc29yKGEpLGo9Zy50aHJlc2hvbGQsaz0oaS54LWUueCkvaCtmLmxlZnQsbD0oaS55LWUueSkvaCtmLnRvcDshYy5zdGFydGVkJiZqJiZNYXRoLmFicyhlLngtaS54KTxqJiZNYXRoLmFicyhlLnktaS55KTxqfHwoYy5vcmlnaW5hbHx8KGMub3JpZ2luYWw9e3g6ayx5Omx9KSxjLnN0YXJ0ZWR8fChnLm9uRHJhZ1N0YXJ0KGQsayxsLGEpLGMuc3RhcnRlZD0hMCksYi5tb3ZlKGssbCkmJmcub25EcmFnKGQsYy54LGMueSxhKSl9LG1vdmU6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQ9Yy5kcmFnRXZlbnQsZT1jLm9wdGlvbnMsZj1lLmdyaWQsZz1jLmVsZW1lbnQuc3R5bGUsaD1jLmxpbWl0KGEsYixkLm9yaWdpbmFsLngsZC5vcmlnaW5hbC55KTtyZXR1cm4hZS5zbW9vdGhEcmFnJiZmJiYoaD1jLnJvdW5kKGgsZikpLGgueCE9PWQueHx8aC55IT09ZC55PyhkLng9aC54LGQueT1oLnksZy5sZWZ0PWgueCtcInB4XCIsZy50b3A9aC55K1wicHhcIiwhMCk6ITF9LHN0b3A6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLGQ9Yy5kcmFnRXZlbnQsZT1jLmVsZW1lbnQsZj1jLm9wdGlvbnMsZz1mLmdyaWQ7ay5vZmYoZG9jdW1lbnQsYy5oYW5kbGVycy5tb3ZlKSxlLnN0eWxlLnpJbmRleD1kLm9sZFppbmRleCxmLnNtb290aERyYWcmJmcmJihiPWMucm91bmQoe3g6ZC54LHk6ZC55fSxnKSxjLm1vdmUoYi54LGIueSksay5hc3NpZ24oYy5kcmFnRXZlbnQsYikpLGMuZHJhZ0V2ZW50LnN0YXJ0ZWQmJmYub25EcmFnRW5kKGUsZC54LGQueSxhKSxjLnJlc2V0KCl9LHJlc2V0OmZ1bmN0aW9uKCl7dGhpcy5kcmFnRXZlbnQuc3RhcnRlZD0hMX0scm91bmQ6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLmdyaWQ7cmV0dXJue3g6YipNYXRoLnJvdW5kKGEueC9iKSx5OmIqTWF0aC5yb3VuZChhLnkvYil9fSxnZXRDdXJzb3I6ZnVuY3Rpb24oYSl7cmV0dXJue3g6KGEudGFyZ2V0VG91Y2hlcz9hLnRhcmdldFRvdWNoZXNbMF06YSkuY2xpZW50WCx5OihhLnRhcmdldFRvdWNoZXM/YS50YXJnZXRUb3VjaGVzWzBdOmEpLmNsaWVudFl9fSxzZXRDdXJzb3I6ZnVuY3Rpb24oYSl7dGhpcy5fY3Vyc29yPWF9LHNldExpbWl0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1mdW5jdGlvbihhLGIpe3JldHVybnt4OmEseTpifX07aWYoZyhhKSliLmxpbWl0PWE7ZWxzZSBpZihmKGEpKXt2YXIgZD1iLl9kaW1lbnNpb25zLGg9YS5zY3JvbGxIZWlnaHQtZC5oZWlnaHQsaT1hLnNjcm9sbFdpZHRoLWQud2lkdGg7Yi5saW1pdD1mdW5jdGlvbihhLGIpe3JldHVybnt4OmsubGltaXQoYSxbMCxpXSkseTprLmxpbWl0KGIsWzAsaF0pfX19ZWxzZSBpZihhKXt2YXIgaj17eDplKGEueCkseTplKGEueSl9O2IubGltaXQ9ai54fHxqLnk/ZnVuY3Rpb24oYixjKXtyZXR1cm57eDpqLng/ay5saW1pdChiLGEueCk6Yix5OmoueT9rLmxpbWl0KGMsYS55KTpjfX06Y31lbHNlIGIubGltaXQ9Y30sc2V0UG9zaXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGM9YS5lbGVtZW50LGQ9Yy5zdHlsZTtrLmFzc2lnbihhLl9kaW1lbnNpb25zLHtsZWZ0OmIoZC5sZWZ0KXx8Yy5vZmZzZXRMZWZ0LHRvcDpiKGQudG9wKXx8Yy5vZmZzZXRUb3B9KX0sc2V0Wm9vbTpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLGI9YS5lbGVtZW50LGQ9MTtiPWIub2Zmc2V0UGFyZW50Oyl7dmFyIGU9YyhiKS56b29tO2lmKGUmJlwibm9ybWFsXCIhPT1lKXtkPWU7YnJlYWt9fWEuX2RpbWVuc2lvbnMuem9vbT1kfSx1c2VUYXJnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLmZpbHRlclRhcmdldDtyZXR1cm4gYiBpbnN0YW5jZW9mIEZ1bmN0aW9uP2IoYSk6ITB9LGRlc3Ryb3k6ZnVuY3Rpb24oKXtrLm9mZih0aGlzLmhhbmRsZSx0aGlzLmhhbmRsZXJzLnN0YXJ0KSxrLm9mZihkb2N1bWVudCx0aGlzLmhhbmRsZXJzLm1vdmUpfX0pLGF9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kcmFnZ2FibGUvZGlzdC9kcmFnZ2FibGUubWluLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBEcmFnSGFuZGxlciBmcm9tICcuL0RyYWdIYW5kbGVyJ1xyXG5cclxuY2xhc3MgU2VlZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSAnJztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgbWFrZURyYWdnYWJsZSAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBzJztcclxuICAgICAgICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnSGFuZGxlcih0aGlzLmNvbnRhaW5lciwge3g6IDUwLCB5OiAwfSk7XHJcbiAgICB9XHJcbiAgICBjb21lT3V0ICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdXQnKTtcclxuICAgICAgICBhZnRlcigxMDAwLCB0aGlzLm1ha2VEcmFnZ2FibGUuYmluZCh0aGlzKSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VlZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TZWVkLmpzIiwiaW1wb3J0IERyYWdIYW5kbGVyIGZyb20gJy4vRHJhZ0hhbmRsZXInXHJcblxyXG5jbGFzcyBHbGFzc2VzIHtcclxuICAgIGNvbnN0cnVjdG9yKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUubGVmdCA9ICcnO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBtYWtlRHJhZ2dhYmxlICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMHMnO1xyXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlID0gbmV3IERyYWdIYW5kbGVyKHRoaXMuY29udGFpbmVyLCB7eDogMCwgeTogODB9KTtcclxuICAgIH1cclxuICAgIGNvbWVPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dCcpO1xyXG4gICAgICAgIGFmdGVyKDIwMDAsIHRoaXMubWFrZURyYWdnYWJsZS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbGFzc2VzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0dsYXNzZXMuanMiXSwic291cmNlUm9vdCI6IiJ9