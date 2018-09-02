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

var IconEle = styled.i.withConfig({
  displayName: 'Icons__IconEle'
})(['font-size:', 'px;color:', ';line-height:1;display:inline-block;&:before{font-family:\'Icon\' !important;font-style:normal !important;font-weight:normal !important;font-variant:normal !important;text-transform:none !important;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;vertical-align:top;content:attr(type);}'], function (props) {
  return props.size;
}, function (props) {
  return props.color;
});

var Icon = function Icon(_ref) {
  var color = _ref.color,
      type = _ref.type,
      size$$1 = _ref.size;
  return React.createElement(IconEle, { type: type, color: color, size: size$$1 });
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
  color: colors.blue,
  size: 20
};

function genIcon(color) {
  return React.createElement(
    'svg',
    { x: '0px', y: '0px', width: '24px', height: '30px', viewBox: '0 0 24 30' },
    React.createElement(
      'rect',
      { x: '0', y: '10', width: '4', height: '10', fill: color, opacity: '0.2' },
      React.createElement('animate', {
        attributeName: 'opacity',
        attributeType: 'XML',
        values: '0.2; 1; .2',
        begin: '0s',
        dur: '0.6s',
        repeatCount: 'indefinite'
      }),
      React.createElement('animate', {
        attributeName: 'height',
        attributeType: 'XML',
        values: '10; 16; 10',
        begin: '0s',
        dur: '0.6s',
        repeatCount: 'indefinite'
      }),
      React.createElement('animate', {
        attributeName: 'y',
        attributeType: 'XML',
        values: '10; 6; 10',
        begin: '0s',
        dur: '0.6s',
        repeatCount: 'indefinite'
      })
    ),
    React.createElement(
      'rect',
      { x: '8', y: '10', width: '4', height: '10', fill: color, opacity: '0.2' },
      React.createElement('animate', {
        attributeName: 'opacity',
        attributeType: 'XML',
        values: '0.2; 1; .2',
        begin: '0.15s',
        dur: '0.6s',
        repeatCount: 'indefinite'
      }),
      React.createElement('animate', {
        attributeName: 'height',
        attributeType: 'XML',
        values: '10; 16; 10',
        begin: '0.15s',
        dur: '0.6s',
        repeatCount: 'indefinite'
      }),
      React.createElement('animate', {
        attributeName: 'y',
        attributeType: 'XML',
        values: '10; 6; 10',
        begin: '0.15s',
        dur: '0.6s',
        repeatCount: 'indefinite'
      })
    ),
    React.createElement(
      'rect',
      { x: '16', y: '10', width: '4', height: '10', fill: color, opacity: '0.2' },
      React.createElement('animate', {
        attributeName: 'opacity',
        attributeType: 'XML',
        values: '0.2; 1; .2',
        begin: '0.3s',
        dur: '0.6s',
        repeatCount: 'indefinite'
      }),
      React.createElement('animate', {
        attributeName: 'height',
        attributeType: 'XML',
        values: '10; 16; 10',
        begin: '0.3s',
        dur: '0.6s',
        repeatCount: 'indefinite'
      }),
      React.createElement('animate', {
        attributeName: 'y',
        attributeType: 'XML',
        values: '10; 6; 10',
        begin: '0.3s',
        dur: '0.6s',
        repeatCount: 'indefinite'
      })
    )
  );
}

var Wrap$1 = styled.div.withConfig({
  displayName: 'Loader__Wrap'
})(['position:', ';top:0;left:0;right:0;bottom:0;margin:auto;z-index:100;img{position:absolute;', ';margin:auto;left:', ';width:', ';}svg{position:absolute;', ';margin:auto;left:4px;width:19px;}'], function (props) {
  return props.fullScreen ? 'fixed' : 'absolute';
}, pos({ t: 0, l: 0, r: 0, b: 0 }), function (props) {
  return props.fullScreen ? '0' : '4px';
}, function (props) {
  return props.fullScreen ? '24px' : '19px';
}, pos({ t: 0, l: 0, r: 0, b: 0 }));

var Bg = styled.div.withConfig({
  displayName: 'Loader__Bg'
})(['', ';background:', ';border-radius:', ';'], size('100%'), function (p) {
  if (p.fullScreen) {
    return 'rgba(255,255,255,0.9)';
  }
  if (p.clear) {
    return 'rgba(255,255,255,0.7)';
  }
  return colors.space;
}, function (props) {
  return props.fullScreen ? '0' : '8px';
});

var Loader = function Loader(_ref) {
  var _ref$fullScreen = _ref.fullScreen,
      fullScreen = _ref$fullScreen === undefined ? false : _ref$fullScreen,
      clear = _ref.clear,
      iconColor = _ref.iconColor;

  var color = void 0;
  if (iconColor === 'blue' || fullScreen) {
    color = colors.blue;
  } else if (iconColor === 'white') {
    color = '#FFFFFF';
  } else {
    color = '#333333';
  }

  return React.createElement(
    Wrap$1,
    { fullScreen: fullScreen },
    React.createElement(Bg, { fullScreen: fullScreen, clear: clear }),
    genIcon(color)
  );
};

Loader.propTypes = {
  /** 是否全屏 */
  fullScreen: PropTypes.bool,
  /** clear: true - 底色更透明 */
  clear: PropTypes.bool,
  /** 三个矩形的颜色: 'blue' / 'white' / default: '#333' */
  iconColor: PropTypes.string
};
Loader.defaultProps = {
  fullScreen: false,
  clear: false,
  iconColor: ''
};

var Wrap$2 = styled.div.withConfig({
  displayName: 'Nothing__Wrap'
})(['', ';align-items:center;display:flex;'], size('100%'));

var Content = styled.div.withConfig({
  displayName: 'Nothing__Content'
})(['margin:auto;text-align:center;i{margin-bottom:10px;}span{font-size:15px;margin-bottom:10px;display:block;}']);

var Nothing$$1 = function Nothing$$1(_ref) {
  var text = _ref.text,
      children = _ref.children;
  return React.createElement(
    Wrap$2,
    null,
    React.createElement(
      Content,
      null,
      React.createElement(Icon, { color: colors.gray, type: '2', size: 50 }),
      React.createElement(
        'span',
        null,
        text
      ),
      children
    )
  );
};

Nothing$$1.propTypes = {
  /** Icon 下面的文字 */
  text: PropTypes.string,
  /** 子元素 */
  children: PropTypes.object // eslint-disable-line react/forbid-prop-types
};
Nothing$$1.defaultProps = {
  text: '',
  children: null
};

exports.Button = Button;
exports.Icon = Icon;
exports.Loader = Loader;
exports.Nothing = Nothing$$1;
