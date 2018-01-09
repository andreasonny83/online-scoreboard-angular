const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const status = require('./status');
const newGame = require('./game');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/status', status);
router.get('/new', newGame);

module.exports = router;
