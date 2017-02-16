import express from 'express';
import authRouter from './auth/auth.routes';

module.exports = function (app) {

    const apiRouter   = express.Router();

    apiRouter.use('/auth', authRouter);

    app.use('/api', apiRouter);
};

