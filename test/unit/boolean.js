import BooleanValidator from '../../src/validate/boolean'

describe('Boolean Validator', function() {

  it('should initialize', function(done) {

    var booleanValidator = new BooleanValidator()

    expect(booleanValidator).to.be.an('object')

    done()

  })

  it('should be a boolean', function(done) {

    var booleanValidator = new BooleanValidator(true)

    expect(typeof booleanValidator.err).to.equal('undefined')

    done()

  })

  it('should not be a boolean', function(done) {

    var booleanValidator = new BooleanValidator('foo')

    expect(typeof booleanValidator.err).to.equal('object')

    done()

  })

})
