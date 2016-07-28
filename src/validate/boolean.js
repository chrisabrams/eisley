import RootValidator from './root'

/**
 * @desc Determines what is or is not a Boolean
 */
class BooleanValidator extends RootValidator {

  constructor(i, options = {}) {
    super(i, options)

    return this.validate()
  }

  /**
   * Test whether it is a boolean.
   */
  is() {

    if(typeof this.i === 'boolean' || this.i instanceof Boolean) return this

    return {
      err: {
        code: 'NOT_BOOLEAN',
        desc: `The item checked is not a boolean.`,
        valueChecked: this.i
      }
    }
  }

}

export default BooleanValidator
