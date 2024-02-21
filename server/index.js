// set up app middleware
const express = require('express');
const app = express();

const bodyParser = require('body-parser')

// set up dotenv Configuration
const config = require('dotenv').config();
const port = process.env.PORT;

// MongoDB connection
const mongoose = require('mongoose');
const mongo_uri = process.env.MONGO_URL;

//Schema
const Product = require('./models/poductModel');
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routing
app.get('/', (req, res) => {
    res.send('Welcome To Node Api');
});

app.get('/blogs', (req, res) => {
    res.send('<h1>Welcome to the blog Page!</h1>');
});

//Establish A Connection to Database
const connectMongo = async () => {
    try {
        await mongoose.connect(mongo_uri);
        console.log("Connected To DB Successfully");
        app.listen(port, (error) => {
            if (error) {
                console.log("Error while listening");
            } else {
                console.log(`Server Listening to Port : ${port}`);
            }
        });
    } catch (error) {
        console.log("Error Connecting to DB:", error);
    }
}

connectMongo();

//Rest Endpoint

//Create Products

app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
});
