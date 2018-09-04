import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import config from './config'

const { src, dest, format, external, babelConfig, commonjsConfig } = config

export default {
  input: `${src}/common.js`,
  output: {
    file: `${dest}/common.js`,
    format
  },
  external,
  plugins: [resolve(), babel(babelConfig), commonjs(commonjsConfig)]
}
