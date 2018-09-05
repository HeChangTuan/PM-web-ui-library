import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import config from './config'

const {
  src,
  dest,
  format,
  external,
  globals,
  babelConfig,
  commonjsConfig
} = config

export default {
  input: `${src}/index.js`,
  output: {
    file: `${dest}/index.js`,
    globals,
    format
  },
  external,
  plugins: [resolve(), babel(babelConfig), commonjs(commonjsConfig)]
}
