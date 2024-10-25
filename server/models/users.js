const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Category, defaultCategories } = require('./categories');

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
    
    categories: {
        type: [Category.schema],
        default: defaultCategories // Initialize with default categories
    },
    accountCreatedOn: {
        type: Date,
        default: Date.now
    }  
});

const User = mongoose.model('User', userSchema);
module.exports = User;