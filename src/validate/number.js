import RootValidator from './root'

/**
 * @desc Determines what is or is not a Number
 */
class NumberValidator extends RootValidator {

  constructor(i, options = {}) {
    super(i, options)

    return this.validate()
  }

  /**
   * Test whether it is a number.
   */
  is() {

    if(typeof this.i === 'number' || this.i instanceof Number) return this

    return {
      err: {
        code: 'NOT_NUMBER',
        desc: `The item checked is not a number.`,
        valueChecked: this.i
      }
    }
  }

  /**
   * @param {number} l The maximum length the number must be.
   */
  max(l) {
    if(this.i <= l) return this

    return {
      err: {
        code: 'TOO_LONG',
        desc: `The number is too long; it must be a maximum of ${l}.`,
        valueChecked: this.i
      }
    }
  }

  /**
   * @param {number} l The minimum length the number must be.
   */
  min(l) {
    if(this.i >= l) return this

    return {
      err: {
        code: 'TOO_SHORT',
        desc: `The number is not long enough; it must be a minimum of ${l}.`,
        valueChecked: this.i
      }
    }
  }

}

export default NumberValidator
