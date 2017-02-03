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

router.route('/signin').post((0, _expressValidation2.default)(_auth2.default.signin), _authServer2.default.signin);
router.route('/isLoggedIn').post(_authServer2.default.isLoggedIn);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=auth.routes.js.map
