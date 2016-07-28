"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RootValidator = function () {
  function RootValidator(i) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, RootValidator);

    this.i = i;
    this.options = options;
  }

  /**
   * Validate the rules passed.
   */


  _createClass(RootValidator, [{
    key: "validate",
    value: function validate() {
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
        return { valid: true };
      }

      return {
        err: results
      };
    }
  }]);

  return RootValidator;
}();

exports.default = RootValidator;
//# sourceMappingURL=root.js.map