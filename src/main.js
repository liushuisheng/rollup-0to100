import $ from 'jquery'
import sayHi from './sayHi'
import {version} from '../package.json'
import { Button } from '@lui/core'

function main() {
  console.log('你好，欢迎来到rollup学习教练系统~')
  console.log($)
  console.log(version)
  console.log(Button)
  sayHi()
}

export {
  main
}