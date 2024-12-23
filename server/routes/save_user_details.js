const express = require('express');
const router = express.Router();
const { User, initialiseDefaultCategoriesForUser } = require('../models/users');
const balance = require('../models/balance');
const UserBudget = require('../models/userbudget');

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
        const user = await User.findOne({ user_id });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.status(200).json({ firstTime: user.firstTimeLogin });
    } catch (error) { 
        console.error('Error fetching user:', error);
        return res.status(500).json({ error: 'Error fetching user', details: error.message });
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

router.post('/saveUserBudget', async (req, res) => {
    try {
        const { user_id, budget } = req.body;
        console.log(user_id, budget);

        if (!user_id || !Array.isArray(budget) || budget.length === 0) {
            return res.status(400).json({ error: 'Invalid input data' });
        }

        let userBudget = await UserBudget.findOne({ user_id });

        if (userBudget) {
            userBudget.budget = budget;
            await userBudget.save();
            return res.status(200).json({ message: 'Budget updated successfully'});
        } else {
            userBudget = new UserBudget({
                user_id,
                budget
            });
            await userBudget.save();
            return res.status(201).json({ message: 'Budget created successfully'});
        }
    } catch (error) {
        console.error('Error in /budget POST:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;