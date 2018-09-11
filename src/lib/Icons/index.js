import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../common'

export const IconEle = styled.i`
  font-size: ${props => props.size}px;
  color: ${props => props.color};
  line-height: 1;
  display: inline-block;
  &:before {
    font-family: 'Icon' !important;
    font-style: normal !important;
    font-weight: normal !important;
    font-variant: normal !important;
    text-transform: none !important;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    vertical-align: top;
    content: attr(type);
  }
`

const Icon = ({ color, type, size }) => (
  <IconEle type={type} color={color} size={size} />
)

Icon.propTypes = {
  /** Color */
  color: PropTypes.string,
  /** Character mapping */
  type: PropTypes.string.isRequired,
  /** Size */
  size: PropTypes.number
}

Icon.defaultProps = {
  color: colors.blue,
  size: 20
}

export default Icon
