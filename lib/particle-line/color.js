"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Color =
/*#__PURE__*/
function () {
  function Color(min) {
    _classCallCheck(this, Color);

    this.min = min || 0;

    this._init(this.min);
  }

  _createClass(Color, [{
    key: "_init",
    value: function _init(min) {
      this.r = this.colorValue(min);
      this.g = this.colorValue(min);
      this.b = this.colorValue(min);
      this.style = this.createColorStyle(this.r, this.g, this.b);
    }
  }, {
    key: "colorValue",
    value: function colorValue(min) {
      return Math.floor(Math.random() * 255 + min);
    }
  }, {
    key: "createColorStyle",
    value: function createColorStyle(r, g, b) {
      return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", .8)");
    }
  }]);

  return Color;
}();

exports["default"] = Color;