import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import scss from 'rollup-plugin-scss'

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
    //解析json文件
    json(),
    //压缩
    // terser()
    //解析外部模块的插件
    nodeResolve(),
    scss()
  ],
  // external: ['jquery', '@lui/core']
}