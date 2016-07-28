import Schema    from '../../src/schema/index'
import type      from '../../src/schema/type'

describe('Validate schema with objects', function() {

  it('should be a schema of object properties', function(done) {

    var pkg = {
      profile: {
        firstName: 'Captain',
        lastName: 'FO0'
      },
      status: {
        rank: 'Captain'
      }
    }

    let schema = new Schema({
      profile: type('object', {contains: 'firstName'}),
      status: type('object')
    })

    var validated = schema.validate(pkg)

    expect(typeof validated.err).to.equal('undefined')

    done()

  })

})
