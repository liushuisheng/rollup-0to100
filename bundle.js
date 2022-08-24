(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  function main() {
    console.log('你好，欢迎来到rollup学习教练系统~');
  }

  main();

  exports.module = main;

}));
