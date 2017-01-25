const express = require('express');
const passport = require('passport');
const user = require('../controllers/users/user.server.controller');

module.exports = function (app) {

    const requireAuth = passport.authenticate('jwt', { session: false });
    var     apiRoutes   = express.Router(),
            authRoutes  = express.Router(),
            userRoutes  = express.Router();

    // authenticated
    apiRoutes.use('/auth', authRoutes);
    authRoutes.post('/signup',user.signup);
    authRoutes.post('/signin',user.signin);

    // user profile
    apiRoutes.use('/user', userRoutes);
    userRoutes.get('/profile', requireAuth, user.roleAuthorization(['Client']), user.profile);

    app.use('/api', apiRoutes);
};