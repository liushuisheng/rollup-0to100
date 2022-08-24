import $ from 'jquery'
import {version} from '../package.json'
import { Button } from '@lui/core'
import sayHi from './sayHi'

function main() {
  console.log('你好，欢迎来到rollup学习教练系统~')
  console.log($)
  console.log(version)
  console.log(Button)
  
  import('./sayHi').then(({ default: sayHi }) => {
    sayHi()
  })
}

export {
  main
}