

module.exports = {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/lib/main.js',
      format: 'cjs'
    },
    {
      file: 'dist/es/main.js',
      format: 'es'
    },
    {
      file: 'dist/umd/main.js',
      format: 'umd',
      name: 'myLib'
    }
  ]
}