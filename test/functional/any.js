import Schema    from '../../src/schema/index'
import type      from '../../src/schema/type'

describe('Root Validation Rules', function() {

  it('should handle a pkg with more propeties than schema', function(done) {

    var pkg = {
      firstName: 'Captain',
      lastName: 'Cook'
    }

    let schema = new Schema({
      firstName: type('string')
    })

    var validated = schema.validate(pkg)

    expect(typeof validated.err).to.equal('undefined')

    done()

  })

  it('should error with less propeties than schema', function(done) {

    var pkg = {
      firstName: 'Captain'
    }

    let schema = new Schema({
      firstName: type('string'),
      lastName: type('string', {min: 3})
    }, {

    })

    var validated = schema.validate(pkg)

    expect(typeof validated.err).to.equal('object')

    done()

  })

})
