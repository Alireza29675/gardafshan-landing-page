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
        key: 'destroy',
        value: function destroy() {
            this.container.style.transitionDuration = '1s';
            this.container.style.right = '';
            this.container.style.bottom = '';
            this.draggable.destroy();
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

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.game = new _Game2.default(this);
        this.enterButton = $('.intro button');
        this.init();
    }

    _createClass(App, [{
        key: 'init',
        value: function init() {
            var _this = this;

            window.onload = this.ready.bind(this);
            this.enterButton.addEventListener('click', function () {
                return _this.game.unBox();
            });
        }
    }, {
        key: 'ready',
        value: function ready() {}
    }, {
        key: 'whenGameIsDone',
        value: function whenGameIsDone() {}
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

var Game = function () {
    function Game(app) {
        _classCallCheck(this, Game);

        this.app = app;
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

            $('.intro').classList.add('hide');
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
    }, {
        key: 'onDone',
        value: function onDone() {
            var _this2 = this;

            after(1000, function () {
                _this2.seed.getOut();
                _this2.soil.getOut();
                _this2.paper.getOut();
                _this2.glasses.getOut();
                after(500, function () {
                    return _this2.app.whenGameIsDone();
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
        key: 'getOut',
        value: function getOut() {
            this.container.classList.add('out-page');
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
            if (this.itemIndex < this.items.length) after(duration, function () {
                _this2.bold();
                _this2.items[_this2.itemIndex].classList.add('active');
                _this2.itemIndex++;
            });else {
                this.game.onDone();
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
        key: 'getOut',
        value: function getOut() {
            this.draggable.destroy();
            this.container.classList.add('out-page');
        }
    }, {
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
        key: 'getOut',
        value: function getOut() {
            this.draggable.destroy();
            this.container.classList.add('out-page');
        }
    }, {
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
        key: 'getOut',
        value: function getOut() {
            this.draggable.destroy();
            this.container.classList.add('out-page');
        }
    }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzZmMTEyZmJmMTE3ZTdhN2Q1ZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RyYWdIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NvaWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RyYWdnYWJsZS9kaXN0L2RyYWdnYWJsZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dsYXNzZXMuanMiXSwibmFtZXMiOlsiRHJhZ0hhbmRsZXIiLCJlbGVtZW50Iiwib3JpZ2luIiwiaW5UYXJnZXQiLCJ4IiwieSIsInRhcmdldFJlY3QiLCJvbkVuZENiIiwib25TdGFydENiIiwib25Nb3ZlQ2IiLCJjb250YWluZXIiLCJzdHlsZSIsImN1cnNvciIsImRyYWdnYWJsZSIsInVzZUdQVSIsImxpbWl0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwib25EcmFnU3RhcnQiLCJldmVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcCIsImdhbWUiLCJ2YXNlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmV0IiwicG9zaXRpb24iLCJpc0luUmVjdCIsIm9uRHJhZyIsIm9uRHJhZ0VuZCIsInJlbW92ZSIsImRyb3BwZWRPblRhcmdldCIsIm9uRXhpdERyb3BwYWJsZSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInBvaW50ZXJFdmVudHMiLCJ0b3AiLCJsZWZ0IiwiYWZ0ZXIiLCJjYiIsInJpZ2h0IiwiYm90dG9tIiwiZGVzdHJveSIsIm9uRHJvcCIsInJlY3QiLCJ0YXJnZXRDZW50ZXJYIiwid2lkdGgiLCJ0YXJnZXRDZW50ZXJZIiwiaGVpZ2h0IiwiZGlzdGFuY2UiLCJNYXRoIiwic3FydCIsInBvdyIsIm5ld0luVGFyZ2V0Q2FsY3VsYXRlZCIsIm9uRW50ZXJEcm9wcGFibGUiLCIkIiwicXVlcnkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0aW1lIiwiZG9XaGF0Iiwic2V0VGltZW91dCIsImV2ZXJ5Iiwic2V0SW50ZXJ2YWwiLCJBcHAiLCJlbnRlckJ1dHRvbiIsImluaXQiLCJvbmxvYWQiLCJyZWFkeSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwidW5Cb3giLCJHYW1lIiwiYm94IiwicGFwZXIiLCJzb2lsIiwic2VlZCIsImdsYXNzZXMiLCJvcGVuIiwidGhlbiIsImNvbWVPdXQiLCJuZXh0IiwiZ2V0T3V0Iiwid2hlbkdhbWVJc0RvbmUiLCJCb3giLCJjbG9zZUJveEltYWdlIiwiZml4U2l6ZXMiLCJhcmVhRGlzdEZyb21Ub3AiLCJQcm9taXNlIiwicmVzb2x2ZSIsImdvQmFjayIsInZhc2VFdm9sdXRpb25RdWV1ZSIsImxldmVscyIsIlZhc2UiLCJzdGF0ZSIsIm5leHRJbmRleCIsImluZGV4T2YiLCJtaW4iLCJsZW5ndGgiLCJpbmNsdWRlcyIsImRyb3BwZWQiLCJnZXRBdHRyaWJ1dGUiLCJzaGlmdCIsInRvIiwiX3N0YXRlIiwic2V0QXR0cmlidXRlIiwiUGFwZXIiLCJpdGVtcyIsIml0ZW1JbmRleCIsImR1cmF0aW9uIiwiYm9sZCIsIm9uRG9uZSIsIlNvaWwiLCJtYWtlRHJhZ2dhYmxlIiwiU2VlZCIsIkdsYXNzZXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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bnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzZmMTEyZmJmMTE3ZTdhN2Q1ZWIiLCJpbXBvcnQgRHJhZ2dhYmxlIGZyb20gJ2RyYWdnYWJsZSdcclxuXHJcbmNsYXNzIERyYWdIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9yaWdpbikge1xyXG4gICAgICAgIHRoaXMuaW5UYXJnZXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbiB8fCB7eDogMCwgeTogMH07XHJcbiAgICAgICAgdGhpcy50YXJnZXRSZWN0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uRW5kQ2IgPSB0aGlzLm9uU3RhcnRDYiA9IHRoaXMub25Nb3ZlQ2IgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKHRoaXMuY29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgIHVzZUdQVTogdHJ1ZSxcclxuICAgICAgICAgICAgbGltaXQ6IHtcclxuICAgICAgICAgICAgICAgIHg6IFswLCB3aW5kb3cuaW5uZXJXaWR0aF0sXHJcbiAgICAgICAgICAgICAgICB5OiBbMCwgd2luZG93LmlubmVySGVpZ2h0XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkRyYWdTdGFydDogKGVsZW1lbnQsIHgsIHksIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdmVyLWRyb3BwYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRSZWN0ID0gd2luZG93LmFwcC5nYW1lLnZhc2UuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25TdGFydENiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXQuaW5UYXJnZXQgPSB0aGlzLmlzSW5SZWN0KHJldC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblN0YXJ0Q2IocmV0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkRyYWc6IChlbGVtZW50LCB4LCB5LCBldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0LmluVGFyZ2V0ID0gdGhpcy5pc0luUmVjdChyZXQucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25Nb3ZlQ2IpIHRoaXMub25Nb3ZlQ2IocmV0KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkRyYWdFbmQ6IChlbGVtZW50LCB4LCB5LCBldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3Zlci1kcm9wcGFibGUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldC5pblRhcmdldCA9IHRoaXMuaXNJblJlY3QocmV0LnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXQuaW5UYXJnZXQpIHRoaXMuZHJvcHBlZE9uVGFyZ2V0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXhpdERyb3BwYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzFzJztcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSAnJztcclxuICAgICAgICAgICAgICAgIGFmdGVyKDEwMDAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMHMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0bydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25FbmRDYikgdGhpcy5vbkVuZENiKHJldClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25TdGFydCAoY2IpIHtcclxuICAgICAgICB0aGlzLm9uU3RhcnRDYiA9IGNiXHJcbiAgICB9XHJcbiAgICBvbk1vdmUgKGNiKSB7XHJcbiAgICAgICAgdGhpcy5vbk1vdmVDYiA9IGNiXHJcbiAgICB9XHJcbiAgICBvbkVuZCAoY2IpIHtcclxuICAgICAgICB0aGlzLm9uRW5kQ2IgPSBjYlxyXG4gICAgfVxyXG4gICAgZGVzdHJveSAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzFzJztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5yaWdodCA9ICcnO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmJvdHRvbSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlLmRlc3Ryb3koKVxyXG4gICAgfVxyXG4gICAgb25FbnRlckRyb3BwYWJsZSAoKSB7XHJcbiAgICAgICAgd2luZG93LmFwcC5nYW1lLnZhc2UuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RyYWdnYWJsZS1vdmVyJylcclxuICAgIH1cclxuICAgIG9uRXhpdERyb3BwYWJsZSAoKSB7XHJcbiAgICAgICAgd2luZG93LmFwcC5nYW1lLnZhc2UuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnYWJsZS1vdmVyJylcclxuICAgIH1cclxuICAgIGRyb3BwZWRPblRhcmdldCAoKSB7XHJcbiAgICAgICAgd2luZG93LmFwcC5nYW1lLnZhc2Uub25Ecm9wKHRoaXMuY29udGFpbmVyKVxyXG4gICAgfVxyXG4gICAgaXNJblJlY3QgKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMudGFyZ2V0UmVjdDtcclxuICAgICAgICBjb25zdCB0YXJnZXRDZW50ZXJYID0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aC8yO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldENlbnRlclkgPSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0LzI7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgIE1hdGgucG93KCh0YXJnZXRDZW50ZXJYIC0gcG9zaXRpb24ubGVmdCAtIHRoaXMub3JpZ2luLngpLCAyKSArXHJcbiAgICAgICAgICAgIE1hdGgucG93KCh0YXJnZXRDZW50ZXJZIC0gcG9zaXRpb24udG9wIC0gdGhpcy5vcmlnaW4ueSksIDIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBuZXdJblRhcmdldENhbGN1bGF0ZWQgPSBkaXN0YW5jZSA8IDcwO1xyXG4gICAgICAgIGlmICh0aGlzLmluVGFyZ2V0ICYmICFuZXdJblRhcmdldENhbGN1bGF0ZWQpIHRoaXMub25FeGl0RHJvcHBhYmxlKCk7XHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuaW5UYXJnZXQgJiYgbmV3SW5UYXJnZXRDYWxjdWxhdGVkKSB0aGlzLm9uRW50ZXJEcm9wcGFibGUoKTtcclxuICAgICAgICB0aGlzLmluVGFyZ2V0ID0gbmV3SW5UYXJnZXRDYWxjdWxhdGVkO1xyXG4gICAgICAgIHJldHVybiBuZXdJblRhcmdldENhbGN1bGF0ZWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhZ0hhbmRsZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRHJhZ0hhbmRsZXIuanMiLCJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnXHJcblxyXG53aW5kb3cuJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XHJcbndpbmRvdy4kJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSk7XHJcblxyXG53aW5kb3cuYWZ0ZXIgPSAodGltZSwgZG9XaGF0KSA9PiBzZXRUaW1lb3V0KGRvV2hhdCwgdGltZSk7XHJcbndpbmRvdy5ldmVyeSA9ICh0aW1lLCBkb1doYXQpID0+IHNldEludGVydmFsKGRvV2hhdCwgdGltZSk7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZW50ZXJCdXR0b24gPSAkKCcuaW50cm8gYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcbiAgICBpbml0ICgpIHtcclxuICAgICAgICB3aW5kb3cub25sb2FkID0gdGhpcy5yZWFkeS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZW50ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmdhbWUudW5Cb3goKSlcclxuICAgIH1cclxuICAgIHJlYWR5ICgpIHtcclxuXHJcbiAgICB9XHJcbiAgICB3aGVuR2FtZUlzRG9uZSAoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuYXBwID0gbmV3IEFwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQXBwLmpzIiwiaW1wb3J0IEJveCBmcm9tICcuL0JveCdcclxuaW1wb3J0IFZhc2UgZnJvbSAnLi9WYXNlJ1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9QYXBlcidcclxuaW1wb3J0IFNvaWwgZnJvbSAnLi9Tb2lsJ1xyXG5pbXBvcnQgU2VlZCBmcm9tICcuL1NlZWQnXHJcbmltcG9ydCBHbGFzc2VzIGZyb20gJy4vR2xhc3NlcydcclxuXHJcbmNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IgKGFwcCkge1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICAgIHRoaXMuYm94ID0gbmV3IEJveCgnLmdhbWUgLmJveCcpO1xyXG4gICAgICAgIHRoaXMudmFzZSA9IG5ldyBWYXNlKCcuZ2FtZSAudmFzZScsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGFwZXIgPSBuZXcgUGFwZXIoJy5nYW1lIC5wYXBlcicsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc29pbCA9IG5ldyBTb2lsKCcuZ2FtZSAuc29pbCcpO1xyXG4gICAgICAgIHRoaXMuc2VlZCA9IG5ldyBTZWVkKCcuZ2FtZSAuc2VlZCcpO1xyXG4gICAgICAgIHRoaXMuZ2xhc3NlcyA9IG5ldyBHbGFzc2VzKCcuZ2FtZSAuZ2xhc3NlcycpO1xyXG4gICAgfVxyXG4gICAgdW5Cb3ggKCkge1xyXG4gICAgICAgICQoJy5pbnRybycpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICB0aGlzLmJveC5vcGVuKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGFmdGVyKDUwMCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXIoMjAwLCAoKSA9PiB0aGlzLnNlZWQuY29tZU91dCgpKTtcclxuICAgICAgICAgICAgICAgIGFmdGVyKDEwMDAsICgpID0+IHRoaXMuc29pbC5jb21lT3V0KCkpO1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXIoMjAwMCwgKCkgPT4gdGhpcy52YXNlLmNvbWVPdXQoKSk7XHJcbiAgICAgICAgICAgICAgICBhZnRlcigyMTAwLCAoKSA9PiB0aGlzLnBhcGVyLmNvbWVPdXQoKSk7XHJcbiAgICAgICAgICAgICAgICBhZnRlcigyNTAwLCAoKSA9PiB0aGlzLmdsYXNzZXMuY29tZU91dCgpKTtcclxuICAgICAgICAgICAgICAgIGFmdGVyKDcwMDAsICgpID0+IHRoaXMucGFwZXIubmV4dCgpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbkRvbmUgKCkge1xyXG4gICAgICAgIGFmdGVyKDEwMDAsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZWVkLmdldE91dCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNvaWwuZ2V0T3V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFwZXIuZ2V0T3V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2xhc3Nlcy5nZXRPdXQoKTtcclxuICAgICAgICAgICAgYWZ0ZXIoNTAwLCAoKSA9PiB0aGlzLmFwcC53aGVuR2FtZUlzRG9uZSgpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0dhbWUuanMiLCJjbGFzcyBCb3gge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLmNsb3NlQm94SW1hZ2UgPSAkKHF1ZXJ5ICsgJyAuY2xvc2VkJyk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZml4U2l6ZXMuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBnb0JhY2sgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JhY2snKVxyXG4gICAgfVxyXG4gICAgZml4U2l6ZXMgKCkge1xyXG4gICAgICAgIHdpbmRvdy5hcmVhRGlzdEZyb21Ub3AgPSB0aGlzLmNsb3NlQm94SW1hZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgICAgICQoJy5nYW1lID4gLmFyZWEnKS5zdHlsZS50b3AgPSBhcmVhRGlzdEZyb21Ub3AgKyAncHgnO1xyXG4gICAgICAgICQoJy5nYW1lID4gLmFyZWEnKS5zdHlsZS5oZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC0gYXJlYURpc3RGcm9tVG9wKSArICdweCdcclxuICAgIH1cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgICAgICAgICBhZnRlcigxMjAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvcGVuJylcclxuICAgICAgICAgICAgICAgIHRoaXMuZml4U2l6ZXMoKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMuZml4U2l6ZXMoKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm94XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0JveC5qcyIsImNvbnN0IHZhc2VFdm9sdXRpb25RdWV1ZSA9IFsnZW1wdHknLCAnc29pbGVkJywgJ3NlZWRlZCcsICdmaWxsZWQnLCAnd2V0JywgJ2dyZWVuLWxpdHRsZScsICdncmVlbi1tZWRpdW0nLCAnZ3JlZW4tZnVsbCddO1xyXG5sZXQgbGV2ZWxzID0gWydzb2lsJywgJ3NlZWQnLCAnc29pbCcsICd3YXRlcicsICd3YXRlcicsICd3YXRlciddO1xyXG5cclxuY2xhc3MgVmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnksIGdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdlbXB0eSdcclxuICAgIH1cclxuICAgIHNldCBzdGF0ZSAodG8pIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHRvO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsIHRvKVxyXG4gICAgfVxyXG4gICAgZ2V0IHN0YXRlICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGVcclxuICAgIH1cclxuICAgIGNvbWVPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dCcpO1xyXG4gICAgICAgIGFmdGVyKDIwMDAsICgpID0+IHsgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzAuM3MnIH0pXHJcbiAgICB9XHJcbiAgICBuZXh0ICgpIHtcclxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSB2YXNlRXZvbHV0aW9uUXVldWUuaW5kZXhPZih0aGlzLnN0YXRlKSArIDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHZhc2VFdm9sdXRpb25RdWV1ZVtNYXRoLm1pbihuZXh0SW5kZXgsIHZhc2VFdm9sdXRpb25RdWV1ZS5sZW5ndGggLSAxKV07XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICd3ZXQnKSBhZnRlcigzMDAsIHRoaXMubmV4dC5iaW5kKHRoaXMpKVxyXG4gICAgICAgIGlmICghWyd3ZXQnLCAnZ3JlZW4tbGl0dGxlJywgJ2dyZWVuLW1lZGl1bSddLmluY2x1ZGVzKHRoaXMuc3RhdGUpKSB0aGlzLmdhbWUucGFwZXIubmV4dCgpXHJcbiAgICB9XHJcbiAgICBvbkRyb3AgKGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBkcm9wcGVkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG4gICAgICAgIGlmIChkcm9wcGVkID09PSBsZXZlbHNbMF0pIHtcclxuICAgICAgICAgICAgbGV2ZWxzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWYXNlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Zhc2UuanMiLCJjbGFzcyBQYXBlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnksIGdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9ICQkKHF1ZXJ5ICsgJyBsaScpO1xyXG4gICAgICAgIHRoaXMuaXRlbUluZGV4ID0gMDtcclxuICAgIH1cclxuICAgIGNvbWVPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dCcpXHJcbiAgICB9XHJcbiAgICBnZXRPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dC1wYWdlJylcclxuICAgIH1cclxuICAgIGJvbGQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvbGQnKTtcclxuICAgICAgICBhZnRlcigyMDAwLCAoKT0+eyB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdib2xkJykgfSlcclxuICAgIH1cclxuICAgIG5leHQgKCkge1xyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5pdGVtSW5kZXggPT09IDAgPyAwIDogMTAwMDtcclxuICAgICAgICBpZiAodGhpcy5pdGVtSW5kZXggPiAwKSB0aGlzLml0ZW1zW3RoaXMuaXRlbUluZGV4LTFdLmNsYXNzTGlzdC5hZGQoJ3RpY2snKTtcclxuICAgICAgICBpZiAodGhpcy5pdGVtSW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aCkgYWZ0ZXIoZHVyYXRpb24sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ib2xkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5pdGVtSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1JbmRleCsrXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5vbkRvbmUoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFwZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUGFwZXIuanMiLCJpbXBvcnQgRHJhZ0hhbmRsZXIgZnJvbSAnLi9EcmFnSGFuZGxlcidcclxuXHJcbmNsYXNzIFNvaWwge1xyXG4gICAgY29uc3RydWN0b3IocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJyc7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldE91dCAoKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dC1wYWdlJylcclxuICAgIH1cclxuICAgIG1ha2VEcmFnZ2FibGUgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwcyc7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUgPSBuZXcgRHJhZ0hhbmRsZXIodGhpcy5jb250YWluZXIsIHt4OiAxMDAsIHk6IDB9KTtcclxuICAgIH1cclxuICAgIGNvbWVPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dCcpO1xyXG4gICAgICAgIGFmdGVyKDEwMDAsIHRoaXMubWFrZURyYWdnYWJsZS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2lsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NvaWwuanMiLCIhZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxiKTphLkRyYWdnYWJsZT1iKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBhKGEsYil7dmFyIGM9dGhpcyxkPWsuYmluZChjLnN0YXJ0LGMpLGU9ay5iaW5kKGMuZHJhZyxjKSxnPWsuYmluZChjLnN0b3AsYyk7aWYoIWYoYSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRyYWdnYWJsZSBleHBlY3RzIGFyZ3VtZW50IDAgdG8gYmUgYW4gRWxlbWVudFwiKTtiPWsuYXNzaWduKHt9LGksYiksay5hc3NpZ24oYyx7ZWxlbWVudDphLGhhbmRsZTpiLmhhbmRsZSYmZihiLmhhbmRsZSk/Yi5oYW5kbGU6YSxoYW5kbGVyczp7c3RhcnQ6e21vdXNlZG93bjpkLHRvdWNoc3RhcnQ6ZH0sbW92ZTp7bW91c2Vtb3ZlOmUsbW91c2V1cDpnLHRvdWNobW92ZTplLHRvdWNoZW5kOmd9fSxvcHRpb25zOmJ9KSxjLmluaXRpYWxpemUoKX1mdW5jdGlvbiBiKGEpe3JldHVybiBwYXJzZUludChhLDEwKX1mdW5jdGlvbiBjKGEpe3JldHVyblwiY3VycmVudFN0eWxlXCJpbiBhP2EuY3VycmVudFN0eWxlOmdldENvbXB1dGVkU3R5bGUoYSl9ZnVuY3Rpb24gZChhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIEFycmF5fWZ1bmN0aW9uIGUoYSl7cmV0dXJuIHZvaWQgMCE9PWEmJm51bGwhPT1hfWZ1bmN0aW9uIGYoYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBFbGVtZW50fHxcInVuZGVmaW5lZFwiIT10eXBlb2YgSFRNTERvY3VtZW50JiZhIGluc3RhbmNlb2YgSFRNTERvY3VtZW50fWZ1bmN0aW9uIGcoYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBGdW5jdGlvbn1mdW5jdGlvbiBoKCl7fXZhciBpPXtncmlkOjAsZmlsdGVyVGFyZ2V0Om51bGwsbGltaXQ6e3g6bnVsbCx5Om51bGx9LHRocmVzaG9sZDowLHNldEN1cnNvcjohMSxzZXRQb3NpdGlvbjohMCxzbW9vdGhEcmFnOiEwLHVzZUdQVTohMCxvbkRyYWc6aCxvbkRyYWdTdGFydDpoLG9uRHJhZ0VuZDpofSxqPXt0cmFuc2Zvcm06ZnVuY3Rpb24oKXtmb3IodmFyIGE9XCIgLW8tIC1tcy0gLW1vei0gLXdlYmtpdC1cIi5zcGxpdChcIiBcIiksYj1kb2N1bWVudC5ib2R5LnN0eWxlLGM9YS5sZW5ndGg7Yy0tOyl7dmFyIGQ9YVtjXStcInRyYW5zZm9ybVwiO2lmKGQgaW4gYilyZXR1cm4gZH19KCl9LGs9e2Fzc2lnbjpmdW5jdGlvbigpe2Zvcih2YXIgYT1hcmd1bWVudHNbMF0sYj1hcmd1bWVudHMubGVuZ3RoLGM9MTtiPmM7YysrKXt2YXIgZD1hcmd1bWVudHNbY107Zm9yKHZhciBlIGluIGQpYVtlXT1kW2VdfXJldHVybiBhfSxiaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGZ1bmN0aW9uKCl7YS5hcHBseShiLGFyZ3VtZW50cyl9fSxvbjpmdW5jdGlvbihhLGIsYyl7aWYoYiYmYylrLmFkZEV2ZW50KGEsYixjKTtlbHNlIGlmKGIpZm9yKHZhciBkIGluIGIpay5hZGRFdmVudChhLGQsYltkXSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7aWYoYiYmYylrLnJlbW92ZUV2ZW50KGEsYixjKTtlbHNlIGlmKGIpZm9yKHZhciBkIGluIGIpay5yZW1vdmVFdmVudChhLGQsYltkXSl9LGxpbWl0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIGQoYik/KGI9WytiWzBdLCtiWzFdXSxhPGJbMF0/YT1iWzBdOmE+YlsxXSYmKGE9YlsxXSkpOmE9K2IsYX0sYWRkRXZlbnQ6XCJhdHRhY2hFdmVudFwiaW4gRWxlbWVudC5wcm90b3R5cGU/ZnVuY3Rpb24oYSxiLGMpe2EuYXR0YWNoRXZlbnQoXCJvblwiK2IsYyl9OmZ1bmN0aW9uKGEsYixjKXthLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKX0scmVtb3ZlRXZlbnQ6XCJhdHRhY2hFdmVudFwiaW4gRWxlbWVudC5wcm90b3R5cGU/ZnVuY3Rpb24oYSxiLGMpe2EuZGV0YWNoRXZlbnQoXCJvblwiK2IsYyl9OmZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjKX19O3JldHVybiBrLmFzc2lnbihhLnByb3RvdHlwZSx7c2V0T3B0aW9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztyZXR1cm4gYy5vcHRpb25zW2FdPWIsYy5pbml0aWFsaXplKCksY30sZ2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5kcmFnRXZlbnQ7cmV0dXJue3g6YS54LHk6YS55fX0sc2V0OmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxkPWMuZHJhZ0V2ZW50O3JldHVybiBkLm9yaWdpbmFsPXt4OmQueCx5OmQueX0sYy5tb3ZlKGEsYiksY30sZHJhZ0V2ZW50OntzdGFydGVkOiExLHg6MCx5OjB9LGluaXRpYWxpemU6ZnVuY3Rpb24oKXt2YXIgYSxiPXRoaXMsZD1iLmVsZW1lbnQsZT0oYi5oYW5kbGUsZC5zdHlsZSksZj1jKGQpLGc9Yi5vcHRpb25zLGg9ai50cmFuc2Zvcm0saT1iLl9kaW1lbnNpb25zPXtoZWlnaHQ6ZC5vZmZzZXRIZWlnaHQsbGVmdDpkLm9mZnNldExlZnQsdG9wOmQub2Zmc2V0VG9wLHdpZHRoOmQub2Zmc2V0V2lkdGh9O2cudXNlR1BVJiZoJiYoYT1mW2hdLFwibm9uZVwiPT09YSYmKGE9XCJcIiksZVtoXT1hK1wiIHRyYW5zbGF0ZTNkKDAsMCwwKVwiKSxnLnNldFBvc2l0aW9uJiYoZS5kaXNwbGF5PVwiYmxvY2tcIixlLmxlZnQ9aS5sZWZ0K1wicHhcIixlLnRvcD1pLnRvcCtcInB4XCIsZS5ib3R0b209ZS5yaWdodD1cImF1dG9cIixlLm1hcmdpbj0wLGUucG9zaXRpb249XCJhYnNvbHV0ZVwiKSxnLnNldEN1cnNvciYmKGUuY3Vyc29yPVwibW92ZVwiKSxiLnNldExpbWl0KGcubGltaXQpLGsuYXNzaWduKGIuZHJhZ0V2ZW50LHt4OmkubGVmdCx5OmkudG9wfSksay5vbihiLmhhbmRsZSxiLmhhbmRsZXJzLnN0YXJ0KX0sc3RhcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPWIuZ2V0Q3Vyc29yKGEpLGQ9Yi5lbGVtZW50O2IudXNlVGFyZ2V0KGEudGFyZ2V0fHxhLnNyY0VsZW1lbnQpJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT0hMSxiLmRyYWdFdmVudC5vbGRaaW5kZXg9ZC5zdHlsZS56SW5kZXgsZC5zdHlsZS56SW5kZXg9MWU0LGIuc2V0Q3Vyc29yKGMpLGIuc2V0UG9zaXRpb24oKSxiLnNldFpvb20oKSxrLm9uKGRvY3VtZW50LGIuaGFuZGxlcnMubW92ZSkpfSxkcmFnOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1iLmRyYWdFdmVudCxkPWIuZWxlbWVudCxlPWIuX2N1cnNvcixmPWIuX2RpbWVuc2lvbnMsZz1iLm9wdGlvbnMsaD1mLnpvb20saT1iLmdldEN1cnNvcihhKSxqPWcudGhyZXNob2xkLGs9KGkueC1lLngpL2grZi5sZWZ0LGw9KGkueS1lLnkpL2grZi50b3A7IWMuc3RhcnRlZCYmaiYmTWF0aC5hYnMoZS54LWkueCk8aiYmTWF0aC5hYnMoZS55LWkueSk8anx8KGMub3JpZ2luYWx8fChjLm9yaWdpbmFsPXt4OmsseTpsfSksYy5zdGFydGVkfHwoZy5vbkRyYWdTdGFydChkLGssbCxhKSxjLnN0YXJ0ZWQ9ITApLGIubW92ZShrLGwpJiZnLm9uRHJhZyhkLGMueCxjLnksYSkpfSxtb3ZlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxkPWMuZHJhZ0V2ZW50LGU9Yy5vcHRpb25zLGY9ZS5ncmlkLGc9Yy5lbGVtZW50LnN0eWxlLGg9Yy5saW1pdChhLGIsZC5vcmlnaW5hbC54LGQub3JpZ2luYWwueSk7cmV0dXJuIWUuc21vb3RoRHJhZyYmZiYmKGg9Yy5yb3VuZChoLGYpKSxoLnghPT1kLnh8fGgueSE9PWQueT8oZC54PWgueCxkLnk9aC55LGcubGVmdD1oLngrXCJweFwiLGcudG9wPWgueStcInB4XCIsITApOiExfSxzdG9wOmZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcyxkPWMuZHJhZ0V2ZW50LGU9Yy5lbGVtZW50LGY9Yy5vcHRpb25zLGc9Zi5ncmlkO2sub2ZmKGRvY3VtZW50LGMuaGFuZGxlcnMubW92ZSksZS5zdHlsZS56SW5kZXg9ZC5vbGRaaW5kZXgsZi5zbW9vdGhEcmFnJiZnJiYoYj1jLnJvdW5kKHt4OmQueCx5OmQueX0sZyksYy5tb3ZlKGIueCxiLnkpLGsuYXNzaWduKGMuZHJhZ0V2ZW50LGIpKSxjLmRyYWdFdmVudC5zdGFydGVkJiZmLm9uRHJhZ0VuZChlLGQueCxkLnksYSksYy5yZXNldCgpfSxyZXNldDpmdW5jdGlvbigpe3RoaXMuZHJhZ0V2ZW50LnN0YXJ0ZWQ9ITF9LHJvdW5kOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucy5ncmlkO3JldHVybnt4OmIqTWF0aC5yb3VuZChhLngvYikseTpiKk1hdGgucm91bmQoYS55L2IpfX0sZ2V0Q3Vyc29yOmZ1bmN0aW9uKGEpe3JldHVybnt4OihhLnRhcmdldFRvdWNoZXM/YS50YXJnZXRUb3VjaGVzWzBdOmEpLmNsaWVudFgseTooYS50YXJnZXRUb3VjaGVzP2EudGFyZ2V0VG91Y2hlc1swXTphKS5jbGllbnRZfX0sc2V0Q3Vyc29yOmZ1bmN0aW9uKGEpe3RoaXMuX2N1cnNvcj1hfSxzZXRMaW1pdDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9ZnVuY3Rpb24oYSxiKXtyZXR1cm57eDphLHk6Yn19O2lmKGcoYSkpYi5saW1pdD1hO2Vsc2UgaWYoZihhKSl7dmFyIGQ9Yi5fZGltZW5zaW9ucyxoPWEuc2Nyb2xsSGVpZ2h0LWQuaGVpZ2h0LGk9YS5zY3JvbGxXaWR0aC1kLndpZHRoO2IubGltaXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm57eDprLmxpbWl0KGEsWzAsaV0pLHk6ay5saW1pdChiLFswLGhdKX19fWVsc2UgaWYoYSl7dmFyIGo9e3g6ZShhLngpLHk6ZShhLnkpfTtiLmxpbWl0PWoueHx8ai55P2Z1bmN0aW9uKGIsYyl7cmV0dXJue3g6ai54P2subGltaXQoYixhLngpOmIseTpqLnk/ay5saW1pdChjLGEueSk6Y319OmN9ZWxzZSBiLmxpbWl0PWN9LHNldFBvc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxjPWEuZWxlbWVudCxkPWMuc3R5bGU7ay5hc3NpZ24oYS5fZGltZW5zaW9ucyx7bGVmdDpiKGQubGVmdCl8fGMub2Zmc2V0TGVmdCx0b3A6YihkLnRvcCl8fGMub2Zmc2V0VG9wfSl9LHNldFpvb206ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcyxiPWEuZWxlbWVudCxkPTE7Yj1iLm9mZnNldFBhcmVudDspe3ZhciBlPWMoYikuem9vbTtpZihlJiZcIm5vcm1hbFwiIT09ZSl7ZD1lO2JyZWFrfX1hLl9kaW1lbnNpb25zLnpvb209ZH0sdXNlVGFyZ2V0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucy5maWx0ZXJUYXJnZXQ7cmV0dXJuIGIgaW5zdGFuY2VvZiBGdW5jdGlvbj9iKGEpOiEwfSxkZXN0cm95OmZ1bmN0aW9uKCl7ay5vZmYodGhpcy5oYW5kbGUsdGhpcy5oYW5kbGVycy5zdGFydCksay5vZmYoZG9jdW1lbnQsdGhpcy5oYW5kbGVycy5tb3ZlKX19KSxhfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZHJhZ2dhYmxlL2Rpc3QvZHJhZ2dhYmxlLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgRHJhZ0hhbmRsZXIgZnJvbSAnLi9EcmFnSGFuZGxlcidcclxuXHJcbmNsYXNzIFNlZWQge1xyXG4gICAgY29uc3RydWN0b3IocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJyc7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldE91dCAoKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUuZGVzdHJveSgpXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3V0LXBhZ2UnKVxyXG4gICAgfVxyXG4gICAgbWFrZURyYWdnYWJsZSAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBzJztcclxuICAgICAgICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnSGFuZGxlcih0aGlzLmNvbnRhaW5lciwge3g6IDUwLCB5OiAwfSk7XHJcbiAgICB9XHJcbiAgICBjb21lT3V0ICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdXQnKTtcclxuICAgICAgICBhZnRlcigxMDAwLCB0aGlzLm1ha2VEcmFnZ2FibGUuYmluZCh0aGlzKSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VlZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TZWVkLmpzIiwiaW1wb3J0IERyYWdIYW5kbGVyIGZyb20gJy4vRHJhZ0hhbmRsZXInXHJcblxyXG5jbGFzcyBHbGFzc2VzIHtcclxuICAgIGNvbnN0cnVjdG9yKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUubGVmdCA9ICcnO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBnZXRPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlLmRlc3Ryb3koKVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dC1wYWdlJylcclxuICAgIH1cclxuICAgIG1ha2VEcmFnZ2FibGUgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwcyc7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUgPSBuZXcgRHJhZ0hhbmRsZXIodGhpcy5jb250YWluZXIsIHt4OiAwLCB5OiA4MH0pO1xyXG4gICAgfVxyXG4gICAgY29tZU91dCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3V0Jyk7XHJcbiAgICAgICAgYWZ0ZXIoMjAwMCwgdGhpcy5tYWtlRHJhZ2dhYmxlLmJpbmQodGhpcykpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsYXNzZXNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvR2xhc3Nlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=