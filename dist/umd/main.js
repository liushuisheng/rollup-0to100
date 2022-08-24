(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('@lui/core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery', '@lui/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.myLib = {}, global.$, global.lui));
})(this, (function (exports, $, core) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);

  var version = "1.0.0";

  function main() {
    console.log('你好，欢迎来到rollup学习教练系统~');
    console.log($__default["default"]);
    console.log(version);
    console.log(core.Button);
  }

  exports.main = main;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
