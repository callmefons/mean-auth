const User = require('../../models/user');

exports.profile =  function(req, res) {

    User.findOne({
        _id: req.user._id
    },	function(err,user){
        if (err) {
            return next(err);
        }else{
            res.status(200).json({
                success: true,
                email: user.email
            });
        }
    });

};