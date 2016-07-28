import RootValidator from './root'

/**
 * @desc Determines what is or is not a String
 */
class StringValidator extends RootValidator {

  constructor(i, options = {}) {
    super(i, options)

    return this.validate()
  }

  /**
   * Whether or not the string contains a subset of the string
   * @param {string} s The variable to test whether it contains the string supplied.
   */
  contains() {

    var error  = null,
        result = false

    return {
      error,
      result,
      valueChecked: this.s
    }
  }

  /**
   * Test whether it is a string.
   * @see http://stackoverflow.com/a/9436948/586131
   */
  is() {

    if(typeof this.i === 'string' || this.i instanceof String) return this

    return {
      err: {
        code: 'NOT_STRING',
        desc: `The item checked is not a string.`,
        valueChecked: this.i
      }
    }
  }

  /**
   * @param {number} l The maximum length the string must be.
   */
  max(l) {
    if(this.i.length <= l) return this

    return {
      err: {
        code: 'TOO_LONG',
        desc: `The string is too long; it must be a maximum of ${l}.`,
        valueChecked: this.i
      }
    }
  }

  /**
   * @param {number} l The minimum length the string must be.
   */
  min(l) {
    if(this.i.length >= l) return this

    return {
      err: {
        code: 'TOO_SHORT',
        desc: `The string is not long enough; it must be a minimum of ${l}.`,
        valueChecked: this.i
      }
    }
  }

}

export default StringValidator
