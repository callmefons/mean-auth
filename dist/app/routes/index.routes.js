'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('./auth/auth.routes');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {

    var apiRouter = _express2.default.Router();

    apiRouter.use('/auth', _auth2.default);

    app.use('/api', apiRouter);
};
//# sourceMappingURL=index.routes.js.map
