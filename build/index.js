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

exports.Button = Button;
