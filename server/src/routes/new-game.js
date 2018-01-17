const DbHelper = require('../helpers/db-helper');
const GameHelper = require('../helpers/game-helper');
const { log } = require('../helpers/utils');

class NewGame {
  constructor() {
    this.dbHelper = new DbHelper();
    this.gameHelper = new GameHelper();

    this.tableName = this.dbHelper.gamesTable;
  }

  async createNewGame() {
    const gameUID = this.gameHelper.randomGameUid;

    const newGame = await this._tryCreatingNewGame(gameUID);

    if (!newGame) {
      return this.createNewGame();
    }

    return newGame;
  }

  async _tryCreatingNewGame(gameUID) {
    const data = {
      gameUID : {S: gameUID}
    };

    let exists;

    try {
      exists = await this.dbHelper.dataExisits(this.tableName, data);
    } catch(err) {
      log.info(err);
      return this._sendError(500);
    }

    if (!exists) {
      await this.dbHelper.createData(this.tableName, data);
      return this._gameCreated(201, gameUID);
    }

    return false;
  }

  _gameCreated(status, gameUID) {
    return {
        gameId: gameUID,
        status: status,
        created: true
      };
  }

  _sendError(statusCode) {
    return {
      error: true,
      status: statusCode,
      created: false
    }
  }
}

module.exports = NewGame;
