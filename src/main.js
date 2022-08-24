import $ from 'jquery'
import {version} from '../package.json'
import { Button } from '@lui/core'
import sayHi from './sayHi'

function main() {
  console.log('你好，欢迎来到rollup学习教练系统~')
  console.log($)
  console.log(version)
  console.log(Button)
  
  console.log(sayHi())
}

export {
  main
}