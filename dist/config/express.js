'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 3000;

module.exports = function () {

    var app = (0, _express2.default)();

    // Log requests to console
    if (process.env.NODE_ENV === 'development') {
        app.use((0, _morgan2.default)('dev'));
    } else {
        app.use(compression);
    }

    // Initialize passport for use
    app.use(_passport2.default.initialize());

    // Bring in defined Passport Strategy
    require('./passport')();

    // Use body-parser to get POST requests for API use
    app.use(_bodyParser2.default.urlencoded({ extended: true }));
    app.use(_bodyParser2.default.json());

    // secure apps by setting various HTTP headers
    app.use((0, _helmet2.default)());

    // enable CORS - Cross Origin Resource Sharing
    app.use((0, _cors2.default)());

    // require('../app/routes')(app);
    require('../app/routes/user.routes')(app);

    app.use(_express2.default.static('./public'));

    return app;
};
//# sourceMappingURL=express.js.map
