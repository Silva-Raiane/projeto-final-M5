require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt  = require('bcrypt');
const jwt = require('jsonwebtoken');


const port = 8080;

const app = express();
app.use(express.json());
app.use(cors());




app.get('/', (req, res) =>{
    res.status(201).json("Home GET Request")
})

mongoose.connect(process.env.MONGODB_URI);
  
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`);
})