'use strict';

/**
 * @desc Determines what is or is not an Object
 */
class ObjectValidator {

  constructor(o) {



  }

  hasChild() {

  }

  hasChildren() {

  }

  /**
   *
   * @param {object} o The variable to test whether it is an object.
   * @see http://stackoverflow.com/a/22482737/586131
   */
  isObject(o) {
    if(o === null) return false

    return o instanceof Object
  }

}

export default ObjectValidator
