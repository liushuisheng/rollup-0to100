import $ from 'jquery'
import sayHi from './sayHi'

function main() {
  console.log('你好，欢迎来到rollup学习教练系统~')
  console.log($)
  sayHi()
}

export {
  main
}