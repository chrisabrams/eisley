import ObjectValidator from '../../src/validate/object'

describe('Object Validator', function() {

  it('should initialize', function(done) {

    var objectValidator = new ObjectValidator()

    expect(objectValidator).to.be.an('object')

    done()

  })

  it('should be an object', function(done) {

    var objectValidator = new ObjectValidator({})

    expect(typeof objectValidator.err).to.equal('undefined')

    done()

  })

  it('should not be an object', function(done) {

    var objectValidator = new ObjectValidator(2)

    expect(typeof objectValidator.err).to.equal('object')

    done()

  })

})
