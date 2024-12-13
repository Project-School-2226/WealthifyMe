const axios = require('axios');
const ISIN = 'INE0AJG01018'
const AUTH_TOKEN = "eyJ0eXAiOiJKV1QiLCJrZXlfaWQiOiJza192MS4wIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiIyVENaUzciLCJqdGkiOiI2NzViZTFmMjJjMDQyZDYzNzZjMTIyNjciLCJpc011bHRpQ2xpZW50IjpmYWxzZSwiaWF0IjoxNzM0MDc0ODY2LCJpc3MiOiJ1ZGFwaS1nYXRld2F5LXNlcnZpY2UiLCJleHAiOjE3MzQxMjcyMDB9.7GQs7I29Bqpqo3hromyuHycEoE5ONOOZgsKeAFbcIm0"
let config = {
  method: 'get',
maxBodyLength: Infinity,
  url: `https://api.upstox.com/v2/market-quote/ohlc?instrument_key=NSE_EQ|${ISIN},NSE_EQ|INE768C01010&interval=I1`,
  headers: { 
    'Accept': 'application/json',
    'Authorization' : `Bearer ${AUTH_TOKEN}`
  }
};

axios(config)
.then((response) => {
  console.log(response.data);
})
.catch((error) => {
  console.log(error);
});