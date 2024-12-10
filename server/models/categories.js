const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categorySchema = new Schema({
    category_id: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    category_name: {
        type: String,
        required: true,
        trim: true
    },
    is_default: {
        type: Boolean,
        required: true
    },
    category_type: {  
        type: String,
        enum: ['Income', 'Expense'],  
        required: true
    }
});

// Create the Category model
const Category = mongoose.model('Category', categorySchema);

// Default categories with category_type (Income or Expense)
const defaultCategories = [
    { category_id: '1', category_name: 'Food', is_default: true, category_type: 'Expense' },
    { category_id: '2', category_name: 'Transport', is_default: true, category_type: 'Expense' },
    { category_id: '3', category_name: 'Entertainment', is_default: true, category_type: 'Expense' },
    { category_id: '4', category_name: 'Utilities', is_default: true, category_type: 'Expense' },
    { category_id: '5', category_name: 'Health', is_default: true, category_type: 'Expense' },
    { category_id: '6', category_name: 'Salary', is_default: true, category_type: 'Income' },
    { category_id: '7', category_name: 'Freelance', is_default: true, category_type: 'Income' },
    { category_id: '8', category_name: 'Investment', is_default: true, category_type: 'Income' }
];

// Function to initialize the default categories in the database
const initialiseDefaultCategoriesinDB = async () => { 
    for (const category of defaultCategories) {
        const existingCategory = await Category.findOne({ category_id: category.category_id });
        
        if (!existingCategory) {
            await new Category(category).save(); // Insert new category if it doesn't exist
        } else {
            if (
                existingCategory.category_name !== category.category_name ||
                existingCategory.is_default !== category.is_default ||
                existingCategory.category_type !== category.category_type
            ) {
                existingCategory.category_name = category.category_name;
                existingCategory.is_default = category.is_default;
                existingCategory.category_type = category.category_type;
                await existingCategory.save(); 
            }
        }
    }
}

module.exports = {
    Category,
    initialiseDefaultCategoriesinDB
}