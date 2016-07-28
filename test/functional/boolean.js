import Schema    from '../../src/schema/index'
import type      from '../../src/schema/type'

describe('Validate schema with boolean', function() {

  it('should be a schema of numbers', function(done) {

    var pkg = {
      has: true,
      hasNot: false
    }

    let schema = new Schema({
      has: type('boolean'),
      hasNot: type('boolean')
    })

    var validated = schema.validate(pkg)

    expect(typeof validated.err).to.equal('undefined')

    done()

  })

})
