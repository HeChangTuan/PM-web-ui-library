export default {
  src: 'src/lib',
  dest: 'dist',
  format: 'cjs',
  external: ['react', 'react-dom', 'styled-components', 'prop-types'],
  globals: {
    'styled-components': 'styled',
    React: 'react',
    PropTypes: 'proptypes'
  },
  babelConfig: {
    exclude: 'node_modules/**' // only transpile our source code
  },
  commonjsConfig: {
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
  }
}
