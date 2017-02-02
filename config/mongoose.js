import config from './config';
import mongoose  from 'mongoose';

module.exports = function(){

    Promise = require('bluebird');

    mongoose.Promise = Promise;
    mongoose.set('debug', config.debug);

    // connect to mongo db
    var db = mongoose.connect(config.mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
    mongoose.connection.on('error', () => {
        throw new Error(`unable to connect to database: ${config.mongoUri}`);
    });

    require('../app/models/user');

    return db;
};