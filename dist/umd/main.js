(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.myLib = {}));
})(this, (function (exports) { 'use strict';

  function main() {
    console.log('你好，欢迎来到rollup学习教练系统~');
  }

  main();

  exports.main = main;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
