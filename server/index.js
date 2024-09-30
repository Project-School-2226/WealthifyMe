const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

mongoose.connect
(process.env.MONGODB_URI).then(() => { 
    console.log('Connected to MongoDB');
}).catch((err) => { 
    console.log('Failed to connect to MongoDB', err);
})

const port = process.env.PORT
app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
})
