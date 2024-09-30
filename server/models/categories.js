const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null  
    },
    category_name: {
        type: String,
        required: true
    }
}, {
    unique: {
        user_id: 1, 
        category_name: 1  
    }
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;