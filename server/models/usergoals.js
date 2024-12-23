const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userGoalsSchema = new Schema({ 
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    goal_name: { type: String, required: true },
    goal_amount: { type: Number, required: true },
    goal_date: { type: Date, required: true },
    goal_status: { type: String, default: 'active' },
    created_at: { type: Date, default: Date.now }
});