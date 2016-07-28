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
 * @desc Determines what is or is not a Boolean
 */

var BooleanValidator = function (_RootValidator) {
  _inherits(BooleanValidator, _RootValidator);

  function BooleanValidator(i) {
    var _ret;

    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, BooleanValidator);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BooleanValidator).call(this, i, options));

    return _ret = _this.validate(), _possibleConstructorReturn(_this, _ret);
  }

  /**
   * Test whether it is a boolean.
   */


  _createClass(BooleanValidator, [{
    key: 'is',
    value: function is() {

      if (typeof this.i === 'boolean' || this.i instanceof Boolean) return this;

      return {
        err: {
          code: 'NOT_BOOLEAN',
          desc: 'The item checked is not a boolean.',
          valueChecked: this.i
        }
      };
    }
  }]);

  return BooleanValidator;
}(_root2.default);

exports.default = BooleanValidator;
//# sourceMappingURL=boolean.js.map