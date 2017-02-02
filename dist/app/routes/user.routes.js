'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _authServer = require('../controllers/auth/auth.server.controller');

var _authServer2 = _interopRequireDefault(_authServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {

    var apiRoutes = _express2.default.Router(),
        authRoutes = _express2.default.Router();

    // authenticated middleware
    apiRoutes.use('/auth', authRoutes);

    authRoutes.post('/signup', _authServer2.default.signup);
    authRoutes.post('/signin', _authServer2.default.signin);
    authRoutes.post('/isLogin', _authServer2.default.isLogin);

    app.use('/api', apiRoutes);
};
//# sourceMappingURL=user.routes.js.map
