import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colors as c } from '../common'

const Base = styled.button`
  padding: 9px 14px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.2s ease-out;
`

const Default = styled(Base)`
  border: 1px solid ${c.blue};
  color: ${c.blue};
  &:hover {
    color: #fff;
    background: ${c.blue};
  }
`

const Colored = styled(Base)`
  border: 1px solid ${p => c[p.color]};
  color: ${p => c[p.color]};
  &:hover {
    color: #fff;
    background: ${p => c[p.color]};
  }
`

const hoverBg = {
  blue: c.blueActive,
  red: c.redActive
}
const Solid = styled(Base)`
  border: 1px solid ${p => c[p.color || 'blue']};
  background: ${p => c[p.color || 'blue']};
  color: #fff;
  &:hover {
    color: #fff;
    border: 1px solid ${p => hoverBg[p.color || 'blue']};
    background: ${p => hoverBg[p.color || 'blue']};
    outline: 0;
  }
`

const Button = ({
  text,
  color,
  solid,
  onClick,
  onMouseEnter,
  onMouseLeave
}) => {
  const actions = {
    onClick,
    onMouseEnter,
    onMouseLeave
  }
  if (solid) {
    return (
      <Solid {...actions} color={color}>
        {text}
      </Solid>
    )
  }
  if (color) {
    return <Colored {...actions}>{text}</Colored>
  }
  return <Default {...actions}>{text}</Default>
}

Button.propTypes = {
  /** 按钮中的文字 */
  text: PropTypes.string.isRequired,
  /** 按钮颜色 */
  color: PropTypes.string,
  /** 是否实色底 */
  solid: PropTypes.bool,
  /** 点击函数 */
  onClick: PropTypes.func,
  /** 鼠标悬停函数 */
  onMouseEnter: PropTypes.func,
  /** 鼠标离开函数 */
  onMouseLeave: PropTypes.func
}

Button.defaultProps = {
  color: '',
  solid: false,
  onClick: null,
  onMouseEnter: null,
  onMouseLeave: null
}

export default Button
