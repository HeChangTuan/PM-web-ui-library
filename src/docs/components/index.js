// import React from 'react'
import styled from 'styled-components'
import { colors as c } from '../../lib/common'

export const Desc = styled.span`
  border: 1px solid #ccc;
  font-size: 14px;
  border-radius: 4px;
  text-align: center;
  padding: 4px 20px;
  margin: 0 20px 20px 5px;
  display: inline-block;
`

export const UiWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid ${c.line};
  border-radius: 8px;
  margin: 10px;
  background: ${props => props.bgColor};
`

// const Desc = ({ children }) => <DescBox>{children}</DescBox>
