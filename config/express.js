// Include our packages in our main server file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const config = require('./config');
const cors = require('cors');
const port = 3000;

module.exports = function () {

    var app  = express();

    // Log requests to console
    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'))
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
    app.use(cors());

    // require('../app/routes')(app);
    require('../app/routes/user.routes')(app);

    app.use(express.static('./public'));

    return app;

};

