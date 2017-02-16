'use strict';

var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var User = require('../../app/models/user');
var config = require('../config');

//ExtractJwt.fromUrlQueryParameter('jwt');

// Setup work and export for the JWT passport strategy
module.exports = function () {
    var opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeader(),
        secretOrKey: config.secret
    };
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.findOne({ id: jwt_payload.id }, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
};
//# sourceMappingURL=local.js.map
