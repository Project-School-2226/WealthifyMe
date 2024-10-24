const express = require('express')
const Schema = mongoose.Schema



const balanceSchema = new Schema({
    user_id: {
        type: String,
        required: true 
    },
    balance :{
        type: int,
        required: true
    }   
});



const Category = mongoose.model('balance', balanceSchema);
module.exports = Balance