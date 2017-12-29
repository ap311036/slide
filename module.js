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
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(2);

var _module = __webpack_require__(3);

var root = function (root) {
	if ((typeof root === 'undefined' ? 'undefined' : _typeof(root)) === 'object' && (root.self === root || root.global === global) && root) {
		return root;
	}
}(self || global || {});

var $ = function ($) {
	if (typeof $ === 'function') {
		return $;
	} else {
		throw 'You must import jQuery';
	}
}(root.jQuery);

$.fn[_module.ModuleName] = function () {
	var _this = this;

	var module = void 0;
	var args = Array.prototype.slice.call(arguments, 0);
	var method = args[0];
	var options = args.slice(1).length <= 0 ? undefined : args.slice(1, args.length);;
	var isReturnMethod = this.length === 1 && typeof method === 'string' && _module.ModuleReturns.indexOf(method) !== -1;
	var methodRunner = function methodRunner(method, options, uesReturn) {
		var $this = $(_this);
		var module = $this.data(_module.ModuleName);
		if (!!module) {
			if (typeof method == 'string' && !uesReturn) {
				module[method].apply(module, options);
			} else if (typeof method == 'string' && !!uesReturn) {
				return module[method].apply(module, options);
			} else {
				throw 'unsupported options!';
			}
		} else {
			throw 'You must run first this plugin!';
		}
	};
	if (isReturnMethod) {
		return methodRunner.call(this, method, options, isReturnMethod);
	} else {
		return this.each(function () {
			var $this = $(this);
			var module = $this.data(_module.ModuleName);
			var opts = null;
			if (!!module) {
				methodRunner.call(this, method, options);
			} else {
				opts = $.extend(true, {}, _module.ModuleDefaults, (typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' && method, (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options);
				module = new _module.Module(this, opts);
				$this.data(_module.ModuleName, module);
				module.init();
			}
		});
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModuleName = 'tb_tkda';
var ModuleDefaults = {
	count: { show: null, slide: null },
	speed: .3,
	effect: 'slide',
	whenClick: function whenClick($element) {}
};
var ModuleReturns = ['output', 'methods'];

var Module = function () {
	function Module(ele, options) {
		_classCallCheck(this, Module);

		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
		this.ver = this.$ele[0].className;
		this.now = this.$ele.find('.active').index();
	}

	_createClass(Module, [{
		key: 'init',
		value: function init() {
			var _this = this;

			var self = this;
			var $ele = this.$ele;
			var $td = $ele.find('.col');
			var $slideLeft = $ele.find('.slide_left');
			var $slideRight = $ele.find('.slide_right');
			console.log('start init with: ' + this.ver);
			// this.render(false);
			this.plusDivs(0);
			window.addEventListener('resize', function () {
				_this.plusDivs(0);
			});
			$td.click(function () {
				self.active(this);
				self.option.whenClick(this);
			});
			$slideLeft.click(function () {
				self.plusDivs(-self.option.count.slide);
			});
			$slideRight.click(function () {
				self.plusDivs(self.option.count.slide);
			});
		}
	}, {
		key: 'render',
		value: function render(n) {
			var show = this.option.count.show;
			var $ele = this.$ele;
			var windWidth = window.innerWidth;
			var containerWidth = $ele.width();
			var tdWidth = 100 / show;

			var $activeTd = $ele.find('.active'); //啟動的div
			var $col = $ele.find('.col'); //所有的div
			var slideIndex = this.currentCount(); //啟動的div的位置
			var tdTotalLength = $activeTd.closest('td').find('.col').length; //一行總共有幾個div

			if (windWidth <= 768) {
				//小於768的時候
				slideIndex = n ? n : slideIndex;
				console.log(this.now);
			} else {
				tdWidth = 100 / tdTotalLength;
				$col.removeAttr('style');
				$col.show();
				this.slideBtn(false, false);
				slideIndex = 1;
				show = tdTotalLength + 1;
				this.now = 0;
			}
			this.setSlide(slideIndex, this.now, show, tdWidth);
			this.interchange($activeTd);
			this.arrowPosition();
		}
	}, {
		key: 'setSlide',
		value: function setSlide(slideIndex, now, show, tdWidth) {
			var $ele = this.$ele;
			var speed = this.option.speed;
			$ele.find('.col').css({ 'width': tdWidth + "%" });
			if (this.option.effect === 'fade') {
				$ele.find('.slide').animate({ opacity: '0' }, function () {
					setTimeout(function () {
						$ele.find('.slide').css({ opacity: '1' });
					}, 300);
					$ele.find('.slide').css({
						'transform': 'translateX(-' + now * tdWidth + '%)',
						'transition': 'all ease-in-out ' + speed + 's'
					});
				});
			}
		}
	}, {
		key: 'currentCount',
		value: function currentCount() {
			var $ele = this.$ele;
			var slideIndex = $ele.find('.active').index();
			return slideIndex;
		}
	}, {
		key: 'arrowPosition',
		value: function arrowPosition() {
			var $ele = this.$ele;
			var $leftArrow = $ele.find('.slide_left');
			var leftWidth = $ele.find('tr').children().first().width();
			$leftArrow.css('left', leftWidth + 2);
		}
	}, {
		key: 'plusDivs',
		value: function plusDivs(n) {
			var $ele = this.$ele;
			var $activeTd = $ele.find('.active');
			var tdTotalLength = $activeTd.closest('td').find('.col').length;
			if (this.now + n >= tdTotalLength - this.option.count.show) {
				this.now = tdTotalLength - this.option.count.show;
				this.slideBtn(true, false);
			} else if (this.now + n <= 0) {
				this.now = 0;
				this.slideBtn(false, true);
			} else {
				this.now += n;
				this.slideBtn(true, true);
			}
			this.render(this.now);
		}
	}, {
		key: 'slideBtn',
		value: function slideBtn(left, right) {
			var $ele = this.$ele;
			var $slideLeft = $ele.find('.slide_left');
			var $slideRight = $ele.find('.slide_right');
			if (!this.option.loop) {
				if (left === true) {
					$slideLeft.show();
				} else {
					$slideLeft.hide();
				}
				if (right === true) {
					$slideRight.show();
				} else {
					$slideRight.hide();
				}
			}
		}
	}, {
		key: 'active',
		value: function active(td) {
			var $ele = this.$ele;
			var tdName = $(td)[0].classList[1];
			var $top = $(td).closest('tr').prev().find('.' + tdName);
			var $left = $(td).prev();
			var trIndex = $(td).closest('tr').index();
			if ($(td).hasClass('disabled')) {
				return false;
			}
			if (trIndex === 1) {
				$(td).addClass('active_top');
			} else if (trIndex === 0) {
				console.log(td);
				return false;
			}
			this.removeColClass();
			$top.addClass('active_bottom');
			$(td).addClass('active active_left');
			this.interchange(td);
			// console.log('active = .col'+ (this.now+1) );
		}
	}, {
		key: 'removeColClass',
		value: function removeColClass() {
			//清除所有col狀態
			var $ele = this.$ele;
			var classArr = ['active', 'active_bottom', 'active_top', 'active_right', 'interchange', 'get_active', 'active_left'];
			for (var i = 0; i <= classArr.length; i++) {
				$ele.find('.' + classArr[i]).removeClass(classArr[i]);
			}
		}
	}, {
		key: 'interchange',
		value: function interchange(td) {
			var tdName = $(td)[0].classList[1];
			var $colAll = $(td).closest('tbody').find('.' + tdName);
			var $rowAll = $(td).closest('td').find('.col');
			var $firstRow = $(td).closest('tbody').find('tr').first().find('.' + tdName);
			var $leftRow = $(td).closest('tr').find('td').first().find('div');
			if (this.ver === 'tb_tkda rel') {
				$firstRow.addClass('get_active');
				$leftRow.addClass('get_active');
				return;
			}
			$colAll.addClass('interchange');
			$rowAll.addClass('interchange');
		}
	}, {
		key: 'func',
		value: function func() {

			return this;
		}
	}, {
		key: 'methods',
		value: function methods() {

			return this;
		}
	}, {
		key: 'output',
		value: function output() {
			return this;
		}
	}]);

	return Module;
}();

;

exports.ModuleName = ModuleName;
exports.ModuleDefaults = ModuleDefaults;
exports.ModuleReturns = ModuleReturns;
exports.Module = Module;

/***/ })
/******/ ]);