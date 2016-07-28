class Schema {

  constructor(schema, options = {}) {
    this.options = Object.assign({}, {
      strict: true
    }, options)

    this.schema  = schema
  }

  /**
   * Takes a pkg and determines if it is valid.
   * @param {object} pkg The object to determine if it matches the schema.
   * @todo Schema should support nested objects
   */
  validate(pkg = {}) {

    var err = undefined

    // For each schema rule
    Object.keys(this.schema).forEach( (key) => {

      // If schema is not strict & the package is missing the property
      if(!this.options.strict && !pkg[key]) return

      // The Schema Type class instance that the property is said to, such as: type('string')
      var schemaType = this.schema[key]

      // The value if the property we want to test againt respective property
      var propVal = pkg[key]

      /*
      NOTE: If the schema type is a password, and the package has a hash.
      This offers flexability for apps where the password is tested, validated, etc.
      Before reaching Eisley. This allows the developer to attach the result of said
      password handling to the "hash" property instead.
      */
      if(schemaType.type == 'password' && schemaType.options.hash) {
        propVal = pkg.hash
      }

      var result = schemaType[schemaType.type](propVal)

      if(result.err) {
        if(!err) err = []

        err.push({
          schemaKey: key,
          error: result.err
        })
      }

    })

    return {
      err
    }

  }

}

export default Schema
