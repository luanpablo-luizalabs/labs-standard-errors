const errorParser = require('./errorParser')
const __joiToErrorCatalog = require('./joiErrorCatalog')

let parsePath = path => {
  if (path instanceof Array) {
    path = path.length === 0 ? [''] : path
    path = path.reduce((current, value) => {
      return current.concat('.').concat(value)
    })
  }

  let result = path
  let arrayIndexes = path.match(/(^\d{1,}[.])|([.]\d{1,}[.])|([.]\d{1,}$)/g)
  if (arrayIndexes && arrayIndexes.length > 0) {
    arrayIndexes.forEach(index => {
      let indexPosition = index.substring(0, 1) === '.' ? (index.substring(index.length - 1, index.length) === '.' ? 'inner' : 'end') : 'begin'
      let indexParsed = ''
      if (indexPosition === 'begin') {
        indexParsed = '[' + index.substring(0, index.length - 1) + '].'
      } else if (indexPosition === 'inner') {
        indexParsed = '[' + index.substring(1, index.length - 1) + '].'
      } else if (indexPosition === 'end') {
        indexParsed = '[' + index.substring(1, index.length) + ']'
      }
      result = result.split(index).join(indexParsed)
    })
  }
  return result
}

let buildJoiError = error => {
  let errorDetails = error.data.details || error.data.parameters.details
  let parameterPath = parsePath(errorDetails[0].path)

  parameterPath = parameterPath === '' ? errorDetails[0].context.label : parameterPath

  let parameterType = error.output.payload.validation.source
  if (parameterType === 'params') {
    parameterType = 'path'
  }

  if (parameterType === 'payload') {
    parameterType = 'body'
  }

  let errorType = errorDetails[0].type

  /**
   * Tratamento para o error type date.isoDate, seguindo a convenção ISO-8601
   */
  if (errorType === 'object.and') {
    parameterPath = errorDetails[0].context.missing
  }

  let joiError = __joiToErrorCatalog[errorType]
  if (!joiError) {
    return errorParser(10000, `- Error code not found for joi error ${errorType}`)
  }

  let parameters = joiError.parameters(errorDetails[0], [parameterType, parameterPath])

  return errorParser(joiError.code, parameters)
}

let buildGenericErrors = error => {
  if (error.output.statusCode === 401) {
    return errorParser(30001, 'make sure the header parameter Authorization is valid')
  }

  return errorParser(10000, `- Error code not found for joi error ${error.output.payload.message}`)
}

module.exports = {
  buildJoiError,
  buildGenericErrors
}
