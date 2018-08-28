import React from 'react'
import styled from 'styled-components'

const DescBox = styled.span`
  border: 1px solid #ccc;
  font-size: 14px;
  border-radius: 4px;
  text-align: center;
  padding: 4px 20px;
  margin: 0 20px 20px 5px;
  display: inline-block;
`

const Desc = ({ children }) => <DescBox>{children}</DescBox>

export { Desc }
