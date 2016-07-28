"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Schema = function () {
  function Schema(schema) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, Schema);

    this.options = Object.assign({}, {
      strict: true
    }, options);

    this.schema = schema;
  }

  /**
   * Takes a pkg and determines if it is valid.
   * @param {object} pkg The object to determine if it matches the schema.
   * @todo Schema should support nested objects
   */


  _createClass(Schema, [{
    key: "validate",
    value: function validate() {
      var _this = this;

      var pkg = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];


      var err = undefined;

      // For each schema rule
      Object.keys(this.schema).forEach(function (key) {

        // If schema is not strict & the package is missing the property
        if (!_this.options.strict && !pkg[key]) return;

        var schemaRule = _this.schema[key];
        var schemaDataType = schemaRule.type;

        var result = schemaRule[schemaDataType](pkg[key]);

        if (result.err) {
          if (!err) err = [];

          err.push({
            schemaKey: key,
            error: result.err
          });
        }
      });

      return {
        err: err
      };
    }
  }]);

  return Schema;
}();

exports.default = Schema;
//# sourceMappingURL=index.js.map