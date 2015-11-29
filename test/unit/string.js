'use strict';

import StringValidator from '../../lib/validate/string'

describe('String Validator', function() {

  it('should initialize', function(done) {

    var stringValidator = new StringValidator()

    expect(stringValidator).to.be.an('object')

    done()

  })

  it('should be a string', function(done) {

    var stringValidator = new StringValidator('foo')

    expect(typeof stringValidator.err).to.equal('undefined')

    done()

  })

  it('should not be a string', function(done) {

    var stringValidator = new StringValidator(123)

    expect(typeof stringValidator.err).to.equal('object')

    done()

  })

})
