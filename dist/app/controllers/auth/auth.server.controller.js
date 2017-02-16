'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _lodash2.default.extend(require('./authentication.controller'), require('./authorization.controller'));

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=auth.server.controller.js.map
