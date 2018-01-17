const DbHelper = require('../helpers/db-helper');
const { log } = require('../helpers/utils');

class FetchGame {
  constructor() {
    this.helper = new DbHelper();
    this.tableName = this.helper.gamesTable;
  }

  async fetchGame(gameId) {
    const data = {'gameUID' : {S: gameId}};
    let exists;

    try {
      exists = await this.helper.dataExisits(this.tableName, data);
    } catch (err) {
      log(err);
      return this.sendError(500);
    }

    return this.gameExists(200, gameId, exists);
  }

  gameExists(status, gameUID, exists) {
    return {
        gameId: gameUID,
        status: status,
        exists: exists
      };
  }

  sendError(statusCode) {
    return {
      error: true,
      status: statusCode
    }
  }
}

module.exports = FetchGame;
