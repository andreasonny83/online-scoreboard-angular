const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config.json');
const routes = require('./routes');
const notFound = require('./not-found');
// const crypto = require('crypto');

const app = express();

const corsOptions = {
  origin: config.corsHeaders,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
  credentials: true,
  preflightContinue: false
};

app.use(morgan('dev'));
app.disable('x-powered-by');

// 3rd party middleware
app.use(cors(corsOptions));

// Parsers for POST data
app.use(bodyParser.json({
  extended: false,
  limit : config.bodyLimit
}));

app.use(bodyParser.urlencoded({ extended: true }));

// process.on('unhandledRejection', up => { throw up })

app
  .use('/api', routes)
  .use(notFound);

module.exports = app;
