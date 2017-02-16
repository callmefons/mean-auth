const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
        enum: ['Buyer','Seller', 'Admin'],
        default: 'Buyer'
    },
    active:{
        type: Boolean,
        default: true
    }
    },{
        toObject: {
            transform: function (doc, ret) {
                delete ret._id;
                delete ret.__v;
                delete ret.password;
            }
        },
        toJSON: {
            transform: function (doc, ret) {
                delete ret._id;
                delete ret.__v;
                delete ret.password;
            }
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
