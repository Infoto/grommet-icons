"use strict";

exports.__esModule = true;
exports.Hpe = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Hpe = function Hpe(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Hpe"
  }, props), _react["default"].createElement("path", {
    fill: "#00C781",
    fillRule: "evenodd",
    d: "M5.32907052e-15,9 L24,9 L24,15 L5.32907052e-15,15 L5.32907052e-15,9 Z M1.5,10.5 L22.5,10.5 L22.5,13.5 L1.5,13.5 L1.5,10.5 Z"
  }));
};

exports.Hpe = Hpe;