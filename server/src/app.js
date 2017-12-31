const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AWS = require('aws-sdk');
const crypto = require('crypto');

const config = require('./config.json');
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

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.get('/status', (req, res) => {
  res
    .status(200)
    .send({
      name: 'online-scoreboard'
    });
});

app.post('/register', (req, res) => {
  // console.log(req);
  // const email = req.email;
  // const clearPassword = req.password;
  // const hash = crypto.createHmac('sha512', key);
  // hash.update(clearPassword);
  // const hashedPass = hash.digest('hex').toString();

  // console.log(hashedPass);
  res.status(201).send('OK');
});

module.exports = app;
