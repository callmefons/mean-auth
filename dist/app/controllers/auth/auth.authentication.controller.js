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
/**
 * Create a Create new user
 * Use this method to register users to you core app.
 * @property {string} req.body.email - The email of user.
 * @property {string} req.body.password - The password of user.
 * @returns {User}
 */
function signup(req, res) {
    var data = req.body;
    if (!req.body.email || !req.body.password) {
        res.status(_httpStatus2.default.BAD_REQUEST).json({ success: false, message: 'Please enter email and password.' });
    } else {
        var newUser = new _user2.default(data);
        newUser.save().then(function (saveUser) {
            return res.status(_httpStatus2.default.CREATED).json({ message: 'Successfully created new user.' });
        }).catch(function (err) {
            return res.status(_httpStatus2.default.BAD_REQUEST).json({ message: err.message });
        });
    }
}

/**
 * Authenticate a user
 * Authenticate with email and password
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function signin(req, res, next) {

    _user2.default.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) throw err;

        if (!user) {
            res.status(_httpStatus2.default.UNAUTHORIZED).json({ message: 'Authentication failed. User not found.' });
        } else {
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    var token = _jsonwebtoken2.default.sign({ user: user }, _config2.default.secret);
                    res.status(_httpStatus2.default.OK).json({ user: user.email, token: token });
                } else {
                    res.status(_httpStatus2.default.NOT_FOUND).json({
                        message: 'Authentication failed. Passwords did not match.'
                    });
                }
            });
        }
    });
}

/**
 * Check login status
 * This method will return true if there is a local auth token. False otherwise.
 * @param req
 * @param res
 * @returns {*}
 */
function isLoggedIn(req, res) {
    _jsonwebtoken2.default.verify(req.body.token, _config2.default.secret, function (err, decode) {
        if (err) {
            return res.status(_httpStatus2.default.UNAUTHORIZED).json({ isLoggedIn: false, err: err });
        } else {
            return res.status(_httpStatus2.default.OK).json({ isLoggedIn: true, exp: decode.exp });
        }
    });
}

exports.default = { signup: signup, signin: signin, isLoggedIn: isLoggedIn };
module.exports = exports['default'];
//# sourceMappingURL=auth.authentication.controller.js.map
