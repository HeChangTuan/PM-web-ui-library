import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { size, colors as c } from '../common'
import Icon from '../Icons'

const Wrap = styled.div`
  ${size('100%')};
  /* height: 110px; */
  /* margin: auto; */
  /* text-align: center; */
  /* position: absolute; */
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  align-items: center;
  display: flex;
`

const Content = styled.div`
  margin: auto;
  text-align: center;
  i {
    margin-bottom: 10px;
  }
  span {
    font-size: 15px;
    margin-bottom: 10px;
    display: block;
  }
`

const Nothing = ({ text, children }) => (
  <Wrap>
    <Content>
      <Icon color={c.gray} type="2" size={50} />
      <span>{text}</span>
      {children}
    </Content>
  </Wrap>
)

Nothing.propTypes = {
  /** Icon 下面的文字 */
  text: PropTypes.string,
  /** 子元素 */
  children: PropTypes.object // eslint-disable-line react/forbid-prop-types
}
Nothing.defaultProps = {
  text: '',
  children: null
}

export default Nothing
