import RootValidator from './root'

/**
 * @desc Determines whether is an Array
 */
class ObjectValidator extends RootValidator {

  constructor(i, options = {}) {
    super(i, options)

    return this.validate()
  }

  /**
   * Whether or not the object contains a property
   * @param {String} k - The property, or key, to check
   */
  contains(k) {

    if(this.i.hasOwnProperty(k)) return this

    return {
      err: {
        code: 'NO_CONTAINS',
        desc: `The item checked is does not have property ${k}.`,
        valueChecked: this.i
      }
    }
  }

  /**
   * Test whether it is a an array
   * @see http://stackoverflow.com/a/22482737/586131
   */
  is() {

    if(this.i instanceof Object && this.i !== null) return this

    return {
      err: {
        code: 'NOT_OBJECT',
        desc: `The item checked is not an object.`,
        valueChecked: this.i
      }
    }
  }

}

export default ObjectValidator
