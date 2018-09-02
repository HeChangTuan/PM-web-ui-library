'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
 * @param {Object} params
 * @param {string} params.t top
 * @param {string} params.l left
 * @param {string} params.r right
 * @param {string} params.b bottom
 */
var pos = function pos() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { t: 'auto', l: 'auto', r: 'auto', b: 'auto' };
  return '\n    top: ' + params.t + ';\n    right: ' + params.r + ';\n    bottom: ' + params.b + ';\n    left: ' + params.l + ';\n  ';
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

exports.ossPath = ossPath;
exports.mq = mq;
exports.fontPath = fontPath;
exports.imagePath = imagePath;
exports.pos = pos;
exports.size = size;
exports.bgContain = bgContain;
exports.bgCover = bgCover;
exports.clearfix = clearfix;
exports.colors = colors;
