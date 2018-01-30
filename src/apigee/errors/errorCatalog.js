const errorCatalog = {
  '10000': {
    httpcode: 500,
    en: {
      developerMessage: 'Internal server error {0}',
      userMessage: 'Was encountered an error when processing your request. We apologize for the inconvenience.'
    }
  },
  '10001': {
    httpcode: 503,
    en: {
      developerMessage: 'Service Unavailable',
      userMessage: 'The server is currently unavailable (because it is overloaded or down for maintenance).'
    }
  },
  '10002': {
    httpcode: 501,
    en: {
      developerMessage: 'Unsupported Operation',
      userMessage: 'You attempted to execute with {0} parameter {1}={2}, but is not supported yet.'
    }
  },
  '10003': {
    httpcode: 501,
    en: {
      developerMessage: 'Unsupported Operation {0}',
      userMessage: 'State {1} does not have service registration query.'
    }
  },
  '10004': {
    httpcode: 501,
    en: {
      developerMessage: 'Unsupported Operation {0}',
      userMessage: 'State do not have authorization for this service.'
    }
  },
  '20001': {
    httpcode: 400,
    en: {
      developerMessage: 'Missing {0} parameter {1}',
      userMessage: 'Field {1} is required and can not be empty'
    }
  },
  '20002': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid integer number',
      userMessage: 'Invalid field {1} - it must be filled with a valid integer number'
    }
  },
  '20003': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid string',
      userMessage: 'Invalid field {1} - it must be filled with a valid string'
    }
  },
  '20004': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a value greater than {2}',
      userMessage: 'Invalid field {1} - it must be filled with a value greater than {2}'
    }
  },
  '20005': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a value lesser than {2}',
      userMessage: 'Invalid field {1} - it must be filled with a value lesser than {2}'
    }
  },
  '20006': {
    httpcode: 400,
    en: {
      developerMessage: 'Unknown {0} parameter {1}',
      userMessage: 'Field {1} is unknown'
    }
  },
  '20007': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid number',
      userMessage: 'Invalid field {1} - it must be filled with a valid number'
    }
  },
  '20008': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid date in pattern {2} {3}',
      userMessage: 'Invalid field {1} - it must be filled with a valid date in pattern {2}'
    }
  },
  '20009': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid boolean (true or false)',
      userMessage: 'Invalid field {1} - it must be filled with a true or false'
    }
  },
  '20010': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid CPF',
      userMessage: 'Invalid field {1} - it must be filled with a valid CPF'
    }
  },
  '20011': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid CNPJ',
      userMessage: 'Invalid field {1} - it must be filled with a valid CNPJ'
    }
  },
  '20012': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid UUID',
      userMessage: 'Invalid field {1} - it must be filled with a valid UUID'
    }
  },
  '20013': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid email',
      userMessage: 'Invalid field {1} - it must be filled with a valid email'
    }
  },
  '20014': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid state',
      userMessage: 'Invalid field {1} - it must be filled with a valid state'
    }
  },
  '20015': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid PIS',
      userMessage: 'Invalid field {1} - it must be filled with a valid PIS'
    }
  },
  '20016': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a array',
      userMessage: 'Invalid field {1} - it must be filled with a array'
    }
  },
  '20017': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a object',
      userMessage: 'Invalid field {1} - it must be filled with a object'
    }
  },
  '20018': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a value inner ({2})',
      userMessage: 'Invalid field {1} - it must be filled with a value inner ({2})'
    }
  },
  '20019': {
    httpcode: 400,
    en: {
      developerMessage: 'Missing request body',
      userMessage: 'Missing request body'
    }
  },
  '20020': {
    httpcode: 400,
    en: {
      developerMessage: 'Malformed request body',
      userMessage: 'Malformed request body'
    }
  },
  '20021': {
    httpcode: 405,
    en: {
      developerMessage: 'Method not allowed',
      userMessage: 'Method not allowed'
    }
  },
  '20022': {
    httpcode: 404,
    en: {
      developerMessage: 'Resource not found',
      userMessage: 'Resource not found'
    }
  },
  '20023': {
    httpcode: 404,
    en: {
      developerMessage: '{0} not found',
      userMessage: 'You attempted to get a {0}, but did not find any'
    }
  },
  '20024': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a value delimited with [{2}]',
      userMessage: 'Invalid field {1} - it must be filled with a value delimited with [{2}]'
    }
  },
  '20025': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid query parameters - specify period or period.start and period.end',
      userMessage: 'Enter with field period or period.start and period.end'
    }
  },
  '20026': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid zipcode',
      userMessage: 'Invalid field {1} - it must be filled with a valid zipcode'
    }
  },
  '20027': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid query parameters - specify zipcode or latitude and longitude',
      userMessage: 'Enter with field zipcode or latitude and longitude'
    }
  },
  '20028': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid base64 encoding',
      userMessage: 'Invalid field {1} - it must be filled with a valid base64 encoding'
    }
  },
  '20029': {
    httpcode: 400,
    en: {
      developerMessage: '{0} not belong to {1}',
      userMessage: 'You attempted to use a {0}, but did not belong to {1}'
    }
  },
  '20030': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with at least {2} words',
      userMessage: 'Invalid field {1} - it must be filled with at least {2} words'
    }
  },
  '20031': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with at least {2} letters each',
      userMessage: 'Invalid field {1} - it must be filled with at least {2} letters each'
    }
  },
  '20032': {
    httpcode: 400,
    en: {
      developerMessage: 'Missing query parameters - specify cpf, cnpj or name_contains',
      userMessage: 'Enter with field cpf, cnpj or name_contains'
    }
  },
  '20033': {
    httpcode: 409,
    en: {
      developerMessage: '{0} already exists',
      userMessage: 'You attempted to create {0}, but already exists'
    }
  },
  '20034': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with the max {2}',
      userMessage: 'Invalid field {1} - it must be filled with the max {2}'
    }
  },
  '20035': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it is not allowed',
      userMessage: 'Invalid field {1} - it is not allowed'
    }
  },
  '20036': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid area code',
      userMessage: 'Invalid field {1} - it must be filled with a valid area code'
    }
  },
  '20037': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid phone number',
      userMessage: 'Invalid field {1} - it must be filled with a valid phone number'
    }
  },
  '20038': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid bank number',
      userMessage: 'Invalid field {1} - it must be filled with a valid bank number'
    }
  },
  '20039': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid bank account number, including a separator and digit',
      userMessage: 'Invalid field {1} - it must be filled with a valid bank account number, including a separator and digit'
    }
  },
  '20040': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid week day',
      userMessage: 'Invalid field {1} - it must be filled with a valid week day'
    }
  },
  '20041': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid query parameters - specify issuedate or issuer.id',
      userMessage: 'Enter with field issuedate or issuer.id'
    }
  },
  '20042': {
    httpcode: 400,
    en: {
      developerMessage: 'Fill only one {0} parameter ({2}) {3}',
      userMessage: 'Fill only one field ({2}) {3}'
    }
  },
  '20043': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with unique value',
      userMessage: 'Invalid field {1} - it must be filled with unique value'
    }
  },
  '20044': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a license plate',
      userMessage: 'Invalid field {1} - it must be filled with a license plate'
    }
  },
  '20045': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid {2} for this {3}',
      userMessage: 'Invalid field {1} - it must be filled with a valid {2} for this {3}'
    }
  },
  '20046': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid body parameter compensation - it must be filled with a valid invoice',
      userMessage: 'Invalid field compensation - it must be filled with a valid invoice'
    }
  },
  '20047': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid body parameter delivery addres',
      userMessage: 'Invalid field delivery addres'
    }
  },
  '20048': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid body parameter invoice',
      userMessage: 'Field invoice can\'t be Conferred'
    }
  },
  '20049': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid body parameter client.id or header parameter client.password',
      userMessage: 'Invalid fields client.id or client.password'
    }
  },
  '20050': {
    httpcode: 400,
    en: {
      developerMessage: 'Invoice can not be canceled automatically',
      userMessage: 'Invoice can not be canceled automatically'
    }
  },
  '20051': {
    httpcode: 400,
    en: {
      developerMessage: 'State branches should be equal',
      userMessage: 'State branches should be equal'
    }
  },
  '20052': {
    httpcode: 400,
    en: {
      developerMessage: 'Branch Origin should be shop',
      userMessage: 'Branch Origin should be shop'
    }
  },
  '20053': {
    httpcode: 400,
    en: {
      developerMessage: 'Branch Destination should be shop',
      userMessage: 'Branch Destination should be shop'
    }
  },
  '20054': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid query parameters - specify period_greater and period_lesser or salesordernumber_greater',
      userMessage: 'Enter with field period_greater and period_lesser or salesordernumber_greater'
    }
  },
  '20055': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid query parameters period_greater and period_lesser - the interval between dates is greater than 7 days',
      userMessage: 'Invalid fields period_greater and period_lesser - the interval between dates is greater than 7 days'
    }
  },
  '20056': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid query parameter salesordernumber_lesser - the date of this order is lesser than 7 days',
      userMessage: 'Invalid field salesordernumber_lesser - the date of this order is lesser than 7 days'
    }
  },
  '20057': {
    httpcode: 400,
    en: {
      developerMessage: 'Unable to change the Order Traking Status - It already has a finished status',
      userMessage: 'Unable to change the Order Traking Status - It already has a finished status'
    }
  },
  '20058': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid body parameters - specify products or bundles',
      userMessage: 'Enter with field products or bundles'
    }
  },
  '20059': {
    httpcode: 400,
    en: {
      developerMessage: 'Product dimensions not compatible with Pick Up Store',
      userMessage: 'You are not allowed to pick up theses products in store due to the dimensions of one of them'
    }
  },
  '20060': {
    httpcode: 400,
    en: {
      developerMessage: 'Product currently unavailable in stock',
      userMessage: 'Product currently unavailable in stock'
    }
  },
  '20061': {
    httpcode: 404,
    en: {
      developerMessage: 'Product not found',
      userMessage: 'You attempted to get a Product, but did not find any'
    }
  },
  '20062': {
    httpcode: 404,
    en: {
      developerMessage: 'ZipCode not found',
      userMessage: 'You attempted to get a ZipCode, but did not find any'
    }
  },
  '20063': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid query parameters - specify branch.id or branchdestination.id',
      userMessage: 'Enter with field branch.id or branchdestination.id'
    }
  },
  '20064': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - Maximum length of {2} characters exceeded',
      userMessage: 'Invalid field {1} - Maximum length of {2} characters exceeded'
    }
  },
  '20065': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid query parameters - specify barcode, sku, modifiedat_lesser or modifiedat_greater',
      userMessage: 'Enter with field barcode, sku, modifiedat_lesser or modifiedat_greater'
    }
  },
  '20066': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameters {1} and {2} - the interval between dates is greater than 7 days',
      userMessage: 'Invalid fields {1} and {2} - the interval between dates is greater than 7 days'
    }
  },
  '20067': {
    httpcode: 404,
    en: {
      developerMessage: 'ServiceAgreement not found',
      userMessage: 'You attempted to get a ServiceAgreement, but did not find any'
    }
  },
  '20068': {
    httpcode: 404,
    en: {
      developerMessage: 'URL base path not found',
      userMessage: 'Resource not found'
    }
  },
  '20076': {
    httpcode: 400,
    en: {
      developerMessage: 'The option of payment through the carnet not allowed for orders that contain only services',
      userMessage: 'The option of payment through the carnet not allowed for orders that contain only services'
    }
  },
  '20077': {
    httpcode: 429,
    en: {
      developerMessage: 'Too Many Requests {0}',
      userMessage: 'Too Many Requests {0}'
    }
  },
  '20078': {
    httpcode: 409,
    en: {
      developerMessage: 'Unable to cancel this Reserve - It must be confirmed first',
      userMessage: 'Unable to cancel this Reserve - It must be confirmed first'
    }
  },
  '20079': {
    httpcode: 409,
    en: {
      developerMessage: 'Unable to edit this Reserve - It is already confirmed',
      userMessage: 'Unable to edit this Reserve - It is already confirmed'
    }
  },
  '20080': {
    httpcode: 409,
    en: {
      developerMessage: 'Status transition not allowed - Reserve already cancelled',
      userMessage: 'Status transition not allowed - Reserve already cancelled'
    }
  },
  '20081': {
    httpcode: 412,
    en: {
      developerMessage: 'Status transition not allowed',
      userMessage: 'Status transition not allowed'
    }
  },
  '20082': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled to {2} decimal places',
      userMessage: 'Invalid field {1} - it must be filled to {2} decimal places'
    }
  },
  '20083': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with {2} character(s)',
      userMessage: 'Invalid field {1} - it must be filled with {2} character(s)'
    }
  },
  '20084': {
    httpcode: 400,
    en: {
      developerMessage: 'Unable to Reserve products - Insufficient stock balance',
      userMessage: 'Unable to Reserve products - Insufficient stock balance'
    }
  },
  '20085': {
    httpcode: 412,
    en: {
      developerMessage: 'Unable to do this Reserve',
      userMessage: '    Unable to do the reserve - It\'s should be canceled first!'
    }
  },
  '20086': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a slug (are three characters where the first is a letter and the other two can be numbers and letters)',
      userMessage: 'Invalid field {1} - it must be filled with a slug (are three characters where the first is a letter and the other two can be numbers and letters)'
    }
  },
  '20087': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a value greater or equals than {2}',
      userMessage: 'Invalid field {1} - it must be filled with a value greater or equals than {2}'
    }
  },
  '20088': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a value lesser or equals than {2}',
      userMessage: 'Invalid field {1} - it must be filled with a value lesser or equals than {2}'
    }
  },
  '20089': {
    httpcode: 400,
    en: {
      developerMessage: 'Invalid {0} parameter {1} - it must be filled with a valid URI',
      userMessage: 'Invalid field {1} - it must be filled with a valid URI'
    }
  },
  '30001': {
    httpcode: 401,
    en: {
      developerMessage: 'Unauthorized - {0}',
      userMessage: 'You are not authorized to perform this operation'
    }
  }
}

export default errorCatalog
