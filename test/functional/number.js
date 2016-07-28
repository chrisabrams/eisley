import Schema    from '../../src/schema/index'
import type      from '../../src/schema/type'

describe('Validate schema with numbers', function() {

  it('should be a schema of numbers', function(done) {

    var pkg = {
      feather: 0,
      rope: 1,
      torches: 3
    }

    let schema = new Schema({
      feather: type('number'),
      rope: type('number', {min: 1}),
      torches: type('number', {max: 5})
    })

    var validated = schema.validate(pkg)

    expect(typeof validated.err).to.equal('undefined')

    done()

  })

  it('should fail on minimum number length of rope property', function(done) {

    var pkg = {
      rope: 1
    }

    let schema = new Schema({
      rope: type('number', {min: 2})
    })

    var validated = schema.validate(pkg)

    expect(typeof validated.err).to.equal('object')

    done()

  })

  it('should fail on maximum number length of torches property', function(done) {

    var pkg = {
      torches: 5
    }

    let schema = new Schema({
      torches: type('number', {max: 4})
    })

    var validated = schema.validate(pkg)

    expect(typeof validated.err).to.equal('object')

    done()

  })

})
