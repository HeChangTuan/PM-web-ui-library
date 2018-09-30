import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors as c } from '../common'

const Wrap = styled.div`
  width: 100%;
  padding: 10px;
  line-height: 1;
  display: flex;
  align-items: center;
  top: ${p => (p.fixed ? 0 : 'auto')};
  position: ${p => (p.fixed ? 'fixed' : 'relative')};
  background: ${p => p.bgColor};
  height: ${p => p.h};
  z-index: ${p => p.fixed ? 10 : 'auto'};
  h2 {
    color: ${p => (p.bgColor !== '#fff' ? '#fff' : c.grayText)};
  }
  aside {
    margin-left: auto;
  }
`

const Text = styled.div`
  h2 {
    width: 100%;
    margin: 0;
    font-family: PingFangSC-Thin;
    font-size: 24px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: lighter;
  }
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const Header = ({ text, childLeft, childRight, bgColor = '#fff', fixed }) => {
  const textEle = text && (
    <Text>
      <h2>{text}</h2>
    </Text>
  )
  return (
    <Wrap
      fixed={fixed}
      bgColor={bgColor}
      h={childLeft || childRight ? 'auto' : '46px'}
    >
      {textEle}
      {!text && childLeft}
      <aside>{childRight}</aside>
    </Wrap>
  )
}

Header.propTypes = {
  /** 文字内容 */
  text: PropTypes.string,
  /** 左边子元素 */
  childLeft: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** 右边子元素 */
  childRight: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** 背景颜色，#fff, #000 等 */
  bgColor: PropTypes.string,
  /** 是否固定在页面顶部 */
  fixed: PropTypes.bool
}

Header.defaultProps = {
  text: '',
  childLeft: null,
  childRight: null,
  bgColor: '#fff',
  fixed: false
}

export default Header
