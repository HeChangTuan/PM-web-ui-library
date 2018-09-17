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

const Header = ({ text, children, bgColor = '#fff', fixed, font }) => {
  const fontStyle = font || {}

  return (
    <Wrap fixed={fixed} bgColor={bgColor} h={children ? 'auto' : '46px'}>
      <Text>
        <h2 style={{ ...fontStyle }}>{text}</h2>
      </Text>
      <aside>{children}</aside>
    </Wrap>
  )
}

Header.propTypes = {
  /** 文字内容 */
  text: PropTypes.string,
  /** 子元素 */
  children: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /** 背景颜色，#fff, #000 等 */
  bgColor: PropTypes.string,
  /** 是否固定在页面顶部 */
  fixed: PropTypes.bool
}

Header.defaultProps = {
  text: '',
  children: null,
  bgColor: '#fff',
  fixed: false
}

export default Header
