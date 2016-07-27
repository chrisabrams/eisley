import RootValidator from './root'

/**
 * @desc Determines whether is an Array
 */
class ArrayValidator extends RootValidator {

  constructor(i, options = {}) {
    super(i, options)

    return this.validate()
  }

  /**
   * Whether or not the array contains a string
   * @param {string} i The variable to test whether it contains the string supplied.
   */
  contains() {

    var error  = null,
        result = false

    return {
      error,
      result,
      valueChecked: this.i
    }
  }

  /**
   * Test whether it is a an array
   */
  is() {

    if(this.i instanceof Array) return this

    return {
      err: {
        code: 'NOT_ARRAY',
        desc: `The item checked is not an array.`,
        valueChecked: this.i
      }
    }
  }

  /**
   * @param {number} l The maximum length the array must be.
   */
  max(l) {
    if(this.i.length <= l) return this

    return {
      err: {
        code: 'TOO_LONG',
        desc: `The array is too long; it must be a maximum of ${l}.`,
        valueChecked: this.i
      }
    }
  }

  /**
   * @param {number} l The minimum length the array must be.
   */
  min(l) {
    if(this.i.length >= l) return this

    return {
      err: {
        code: 'TOO_SHORT',
        desc: `The array is not long enough; it must be a minimum of ${l}.`,
        valueChecked: this.i
      }
    }
  }

}

export default ArrayValidator
