import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrap = styled.div`
  background: blue;
  width: 100px;
  height: 100px;
`

const Button = ({ text }) => (
  <Wrap>
    <button type="button">{text}</button>
  </Wrap>
)

Button.propTypes = {
  /** The description for myProp */
  text: PropTypes.string.isRequired
}

export default Button
