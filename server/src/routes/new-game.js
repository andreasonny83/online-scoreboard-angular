const randomWords = require('random-words');
const DbHelper = require('../helpers/db-helper');

const newGame = async (req, res) => {
  const TableName = 'online-scoreboard__games';
  const helper = new DbHelper();
  const gameUID = randomWords({
    exactly: 3,
    join: '-'
  });

  const data = {
    gameUID : {S: gameUID}
  };

  let exists;

  try {
    exists = await helper.dataExisits(TableName, data);
  } catch(err) {
    return res.sendStatus(500);
  }

  if (!exists) {
    const createGame = await helper.createData(TableName, data);

    return res.status(201).send(`game "${gameUID}" successfully created.`)
  }

  // Try to generate another unique gameUID
  return newGame(req, res);
};

module.exports = newGame;
