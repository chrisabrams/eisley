import Schema    from '../../src/schema/index'
import type      from '../../src/schema/type'

describe('Validate schema with objects', function() {

  it('should be a schema of arrays', function(done) {

    var pkg = {
      cart: ['apples', 'oranges'],
      cart2: ['pears', 'reeses']
    }

    let schema = new Schema({
      cart: type('array', {contains: 'apples'}),
      cart2: type('array')
    })

    var validated = schema.validate(pkg)

    expect(typeof validated.err).to.equal('undefined')

    done()

  })

})
