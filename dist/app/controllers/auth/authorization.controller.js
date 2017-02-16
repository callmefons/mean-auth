'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _config = require('../../../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isLoggedIn(req, res) {
    _jsonwebtoken2.default.verify(req.headers['authorization'], _config2.default.secret, function (err, decode) {
        if (err) {
            return res.status(_httpStatus2.default.UNAUTHORIZED).json({ isLoggedIn: false, err: err });
        } else {
            return res.status(_httpStatus2.default.OK).json({ isLoggedIn: true, user: decode });
        }
    });
}

exports.default = { isLoggedIn: isLoggedIn };
module.exports = exports['default'];
//# sourceMappingURL=authorization.controller.js.map
