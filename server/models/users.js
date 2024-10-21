const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required:true
    },
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
    }  
});

const User = mongoose.model('User', userSchema);
module.exports = User;