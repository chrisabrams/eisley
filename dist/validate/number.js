'use strict';

/**
 * @desc Determines what is or is not a Number
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NumberValidator = function () {
  function NumberValidator(o) {
    _classCallCheck(this, NumberValidator);
  }

  /**
   *
   * @param {number} n The variable to test whether it is a number.
   */


  _createClass(NumberValidator, [{
    key: 'isNumber',
    value: function isNumber(n) {

      return typeof n === 'number' || n instanceof Number;
    }
  }]);

  return NumberValidator;
}();

exports.default = NumberValidator;
//# sourceMappingURL=number.js.map