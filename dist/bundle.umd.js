(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  var sayHello = function sayHello(message) {
    alert(message);
  };

  sayHello('Hello from Rollup');

}));
//# sourceMappingURL=bundle.umd.js.map
