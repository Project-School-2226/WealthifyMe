const express = require('express');
const router = express.Router();
const Transaction = require('../models/transactions');

router.post('/createtransaction', async (req, res) => {
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

router.get('/usertransactions/:user_id', async (req, res) => {
    const { user_id } = req.params;
    try {

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 4;
        const skip = (page - 1) * limit;


        const transactions = await Transaction.find({ user_id })
            .sort({ transaction_date: -1 })
            .skip(skip)
            .limit(limit);


        const totalTransactions = await Transaction.countDocuments({ user_id });


        const totalPages = Math.ceil(totalTransactions / limit);

        return res.status(200).json({
            transactions,
            pagination: {
                currentPage: page,
                totalPages: totalPages,
                totalTransactions: totalTransactions,
                pageSize: limit
            }
        });
    } catch (error) {
        console.error('Error retrieving transactions:', error);
        return res.status(500).json({ 
            message: 'Error retrieving transactions', 
            error: error.message 
        });
    }
});

router.get('/filter', async (req, res) => {
    try {
        const { 
            startDate, 
            endDate, 
            type, 
            minAmount, 
            maxAmount, 
            userId 
        } = req.query;

        // Basic validation
        if (!userId) {
            return res.status(400).json({ 
                error: 'User ID is required' 
            });
        }

        // Base query to filter by user
        const query = { user_id: userId };

        // Apply date range filter
        if (startDate && endDate) {
            query.transaction_date = {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            };
        }

        // Apply transaction type filter
        if (type && ['Income', 'Expense'].includes(type)) {
            query.type = type;
        }

        // Apply amount range filter
        if (minAmount || maxAmount) {
            query.amount = {};
            
            if (minAmount) {
                query.amount.$gte = parseFloat(minAmount);
            }
            
            if (maxAmount) {
                query.amount.$lte = parseFloat(maxAmount);
            }
        }


        // Pagination
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        // Fetch filtered and sorted transactions
        const transactions = await Transaction.find(query)
            .sort()
            .skip(skip)
            .limit(limit);

        // Get total count for pagination
        const totalTransactions = await Transaction.countDocuments(query);

        res.json({
            transactions,
            totalTransactions,
            currentPage: page,
            totalPages: Math.ceil(totalTransactions / limit)
        });

    } catch (error) {
        console.error('Transaction filter error:', error);
        res.status(500).json({ 
            error: 'Internal server error', 
            details: error.message 
        });
    }
});

router.put('/updateTransactions/:id', async (req, res) => {
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

router.delete('/deleteTransactionById/:id', async (req, res) => {
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