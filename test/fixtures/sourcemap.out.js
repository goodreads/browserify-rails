(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/dbrewste/gems/browserify-rails/test/dummy/app/assets/javascripts/_stream_0.js":[function(require,module,exports){
var foo = require('./foo');
var nodeTestPackage = require('node-test-package');

},{"./foo":"/Users/dbrewste/gems/browserify-rails/test/dummy/app/assets/javascripts/foo.js","node-test-package":"/Users/dbrewste/gems/browserify-rails/test/dummy/node_modules/node-test-package/index.js"}],"/Users/dbrewste/gems/browserify-rails/test/dummy/app/assets/javascripts/foo.js":[function(require,module,exports){
require('./nested');
module.exports = function (n) { return n * 11 }

},{"./nested":"/Users/dbrewste/gems/browserify-rails/test/dummy/app/assets/javascripts/nested/index.js"}],"/Users/dbrewste/gems/browserify-rails/test/dummy/app/assets/javascripts/nested/index.js":[function(require,module,exports){
module.exports.NESTED = true;

},{}],"/Users/dbrewste/gems/browserify-rails/test/dummy/node_modules/node-test-package/index.js":[function(require,module,exports){
module.exports = console.log("hello friend");

},{}]},{},["/Users/dbrewste/gems/browserify-rails/test/dummy/app/assets/javascripts/_stream_0.js"])
//# sourceMappingURL=application.map

var a=1;
