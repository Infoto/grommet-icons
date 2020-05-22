"use strict";

exports.__esModule = true;
exports.Beacon = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Beacon = function Beacon(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Beacon"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.51472 0.514648C1.34424 2.68513 0 5.6865 0 8.99993C0 12.3134 1.34424 15.3147 3.51472 17.4852L4.92893 16.071C3.11819 14.2603 2 11.7616 2 8.99993C2 6.23823 3.11819 3.7396 4.92893 1.92886L3.51472 0.514648ZM6.34315 3.34308C4.89653 4.7897 4 6.79107 4 8.99993C4 11.2088 4.89653 13.2102 6.34315 14.6568L7.75736 13.2426C6.67048 12.1557 6 10.6571 6 8.99993C6 7.3428 6.67048 5.84417 7.75736 4.75729L6.34315 3.34308ZM12 4.99995C9.79086 4.99995 8 6.79081 8 8.99995C8 10.8638 9.27477 12.4299 11 12.8739V23H13V12.8739C14.7252 12.4299 16 10.8638 16 8.99995C16 6.79081 14.2091 4.99995 12 4.99995ZM10 8.99995C10 7.89538 10.8954 6.99995 12 6.99995C13.1046 6.99995 14 7.89538 14 8.99995C14 10.1045 13.1046 11 12 11C10.8954 11 10 10.1045 10 8.99995ZM17.6568 3.34308C19.1034 4.7897 20 6.79107 20 8.99993C20 11.2088 19.1034 13.2102 17.6568 14.6568L16.2426 13.2426C17.3295 12.1557 18 10.6571 18 8.99993C18 7.3428 17.3295 5.84417 16.2426 4.75729L17.6568 3.34308ZM20.4852 0.514648C22.6557 2.68513 23.9999 5.6865 23.9999 8.99993C23.9999 12.3134 22.6557 15.3147 20.4852 17.4852L19.071 16.071C20.8817 14.2603 21.9999 11.7616 21.9999 8.99993C21.9999 6.23823 20.8817 3.7396 19.071 1.92886L20.4852 0.514648Z",
    fill: "black"
  }));
};

exports.Beacon = Beacon;