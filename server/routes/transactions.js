const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Create a new transaction
router.post('/transactions', async (req, res) => {
    const { user_id, type, amount, category_id, description, transaction_date } = req.body;

    try {
        const newTransaction = new Transaction({
            user_id,
            type,
            amount,
            category_id,
            description,
            transaction_date
        });
        await newTransaction.save();
        return res.status(201).json({ message: 'Transaction created', transaction: newTransaction });
    } catch (error) {
        return res.status(500).json({ message: 'Error creating transaction', error });
    }
});

// Read all transactions for a user
router.get('/transactions/:user_id', async (req, res) => {
    const { user_id } = req.params;

    try {
        const transactions = await Transaction.find({ user_id });
        return res.status(200).json(transactions);
    } catch (error) {
        return res.status(500).json({ message: 'Error retrieving transactions', error });
    }
});

// Update a transaction
router.put('/transactions/:id', async (req, res) => {
    const { id } = req.params;
    const { type, amount, category_id, description, transaction_date } = req.body;

    try {
        const updatedTransaction = await Transaction.findByIdAndUpdate(id, {
            type,
            amount,
            category_id,
            description,
            transaction_date
        }, { new: true });
        if (!updatedTransaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        return res.status(200).json({ message: 'Transaction updated', transaction: updatedTransaction });
    } catch (error) {
        return res.status(500).json({ message: 'Error updating transaction', error });
    }
});

// Delete a transaction
router.delete('/transactions/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedTransaction = await Transaction.findByIdAndDelete(id);
        if (!deletedTransaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        return res.status(200).json({ message: 'Transaction deleted', transaction: deletedTransaction });
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting transaction', error });
    }
});

module.exports = router;