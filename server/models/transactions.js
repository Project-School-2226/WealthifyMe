const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: ['Income', 'Expense'],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: false  // Category can be null
    },
    description: {
        type: String
    },
    transaction_date: {
        type: Date,
        default: Date.now
    }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;