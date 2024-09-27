const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect
('mongodb+srv://Amaan:new123@wealthifyme.9jqw8.mongodb.net/G214?retryWrites=true&w=majority&appName=wealthifyme', 
).then(() => { 
    console.log('Connected to MongoDB');
}).catch((err) => { 
    console.log('Failed to connect to MongoDB', err);
})

app.listen(3000, () => { 
    console.log('Server is running on port 3000');
})
