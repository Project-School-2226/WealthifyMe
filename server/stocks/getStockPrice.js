const axios = require('axios');
const ISIN = 'INE0AJG01018'
const AUTH_TOKEN = "eyJ0eXAiOiJKV1QiLCJrZXlfaWQiOiJza192MS4wIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiIyVENaUzciLCJqdGkiOiI2NzY3YWU1MDc0Mzk4ZDE2MTdmYmE0MmYiLCJpc011bHRpQ2xpZW50IjpmYWxzZSwiaWF0IjoxNzM0ODQ4MDgwLCJpc3MiOiJ1ZGFwaS1nYXRld2F5LXNlcnZpY2UiLCJleHAiOjE3MzQ5MDQ4MDB9.QEO3wkvvm4Iu-ggQwyvDlMVZc41_ATb16nb2_eLVKnY"
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