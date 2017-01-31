const User = require('../../models/user');
const config = require('../../../config/config');
const jwt = require('jsonwebtoken');

function generateToken(user){
    return jwt.sign(user, config.secret, {
        expiresIn: 10080
    });
}

exports.signup =  function(req, res) {
    var data = req.body;
    if(!req.body.email || !req.body.password) {
        res.status(400).json({ success: false, message: 'Please enter email and password.' });
    } else {
        const newUser = new User(data);
        // Attempt to save the user
        newUser.save(function(err) {
            if (err) {
                return res.status(400).json({ success: false, message: err.message});
            }
            res.status(201).json({ success: true, message: 'Successfully created new user.', data:data });
        });
    }
};

exports.signin =  function(req, res) {

    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) throw err;

        if (!user) {
            res.status(401).json({success: false, message: 'Authentication failed. User not found.'});
        } else {
            // Check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // Create token if the password matched and no error was thrown
                    const token = generateToken(user);
                    res.status(200).json({success: true, token: 'JWT ' + token});
                } else {
                    res.status(401).json({success: false, message: 'Authentication failed. Passwords did not match.'});
                }
            });
        }
    });
};
