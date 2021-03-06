'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _array = require('../validate/array');

var _array2 = _interopRequireDefault(_array);

var _boolean = require('../validate/boolean');

var _boolean2 = _interopRequireDefault(_boolean);

var _number = require('../validate/number');

var _number2 = _interopRequireDefault(_number);

var _object = require('../validate/object');

var _object2 = _interopRequireDefault(_object);

var _string = require('../validate/string');

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SchemaType = function () {
  function SchemaType(type) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, SchemaType);

    this.options = options;
    this.type = type;
  }

  _createClass(SchemaType, [{
    key: 'array',
    value: function array(i) {
      return new _array2.default(i, this.options);
    }
  }, {
    key: 'boolean',
    value: function boolean(i) {
      return new _boolean2.default(i, this.options);
    }
  }, {
    key: 'number',
    value: function number(i) {
      return new _number2.default(i, this.options);
    }
  }, {
    key: 'object',
    value: function object(i) {
      return new _object2.default(i, this.options);
    }
  }, {
    key: 'password',
    value: function password(i) {
      return new _string2.default(i, this.options);
    }
  }, {
    key: 'string',
    value: function string(i) {
      return new _string2.default(i, this.options);
    }
  }]);

  return SchemaType;
}();

/**
 * This was simply created to negate the need to say: new Type() for each schema property
 */


function SchemaTypeWrapper(type) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];


  return new SchemaType(type, options);
}

exports.default = SchemaTypeWrapper;
//# sourceMappingURL=type.js.map