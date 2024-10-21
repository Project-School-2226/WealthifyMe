const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    username: {
        type: String,
        required: true
    },
    accountCreatedOn: {
        type: Date,
        default: Date.now
    },
    user_id:{
        type: String,
        required: true
    }
    

});

const User = mongoose.model('User', userSchema);
module.exports = User;