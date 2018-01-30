'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joiErrorParser = require('./apigee/errors/joiErrorParser');

var _errorParser = require('./apigee/errors/errorParser');

var _errorParser2 = _interopRequireDefault(_errorParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  buildJoiError: _joiErrorParser.buildJoiError,
  buildGenericErrors: _joiErrorParser.buildGenericErrors,
  errorParser: _errorParser2.default
};
//# sourceMappingURL=index.js.map
