'use strict';

/**
 * @desc Determines what is or is not a String
 */
class StringValidator {

  constructor(s, options = {}) {
    this.s       = s
    this.options = options

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
      checked: s,
      error,
      result
    }
  }

  /**
   * Test whether it is a string.
   * @see http://stackoverflow.com/a/9436948/586131
   */
  is() {

    if(typeof this.s === 'string' || this.s instanceof String) return this

    return {
      err: {
        checked: this.s,
        code: 'NOT_STRING',
        desc: `The item checked is not a string.`
      }
    }
  }

  /**
   * @param {number} l The maximum length the string must be.
   */
  max(l) {
    if(this.s.length <= l) return this

    return {
      err: {
        checked: this.s,
        code: 'TOO_LONG',
        desc: `The string is too long; it must be a maximum of ${l}.`
      }
    }
  }

  /**
   * @param {number} l The minimum length the string must be.
   */
  min(l) {
    if(this.s.length >= l) return this

    return {
      err: {
        checked: this.s,
        code: 'TOO_SHORT',
        desc: `The string is not long enough; it must be a minimum of ${l}.`
      }
    }
  }

  /**
   * Validate the rules passed.
   */
  validate() {

    var is = this.is()
    if(is.err) return is

    var results = []

    Object.keys(this.options).forEach( (option) => {

      let result = this[option](this.options[option])

      if(result.err) {
        result.err.optionKey = option
        results.push(result.err)
      }

    })

    if(results.length == 0) return {valid: true}

    return {
      err: results
    }

  }

}

export default StringValidator
