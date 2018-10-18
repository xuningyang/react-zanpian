exports.ids = [8];
exports.modules = {

/***/ "./src/common/parse-url.js":
/*!*********************************!*\
  !*** ./src/common/parse-url.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar parseUrl = function parseUrl(search) {\n  var paramPart = search.substr(1).split('&');\n  return paramPart.reduce(function (res, item) {\n    if (item) {\n      var parts = item.split('=');\n      res[parts[0]] = parts[1] || '';\n    }\n\n    return res;\n  }, {});\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseUrl);\n\n//# sourceURL=webpack:///./src/common/parse-url.js?");

/***/ }),

/***/ "./src/components/list/index.js":
/*!**************************************!*\
  !*** ./src/components/list/index.js ***!
  \**************************************/
/*! exports provided: List, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"List\", function() { return List; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _actions_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/list */ \"./src/actions/list.js\");\n/* harmony import */ var _reducers_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/list */ \"./src/reducers/list.js\");\nvar _dec, _class;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\n\n\n\nvar List = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(function (state, props) {\n  return {\n    list: Object(_reducers_list__WEBPACK_IMPORTED_MODULE_5__[\"getList\"])(state, 'list')\n  };\n}, function (dispatch) {\n  return {\n    listLoad: Object(redux__WEBPACK_IMPORTED_MODULE_2__[\"bindActionCreators\"])(_actions_list__WEBPACK_IMPORTED_MODULE_4__[\"listLoad\"], dispatch)\n  };\n}), Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(_class = _dec(_class =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(List, _React$Component);\n\n  function List(props) {\n    var _this;\n\n    _classCallCheck(this, List);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, props));\n    _this.state = {\n      limit: 20,\n      order: 'addtime',\n      day: 365\n    };\n    _this.load = _this.load.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n\n  _createClass(List, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this$props = this.props,\n          list = _this$props.list,\n          scrollLoad = _this$props.scrollLoad;\n      if (!list.data) this.load();\n      if (scrollLoad) ArriveFooter.add('list', this.load);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      var scrollLoad = this.props.scrollLoad;\n      if (scrollLoad) ArriveFooter.remove('list');\n    }\n  }, {\n    key: \"load\",\n    value: function () {\n      var _load = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee() {\n        var listLoad, _this$state, limit, order, day;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                listLoad = this.props.listLoad;\n                _this$state = this.state, limit = _this$state.limit, order = _this$state.order, day = _this$state.day;\n                _context.next = 4;\n                return listLoad({\n                  id: 'list',\n                  limit: limit,\n                  order: order,\n                  day: day\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      return function load() {\n        return _load.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props$list = this.props.list,\n          _this$props$list$data = _this$props$list.data,\n          data = _this$props$list$data === void 0 ? [] : _this$props$list$data,\n          loading = _this$props$list.loading; // console.log(data, loading, 'listlist')\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"card\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", {\n        className: \"card-header\"\n      }, \"listlist\"), data.map(function (item) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          key: item.id,\n          style: {\n            height: 100\n          }\n        }, item.title);\n      }));\n    }\n  }]);\n\n  return List;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class) || _class);\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\n\n//# sourceURL=webpack:///./src/components/list/index.js?");

/***/ }),

/***/ "./src/components/shell.js":
/*!*********************************!*\
  !*** ./src/components/shell.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_parse_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/parse-url */ \"./src/common/parse-url.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n // 壳组件，用于给页面组件，套一个外壳\n// 这样可以通过壳组件，给每个页面，传递参数\n\nvar Shell = function Shell(Component) {\n  if (!Component.loadData) {\n    Component.loadData = function (_ref) {\n      var store = _ref.store,\n          match = _ref.match;\n      return new Promise(\n      /*#__PURE__*/\n      function () {\n        var _ref2 = _asyncToGenerator(\n        /*#__PURE__*/\n        regeneratorRuntime.mark(function _callee(resolve, reject) {\n          return regeneratorRuntime.wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  resolve({\n                    code: 200\n                  });\n\n                case 1:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee, this);\n        }));\n\n        return function (_x, _x2) {\n          return _ref2.apply(this, arguments);\n        };\n      }());\n    };\n  }\n\n  var Shell =\n  /*#__PURE__*/\n  function (_React$Component) {\n    _inherits(Shell, _React$Component);\n\n    function Shell(props) {\n      _classCallCheck(this, Shell);\n\n      return _possibleConstructorReturn(this, _getPrototypeOf(Shell).call(this, props));\n    } // 组件加载完成\n\n\n    _createClass(Shell, [{\n      key: \"componentWillMount\",\n      value: function componentWillMount() {\n        var search = this.props.location.search;\n        this.props.location.params = search ? Object(_common_parse_url__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(search) : null; // console.log('进入组件')\n      } // 组件加载完成\n\n    }, {\n      key: \"componentDidMount\",\n      value: function componentDidMount() {} // console.log('组件加载完成');\n      // 更新组件\n\n    }, {\n      key: \"componentDidUpdate\",\n      value: function componentDidUpdate() {} // console.log('组件加载更新了');\n      // 组件被卸载\n\n    }, {\n      key: \"componentWillUnmount\",\n      value: function componentWillUnmount() {// console.log('组件加载被卸载');\n      }\n    }, {\n      key: \"render\",\n      value: function render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, this.props));\n      }\n    }]);\n\n    return Shell;\n  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n  _defineProperty(Shell, \"defaultProps\", {\n    loadData: Component.loadData || null\n  });\n\n  Shell.contextTypes = {};\n  Shell.propTypes = {};\n\n  var mapStateToProps = function mapStateToProps(state) {\n    return {};\n  };\n\n  var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {\n    return {};\n  };\n\n  return Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Shell);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shell);\n\n//# sourceURL=webpack:///./src/components/shell.js?");

/***/ }),

/***/ "./src/pages/list/index.js":
/*!*********************************!*\
  !*** ./src/pages/list/index.js ***!
  \*********************************/
/*! exports provided: BangumiList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BangumiList\", function() { return BangumiList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/list */ \"./src/components/list/index.js\");\n/* harmony import */ var _components_shell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shell */ \"./src/components/shell.js\");\nvar _class;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar BangumiList = Object(_components_shell__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_class =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(BangumiList, _React$Component);\n\n  function BangumiList() {\n    _classCallCheck(this, BangumiList);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(BangumiList).apply(this, arguments));\n  }\n\n  _createClass(BangumiList, [{\n    key: \"render\",\n    value: function render() {\n      return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        key: \"list\",\n        scrollLoad: true\n      })];\n    }\n  }]);\n\n  return BangumiList;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BangumiList);\n\n//# sourceURL=webpack:///./src/pages/list/index.js?");

/***/ })

};;