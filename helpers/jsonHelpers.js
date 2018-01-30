import _ from 'lodash'

export function clearJson (object) {
  if (object instanceof Array) {
    for (var i = object.length - 1; i >= 0; i--) {
      clearJson(object[i])
      if (isEmpty(object[i])) {
        object.splice(i, 1)
      }
    }
  } else if (typeof object === 'object') {
    for (var property in object) {
      var value = object[property]
      if (isEmpty(value)) {
        delete object[property]
      } else if (value instanceof Array || typeof value === 'object') {
        clearJson(value)
        if (isEmpty(value)) {
          delete object[property]
        }
      }
    }
  }
}

export function isEmpty (object) {
  if (_.isArray(object)) {
    return object.length === 0
  } else if (_.isObject(object)) {
    return _.isEmpty(object) && !_.isDate(object)
  } else if (_.trim(object) === '') {
    return true
  }
  return false
}

export function isString (value) {
  return typeof value === 'string'
}

export function trim (value) {
  if (value === undefined || value === null) {
    return ''
  }
  value = String(value)
  return value.replace(/^\s+|\s+$/g, '')
}
