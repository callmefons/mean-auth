const express = require('express');
const passport = require('passport');
const user = require('../controllers/user.controller');
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function (app) {

    const apiRoutes = express.Router();
    const requireAuth = passport.authenticate('jwt', { session: false });

    apiRoutes.post('/signup',user.signup);
    apiRoutes.post('/signin',user.signin);

    // GET messages for authenticated user
    apiRoutes.route('/user')
        .get(requireAuth,user.profile);

    app.use('/api', apiRoutes);
};