'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    // POST /api/auth/signin
    login: {
        body: {
            email: _joi2.default.string().required().email(),
            password: _joi2.default.string().required().regex(/^[a-zA-Z0-9]{3,30}$/)
        }
    }
};
module.exports = exports['default'];
//# sourceMappingURL=auth.validation.js.map
