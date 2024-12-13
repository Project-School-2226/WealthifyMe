const axios = require('axios');
require('dotenv').config();
// Define your parameters
const ur = 'https://api.upstox.com/v2/login/authorization/dialog?response_type=code&client_id=7b2dbff3-4c17-496b-af96-a4b63cd792cd&redirect_uri=https://localhost:10000&state=<Your-Optional-State-Parameter-Here>';



const url = 'https://api.upstox.com/v2/login/authorization/token';
const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
};

const code = '-PcRMv';
const client_id = '7b2dbff3-4c17-496b-af96-a4b63cd792cd';
const client_secret = 'cecd67bx6y';
const data = new URLSearchParams({
    code: code,
    client_id: client_id,
    client_secret: client_secret,
    redirect_uri: 'https://localhost:10000',
    grant_type: 'authorization_code',
});

// Make the POST request

axios.post(url, data.toString(), { headers })
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });
