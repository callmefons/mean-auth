const mongoose = require('mongoose');
const validate = require('mongoose-validator');
const bcrypt = require('bcrypt');


var nameValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 50],
        message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
    }),
    validate({
        validator: 'isAlphanumeric',
        passIfEmpty: true,
        message: 'Name should contain alpha-numeric characters only'
    })
];

// Schema defines how the user's data will be stored in MongoDB
const UserSchema = new mongoose.Schema({
        email: {
            type: String,
            lowercase: true,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['Client', 'Manager', 'Admin'],
            default: 'Client'
        },
        properties: {},
    }, {
        toObject: {
            transform: function (doc, ret) {
                delete ret.password;
            }
        },
        toJSON: {
            transform: function (doc, ret) {
                delete ret.password;
            }
        }
    },
    {strict: false});

// Saves the user's password hashed (plain text password storage is not good)
UserSchema.pre('save', function (next) {
    const user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

// Create method to compare password input to password saved in database
UserSchema.methods.comparePassword = function (pw, cb) {
    bcrypt.compare(pw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
