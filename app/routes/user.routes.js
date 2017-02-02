import express from 'express';
import auth from'../controllers/auth/auth.server.controller';

module.exports = function (app) {

    const   apiRoutes   = express.Router(),
            authRoutes  = express.Router();

    // authenticated middleware
    apiRoutes.use('/auth', authRoutes);

    authRoutes.post('/signup', auth.signup);
    authRoutes.post('/signin', auth.signin);
    authRoutes.post('/isLogin', auth.isLoggedIn);

    app.use('/api', apiRoutes);
};

