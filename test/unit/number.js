import NumberValidator from '../../src/validate/number'

describe('Number Validator', function() {

  it('should initialize', function(done) {

    var numberValidator = new NumberValidator()

    expect(numberValidator).to.be.an('object')

    done()

  })

  it('should be a number', function(done) {

    var numberValidator = new NumberValidator(123)

    expect(typeof numberValidator.err).to.equal('undefined')

    done()

  })

  it('should not be a number', function(done) {

    var numberValidator = new NumberValidator('foo')

    expect(typeof numberValidator.err).to.equal('object')

    done()

  })

})
