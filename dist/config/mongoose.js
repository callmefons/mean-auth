'use strict';

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {

    Promise = require('bluebird');

    _mongoose2.default.Promise = Promise;
    _mongoose2.default.set('debug', _config2.default.debug);

    // connect to mongo db
    var db = _mongoose2.default.connect(_config2.default.mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
    _mongoose2.default.connection.on('error', function () {
        throw new Error('unable to connect to database: ' + _config2.default.mongoUri);
    });

    require('../app/models/user');

    return db;
};
//# sourceMappingURL=mongoose.js.map
