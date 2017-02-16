import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import User from '../../models/user';
import config from '../../../config/config';

function generateToken(user){
    return jwt.sign(user, config.secret, {
        expiresIn: 60
    });
}

function login(req, res, next) {

    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) throw err;

        if (!user) {
            res.status(httpStatus.UNAUTHORIZED).json({
                message:'Authentication failed. Invalid login.',
                code:httpStatus.UNAUTHORIZED,
            });
        } else {
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {

                    var token = jwt.sign({user},config.secret);

                    user['active'] = true;
                    user.save();

                    res.status(httpStatus.CREATED).json({token, user});

                } else {
                    res.status(httpStatus.UNAUTHORIZED).json({
                        message: 'Authentication failed. Invalid login.',
                        code:httpStatus.UNAUTHORIZED
                    });
                }
            });
        }
    });
}

function logout(req, res, next) {


}


export default {login, logout}

