import Joi from 'joi';

export default {
    // POST /api/auth/login
    login: {
        body: {
            email: Joi.string().required().email(),
            password: Joi.string().required().regex(/^[a-zA-Z0-9]{3,30}$/)
        }
    }
};
