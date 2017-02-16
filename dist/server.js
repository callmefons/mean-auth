'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose');
var express = require('./config/express');
var passport = require('./config/passport');
var config = require('./config/config');

var db = mongoose();
var app = express();
passport();

app.listen(config.port);
module.exports = app;

console.log('Server running at http://localhost:' + config.port);
//# sourceMappingURL=server.js.map
