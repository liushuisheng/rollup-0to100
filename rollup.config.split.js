import json from '@rollup/plugin-json'

export default {
  input: 'src/main.js',
  output: [
    {
      format: 'es',
      dir: 'dist/esm-split'
    },
    {
      format: 'cjs',
      dir: 'dist/cjs-split'
    }
  ],
  plugins: [
    json()
  ]
}