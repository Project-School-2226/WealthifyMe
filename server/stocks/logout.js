const axios = require('axios');

let config = {
  method: 'delete',
maxBodyLength: Infinity,
  url: 'https://api.upstox.com/v2/logout',
  headers: { 
    'Accept': 'application/json'
  }
};

axios(config).then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

