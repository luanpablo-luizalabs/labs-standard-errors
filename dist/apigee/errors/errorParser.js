'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = error;

var _jsonHelpers = require('../../helpers/jsonHelpers');

var _errorCatalog = require('./errorCatalog');

var _errorCatalog2 = _interopRequireDefault(_errorCatalog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function error(code, parameters) {
  if (!(0, _jsonHelpers.isEmpty)(parameters) && (0, _jsonHelpers.isString)(parameters)) {
    parameters = [parameters];
  }
  parameters = parameters || [];

  let error = _errorCatalog2.default[String(code)];
  if ((0, _jsonHelpers.isEmpty)(error)) {
    throw new Error(`luizalabs-error: Error code ${code} not found!`);
  }
  let statusCode = error.httpcode;

  let language = 'en';
  let errorMessage = error[language];

  if ((0, _jsonHelpers.isEmpty)(errorMessage)) {
    language = 'en';
    errorMessage = error[language];
  }

  if ((0, _jsonHelpers.isEmpty)(errorMessage)) {
    throw new Error(`luizalabs-error: Error language ${language} not found for code ${code}`);
  }

  let developerMessage = errorMessage.developerMessage;
  let userMessage = errorMessage.userMessage;

  for (var i = 0; i < parameters.length; i++) {
    developerMessage = developerMessage.split(`{${i}}`).join(parameters[i]);
    userMessage = userMessage.split(`{${i}}`).join(parameters[i]);
  }

  developerMessage = developerMessage.split(/[{]\d{1,}[}]/).join('');
  userMessage = userMessage.split(/[{]\d{1,}[}]/).join('');

  return {
    statusCode: statusCode,
    body: {
      developerMessage: (0, _jsonHelpers.trim)(developerMessage),
      userMessage: (0, _jsonHelpers.trim)(userMessage),
      errorCode: parseInt(code),
      moreInfo: 'http://www.developer.apiluiza.com.br/errors'
    }
  };
}
//# sourceMappingURL=errorParser.js.map
