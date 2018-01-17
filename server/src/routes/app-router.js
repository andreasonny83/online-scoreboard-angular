const express = require('express');

const Status = require('./status');
const NewGame = require('./new-game');
const FetchGame = require('./fetch-game');

const router = express.Router();

const getStatus = (req, res) => {
  const status = new Status('online-scoreboard');

  return res
    .status(200)
    .send(status.sendStatus());
};

const postNewGame = async (req, res) => {
  const game = new NewGame();
  const newGame = await game.CreateNewGame();

  return res
    .status(newGame.status)
    .send(newGame);
};

const fetchGame = async (req, res) => {
  const gameId = req.params && req.params.gameId;
  const game = new FetchGame();

  if (!gameId) {
    return res.sendStatus(404);
  }

  const data = await game.fetchGame(gameId);

  res.status(201).send(data);
}

router
  .get('/status', getStatus)
  .post('/new', postNewGame)
  .get('/game/:gameId', fetchGame);

module.exports = router;
