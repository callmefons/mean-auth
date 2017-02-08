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
                    let token = jwt.sign({user},config.secret);
                    res.status(httpStatus.CREATED).json({token,user});
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


function isLoggedIn (req,res) {
    jwt.verify(req.headers['authorization'], config.secret,function (err,decode){
       if(err) {
           return res.status(httpStatus.UNAUTHORIZED).json({isLoggedIn: false, err: err})
       }else{
           return res.status(httpStatus.OK).json({isLoggedIn: true, user:decode})
       }
    });
}
export default {login, isLoggedIn}

