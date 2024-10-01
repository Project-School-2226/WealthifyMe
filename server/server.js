const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const login = require("./auth/login");
const app = express();
const PORT = process.env.PORT || 64000;
const URI = process.env.MONGODB_URI;


// MongoDB connection
mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error: ", err.message);
  });

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Enable CORS for all routes (for testing purposes)
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Routes
app.use("/auth", login);


app
  .listen(PORT, (res, req) => {
    console.log(`Server is running on port: ${PORT}`);
  })
  .on("error", (err) => {
    console.log(err);
  });