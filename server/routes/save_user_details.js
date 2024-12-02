const express = require('express');
const router = express.Router();
const { User, initialiseDefaultCategoriesForUser } = require('../models/users');

router.post('/save', async (req, res) => {
    const { user_id, email, username } = req.body;

    if (!user_id || !email || !username) {
        console.log("Please fill in all fields");
        return res.status(400).json({ message: "Please fill in all fields" });
    }

    try {
        const existingUser = await User.findOne({ user_id });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = new User({ user_id, email, username });
        const newUser = await user.save();

        if (newUser) {
            await initialiseDefaultCategoriesForUser(user_id);
            res.status(200).json({ message: "User saved" });
        } else {
            res.status(400).json({ message: "User not saved" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;