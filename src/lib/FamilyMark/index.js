import React from 'react'
import styled from 'styled-components'

import { colors as c } from '../common'
import Icon from '../Icons'

const Wrap = styled.div`
  background-color: ${c.green};
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

const FamilyMark = () => (
  <Wrap>
    <Icon type="4" color="#07955a" size={14} />
    <span>家庭医生</span>
  </Wrap>
)

export default FamilyMark
