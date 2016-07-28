import ArrayValidator   from '../validate/array'
import BooleanValidator from '../validate/boolean'
import NumberValidator  from '../validate/number'
import ObjectValidator  from '../validate/object'
import StringValidator  from '../validate/string'

class SchemaType {

  constructor(type, options = {}) {

    this.options = options
    this.type    = type

  }

  array(i) {
    return new ArrayValidator(i, this.options)
  }

  boolean(i) {
    return new BooleanValidator(i, this.options)
  }

  number(i) {
    return new NumberValidator(i, this.options)
  }

  object(i) {
    return new ObjectValidator(i, this.options)
  }

  password(i) {
    return new StringValidator(i, this.options)
  }

  string(i) {
    return new StringValidator(i, this.options)
  }

}

/**
 * This was simply created to negate the need to say: new Type() for each schema property
 */
function SchemaTypeWrapper(type, options = {}) {

  return new SchemaType(type, options)

}

export default SchemaTypeWrapper
