const express = require('express');
const router = express.Router();
const {Category} = require('../models/categories');
const {User} = require('../models/users')

//add a new category
router.post('/new-category', async (req, res) => {
    const { user_id, category_name } = req.body;

    try {
        const existingCategory = await Category.findOne({ user_id, category_name });
        if (existingCategory) {
            return res.status(400).json({ message: 'Category already exists' });
        }

        const category = new Category({ user_id, category_name });
        await category.save();
        res.status(201).json({ message: 'Category created successfully', category });
    } catch (error) {
        res.status(500).json({ message: 'Error creating category', error });
    }
});

router.get('/:user_id', async (req, res) => {
    const { user_id } = req.params;

    try {
        const userWithCategories = await User.aggregate([
            { $match: { user_id } },
            {
                $lookup: {
                    from: "categories", 
                    localField: "categories",
                    foreignField: "category_id",
                    as: "categoriesInfo"
                }
            }
        ]);

        if (!userWithCategories.length) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(userWithCategories[0].categoriesInfo);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching categories', error: error.message });
    }
});

// Update a category by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { category_name } = req.body;

    try {
        const updatedCategory = await Category.findByIdAndUpdate(id, { category_name }, { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json({ message: 'Category updated successfully', updatedCategory });
    } catch (error) {
        res.status(500).json({ message: 'Error updating category', error });
    }
});

// Delete a category by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCategory = await Category.findByIdAndDelete(id);
        if (!deletedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting category', error });
    }
});

module.exports = router;