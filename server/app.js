const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/bundle');
}

app.use(express.static('../build'));
app.use(bodyParser.json());

routes(app);

app.listen(9000, console.log('Running on Port 9000'));

module.exports = app;