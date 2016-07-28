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

      var schemaRule     = this.schema[key]
      let schemaDataType = schemaRule.type

      var result = schemaRule[schemaDataType](pkg[key])

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
