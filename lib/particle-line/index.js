"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("./color"));

var _dot = _interopRequireDefault(require("./dot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var minWidth = 1200;
var minHeight = 700;

var ParticleLine =
/*#__PURE__*/
function () {
  function ParticleLine(tagId, options) {
    _classCallCheck(this, ParticleLine);

    this.tagId = tagId;
    this.options = options;
    this.init();
  }

  _createClass(ParticleLine, [{
    key: "init",
    value: function init() {
      var canvas = document.querySelector(this.tagId);
      var ctx = canvas.getContext('2d');
      canvas.width = document.body.clientWidth > minWidth ? document.body.clientWidth : minWidth;
      canvas.height = document.body.clientHeight > minHeight ? document.body.clientHeight : minHeight;
      ctx.lineWidth = this.options && this.options.lineWidth || 0.3;
      ctx.strokeStyle = new _color["default"](150).style;
      this.dots = {
        nb: this.options && this.options.dotsNumber || 100,
        distance: this.options && this.options.dotsDistance || 100,
        array: []
      };
      this.canvas = canvas;
      this.ctx = ctx;
      this.color = new _color["default"]();
      this.createDots(this.ctx, this.canvas.width, this.canvas.height);
      this.animateDots();
      this.hoverEffect();
    }
  }, {
    key: "hoverEffect",
    value: function hoverEffect() {
      var _this = this;

      if (this.options && this.options.hoverEffect) {
        this.canvas.addEventListener('mousemove', function (e) {
          if (_this.dots.array.length > _this.dots.nb) {
            _this.dots.array.pop();
          }

          _this.dots.array.push(new _dot["default"](_this.ctx, _this.canvas.width, _this.canvas.height, e.pageX, e.pageY));
        });
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      var width = document.body.clientWidth > minWidth ? document.body.clientWidth : minWidth;
      var height = document.body.clientHeight > minHeight ? document.body.clientHeight : minHeight;
      this.canvas.width = width;
      this.canvas.height = height;
      this.createDots(this.ctx, width, height);
    }
  }, {
    key: "mixComponents",
    value: function mixComponents(comp1, weight1, comp2, weight2) {
      return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
    }
  }, {
    key: "averageColorStyles",
    value: function averageColorStyles(dot1, dot2) {
      var color1 = dot1.color;
      var color2 = dot2.color;
      var r = this.mixComponents(color1.r, dot1.radius, color2.r, dot2.radius);
      var g = this.mixComponents(color1.g, dot1.radius, color2.g, dot2.radius);
      var b = this.mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
      return this.color.createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
    }
  }, {
    key: "createDots",
    value: function createDots(ctx, canvasWidth, canvasHeight) {
      this.dots.array = [];

      for (var i = 0; i < this.dots.nb; i++) {
        this.dots.array.push(new _dot["default"](ctx, canvasWidth, canvasHeight));
      }
    }
  }, {
    key: "moveDots",
    value: function moveDots() {
      for (var i = 0; i < this.dots.nb; i++) {
        var dot = this.dots.array[i];

        if (dot.y < 0 || dot.y > this.canvas.height) {
          dot.vx = dot.vx; // eslint-disable-line

          dot.vy = -dot.vy;
        } else if (dot.x < 0 || dot.x > this.canvas.width) {
          dot.vx = -dot.vx;
          dot.vy = dot.vy; // eslint-disable-line
        }

        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    }
  }, {
    key: "connectDots",
    value: function connectDots() {
      for (var i = 0; i < this.dots.array.length; i++) {
        for (var j = 0; j < this.dots.array.length; j++) {
          var iDot = this.dots.array[i];
          var jDot = this.dots.array[j];

          if (iDot.x - jDot.x < this.dots.distance && iDot.y - jDot.y < this.dots.distance && iDot.x - jDot.x > -this.dots.distance && iDot.y - jDot.y > -this.dots.distance) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.averageColorStyles(iDot, jDot);
            this.ctx.moveTo(iDot.x, iDot.y);
            this.ctx.lineTo(jDot.x, jDot.y);
            this.ctx.stroke();
            this.ctx.closePath();
          }
        }
      }
    }
  }, {
    key: "drawDots",
    value: function drawDots() {
      for (var i = 0; i < this.dots.array.length; i++) {
        var dot = this.dots.array[i];
        dot.draw();
      }
    }
  }, {
    key: "animateDots",
    value: function animateDots() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawDots();
      this.connectDots();
      this.moveDots();
      requestAnimationFrame(this.animateDots.bind(this));
    }
  }]);

  return ParticleLine;
}();

exports["default"] = ParticleLine;