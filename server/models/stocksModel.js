// models/UserStocks.js
const mongoose = require("mongoose");

const UserStocksSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true, // Ensure each user_id is unique
  },
  stocks: {
    type: [String], // Array of stock symbols
    default: [], // Default to an empty array
  },
});

module.exports = mongoose.model("UserStocks", UserStocksSchema);
