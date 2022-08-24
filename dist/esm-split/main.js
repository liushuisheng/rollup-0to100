import $ from 'jquery';
import { Button } from '@lui/core';
import { s as sayHi } from './sayHi-b51702c9.js';

var version = "1.0.0";

function main() {
  console.log('你好，欢迎来到rollup学习教练系统~');
  console.log($);
  console.log(version);
  console.log(Button);
  
  console.log(sayHi());
}

export { main };
