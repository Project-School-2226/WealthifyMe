const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {v4: uuidv4} = require('uuid');

const transactionSchema = new Schema({
    user_id: {
        type:String,
        required: true
    },
    transaction_id : {
        type: String,
        default: uuidv4(),
        required: true,
    },
    type: {
        type: String,
        enum: ['Income', 'Expense'],
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0 // Prevent negative amounts
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: false // Category can be null
    },
    description: {
        type: String,
        trim: true // Remove whitespace from both ends
    },
    transaction_date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true // Automatically create createdAt and updatedAt fields
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;