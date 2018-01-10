const randomWords = require('random-words');
const DbHelper = require('../helpers/db-helper');

const game = async (req, res) => {
  const gameId = req.params && req.params.gameId;
  const TableName = 'online-scoreboard__games';
  const data = {'gameUID' : {S: gameId}};
  const helper = new DbHelper();

  if (!gameId) {
    res.sendStatus(404);
  }

  let exists;

  try {
    exists = await helper.dataExisits(TableName, data);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }

  res.status(200).send(`gameExisits ${exists}`);
};

module.exports = game;
