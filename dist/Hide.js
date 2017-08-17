'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xl = exports.lg = exports.md = exports.sm = exports.xs = exports.hidden = exports.breakpoints = undefined;

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var breakpoints = exports.breakpoints = {
  xs: '@media screen and (max-width: 40em)',
  sm: '@media screen and (min-width: 40em) and (max-width: 52em)',
  md: '@media screen and (min-width: 52em) and (max-width: 64em)',
  lg: '@media screen and (min-width: 64em)',
  xl: '@media screen and (min-width: 84em)'
};

var hidden = exports.hidden = function hidden(key) {
  return function (props) {
    return props[key] ? _defineProperty({}, breakpoints[key], {
      display: 'none'
    }) : null;
  };
};

var xs = exports.xs = hidden('xs');
var sm = exports.sm = hidden('sm');
var md = exports.md = hidden('md');
var lg = exports.lg = hidden('lg');
var xl = exports.xl = hidden('xl');

var Hide = _styledComponents2.default.div([], xs, sm, md, lg, xl);

exports.default = Hide;
