'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressValidation = require('express-validation');

var _expressValidation2 = _interopRequireDefault(_expressValidation);

var _auth = require('./auth.validation');

var _auth2 = _interopRequireDefault(_auth);

var _authServer = require('../../controllers/auth/auth.server.controller');

var _authServer2 = _interopRequireDefault(_authServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* eslint-disable max-len */
/**
 * @api {post} /auth/login Login
 * @apiDescription Login with email and password
 * @apiVersion 0.1.0
 * @apiName Login
 * @apiGroup Auth
 *
 * @apiExample Example usage:
 * curl -i -X POST https://localhost:3000/auth/login \
 * -H 'Content-type: application/json'  \
 * -d @- << EOF
 * {
 *   "email": "testuser01@gmail.com",
 *   "password": "testuser01"
 * }
 * EOF
 *
 * @apiHeader Content-type=application/json
 *
 * @apiParam {String} email User's email.
 * @apiParam {String} password User's password.
 *
 * @apiSuccess (Created 201) {String} token JWT Access token.
 * @apiSuccess (Created 201) {Object} data User model object
 * @apiSuccessExample Success Response:
 * HTTP/1.1 201 Created
 * {
 *  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7Il9pZCI6IjU4OTQ0ZmIxYzY2OGViMjhlNzVmYzhhNyIsImVtYWlsIjoibmF0dGFmYWhoQGctYWJsZS5jb20iLCJuYW1lIjoiZm9uNiIsImxhc3RuYW1lIjoibWFpcml0dGhhIiwiX192IjowLCJjb21wYW55IjoieW9vIiwicm9sZSI6IkFkbWluIn0sImlhdCI6MTQ4NjQ1NTA0MH0.wbJ8VX_U8YyiTiOCknPZOKsO0IqOXByFbnNy28XYNR8",
 *  "user": {
 *   "_id": "58944fb1c668eb28e75fc8a7",
 *   "email": "nattafahh@g-able.com",
 *   "name": "nattaya",
 *   "lastname": "mairittha",
 *   "__v": 0,
 *   "role": "Admin"
 *  }
 * }
 *
 * @apiError Unauthorized Invalid login.
 *
 * @apiErrorExample Error Response:
 * HTTP/1.1 401 Unauthorized
 * {
 *  "message": "Authentication failed. Invalid login.",
 *  "code": 401
 * }
 * @apiSuccess {String} firstname Firstname of the User.
 * */

router.route('/login').post((0, _expressValidation2.default)(_auth2.default.login), _authServer2.default.login);
router.route('/isLoggedIn').post(_authServer2.default.isLoggedIn);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=auth.routes.js.map
