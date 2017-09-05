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
        this.outroBox = $('.outro');
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
            var _this2 = this;

            this.game.container.classList.add('done');
            after(1000, function () {
                return _this2.outroBox.classList.add('show');
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTcxYmRhNWUxY2U0ZWE1NDM0MmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RyYWdIYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUGFwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NvaWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RyYWdnYWJsZS9kaXN0L2RyYWdnYWJsZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dsYXNzZXMuanMiXSwibmFtZXMiOlsiRHJhZ0hhbmRsZXIiLCJlbGVtZW50Iiwib3JpZ2luIiwiaW5UYXJnZXQiLCJ4IiwieSIsInRhcmdldFJlY3QiLCJvbkVuZENiIiwib25TdGFydENiIiwib25Nb3ZlQ2IiLCJjb250YWluZXIiLCJzdHlsZSIsImN1cnNvciIsImRyYWdnYWJsZSIsInVzZUdQVSIsImxpbWl0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwib25EcmFnU3RhcnQiLCJldmVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcCIsImdhbWUiLCJ2YXNlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmV0IiwicG9zaXRpb24iLCJpc0luUmVjdCIsIm9uRHJhZyIsIm9uRHJhZ0VuZCIsInJlbW92ZSIsImRyb3BwZWRPblRhcmdldCIsIm9uRXhpdERyb3BwYWJsZSIsInRyYW5zaXRpb25EdXJhdGlvbiIsInBvaW50ZXJFdmVudHMiLCJ0b3AiLCJsZWZ0IiwiYWZ0ZXIiLCJjYiIsInJpZ2h0IiwiYm90dG9tIiwiZGVzdHJveSIsIm9uRHJvcCIsInJlY3QiLCJ0YXJnZXRDZW50ZXJYIiwid2lkdGgiLCJ0YXJnZXRDZW50ZXJZIiwiaGVpZ2h0IiwiZGlzdGFuY2UiLCJNYXRoIiwic3FydCIsInBvdyIsIm5ld0luVGFyZ2V0Q2FsY3VsYXRlZCIsIm9uRW50ZXJEcm9wcGFibGUiLCIkIiwicXVlcnkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkJCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0aW1lIiwiZG9XaGF0Iiwic2V0VGltZW91dCIsImV2ZXJ5Iiwic2V0SW50ZXJ2YWwiLCJBcHAiLCJlbnRlckJ1dHRvbiIsIm91dHJvQm94IiwiaW5pdCIsIm9ubG9hZCIsInJlYWR5IiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1bkJveCIsIkdhbWUiLCJib3giLCJwYXBlciIsInNvaWwiLCJzZWVkIiwiZ2xhc3NlcyIsIm9wZW4iLCJ0aGVuIiwiY29tZU91dCIsIm5leHQiLCJib2xkIiwiZ2V0T3V0Iiwid2hlbkdhbWVJc0RvbmUiLCJCb3giLCJjbG9zZUJveEltYWdlIiwiZml4U2l6ZXMiLCJhcmVhRGlzdEZyb21Ub3AiLCJQcm9taXNlIiwicmVzb2x2ZSIsImdvQmFjayIsInZhc2VFdm9sdXRpb25RdWV1ZSIsImxldmVscyIsIlZhc2UiLCJzdGF0ZSIsIm5leHRJbmRleCIsImluZGV4T2YiLCJtaW4iLCJsZW5ndGgiLCJpbmNsdWRlcyIsImRyb3BwZWQiLCJnZXRBdHRyaWJ1dGUiLCJzaGlmdCIsInRvIiwiX3N0YXRlIiwic2V0QXR0cmlidXRlIiwiUGFwZXIiLCJpdGVtcyIsIml0ZW1JbmRleCIsImR1cmF0aW9uIiwib25Eb25lIiwiU29pbCIsIm1ha2VEcmFnZ2FibGUiLCJTZWVkIiwiR2xhc3NlcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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LGlCQUFLdEIsU0FBTCxHQUFpQiwwQkFBZ0IsS0FBS0gsU0FBckIsRUFBZ0MsRUFBQ04sR0FBRyxDQUFKLEVBQU9DLEdBQUcsRUFBVixFQUFoQyxDQUFqQjtBQUNIOzs7a0NBQ1U7QUFDUCxpQkFBS0ssU0FBTCxDQUFlVyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixLQUE3QjtBQUNBaUIsa0JBQU0sSUFBTixFQUFZLEtBQUs4RSxhQUFMLENBQW1CNUMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBWjtBQUNIOzs7Ozs7a0JBR1U4QyxPIiwiZmlsZSI6Ii4vcHVibGljL3NjcmlwdHMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTcxYmRhNWUxY2U0ZWE1NDM0MmUiLCJpbXBvcnQgRHJhZ2dhYmxlIGZyb20gJ2RyYWdnYWJsZSdcclxuXHJcbmNsYXNzIERyYWdIYW5kbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9yaWdpbikge1xyXG4gICAgICAgIHRoaXMuaW5UYXJnZXQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbiB8fCB7eDogMCwgeTogMH07XHJcbiAgICAgICAgdGhpcy50YXJnZXRSZWN0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uRW5kQ2IgPSB0aGlzLm9uU3RhcnRDYiA9IHRoaXMub25Nb3ZlQ2IgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKHRoaXMuY29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgIHVzZUdQVTogdHJ1ZSxcclxuICAgICAgICAgICAgbGltaXQ6IHtcclxuICAgICAgICAgICAgICAgIHg6IFswLCB3aW5kb3cuaW5uZXJXaWR0aF0sXHJcbiAgICAgICAgICAgICAgICB5OiBbMCwgd2luZG93LmlubmVySGVpZ2h0XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkRyYWdTdGFydDogKGVsZW1lbnQsIHgsIHksIGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdmVyLWRyb3BwYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRSZWN0ID0gd2luZG93LmFwcC5nYW1lLnZhc2UuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25TdGFydENiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICByZXQuaW5UYXJnZXQgPSB0aGlzLmlzSW5SZWN0KHJldC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblN0YXJ0Q2IocmV0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkRyYWc6IChlbGVtZW50LCB4LCB5LCBldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmV0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0LmluVGFyZ2V0ID0gdGhpcy5pc0luUmVjdChyZXQucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25Nb3ZlQ2IpIHRoaXMub25Nb3ZlQ2IocmV0KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkRyYWdFbmQ6IChlbGVtZW50LCB4LCB5LCBldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3Zlci1kcm9wcGFibGUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJldCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJldC5pblRhcmdldCA9IHRoaXMuaXNJblJlY3QocmV0LnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXQuaW5UYXJnZXQpIHRoaXMuZHJvcHBlZE9uVGFyZ2V0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXhpdERyb3BwYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzFzJztcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50b3AgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSAnJztcclxuICAgICAgICAgICAgICAgIGFmdGVyKDEwMDAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMHMnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0bydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25FbmRDYikgdGhpcy5vbkVuZENiKHJldClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25TdGFydCAoY2IpIHtcclxuICAgICAgICB0aGlzLm9uU3RhcnRDYiA9IGNiXHJcbiAgICB9XHJcbiAgICBvbk1vdmUgKGNiKSB7XHJcbiAgICAgICAgdGhpcy5vbk1vdmVDYiA9IGNiXHJcbiAgICB9XHJcbiAgICBvbkVuZCAoY2IpIHtcclxuICAgICAgICB0aGlzLm9uRW5kQ2IgPSBjYlxyXG4gICAgfVxyXG4gICAgZGVzdHJveSAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzFzJztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5yaWdodCA9ICcnO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmJvdHRvbSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlLmRlc3Ryb3koKVxyXG4gICAgfVxyXG4gICAgb25FbnRlckRyb3BwYWJsZSAoKSB7XHJcbiAgICAgICAgd2luZG93LmFwcC5nYW1lLnZhc2UuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RyYWdnYWJsZS1vdmVyJylcclxuICAgIH1cclxuICAgIG9uRXhpdERyb3BwYWJsZSAoKSB7XHJcbiAgICAgICAgd2luZG93LmFwcC5nYW1lLnZhc2UuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnYWJsZS1vdmVyJylcclxuICAgIH1cclxuICAgIGRyb3BwZWRPblRhcmdldCAoKSB7XHJcbiAgICAgICAgd2luZG93LmFwcC5nYW1lLnZhc2Uub25Ecm9wKHRoaXMuY29udGFpbmVyKVxyXG4gICAgfVxyXG4gICAgaXNJblJlY3QgKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMudGFyZ2V0UmVjdDtcclxuICAgICAgICBjb25zdCB0YXJnZXRDZW50ZXJYID0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aC8yO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldENlbnRlclkgPSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0LzI7XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgIE1hdGgucG93KCh0YXJnZXRDZW50ZXJYIC0gcG9zaXRpb24ubGVmdCAtIHRoaXMub3JpZ2luLngpLCAyKSArXHJcbiAgICAgICAgICAgIE1hdGgucG93KCh0YXJnZXRDZW50ZXJZIC0gcG9zaXRpb24udG9wIC0gdGhpcy5vcmlnaW4ueSksIDIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBuZXdJblRhcmdldENhbGN1bGF0ZWQgPSBkaXN0YW5jZSA8IDcwO1xyXG4gICAgICAgIGlmICh0aGlzLmluVGFyZ2V0ICYmICFuZXdJblRhcmdldENhbGN1bGF0ZWQpIHRoaXMub25FeGl0RHJvcHBhYmxlKCk7XHJcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuaW5UYXJnZXQgJiYgbmV3SW5UYXJnZXRDYWxjdWxhdGVkKSB0aGlzLm9uRW50ZXJEcm9wcGFibGUoKTtcclxuICAgICAgICB0aGlzLmluVGFyZ2V0ID0gbmV3SW5UYXJnZXRDYWxjdWxhdGVkO1xyXG4gICAgICAgIHJldHVybiBuZXdJblRhcmdldENhbGN1bGF0ZWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJhZ0hhbmRsZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRHJhZ0hhbmRsZXIuanMiLCJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnXHJcblxyXG53aW5kb3cuJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeSk7XHJcbndpbmRvdy4kJCA9IChxdWVyeSkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSk7XHJcblxyXG53aW5kb3cuYWZ0ZXIgPSAodGltZSwgZG9XaGF0KSA9PiBzZXRUaW1lb3V0KGRvV2hhdCwgdGltZSk7XHJcbndpbmRvdy5ldmVyeSA9ICh0aW1lLCBkb1doYXQpID0+IHNldEludGVydmFsKGRvV2hhdCwgdGltZSk7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZW50ZXJCdXR0b24gPSAkKCcuaW50cm8gYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5vdXRyb0JveCA9ICQoJy5vdXRybycpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgaW5pdCAoKSB7XHJcbiAgICAgICAgd2luZG93Lm9ubG9hZCA9IHRoaXMucmVhZHkuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmVudGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5nYW1lLnVuQm94KCkpXHJcbiAgICB9XHJcbiAgICByZWFkeSAoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgd2hlbkdhbWVJc0RvbmUgKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZG9uZScpO1xyXG4gICAgICAgIGFmdGVyKDEwMDAsICgpID0+IHRoaXMub3V0cm9Cb3guY2xhc3NMaXN0LmFkZCgnc2hvdycpKVxyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuYXBwID0gbmV3IEFwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQXBwLmpzIiwiaW1wb3J0IEJveCBmcm9tICcuL0JveCdcclxuaW1wb3J0IFZhc2UgZnJvbSAnLi9WYXNlJ1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnLi9QYXBlcidcclxuaW1wb3J0IFNvaWwgZnJvbSAnLi9Tb2lsJ1xyXG5pbXBvcnQgU2VlZCBmcm9tICcuL1NlZWQnXHJcbmltcG9ydCBHbGFzc2VzIGZyb20gJy4vR2xhc3NlcydcclxuXHJcbmNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IgKGFwcCkge1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJCgnLmdhbWUnKTtcclxuICAgICAgICB0aGlzLmJveCA9IG5ldyBCb3goJy5nYW1lIC5ib3gnKTtcclxuICAgICAgICB0aGlzLnZhc2UgPSBuZXcgVmFzZSgnLmdhbWUgLnZhc2UnLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnBhcGVyID0gbmV3IFBhcGVyKCcuZ2FtZSAucGFwZXInLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnNvaWwgPSBuZXcgU29pbCgnLmdhbWUgLnNvaWwnKTtcclxuICAgICAgICB0aGlzLnNlZWQgPSBuZXcgU2VlZCgnLmdhbWUgLnNlZWQnKTtcclxuICAgICAgICB0aGlzLmdsYXNzZXMgPSBuZXcgR2xhc3NlcygnLmdhbWUgLmdsYXNzZXMnKTtcclxuICAgIH1cclxuICAgIHVuQm94ICgpIHtcclxuICAgICAgICAkKCcuaW50cm8nKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgdGhpcy5ib3gub3BlbigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBhZnRlcig1MDAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFmdGVyKDIwMCwgKCkgPT4gdGhpcy5zZWVkLmNvbWVPdXQoKSk7XHJcbiAgICAgICAgICAgICAgICBhZnRlcigxMDAwLCAoKSA9PiB0aGlzLnNvaWwuY29tZU91dCgpKTtcclxuICAgICAgICAgICAgICAgIGFmdGVyKDIwMDAsICgpID0+IHRoaXMudmFzZS5jb21lT3V0KCkpO1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXIoMjEwMCwgKCkgPT4gdGhpcy5wYXBlci5jb21lT3V0KCkpO1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXIoMjUwMCwgKCkgPT4gdGhpcy5nbGFzc2VzLmNvbWVPdXQoKSk7XHJcbiAgICAgICAgICAgICAgICBhZnRlcig3MDAwLCAoKSA9PiB0aGlzLnBhcGVyLm5leHQoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25Eb25lICgpIHtcclxuICAgICAgICB0aGlzLnBhcGVyLmJvbGQoKTtcclxuICAgICAgICBhZnRlcigyMDAwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VlZC5nZXRPdXQoKTtcclxuICAgICAgICAgICAgdGhpcy5zb2lsLmdldE91dCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcGVyLmdldE91dCgpO1xyXG4gICAgICAgICAgICB0aGlzLmdsYXNzZXMuZ2V0T3V0KCk7XHJcbiAgICAgICAgICAgIGFmdGVyKDEwMDAsICgpID0+IHRoaXMuYXBwLndoZW5HYW1lSXNEb25lKCkpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvR2FtZS5qcyIsImNsYXNzIEJveCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHRoaXMuY2xvc2VCb3hJbWFnZSA9ICQocXVlcnkgKyAnIC5jbG9zZWQnKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5maXhTaXplcy5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIGdvQmFjayAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmFjaycpXHJcbiAgICB9XHJcbiAgICBmaXhTaXplcyAoKSB7XHJcbiAgICAgICAgd2luZG93LmFyZWFEaXN0RnJvbVRvcCA9IHRoaXMuY2xvc2VCb3hJbWFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICAgICAgJCgnLmdhbWUgPiAuYXJlYScpLnN0eWxlLnRvcCA9IGFyZWFEaXN0RnJvbVRvcCArICdweCc7XHJcbiAgICAgICAgJCgnLmdhbWUgPiAuYXJlYScpLnN0eWxlLmhlaWdodCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBhcmVhRGlzdEZyb21Ub3ApICsgJ3B4J1xyXG4gICAgfVxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XHJcbiAgICAgICAgICAgIGFmdGVyKDEyMDAsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5maXhTaXplcygpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5maXhTaXplcygpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQm94LmpzIiwiY29uc3QgdmFzZUV2b2x1dGlvblF1ZXVlID0gWydlbXB0eScsICdzb2lsZWQnLCAnc2VlZGVkJywgJ2ZpbGxlZCcsICd3ZXQnLCAnZ3JlZW4tbGl0dGxlJywgJ2dyZWVuLW1lZGl1bScsICdncmVlbi1mdWxsJ107XHJcbmxldCBsZXZlbHMgPSBbJ3NvaWwnLCAnc2VlZCcsICdzb2lsJywgJ3dhdGVyJywgJ3dhdGVyJywgJ3dhdGVyJ107XHJcblxyXG5jbGFzcyBWYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSwgZ2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gJ2VtcHR5J1xyXG4gICAgfVxyXG4gICAgc2V0IHN0YXRlICh0bykge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gdG87XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgdG8pXHJcbiAgICB9XHJcbiAgICBnZXQgc3RhdGUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZVxyXG4gICAgfVxyXG4gICAgY29tZU91dCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3V0Jyk7XHJcbiAgICAgICAgYWZ0ZXIoMjAwMCwgKCkgPT4geyB0aGlzLmNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMC4zcycgfSlcclxuICAgIH1cclxuICAgIG5leHQgKCkge1xyXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IHZhc2VFdm9sdXRpb25RdWV1ZS5pbmRleE9mKHRoaXMuc3RhdGUpICsgMTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdmFzZUV2b2x1dGlvblF1ZXVlW01hdGgubWluKG5leHRJbmRleCwgdmFzZUV2b2x1dGlvblF1ZXVlLmxlbmd0aCAtIDEpXTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3dldCcpIGFmdGVyKDMwMCwgdGhpcy5uZXh0LmJpbmQodGhpcykpXHJcbiAgICAgICAgaWYgKCFbJ3dldCcsICdncmVlbi1saXR0bGUnLCAnZ3JlZW4tbWVkaXVtJ10uaW5jbHVkZXModGhpcy5zdGF0ZSkpIHRoaXMuZ2FtZS5wYXBlci5uZXh0KClcclxuICAgIH1cclxuICAgIG9uRHJvcCAoZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGRyb3BwZWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJyk7XHJcbiAgICAgICAgaWYgKGRyb3BwZWQgPT09IGxldmVsc1swXSkge1xyXG4gICAgICAgICAgICBsZXZlbHMuc2hpZnQoKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZhc2VcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvVmFzZS5qcyIsImNsYXNzIFBhcGVyIHtcclxuICAgIGNvbnN0cnVjdG9yIChxdWVyeSwgZ2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKHF1ZXJ5KTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gJCQocXVlcnkgKyAnIGxpJyk7XHJcbiAgICAgICAgdGhpcy5pdGVtSW5kZXggPSAwO1xyXG4gICAgfVxyXG4gICAgY29tZU91dCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3V0JylcclxuICAgIH1cclxuICAgIGdldE91dCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3V0LXBhZ2UnKVxyXG4gICAgfVxyXG4gICAgYm9sZCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9sZCcpO1xyXG4gICAgICAgIGFmdGVyKDIwMDAsICgpPT57IHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JvbGQnKSB9KVxyXG4gICAgfVxyXG4gICAgbmV4dCAoKSB7XHJcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLml0ZW1JbmRleCA9PT0gMCA/IDAgOiAxMDAwO1xyXG4gICAgICAgIGlmICh0aGlzLml0ZW1JbmRleCA+IDApIHRoaXMuaXRlbXNbdGhpcy5pdGVtSW5kZXgtMV0uY2xhc3NMaXN0LmFkZCgndGljaycpO1xyXG4gICAgICAgIGlmICh0aGlzLml0ZW1JbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoKSBhZnRlcihkdXJhdGlvbiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJvbGQoKTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLml0ZW1JbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbUluZGV4KytcclxuICAgICAgICB9KTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLm9uRG9uZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXBlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9QYXBlci5qcyIsImltcG9ydCBEcmFnSGFuZGxlciBmcm9tICcuL0RyYWdIYW5kbGVyJ1xyXG5cclxuY2xhc3MgU29pbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSAnJztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZ2V0T3V0ICgpIHtcclxuICAgICAgICB0aGlzLmRyYWdnYWJsZS5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3V0LXBhZ2UnKVxyXG4gICAgfVxyXG4gICAgbWFrZURyYWdnYWJsZSAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBzJztcclxuICAgICAgICB0aGlzLmRyYWdnYWJsZSA9IG5ldyBEcmFnSGFuZGxlcih0aGlzLmNvbnRhaW5lciwge3g6IDEwMCwgeTogMH0pO1xyXG4gICAgfVxyXG4gICAgY29tZU91dCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3V0Jyk7XHJcbiAgICAgICAgYWZ0ZXIoMTAwMCwgdGhpcy5tYWtlRHJhZ2dhYmxlLmJpbmQodGhpcykpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvaWxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU29pbC5qcyIsIiFmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWIoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGIpOmEuRHJhZ2dhYmxlPWIoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGEoYSxiKXt2YXIgYz10aGlzLGQ9ay5iaW5kKGMuc3RhcnQsYyksZT1rLmJpbmQoYy5kcmFnLGMpLGc9ay5iaW5kKGMuc3RvcCxjKTtpZighZihhKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiRHJhZ2dhYmxlIGV4cGVjdHMgYXJndW1lbnQgMCB0byBiZSBhbiBFbGVtZW50XCIpO2I9ay5hc3NpZ24oe30saSxiKSxrLmFzc2lnbihjLHtlbGVtZW50OmEsaGFuZGxlOmIuaGFuZGxlJiZmKGIuaGFuZGxlKT9iLmhhbmRsZTphLGhhbmRsZXJzOntzdGFydDp7bW91c2Vkb3duOmQsdG91Y2hzdGFydDpkfSxtb3ZlOnttb3VzZW1vdmU6ZSxtb3VzZXVwOmcsdG91Y2htb3ZlOmUsdG91Y2hlbmQ6Z319LG9wdGlvbnM6Yn0pLGMuaW5pdGlhbGl6ZSgpfWZ1bmN0aW9uIGIoYSl7cmV0dXJuIHBhcnNlSW50KGEsMTApfWZ1bmN0aW9uIGMoYSl7cmV0dXJuXCJjdXJyZW50U3R5bGVcImluIGE/YS5jdXJyZW50U3R5bGU6Z2V0Q29tcHV0ZWRTdHlsZShhKX1mdW5jdGlvbiBkKGEpe3JldHVybiBhIGluc3RhbmNlb2YgQXJyYXl9ZnVuY3Rpb24gZShhKXtyZXR1cm4gdm9pZCAwIT09YSYmbnVsbCE9PWF9ZnVuY3Rpb24gZihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIEVsZW1lbnR8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBIVE1MRG9jdW1lbnQmJmEgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnR9ZnVuY3Rpb24gZyhhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIEZ1bmN0aW9ufWZ1bmN0aW9uIGgoKXt9dmFyIGk9e2dyaWQ6MCxmaWx0ZXJUYXJnZXQ6bnVsbCxsaW1pdDp7eDpudWxsLHk6bnVsbH0sdGhyZXNob2xkOjAsc2V0Q3Vyc29yOiExLHNldFBvc2l0aW9uOiEwLHNtb290aERyYWc6ITAsdXNlR1BVOiEwLG9uRHJhZzpoLG9uRHJhZ1N0YXJ0Omgsb25EcmFnRW5kOmh9LGo9e3RyYW5zZm9ybTpmdW5jdGlvbigpe2Zvcih2YXIgYT1cIiAtby0gLW1zLSAtbW96LSAtd2Via2l0LVwiLnNwbGl0KFwiIFwiKSxiPWRvY3VtZW50LmJvZHkuc3R5bGUsYz1hLmxlbmd0aDtjLS07KXt2YXIgZD1hW2NdK1widHJhbnNmb3JtXCI7aWYoZCBpbiBiKXJldHVybiBkfX0oKX0saz17YXNzaWduOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPWFyZ3VtZW50c1swXSxiPWFyZ3VtZW50cy5sZW5ndGgsYz0xO2I+YztjKyspe3ZhciBkPWFyZ3VtZW50c1tjXTtmb3IodmFyIGUgaW4gZClhW2VdPWRbZV19cmV0dXJuIGF9LGJpbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZnVuY3Rpb24oKXthLmFwcGx5KGIsYXJndW1lbnRzKX19LG9uOmZ1bmN0aW9uKGEsYixjKXtpZihiJiZjKWsuYWRkRXZlbnQoYSxiLGMpO2Vsc2UgaWYoYilmb3IodmFyIGQgaW4gYilrLmFkZEV2ZW50KGEsZCxiW2RdKX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXtpZihiJiZjKWsucmVtb3ZlRXZlbnQoYSxiLGMpO2Vsc2UgaWYoYilmb3IodmFyIGQgaW4gYilrLnJlbW92ZUV2ZW50KGEsZCxiW2RdKX0sbGltaXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZChiKT8oYj1bK2JbMF0sK2JbMV1dLGE8YlswXT9hPWJbMF06YT5iWzFdJiYoYT1iWzFdKSk6YT0rYixhfSxhZGRFdmVudDpcImF0dGFjaEV2ZW50XCJpbiBFbGVtZW50LnByb3RvdHlwZT9mdW5jdGlvbihhLGIsYyl7YS5hdHRhY2hFdmVudChcIm9uXCIrYixjKX06ZnVuY3Rpb24oYSxiLGMpe2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpfSxyZW1vdmVFdmVudDpcImF0dGFjaEV2ZW50XCJpbiBFbGVtZW50LnByb3RvdHlwZT9mdW5jdGlvbihhLGIsYyl7YS5kZXRhY2hFdmVudChcIm9uXCIrYixjKX06ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMpfX07cmV0dXJuIGsuYXNzaWduKGEucHJvdG90eXBlLHtzZXRPcHRpb246ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzO3JldHVybiBjLm9wdGlvbnNbYV09YixjLmluaXRpYWxpemUoKSxjfSxnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmRyYWdFdmVudDtyZXR1cm57eDphLngseTphLnl9fSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQ9Yy5kcmFnRXZlbnQ7cmV0dXJuIGQub3JpZ2luYWw9e3g6ZC54LHk6ZC55fSxjLm1vdmUoYSxiKSxjfSxkcmFnRXZlbnQ6e3N0YXJ0ZWQ6ITEseDowLHk6MH0saW5pdGlhbGl6ZTpmdW5jdGlvbigpe3ZhciBhLGI9dGhpcyxkPWIuZWxlbWVudCxlPShiLmhhbmRsZSxkLnN0eWxlKSxmPWMoZCksZz1iLm9wdGlvbnMsaD1qLnRyYW5zZm9ybSxpPWIuX2RpbWVuc2lvbnM9e2hlaWdodDpkLm9mZnNldEhlaWdodCxsZWZ0OmQub2Zmc2V0TGVmdCx0b3A6ZC5vZmZzZXRUb3Asd2lkdGg6ZC5vZmZzZXRXaWR0aH07Zy51c2VHUFUmJmgmJihhPWZbaF0sXCJub25lXCI9PT1hJiYoYT1cIlwiKSxlW2hdPWErXCIgdHJhbnNsYXRlM2QoMCwwLDApXCIpLGcuc2V0UG9zaXRpb24mJihlLmRpc3BsYXk9XCJibG9ja1wiLGUubGVmdD1pLmxlZnQrXCJweFwiLGUudG9wPWkudG9wK1wicHhcIixlLmJvdHRvbT1lLnJpZ2h0PVwiYXV0b1wiLGUubWFyZ2luPTAsZS5wb3NpdGlvbj1cImFic29sdXRlXCIpLGcuc2V0Q3Vyc29yJiYoZS5jdXJzb3I9XCJtb3ZlXCIpLGIuc2V0TGltaXQoZy5saW1pdCksay5hc3NpZ24oYi5kcmFnRXZlbnQse3g6aS5sZWZ0LHk6aS50b3B9KSxrLm9uKGIuaGFuZGxlLGIuaGFuZGxlcnMuc3RhcnQpfSxzdGFydDpmdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9Yi5nZXRDdXJzb3IoYSksZD1iLmVsZW1lbnQ7Yi51c2VUYXJnZXQoYS50YXJnZXR8fGEuc3JjRWxlbWVudCkmJihhLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTphLnJldHVyblZhbHVlPSExLGIuZHJhZ0V2ZW50Lm9sZFppbmRleD1kLnN0eWxlLnpJbmRleCxkLnN0eWxlLnpJbmRleD0xZTQsYi5zZXRDdXJzb3IoYyksYi5zZXRQb3NpdGlvbigpLGIuc2V0Wm9vbSgpLGsub24oZG9jdW1lbnQsYi5oYW5kbGVycy5tb3ZlKSl9LGRyYWc6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPWIuZHJhZ0V2ZW50LGQ9Yi5lbGVtZW50LGU9Yi5fY3Vyc29yLGY9Yi5fZGltZW5zaW9ucyxnPWIub3B0aW9ucyxoPWYuem9vbSxpPWIuZ2V0Q3Vyc29yKGEpLGo9Zy50aHJlc2hvbGQsaz0oaS54LWUueCkvaCtmLmxlZnQsbD0oaS55LWUueSkvaCtmLnRvcDshYy5zdGFydGVkJiZqJiZNYXRoLmFicyhlLngtaS54KTxqJiZNYXRoLmFicyhlLnktaS55KTxqfHwoYy5vcmlnaW5hbHx8KGMub3JpZ2luYWw9e3g6ayx5Omx9KSxjLnN0YXJ0ZWR8fChnLm9uRHJhZ1N0YXJ0KGQsayxsLGEpLGMuc3RhcnRlZD0hMCksYi5tb3ZlKGssbCkmJmcub25EcmFnKGQsYy54LGMueSxhKSl9LG1vdmU6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQ9Yy5kcmFnRXZlbnQsZT1jLm9wdGlvbnMsZj1lLmdyaWQsZz1jLmVsZW1lbnQuc3R5bGUsaD1jLmxpbWl0KGEsYixkLm9yaWdpbmFsLngsZC5vcmlnaW5hbC55KTtyZXR1cm4hZS5zbW9vdGhEcmFnJiZmJiYoaD1jLnJvdW5kKGgsZikpLGgueCE9PWQueHx8aC55IT09ZC55PyhkLng9aC54LGQueT1oLnksZy5sZWZ0PWgueCtcInB4XCIsZy50b3A9aC55K1wicHhcIiwhMCk6ITF9LHN0b3A6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLGQ9Yy5kcmFnRXZlbnQsZT1jLmVsZW1lbnQsZj1jLm9wdGlvbnMsZz1mLmdyaWQ7ay5vZmYoZG9jdW1lbnQsYy5oYW5kbGVycy5tb3ZlKSxlLnN0eWxlLnpJbmRleD1kLm9sZFppbmRleCxmLnNtb290aERyYWcmJmcmJihiPWMucm91bmQoe3g6ZC54LHk6ZC55fSxnKSxjLm1vdmUoYi54LGIueSksay5hc3NpZ24oYy5kcmFnRXZlbnQsYikpLGMuZHJhZ0V2ZW50LnN0YXJ0ZWQmJmYub25EcmFnRW5kKGUsZC54LGQueSxhKSxjLnJlc2V0KCl9LHJlc2V0OmZ1bmN0aW9uKCl7dGhpcy5kcmFnRXZlbnQuc3RhcnRlZD0hMX0scm91bmQ6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLmdyaWQ7cmV0dXJue3g6YipNYXRoLnJvdW5kKGEueC9iKSx5OmIqTWF0aC5yb3VuZChhLnkvYil9fSxnZXRDdXJzb3I6ZnVuY3Rpb24oYSl7cmV0dXJue3g6KGEudGFyZ2V0VG91Y2hlcz9hLnRhcmdldFRvdWNoZXNbMF06YSkuY2xpZW50WCx5OihhLnRhcmdldFRvdWNoZXM/YS50YXJnZXRUb3VjaGVzWzBdOmEpLmNsaWVudFl9fSxzZXRDdXJzb3I6ZnVuY3Rpb24oYSl7dGhpcy5fY3Vyc29yPWF9LHNldExpbWl0OmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMsYz1mdW5jdGlvbihhLGIpe3JldHVybnt4OmEseTpifX07aWYoZyhhKSliLmxpbWl0PWE7ZWxzZSBpZihmKGEpKXt2YXIgZD1iLl9kaW1lbnNpb25zLGg9YS5zY3JvbGxIZWlnaHQtZC5oZWlnaHQsaT1hLnNjcm9sbFdpZHRoLWQud2lkdGg7Yi5saW1pdD1mdW5jdGlvbihhLGIpe3JldHVybnt4OmsubGltaXQoYSxbMCxpXSkseTprLmxpbWl0KGIsWzAsaF0pfX19ZWxzZSBpZihhKXt2YXIgaj17eDplKGEueCkseTplKGEueSl9O2IubGltaXQ9ai54fHxqLnk/ZnVuY3Rpb24oYixjKXtyZXR1cm57eDpqLng/ay5saW1pdChiLGEueCk6Yix5OmoueT9rLmxpbWl0KGMsYS55KTpjfX06Y31lbHNlIGIubGltaXQ9Y30sc2V0UG9zaXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGM9YS5lbGVtZW50LGQ9Yy5zdHlsZTtrLmFzc2lnbihhLl9kaW1lbnNpb25zLHtsZWZ0OmIoZC5sZWZ0KXx8Yy5vZmZzZXRMZWZ0LHRvcDpiKGQudG9wKXx8Yy5vZmZzZXRUb3B9KX0sc2V0Wm9vbTpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLGI9YS5lbGVtZW50LGQ9MTtiPWIub2Zmc2V0UGFyZW50Oyl7dmFyIGU9YyhiKS56b29tO2lmKGUmJlwibm9ybWFsXCIhPT1lKXtkPWU7YnJlYWt9fWEuX2RpbWVuc2lvbnMuem9vbT1kfSx1c2VUYXJnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5vcHRpb25zLmZpbHRlclRhcmdldDtyZXR1cm4gYiBpbnN0YW5jZW9mIEZ1bmN0aW9uP2IoYSk6ITB9LGRlc3Ryb3k6ZnVuY3Rpb24oKXtrLm9mZih0aGlzLmhhbmRsZSx0aGlzLmhhbmRsZXJzLnN0YXJ0KSxrLm9mZihkb2N1bWVudCx0aGlzLmhhbmRsZXJzLm1vdmUpfX0pLGF9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kcmFnZ2FibGUvZGlzdC9kcmFnZ2FibGUubWluLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBEcmFnSGFuZGxlciBmcm9tICcuL0RyYWdIYW5kbGVyJ1xyXG5cclxuY2xhc3MgU2VlZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihxdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gJChxdWVyeSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSAnJztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZ2V0T3V0ICgpIHtcclxuICAgICAgICB0aGlzLmRyYWdnYWJsZS5kZXN0cm95KClcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvdXQtcGFnZScpXHJcbiAgICB9XHJcbiAgICBtYWtlRHJhZ2dhYmxlICgpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMHMnO1xyXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlID0gbmV3IERyYWdIYW5kbGVyKHRoaXMuY29udGFpbmVyLCB7eDogNTAsIHk6IDB9KTtcclxuICAgIH1cclxuICAgIGNvbWVPdXQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dCcpO1xyXG4gICAgICAgIGFmdGVyKDEwMDAsIHRoaXMubWFrZURyYWdnYWJsZS5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWVkXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1NlZWQuanMiLCJpbXBvcnQgRHJhZ0hhbmRsZXIgZnJvbSAnLi9EcmFnSGFuZGxlcidcclxuXHJcbmNsYXNzIEdsYXNzZXMge1xyXG4gICAgY29uc3RydWN0b3IocXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQocXVlcnkpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJyc7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldE91dCAoKSB7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ291dC1wYWdlJylcclxuICAgIH1cclxuICAgIG1ha2VEcmFnZ2FibGUgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwcyc7XHJcbiAgICAgICAgdGhpcy5kcmFnZ2FibGUgPSBuZXcgRHJhZ0hhbmRsZXIodGhpcy5jb250YWluZXIsIHt4OiAwLCB5OiA4MH0pO1xyXG4gICAgfVxyXG4gICAgY29tZU91dCAoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnb3V0Jyk7XHJcbiAgICAgICAgYWZ0ZXIoMjAwMCwgdGhpcy5tYWtlRHJhZ2dhYmxlLmJpbmQodGhpcykpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsYXNzZXNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvR2xhc3Nlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=