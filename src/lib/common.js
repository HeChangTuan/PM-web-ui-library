export const ossPath = 'https://peoplesmedic.oss-cn-shenzhen.aliyuncs.com'

export const mq = {
  mobi: 'screen and (max-width: 480px)',
  desk: 'screen and (min-width: 481px)',
  sml: 'screen and (max-width: 1024px)',
  mid: 'screen and (min-width: 481px) and (max-width: 1300px)',
  big: 'screen and (min-width: 1301px)'
}

export const fontPath = `${ossPath}/assets/fonts`
export const imagePath = `${ossPath}/assets/images`

/**
 *
 * @param {Object} params
 * @param {string} params.t top
 * @param {string} params.l left
 * @param {string} params.r right
 * @param {string} params.b bottom
 */
export const pos = (
  params = { t: 'auto', l: 'auto', r: 'auto', b: 'auto' }
) => `
    top: ${params.t};
    right: ${params.r};
    bottom: ${params.b};
    left: ${params.l};
  `

/**
 *
 * @param {number / string} w: width
 * @param {number / string} h: height
 * when passed number, return ${w}px,
 * else return String
 */
export const size = (w, h) => {
  let _w = w
  let _h = h
  if (!h) {
    _h = w
  }
  if (typeof _w === 'number') {
    _w = `${_w}px`
  }
  if (typeof _h === 'number') {
    _h = `${_h}px`
  }
  return `
    width: ${_w};
    height: ${_h};
  `
}

export const bgContain = url => `
    background-image: url(${url});
    background-size: contain;
    background-repeat: no-repeat;
  `

export const bgCover = url => `
    background-image: url(${url});
    background-size: cover;
    background-repeat: no-repeat;
  `

export const clearfix = () => `
  &:before,
  &:after {
      content: "";
      display: table;
  }
  &:after {
      clear: both;
  }
`

export const colors = {
  gray: '#9b9b9b',
  grayText: '#646464',
  grayActive: '#9b9b9b',
  line: '#d8d8d8',
  space: '#ebebeb',
  active: 'linear-gradient(to right, #ffffff 0%, #ebebeb 100%)',
  yellow: '#ffd629',
  blue: '#0b85f7',
  blueLight: '#c3efff',
  blueActive: 'rgb(0, 103, 199)',
  red: '#ff4d3c',
  redActive: '#ff4d3c',
  green: '#1de189',
  greenActive: '#1de189',
  grass: '#0e874a',
  grassActive: '#0e874a',
  orange: '#ff8e00'
}
