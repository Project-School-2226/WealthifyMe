const mongoose = require('mongoose');
const {Category} = require('./categories');
const Schema = mongoose.Schema;

const userSchema = new Schema({ 
    user_id: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    categories: [{
        type: String,
        required: true
    }],
})

const initialiseDefaultCategoriesForUser = async (user_id) => { 
    const user = await User.findOne({ user_id });
    if (!user) {
        throw new Error('User not found');
    }

    const defaultCategories = await Category.find({ is_default: true});
    
    for (const category of defaultCategories) { 
        user.categories.push(category.category_id);
    }

    await user.save();

}

const User = mongoose.model('User', userSchema);

module.exports = { 
    User,
    initialiseDefaultCategoriesForUser
}