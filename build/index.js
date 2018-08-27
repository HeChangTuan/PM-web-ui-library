'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));
var ReactDOM = _interopDefault(require('react-dom'));

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n  background: blue;\n  width: 100px;\n  height: 100px;\n'], ['\n  background: blue;\n  width: 100px;\n  height: 100px;\n']);

var Wrap = styled.div(_templateObject);

var Button = function Button() {
  return React.createElement(
    Wrap,
    null,
    'Hello'
  );
};

var App = function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(Button, null)
  );
};

window.onload = function () {
  ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
};
