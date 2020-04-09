(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-echarts/components/Chart/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-echarts/components/Chart/index.js?taro&type=script&parse=COMPONENT&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/taro-echarts/components/Chart?taro&type=script&parse=COMPONENT& ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual2 = __webpack_require__(/*! lodash/isEqual.js */ "./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _nervjs = __webpack_require__(/*! nervjs */ "./node_modules/nervjs/dist/index.esm.js");

var _nervjs2 = _interopRequireDefault(_nervjs);

var _echarts = __webpack_require__(/*! ../ec-canvas/echarts */ "./node_modules/taro-echarts/components/ec-canvas/echarts.js");

var echarts = _interopRequireWildcard(_echarts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Taro_ = _taroWeapp2.default;

var commonFunc = function commonFunc(_this, chart) {
  var _this$props = _this.props,
      option = _this$props.option,
      loading = _this$props.loading,
      loadingConf = _this$props.loadingConf;

  _this.beforeSetOption();
  _this.chartInstance = chart;
  if (loading) {
    _this.chartInstance.showLoading('default', loadingConf);
  } else {
    _this.chartInstance.setOption(option);
  }
};

var initChart = function (type) {
  switch (type) {
    case 'h5':
      return function (_this) {
        var chart = echarts.init(_this.chartRef.vnode.dom);
        commonFunc(_this, chart);
      };
    case 'weapp':
      return function (_this) {
        _this.chartRef.init(function (canvas, width, height) {
          var chart = echarts.init(canvas, null, {
            width: width,
            height: height
          });
          canvas.setChart(chart);
          commonFunc(_this, chart);
          return chart;
        });
      };
  }
}("weapp");

var Chart = (_temp2 = _class = function (_Taro_$Component) {
  _inherits(Chart, _Taro_$Component);

  function Chart() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Chart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Chart.__proto__ || Object.getPrototypeOf(Chart)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["anonymousState__temp", "anonymousState__temp2", "width", "height", "option", "loading", "loadingConf", "chartId", "customStyle"], _this2.config = {
      component: true,
      usingComponents: {
        'ec-canvas': '../ec-canvas/ec-canvas'
      }
    }, _this2.refreshChart = function (newOption) {
      var _this2$props = _this2.props,
          option = _this2$props.option,
          loading = _this2$props.loading,
          loadingConf = _this2$props.loadingConf;

      if (_this2.chartInstance) {
        if (loading) {
          _this2.chartInstance.showLoading('default', loadingConf);
        } else {
          _this2.chartInstance.hideLoading();
          _this2.chartInstance.setOption(newOption || option, true);
        }
      }
    }, _this2.beforeSetOption = function () {
      var onBeforeSetOption = _this2.props.onBeforeSetOption;

      onBeforeSetOption && _this2.props.onBeforeSetOption(echarts);
    }, _this2.setChartRef = function (node) {
      return _this2.chartRef = node;
    }, _this2.getImagePath = function () {
      var _this3 = _this2,
          chartRef = _this3.chartRef;


      if (!chartRef || !chartRef.canvasToTempFilePath) {
        throw 'getImagePath error';
      }
      return new Promise(function (resolve, reject) {
        chartRef.canvasToTempFilePath({
          success: function success(_ref2) {
            var tempFilePath = _ref2.tempFilePath;
            return resolve(tempFilePath);
          },
          fail: function fail() {
            return reject('getImagePath fail');
          }
        });
      });
    }, _this2.customComponents = [], _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Chart, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Chart.prototype.__proto__ || Object.getPrototypeOf(Chart.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      initChart(this);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var newOption = nextProps.option;

      if (!(0, _isEqual3.default)(nextProps, this.props)) {
        this.refreshChart(newOption);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _isEqual3.default)(this.props, nextProps);
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          chartId = _props.chartId,
          width = _props.width,
          height = _props.height,
          customStyle = _props.customStyle;

      var chartContainerStyle = customStyle + "width:" + width + ";height:" + height + ";";

      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(chartContainerStyle);
      var anonymousState__temp2 = { lazyLoad: false };
      this.$$refs.pushRefs([{
        type: "dom",
        id: "czzzz",
        refName: "",
        fn: this.setChartRef
      }, {
        type: "component",
        id: "dzzzz",
        refName: "",
        fn: this.setChartRef
      }]);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        width: width,
        height: height
      });
      return this.__state;
    }
  }]);

  return Chart;
}(Taro_.Component), _class.$$events = [], _class.$$componentPath = "node_modules/taro-echarts/components/Chart/index", _temp2);


Chart.propTypes = {
  width: _propTypes2.default.string,
  height: _propTypes2.default.string,
  customStyle: _propTypes2.default.string,
  loading: _propTypes2.default.bool,
  loadingConf: _propTypes2.default.object,
  option: _propTypes2.default.object.isRequired,
  onBeforeSetOption: _propTypes2.default.func
};

Chart.defaultProps = {
  width: '100%',
  height: '200px',
  customStyle: '',
  loading: null,
  loadingConf: null,
  onBeforeSetOption: null
};
exports.default = Chart;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Chart));

/***/ }),

/***/ "./node_modules/@tarojs/mini-runner/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};
    module.paths = [];
    // module.parent = undefined by default
    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }
  return module;
};

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/wxj/locality/practice/myTaroApp/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-echarts/components/Chart/index.js?taro&type=template&parse=COMPONENT&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/wxj/locality/practice/myTaroApp/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./node_modules/taro-echarts/components/Chart?taro&type=template&parse=COMPONENT& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "npm/taro-echarts/components/Chart/index.wxml";

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;

/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;

/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;

/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new MapCache();
    while (++index < length) {
        this.add(values[index]);
    }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var _Symbol = root.Symbol;

module.exports = _Symbol;

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;

/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;

/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;

/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;

/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;

/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../@tarojs/mini-runner/node_modules/webpack/buildin/global.js */ "./node_modules/@tarojs/mini-runner/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;

/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../@tarojs/mini-runner/node_modules/webpack/buildin/module.js */ "./node_modules/@tarojs/mini-runner/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || {Function: Function,Boolean: Boolean,Object: Object,Number: Number,Array: Array,Date: Date,String: String,Symbol: Symbol,Error: Error,TypeError: TypeError,Map: Map,Set: Set,WeakMap: WeakMap,WeakSet: WeakSet,ArrayBuffer: ArrayBuffer,Math: Math,Promise: Promise,RegExp: RegExp,DataView: DataView,isFinite: isFinite,parseInt: parseInt,parseFloat: parseFloat,Float32Array: Float32Array,Float64Array: Float64Array,Int8Array: Int8Array,Int16Array: Int16Array,Int32Array: Int32Array,Uint8Array: Uint8Array,Uint16Array: Uint16Array,Uint32Array: Uint32Array,Uint8ClampedArray: Uint8ClampedArray,setTimeout: setTimeout,clearTimeout: clearTimeout,setInterval: setInterval,clearInterval: clearInterval};

module.exports = root;

/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;

/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || pairs.length < 199) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../@tarojs/mini-runner/node_modules/webpack/buildin/module.js */ "./node_modules/@tarojs/mini-runner/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
    if (!isObject(value)) {
        return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;

/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),

/***/ "./node_modules/nervjs/dist/index.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/nervjs/dist/index.esm.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// tslint:disable-next-line
var global = function () {
  var local;
  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      // tslint:disable-next-line:function-constructor
      local = Function('return this')();
    } catch (e) {
      throw new Error('global object is unavailable in this environment');
    }
  }
  return local;
}();
var isBrowser = typeof window !== 'undefined';
// tslint:disable-next-line:no-empty
function noop() {}
var fakeDoc = {
  createElement: noop,
  createElementNS: noop,
  createTextNode: noop
};
var doc = isBrowser ? document : fakeDoc;
var UA = isBrowser && window.navigator.userAgent.toLowerCase();
var isMacSafari = isBrowser && UA && window.navigator.platform && /mac/i.test(window.navigator.platform) && /^((?!chrome|android).)*safari/i.test(UA);
var isTaro = isBrowser && !document.scripts;
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isiOS = UA && /iphone|ipad|ipod|ios/.test(UA);

function isNumber(arg) {
  return typeof arg === 'number';
}
var isSupportSVG = isFunction(doc.createAttributeNS);
function isString(arg) {
  return typeof arg === 'string';
}
function isFunction(arg) {
  return typeof arg === 'function';
}
function isBoolean(arg) {
  return arg === true || arg === false;
}
var isArray = Array.isArray;
function isObject(arg) {
  return arg === Object(arg) && !isFunction(arg);
}
function isUndefined(o) {
  return o === undefined;
}
// Object.is polyfill
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  }
  // eslint-disable-next-line no-self-compare
  return x !== x && y !== y;
}

var canUsePromise = 'Promise' in global && !isMacSafari;
var resolved;
if (canUsePromise) {
  resolved = Promise.resolve();
}
var nextTick = function nextTick(fn) {
  var args = [],
      len = arguments.length - 1;
  while (len-- > 0) {
    args[len] = arguments[len + 1];
  }fn = isFunction(fn) ? fn.bind.apply(fn, [null].concat(args)) : fn;
  if (canUsePromise) {
    return resolved.then(fn);
  }
  var timerFunc = 'requestAnimationFrame' in global && !isMacSafari ? requestAnimationFrame : setTimeout;
  timerFunc(fn);
};

/* istanbul ignore next */
// tslint:disable-next-line
Object.is = Object.is || function (x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }
  return x !== x && y !== y;
};
function shallowEqual(obj1, obj2) {
  if (obj1 === null || obj2 === null) {
    return false;
  }
  if (Object.is(obj1, obj2)) {
    return true;
  }
  var obj1Keys = obj1 ? Object.keys(obj1) : [];
  var obj2Keys = obj2 ? Object.keys(obj2) : [];
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (var i = 0; i < obj1Keys.length; i++) {
    var obj1KeyItem = obj1Keys[i];
    if (!obj2.hasOwnProperty(obj1KeyItem) || !Object.is(obj1[obj1KeyItem], obj2[obj1KeyItem])) {
      return false;
    }
  }
  return true;
}

var SimpleMap = function SimpleMap() {
  this.cache = [];
  this.size = 0;
};
SimpleMap.prototype.set = function set(k, v) {
  var this$1 = this;

  var len = this.cache.length;
  if (!len) {
    this.cache.push({ k: k, v: v });
    this.size += 1;
    return;
  }
  for (var i = 0; i < len; i++) {
    var item = this$1.cache[i];
    if (item.k === k) {
      item.v = v;
      return;
    }
  }
  this.cache.push({ k: k, v: v });
  this.size += 1;
};
SimpleMap.prototype.get = function get(k) {
  var this$1 = this;

  var len = this.cache.length;
  if (!len) {
    return;
  }
  for (var i = 0; i < len; i++) {
    var item = this$1.cache[i];
    if (item.k === k) {
      return item.v;
    }
  }
};
SimpleMap.prototype.has = function has(k) {
  var this$1 = this;

  var len = this.cache.length;
  if (!len) {
    return false;
  }
  for (var i = 0; i < len; i++) {
    var item = this$1.cache[i];
    if (item.k === k) {
      return true;
    }
  }
  return false;
};
SimpleMap.prototype['delete'] = function delete$1(k) {
  var this$1 = this;

  var len = this.cache.length;
  for (var i = 0; i < len; i++) {
    var item = this$1.cache[i];
    if (item.k === k) {
      this$1.cache.splice(i, 1);
      this$1.size -= 1;
      return true;
    }
  }
  return false;
};
SimpleMap.prototype.clear = function clear() {
  var this$1 = this;

  var len = this.cache.length;
  this.size = 0;
  if (!len) {
    return;
  }
  while (len) {
    this$1.cache.pop();
    len--;
  }
};
var MapClass = 'Map' in global ? Map : SimpleMap;

function isAttrAnEvent(attr) {
  return attr[0] === 'o' && attr[1] === 'n';
}
var extend = function () {
  if ('assign' in Object) {
    return function (source, from) {
      if (!from) {
        return source;
      }
      Object.assign(source, from);
      return source;
    };
  } else {
    return function (source, from) {
      if (!from) {
        return source;
      }
      for (var key in from) {
        if (from.hasOwnProperty(key)) {
          source[key] = from[key];
        }
      }
      return source;
    };
  }
}();
function clone(obj) {
  return extend({}, obj);
}

var Current = {
  current: null,
  index: 0
};

var EMPTY_CHILDREN = [];
var EMPTY_OBJ = {};
function isNullOrUndef(o) {
  return o === undefined || o === null;
}
function isInvalid(o) {
  return isNullOrUndef(o) || o === true || o === false;
}
function isVNode(node) {
  return !isNullOrUndef(node) && node.vtype === 2 /* Node */;
}
function isVText(node) {
  return !isNullOrUndef(node) && node.vtype === 1 /* Text */;
}
function isComponent(instance) {
  return !isInvalid(instance) && instance.isReactComponent === EMPTY_OBJ;
}
function isPortal(vtype, node) {
  return (vtype & 32 /* Portal */) > 0;
}
function isComposite(node) {
  return !isNullOrUndef(node) && node.vtype === 4 /* Composite */;
}
function isValidElement(node) {
  return !isNullOrUndef(node) && node.vtype;
}
// tslint:disable-next-line:no-empty
function noop$1() {}
// typescript will compile the enum's value for us.
// eg.
// Composite = 1 << 2  => Composite = 4
var VType;
(function (VType) {
  VType[VType["Text"] = 1] = "Text";
  VType[VType["Node"] = 2] = "Node";
  VType[VType["Composite"] = 4] = "Composite";
  VType[VType["Void"] = 16] = "Void";
  VType[VType["Portal"] = 32] = "Portal";
})(VType || (VType = {}));

var Ref = {
  update: function update(lastVnode, nextVnode, domNode) {
    var prevRef = lastVnode != null && lastVnode.ref;
    var nextRef = nextVnode != null && nextVnode.ref;
    if (prevRef !== nextRef) {
      this.detach(lastVnode, prevRef, lastVnode.dom);
      this.attach(nextVnode, nextRef, domNode);
    }
  },
  attach: function attach(vnode, ref, domNode) {
    var node = isComposite(vnode) ? vnode.component : domNode;
    if (isFunction(ref)) {
      var componentForCatcher = isComposite(vnode) ? vnode.component : vnode;
      errorCatcher(function () {
        ref(node);
      }, componentForCatcher);
    } else if (isString(ref)) {
      var inst = vnode._owner;
      if (inst && isFunction(inst.render)) {
        inst.refs[ref] = node;
      }
    } else if (isObject(ref)) {
      ref.current = node;
    }
  },
  detach: function detach(vnode, ref, domNode) {
    var node = isComposite(vnode) ? vnode.component : domNode;
    if (isFunction(ref)) {
      var componentForCatcher = isComposite(vnode) ? vnode.component : vnode;
      errorCatcher(function () {
        ref(null);
      }, componentForCatcher);
    } else if (isString(ref)) {
      var inst = vnode._owner;
      if (inst.refs[ref] === node && isFunction(inst.render)) {
        delete inst.refs[ref];
      }
    } else if (isObject(ref)) {
      ref.current = null;
    }
  }
};

var defaultOptions = {
  passive: false,
  capture: false
};
var eventListenerOptionsSupported = function eventListenerOptionsSupported() {
  var supported = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supported = true;
      }
    });
    window.addEventListener('test', null, opts);
    window.removeEventListener('test', null, opts);
  } catch (e) {
    supported = false;
  }
  return supported;
};
function getDefaultPassiveOption() {
  var passiveOption = !eventListenerOptionsSupported() ? false : defaultOptions;
  return function () {
    return passiveOption;
  };
}
var getPassiveOption = getDefaultPassiveOption();
var supportedPassiveEventMap = {
  scroll: getPassiveOption(),
  wheel: getPassiveOption(),
  touchstart: getPassiveOption(),
  touchmove: getPassiveOption(),
  touchenter: getPassiveOption(),
  touchend: getPassiveOption(),
  touchleave: getPassiveOption(),
  mouseout: getPassiveOption(),
  mouseleave: getPassiveOption(),
  mouseup: getPassiveOption(),
  mousedown: getPassiveOption(),
  mousemove: getPassiveOption(),
  mouseenter: getPassiveOption(),
  mousewheel: getPassiveOption(),
  mouseover: getPassiveOption()
};

var ONINPUT = 'oninput';
var ONPROPERTYCHANGE = 'onpropertychange';
var delegatedEvents = new MapClass();
var unbubbleEvents = {
  onmousemove: 1,
  ontouchmove: 1,
  onmouseleave: 1,
  onmouseenter: 1,
  onload: 1,
  onunload: 1,
  onscroll: 1,
  onfocus: 1,
  onblur: 1,
  onrowexit: 1,
  onbeforeunload: 1,
  onstop: 1,
  ondragdrop: 1,
  ondragenter: 1,
  ondragexit: 1,
  ondraggesture: 1,
  ondragover: 1,
  oncontextmenu: 1,
  onerror: 1,
  onabort: 1,
  oncanplay: 1,
  oncanplaythrough: 1,
  ondurationchange: 1,
  onemptied: 1,
  onended: 1,
  onloadeddata: 1,
  onloadedmetadata: 1,
  onloadstart: 1,
  onencrypted: 1,
  onpause: 1,
  onplay: 1,
  onplaying: 1,
  onprogress: 1,
  onratechange: 1,
  onseeking: 1,
  onseeked: 1,
  onstalled: 1,
  onsuspend: 1,
  ontimeupdate: 1,
  onvolumechange: 1,
  onwaiting: 1
};
unbubbleEvents[ONPROPERTYCHANGE] = 1;
var bindFocus = false;
/* istanbul ignore next */
if (isIE9) {
  var elements = [];
  var values = [];
  doc.addEventListener('selectionchange', function () {
    var el = doc.activeElement;
    if (detectCanUseOnInputNode(el)) {
      var index = elements.indexOf(el);
      var element = elements[index] || elements.push(el);
      if (element.value !== values[index]) {
        var ev = doc.createEvent('CustomEvent');
        ev.initCustomEvent('input', true, true, undefined);
        values[index] = element.value;
        el.dispatchEvent(ev);
      }
    }
  });
}
if (typeof Event !== 'undefined' && !Event.prototype.persist) {
  // tslint:disable-next-line:no-empty
  Event.prototype.persist = noop$1;
}
function attachEvent(domNode, eventName, handler) {
  eventName = fixEvent(domNode, eventName);
  /* istanbul ignore next */
  if (eventName === ONPROPERTYCHANGE) {
    processOnPropertyChangeEvent(domNode, handler);
    return;
  }
  var delegatedRoots = delegatedEvents.get(eventName);
  if (unbubbleEvents[eventName] === 1 || isTaro) {
    if (!delegatedRoots) {
      delegatedRoots = new MapClass();
    }
    var event = attachEventToNode(domNode, eventName, delegatedRoots);
    delegatedEvents.set(eventName, delegatedRoots);
    if (isFunction(handler)) {
      delegatedRoots.set(domNode, {
        eventHandler: handler,
        event: event
      });
    }
  } else {
    if (!delegatedRoots) {
      delegatedRoots = {
        items: new MapClass()
      };
      delegatedRoots.event = attachEventToDocument(doc, eventName, delegatedRoots);
      delegatedEvents.set(eventName, delegatedRoots);
    }
    if (isFunction(handler)) {
      if (isiOS) {
        domNode.onclick = noop$1;
      }
      delegatedRoots.items.set(domNode, handler);
    }
  }
}
function detachEvent(domNode, eventName, handler) {
  eventName = fixEvent(domNode, eventName);
  if (eventName === ONPROPERTYCHANGE) {
    return;
  }
  var delegatedRoots = delegatedEvents.get(eventName);
  if (unbubbleEvents[eventName] === 1 && delegatedRoots || isTaro) {
    var event = delegatedRoots.get(domNode);
    if (event) {
      domNode.removeEventListener(parseEventName(eventName), event.event, false);
      /* istanbul ignore next */
      var delegatedRootsSize = delegatedRoots.size;
      if (delegatedRoots['delete'](domNode) && delegatedRootsSize === 0) {
        delegatedEvents['delete'](eventName);
      }
    }
  } else if (delegatedRoots && delegatedRoots.items) {
    var items = delegatedRoots.items;
    if (items['delete'](domNode) && items.size === 0) {
      doc.removeEventListener(parseEventName(eventName), delegatedRoots.event, false);
      delegatedEvents['delete'](eventName);
    }
  }
}
var propertyChangeActiveElement;
var propertyChangeActiveElementValue;
var propertyChangeActiveElementValueProp;
var propertyChangeActiveHandlers = {};
/* istanbul ignore next */
function propertyChangeHandler(event) {
  if (event.propertyName !== 'value') {
    return;
  }
  var target = event.target || event.srcElement;
  var val = target.value;
  if (val === propertyChangeActiveElementValue) {
    return;
  }
  propertyChangeActiveElementValue = val;
  var handler = propertyChangeActiveHandlers[target.name];
  if (isFunction(handler)) {
    handler.call(target, event);
  }
}
/* istanbul ignore next */
function processOnPropertyChangeEvent(node, handler) {
  propertyChangeActiveHandlers[node.name] = handler;
  {
    // bindFocus = true
    node.addEventListener('focusin', function () {
      unbindOnPropertyChange();
      bindOnPropertyChange(node);
    }, false);
    node.addEventListener('focusout', unbindOnPropertyChange, false);
  }
}
/* istanbul ignore next */
function bindOnPropertyChange(node) {
  propertyChangeActiveElement = node;
  propertyChangeActiveElementValue = node.value;
  propertyChangeActiveElementValueProp = Object.getOwnPropertyDescriptor(node.constructor.prototype, 'value');
  Object.defineProperty(propertyChangeActiveElement, 'value', {
    get: function get() {
      return propertyChangeActiveElementValueProp.get.call(this);
    },
    set: function set(val) {
      propertyChangeActiveElementValue = val;
      propertyChangeActiveElementValueProp.set.call(this, val);
    }
  });
  propertyChangeActiveElement.addEventListener('propertychange', propertyChangeHandler, false);
}
/* istanbul ignore next */
function unbindOnPropertyChange() {
  if (!propertyChangeActiveElement) {
    return;
  }
  delete propertyChangeActiveElement.value;
  propertyChangeActiveElement.removeEventListener('propertychange', propertyChangeHandler, false);
  propertyChangeActiveElement = null;
  propertyChangeActiveElementValue = null;
  propertyChangeActiveElementValueProp = null;
}
function detectCanUseOnInputNode(node) {
  var nodeName = node.nodeName && node.nodeName.toLowerCase();
  var type = node.type;
  return nodeName === 'input' && /text|password/.test(type) || nodeName === 'textarea';
}
function fixEvent(node, eventName) {
  if (isTaro && eventName === 'onClick') {
    eventName = 'onTap';
  }
  if (eventName === 'onDoubleClick') {
    eventName = 'ondblclick';
  } else if (eventName === 'onTouchTap') {
    eventName = 'onclick';
    // tslint:disable-next-line:prefer-conditional-expression
  } else if (eventName === 'onChange' && detectCanUseOnInputNode(node)) {
    eventName = ONINPUT in window ? ONINPUT : ONPROPERTYCHANGE;
  } else {
    eventName = eventName.toLowerCase();
  }
  return eventName;
}
function parseEventName(name) {
  return name.substr(2);
}
/* istanbul ignore next */
function stopPropagation() {
  this.cancelBubble = true;
  this.stopImmediatePropagation();
}
function dispatchEvent(event, target, items, count, eventData) {
  var eventsToTrigger = items.get(target);
  if (eventsToTrigger) {
    count--;
    eventData.currentTarget = target;
    // for React synthetic event compatibility
    Object.defineProperties(event, {
      nativeEvent: {
        value: event
      }
    });
    eventsToTrigger(event);
    if (event.cancelBubble) {
      return;
    }
  }
  if (count > 0) {
    var parentDom = target.parentNode;
    if (parentDom === null || event.type === 'click' && parentDom.nodeType === 1 && parentDom.disabled) {
      return;
    }
    dispatchEvent(event, parentDom, items, count, eventData);
  }
}
function attachEventToDocument(d, eventName, delegatedRoots) {
  var eventHandler = function eventHandler(event) {
    var items = delegatedRoots.items;
    var count = items.size;
    if (count > 0) {
      var eventData = {
        currentTarget: event.target
      };
      /* istanbul ignore next */
      try {
        Object.defineProperties(event, {
          currentTarget: {
            configurable: true,
            get: function get() {
              return eventData.currentTarget;
            }
          },
          stopPropagation: {
            value: stopPropagation
          }
        });
      } catch (error) {
        // some browsers crashed
        // see: https://stackoverflow.com/questions/44052813/why-cannot-redefine-property
      }
      dispatchEvent(event, event.target, delegatedRoots.items, count, eventData);
    }
  };
  var parsedEventName = parseEventName(eventName);
  d.addEventListener(parsedEventName, eventHandler, supportedPassiveEventMap[parsedEventName] || false);
  return eventHandler;
}
function attachEventToNode(node, eventName, delegatedRoots) {
  var eventHandler = function eventHandler(event) {
    var eventToTrigger = delegatedRoots.get(node);
    if (eventToTrigger && eventToTrigger.eventHandler) {
      var eventData = {
        currentTarget: node
      };
      /* istanbul ignore next */
      Object.defineProperties(event, {
        currentTarget: {
          configurable: true,
          get: function get() {
            return eventData.currentTarget;
          }
        }
      });
      eventToTrigger.eventHandler(event);
    }
  };
  var parsedEventName = parseEventName(eventName);
  node.addEventListener(parsedEventName, eventHandler, supportedPassiveEventMap[parsedEventName] || false);
  return eventHandler;
}

function unmountChildren(children, parentDom) {
  if (isArray(children)) {
    for (var i = 0, len = children.length; i < len; i++) {
      unmount(children[i], parentDom);
    }
  } else {
    unmount(children, parentDom);
  }
}
function unmount(vnode, parentDom) {
  if (isInvalid(vnode)) {
    return;
  }
  var vtype = vnode.vtype;
  // Bitwise operators for better performance
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
  var dom = vnode.dom;
  if ((vtype & 4 /* Composite */) > 0) {
    vnode.destroy();
  } else if ((vtype & 2 /* Node */) > 0) {
    var props = vnode.props;
    var children = vnode.children;
    var ref = vnode.ref;
    unmountChildren(children);
    for (var propName in props) {
      if (isAttrAnEvent(propName)) {
        detachEvent(dom, propName, props[propName]);
      }
    }
    if (ref !== null) {
      Ref.detach(vnode, ref, dom);
    }
  } else if (vtype & 32 /* Portal */) {
      unmountChildren(vnode.children, vnode.type);
    }
  if (!isNullOrUndef(parentDom) && !isNullOrUndef(dom)) {
    if (isArray(dom)) {
      for (var i = 0; i < dom.length; i++) {
        parentDom.removeChild(dom[i]);
      }
    } else {
      parentDom.removeChild(dom);
    }
  }
  // vnode.dom = null
}

var NS = {
  ev: 'http://www.w3.org/2001/xml-events',
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace'
};
var ATTRS = {
  accentHeight: 'accent-height',
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 'alignment-baseline',
  allowReorder: 'allowReorder',
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 'arabic-form',
  ascent: 0,
  attributeName: 'attributeName',
  attributeType: 'attributeType',
  autoReverse: 'autoReverse',
  azimuth: 0,
  baseFrequency: 'baseFrequency',
  baseProfile: 'baseProfile',
  baselineShift: 'baseline-shift',
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 'calcMode',
  capHeight: 'cap-height',
  clip: 0,
  clipPath: 'clip-path',
  clipRule: 'clip-rule',
  clipPathUnits: 'clipPathUnits',
  colorInterpolation: 'color-interpolation',
  colorInterpolationFilters: 'color-interpolation-filters',
  colorProfile: 'color-profile',
  colorRendering: 'color-rendering',
  contentScriptType: 'contentScriptType',
  contentStyleType: 'contentStyleType',
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 'diffuseConstant',
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 'dominant-baseline',
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 'edgeMode',
  elevation: 0,
  enableBackground: 'enable-background',
  end: 0,
  evEvent: 'ev:event',
  exponent: 0,
  externalResourcesRequired: 'externalResourcesRequired',
  fill: 0,
  fillOpacity: 'fill-opacity',
  fillRule: 'fill-rule',
  filter: 0,
  filterRes: 'filterRes',
  filterUnits: 'filterUnits',
  floodColor: 'flood-color',
  floodOpacity: 'flood-opacity',
  focusable: 0,
  fontFamily: 'font-family',
  fontSize: 'font-size',
  fontSizeAdjust: 'font-size-adjust',
  fontStretch: 'font-stretch',
  fontStyle: 'font-style',
  fontVariant: 'font-variant',
  fontWeight: 'font-weight',
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 'glyph-name',
  glyphOrientationHorizontal: 'glyph-orientation-horizontal',
  glyphOrientationVertical: 'glyph-orientation-vertical',
  glyphRef: 'glyphRef',
  gradientTransform: 'gradientTransform',
  gradientUnits: 'gradientUnits',
  hanging: 0,
  horizAdvX: 'horiz-adv-x',
  horizOriginX: 'horiz-origin-x',
  ideographic: 0,
  imageRendering: 'image-rendering',
  'in': 0,
  in2: 0,
  intercept: 0,
  k: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  kernelMatrix: 'kernelMatrix',
  kernelUnitLength: 'kernelUnitLength',
  kerning: 0,
  keyPoints: 'keyPoints',
  keySplines: 'keySplines',
  keyTimes: 'keyTimes',
  lengthAdjust: 'lengthAdjust',
  letterSpacing: 'letter-spacing',
  lightingColor: 'lighting-color',
  limitingConeAngle: 'limitingConeAngle',
  local: 0,
  markerEnd: 'marker-end',
  markerMid: 'marker-mid',
  markerStart: 'marker-start',
  markerHeight: 'markerHeight',
  markerUnits: 'markerUnits',
  markerWidth: 'markerWidth',
  mask: 0,
  maskContentUnits: 'maskContentUnits',
  maskUnits: 'maskUnits',
  mathematical: 0,
  mode: 0,
  numOctaves: 'numOctaves',
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 'overline-position',
  overlineThickness: 'overline-thickness',
  paintOrder: 'paint-order',
  panose1: 'panose-1',
  pathLength: 'pathLength',
  patternContentUnits: 'patternContentUnits',
  patternTransform: 'patternTransform',
  patternUnits: 'patternUnits',
  pointerEvents: 'pointer-events',
  points: 0,
  pointsAtX: 'pointsAtX',
  pointsAtY: 'pointsAtY',
  pointsAtZ: 'pointsAtZ',
  preserveAlpha: 'preserveAlpha',
  preserveAspectRatio: 'preserveAspectRatio',
  primitiveUnits: 'primitiveUnits',
  r: 0,
  radius: 0,
  refX: 'refX',
  refY: 'refY',
  renderingIntent: 'rendering-intent',
  repeatCount: 'repeatCount',
  repeatDur: 'repeatDur',
  requiredExtensions: 'requiredExtensions',
  requiredFeatures: 'requiredFeatures',
  restart: 0,
  result: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  seed: 0,
  shapeRendering: 'shape-rendering',
  slope: 0,
  spacing: 0,
  specularConstant: 'specularConstant',
  specularExponent: 'specularExponent',
  speed: 0,
  spreadMethod: 'spreadMethod',
  startOffset: 'startOffset',
  stdDeviation: 'stdDeviation',
  stemh: 0,
  stemv: 0,
  stitchTiles: 'stitchTiles',
  stopColor: 'stop-color',
  stopOpacity: 'stop-opacity',
  strikethroughPosition: 'strikethrough-position',
  strikethroughThickness: 'strikethrough-thickness',
  string: 0,
  stroke: 0,
  strokeDasharray: 'stroke-dasharray',
  strokeDashoffset: 'stroke-dashoffset',
  strokeLinecap: 'stroke-linecap',
  strokeLinejoin: 'stroke-linejoin',
  strokeMiterlimit: 'stroke-miterlimit',
  strokeOpacity: 'stroke-opacity',
  strokeWidth: 'stroke-width',
  surfaceScale: 'surfaceScale',
  systemLanguage: 'systemLanguage',
  tableValues: 'tableValues',
  targetX: 'targetX',
  targetY: 'targetY',
  textAnchor: 'text-anchor',
  textDecoration: 'text-decoration',
  textRendering: 'text-rendering',
  textLength: 'textLength',
  to: 0,
  transform: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 'underline-position',
  underlineThickness: 'underline-thickness',
  unicode: 0,
  unicodeBidi: 'unicode-bidi',
  unicodeRange: 'unicode-range',
  unitsPerEm: 'units-per-em',
  vAlphabetic: 'v-alphabetic',
  vHanging: 'v-hanging',
  vIdeographic: 'v-ideographic',
  vMathematical: 'v-mathematical',
  values: 0,
  vectorEffect: 'vector-effect',
  version: 0,
  vertAdvY: 'vert-adv-y',
  vertOriginX: 'vert-origin-x',
  vertOriginY: 'vert-origin-y',
  viewBox: 'viewBox',
  viewTarget: 'viewTarget',
  visibility: 0,
  widths: 0,
  wordSpacing: 'word-spacing',
  writingMode: 'writing-mode',
  x: 0,
  xHeight: 'x-height',
  x1: 0,
  x2: 0,
  xChannelSelector: 'xChannelSelector',
  xlinkActuate: 'xlink:actuate',
  xlinkArcrole: 'xlink:arcrole',
  xlinkHref: 'xlink:href',
  xlinkRole: 'xlink:role',
  xlinkShow: 'xlink:show',
  xlinkTitle: 'xlink:title',
  xlinkType: 'xlink:type',
  xmlBase: 'xml:base',
  xmlId: 'xml:id',
  xmlns: 0,
  xmlnsXlink: 'xmlns:xlink',
  xmlLang: 'xml:lang',
  xmlSpace: 'xml:space',
  y: 0,
  y1: 0,
  y2: 0,
  yChannelSelector: 'yChannelSelector',
  z: 0,
  zoomAndPan: 'zoomAndPan'
};
var SVGPropertyConfig = {
  Properties: {},
  DOMAttributeNamespaces: {
    'ev:event': NS.ev,
    'xlink:actuate': NS.xlink,
    'xlink:arcrole': NS.xlink,
    'xlink:href': NS.xlink,
    'xlink:role': NS.xlink,
    'xlink:show': NS.xlink,
    'xlink:title': NS.xlink,
    'xlink:type': NS.xlink,
    'xml:base': NS.xml,
    'xml:id': NS.xml,
    'xml:lang': NS.xml,
    'xml:space': NS.xml
  },
  DOMAttributeNames: {}
};
Object.keys(ATTRS).forEach(function (key) {
  SVGPropertyConfig.Properties[key] = 0;
  if (ATTRS[key]) {
    SVGPropertyConfig.DOMAttributeNames[key] = ATTRS[key];
  }
});

/* tslint:disable: no-empty*/
function patch(lastVnode, nextVnode, parentNode, context, isSvg) {
  var lastDom = lastVnode.dom;
  var newDom;
  var lastVnodeIsArray = isArray(lastVnode);
  var nextVnodeisArray = isArray(nextVnode);
  if (isSameVNode(lastVnode, nextVnode)) {
    var vtype = nextVnode.vtype;
    if (vtype & 2 /* Node */) {
        isSvg = isNullOrUndef(isSvg) ? lastVnode.isSvg : isSvg;
        if (isSvg) {
          nextVnode.isSvg = isSvg;
        }
        patchProps(lastDom, nextVnode.props, lastVnode.props, lastVnode, isSvg);
        patchChildren(lastDom, lastVnode.children, nextVnode.children, context, isSvg);
        if (nextVnode.ref !== null) {
          Ref.update(lastVnode, nextVnode, lastDom);
        }
        newDom = lastDom;
      } else if ((vtype & 4 /* Composite */) > 0) {
      newDom = nextVnode.update(lastVnode, nextVnode, context);
    } else if (vtype & 1 /* Text */) {
        return patchVText(lastVnode, nextVnode);
      } else if (vtype & 32 /* Portal */) {
        patchChildren(lastVnode.type, lastVnode.children, nextVnode.children, context, isSvg);
      }
    // @TODO: test case
    nextVnode.dom = newDom || lastDom;
  } else if (isArray(lastVnode) && isArray(nextVnode)) {
    patchArrayChildren(lastDom, lastVnode, nextVnode, context, false);
  } else if (lastVnodeIsArray && !nextVnodeisArray) {
    patchArrayChildren(parentNode, lastVnode, [nextVnode], context, false);
  } else if (!lastVnodeIsArray && nextVnodeisArray) {
    newDom = createElement(nextVnode, isSvg, context);
    insertElement(newDom, parentNode, lastDom);
    parentNode.removeChild(lastDom);
  } else {
    unmount(lastVnode);
    newDom = createElement(nextVnode, isSvg, context);
    if (nextVnode !== null) {
      nextVnode.dom = newDom;
    }
    var newDomIsArray = isArray(newDom);
    var lastDomIsArray = isArray(lastDom);
    if (newDomIsArray) {
      insertElement(newDom, parentNode, lastDom);
      parentNode.removeChild(lastDom);
    } else if (lastDomIsArray) {
      parentNode = lastDom[0].parentNode;
      parentNode.insertBefore(newDom, lastDom[0]);
      for (var i = 0; i < lastDom.length; i++) {
        parentNode.removeChild(lastDom[i]);
      }
    } else if (parentNode !== null) {
      parentNode.replaceChild(newDom, lastDom);
    }
  }
  return newDom;
}
function patchArrayChildren(parentDom, lastChildren, nextChildren, context, isSvg) {
  var lastLength = lastChildren.length;
  var nextLength = nextChildren.length;
  if (lastLength === 0) {
    if (nextLength > 0) {
      for (var i = 0; i < nextLength; i++) {
        mountChild(nextChildren[i], parentDom, context, isSvg);
      }
    }
  } else if (nextLength === 0) {
    unmountChildren(lastChildren);
    parentDom.textContent = '';
  } else {
    if (isKeyed(lastChildren, nextChildren)) {
      patchKeyedChildren(lastChildren, nextChildren, parentDom, context, isSvg, lastLength, nextLength);
    } else {
      patchNonKeyedChildren(parentDom, lastChildren, nextChildren, context, isSvg, lastLength, nextLength);
    }
  }
}
function patchChildren(parentDom, lastChildren, nextChildren, context, isSvg) {
  // @TODO: is a better way to compatible with react-router?
  // if (lastChildren === nextChildren) {
  //   return
  // }
  var lastChildrenIsArray = isArray(lastChildren);
  var nextChildrenIsArray = isArray(nextChildren);
  if (lastChildrenIsArray && nextChildrenIsArray) {
    patchArrayChildren(parentDom, lastChildren, nextChildren, context, isSvg);
  } else if (!lastChildrenIsArray && !nextChildrenIsArray) {
    patch(lastChildren, nextChildren, parentDom, context, isSvg);
  } else if (lastChildrenIsArray && !nextChildrenIsArray) {
    patchArrayChildren(parentDom, lastChildren, [nextChildren], context, isSvg);
  } else if (!lastChildrenIsArray && nextChildrenIsArray) {
    patchArrayChildren(parentDom, [lastChildren], nextChildren, context, isSvg);
  }
}
function patchNonKeyedChildren(parentDom, lastChildren, nextChildren, context, isSvg, lastLength, nextLength) {
  var minLength = Math.min(lastLength, nextLength);
  var i = 0;
  while (i < minLength) {
    patch(lastChildren[i], nextChildren[i], parentDom, context, isSvg);
    i++;
  }
  if (lastLength < nextLength) {
    for (i = minLength; i < nextLength; i++) {
      if (parentDom !== null) {
        var refVnode = lastChildren[i - 1];
        mountElement(createElement(nextChildren[i], isSvg, context), parentDom, isValidElement(refVnode) && refVnode.dom != null ? refVnode.dom.nextSibling : null);
      }
    }
  } else if (lastLength > nextLength) {
    for (i = minLength; i < lastLength; i++) {
      unmount(lastChildren[i], parentDom);
    }
  }
}
/**
 *
 * Virtual DOM patching algorithm based on ivi by
 * Boris Kaul (@localvoid)
 * Licensed under the MIT License
 * https://github.com/ivijs/ivi/blob/master/LICENSE
 *
 */
function patchKeyedChildren(a, b, dom, context, isSvg, aLength, bLength) {
  var aEnd = aLength - 1;
  var bEnd = bLength - 1;
  var aStart = 0;
  var bStart = 0;
  var i;
  var j;
  var aNode;
  var bNode;
  var nextNode;
  var nextPos;
  var node;
  var aStartNode = a[aStart];
  var bStartNode = b[bStart];
  var aEndNode = a[aEnd];
  var bEndNode = b[bEnd];
  // Step 1
  // tslint:disable-next-line
  outer: {
    // Sync nodes with the same key at the beginning.
    while (aStartNode.key === bStartNode.key) {
      patch(aStartNode, bStartNode, dom, context, isSvg);
      aStart++;
      bStart++;
      if (aStart > aEnd || bStart > bEnd) {
        break outer;
      }
      aStartNode = a[aStart];
      bStartNode = b[bStart];
    }
    // Sync nodes with the same key at the end.
    while (aEndNode.key === bEndNode.key) {
      patch(aEndNode, bEndNode, dom, context, isSvg);
      aEnd--;
      bEnd--;
      if (aStart > aEnd || bStart > bEnd) {
        break outer;
      }
      aEndNode = a[aEnd];
      bEndNode = b[bEnd];
    }
  }
  if (aStart > aEnd) {
    if (bStart <= bEnd) {
      nextPos = bEnd + 1;
      nextNode = nextPos < bLength ? b[nextPos].dom : null;
      while (bStart <= bEnd) {
        node = b[bStart];
        bStart++;
        attachNewNode(dom, createElement(node, isSvg, context), nextNode);
      }
    }
  } else if (bStart > bEnd) {
    while (aStart <= aEnd) {
      unmount(a[aStart++], dom);
    }
  } else {
    var aLeft = aEnd - aStart + 1;
    var bLeft = bEnd - bStart + 1;
    var sources = new Array(bLeft);
    // Mark all nodes as inserted.
    for (i = 0; i < bLeft; i++) {
      sources[i] = -1;
    }
    var moved = false;
    var pos = 0;
    var patched = 0;
    // When sizes are small, just loop them through
    if (bLeft <= 4 || aLeft * bLeft <= 16) {
      for (i = aStart; i <= aEnd; i++) {
        aNode = a[i];
        if (patched < bLeft) {
          for (j = bStart; j <= bEnd; j++) {
            bNode = b[j];
            if (aNode.key === bNode.key) {
              sources[j - bStart] = i;
              if (pos > j) {
                moved = true;
              } else {
                pos = j;
              }
              patch(aNode, bNode, dom, context, isSvg);
              patched++;
              a[i] = null;
              break;
            }
          }
        }
      }
    } else {
      var keyIndex = new MapClass();
      for (i = bStart; i <= bEnd; i++) {
        keyIndex.set(b[i].key, i);
      }
      for (i = aStart; i <= aEnd; i++) {
        aNode = a[i];
        if (patched < bLeft) {
          j = keyIndex.get(aNode.key);
          if (j !== undefined) {
            bNode = b[j];
            sources[j - bStart] = i;
            if (pos > j) {
              moved = true;
            } else {
              pos = j;
            }
            patch(aNode, bNode, dom, context, isSvg);
            patched++;
            a[i] = null;
          }
        }
      }
    }
    if (aLeft === aLength && patched === 0) {
      unmountChildren(a);
      dom.textContent = '';
      while (bStart < bLeft) {
        node = b[bStart];
        bStart++;
        attachNewNode(dom, createElement(node, isSvg, context), null);
      }
    } else {
      i = aLeft - patched;
      while (i > 0) {
        aNode = a[aStart++];
        if (aNode !== null) {
          unmount(aNode, dom);
          i--;
        }
      }
      if (moved) {
        var seq = lis(sources);
        j = seq.length - 1;
        for (i = bLeft - 1; i >= 0; i--) {
          if (sources[i] === -1) {
            pos = i + bStart;
            node = b[pos];
            nextPos = pos + 1;
            attachNewNode(dom, createElement(node, isSvg, context), nextPos < bLength ? b[nextPos].dom : null);
          } else {
            if (j < 0 || i !== seq[j]) {
              pos = i + bStart;
              node = b[pos];
              nextPos = pos + 1;
              attachNewNode(dom, node.dom, nextPos < bLength ? b[nextPos].dom : null);
            } else {
              j--;
            }
          }
        }
      } else if (patched !== bLeft) {
        for (i = bLeft - 1; i >= 0; i--) {
          if (sources[i] === -1) {
            pos = i + bStart;
            node = b[pos];
            nextPos = pos + 1;
            attachNewNode(dom, createElement(node, isSvg, context), nextPos < bLength ? b[nextPos].dom : null);
          }
        }
      }
    }
  }
}
function attachNewNode(parentDom, newNode, nextNode) {
  if (isNullOrUndef(nextNode)) {
    parentDom.appendChild(newNode);
  } else {
    parentDom.insertBefore(newNode, nextNode);
  }
}
/**
 * Slightly modified Longest Increased Subsequence algorithm, it ignores items that have -1 value, they're representing
 * new items.
 *
 * http://en.wikipedia.org/wiki/Longest_increasing_subsequence
 *
 * @param a Array of numbers.
 * @returns Longest increasing subsequence.
 */
function lis(a) {
  var p = a.slice();
  var result = [];
  result.push(0);
  var u;
  var v;
  for (var i = 0, il = a.length; i < il; ++i) {
    if (a[i] === -1) {
      continue;
    }
    var j = result[result.length - 1];
    if (a[j] < a[i]) {
      p[i] = j;
      result.push(i);
      continue;
    }
    u = 0;
    v = result.length - 1;
    while (u < v) {
      var c = (u + v) / 2 | 0;
      if (a[result[c]] < a[i]) {
        u = c + 1;
      } else {
        v = c;
      }
    }
    if (a[i] < a[result[u]]) {
      if (u > 0) {
        p[i] = result[u - 1];
      }
      result[u] = i;
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }
  return result;
}
function isKeyed(lastChildren, nextChildren) {
  return nextChildren.length > 0 && !isNullOrUndef(nextChildren[0]) && !isNullOrUndef(nextChildren[0].key) && lastChildren.length > 0 && !isNullOrUndef(lastChildren[0]) && !isNullOrUndef(lastChildren[0].key);
}
function isSameVNode(a, b) {
  if (isInvalid(a) || isInvalid(b) || isArray(a) || isArray(b)) {
    return false;
  }
  return a.type === b.type && a.vtype === b.vtype && a.key === b.key;
}
function patchVText(lastVNode, nextVNode) {
  var dom = lastVNode.dom;
  if (dom === null) {
    return;
  }
  var nextText = nextVNode.text;
  nextVNode.dom = dom;
  if (lastVNode.text !== nextText) {
    dom.nodeValue = nextText;
  }
  return dom;
}
var skipProps = {
  children: 1,
  key: 1,
  ref: 1,
  owner: 1
};
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
function setStyle(domStyle, style, value) {
  if (isNullOrUndef(value) || isNumber(value) && isNaN(value)) {
    domStyle[style] = '';
    return;
  }
  if (style === 'float') {
    domStyle['cssFloat'] = value;
    domStyle['styleFloat'] = value;
    return;
  }
  domStyle[style] = !isNumber(value) || IS_NON_DIMENSIONAL.test(style) ? value : value + 'px';
}
function patchEvent(eventName, lastEvent, nextEvent, domNode) {
  if (lastEvent !== nextEvent) {
    if (isFunction(lastEvent)) {
      detachEvent(domNode, eventName, lastEvent);
    }
    attachEvent(domNode, eventName, nextEvent);
  }
}
function patchStyle(lastAttrValue, nextAttrValue, dom) {
  var domStyle = dom.style;
  var style;
  var value;
  if (isString(nextAttrValue)) {
    domStyle.cssText = nextAttrValue;
    return;
  }
  if (!isNullOrUndef(lastAttrValue) && !isString(lastAttrValue)) {
    for (style in nextAttrValue) {
      value = nextAttrValue[style];
      if (value !== lastAttrValue[style]) {
        setStyle(domStyle, style, value);
      }
    }
    for (style in lastAttrValue) {
      if (isNullOrUndef(nextAttrValue[style])) {
        domStyle[style] = '';
      }
    }
  } else {
    for (style in nextAttrValue) {
      value = nextAttrValue[style];
      setStyle(domStyle, style, value);
    }
  }
}
function patchProp(domNode, prop, lastValue, nextValue, lastVnode, isSvg) {
  // fix the value update for textarea/input
  if (lastValue !== nextValue || prop === 'value') {
    if (prop === 'className') {
      prop = 'class';
    }
    if (skipProps[prop] === 1) {
      return;
    } else if (prop === 'class' && !isSvg) {
      domNode.className = nextValue;
    } else if (prop === 'dangerouslySetInnerHTML') {
      var lastHtml = lastValue && lastValue.__html;
      var nextHtml = nextValue && nextValue.__html;
      if (lastHtml !== nextHtml) {
        if (!isNullOrUndef(nextHtml)) {
          if (isValidElement(lastVnode) && lastVnode.children !== EMPTY_CHILDREN) {
            unmountChildren(lastVnode.children);
            lastVnode.children = [];
          }
          domNode.innerHTML = nextHtml;
        }
      }
    } else if (isAttrAnEvent(prop)) {
      patchEvent(prop, lastValue, nextValue, domNode);
    } else if (prop === 'style') {
      patchStyle(lastValue, nextValue, domNode);
    } else if (prop !== 'list' && prop !== 'type' && !isSvg && prop in domNode) {
      setProperty(domNode, prop, nextValue == null ? '' : nextValue);
      if (nextValue == null || nextValue === false) {
        domNode.removeAttribute(prop);
      }
    } else if (isNullOrUndef(nextValue) || nextValue === false) {
      domNode.removeAttribute(prop);
    } else {
      var namespace = SVGPropertyConfig.DOMAttributeNamespaces[prop];
      if (isSvg && namespace) {
        if (nextValue) {
          domNode.setAttributeNS(namespace, prop, nextValue);
        } else {
          var colonPosition = prop.indexOf(':');
          var localName = colonPosition > -1 ? prop.substr(colonPosition + 1) : prop;
          domNode.removeAttributeNS(namespace, localName);
        }
      } else {
        if (!isFunction(nextValue)) {
          domNode.setAttribute(prop, nextValue);
        }
        // WARNING: Non-event attributes with function values:
        // https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html#changes-in-detail
      }
    }
  }
}
function setProperty(node, name, value) {
  try {
    node[name] = value;
  } catch (e) {}
}
function patchProps(domNode, nextProps, previousProps, lastVnode, isSvg) {
  for (var propName in previousProps) {
    var value = previousProps[propName];
    if (isNullOrUndef(nextProps[propName]) && !isNullOrUndef(value)) {
      if (isAttrAnEvent(propName)) {
        detachEvent(domNode, propName, value);
      } else if (propName === 'dangerouslySetInnerHTML') {
        domNode.textContent = '';
      } else if (propName === 'className') {
        domNode.removeAttribute('class');
      } else {
        domNode.removeAttribute(propName);
      }
    }
  }
  for (var propName$1 in nextProps) {
    patchProp(domNode, propName$1, previousProps[propName$1], nextProps[propName$1], lastVnode, isSvg);
  }
}

var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
function createElement(vnode, isSvg, parentContext, parentComponent) {
  var domNode;
  if (isValidElement(vnode)) {
    var vtype = vnode.vtype;
    if (vtype & 4 /* Composite */) {
        domNode = vnode.init(parentContext, parentComponent);
      } else if (vtype & 1 /* Text */) {
        domNode = doc.createTextNode(vnode.text);
        vnode.dom = domNode;
      } else if (vtype & 2 /* Node */) {
        domNode = mountVNode$1(vnode, isSvg, parentContext, parentComponent);
      } else if (vtype & 16 /* Void */) {
        domNode = vnode.dom = doc.createTextNode('');
      } else if (isPortal(vtype, vnode)) {
      vnode.type.appendChild(createElement(vnode.children, isSvg, parentContext, parentComponent));
      domNode = doc.createTextNode('');
    }
  } else if (isString(vnode) || isNumber(vnode)) {
    domNode = doc.createTextNode(vnode);
  } else if (isNullOrUndef(vnode) || isBoolean(vnode)) {
    domNode = doc.createTextNode('');
  } else if (isArray(vnode)) {
    domNode = vnode.map(function (child) {
      return createElement(child, isSvg, parentContext, parentComponent);
    });
  } else {
    throw new Error('Unsupported VNode.');
  }
  return domNode;
}
function mountVNode$1(vnode, isSvg, parentContext, parentComponent) {
  if (vnode.isSvg) {
    isSvg = true;
  } else if (vnode.type === 'svg') {
    isSvg = true;
    /* istanbul ignore next */
  } else if (!isSupportSVG) {
    isSvg = false;
  }
  if (isSvg) {
    vnode.namespace = SVG_NAMESPACE;
    vnode.isSvg = isSvg;
  }
  var domNode = !isSvg ? doc.createElement(vnode.type) : doc.createElementNS(vnode.namespace, vnode.type);
  setProps(domNode, vnode, isSvg);
  if (vnode.type === 'foreignObject') {
    isSvg = false;
  }
  var children = vnode.children;
  if (isArray(children)) {
    for (var i = 0, len = children.length; i < len; i++) {
      mountChild(children[i], domNode, parentContext, isSvg, parentComponent);
    }
  } else {
    mountChild(children, domNode, parentContext, isSvg, parentComponent);
  }
  vnode.dom = domNode;
  if (vnode.ref !== null) {
    Ref.attach(vnode, vnode.ref, domNode);
  }
  return domNode;
}
function mountChild(child, domNode, parentContext, isSvg, parentComponent) {
  child.parentContext = parentContext || EMPTY_OBJ;
  var childNode = createElement(child, isSvg, parentContext, parentComponent);
  mountElement(childNode, domNode);
}
function mountElement(element, parentNode, refChild) {
  if (isArray(element)) {
    for (var i = 0; i < element.length; i++) {
      var el = element[i];
      mountElement(el, parentNode);
    }
  } else {
    refChild != null ? parentNode.insertBefore(element, refChild) : parentNode.appendChild(element);
  }
}
function insertElement(element, parentNode, lastDom) {
  if (isArray(element)) {
    for (var i = 0; i < element.length; i++) {
      var el = element[i];
      insertElement(el, parentNode, lastDom);
    }
  } else {
    parentNode.insertBefore(element, lastDom);
  }
}
function setProps(domNode, vnode, isSvg) {
  var props = vnode.props;
  for (var p in props) {
    patchProp(domNode, p, null, props[p], null, isSvg);
  }
}

function createVText(text) {
  return {
    text: text,
    vtype: 1 /* Text */
    , dom: null
  };
}

function createVoid() {
  return {
    dom: null,
    vtype: 16 /* Void */
  };
}

function getHooks(index) {
  if (Current.current === null) {
    throw new Error("invalid hooks call: hooks can only be called in a stateless component.");
  }
  var hooks = Current.current.hooks;
  if (index >= hooks.length) {
    hooks.push({});
  }
  return hooks[index];
}
function useState(initialState) {
  if (isFunction(initialState)) {
    initialState = initialState();
  }
  var hook = getHooks(Current.index++);
  if (!hook.state) {
    hook.component = Current.current;
    hook.state = [initialState, function (action) {
      hook.state[0] = isFunction(action) ? action(hook.state[0]) : action;
      hook.component._disable = false;
      hook.component.setState({});
    }];
  }
  return hook.state;
}
function useReducer(reducer, initialState, initializer) {
  if (isFunction(initialState)) {
    initialState = initialState();
  }
  var hook = getHooks(Current.index++);
  if (!hook.state) {
    hook.component = Current.current;
    hook.state = [isUndefined(initializer) ? initialState : initializer(initialState), function (action) {
      hook.state[0] = reducer(hook.state[0], action);
      hook.component._disable = false;
      hook.component.setState({});
    }];
  }
  return hook.state;
}
function areDepsChanged(prevDeps, deps) {
  if (isNullOrUndef(prevDeps) || isNullOrUndef(deps)) {
    return true;
  }
  return deps.some(function (d, i) {
    return !objectIs(d, prevDeps[i]);
  });
}
function invokeEffects(component, delay) {
  if (delay === undefined) delay = false;

  var effects = delay ? component.effects : component.layoutEffects;
  effects.forEach(function (hook) {
    if (isFunction(hook.cleanup)) {
      hook.cleanup();
    }
    var result = hook.effect();
    if (isFunction(result)) {
      hook.cleanup = result;
    }
  });
  if (delay) {
    component.effects = [];
  } else {
    component.layoutEffects = [];
  }
}
var scheduleEffectComponents = [];
function invokeScheduleEffects(component) {
  if (!component._afterScheduleEffect) {
    component._afterScheduleEffect = true;
    scheduleEffectComponents.push(component);
    if (scheduleEffectComponents.length === 1) {
      nextTick(function () {
        setTimeout(function () {
          scheduleEffectComponents.forEach(function (c) {
            c._afterScheduleEffect = false;
            invokeEffects(c, true);
          });
          scheduleEffectComponents = [];
        }, 0);
      });
    }
  }
}
function useEffectImpl(effect, deps, delay) {
  if (delay === undefined) delay = false;

  var hook = getHooks(Current.index++);
  if (areDepsChanged(hook.deps, deps)) {
    hook.effect = effect;
    hook.deps = deps;
    if (delay) {
      Current.current.effects = Current.current.effects.concat(hook);
      invokeScheduleEffects(Current.current);
    } else {
      Current.current.layoutEffects = Current.current.layoutEffects.concat(hook);
    }
  }
}
function useEffect(effect, deps) {
  useEffectImpl(effect, deps, true);
}
function useLayoutEffect(effect, deps) {
  useEffectImpl(effect, deps);
}
function useRef(initialValue) {
  var hook = getHooks(Current.index++);
  if (!hook.ref) {
    hook.ref = {
      current: initialValue
    };
  }
  return hook.ref;
}
function useMemo(factory, deps) {
  var hook = getHooks(Current.index++);
  if (areDepsChanged(hook.deps, deps)) {
    hook.deps = deps;
    hook.callback = factory;
    hook.value = factory();
  }
  return hook.value;
}
function useCallback(callback, deps) {
  return useMemo(function () {
    return callback;
  }, deps);
}
function useContext(context) {
  var provider = Current.current.context[context._id];
  if (isUndefined(provider)) {
    return context._defaultValue;
  }
  var hook = getHooks(Current.index++);
  // should update when value changes with shouldComponentUpdate:false Component on top
  if (isUndefined(hook.context)) {
    hook.context = true;
    var c = Current.current;
    provider.on(function () {
      return enqueueRender(c);
    });
  }
  return provider.value;
}
function useImperativeHandle(ref, init, deps) {
  useLayoutEffect(function () {
    if (isFunction(ref)) {
      ref(init());
      return function () {
        return ref(null);
      };
    } else if (!isUndefined(ref)) {
      ref.current = init();
      return function () {
        delete ref.current;
      };
    }
  }, isArray(deps) ? deps.concat([ref]) : undefined);
}

// import { extend, isFunction, isNumber, isString } from 'nerv-utils'
var readyComponents = [];
function errorCatcher(fn, component) {
  try {
    return fn();
  } catch (error) {
    errorHandler(component, error);
  }
}
function errorHandler(component, error) {
  // if(!component) { throw error ; return }
  var boundary;
  while (true) {
    var ref = component.constructor;
    var getDerivedStateFromError = ref.getDerivedStateFromError;
    if (isFunction(getDerivedStateFromError) || isFunction(component.componentDidCatch)) {
      boundary = component;
      break;
    } else if (component._parentComponent) {
      component = component._parentComponent;
    } else {
      break;
    }
  }
  if (boundary) {
    var ref$1 = boundary.constructor;
    var getDerivedStateFromError$1 = ref$1.getDerivedStateFromError;
    var _disable = boundary._disable;
    boundary._disable = false;
    if (isFunction(getDerivedStateFromError$1)) {
      component.setState(getDerivedStateFromError$1(error));
    } else if (isFunction(component.componentDidCatch)) {
      boundary.componentDidCatch(error);
    }
    boundary._disable = _disable;
  } else {
    throw error;
  }
}
function ensureVirtualNode(rendered) {
  if (isNumber(rendered) || isString(rendered)) {
    return createVText(rendered);
  } else if (isInvalid(rendered)) {
    return createVoid();
  } else if (isArray(rendered)) {
    rendered = rendered.length === 0 ? createVoid() : rendered.map(ensureVirtualNode);
  }
  return rendered;
}
function mountVNode(vnode, parentContext, parentComponent) {
  return createElement(vnode, false, parentContext, parentComponent);
}
function getContextByContextType(vnode, parentContext) {
  var contextType = vnode.type.contextType;
  var hasContextType = !isUndefined(contextType);
  var provider = hasContextType ? parentContext[contextType._id] : null;
  var context = hasContextType ? !isNullOrUndef(provider) ? provider.value : contextType._defaultValue : parentContext;
  return context;
}
function mountComponent(vnode, parentContext, parentComponent) {
  var ref = vnode.ref;
  if (vnode.type.prototype && vnode.type.prototype.render) {
    var context = getContextByContextType(vnode, parentContext);
    vnode.component = new vnode.type(vnode.props, context);
  } else {
    var c = new Component(vnode.props, parentContext);
    c.render = function () {
      return vnode.type.call(c, c.props, c.context);
    };
    vnode.component = c;
  }
  var component = vnode.component;
  component.vnode = vnode;
  if (isComponent(parentComponent)) {
    component._parentComponent = parentComponent;
  }
  var newState = callGetDerivedStateFromProps(vnode.props, component.state, component);
  if (!isUndefined(newState)) {
    component.state = newState;
  }
  if (!hasNewLifecycle(component) && isFunction(component.componentWillMount)) {
    errorCatcher(function () {
      component.componentWillMount();
    }, component);
    component.state = component.getState();
    component.clearCallBacks();
  }
  component._dirty = false;
  var rendered = renderComponent(component);
  rendered.parentVNode = vnode;
  component._rendered = rendered;
  if (!isNullOrUndef(ref)) {
    Ref.attach(vnode, ref, vnode.dom);
  }
  var dom = vnode.dom = mountVNode(rendered, getChildContext(component, parentContext), component);
  invokeEffects(component);
  if (isFunction(component.componentDidMount)) {
    readyComponents.push(component);
  }
  component._disable = false;
  return dom;
}
function getChildContext(component, context) {
  if (context === undefined) context = EMPTY_OBJ;

  if (isFunction(component.getChildContext)) {
    return extend(clone(context), component.getChildContext());
  }
  return clone(context);
}
function renderComponent(component) {
  Current.current = component;
  Current.index = 0;
  invokeEffects(component, true);
  var rendered;
  errorCatcher(function () {
    rendered = component.render();
  }, component);
  rendered = ensureVirtualNode(rendered);
  Current.current = null;
  return rendered;
}
function flushMount() {
  if (!readyComponents.length) {
    return;
  }
  // @TODO: perf
  var queue = readyComponents.slice(0);
  readyComponents.length = 0;
  queue.forEach(function (item) {
    if (isFunction(item)) {
      item();
    } else if (item.componentDidMount) {
      errorCatcher(function () {
        item.componentDidMount();
      }, item);
    }
  });
}
function getFragmentHostNode(children) {
  var child = children[0];
  if (isArray(child)) {
    return getFragmentHostNode(child);
  } else if (isComposite(child) && child.dom == null) {
    return getFragmentHostNode(child.component._rendered);
  }
  return child.dom;
}
function reRenderComponent(prev, current) {
  var component = current.component = prev.component;
  var nextProps = current.props;
  var nextContext = current.context;
  component._disable = true;
  if (!hasNewLifecycle(component) && isFunction(component.componentWillReceiveProps)) {
    errorCatcher(function () {
      component.componentWillReceiveProps(nextProps, nextContext);
    }, component);
  }
  component._disable = false;
  component.prevProps = component.props;
  component.prevState = component.state;
  component.prevContext = component.context;
  component.props = nextProps;
  component.context = nextContext;
  if (!isNullOrUndef(current.ref)) {
    Ref.update(prev, current);
  }
  return updateComponent(component);
}
function callShouldComponentUpdate(props, state, context, component) {
  var shouldUpdate = true;
  errorCatcher(function () {
    shouldUpdate = component.shouldComponentUpdate(props, state, context);
  }, component);
  return shouldUpdate;
}
function updateComponent(component, isForce) {
  if (isForce === undefined) isForce = false;

  var vnode = component.vnode;
  var dom = vnode.dom;
  var props = component.props;
  var state = component.getState();
  var context = component.context;
  var prevProps = component.prevProps || props;
  var prevState = component.prevState || component.state;
  var prevContext = component.prevContext || context;
  var stateFromProps = callGetDerivedStateFromProps(props, state, component);
  if (!isUndefined(stateFromProps)) {
    state = stateFromProps;
  }
  component.props = prevProps;
  component.context = prevContext;
  var skip = false;
  var onSCU = props.onShouldComponentUpdate;
  if (!isForce && (isFunction(component.shouldComponentUpdate) && callShouldComponentUpdate(props, state, context, component) === false || isFunction(onSCU) && onSCU(prevProps, props) === false)) {
    skip = true;
  } else if (!hasNewLifecycle(component) && isFunction(component.componentWillUpdate)) {
    errorCatcher(function () {
      component.componentWillUpdate(props, state, context);
    }, component);
  }
  if (!isUndefined(stateFromProps)) {
    component.state = stateFromProps;
  }
  component.props = props;
  component.state = state;
  component.context = context;
  component._dirty = false;
  if (!skip) {
    var lastRendered = component._rendered;
    var rendered = renderComponent(component);
    rendered.parentVNode = vnode;
    var childContext = getChildContext(component, context);
    var snapshot = callGetSnapshotBeforeUpdate(prevProps, prevState, component);
    var parentDom = lastRendered.dom && lastRendered.dom.parentNode;
    if (isArray(lastRendered)) {
      var hostNode = getFragmentHostNode(lastRendered);
      if (hostNode) {
        parentDom = lastRendered.dom = hostNode.parentNode;
      }
    }
    dom = vnode.dom = patch(lastRendered, rendered, parentDom || null, childContext);
    component._rendered = rendered;
    if (isFunction(component.componentDidUpdate)) {
      errorCatcher(function () {
        component.componentDidUpdate(prevProps, prevState, snapshot);
      }, component);
    }
    while (vnode = vnode.parentVNode) {
      if ((vnode.vtype & 4 /* Composite */) > 0) {
        vnode.dom = dom;
      }
    }
  }
  component.prevProps = component.props;
  component.prevState = component.state;
  component.prevContext = component.context;
  component.clearCallBacks();
  flushMount();
  invokeEffects(component);
  return dom;
}
function unmountComponent(vnode) {
  var component = vnode.component;
  component.hooks.forEach(function (hook) {
    if (isFunction(hook.cleanup)) {
      hook.cleanup();
    }
  });
  if (isFunction(component.componentWillUnmount)) {
    errorCatcher(function () {
      component.componentWillUnmount();
    }, component);
  }
  component._disable = true;
  unmount(component._rendered);
  if (!isNullOrUndef(vnode.ref)) {
    Ref.detach(vnode, vnode.ref, vnode.dom);
  }
}
function callGetDerivedStateFromProps(props, state, inst) {
  var ref = inst.constructor;
  var getDerivedStateFromProps = ref.getDerivedStateFromProps;
  var newState;
  // @TODO show warning
  errorCatcher(function () {
    if (isFunction(getDerivedStateFromProps)) {
      var partialState = getDerivedStateFromProps.call(null, props, state);
      if (!isUndefined(partialState)) {
        newState = extend(clone(state), partialState);
      }
    }
  }, inst);
  return newState;
}
function callGetSnapshotBeforeUpdate(props, state, inst) {
  var getSnapshotBeforeUpdate = inst.getSnapshotBeforeUpdate;
  var snapshot;
  errorCatcher(function () {
    if (isFunction(getSnapshotBeforeUpdate)) {
      snapshot = getSnapshotBeforeUpdate.call(inst, props, state);
    }
  }, inst);
  return snapshot;
}
function hasNewLifecycle(component) {
  if (isFunction(component.constructor.getDerivedStateFromProps)) {
    return true;
  }
  return false;
}

var items = [];
function enqueueRender(component) {
  // tslint:disable-next-line:no-conditional-assignment
  if (!component._dirty && (component._dirty = true) && items.push(component) === 1) {
    nextTick(rerender);
  }
}
function rerender(isForce) {
  if (isForce === undefined) isForce = false;

  var p;
  var list = items;
  items = [];
  // tslint:disable-next-line:no-conditional-assignment
  while (p = list.pop()) {
    if (p._dirty) {
      updateComponent(p, isForce);
    }
  }
}

var Component = function Component(props, context) {
  this._dirty = true;
  this._disable = true;
  this._pendingStates = [];
  this._pendingCallbacks = [];
  this._afterScheduleEffect = false;
  this.hooks = [];
  this.effects = EMPTY_CHILDREN;
  this.layoutEffects = EMPTY_CHILDREN;
  if (!this.state) {
    this.state = {};
  }
  this.props = props || {};
  this.context = context || EMPTY_OBJ;
  this.refs = {};
};
Component.prototype.setState = function setState(state, callback) {
  if (state) {
    this._pendingStates.push(state);
  }
  if (isFunction(callback)) {
    this._pendingCallbacks.push(callback);
  }
  if (!this._disable) {
    enqueueRender(this);
  }
};
Component.prototype.getState = function getState() {
  var this$1 = this;

  // tslint:disable-next-line:no-this-assignment
  var ref = this;
  var _pendingStates = ref._pendingStates;
  var state = ref.state;
  var props = ref.props;
  if (!_pendingStates.length) {
    return state;
  }
  var stateClone = clone(state);
  var queue = _pendingStates.concat();
  this._pendingStates.length = 0;
  queue.forEach(function (nextState) {
    if (isFunction(nextState)) {
      nextState = nextState.call(this$1, state, props);
    }
    extend(stateClone, nextState);
  });
  return stateClone;
};
Component.prototype.clearCallBacks = function clearCallBacks() {
  var this$1 = this;

  // cached the length of callbacks, or callbacks may increase by calling them in the same loop
  var len = this._pendingCallbacks.length;
  while (this._dirty ? this._pendingCallbacks.length : len) {
    var cb = this$1._pendingCallbacks.shift();
    cb.call(this$1);
    len--;
  }
};
Component.prototype.forceUpdate = function forceUpdate(callback) {
  if (isFunction(callback)) {
    this._pendingCallbacks.push(callback);
  }
  updateComponent(this, true);
};
// tslint:disable-next-line
Component.prototype.render = function render(nextProps, nextState, nextContext) {};
Component.prototype.isReactComponent = EMPTY_OBJ;

var PureComponent = function (Component$$1) {
  function PureComponent() {
    Component$$1.apply(this, arguments);
    this.isPureComponent = true;
  }

  if (Component$$1) PureComponent.__proto__ = Component$$1;
  PureComponent.prototype = Object.create(Component$$1 && Component$$1.prototype);
  PureComponent.prototype.constructor = PureComponent;
  PureComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  };

  return PureComponent;
}(Component);

var options = {
  afterMount: noop$1,
  afterUpdate: noop$1,
  beforeUpdate: noop$1,
  beforeUnmount: noop$1,
  beforeRender: noop$1,
  beforeMount: noop$1,
  afterCreate: noop$1,
  roots: [],
  debug: false
};

function render(vnode, container, callback) {
  if (!container) {
    throw new Error(container + " should be a DOM Element");
  }
  var lastVnode = container._component;
  var dom;
  options.roots.push(vnode);
  if (lastVnode !== undefined) {
    options.roots = options.roots.filter(function (item) {
      return item !== lastVnode;
    });
    dom = patch(lastVnode, vnode, container, {});
  } else {
    dom = mountVNode(vnode, {});
    mountElement(dom, container);
  }
  if (container) {
    container._component = vnode;
  }
  flushMount();
  if (callback) {
    callback();
  }
  return isComposite(vnode) ? vnode.component : dom;
}

function createVNode(type, props, children, key, namespace, owner, ref) {
  return {
    type: type,
    key: key || null,
    vtype: 2 /* Node */
    , props: props || EMPTY_OBJ,
    children: children,
    namespace: namespace || null,
    _owner: owner,
    dom: null,
    ref: ref || null
  };
}

function h(type, props, children) {
  var childNodes;
  if (props.children) {
    if (!children) {
      children = props.children;
    }
  }
  if (isArray(children)) {
    childNodes = [];
    addChildren(childNodes, children, type);
  } else if (isString(children) || isNumber(children)) {
    children = createVText(String(children));
  } else if (!isValidElement(children)) {
    children = EMPTY_CHILDREN;
  }
  props.children = childNodes !== undefined ? childNodes : children;
  return createVNode(type, props, props.children, props.key, props.namespace, props.owner, props.ref);
}
function addChildren(childNodes, children, type) {
  if (isString(children) || isNumber(children)) {
    childNodes.push(createVText(String(children)));
  } else if (isValidElement(children)) {
    childNodes.push(children);
  } else if (isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      addChildren(childNodes, children[i], type);
    }
  } else {
    childNodes.push(createVoid());
  }
}

var ComponentWrapper = function ComponentWrapper(type, props) {
  this.vtype = 4 /* Composite */;
  this.type = type;
  this.name = type.name;
  if (isUndefined(this.name)) {
    var names = type.toString().match(/^function\s*([^\s(]+)/);
    this.name = isArray(names) ? names[0] : 'Component';
  }
  type.displayName = this.name;
  this._owner = props.owner;
  delete props.owner;
  if (this.ref = props.ref) {
    delete props.ref;
  }
  if (type._forwarded) {
    if (!isUndefined(this.ref)) {
      props.ref = this.ref;
    }
    delete this.ref;
  }
  this.props = props;
  this.key = props.key || null;
  this.dom = null;
  options.afterCreate(this);
};
ComponentWrapper.prototype.init = function init(parentContext, parentComponent) {
  options.beforeMount(this);
  var dom = mountComponent(this, parentContext, parentComponent);
  options.afterMount(this);
  return dom;
};
ComponentWrapper.prototype.update = function update(previous, current, parentContext, domNode) {
  this.context = getContextByContextType(this, parentContext);
  options.beforeUpdate(this);
  var dom = reRenderComponent(previous, this);
  options.afterUpdate(this);
  return dom;
};
ComponentWrapper.prototype.destroy = function destroy() {
  options.beforeUnmount(this);
  unmountComponent(this);
};

// import StatelessComponent from './stateless-component'
function transformPropsForRealTag(type, props) {
  var newProps = {};
  for (var propName in props) {
    var propValue = props[propName];
    if (propName === 'defaultValue') {
      newProps.value = props.value || props.defaultValue;
      continue;
    }
    var svgPropName = SVGPropertyConfig.DOMAttributeNames[propName];
    if (svgPropName && svgPropName !== propName) {
      newProps[svgPropName] = propValue;
      continue;
    }
    newProps[propName] = propValue;
  }
  return newProps;
}
/**
 *
 * @param props
 * @param defaultProps
 * defaultProps should respect null but ignore undefined
 * @see: https://facebook.github.io/react/docs/react-component.html#defaultprops
 */
function transformPropsForComponent(props, defaultProps) {
  var newProps = {};
  for (var propName in props) {
    var propValue = props[propName];
    newProps[propName] = propValue;
  }
  if (defaultProps) {
    for (var propName$1 in defaultProps) {
      if (isUndefined(newProps[propName$1])) {
        newProps[propName$1] = defaultProps[propName$1];
      }
    }
  }
  return newProps;
}
function createElement$2(type, properties) {
  var _children = [],
      len = arguments.length - 2;
  while (len-- > 0) {
    _children[len] = arguments[len + 2];
  }var children = _children;
  {
    if (_children.length === 1) {
      children = _children[0];
    } else if (_children.length === 0) {
      children = undefined;
    }
  }
  var props;
  if (isString(type)) {
    props = transformPropsForRealTag(type, properties);
    props.owner = Current.current;
    return h(type, props, children);
  } else if (isFunction(type)) {
    props = transformPropsForComponent(properties, type.defaultProps);
    if (!props.children || props.children === EMPTY_CHILDREN) {
      props.children = children || children === 0 ? children : EMPTY_CHILDREN;
    }
    props.owner = Current.current;
    return new ComponentWrapper(type, props);
  }
  return type;
}

function cloneElement(vnode, props) {
  var children = [],
      len = arguments.length - 2;
  while (len-- > 0) {
    children[len] = arguments[len + 2];
  }if (isVText(vnode)) {
    return createVText(vnode.text);
  }
  if (isString(vnode) || isNumber(vnode)) {
    return createVText(vnode);
  }
  if (isInvalid(vnode) || !isInvalid(vnode) && isPortal(vnode.vtype, vnode) || vnode && vnode.vtype & 16 /* Void */) {
      return createVoid();
    }
  var properties = clone(extend(clone(vnode.props), props));
  if (vnode.namespace) {
    properties.namespace = vnode.namespace;
  }
  if (vnode.vtype & 4 /* Composite */ && !isNullOrUndef(vnode.ref)) {
    properties.ref = vnode.ref;
  }
  var childrenTmp = (arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children || properties.children) || [];
  if (childrenTmp.length) {
    if (childrenTmp.length === 1) {
      childrenTmp = children[0];
    }
  }
  if (isArray(vnode)) {
    return vnode.map(function (item) {
      return cloneElement(item);
    });
  }
  var newVNode = createElement$2(vnode.type, properties);
  if (isArray(childrenTmp)) {
    var _children = childrenTmp.map(function (child) {
      return cloneElement(child, child.props);
    });
    if (_children.length === 0) {
      _children = EMPTY_CHILDREN;
    }
    if (isVNode(newVNode)) {
      newVNode.children = _children;
    }
    newVNode.props.children = _children;
  } else if (childrenTmp) {
    if (isVNode(newVNode)) {
      newVNode.children = cloneElement(childrenTmp);
    }
    newVNode.props.children = cloneElement(childrenTmp, childrenTmp.props);
  }
  return newVNode;
}

var Children = {
  map: function map(children, fn, ctx) {
    if (isNullOrUndef(children)) {
      return children;
    }
    children = Children.toArray(children);
    if (ctx && ctx !== children) {
      fn = fn.bind(ctx);
    }
    return children.map(fn);
  },
  forEach: function forEach(children, fn, ctx) {
    if (isNullOrUndef(children)) {
      return;
    }
    children = Children.toArray(children);
    if (ctx && ctx !== children) {
      fn = fn.bind(ctx);
    }
    for (var i = 0, len = children.length; i < len; i++) {
      var child = isInvalid(children[i]) ? null : children[i];
      fn(child, i, children);
    }
  },
  count: function count(children) {
    children = Children.toArray(children);
    return children.length;
  },
  only: function only(children) {
    children = Children.toArray(children);
    if (children.length !== 1) {
      throw new Error('Children.only() expects only one child.');
    }
    return children[0];
  },
  toArray: function toArray(children) {
    if (isNullOrUndef(children)) {
      return [];
    }
    if (isArray(children)) {
      var result = [];
      flatten(children, result);
      return result;
    }
    return EMPTY_CHILDREN.concat(children);
  }
};
function flatten(arr, result) {
  for (var i = 0, len = arr.length; i < len; i++) {
    var value = arr[i];
    if (isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
}

// tslint:disable:no-conditional-assignment
function hydrate(vnode, container, callback) {
  if (container !== null) {
    // lastChild causes less reflow than firstChild
    var dom = container.lastChild;
    // there should be only a single entry for the root
    while (dom) {
      var next = dom.previousSibling;
      container.removeChild(dom);
      dom = next;
    }
    return render(vnode, container, callback);
  }
}

function createPortal(children, container) {
  return {
    type: container,
    vtype: 32 /* Portal */
    , children: children,
    dom: null
  };
}

// some library check React version
// see: https://github.com/NervJS/nerv/issues/46
var version = '15.4.2';

function unmountComponentAtNode(dom) {
  var component = dom._component;
  if (isValidElement(component)) {
    unmount(component, dom);
    delete dom._component;
    return true;
  }
  return false;
}
function findDOMNode(component) {
  if (isInvalid(component)) {
    return null;
  }
  return isComponent(component) ? component.vnode.dom : isValidElement(component) ? component.dom : component;
}
function createFactory(type) {
  return createElement$2.bind(null, type);
}
var WrapperComponent = function (Component$$1) {
  function WrapperComponent() {
    Component$$1.apply(this, arguments);
  }

  if (Component$$1) WrapperComponent.__proto__ = Component$$1;
  WrapperComponent.prototype = Object.create(Component$$1 && Component$$1.prototype);
  WrapperComponent.prototype.constructor = WrapperComponent;

  WrapperComponent.prototype.getChildContext = function getChildContext$$1() {
    // tslint:disable-next-line
    return this.props.context;
  };
  WrapperComponent.prototype.render = function render$$1() {
    return this.props.children;
  };

  return WrapperComponent;
}(Component);
function unstable_renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
  // @TODO: should handle props.context?
  var wrapper = createElement$2(WrapperComponent, { context: getChildContext(parentComponent, parentComponent.context) }, vnode);
  var rendered = render(wrapper, container);
  if (callback) {
    callback.call(rendered);
  }
  return rendered;
}
function isValidElement$1(element) {
  return isValidElement(element) && (element.vtype & 6 /* Node */) > 0;
}
var unstable_batchedUpdates = nextTick;

var shim = noop$1;
shim.isRequired = noop$1;
function getShim() {
  return shim;
}
var PropTypes = {
  array: shim,
  bool: shim,
  func: shim,
  number: shim,
  object: shim,
  string: shim,
  any: shim,
  arrayOf: getShim,
  element: shim,
  instanceOf: getShim,
  node: shim,
  objectOf: getShim,
  oneOf: getShim,
  oneOfType: getShim,
  shape: getShim,
  exact: getShim,
  PropTypes: {},
  checkPropTypes: noop$1
};
PropTypes.PropTypes = PropTypes;

function createRef() {
  return {};
}
function forwardRef(cb) {
  var fn = function fn(props) {
    var ref = props.ref;
    delete props.ref;
    return cb(props, ref);
  };
  fn._forwarded = true;
  return fn;
}

function memo(component, propsAreEqual) {
  function shouldComponentUpdate(nextProps) {
    var prevRef = this.props.ref;
    var nextRef = nextProps.ref;
    if (prevRef !== nextRef) {
      Ref.detach(this.vnode, prevRef, this.dom);
      Ref.attach(this.vnode, nextRef, this.dom);
      return true;
    }
    return isFunction(propsAreEqual) ? !propsAreEqual(this.props, nextProps) : !shallowEqual(this.props, nextProps);
  }
  function Memoed(props) {
    this.shouldComponentUpdate = shouldComponentUpdate;
    return createElement$2(component, Object.assign({}, props));
  }
  Memoed._forwarded = true;
  Memoed.isMemo = true;
  return Memoed;
}

var Emiter = function Emiter(value) {
  this.handlers = [];
  this.value = value;
};
Emiter.prototype.on = function on(handler) {
  this.handlers.push(handler);
};
Emiter.prototype.off = function off(handler) {
  this.handlers = this.handlers.filter(function (h) {
    return h !== handler;
  });
};
Emiter.prototype.set = function set(value) {
  var this$1 = this;

  this.value = value;
  this.handlers.forEach(function (h) {
    return h(this$1.value);
  });
};

var uid = 0;
function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}
function createContext(defaultValue) {
  var contextProp = '__context_' + uid++ + '__';
  var Provider = function (Component$$1) {
    function Provider() {
      Component$$1.apply(this, arguments);
      this.emiter = new Emiter(this.props.value);
    }

    if (Component$$1) Provider.__proto__ = Component$$1;
    Provider.prototype = Object.create(Component$$1 && Component$$1.prototype);
    Provider.prototype.constructor = Provider;
    Provider.prototype.getChildContext = function getChildContext() {
      return obj = {}, obj[contextProp] = this.emiter, obj;
      var obj;
    };
    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (!objectIs(this.props.value, nextProps.value)) {
        this.emiter.set(nextProps.value);
      }
    };
    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(Component);
  Provider.isContextProvider = true;
  // tslint:disable-next-line: max-classes-per-file
  var Consumer = function (Component$$1) {
    function Consumer() {
      var this$1 = this;

      Component$$1.apply(this, arguments);
      this.state = {
        value: this.getContextValue()
      };
      this.onUpdate = function (value) {
        if (!objectIs(value, this$1.state.value)) {
          this$1.setState({
            value: this$1.getContextValue()
          });
        }
      };
    }

    if (Component$$1) Consumer.__proto__ = Component$$1;
    Consumer.prototype = Object.create(Component$$1 && Component$$1.prototype);
    Consumer.prototype.constructor = Consumer;
    Consumer.prototype.componentWillMount = function componentWillMount() {
      var emiter = this.context[contextProp];
      if (emiter) {
        emiter.off(this.onUpdate);
      }
    };
    Consumer.prototype.componentDidMount = function componentDidMount() {
      var emiter = this.context[contextProp];
      if (emiter) {
        emiter.on(this.onUpdate);
      }
    };
    Consumer.prototype.getContextValue = function getContextValue() {
      var emiter = this.context[contextProp];
      return isUndefined(emiter) ? defaultValue : emiter.value;
    };
    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(Component);
  Consumer.isContextConsumer = true;
  return {
    Provider: Provider,
    Consumer: Consumer,
    _id: contextProp,
    _defaultValue: defaultValue
  };
}

function Fragment(props) {
  return props.children;
}

// tslint:disable-next-line: max-line-length
var index = {
  Children: Children,
  Component: Component,
  PureComponent: PureComponent,
  createElement: createElement$2,
  cloneElement: cloneElement,
  render: render,
  nextTick: nextTick,
  options: options,
  findDOMNode: findDOMNode,
  isValidElement: isValidElement$1,
  unmountComponentAtNode: unmountComponentAtNode,
  createPortal: createPortal,
  unstable_renderSubtreeIntoContainer: unstable_renderSubtreeIntoContainer,
  hydrate: hydrate,
  createFactory: createFactory,
  unstable_batchedUpdates: unstable_batchedUpdates,
  version: version,
  PropTypes: PropTypes,
  createRef: createRef,
  forwardRef: forwardRef,
  memo: memo,
  createContext: createContext,
  renderComponent: renderComponent,
  getHooks: getHooks,
  Current: Current,
  useEffect: useEffect, useLayoutEffect: useLayoutEffect, useReducer: useReducer, useState: useState, useRef: useRef, useCallback: useCallback, useMemo: useMemo, useImperativeHandle: useImperativeHandle, useContext: useContext,
  Fragment: Fragment
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.createElement = createElement$2;
exports.cloneElement = cloneElement;
exports.render = render;
exports.nextTick = nextTick;
exports.options = options;
exports.findDOMNode = findDOMNode;
exports.isValidElement = isValidElement$1;
exports.unmountComponentAtNode = unmountComponentAtNode;
exports.createPortal = createPortal;
exports.unstable_renderSubtreeIntoContainer = unstable_renderSubtreeIntoContainer;
exports.hydrate = hydrate;
exports.createFactory = createFactory;
exports.unstable_batchedUpdates = unstable_batchedUpdates;
exports.version = version;
exports.PropTypes = PropTypes;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.memo = memo;
exports.createContext = createContext;
exports.renderComponent = renderComponent;
exports.getHooks = getHooks;
exports.Current = Current;
exports.Fragment = Fragment;
exports.useEffect = useEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useReducer = useReducer;
exports.useState = useState;
exports.useRef = useRef;
exports.useCallback = useCallback;
exports.useMemo = useMemo;
exports.useImperativeHandle = useImperativeHandle;
exports.useContext = useContext;
exports.default = index;
//# sourceMappingURL=index.esm.js.map

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }

    // Detect buggy property enumeration order in older V8 versions.

    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
    test1[5] = 'de';
    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });
    if (order2.join('') !== '0123456789') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var printWarning = function printWarning() {};

{
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + (typeof error === 'undefined' ? 'undefined' : _typeof(error)) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function () {
  {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function printWarning() {};

{
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
          err.name = 'Invariant Violation';
          throw err;
        } else if (typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      printWarning('Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

{
  (function () {
    'use strict';

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode

    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
        }
      }

      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
  module.exports = __webpack_require__(/*! ./cjs/react-is.development */ "./node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "./node_modules/taro-echarts/components/Chart/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/taro-echarts/components/Chart/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .?taro&type=template&parse=COMPONENT& */ "./node_modules/taro-echarts/components/Chart/index.js?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .?taro&type=script&parse=COMPONENT& */ "./node_modules/taro-echarts/components/Chart/index.js?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./node_modules/taro-echarts/components/Chart/index.js?taro&type=script&parse=COMPONENT&":
/*!**************************************************************************************!*\
  !*** ./node_modules/taro-echarts/components/Chart?taro&type=script&parse=COMPONENT& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!.?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-echarts/components/Chart/index.js?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/taro-echarts/components/Chart/index.js?taro&type=template&parse=COMPONENT&":
/*!****************************************************************************************!*\
  !*** ./node_modules/taro-echarts/components/Chart?taro&type=template&parse=COMPONENT& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_wxj_locality_practice_myTaroApp_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/wxj/locality/practice/myTaroApp/node_modules&outputPath=npm!../../../@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!.?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/wxj/locality/practice/myTaroApp/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-echarts/components/Chart/index.js?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_wxj_locality_practice_myTaroApp_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_wxj_locality_practice_myTaroApp_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_wxj_locality_practice_myTaroApp_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_wxj_locality_practice_myTaroApp_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./node_modules/taro-echarts/components/Chart/index.js","runtime","taro","vendors"]]]);