class Schema {

  constructor(schema) {
    this.schema = schema
  }

  /**
   * Takes a pkg and determines if it is valid.
   * @param {object} pkg The object to determine if it matches the schema.
   * @todo Schema should be able to be any primitive type
   * @todo Schema should support nested objects
   */
  validate(pkg = {}) {

    var err = undefined

    Object.keys(this.schema).forEach( (key) => {

      var schemaItem     = this.schema[key]
      let schemaItemType = schemaItem.type

      var result = schemaItem[schemaItemType](pkg[key])

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
