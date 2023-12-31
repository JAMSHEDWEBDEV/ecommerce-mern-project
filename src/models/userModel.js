const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name: {
        type: String,
        required: [ true, 'user name is required'],
        trim: true,
        minlength: [3, 'user name minimum length 3 character'],
        maxlength: [31, 'user name maximum length 31 character']
    },
    email: {
        type: String,
        required: [ true, 'user email is required'],
        trim: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: 'Please enter a valid email address'
        }
    },
    password: {
        type: String,
        required: [ true, 'user password is required'],
        minlength: [6, 'minimum length can be 6 character'],
        set: (v)=> bcrypt.hashSync(v, bcrypt.genSaltSync(10))
    },
    image: {
        type: String,
    },
    address: {
        type: String,
        required: [ true, 'user address is required'],
    },
    phone: {
        type: String,
        required: [ true, 'user phone is required'],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isBanned: {
        type: Boolean,
        default: false,
    },

},{timestamps: true});

const User = model('Users', userSchema);
module.exports = User;