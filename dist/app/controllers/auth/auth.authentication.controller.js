'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _user = require('../../models/user');

var _user2 = _interopRequireDefault(_user);

var _config = require('../../../config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateToken(user) {
    return _jsonwebtoken2.default.sign(user, _config2.default.secret, {
        expiresIn: 60
    });
}

function login(req, res, next) {

    _user2.default.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) throw err;

        if (!user) {
            res.status(_httpStatus2.default.UNAUTHORIZED).json({
                message: 'Authentication failed. Invalid login.',
                code: _httpStatus2.default.UNAUTHORIZED
            });
        } else {
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    var token = _jsonwebtoken2.default.sign({ user: user }, _config2.default.secret);
                    res.status(_httpStatus2.default.CREATED).json({ token: token, user: user });
                } else {
                    res.status(_httpStatus2.default.UNAUTHORIZED).json({
                        message: 'Authentication failed. Invalid login.',
                        code: _httpStatus2.default.UNAUTHORIZED
                    });
                }
            });
        }
    });
}

function isLoggedIn(req, res) {
    _jsonwebtoken2.default.verify(req.headers['authorization'], _config2.default.secret, function (err, decode) {
        if (err) {
            return res.status(_httpStatus2.default.UNAUTHORIZED).json({ isLoggedIn: false, err: err });
        } else {
            return res.status(_httpStatus2.default.OK).json({ isLoggedIn: true, user: decode });
        }
    });
}
exports.default = { login: login, isLoggedIn: isLoggedIn };
module.exports = exports['default'];
//# sourceMappingURL=auth.authentication.controller.js.map
