import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'

export default {
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
      name: 'myLib',
      globals: {
        jquery: '$',
        '@lui/core': 'lui'
      }
    },
    {
      file: 'dist/iife/main.js',
      format: 'iife',
      name: 'myLib',
      globals: {
        jquery: '$',
        '@lui/core': 'lui'
      }
    },
    {
      file: 'dist/iife/main.min.js',
      format: 'iife',
      name: 'myLib',
      plugins: [terser()],
      globals: {
        jquery: '$',
        '@lui/core': 'lui'
      }
    }
  ],
  plugins: [
    json(),
    // terser()
  ],
  external: ['jquery', '@lui/core']
}