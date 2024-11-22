const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    category_id: { 
        type: String,
        required: true,
        unique: true 
    },
    category_name: {
        type: String,
        required: true,
        trim: true 
    },
    is_default: {
        type: Boolean,
        default: false // Flag to indicate if the category is a default category
    }
}, {
    timestamps: true // Automatically create createdAt and updatedAt fields
});

const Category = mongoose.model('Category', categorySchema);

// Default categories with fixed IDs
const defaultCategories = [
    { category_id: '1', category_name: 'Food', is_default: true },
    { category_id: '2', category_name: 'Transport', is_default: true },
    { category_id: '3', category_name: 'Entertainment', is_default: true },
    { category_id: '4', category_name: 'Utilities', is_default: true },
    { category_id: '5', category_name: 'Health', is_default: true }
];

module.exports = { Category, defaultCategories };