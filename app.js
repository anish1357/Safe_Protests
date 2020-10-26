const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const globalRoutes = require('./routes/publicRoutes');
const userRoutes = require('./routes/userRoutes');
const protestRoutes = require('./routes/protest');
const twilioRoutes = require('./routes/twilio');
const updateRoutes = require('./routes/protestUpdates');
const dotenv = require('dotenv');
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URL;


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoutes);
app.use('/protest', protestRoutes);
app.use('/help', twilioRoutes);
app.use('/update', updateRoutes);
app.use('/', globalRoutes);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(result => {
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    });