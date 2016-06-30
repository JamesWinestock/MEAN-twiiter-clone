const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const userRoutes = require('../routes/user');
const tweetRoutes = require('../routes/tweet');

app.set('view engine', 'ejs');

app.use(bodyParser());

app.use('/user', userRoutes);
app.use('/tweet', tweetRoutes);

module.exports = app;
