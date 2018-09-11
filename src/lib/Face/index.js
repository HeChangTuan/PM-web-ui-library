import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { IconEle } from '../Icons'
import { colors as c } from '../common'

const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  background: ${p => p.bgColor};
  display: flex;
  flex: ${p => `0 0 ${p.size}px`};
  align-items: center;
  border-radius: 50%;
`

const Image = styled.div`
  background-size: cover;
  background-position: center;
  background-image: ${p => `url(${p.image})`};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`

const FaceIcon = styled(IconEle)`
  margin: auto;
`

const Face = ({ size, image, sex, isDoctor = false }) => {
  const imageEle = image ? <Image image={image} /> : null

  let bgColor = c.space
  let iconType = ''
  let iconEle = '0'
  if (isDoctor) {
    bgColor = '#4ED297'
    iconType = '3'
  } else if (sex) {
    bgColor = sex === '男' ? '#7ED6FF' : '#FFB6CA'
    iconType = sex === '男' ? '0' : 'Z'
  }
  iconEle = <FaceIcon size={size * 0.7} type={iconType} color="#fff" />

  return (
    <Wrap bgColor={bgColor} size={size}>
      {iconEle}
      {imageEle}
    </Wrap>
  )
}

Face.propTypes = {
  /** Size (px) */
  size: PropTypes.number,
  /** Image url */
  image: PropTypes.string,
  /** Sex ('男' / '女') */
  sex: PropTypes.string,
  /** 是否为医生头像 */
  isDoctor: PropTypes.bool
}

Face.defaultProps = {
  size: 30,
  image: null,
  sex: null,
  isDoctor: false
}

export default Face
