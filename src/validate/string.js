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

    if(typeof this.s === 'string' || this.s instanceof String) return this

    return {
      err: {
        code: 'NOT_STRING',
        desc: `The item checked is not a string.`,
        valueChecked: this.s
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
        code: 'TOO_LONG',
        desc: `The string is too long; it must be a maximum of ${l}.`,
        valueChecked: this.s
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
        code: 'TOO_SHORT',
        desc: `The string is not long enough; it must be a minimum of ${l}.`,
        valueChecked: this.s
      }
    }
  }

  /**
   * Validate the rules passed.
   */
  validate(cb) {

    var is = this.is()
    if(is.err) return is

    var results = []

    Object.keys(this.options).forEach( (rule) => {

      let result = this[rule](this.options[rule])

      if(result.err) {
        result.err.ruleKey = rule
        results.push(result.err)
      }

    })

    if(results.length == 0) {
      if(cb) return cb(null, true)

      return {valid: true}
    }

    if(cb) return cb(results)

    return {
      err: results
    }

  }

}

export default StringValidator
