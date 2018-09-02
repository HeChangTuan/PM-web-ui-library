import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { pos, colors as c, size } from '../common'

function genIcon(color) {
  return (
    <svg x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30">
      <rect x="0" y="10" width="4" height="10" fill={color} opacity="0.2">
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 16; 10"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 6; 10"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="8" y="10" width="4" height="10" fill={color} opacity="0.2">
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 16; 10"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 6; 10"
          begin="0.15s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="16" y="10" width="4" height="10" fill={color} opacity="0.2">
        <animate
          attributeName="opacity"
          attributeType="XML"
          values="0.2; 1; .2"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="height"
          attributeType="XML"
          values="10; 16; 10"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          attributeType="XML"
          values="10; 6; 10"
          begin="0.3s"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  )
}

const Wrap = styled.div`
  position: ${props => (props.fullScreen ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 100;
  img {
    position: absolute;
    ${pos({ t: 0, l: 0, r: 0, b: 0 })};
    margin: auto;
    left: ${props => (props.fullScreen ? '0' : '4px')};
    width: ${props => (props.fullScreen ? '24px' : '19px')};
  }
  svg {
    position: absolute;
    ${pos({ t: 0, l: 0, r: 0, b: 0 })};
    margin: auto;
    left: 4px;
    width: 19px;
  }
`

const Bg = styled.div`
  ${size('100%')};
  background: ${p => {
    if (p.fullScreen) {
      return 'rgba(255,255,255,0.9)'
    }
    if (p.clear) {
      return 'rgba(255,255,255,0.7)'
    }
    return c.space
  }};
  border-radius: ${props => (props.fullScreen ? '0' : '8px')};
`

const Loader = ({ fullScreen = false, clear, iconColor }) => {
  let color
  if (iconColor === 'blue' || fullScreen) {
    color = c.blue
  } else if (iconColor === 'white') {
    color = '#FFFFFF'
  } else {
    color = '#333333'
  }

  return (
    <Wrap fullScreen={fullScreen}>
      <Bg fullScreen={fullScreen} clear={clear} />
      {genIcon(color)}
    </Wrap>
  )
}

Loader.propTypes = {
  /** 是否全屏 */
  fullScreen: PropTypes.bool,
  /** clear: true - 底色更透明 */
  clear: PropTypes.bool,
  /** 三个矩形的颜色: 'blue' / 'white' / default: '#333' */
  iconColor: PropTypes.string
}
Loader.defaultProps = {
  fullScreen: false,
  clear: false,
  iconColor: ''
}

export default Loader
