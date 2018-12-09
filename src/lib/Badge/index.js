import React from 'react'
import styled from 'styled-components'

import { colors as c } from '../common'
import Icon from '../Icons'

const Wrap = styled.div`
  background-color: ${p => p.bgColor};
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: 2px 2px 2px 3px;
  width: 68px;
  margin-top: 2px;
  span {
    font-family: PingFangSC-Medium;
    font-size: 11px;
    color: #fff;
    margin-left: 1px;
    line-height: 1;
  }
`

const Badge = ({
  iconColor = '#07955a',
  iconType,
  text = '家庭医生',
  bgColor = c.green,
  customStyle = {}
}) => (
  <Wrap bgColor={bgColor} style={{ ...customStyle }}>
    {iconType ? <Icon type={iconType} color={iconColor} size={14} /> : null}
    <span>{text}</span>
  </Wrap>
)

export default Badge
