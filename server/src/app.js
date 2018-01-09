const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AWS = require('aws-sdk');
const crypto = require('crypto');

const config = require('./config.json');
const routes = require('./routes/routes');

const key = '';

const dynamodb = new AWS.DynamoDB();
const app = express();

const corsOptions = {
  origin: config.corsHeaders,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
  credentials: true,
  preflightContinue: false
};

// 3rd party middleware
app.use(cors(corsOptions));

// Parsers for POST data
app.use(bodyParser.json({
  extended: false,
  limit : config.bodyLimit
}));

app.use('/api', routes);

app.use((req, res) => {
  res.status(404)
    .send({url: req.originalUrl + ' not found'})
});

module.exports = app;
