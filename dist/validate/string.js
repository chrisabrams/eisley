'use strict';

/**
 * @desc Determines what is or is not a String
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringValidator = function () {
  function StringValidator(s) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, StringValidator);

    this.s = s;
    this.options = options;

    return this.validate();
  }

  /**
   * Whether or not the string contains a subset of the string
   * @param {string} s The variable to test whether it contains the string supplied.
   */


  _createClass(StringValidator, [{
    key: 'contains',
    value: function contains() {

      var error = null,
          result = false;

      return {
        error: error,
        result: result,
        valueChecked: this.s
      };
    }

    /**
     * Test whether it is a string.
     * @see http://stackoverflow.com/a/9436948/586131
     */

  }, {
    key: 'is',
    value: function is() {

      if (typeof this.s === 'string' || this.s instanceof String) return this;

      return {
        err: {
          code: 'NOT_STRING',
          desc: 'The item checked is not a string.',
          valueChecked: this.s
        }
      };
    }

    /**
     * @param {number} l The maximum length the string must be.
     */

  }, {
    key: 'max',
    value: function max(l) {
      if (this.s.length <= l) return this;

      return {
        err: {
          code: 'TOO_LONG',
          desc: 'The string is too long; it must be a maximum of ' + l + '.',
          valueChecked: this.s
        }
      };
    }

    /**
     * @param {number} l The minimum length the string must be.
     */

  }, {
    key: 'min',
    value: function min(l) {
      if (this.s.length >= l) return this;

      return {
        err: {
          code: 'TOO_SHORT',
          desc: 'The string is not long enough; it must be a minimum of ' + l + '.',
          valueChecked: this.s
        }
      };
    }

    /**
     * Validate the rules passed.
     */

  }, {
    key: 'validate',
    value: function validate(cb) {
      var _this = this;

      var is = this.is();
      if (is.err) return is;

      var results = [];

      Object.keys(this.options).forEach(function (rule) {

        var result = _this[rule](_this.options[rule]);

        if (result.err) {
          result.err.ruleKey = rule;
          results.push(result.err);
        }
      });

      if (results.length == 0) {
        if (cb) return cb(null, true);

        return { valid: true };
      }

      if (cb) return cb(results);

      return {
        err: results
      };
    }
  }]);

  return StringValidator;
}();

exports.default = StringValidator;
//# sourceMappingURL=string.js.map