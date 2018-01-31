const _ = require('lodash')

const Helper = () => {}

Helper.clearJson = (object) => {
  if (object instanceof Array) {
    for (var i = object.length - 1; i >= 0; i--) {
      Helper.clearJson(object[i])
      if (Helper.isEmpty(object[i])) {
        object.splice(i, 1)
      }
    }
  } else if (typeof object === 'object') {
    for (var property in object) {
      var value = object[property]
      if (Helper.isEmpty(value)) {
        delete object[property]
      } else if (value instanceof Array || typeof value === 'object') {
        Helper.clearJson(value)
        if (Helper.isEmpty(value)) {
          delete object[property]
        }
      }
    }
  }
}

Helper.isEmpty = (object) => {
  if (_.isArray(object)) {
    return object.length === 0
  } else if (_.isObject(object)) {
    return _.isEmpty(object) && !_.isDate(object)
  } else if (_.trim(object) === '') {
    return true
  }
  return false
}

Helper.isString = (value) => {
  return typeof value === 'string'
}

Helper.trim = (value) => {
  if (value === undefined || value === null) {
    return ''
  }
  value = String(value)
  return value.replace(/^\s+|\s+$/g, '')
}

module.exports = Helper
