const _ = require('lodash')
const moment = require('moment')

const __joiToErrorCatalog = {
  'any.required': {
    code: 20001,
    parameters: function (detail, parameters) {
      return parameters
    }
  },
  'any.unknown': {
    code: 20006,
    parameters: function (detail, parameters) {
      return parameters
    }
  },
  'any.empty': {
    code: 20001,
    parameters: function (detail, parameters) {
      return parameters
    }
  },
  'any.allowOnly': {
    code: 20018,
    parameters: function (detail, parameters) {
      parameters.push(detail.context.valids)
      return parameters
    }
  },
  'any.invalid': {
    code: 20003,
    parameters: function (detail, parameters) {
      return parameters
    }
  },
  'array.base': {
    code: 20016,
    parameters: function (detail, parameters) {
      return parameters
    }
  },
  'array.includesRequiredUnknowns': {
    code: 20001,
    parameters: function (detail, parameters) {
      return parameters
    }
  },
  'array.unique': {
    code: 20043,
    parameters: function (detail, parameters) {
      let prefix = parameters[1]
      parameters = parameters.slice(0, 1)
      let attribute = prefix + '.' + detail.context.path
      parameters.push(attribute)
      return parameters
    }
  },
  'boolean.base': {
    code: 20009,
    parameters: function (detail, parameters) {
      return parameters
    }
  },
  'date.base': {
    code: 20008,
    parameters: function (detail, parameters) {
      return parameters
    }
  },
  'date.format': {
    code: 20008,
    parameters: function (detail, parameters) {
      return parameters
    }
  },
  'date.max': {
    code: 20088,
    parameters: function (detail, parameters) {
      parameters.push(moment(detail.context.limit).format())
      return parameters
    }
  },
  'date.isoDate': {
    code: 20008,
    parameters: function (detail, parameters) {
      parameters.push('ISO-8601')
      return parameters
    }
  },
  'number.integer': {
    code: 20002,
    parameters: function (detail, parameters) {
      parameters.push(detail.context.limit)
      return parameters
    }
  },
  'number.base': {
    code: 20007,
    parameters: function (detail, parameters) {
      return parameters
    }
  },
  'number.max': {
    code: 20088,
    parameters: function (detail, parameters) {
      parameters.push(detail.context.limit)
      return parameters
    }
  },
  'number.min': {
    code: 20087,
    parameters: function (detail, parameters) {
      parameters.push(detail.context.limit)
      return parameters
    }
  },
  'number.precision': {
    code: 20082,
    parameters: function (detail, parameters) {
      parameters.push(detail.context.limit)
      return parameters
    }
  },
  'object.allowUnknown': {
    code: 20006,
    parameters: function (detail, parameters) {
      return parameters
    }
  },
  'object.missing': {
    code: 20042,
    parameters: function (detail, parameters) {
      let prefix = parameters[1]
      if (prefix !== 'value') {
        let attributes = detail.context.peers.map(function (attribute) {
          return prefix + '.' + attribute
        })
        parameters.push(attributes)
      } else {
        parameters.push(detail.context.peers)
      }
      return parameters
    }
  },
  'object.and': {
    code: 20001,
    parameters: function (detail, parameters) {
      return parameters
    }
  },
  'object.base': {
    code: 20019,
    parameters: function (detail, parameters) {
      return parameters
    }
  },
  'object.nand': {
    code: 20042,
    parameters: function (detail, parameters) {
      let prefix = parameters[1]
      if (prefix !== 'value') {
        let attributes = detail.context.peers.map(function (attribute) {
          return prefix + '.' + attribute
        })
        attributes = _.concat(prefix + '.' + detail.context.main, attributes)
        parameters.push(attributes)
      } else {
        parameters.push(detail.context.peers)
      }
      return parameters
    }
  },
  'object.xor': {
    code: 20042,
    parameters: function (detail, parameters) {
      let prefix = parameters[1]
      if (prefix !== 'value') {
        let attributes = detail.context.peers.map(function (attribute) {
          return prefix + '.' + attribute
        })
        parameters.push(attributes)
      } else {
        parameters.push(detail.context.peers)
      }
      return parameters
    }
  },
  'string.base': {
    code: 20003,
    parameters: function (detail, parameters) {
      return parameters
    }
  },
  'string.min': {
    code: 20087,
    parameters: function (detail, parameters) {
      parameters.push(detail.context.limit)
      return parameters
    }
  },
  'string.max': {
    code: 20088,
    parameters: function (detail, parameters) {
      parameters.push(detail.context.limit)
      return parameters
    }
  },
  'string.length': {
    code: 20083,
    parameters: function (detail, parameters) {
      parameters.push(detail.context.limit)
      return parameters
    }
  },
  'string.guid': {
    code: 20012,
    parameters: function (detail, parameters) {
      parameters.push(detail.context.key)
      return parameters
    }
  },
  'string.uri': {
    code: 20089,
    parameters: function (detail, parameters) {
      parameters.push(detail.context.key)
      return parameters
    }
  },
  'string.email': {
    code: 20013,
    parameters: function (detail, parameters) {
      return parameters
    }
  }
}

module.exports = __joiToErrorCatalog
