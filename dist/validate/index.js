'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _number = require('./number');

var _number2 = _interopRequireDefault(_number);

var _object = require('./object');

var _object2 = _interopRequireDefault(_object);

var _index = require('../schema/index');

var _index2 = _interopRequireDefault(_index);

var _string = require('./string');

var _string2 = _interopRequireDefault(_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validate = function Validate() {
  _classCallCheck(this, Validate);

  this.numberValidator = new _number2.default();
  this.objectValidator = new _object2.default();
  this.stringValidator = new _string2.default();
};

exports.default = Validate;
//# sourceMappingURL=index.js.map