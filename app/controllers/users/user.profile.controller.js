const User = require('../../models/user');
var jwt = require('jsonwebtoken');

var storage = require('node-persist');


exports.index =  function(req, res) {

    res.send('auth!!!!');

};


exports.profile =  function(req, res) {

    // verify a token symmetric - synchronous
    storage.initSync();
    var decoded = jwt.verify(storage.getItemSync('name'), 'longobnoxiouspassphrase');

        User.findOne({
            _id: decoded._doc._id
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