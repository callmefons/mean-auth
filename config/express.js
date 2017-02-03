import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import passport from 'passport';
import cors from 'cors';
import helmet from 'helmet';

const port = 3000;

module.exports = function () {

    var app  = express();

    // Log requests to console
    if(process.env.NODE_ENV === 'development'){
        app.use(logger('dev'));
    }else{
        app.use(compression);
    }

    // Initialize passport for use
    app.use(passport.initialize());

    // Bring in defined Passport Strategy
    require('./passport')();

    // Use body-parser to get POST requests for API use
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // secure apps by setting various HTTP headers
    app.use(helmet());

    // enable CORS - Cross Origin Resource Sharing
    app.use(cors());

    // require('../app/routes')(app);
    require('../app/routes/index.routes')(app);

    app.use(express.static('./public'));

    return app;

};

