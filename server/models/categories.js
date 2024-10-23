const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    user_id: {
        type: String,
        required: true // Ensure user_id is always provided
    },
    category_id: { 
        type: String,
        required: true,
        unique: true // Ensure category
    },
    category_name: {
        type: String,
        required: true,
        trim: true // Remove whitespace from both ends
    }
}, {
    timestamps: true // Automatically create createdAt and updatedAt fields
});

// Ensure unique category names per user
categorySchema.index({ user_id: 1, category_name: 1 }, { unique: true });

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;s