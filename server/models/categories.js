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
    }
});

const Category = mongoose.model('Category', categorySchema);

const defaultCategories = [
    { category_id: '1', category_name: 'Food', is_default: true },
    { category_id: '2', category_name: 'Transport', is_default: true },
    { category_id: '3', category_name: 'Entertainment', is_default: true },
    { category_id: '4', category_name: 'Utilities', is_default: true },
    { category_id: '5', category_name: 'Health', is_default: true }
];

const initialiseDefaultCategoriesinDB = async () => { 
    for (const category of defaultCategories) {
        const existingCategory = await Category.findOne({ category_id: category.category_id });
        if (!existingCategory) {
            await new Category(category).save();
        } else {
            // Check if the existing category needs to be updated
            if (existingCategory.category_name !== category.category_name || existingCategory.is_default !== category.is_default) {
                existingCategory.category_name = category.category_name;
                existingCategory.is_default = category.is_default;
                await existingCategory.save();
            }
        }
    }
}

module.exports = {
    Category,
    initialiseDefaultCategoriesinDB
}