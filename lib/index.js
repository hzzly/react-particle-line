"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _particleLine = _interopRequireDefault(require("./particle-line"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  z-index: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ParticleLineWraper = _styledComponents["default"].div(_templateObject());

var ChildWraper = _styledComponents["default"].div(_templateObject2());

var CanvasWraper = _styledComponents["default"].canvas.attrs({
  id: 'react-particle-line-canvas'
})(_templateObject3());

var ReactParticleLine =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactParticleLine, _Component);

  function ReactParticleLine() {
    _classCallCheck(this, ReactParticleLine);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReactParticleLine).apply(this, arguments));
  }

  _createClass(ReactParticleLine, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          lineWidth = _this$props.lineWidth,
          dotsNumber = _this$props.dotsNumber,
          dotsDistance = _this$props.dotsDistance,
          hoverEffect = _this$props.hoverEffect;
      new _particleLine["default"]('#react-particle-line-canvas', {
        lineWidth: lineWidth,
        dotsNumber: dotsNumber,
        dotsDistance: dotsDistance,
        hoverEffect: hoverEffect
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(ParticleLineWraper, null, _react["default"].createElement(ChildWraper, null, this.props.children), _react["default"].createElement(CanvasWraper, null));
    }
  }]);

  return ReactParticleLine;
}(_react.Component);

exports["default"] = ReactParticleLine;

_defineProperty(ReactParticleLine, "propTypes", {
  lineWidth: _propTypes["default"].number,
  dotsNumber: _propTypes["default"].number,
  dotsDistance: _propTypes["default"].number,
  hoverEffect: _propTypes["default"].bool
});

_defineProperty(ReactParticleLine, "defaultProps", {
  lineWidth: 0.3,
  dotsNumber: 100,
  dotsDistance: 100,
  hoverEffect: true
});