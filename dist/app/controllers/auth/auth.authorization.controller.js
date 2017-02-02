'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _user = require('../../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function roleAuthorization(roles) {
    return function (req, res, next) {
        var user = req.user;
        _user2.default.findById(user._id, function (err, foundUser) {
            if (err) {
                res.status(_httpStatus2.default.NOT_FOUND).json({ message: 'No user found.' });
                return next(err);
            }
            if (roles.indexOf(foundUser.role) > -1) {
                return next();
            }
            res.status(_httpStatus2.default.UNAUTHORIZED).json({ message: 'You are not authorized to view this content' });
            return next('Unauthorized');
        });
    };
}

exports.default = { roleAuthorization: roleAuthorization };
module.exports = exports['default'];
//# sourceMappingURL=auth.authorization.controller.js.map
