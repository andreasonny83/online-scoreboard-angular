const randomWords = require('random-words');

class GameHelper {
  get randomGameUid() {
    return this.randomWords({
      exactly: 3,
      join: '-'
    });
  }

  constructor() {
    this.randomWords = randomWords;
  }
}

module.exports = GameHelper;
