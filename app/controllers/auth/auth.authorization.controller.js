import httpStatus from 'http-status';
import User from '../../models/user';

function roleAuthorization(roles) {
    return function(req, res, next){
        var user = req.user;
        User.findById(user._id, function(err, foundUser){
            if(err){
                res.status(httpStatus.NOT_FOUND).json({message: 'No user found.'});
                return next(err);
            }
            if(roles.indexOf(foundUser.role) > -1){
                return next();
            }
            res.status(httpStatus.UNAUTHORIZED).json({message: 'You are not authorized to view this content'});
            return next('Unauthorized');

        });

    }
}

export default {roleAuthorization}
