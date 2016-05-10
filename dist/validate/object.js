'use strict';

/**
 * @desc Determines what is or is not an Object
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectValidator = function () {
  function ObjectValidator(o) {
    _classCallCheck(this, ObjectValidator);
  }

  _createClass(ObjectValidator, [{
    key: 'hasChild',
    value: function hasChild() {}
  }, {
    key: 'hasChildren',
    value: function hasChildren() {}

    /**
     *
     * @param {object} o The variable to test whether it is an object.
     * @see http://stackoverflow.com/a/22482737/586131
     */

  }, {
    key: 'isObject',
    value: function isObject(o) {
      if (o === null) return false;

      return o instanceof Object;
    }
  }]);

  return ObjectValidator;
}();

exports.default = ObjectValidator;
//# sourceMappingURL=object.js.map