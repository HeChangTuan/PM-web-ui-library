import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/lib/common.js',
  output: {
    file: 'build/common.js',
    format: 'cjs'
  },
  external: ['react', 'react-dom', 'styled-components', 'prop-types'],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': [
          'Component',
          'PureComponent',
          'Fragment',
          'cloneElement',
          'Children',
          'createElement'
        ],
        'node_modules/react-is/index.js': ['isValidElementType']
      }
    })
  ]
}
