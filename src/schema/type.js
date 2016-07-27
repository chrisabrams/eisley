'use strict';

import ArrayValidator  from '../validate/array'
import StringValidator from '../validate/string'

class SchemaType {

  constructor(type, options = {}) {

    this.options = options
    this.type    = type

  }

  array(i) {

    return new ArrayValidator(i, this.options)

  }

  number() {

  }

  object() {

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
