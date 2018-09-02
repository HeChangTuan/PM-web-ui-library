'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));
var PropTypes = _interopDefault(require('prop-types'));

var Wrap = styled.div.withConfig({
  displayName: 'Button__Wrap'
})(['background:blue;width:100px;height:100px;']);

var Button = function Button(_ref) {
  var text = _ref.text;
  return React.createElement(
    Wrap,
    null,
    React.createElement(
      'button',
      { type: 'button' },
      text
    )
  );
};

Button.propTypes = {
  /** The description for myProp */
  text: PropTypes.string.isRequired
};

var ossPath = 'https://peoplesmedic.oss-cn-shenzhen.aliyuncs.com';

var mq = {
  mobi: 'screen and (max-width: 480px)',
  desk: 'screen and (min-width: 481px)',
  sml: 'screen and (max-width: 1024px)',
  mid: 'screen and (min-width: 481px) and (max-width: 1300px)',
  big: 'screen and (min-width: 1301px)'
};

var fontPath = ossPath + '/assets/fonts';
var imagePath = ossPath + '/assets/images';

/**
 *
 * @param {pos} Object
 * t: top,
 * l: left,
 * r: right,
 * b: bottom
 */
var pos = function pos(_ref) {
  var _ref$t = _ref.t,
      t = _ref$t === undefined ? 'auto' : _ref$t,
      _ref$l = _ref.l,
      l = _ref$l === undefined ? 'auto' : _ref$l,
      _ref$r = _ref.r,
      r = _ref$r === undefined ? 'auto' : _ref$r,
      _ref$b = _ref.b,
      b = _ref$b === undefined ? 'auto' : _ref$b;
  return '\n    top: ' + t + ';\n    right: ' + r + ';\n    bottom: ' + b + ';\n    left: ' + l + ';\n  ';
};

/**
 *
 * @param {number / string} w: width
 * @param {number / string} h: height
 * when passed number, return ${w}px,
 * else return String
 */
var size = function size(w, h) {
  var _w = w;
  var _h = h;
  if (!h) {
    _h = w;
  }
  if (typeof _w === 'number') {
    _w = _w + 'px';
  }
  if (typeof _h === 'number') {
    _h = _h + 'px';
  }
  return '\n    width: ' + _w + ';\n    height: ' + _h + ';\n  ';
};

var bgContain = function bgContain(url) {
  return '\n    background-image: url(' + url + ');\n    background-size: contain;\n    background-repeat: no-repeat;\n  ';
};

var bgCover = function bgCover(url) {
  return '\n    background-image: url(' + url + ');\n    background-size: cover;\n    background-repeat: no-repeat;\n  ';
};

var clearfix = function clearfix() {
  return '\n  &:before,\n  &:after {\n      content: "";\n      display: table;\n  }\n  &:after {\n      clear: both;\n  }\n';
};

var colors = {
  gray: '#9b9b9b',
  grayText: '#646464',
  grayActive: '#9b9b9b',
  line: '#d8d8d8',
  space: '#ebebeb',
  active: 'linear-gradient(to right, #ffffff 0%, #ebebeb 100%)',
  yellow: '#ffd629',
  blue: '#0b85f7',
  blueLight: '#c3efff',
  blueActive: 'rgb(0, 103, 199)',
  red: '#ff4d3c',
  redActive: '#ff4d3c',
  green: '#1de189',
  greenActive: '#1de189',
  grass: '#0e874a',
  grassActive: '#0e874a',
  orange: '#ff8e00'
};

var common = {
  ossPath: ossPath,
  mq: mq,
  fontPath: fontPath,
  imagePath: imagePath,
  pos: pos,
  size: size,
  bgContain: bgContain,
  bgCover: bgCover,
  clearfix: clearfix,
  colors: colors
};

var colors$1 = common.colors;


var IconEle = styled.i.withConfig({
  displayName: 'Icons__IconEle'
})(['font-size:', 'px;color:', ';line-height:1;display:inline-block;&:before{font-family:\'Icon\' !important;font-style:normal !important;font-weight:normal !important;font-variant:normal !important;text-transform:none !important;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;vertical-align:top;content:attr(type);}'], function (props) {
  return props.size;
}, function (props) {
  return colors$1[props.color];
});

var Icon = function Icon(_ref) {
  var color = _ref.color,
      type = _ref.type,
      size = _ref.size;
  return React.createElement(IconEle, { type: type, color: color, size: size });
};

Icon.propTypes = {
  /** Color */
  color: PropTypes.string,
  /** Character mapping */
  type: PropTypes.string.isRequired,
  /** Size */
  size: PropTypes.number
};

Icon.defaultProps = {
  color: 'blue',
  size: 20
};

exports.Button = Button;
exports.Icon = Icon;
exports.common = common;
