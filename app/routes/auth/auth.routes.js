import express from 'express';
import validate from 'express-validation';
import paramValidation from './auth.validation';
import auth from'../../controllers/auth/auth.server.controller';

const router = express.Router();

router.route('/login').post(validate(paramValidation.login), auth.login);
router.route('/isLoggedIn').post(auth.isLoggedIn);

export default router;