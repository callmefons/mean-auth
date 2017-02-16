import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import config from '../../../config/config';

function isLoggedIn (req,res) {
    jwt.verify(req.headers['authorization'], config.secret,function (err,decode){
        if(err) {
            return res.status(httpStatus.UNAUTHORIZED).json({isLoggedIn: false, err: err})
        }else{
            return res.status(httpStatus.OK).json({isLoggedIn: true, user:decode})
        }
    });
}

export default {isLoggedIn}

