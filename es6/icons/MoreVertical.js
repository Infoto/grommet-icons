function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIcon } from '../StyledIcon';
export var MoreVertical = function MoreVertical(props) {
  return React.createElement(StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "MoreVertical"
  }, props), React.createElement("path", {
    d: "M14,14 L10,14 L10,10 L14,10 L14,14 Z M14,7 L10,7 L10,3 L14,3 L14,7 Z M14,21 L10,21 L10,17 L14,17 L14,21 Z"
  }));
};