const express = require('express');
const router = express.Router();
const Transaction = require('../models/transactions');
const Balance = require('../models/balance'); // Ensure the Balance model is imported
const { v4: uuidv4 } = require('uuid');

router.post('/createtransaction', async (req, res) => {
    const { user_id, type, amount, category_id, description, transaction_date } = req.body;

    try {

        const userBalance = await Balance.findOne({ user_id });

        if (!userBalance) {
            return res.status(404).json({ message: 'Balance not found for user' });
        }

        if (type === 'Expense') {
            if (userBalance.balance < amount) {
                return res.status(400).json({ message: 'Insufficient balance' });
            }
            userBalance.balance -= amount;
        } else if (type === 'Income') {
            userBalance.balance += amount;
        }

        await userBalance.save();

        const transaction_id=uuidv4();


        const newTransaction = new Transaction({
            user_id,
            transaction_id,
            type,
            amount,
            category_id,
            description,
            transaction_date,
        });
        await newTransaction.save();

        return res.status(201).json({
            message: 'Transaction created',
            transaction: newTransaction,
            updatedBalance: userBalance.balance,
        });
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

router.get('/analytics', async (req, res) => {
    try {
        const { user_id } = req.query;
        const timeframe = req.query.timeframe || 'month'; // default to monthly view
        
        // Get date range
        const endDate = new Date();
        const startDate = new Date();
        if (timeframe === 'year') {
            startDate.setFullYear(endDate.getFullYear() - 1);
        } else if (timeframe === 'month') {
            startDate.setMonth(endDate.getMonth() - 1);
        } else if (timeframe === 'week') {
            startDate.setDate(endDate.getDate() - 7);
        }

        // Basic summary statistics
        const summary = await Transaction.aggregate([
            {
                $match: {
                    user_id,
                    transaction_date: { $gte: startDate, $lte: endDate }
                }
            },
            {
                $group: {
                    _id: null,
                    totalIncome: {
                        $sum: {
                            $cond: [{ $eq: ['$type', 'Income'] }, '$amount', 0]
                        }
                    },
                    totalExpenses: {
                        $sum: {
                            $cond: [{ $eq: ['$type', 'Expense'] }, '$amount', 0]
                        }
                    },
                    avgExpense: {
                        $avg: {
                            $cond: [{ $eq: ['$type', 'Expense'] }, '$amount', null]
                        }
                    },
                    transactionCount: { $sum: 1 }
                }
            }
        ]);

        // Spending by category with category names
        const categoryAnalysis = await Transaction.aggregate([
            {
                $match: {
                    user_id,
                    type: 'Expense',
                    transaction_date: { $gte: startDate, $lte: endDate }
                }
            },
            {
                $lookup: {
                    from: 'categories',
                    localField: 'category_id',
                    foreignField: 'category_id',
                    as: 'category'
                }
            },
            {
                $unwind: '$category'
            },
            {
                $group: {
                    _id: {
                        category_id: '$category_id',
                        category_name: '$category.category_name',
                        category_type: '$category.category_type'
                    },
                    totalAmount: { $sum: '$amount' },
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { totalAmount: -1 }
            }
        ]);

        // Monthly trend with category details
        const monthlyTrend = await Transaction.aggregate([
            {
                $match: {
                    user_id,
                    transaction_date: { $gte: startDate, $lte: endDate }
                }
            },
            {
                $lookup: {
                    from: 'categories',
                    localField: 'category_id',
                    foreignField: 'category_id',
                    as: 'category'
                }
            },
            {
                $unwind: '$category'
            },
            {
                $group: {
                    _id: {
                        year: { $year: '$transaction_date' },
                        month: { $month: '$transaction_date' },
                        type: '$type',
                        category_id: '$category_id',
                        category_name: '$category.category_name'
                    },
                    totalAmount: { $sum: '$amount' }
                }
            },
            {
                $sort: {
                    '_id.year': 1,
                    '_id.month': 1,
                    '_id.type': 1,
                    'totalAmount': -1
                }
            }
        ]);

        // Recent large expenses with category names
        const largeExpenses = await Transaction.aggregate([
            {
                $match: {
                    user_id,
                    type: 'Expense',
                    transaction_date: { $gte: startDate, $lte: endDate }
                }
            },
            {
                $lookup: {
                    from: 'categories',
                    localField: 'category_id',
                    foreignField: 'category_id',
                    as: 'category'
                }
            },
            {
                $unwind: '$category'
            },
            {
                $sort: { amount: -1 }
            },
            {
                $limit: 5
            },
            {
                $project: {
                    amount: 1,
                    description: 1,
                    transaction_date: 1,
                    category_name: '$category.category_name',
                    category_id: 1
                }
            }
        ]);

        // Category-wise summary
        const categoryWiseSummary = await Transaction.aggregate([
            {
                $match: {
                    user_id,
                    transaction_date: { $gte: startDate, $lte: endDate }
                }
            },
            {
                $lookup: {
                    from: 'categories',
                    localField: 'category_id',
                    foreignField: 'category_id',
                    as: 'category'
                }
            },
            {
                $unwind: '$category'
            },
            {
                $group: {
                    _id: {
                        type: '$type',
                        category_id: '$category_id',
                        category_name: '$category.category_name',
                        is_default: '$category.is_default'
                    },
                    totalAmount: { $sum: '$amount' },
                    averageAmount: { $avg: '$amount' },
                    transactionCount: { $sum: 1 }
                }
            },
            {
                $sort: {
                    '_id.type': 1,
                    'totalAmount': -1
                }
            }
        ]);

        // Calculate savings rate
        const savingsRate = summary.length > 0 ? 
            ((summary[0].totalIncome - summary[0].totalExpenses) / summary[0].totalIncome * 100).toFixed(2) : 0;

        res.json({
            summary: summary[0] || {
                totalIncome: 0,
                totalExpenses: 0,
                avgExpense: 0,
                transactionCount: 0
            },
            categoryAnalysis,
            monthlyTrend,
            largeExpenses,
            categoryWiseSummary,
            metrics: {
                savingsRate: parseFloat(savingsRate),
                netIncome: summary.length > 0 ? 
                    (summary[0].totalIncome - summary[0].totalExpenses) : 0
            }
        });

    } catch (error) {
        console.error('Analytics error:', error);
        res.status(500).json({ error: 'Error generating analytics' });
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