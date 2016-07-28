'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _root = require('./root');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @desc Determines what is or is not a Number
 */

var NumberValidator = function (_RootValidator) {
  _inherits(NumberValidator, _RootValidator);

  function NumberValidator(i) {
    var _ret;

    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, NumberValidator);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NumberValidator).call(this, i, options));

    return _ret = _this.validate(), _possibleConstructorReturn(_this, _ret);
  }

  /**
   * Test whether it is a number.
   */


  _createClass(NumberValidator, [{
    key: 'is',
    value: function is() {

      if (typeof this.i === 'number' || this.i instanceof Number) return this;

      return {
        err: {
          code: 'NOT_NUMBER',
          desc: 'The item checked is not a number.',
          valueChecked: this.i
        }
      };
    }

    /**
     * @param {number} l The maximum length the number must be.
     */

  }, {
    key: 'max',
    value: function max(l) {
      if (this.i <= l) return this;

      return {
        err: {
          code: 'TOO_LONG',
          desc: 'The number is too long; it must be a maximum of ' + l + '.',
          valueChecked: this.i
        }
      };
    }

    /**
     * @param {number} l The minimum length the number must be.
     */

  }, {
    key: 'min',
    value: function min(l) {
      if (this.i >= l) return this;

      return {
        err: {
          code: 'TOO_SHORT',
          desc: 'The number is not long enough; it must be a minimum of ' + l + '.',
          valueChecked: this.i
        }
      };
    }
  }]);

  return NumberValidator;
}(_root2.default);

exports.default = NumberValidator;
//# sourceMappingURL=number.js.map