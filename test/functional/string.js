import Schema    from '../../src/schema/index'
import type      from '../../src/schema/type'

describe('Validate schema with strings', function() {

  it('should be a schema of strings', function(done) {

    var pkg = {
      firstName: 'Captain',
      lastName: 'FO0',
      rank: 'Captain'
    }

    let schema = new Schema({
      firstName: type('string'),
      lastName: type('string', {min: 3}),
      rank: type('string', {max: 10})
    })

    var validated = schema.validate(pkg)

    expect(typeof validated.err).to.equal('undefined')

    done()

  })

  it('should fail on minimum string length of lastName property', function(done) {

    var pkg = {
      firstName: 'Captain',
      lastName: 'FO0'
    }

    let schema = new Schema({
      firstName: type('string'),
      lastName: type('string', {min: 4})
    })

    var validated = schema.validate(pkg)

    expect(typeof validated.err).to.equal('object')

    done()

  })

  it('should fail on maximum string length of firstName property', function(done) {

    var pkg = {
      firstName: 'Captain',
      lastName: 'FO0'
    }

    let schema = new Schema({
      firstName: type('string', {max: 5}),
      lastName: type('string', {min: 4})
    })

    var validated = schema.validate(pkg)

    expect(typeof validated.err).to.equal('object')

    done()

  })

})
