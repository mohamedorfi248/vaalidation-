// 1 require express
const express = require("express");

// 2 create instance
const app = express();

// 3 require dotenv
require('dotenv').config();

// 8 Middleware bodyparser
app.use(express.json());

// 6 connectDB
const connectDB = require("./conifg/connectDB");
connectDB();

// Routes
app.use('/api/contact', require('./Routes/contact'));
app.use('/api/user', require('./Routes/user'));
app.use('/api/admin', require('./Routes/admin'))

// 4 create PORT
const PORT = process.env.PORT;

// 5 create server
app.listen(PORT, error => {
    error ? console.error(`Failed to connect to server !!! ${error}`)
    :
    console.log(`Server is running on port ${PORT} ...`)
} )