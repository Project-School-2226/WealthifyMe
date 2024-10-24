const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    user_id: {
        type: String,
        required: true 
    },
    category_id: { 
        type: String,
        required: true,
        unique: true 
    },
    category_name: {
        type: String,
        required: true,
        trim: true 
    }
}, {
    timestamps: true // Automatically create createdAt and updatedAt fields
});

// Ensure unique category names per user
categorySchema.index({ user_id: 1, category_name: 1 }, { unique: true });

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;s