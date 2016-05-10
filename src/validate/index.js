'use strict';

import NumberValidator from './number'
import ObjectValidator from './object'
import Schema          from '../schema/index'
import StringValidator from './string'

class Validate {

  constructor() {

    this.numberValidator = new NumberValidator()
    this.objectValidator = new ObjectValidator()
    this.stringValidator = new StringValidator()

  }

}

export default Validate
