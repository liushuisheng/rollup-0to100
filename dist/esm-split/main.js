import $ from 'jquery';
import { Button } from '@lui/core';

var version = "1.0.0";

function main() {
  console.log('你好，欢迎来到rollup学习教练系统~');
  console.log($);
  console.log(version);
  console.log(Button);
  
  import('./sayHi-336010be.js').then(({ default: sayHi }) => {
    sayHi();
  });
}

export { main };
