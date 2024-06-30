const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const { type } = require("../Validation/User")

//definition of the Database Schema
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    },

    profileImage : {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
    },

    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        default : 'add phone number'
    },

    adress : {
        type: String,
        required: true,
        trim: true,
        default : 'add address'
    },

    gender : {
        type: String,
        trim: true,
        default : 'add gender'
    }, 

    facebook : {
        type : String,
        default : 'https://www.facebook.com'
    },

    instagram : {
        type : String,
        default : 'https://www.instagram.com'
    },

    twitter :{
        type : String,
        default : 'https://www.twitter.com'
    } 
})

// Hashing the password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      return next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

const User = mongoose.model('User', userSchema);
module.exports = User;