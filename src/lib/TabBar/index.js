import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Icon } from '..'
import { colors as c } from '../common'

const Wrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  ul {
    display: flex;
    width: 100vw;
    margin: 0;
    padding: 0;
  }
`

const Item = styled.li`
  border-right: 1px solid ${c.line};
  border-top: ${p => (p.blue ? `1px solid ${c.blue}` : `1px solid ${c.line}`)}
  list-style: none;
  flex: 1;
  cursor: pointer;
  &:nth-last-child(1) {
    border-right: 0;
  }
  a {
    display: block;
    font-size: 16px;
    padding: 14px 0;
    text-align: center;
    ${p => {
      if (p.blue) {
        return `
          color: #fff;
          background: ${c.blue};
        `
      }
      return `
        color: ${c.blue};
      `
    }} padding-bottom: max(12px, env(safe-area-inset-bottom));
  }
  i {
    font-size: 18px;
    position: relative;
    top: 1px;
    margin-right: 5px;
    color: ${p => (p.blue ? '#fff' : c.blue)};
  }
`

function TabBar({ items }) {
  const _items = items.map(item => {
    const { onClick, icon, text, blue } = item
    return (
      <Item blue={blue}>
        <a onClick={onClick}>
          {icon ? <Icon type={icon} size={18} /> : null}
          <span>{text}</span>
        </a>
      </Item>
    )
  })
  return (
    <Wrap>
      <ul>{_items}</ul>
    </Wrap>
  )
}

TabBar.propTypes = {
  /** Icon onClick: () => {}, text: "", icon: "P", blue: false */
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

export default TabBar
