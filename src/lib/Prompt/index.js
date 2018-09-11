import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { colors as c } from '../common'

const promptKF = keyframes`
  0% { top: -30vw; }
  8% { top: 0vw; }
  90% { top: 0vw; }
  100% { top: -30vw; }
`
const Wrap = styled.div`
  position: ${p => (p.absolute ? 'absolute' : 'fixed')};
  left: 0;
  top: 0;
  width: 100vw;
  padding: 0;
  z-index: 9999;
  animation: ${promptKF} 2.5s forwards cubic-bezier(0.6, 0, 0.4, 1);
  span {
    color: #000;
    font-weight: bold;
    font-family: 'PingFangSC-Medium';
    font-size: 14px;
    display: block;
    background: ${p => c[p.bgColor]};
    text-align: center;
    padding: 14px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
`

const Prompt = ({ text, bgColor, absolute }) => (
  <Wrap bgColor={bgColor} absolute={absolute}>
    <span>{text}</span>
  </Wrap>
)

Prompt.propTypes = {
  /** 文字内容 */
  text: PropTypes.string.isRequired,
  /** 是否绝对定位，默认为 fixed 在页头出现 */
  absolute: PropTypes.bool,
  /** 子元素 */
  bgColor: PropTypes.string // eslint-disable-line react/forbid-prop-types
}
Prompt.defaultProps = {
  bgColor: 'yellow',
  absolute: false
}

export default Prompt
