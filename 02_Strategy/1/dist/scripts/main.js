!function e(t,n,o){function r(i,c){if(!n[i]){if(!t[i]){var a="function"==typeof require&&require;if(!c&&a)return a(i,!0);if(u)return u(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[i]={exports:{}};t[i][0].call(l.exports,function(e){var n=t[i][1][e];return r(n?n:e)},l,l.exports,e,t,n,o)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<o.length;i++)r(o[i]);return r}({1:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=e("../../common/MallardDuck"),u=o(r),i=e("../../common/RedheadDuck"),c=o(i),a=new u["default"],f=new c["default"];a.quack(),a.swim(),a.display(),f.quack(),f.swim(),f.display()},{"../../common/MallardDuck":3,"../../common/RedheadDuck":4}],2:[function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=function(){function e(){o(this,e)}return r(e,[{key:"quack",value:function(){console.log("Quack!")}},{key:"swim",value:function(){console.log("Chop!")}},{key:"fly",value:function(){console.log("Wings!")}},{key:"display",value:function(){throw new Error("This method must be overwritten!")}}]),e}();n["default"]=u},{}],3:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=e("./Duck"),f=o(a),l=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"display",value:function(){console.log("MallardDuck show")}}]),t}(f["default"]);n["default"]=l},{"./Duck":2}],4:[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=e("./Duck"),f=o(a),l=function(e){function t(){return r(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"display",value:function(){console.log("RedheadDuck show")}}]),t}(f["default"]);n["default"]=l},{"./Duck":2}]},{},[1]);
//# sourceMappingURL=main.js.map
