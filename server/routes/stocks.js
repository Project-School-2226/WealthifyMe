const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();
const findISIN = require('../stocks/symbols');
const UserStocks = require('../models/stocksModel');



router.post('/getStockPrices', async (req, res) => {
  const { symbols } = req.body; // Accept an array of symbols from the frontend
  if (!symbols || !Array.isArray(symbols)) {
    return res.status(400).json({ error: 'Symbols must be an array' });
  }

  try {
    // Generate the comma-separated list of instrument keys
    const instrumentKeys = symbols
      .map((symbol) => `NSE_EQ|${findISIN(symbol)}`)
      .join(',');

    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://api.upstox.com/v2/market-quote/ohlc?instrument_key=${instrumentKeys}&interval=I1`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
      },
    };

    // Fetch data from the API
    const response = await axios(config);

    // Extract last_price for each symbol
    const stockPrices = Object.entries(response.data.data).map(
      ([instrumentKey, stockData]) => ({
        symbol: instrumentKey.split(':')[1], // Extract the symbol
        lastPrice: stockData.last_price,
      })
    );

    res.json({ status: 'success', stockPrices });
  } catch (error) {
    console.error('Error fetching stock prices:', error);
    res.status(500).json({ error: 'Failed to fetch stock prices' });
  }
});

router.get('/getCurrentDayStockData', async (req, res) => {
  const {symbol} = req.query;
  if (!symbol) {
    return res.status(400).json({ error: 'Symbol parameter is required' });
  }
  const ISIN = findISIN(symbol);
  if (!ISIN) {
    return res.status(400).json({ error: 'Invalid symbol' });
  }
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url :  `https://api.upstox.com/v2/historical-candle/intraday/NSE_EQ|${ISIN}/1minute`,
    headers: { 
      'Accept': 'application/json',
    }
  };
  try{
    const response = await axios(config);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});


router.post("/addStocks", async (req, res) => {
  const { user_id, stocks } = req.body; // Expect user_id and stocks in the request

  if (!user_id || !stocks || !Array.isArray(stocks)) {
    return res.status(400).json({ message: "Invalid request: Missing user_id or stocks array" });
  }

  try {
    // Find the user's stocks document or create a new one
    let userStocks = await UserStocks.findOne({ user_id });
    if (!userStocks) {
      userStocks = new UserStocks({ user_id, stocks: [] });
    }

    // Add new stock symbols, ensuring no duplicates
    const existingSymbols = new Set(userStocks.stocks);
    stocks.forEach((symbol) => existingSymbols.add(symbol));
    userStocks.stocks = Array.from(existingSymbols);

    // Save the updated document
    await userStocks.save();

    return res.status(200).json({ message: "Stocks added successfully", stocks: userStocks.stocks });
  } catch (error) {
    console.error("Error adding stocks:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Fetch stocks for a specific user
router.get('/getUserStocks', async (req, res) => {
  const { user_id } = req.query;

  if (!user_id) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    const userStocks = await UserStocks.findOne({ user_id });
    console.log(userStocks);
    if (!userStocks) {
      return res.status(404).json({ status: 'error', message: 'User stocks not found' });
    }

    res.json({ status: 'success', stocks: userStocks.stocks });
  } catch (error) {
    console.error('Error fetching user stocks:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch user stocks' });
  }
});
router.delete('/deleteStock', async (req, res) => {
  try {
    const { user_id, symbol } = req.query;

    // Validation
    if (!user_id || !symbol) {
      return res.status(400).json({ error: 'Missing user_id or symbol' });
    }

    // Delete the stock from the database
    const result = await UserStocks.updateOne(
      { user_id: user_id },
      { $pull: { stocks: symbol } } // Remove the stock symbol from the "stocks" array
    );

    if (result.modifiedCount > 0) {
      return res.status(200).json({ message: 'Stock deleted successfully' });
    } else {
      return res
        .status(404)
        .json({ error: 'Stock not found or user does not exist' });
    }
  } catch (error) {
    console.error('Error deleting stock:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});




module.exports = router;