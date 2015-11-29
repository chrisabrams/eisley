'use strict';

import Schema    from '../../lib/schema/index'
import type      from '../../lib/schema/type'
import Validator from '../../lib/validate/index'

describe('String Validator', function() {

  it('should be an object of string properties', function(done) {

    var pkg = {
      firstName: 'Captain',
      lastName: 'FO0'
    }

    let schema = new Schema({
      firstName: type('string'),
      lastName: type('string', {min: 3})
    })

    var validated = schema.validate(pkg, schema)

    expect(typeof validated.err).to.equal('undefined')

    done()

  })

  it('should fail on string length of lastName property', function(done) {

    var pkg = {
      firstName: 'Captain',
      lastName: 'FO0'
    }

    let schema = new Schema({
      firstName: type('string'),
      lastName: type('string', {min: 4})
    })

    var validated = schema.validate(pkg, schema)

    expect(typeof validated.err).to.equal('object')

    done()

  })

})
