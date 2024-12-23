const express = require('express');
const router = express.Router();
const { User, initialiseDefaultCategoriesForUser } = require('../models/users');
const balance = require('../models/balance');

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

router.get('/userFirstTimeLogin/:user_id', async (req, res) => { 
    const { user_id } = req.params;
    try {
        const user = await User.findOne({user_id});
        console.log(user.user_id);
        if (!user) {
            return res.status(404).json({message: 'User not found'});
        }

        return res.status(200).json({firstTimeLogin: user.firstTimeLogin});
    } catch (error) { 
        return res.status(500).json({message: 'Error fetching user', error});
    }
});

router.post('/saveBalance', async (req, res) => {
    const { user_id, bal } = req.body;
    // console.log(user_id, bal);
    try {
        const existingBalance = await balance.findOne({ user_id });
        const user = await User.findOne({ user_id });

        if (existingBalance) {
            return res.status(400).json({ message: 'Balance for the user already exists' });
        }
        user.firstTimeLogin = false;
        const newBalance = new balance({
            user_id: user_id,
            balance: bal
        });

        await user.save();
        await newBalance.save();

        return res.status(201).json({ message: 'Balance created', balance: newBalance });
    } catch (error) {
        return res.status(500).json({ message: 'Error creating balance', error });
    }
});

module.exports = router;