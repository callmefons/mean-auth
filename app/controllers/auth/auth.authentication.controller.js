import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import User from '../../models/user';
import config from '../../../config/config';

function generateToken(user){
    return jwt.sign(user, config.secret, {
        expiresIn: 60
    });
}
/**
 * Create a Create new user
 * Use this method to register users to you core app.
 * @property {string} req.body.email - The email of user.
 * @property {string} req.body.password - The password of user.
 * @returns {User}
 */
function signup (req, res) {
    let data = req.body;
    if(!req.body.email || !req.body.password) {
        res.status(httpStatus.BAD_REQUEST).json({ success: false, message: 'Please enter email and password.' });
    } else {
        const newUser = new User(data);
        newUser.save()
            .then(saveUser => res.status(httpStatus.CREATED).json({ message: 'Successfully created new user.' }))
            .catch(err => res.status(httpStatus.BAD_REQUEST).json({ message: err.message}));
    }
}

/**
 * Authenticate a user
 * Authenticate with email and password
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function signin(req, res, next) {

    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) throw err;

        if (!user) {
            res.status(httpStatus.UNAUTHORIZED).json({ message:'Authentication failed. User not found.' });
        } else {
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    let token = jwt.sign({user},config.secret);
                    res.status(httpStatus.OK).json({user: user.email, token});
                } else {
                    res.status(httpStatus.NOT_FOUND).json({
                        message: 'Authentication failed. Passwords did not match.'
                    });
                }
            });
        }
    });
}

/**
 * Check login status
 * This method will return true if there is a local auth token. False otherwise.
 * @param req
 * @param res
 * @returns {*}
 */
function isLoggedIn (req,res) {
    jwt.verify(req.body.token, config.secret,function (err,decode){
       if(err) {
           return res.status(httpStatus.UNAUTHORIZED).json({isLoggedIn: false, err: err})
       }else{
           return res.status(httpStatus.OK).json({isLoggedIn: true, exp:decode.exp})
       }
    });
}

export default {signup, signin, isLoggedIn}

