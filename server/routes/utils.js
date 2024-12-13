const express = require('express');
const balance = require('../models/balance');

const router = express.Router();

router.get('/:user_id', async (req, res) => { 
    const { user_id } = req.params;
    try {
        const userBalance = await balance.findOne({ user_id });
        if (!userBalance) {
            return res.status(404).json({ message: 'Balance not found' });
        }
        res.status(200).json({"balance":userBalance});
    } catch (error) {
        res.status(500).json({ message: 'Error fetching balance', error });
    }
});