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
        value: function whenGameIsDone() {
            this.game.container.classList.add('done');
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

var Game = function () {
    function Game(app) {
        _classCallCheck(this, Game);

        this.app = app;
        this.container = $('.game');
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

            this.paper.bold();
            after(2000, function () {
                _this2.seed.getOut();
                _this2.soil.getOut();
                _this2.paper.getOut();
                _this2.glasses.getOut();
                after(1000, function () {
                    return _this2.app.whenGameIsDone();
                });
            });
        }
    }]);

    return Game;
}();

exports.default = Game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWI4MGEzZDk0OGY4ZGY4NDI5MzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RyYWdIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NvaWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RyYWdnYWJsZS9kaXN0L2RyYWdnYWJsZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dsYXNzZXMuanMiXSwibmFtZXMiOlsiRHJhZ0hhbmRsZXIiLCJlbGVtZW50Iiwib3JpZ2luIiwiaW5UYXJnZXQiLCJ4IiwieSIsInRhcmdldFJlY3QiLCJvbkVuZENiIiwib25TdGFydENiIiwib25Nb3ZlQ2IiLCJjb250YWluZXIiLCJzdHlsZSIsImN1cnNvciIsImRyYWdnYWJsZSIsInVzZUdQVSIsImxpbWl0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwib25EcmFnU3RhcnQiLCJldmVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcCIsImdhbWUiLCJ2YXNlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmV0IiwicG9zaXRpb24iLCJpc0luUmVjdCIsIm9uRHJhZyIsIm9uRHJhZ0VuZCIsInJlbW92ZSIsImRyb3BwZWRPblRhcmdldCIsIm9uRXhpdERyb3BwYWJsZSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInBvaW50ZXJFdmVudHMiLCJ0b3AiLCJsZWZ0IiwiYWZ0ZXIiLCJjYiIsInJpZ2h0IiwiYm90dG9tIiwiZGVzdHJveSIsIm9uRHJvcCIsInJlY3QiLCJ0YXJnZXRDZW50ZXJYIiwid2lkdGgiLCJ0YXJnZXRDZW50ZXJZIiwiaGVpZ2h0IiwiZGlzdGFuY2UiLCJNYXRoIiwic3FydCIsInBvdyIsIm5ld0luVGFyZ2V0Q2FsY3VsYXRlZCIsIm9uRW50ZXJEcm9wcGFibGUiLCIkIiwicXVlcnkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0aW1lIiwiZG9XaGF0Iiwic2V0VGltZW91dCIsImV2ZXJ5Iiwic2V0SW50ZXJ2YWwiLCJBcHAiLCJlbnRlckJ1dHRvbiIsImluaXQiLCJvbmxvYWQiLCJyZWFkeSIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwidW5Cb3giLCJHYW1lIiwiYm94IiwicGFwZXIiLCJzb2lsIiwic2VlZCIsImdsYXNzZXMiLCJvcGVuIiwidGhlbiIsImNvbWVPdXQiLCJuZXh0IiwiYm9sZCIsImdldE91dCIsIndoZW5HYW1lSXNEb25lIiwiQm94IiwiY2xvc2VCb3hJbWFnZSIsImZpeFNpemVzIiwiYXJlYURpc3RGcm9tVG9wIiwiUHJvbWlzZSIsInJlc29sdmUiLCJnb0JhY2siLCJ2YXNlRXZvbHV0aW9uUXVldWUiLCJsZXZlbHMiLCJWYXNlIiwic3RhdGUiLCJuZXh0SW5kZXgiLCJpbmRleE9mIiwibWluIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJkcm9wcGVkIiwiZ2V0QXR0cmlidXRlIiwic2hpZnQiLCJ0byIsIl9zdGF0ZSIsInNldEF0dHJpYnV0ZSIsIlBhcGVyIiwiaXRlbXMiLCJpdGVtSW5kZXgiLCJkdXJhdGlvbiIsIm9uRG9uZSIsIlNvaWwiLCJtYWtlRHJhZ2dhYmxlIiwiU2VlZCIsIkdsYXNzZXMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0FpQixrQkFBTSxJQUFOLEVBQVksS0FBSzZFLGFBQUwsQ0FBbUI1QyxJQUFuQixDQUF3QixJQUF4QixDQUFaO0FBQ0g7Ozs7OztrQkFHVThDLE8iLCJmaWxlIjoiLi9wdWJsaWMvc2NyaXB0cy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1YjgwYTNkOTQ4ZjhkZjg0MjkzMSIsImltcG9ydCBEcmFnZ2FibGUgZnJvbSAnZHJhZ2dhYmxlJ1xyXG5cclxuY2xhc3MgRHJhZ0hhbmRsZXIge1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3JpZ2luKSB7XHJcbiAgICAgICAgdGhpcy5pblRhcmdldCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3JpZ2luID0gb3JpZ2luIHx8IHt4OiAwLCB5OiAwfTtcclxuICAgICAgICB0aGlzLnRhcmdldFJlY3QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25FbmRDYiA9IHRoaXMub25TdGFydENiID0gdGhpcy5vbk1vdmVDYiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcclxuICAgICAgICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnZ2FibGUodGhpcy5jb250YWluZXIsIHtcclxuICAgICAgICAgICAgdXNlR1BVOiB0cnVlLFxyXG4gICAgICAgICAgICBsaW1pdDoge1xyXG4gICAgICAgICAgICAgICAgeDogWzAsIHdpbmRvdy5pbm5lcldpZHRoXSxcclxuICAgICAgICAgICAgICAgIHk6IFswLCB3aW5kb3cuaW5uZXJIZWlnaHRdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRHJhZ1N0YXJ0OiAoZWxlbWVudCwgeCwgeSwgZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ292ZXItZHJvcHBhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFJlY3QgPSB3aW5kb3cuYXBwLmdhbWUudmFzZS5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vblN0YXJ0Q2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudDogZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldC5pblRhcmdldCA9IHRoaXMuaXNJblJlY3QocmV0LnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3RhcnRDYihyZXQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRHJhZzogKGVsZW1lbnQsIHgsIHksIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICAgICAgICAgICAgICBldmVudDogZXZlbnRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZXQuaW5UYXJnZXQgPSB0aGlzLmlzSW5SZWN0KHJldC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbk1vdmVDYikgdGhpcy5vbk1vdmVDYihyZXQpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uRHJhZ0VuZDogKGVsZW1lbnQsIHgsIHksIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyLWRyb3BwYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0LmluVGFyZ2V0ID0gdGhpcy5pc0luUmVjdChyZXQucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJldC5pblRhcmdldCkgdGhpcy5kcm9wcGVkT25UYXJnZXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25FeGl0RHJvcHBhYmxlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMXMnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUubGVmdCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXIoMTAwMCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbkVuZENiKSB0aGlzLm9uRW5kQ2IocmV0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvblN0YXJ0IChjYikge1xyXG4gICAgICAgIHRoaXMub25TdGFydENiID0gY2JcclxuICAgIH1cclxuICAgIG9uTW92ZSAoY2IpIHtcclxuICAgICAgICB0aGlzLm9uTW92ZUNiID0gY2JcclxuICAgIH1cclxuICAgIG9uRW5kIChjYikge1xyXG4gICAgICAgIHRoaXMub25FbmRDYiA9IGNiXHJcbiAgICB9XHJcbiAgICBkZXN0cm95ICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMXMnO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnJpZ2h0ID0gJyc7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuYm90dG9tID0gJyc7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUuZGVzdHJveSgpXHJcbiAgICB9XHJcbiAgICBvbkVudGVyRHJvcHBhYmxlICgpIHtcclxuICAgICAgICB3aW5kb3cuYXBwLmdhbWUudmFzZS5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJhZ2dhYmxlLW92ZXInKVxyXG4gICAgfVxyXG4gICAgb25FeGl0RHJvcHBhYmxlICgpIHtcclxuICAgICAgICB3aW5kb3cuYXBwLmdhbWUudmFzZS5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dhYmxlLW92ZXInKVxyXG4gICAgfVxyXG4gICAgZHJvcHBlZE9uVGFyZ2V0ICgpIHtcclxuICAgICAgICB3aW5kb3cuYXBwLmdhbWUudmFzZS5vbkRyb3AodGhpcy5jb250YWluZXIpXHJcbiAgICB9XHJcbiAgICBpc0luUmVjdCAocG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy50YXJnZXRSZWN0O1xyXG4gICAgICAgIGNvbnN0IHRhcmdldENlbnRlclggPSByZWN0LmxlZnQgKyByZWN0LndpZHRoLzI7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Q2VudGVyWSA9IHJlY3QudG9wICsgcmVjdC5oZWlnaHQvMjtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChcclxuICAgICAgICAgICAgTWF0aC5wb3coKHRhcmdldENlbnRlclggLSBwb3NpdGlvbi5sZWZ0IC0gdGhpcy5vcmlnaW4ueCksIDIpICtcclxuICAgICAgICAgICAgTWF0aC5wb3coKHRhcmdldENlbnRlclkgLSBwb3NpdGlvbi50b3AgLSB0aGlzLm9yaWdpbi55KSwgMilcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IG5ld0luVGFyZ2V0Q2FsY3VsYXRlZCA9IGRpc3RhbmNlIDwgNzA7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5UYXJnZXQgJiYgIW5ld0luVGFyZ2V0Q2FsY3VsYXRlZCkgdGhpcy5vbkV4aXREcm9wcGFibGUoKTtcclxuICAgICAgICBlbHNlIGlmICghdGhpcy5pblRhcmdldCAmJiBuZXdJblRhcmdldENhbGN1bGF0ZWQpIHRoaXMub25FbnRlckRyb3BwYWJsZSgpO1xyXG4gICAgICAgIHRoaXMuaW5UYXJnZXQgPSBuZXdJblRhcmdldENhbGN1bGF0ZWQ7XHJcbiAgICAgICAgcmV0dXJuIG5ld0luVGFyZ2V0Q2FsY3VsYXRlZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmFnSGFuZGxlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9EcmFnSGFuZGxlci5qcyIsImltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSdcclxuXHJcbndpbmRvdy4kID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcclxud2luZG93LiQkID0gKHF1ZXJ5KSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KTtcclxuXHJcbndpbmRvdy5hZnRlciA9ICh0aW1lLCBkb1doYXQpID0+IHNldFRpbWVvdXQoZG9XaGF0LCB0aW1lKTtcclxud2luZG93LmV2ZXJ5ID0gKHRpbWUsIGRvV2hhdCkgPT4gc2V0SW50ZXJ2YWwoZG9XaGF0LCB0aW1lKTtcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lbnRlckJ1dHRvbiA9ICQoJy5pbnRybyBidXR0b24nKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuICAgIGluaXQgKCkge1xyXG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSB0aGlzLnJlYWR5LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lbnRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZ2FtZS51bkJveCgpKVxyXG4gICAgfVxyXG4gICAgcmVhZHkgKCkge1xyXG5cclxuICAgIH1cclxuICAgIHdoZW5HYW1lSXNEb25lICgpIHtcclxuICAgICAgICB0aGlzLmdhbWUuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LmFwcCA9IG5ldyBBcHA7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FwcC5qcyIsImltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnXHJcbmltcG9ydCBWYXNlIGZyb20gJy4vVmFzZSdcclxuaW1wb3J0IFBhcGVyIGZyb20gJy4vUGFwZXInXHJcbmltcG9ydCBTb2lsIGZyb20gJy4vU29pbCdcclxuaW1wb3J0IFNlZWQgZnJvbSAnLi9TZWVkJ1xyXG5pbXBvcnQgR2xhc3NlcyBmcm9tICcuL0dsYXNzZXMnXHJcblxyXG5jbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yIChhcHApIHtcclxuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQoJy5nYW1lJyk7XHJcbiAgICAgICAgdGhpcy5ib3ggPSBuZXcgQm94KCcuZ2FtZSAuYm94Jyk7XHJcbiAgICAgICAgdGhpcy52YXNlID0gbmV3IFZhc2UoJy5nYW1lIC52YXNlJywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wYXBlciA9IG5ldyBQYXBlcignLmdhbWUgLnBhcGVyJywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zb2lsID0gbmV3IFNvaWwoJy5nYW1lIC5zb2lsJyk7XHJcbiAgICAgICAgdGhpcy5zZWVkID0gbmV3IFNlZWQoJy5nYW1lIC5zZWVkJyk7XHJcbiAgICAgICAgdGhpcy5nbGFzc2VzID0gbmV3IEdsYXNzZXMoJy5nYW1lIC5nbGFzc2VzJyk7XHJcbiAgICB9XHJcbiAgICB1bkJveCAoKSB7XHJcbiAgICAgICAgJCgnLmludHJvJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIHRoaXMuYm94Lm9wZW4oKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgYWZ0ZXIoNTAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZnRlcigyMDAsICgpID0+IHRoaXMuc2VlZC5jb21lT3V0KCkpO1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXIoMTAwMCwgKCkgPT4gdGhpcy5zb2lsLmNvbWVPdXQoKSk7XHJcbiAgICAgICAgICAgICAgICBhZnRlcigyMDAwLCAoKSA9PiB0aGlzLnZhc2UuY29tZU91dCgpKTtcclxuICAgICAgICAgICAgICAgIGFmdGVyKDIxMDAsICgpID0+IHRoaXMucGFwZXIuY29tZU91dCgpKTtcclxuICAgICAgICAgICAgICAgIGFmdGVyKDI1MDAsICgpID0+IHRoaXMuZ2xhc3Nlcy5jb21lT3V0KCkpO1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXIoNzAwMCwgKCkgPT4gdGhpcy5wYXBlci5uZXh0KCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uRG9uZSAoKSB7XHJcbiAgICAgICAgdGhpcy5wYXBlci5ib2xkKCk7XHJcbiAgICAgICAgYWZ0ZXIoMjAwMCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlZWQuZ2V0T3V0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc29pbC5nZXRPdXQoKTtcclxuICAgICAgICAgICAgdGhpcy5wYXBlci5nZXRPdXQoKTtcclxuICAgICAgICAgICAgdGhpcy5nbGFzc2VzLmdldE91dCgpO1xyXG4gICAgICAgICAgICBhZnRlcigxMDAwLCAoKSA9PiB0aGlzLmFwcC53aGVuR2FtZUlzRG9uZSgpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0dhbWUuanMiLCJjbGFzcyBCb3gge1xyXG4gICAgY29uc3RydWN0b3IgKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLmNsb3NlQm94SW1hZ2UgPSAkKHF1ZXJ5ICsgJyAuY2xvc2VkJyk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZml4U2l6ZXMuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICBnb0JhY2sgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JhY2snKVxyXG4gICAgfVxyXG4gICAgZml4U2l6ZXMgKCkge1xyXG4gICAgICAgIHdpbmRvdy5hcmVhRGlzdEZyb21Ub3AgPSB0aGlzLmNsb3NlQm94SW1hZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgICAgICQoJy5nYW1lID4gLmFyZWEnKS5zdHlsZS50b3AgPSBhcmVhRGlzdEZyb21Ub3AgKyAncHgnO1xyXG4gICAgICAgICQoJy5nYW1lID4gLmFyZWEnKS5zdHlsZS5oZWlnaHQgPSAod2luZG93LmlubmVySGVpZ2h0IC0gYXJlYURpc3RGcm9tVG9wKSArICdweCdcclxuICAgIH1cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xyXG4gICAgICAgICAgICBhZnRlcigxMjAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvcGVuJylcclxuICAgICAgICAgICAgICAgIHRoaXMuZml4U2l6ZXMoKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMuZml4U2l6ZXMoKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm94XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0JveC5qcyIsImNvbnN0IHZhc2VFdm9sdXRpb25RdWV1ZSA9IFsnZW1wdHknLCAnc29pbGVkJywgJ3NlZWRlZCcsICdmaWxsZWQnLCAnd2V0JywgJ2dyZWVuLWxpdHRsZScsICdncmVlbi1tZWRpdW0nLCAnZ3JlZW4tZnVsbCddO1xyXG5sZXQgbGV2ZWxzID0gWydzb2lsJywgJ3NlZWQnLCAnc29pbCcsICd3YXRlcicsICd3YXRlcicsICd3YXRlciddO1xyXG5cclxuY2xhc3MgVmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnksIGdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdlbXB0eSdcclxuICAgIH1cclxuICAgIHNldCBzdGF0ZSAodG8pIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHRvO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsIHRvKVxyXG4gICAgfVxyXG4gICAgZ2V0IHN0YXRlICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGVcclxuICAgIH1cclxuICAgIGNvbWVPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dCcpO1xyXG4gICAgICAgIGFmdGVyKDIwMDAsICgpID0+IHsgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzAuM3MnIH0pXHJcbiAgICB9XHJcbiAgICBuZXh0ICgpIHtcclxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSB2YXNlRXZvbHV0aW9uUXVldWUuaW5kZXhPZih0aGlzLnN0YXRlKSArIDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHZhc2VFdm9sdXRpb25RdWV1ZVtNYXRoLm1pbihuZXh0SW5kZXgsIHZhc2VFdm9sdXRpb25RdWV1ZS5sZW5ndGggLSAxKV07XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICd3ZXQnKSBhZnRlcigzMDAsIHRoaXMubmV4dC5iaW5kKHRoaXMpKVxyXG4gICAgICAgIGlmICghWyd3ZXQnLCAnZ3JlZW4tbGl0dGxlJywgJ2dyZWVuLW1lZGl1bSddLmluY2x1ZGVzKHRoaXMuc3RhdGUpKSB0aGlzLmdhbWUucGFwZXIubmV4dCgpXHJcbiAgICB9XHJcbiAgICBvbkRyb3AgKGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBkcm9wcGVkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG4gICAgICAgIGlmIChkcm9wcGVkID09PSBsZXZlbHNbMF0pIHtcclxuICAgICAgICAgICAgbGV2ZWxzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWYXNlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Zhc2UuanMiLCJjbGFzcyBQYXBlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnksIGdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9ICQkKHF1ZXJ5ICsgJyBsaScpO1xyXG4gICAgICAgIHRoaXMuaXRlbUluZGV4ID0gMDtcclxuICAgIH1cclxuICAgIGNvbWVPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dCcpXHJcbiAgICB9XHJcbiAgICBnZXRPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dC1wYWdlJylcclxuICAgIH1cclxuICAgIGJvbGQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvbGQnKTtcclxuICAgICAgICBhZnRlcigyMDAwLCAoKT0+eyB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdib2xkJykgfSlcclxuICAgIH1cclxuICAgIG5leHQgKCkge1xyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5pdGVtSW5kZXggPT09IDAgPyAwIDogMTAwMDtcclxuICAgICAgICBpZiAodGhpcy5pdGVtSW5kZXggPiAwKSB0aGlzLml0ZW1zW3RoaXMuaXRlbUluZGV4LTFdLmNsYXNzTGlzdC5hZGQoJ3RpY2snKTtcclxuICAgICAgICBpZiAodGhpcy5pdGVtSW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aCkgYWZ0ZXIoZHVyYXRpb24sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ib2xkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5pdGVtSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1JbmRleCsrXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5vbkRvbmUoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFwZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUGFwZXIuanMiLCJpbXBvcnQgRHJhZ0hhbmRsZXIgZnJvbSAnLi9EcmFnSGFuZGxlcidcclxuXHJcbmNsYXNzIFNvaWwge1xyXG4gICAgY29uc3RydWN0b3IocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJyc7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldE91dCAoKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dC1wYWdlJylcclxuICAgIH1cclxuICAgIG1ha2VEcmFnZ2FibGUgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwcyc7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUgPSBuZXcgRHJhZ0hhbmRsZXIodGhpcy5jb250YWluZXIsIHt4OiAxMDAsIHk6IDB9KTtcclxuICAgIH1cclxuICAgIGNvbWVPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dCcpO1xyXG4gICAgICAgIGFmdGVyKDEwMDAsIHRoaXMubWFrZURyYWdnYWJsZS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb2lsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NvaWwuanMiLCIhZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxiKTphLkRyYWdnYWJsZT1iKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBhKGEsYil7dmFyIGM9dGhpcyxkPWsuYmluZChjLnN0YXJ0LGMpLGU9ay5iaW5kKGMuZHJhZyxjKSxnPWsuYmluZChjLnN0b3AsYyk7aWYoIWYoYSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRyYWdnYWJsZSBleHBlY3RzIGFyZ3VtZW50IDAgdG8gYmUgYW4gRWxlbWVudFwiKTtiPWsuYXNzaWduKHt9LGksYiksay5hc3NpZ24oYyx7ZWxlbWVudDphLGhhbmRsZTpiLmhhbmRsZSYmZihiLmhhbmRsZSk/Yi5oYW5kbGU6YSxoYW5kbGVyczp7c3RhcnQ6e21vdXNlZG93bjpkLHRvdWNoc3RhcnQ6ZH0sbW92ZTp7bW91c2Vtb3ZlOmUsbW91c2V1cDpnLHRvdWNobW92ZTplLHRvdWNoZW5kOmd9fSxvcHRpb25zOmJ9KSxjLmluaXRpYWxpemUoKX1mdW5jdGlvbiBiKGEpe3JldHVybiBwYXJzZUludChhLDEwKX1mdW5jdGlvbiBjKGEpe3JldHVyblwiY3VycmVudFN0eWxlXCJpbiBhP2EuY3VycmVudFN0eWxlOmdldENvbXB1dGVkU3R5bGUoYSl9ZnVuY3Rpb24gZChhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIEFycmF5fWZ1bmN0aW9uIGUoYSl7cmV0dXJuIHZvaWQgMCE9PWEmJm51bGwhPT1hfWZ1bmN0aW9uIGYoYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBFbGVtZW50fHxcInVuZGVmaW5lZFwiIT10eXBlb2YgSFRNTERvY3VtZW50JiZhIGluc3RhbmNlb2YgSFRNTERvY3VtZW50fWZ1bmN0aW9uIGcoYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBGdW5jdGlvbn1mdW5jdGlvbiBoKCl7fXZhciBpPXtncmlkOjAsZmlsdGVyVGFyZ2V0Om51bGwsbGltaXQ6e3g6bnVsbCx5Om51bGx9LHRocmVzaG9sZDowLHNldEN1cnNvcjohMSxzZXRQb3NpdGlvbjohMCxzbW9vdGhEcmFnOiEwLHVzZUdQVTohMCxvbkRyYWc6aCxvbkRyYWdTdGFydDpoLG9uRHJhZ0VuZDpofSxqPXt0cmFuc2Zvcm06ZnVuY3Rpb24oKXtmb3IodmFyIGE9XCIgLW8tIC1tcy0gLW1vei0gLXdlYmtpdC1cIi5zcGxpdChcIiBcIiksYj1kb2N1bWVudC5ib2R5LnN0eWxlLGM9YS5sZW5ndGg7Yy0tOyl7dmFyIGQ9YVtjXStcInRyYW5zZm9ybVwiO2lmKGQgaW4gYilyZXR1cm4gZH19KCl9LGs9e2Fzc2lnbjpmdW5jdGlvbigpe2Zvcih2YXIgYT1hcmd1bWVudHNbMF0sYj1hcmd1bWVudHMubGVuZ3RoLGM9MTtiPmM7YysrKXt2YXIgZD1hcmd1bWVudHNbY107Zm9yKHZhciBlIGluIGQpYVtlXT1kW2VdfXJldHVybiBhfSxiaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGZ1bmN0aW9uKCl7YS5hcHBseShiLGFyZ3VtZW50cyl9fSxvbjpmdW5jdGlvbihhLGIsYyl7aWYoYiYmYylrLmFkZEV2ZW50KGEsYixjKTtlbHNlIGlmKGIpZm9yKHZhciBkIGluIGIpay5hZGRFdmVudChhLGQsYltkXSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7aWYoYiYmYylrLnJlbW92ZUV2ZW50KGEsYixjKTtlbHNlIGlmKGIpZm9yKHZhciBkIGluIGIpay5yZW1vdmVFdmVudChhLGQsYltkXSl9LGxpbWl0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIGQoYik/KGI9WytiWzBdLCtiWzFdXSxhPGJbMF0/YT1iWzBdOmE+YlsxXSYmKGE9YlsxXSkpOmE9K2IsYX0sYWRkRXZlbnQ6XCJhdHRhY2hFdmVudFwiaW4gRWxlbWVudC5wcm90b3R5cGU/ZnVuY3Rpb24oYSxiLGMpe2EuYXR0YWNoRXZlbnQoXCJvblwiK2IsYyl9OmZ1bmN0aW9uKGEsYixjKXthLmFkZEV2ZW50TGlzdGVuZXIoYixjLCExKX0scmVtb3ZlRXZlbnQ6XCJhdHRhY2hFdmVudFwiaW4gRWxlbWVudC5wcm90b3R5cGU/ZnVuY3Rpb24oYSxiLGMpe2EuZGV0YWNoRXZlbnQoXCJvblwiK2IsYyl9OmZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjKX19O3JldHVybiBrLmFzc2lnbihhLnByb3RvdHlwZSx7c2V0T3B0aW9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcztyZXR1cm4gYy5vcHRpb25zW2FdPWIsYy5pbml0aWFsaXplKCksY30sZ2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5kcmFnRXZlbnQ7cmV0dXJue3g6YS54LHk6YS55fX0sc2V0OmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxkPWMuZHJhZ0V2ZW50O3JldHVybiBkLm9yaWdpbmFsPXt4OmQueCx5OmQueX0sYy5tb3ZlKGEsYiksY30sZHJhZ0V2ZW50OntzdGFydGVkOiExLHg6MCx5OjB9LGluaXRpYWxpemU6ZnVuY3Rpb24oKXt2YXIgYSxiPXRoaXMsZD1iLmVsZW1lbnQsZT0oYi5oYW5kbGUsZC5zdHlsZSksZj1jKGQpLGc9Yi5vcHRpb25zLGg9ai50cmFuc2Zvcm0saT1iLl9kaW1lbnNpb25zPXtoZWlnaHQ6ZC5vZmZzZXRIZWlnaHQsbGVmdDpkLm9mZnNldExlZnQsdG9wOmQub2Zmc2V0VG9wLHdpZHRoOmQub2Zmc2V0V2lkdGh9O2cudXNlR1BVJiZoJiYoYT1mW2hdLFwibm9uZVwiPT09YSYmKGE9XCJcIiksZVtoXT1hK1wiIHRyYW5zbGF0ZTNkKDAsMCwwKVwiKSxnLnNldFBvc2l0aW9uJiYoZS5kaXNwbGF5PVwiYmxvY2tcIixlLmxlZnQ9aS5sZWZ0K1wicHhcIixlLnRvcD1pLnRvcCtcInB4XCIsZS5ib3R0b209ZS5yaWdodD1cImF1dG9cIixlLm1hcmdpbj0wLGUucG9zaXRpb249XCJhYnNvbHV0ZVwiKSxnLnNldEN1cnNvciYmKGUuY3Vyc29yPVwibW92ZVwiKSxiLnNldExpbWl0KGcubGltaXQpLGsuYXNzaWduKGIuZHJhZ0V2ZW50LHt4OmkubGVmdCx5OmkudG9wfSksay5vbihiLmhhbmRsZSxiLmhhbmRsZXJzLnN0YXJ0KX0sc3RhcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPWIuZ2V0Q3Vyc29yKGEpLGQ9Yi5lbGVtZW50O2IudXNlVGFyZ2V0KGEudGFyZ2V0fHxhLnNyY0VsZW1lbnQpJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT0hMSxiLmRyYWdFdmVudC5vbGRaaW5kZXg9ZC5zdHlsZS56SW5kZXgsZC5zdHlsZS56SW5kZXg9MWU0LGIuc2V0Q3Vyc29yKGMpLGIuc2V0UG9zaXRpb24oKSxiLnNldFpvb20oKSxrLm9uKGRvY3VtZW50LGIuaGFuZGxlcnMubW92ZSkpfSxkcmFnOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1iLmRyYWdFdmVudCxkPWIuZWxlbWVudCxlPWIuX2N1cnNvcixmPWIuX2RpbWVuc2lvbnMsZz1iLm9wdGlvbnMsaD1mLnpvb20saT1iLmdldEN1cnNvcihhKSxqPWcudGhyZXNob2xkLGs9KGkueC1lLngpL2grZi5sZWZ0LGw9KGkueS1lLnkpL2grZi50b3A7IWMuc3RhcnRlZCYmaiYmTWF0aC5hYnMoZS54LWkueCk8aiYmTWF0aC5hYnMoZS55LWkueSk8anx8KGMub3JpZ2luYWx8fChjLm9yaWdpbmFsPXt4OmsseTpsfSksYy5zdGFydGVkfHwoZy5vbkRyYWdTdGFydChkLGssbCxhKSxjLnN0YXJ0ZWQ9ITApLGIubW92ZShrLGwpJiZnLm9uRHJhZyhkLGMueCxjLnksYSkpfSxtb3ZlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxkPWMuZHJhZ0V2ZW50LGU9Yy5vcHRpb25zLGY9ZS5ncmlkLGc9Yy5lbGVtZW50LnN0eWxlLGg9Yy5saW1pdChhLGIsZC5vcmlnaW5hbC54LGQub3JpZ2luYWwueSk7cmV0dXJuIWUuc21vb3RoRHJhZyYmZiYmKGg9Yy5yb3VuZChoLGYpKSxoLnghPT1kLnh8fGgueSE9PWQueT8oZC54PWgueCxkLnk9aC55LGcubGVmdD1oLngrXCJweFwiLGcudG9wPWgueStcInB4XCIsITApOiExfSxzdG9wOmZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcyxkPWMuZHJhZ0V2ZW50LGU9Yy5lbGVtZW50LGY9Yy5vcHRpb25zLGc9Zi5ncmlkO2sub2ZmKGRvY3VtZW50LGMuaGFuZGxlcnMubW92ZSksZS5zdHlsZS56SW5kZXg9ZC5vbGRaaW5kZXgsZi5zbW9vdGhEcmFnJiZnJiYoYj1jLnJvdW5kKHt4OmQueCx5OmQueX0sZyksYy5tb3ZlKGIueCxiLnkpLGsuYXNzaWduKGMuZHJhZ0V2ZW50LGIpKSxjLmRyYWdFdmVudC5zdGFydGVkJiZmLm9uRHJhZ0VuZChlLGQueCxkLnksYSksYy5yZXNldCgpfSxyZXNldDpmdW5jdGlvbigpe3RoaXMuZHJhZ0V2ZW50LnN0YXJ0ZWQ9ITF9LHJvdW5kOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucy5ncmlkO3JldHVybnt4OmIqTWF0aC5yb3VuZChhLngvYikseTpiKk1hdGgucm91bmQoYS55L2IpfX0sZ2V0Q3Vyc29yOmZ1bmN0aW9uKGEpe3JldHVybnt4OihhLnRhcmdldFRvdWNoZXM/YS50YXJnZXRUb3VjaGVzWzBdOmEpLmNsaWVudFgseTooYS50YXJnZXRUb3VjaGVzP2EudGFyZ2V0VG91Y2hlc1swXTphKS5jbGllbnRZfX0sc2V0Q3Vyc29yOmZ1bmN0aW9uKGEpe3RoaXMuX2N1cnNvcj1hfSxzZXRMaW1pdDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9ZnVuY3Rpb24oYSxiKXtyZXR1cm57eDphLHk6Yn19O2lmKGcoYSkpYi5saW1pdD1hO2Vsc2UgaWYoZihhKSl7dmFyIGQ9Yi5fZGltZW5zaW9ucyxoPWEuc2Nyb2xsSGVpZ2h0LWQuaGVpZ2h0LGk9YS5zY3JvbGxXaWR0aC1kLndpZHRoO2IubGltaXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm57eDprLmxpbWl0KGEsWzAsaV0pLHk6ay5saW1pdChiLFswLGhdKX19fWVsc2UgaWYoYSl7dmFyIGo9e3g6ZShhLngpLHk6ZShhLnkpfTtiLmxpbWl0PWoueHx8ai55P2Z1bmN0aW9uKGIsYyl7cmV0dXJue3g6ai54P2subGltaXQoYixhLngpOmIseTpqLnk/ay5saW1pdChjLGEueSk6Y319OmN9ZWxzZSBiLmxpbWl0PWN9LHNldFBvc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxjPWEuZWxlbWVudCxkPWMuc3R5bGU7ay5hc3NpZ24oYS5fZGltZW5zaW9ucyx7bGVmdDpiKGQubGVmdCl8fGMub2Zmc2V0TGVmdCx0b3A6YihkLnRvcCl8fGMub2Zmc2V0VG9wfSl9LHNldFpvb206ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcyxiPWEuZWxlbWVudCxkPTE7Yj1iLm9mZnNldFBhcmVudDspe3ZhciBlPWMoYikuem9vbTtpZihlJiZcIm5vcm1hbFwiIT09ZSl7ZD1lO2JyZWFrfX1hLl9kaW1lbnNpb25zLnpvb209ZH0sdXNlVGFyZ2V0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMub3B0aW9ucy5maWx0ZXJUYXJnZXQ7cmV0dXJuIGIgaW5zdGFuY2VvZiBGdW5jdGlvbj9iKGEpOiEwfSxkZXN0cm95OmZ1bmN0aW9uKCl7ay5vZmYodGhpcy5oYW5kbGUsdGhpcy5oYW5kbGVycy5zdGFydCksay5vZmYoZG9jdW1lbnQsdGhpcy5oYW5kbGVycy5tb3ZlKX19KSxhfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZHJhZ2dhYmxlL2Rpc3QvZHJhZ2dhYmxlLm1pbi5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgRHJhZ0hhbmRsZXIgZnJvbSAnLi9EcmFnSGFuZGxlcidcclxuXHJcbmNsYXNzIFNlZWQge1xyXG4gICAgY29uc3RydWN0b3IocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJyc7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldE91dCAoKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUuZGVzdHJveSgpXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3V0LXBhZ2UnKVxyXG4gICAgfVxyXG4gICAgbWFrZURyYWdnYWJsZSAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBzJztcclxuICAgICAgICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnSGFuZGxlcih0aGlzLmNvbnRhaW5lciwge3g6IDUwLCB5OiAwfSk7XHJcbiAgICB9XHJcbiAgICBjb21lT3V0ICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdXQnKTtcclxuICAgICAgICBhZnRlcigxMDAwLCB0aGlzLm1ha2VEcmFnZ2FibGUuYmluZCh0aGlzKSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VlZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TZWVkLmpzIiwiaW1wb3J0IERyYWdIYW5kbGVyIGZyb20gJy4vRHJhZ0hhbmRsZXInXHJcblxyXG5jbGFzcyBHbGFzc2VzIHtcclxuICAgIGNvbnN0cnVjdG9yKHF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSAnJztcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUubGVmdCA9ICcnO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBnZXRPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdXQtcGFnZScpXHJcbiAgICB9XHJcbiAgICBtYWtlRHJhZ2dhYmxlICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMHMnO1xyXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlID0gbmV3IERyYWdIYW5kbGVyKHRoaXMuY29udGFpbmVyLCB7eDogMCwgeTogODB9KTtcclxuICAgIH1cclxuICAgIGNvbWVPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dCcpO1xyXG4gICAgICAgIGFmdGVyKDIwMDAsIHRoaXMubWFrZURyYWdnYWJsZS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbGFzc2VzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0dsYXNzZXMuanMiXSwic291cmNlUm9vdCI6IiJ9