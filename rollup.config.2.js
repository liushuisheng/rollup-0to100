import json from '@rollup/plugin-json'
import clear from 'rollup-plugin-clear'

export default [
  {
    input: ['src/main.js', 'src/main2.js'],
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
      json(),
      clear({
        targets: [
          // 'dist/cjs-split/main.js', 
          // 'dist/esm-split/main.js',
          'dist/cjs-split',
          'dist/esm-split',
        ]
      })
    ]
  }
]