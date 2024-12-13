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
  const { user_id } = req.query; // Get user_id from query parameters

  try {
    // Find the user's stocks using the user_id
    const userStocks = await UserStocks.findOne({ user_id });

    if (!userStocks) {
      return res.status(404).json({
        status: 'failure',
        message: 'User not found or no stocks associated',
      });
    }

    return res.json({
      status: 'success',
      stocks: userStocks.stocks, // Return the stocks array
    });
  } catch (error) {
    console.error('Error fetching user stocks:', error);
    res.status(500).json({ status: 'failure', error: 'Failed to fetch user stocks' });
  }
});



module.exports = router;