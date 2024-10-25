const express = require('express');
const router = express.Router();
const User = require('../models/users');


router.post('/save', async (req, res) => {
    const { user_id,email, username } = req.body;

    if(!user_id || !email || !username) {
        console.log("Please provide all details");
        return res.status(400).json({ message: "Please provide all details" });
    }

    const user = new User({ user_id,email, username});

    try {
        const newUser = await user.save();
        if (newUser) {
            res.status(200).json({ message: "User saved" });
        } else {
            res.status(400).json({ message: "User not saved" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;