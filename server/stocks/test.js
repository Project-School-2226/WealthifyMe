const axios = require('axios');
const { parse } = require('date-fns');
const { DateTime, Duration } = require('luxon');
async function getHistoricalData(instrumentKey) {
    try {
        const parseInstrument = encodeURIComponent(instrumentKey);
        const fromDate = DateTime.now().minus(Duration.fromObject({ days: 10000 })).toFormat('yyyy-MM-dd');
        const toDate = DateTime.now().toFormat('yyyy-MM-dd');
        console.log(parseInstrument,fromDate, toDate);
        const url = `https://api.upstox.com/v2/historical-candle/${parseInstrument}/day/${toDate}/${fromDate}`;
        const response = await axios.get(url, {
            headers: {
                'accept': 'application/json'
            },
            params: {},
            timeout: 5000
        });
        const candleRes = response.data;
        if (candleRes.data && candleRes.data.candles && candleRes.data.candles.length > 0) {
            const candleData = candleRes.data.candles
            return candleData;
        } else {
            console.log('No data', instrumentKey, candleRes);
            return null;
        }
    } catch (error) {
        console.error(`Error in data fetch for ${instrumentKey}, error`);
        return null;
    }
}


async function ProcessData({ symbol, ISIN }) {
    const instrumentKey = "NSE_EQ|" + ISIN;
    const candleData = await getHistoricalData(instrumentKey);
    if (candleData) {

        // const { lifetime_high, lifetime_low } = findHL(candleData);
        const lifetime_high = Math.max(...candleData.map(candle => candle[2]));
        const lifetime_low = Math.min(...candleData.map(candle => candle[3]));

        const rangeVal = lifetime_high - lifetime_low;
        const close = candleData[0][4];
        const whereClose = (((close - lifetime_low) / rangeVal) * 100).toFixed(2);
        return {
            SYMBOL: symbol,
            ATH: lifetime_high,
            ATL: lifetime_low,
            CLOSE: close,
            FIBLEVEL: whereClose
        };
      
    }
    else {
        console.log('No data for', symbol);
    }
}

// call ProcessData function
const fromDate = DateTime.now().minus(Duration.fromObject({ days: 10000 })).toFormat('yyyy-MM-dd');
const toDate = DateTime.now().toFormat('yyyy-MM-dd');
console.log(fromDate, toDate);
ProcessData({ symbol: 'ICICIBANK', ISIN: 'INE090A01021' }).then(console.log);