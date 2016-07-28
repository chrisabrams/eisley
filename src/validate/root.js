class RootValidator {

  constructor(i, options = {}) {
    this.i       = i
    this.options = options
  }

  /**
   * Validate the rules passed.
   */
  validate() {

    var is = this.is()

    if(is.err) return is

    var results = []

    Object.keys(this.options).forEach( (rule) => {

      let result = this[rule](this.options[rule])

      if(result.err) {
        result.err.ruleKey = rule
        results.push(result.err)
      }

    })

    if(results.length == 0) {
      return {valid: true}
    }

    return {
      err: results
    }

  }

}

export default RootValidator
