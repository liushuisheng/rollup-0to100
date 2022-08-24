const path = require('path')

module.exports = {
  input: path.join(__dirname, 'src/main.js'),
  output: [
    {
      file: path.join(__dirname, 'dist/lib/main.js'),
      format: 'cjs'
    },
    {
      file: path.join(__dirname, 'dist/es/main.js'),
      format: 'es'
    },
    {
      file: path.join(__dirname, 'dist/umd/main.js'),
      format: 'umd',
      name: 'myLib',
      globals: {
        jquery: '$'
      }
    }
  ],
  external: ['jquery']
}