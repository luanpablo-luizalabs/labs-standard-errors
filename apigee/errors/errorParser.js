import {isEmpty, isString, trim} from '../../helpers/jsonHelpers'
import errorCatalog from './errorCatalog'

export default function error (code, parameters) {
  if (!isEmpty(parameters) && isString(parameters)) {
    parameters = [parameters]
  }
  parameters = parameters || []

  let error = errorCatalog[String(code)]
  if (isEmpty(error)) {
    throw new Error(`luizalabs-error: Error code ${code} not found!`)
  }
  let statusCode = error.httpcode

  let language = 'en'
  let errorMessage = error[language]

  if (isEmpty(errorMessage)) {
    language = 'en'
    errorMessage = error[language]
  }

  if (isEmpty(errorMessage)) {
    throw new Error(`luizalabs-error: Error language ${language} not found for code ${code}`)
  }

  let developerMessage = errorMessage.developerMessage
  let userMessage = errorMessage.userMessage

  for (var i = 0; i < parameters.length; i++) {
    developerMessage = developerMessage.split(`{${i}}`).join(parameters[i])
    userMessage = userMessage.split(`{${i}}`).join(parameters[i])
  }

  developerMessage = developerMessage.split(/[{]\d{1,}[}]/).join('')
  userMessage = userMessage.split(/[{]\d{1,}[}]/).join('')

  return {
    statusCode: statusCode,
    body: {
      developerMessage: trim(developerMessage),
      userMessage: trim(userMessage),
      errorCode: parseInt(code),
      moreInfo: 'http://www.developer.apiluiza.com.br/errors'
    }
  }
}
