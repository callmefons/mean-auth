process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const mongoose = require('./config/mongoose');
const express = require('./config/express');
const passport = require('./config/passport');
const config = require('./config/config');

const db = mongoose();
const app = express();
passport();

app.listen(config.port);
module.exports = app;

console.log(`Server running at http://localhost:${config.port}`);
