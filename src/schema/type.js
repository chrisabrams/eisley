'use strict';

import StringValidator from '../validate/string'

class SchemaType {

  constructor(type, options = {}) {

    this.options = options
    this.type    = type

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
