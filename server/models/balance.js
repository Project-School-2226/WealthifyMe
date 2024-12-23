const express = require('express')
const mongoose = require('mongoose')



const balanceSchema = new mongoose.Schema({
    user_id: {
        type: String,
        unique: true,
        required: true 
    },
    balance :{
        type: Number,
        required: true,
        default: 0
    }   
});



const Balance = mongoose.model('balance', balanceSchema);
module.exports = Balance