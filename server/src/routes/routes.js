const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const status = require('./status');
const newGame = require('./new-game');
const game = require('./game');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/status', status);
router.get('/new', newGame);
router.get('/game/:gameId', game);

module.exports = router;
