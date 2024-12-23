const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userBudgetSchema = new Schema({ 
    user_id: {
        type: String,
        required: true,
        unique: true,
        },
        budget:[
            {
                category_name: {
                    type: String,
                    required: true
                },
                amount: {
                    type: Number,
                    required: true
                }
            }
        ]
},{timestamps: true});

const UserBudget = mongoose.model('UserBudget', userBudgetSchema);

module.exports = UserBudget;