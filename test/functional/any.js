'use strict';

import Schema    from '../../lib/schema/index'
import type      from '../../lib/schema/type'

describe('String Validator', function() {

  it('should handle a pkg with less propeties than schema', function(done) {

    var pkg = {
      firstName: 'Captain'
    }

    let schema = new Schema({
      firstName: type('string'),
      lastName: type('string', {min: 3})
    })

    var validated = schema.validate(pkg)

    expect(typeof validated.err).to.equal('undefined')

    done()

  })

  it('should error with less propeties than schema', function(done) {

    var pkg = {
      firstName: 'Captain'
    }

    let schema = new Schema({
      firstName: type('string'),
      lastName: type('string', {min: 3})
    }, {
      
    })

    var validated = schema.validate(pkg)

    expect(typeof validated.err).to.equal('undefined')

    done()

  })

})
