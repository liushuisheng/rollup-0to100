import {version} from '../package.json'
// import { Button } from '@lui/core'
// import { Button } from 'antd'
import { chunk } from './lodash-es'
import { fun1 } from './module-es'
import sayHi from './sayHi'

// fun1()

function main() {
  console.log('你好，欢迎来到rollup学习教练系统~')
  console.log(version)
  // console.log(Button)

  console.log(chunk(['a', 'b', 'c', 'd'], 2))
  
  console.log(sayHi())


}

export {
  main
}