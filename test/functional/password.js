import Schema    from '../../src/schema/index'
import type      from '../../src/schema/type'

describe('Validate schema with strings', function() {

  it('should not validate; missing password', function(done) {

    var pkg = {
      firstName: 'Captain',
      lastName: 'FO0'
    }

    let schema = new Schema({
      firstName: type('string'),
      lastName: type('string', {min: 3}),
      password: type('password')
    })

    var validated = schema.validate(pkg)

    expect(typeof validated.err).to.equal('object')

    done()

  })

  it('should not validate; missing hash', function(done) {

    var pkg = {
      firstName: 'Captain',
      lastName: 'FO0',
      password: 'foo'
    }

    let schema = new Schema({
      firstName: type('string'),
      lastName: type('string', {min: 3}),
      password: type('password', {hash: true})
    })

    var validated = schema.validate(pkg)

    expect(typeof validated.err).to.equal('object')

    done()

  })

  it('should validate password with hash option', function(done) {

    var pkg = {
      firstName: 'Captain',
      lastName: 'FO0',
      hash: '800sdf3sdfmk32@341sdfkd'
    }

    let schema = new Schema({
      firstName: type('string'),
      lastName: type('string', {min: 3}),
      password: type('password', {hash: true})
    })

    var validated = schema.validate(pkg)

    expect(typeof validated.err).to.equal('undefined')

    done()

  })

})
