const randomWords = require('random-words');
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
const TableName = 'online-scoreboard__games';

const gameAlreadyExisits = (gameUID) => {
  var params = {
    TableName: TableName,
    Key: {'gameUID' : {S: gameUID}}
  };

  // Call DynamoDB to read the item from the table
  return new Promise((resolve, reject) => {
    ddb.getItem(params, (err, data) => {
      if (err) {
        return reject(err);
      }

      resolve(!!data.Item);
    });
  });
}

const createGame = (gameUID, res) => {
  const params = {
    TableName: TableName,
    Item: {
      gameUID: {S: gameUID}
    }
  }

  ddb.putItem(params, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`game "${gameUID}" successfully created.`)
    }
  });
};

function newGame(req, res) {
  let gameUID = randomWords({
    exactly: 3,
    join: '-'
  });

  gameAlreadyExisits(gameUID)
    .then(gameExists => {
      if (!!gameExists) {
        // Generates new game ID
        return newGame(req, res);
      }

      createGame(gameUID, res);
    })
    .catch(err => res.sendStatus(500));
};

module.exports = newGame;
