'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Schema = function () {
  function Schema(schema) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, Schema);

    this.options = options;
    this.schema = schema;
  }

  /**
   * Takes a pkg and determines if it is valid.
   * @param {object} pkg The object to determine if it matches the schema.
   * @todo Schema should be able to be any primitive type
   * @todo Schema should support nested objects
   */


  _createClass(Schema, [{
    key: 'validate',
    value: function validate() {
      var _this = this;

      var pkg = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var cb = arguments[1];


      var err = undefined;

      // For each schema rule
      Object.keys(this.schema).forEach(function (key) {

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

      if (cb && typeof cb == 'function') {
        if (err) return cb(err);

        return cb(null, true);
      }

      return {
        err: err
      };
    }
  }]);

  return Schema;
}();

exports.default = Schema;
//# sourceMappingURL=index.js.map