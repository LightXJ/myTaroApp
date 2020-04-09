(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-echarts/components/ec-canvas/ec-canvas"],{

/***/ "./node_modules/taro-echarts/components/ec-canvas/ec-canvas.js":
/*!*********************************************************************!*\
  !*** ./node_modules/taro-echarts/components/ec-canvas/ec-canvas.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _wxCanvas = __webpack_require__(/*! ./wx-canvas */ "./node_modules/taro-echarts/components/ec-canvas/wx-canvas.js");

var _wxCanvas2 = _interopRequireDefault(_wxCanvas);

var _echarts = __webpack_require__(/*! ./echarts */ "./node_modules/taro-echarts/components/ec-canvas/echarts.js");

var echarts = _interopRequireWildcard(_echarts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ctx = void 0;

Component({
  properties: {
    canvasId: {
      type: String,
      value: 'ec-canvas'
    },

    ec: {
      type: Object
    }
  },

  data: {
    platform: ''
  },

  ready: function ready() {
    this.getPlatformInfo();
    if (!this.data.ec) {
      console.warn('\u7EC4\u4EF6\u9700\u7ED1\u5B9A ec \u53D8\u91CF\uFF0C\u4F8B\uFF1A<ec-canvas id="mychart-dom-bar" canvas-id="mychart-bar" ec="{{ ec }}"></ec-canvas>');
      return;
    }

    if (!this.data.ec.lazyLoad) {
      this.init();
    }
  },

  methods: {
    getPlatformInfo: function getPlatformInfo() {
      var _this = this;

      wx.getSystemInfo({
        success: function success(res) {
          return _this.platform = res.platform;
        }
      });
    },
    init: function init(callback) {
      var _this2 = this;

      var version = wx.version.version.split('.').map(function (n) {
        return parseInt(n, 10);
      });
      var isValid = version[0] > 1 || version[0] === 1 && version[1] > 9 || version[0] === 1 && version[1] === 9 && version[2] >= 91;
      if (!isValid) {
        console.error('\u5FAE\u4FE1\u57FA\u7840\u5E93\u7248\u672C\u8FC7\u4F4E\uFF0C\u9700\u5927\u4E8E\u7B49\u4E8E 1.9.91\u3002\u53C2\u89C1\uFF1Ahttps://github.com/ecomfe/echarts-for-weixin#%E5%BE%AE%E4%BF%A1%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82');
        return;
      }

      ctx = wx.createCanvasContext(this.data.canvasId, this);

      var canvas = new _wxCanvas2.default(ctx, this.data.canvasId);

      echarts.setCanvasCreator(function () {
        return canvas;
      });

      var query = wx.createSelectorQuery().in(this);
      query.select('.ec-canvas').boundingClientRect(function (res) {
        if (typeof callback === 'function') {
          _this2.chart = callback(canvas, res.width, res.height);
        } else if (_this2.data.ec && typeof _this2.data.ec.onInit === 'function') {
          _this2.chart = _this2.data.ec.onInit(canvas, res.width, res.height);
        } else {
          _this2.triggerEvent('init', {
            canvas: canvas,
            width: res.width,
            height: res.height
          });
        }
      }).exec();
    },

    canvasToTempFilePath: function canvasToTempFilePath(opt) {
      var _this3 = this;

      if (!opt.canvasId) {
        opt.canvasId = this.data.canvasId;
      }
      if (this.platform === 'android') {
        ctx.draw(true, setTimeout(function () {
          return wx.canvasToTempFilePath(opt, _this3);
        }, 100));
      } else {
        ctx.draw(true, function () {
          wx.canvasToTempFilePath(opt, _this3);
        });
      }
    },
    touchStart: function touchStart(e) {
      if (this.chart && e.touches.length > 0) {
        var touch = e.touches[0];
        var handler = this.chart.getZr().handler;
        handler.dispatch('mousedown', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.dispatch('mousemove', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.processGesture(wrapTouch(e), 'start');
      }
    },
    touchMove: function touchMove(e) {
      if (this.chart && e.touches.length > 0) {
        var touch = e.touches[0];
        var handler = this.chart.getZr().handler;
        handler.dispatch('mousemove', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.processGesture(wrapTouch(e), 'change');
      }
    },
    touchEnd: function touchEnd(e) {
      if (this.chart) {
        var touch = e.changedTouches ? e.changedTouches[0] : {};
        var handler = this.chart.getZr().handler;
        handler.dispatch('mouseup', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.dispatch('click', {
          zrX: touch.x,
          zrY: touch.y
        });
        handler.processGesture(wrapTouch(e), 'end');
      }
    }
  }
});

function wrapTouch(event) {
  for (var i = 0; i < event.touches.length; ++i) {
    var touch = event.touches[i];
    touch.offsetX = touch.x;
    touch.offsetY = touch.y;
  }
  return event;
}

/***/ }),

/***/ "./node_modules/taro-echarts/components/ec-canvas/wx-canvas.js":
/*!*********************************************************************!*\
  !*** ./node_modules/taro-echarts/components/ec-canvas/wx-canvas.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WxCanvas = function () {
  function WxCanvas(ctx, canvasId) {
    _classCallCheck(this, WxCanvas);

    this.ctx = ctx;
    this.canvasId = canvasId;
    this.chart = null;

    // this._initCanvas(zrender, ctx);
    this._initStyle(ctx);
    this._initEvent();
  }

  _createClass(WxCanvas, [{
    key: 'getContext',
    value: function getContext(contextType) {
      if (contextType === '2d') {
        return this.ctx;
      }
    }

    // canvasToTempFilePath(opt) {
    //   if (!opt.canvasId) {
    //     opt.canvasId = this.canvasId;
    //   }

    //   return wx.canvasToTempFilePath(opt, this);
    // }

  }, {
    key: 'setChart',
    value: function setChart(chart) {
      this.chart = chart;
    }
  }, {
    key: 'attachEvent',
    value: function attachEvent() {
      // noop
    }
  }, {
    key: 'detachEvent',
    value: function detachEvent() {
      // noop
    }
  }, {
    key: '_initCanvas',
    value: function _initCanvas(zrender, ctx) {
      zrender.util.getContext = function () {
        return ctx;
      };

      zrender.util.$override('measureText', function (text, font) {
        ctx.font = font || '12px sans-serif';
        return ctx.measureText(text);
      });
    }
  }, {
    key: '_initStyle',
    value: function _initStyle(ctx) {
      var _arguments = arguments;

      var styles = ['fillStyle', 'strokeStyle', 'globalAlpha', 'textAlign', 'textBaseAlign', 'shadow', 'lineWidth', 'lineCap', 'lineJoin', 'lineDash', 'miterLimit', 'fontSize'];

      styles.forEach(function (style) {
        Object.defineProperty(ctx, style, {
          set: function set(value) {
            if (style !== 'fillStyle' && style !== 'strokeStyle' || value !== 'none' && value !== null) {
              ctx['set' + style.charAt(0).toUpperCase() + style.slice(1)](value);
            }
          }
        });
      });

      ctx.createRadialGradient = function () {
        return ctx.createCircularGradient(_arguments);
      };
    }
  }, {
    key: '_initEvent',
    value: function _initEvent() {
      var _this = this;

      this.event = {};
      var eventNames = [{
        wxName: 'touchStart',
        ecName: 'mousedown'
      }, {
        wxName: 'touchMove',
        ecName: 'mousemove'
      }, {
        wxName: 'touchEnd',
        ecName: 'mouseup'
      }, {
        wxName: 'touchEnd',
        ecName: 'click'
      }];

      eventNames.forEach(function (name) {
        _this.event[name.wxName] = function (e) {
          var touch = e.touches[0];
          _this.chart.getZr().handler.dispatch(name.ecName, {
            zrX: name.wxName === 'tap' ? touch.clientX : touch.x,
            zrY: name.wxName === 'tap' ? touch.clientY : touch.y
          });
        };
      });
    }
  }]);

  return WxCanvas;
}();

exports.default = WxCanvas;

/***/ })

},[["./node_modules/taro-echarts/components/ec-canvas/ec-canvas.js","runtime","vendors"]]]);