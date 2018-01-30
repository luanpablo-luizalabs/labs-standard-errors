'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearJson = clearJson;
exports.isEmpty = isEmpty;
exports.isString = isString;
exports.trim = trim;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function clearJson(object) {
  if (object instanceof Array) {
    for (var i = object.length - 1; i >= 0; i--) {
      clearJson(object[i]);
      if (isEmpty(object[i])) {
        object.splice(i, 1);
      }
    }
  } else if (typeof object === 'object') {
    for (var property in object) {
      var value = object[property];
      if (isEmpty(value)) {
        delete object[property];
      } else if (value instanceof Array || typeof value === 'object') {
        clearJson(value);
        if (isEmpty(value)) {
          delete object[property];
        }
      }
    }
  }
}

function isEmpty(object) {
  if (_lodash2.default.isArray(object)) {
    return object.length === 0;
  } else if (_lodash2.default.isObject(object)) {
    return _lodash2.default.isEmpty(object) && !_lodash2.default.isDate(object);
  } else if (_lodash2.default.trim(object) === '') {
    return true;
  }
  return false;
}

function isString(value) {
  return typeof value === 'string';
}

function trim(value) {
  if (value === undefined || value === null) {
    return '';
  }
  value = String(value);
  return value.replace(/^\s+|\s+$/g, '');
}
//# sourceMappingURL=jsonHelpers.js.map
