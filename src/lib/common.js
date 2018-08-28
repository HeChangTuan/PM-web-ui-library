const ossPath = 'https://peoplesmedic.oss-cn-shenzhen.aliyuncs.com'

const mq = {
  mobi: 'screen and (max-width: 480px)',
  desk: 'screen and (min-width: 481px)',
  sml: 'screen and (max-width: 1024px)',
  mid: 'screen and (min-width: 481px) and (max-width: 1300px)',
  big: 'screen and (min-width: 1301px)'
}

const fontPath = `${ossPath}/assets/fonts`
const imagePath = `${ossPath}/assets/images`

/**
 *
 * @param {pos} Object
 * t: top,
 * l: left,
 * r: right,
 * b: bottom
 */
const pos = ({ t = 'auto', l = 'auto', r = 'auto', b = 'auto' }) => `
    top: ${t};
    right: ${r};
    bottom: ${b};
    left: ${l};
  `

/**
 *
 * @param {number / string} w: width
 * @param {number / string} h: height
 * when passed number, return ${w}px,
 * else return String
 */
const size = (w, h) => {
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

const bgContain = url => `
    background-image: url(${url});
    background-size: contain;
    background-repeat: no-repeat;
  `

const bgCover = url => `
    background-image: url(${url});
    background-size: cover;
    background-repeat: no-repeat;
  `

const colors = {
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

export default {
  size,
  colors,
  bgContain,
  bgCover,
  mq,
  fontPath,
  imagePath,
  pos
}
