'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BrandHpeElementOutline = function BrandHpeElementOutline(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'BrandHpeElementOutline' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { fill: '#01A982' },
        _react2.default.createElement('path', { d: 'M0,12 L40,12 L40,0 L0,0 L0,12 Z M3,3 L37,3 L37,9 L3,9 L3,3 Z' })
      )
    )
  );
};

exports.default = BrandHpeElementOutline;