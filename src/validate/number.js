'use strict';

/**
 * @desc Determines what is or is not a Number
 */
class NumberValidator {

  constructor(o) {



  }

  /**
   *
   * @param {number} n The variable to test whether it is a number.
   */
  isNumber(n) {

    return typeof n === 'number' || n instanceof Number
  }

}

export default NumberValidator
