import ArrayValidator from '../../src/validate/array'

describe('Array Validator', function() {

  it('should initialize', function(done) {

    var arrayValidator = new ArrayValidator()

    expect(arrayValidator).to.be.an('object')

    done()

  })

  it('should be an array', function(done) {

    var arrayValidator = new ArrayValidator([])

    expect(typeof arrayValidator.err).to.equal('undefined')

    done()

  })

  it('should not be an array', function(done) {

    var arrayValidator = new ArrayValidator(2)

    expect(typeof arrayValidator.err).to.equal('object')

    done()

  })

})
