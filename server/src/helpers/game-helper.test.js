const GameHelper = require('./game-helper');

describe('GameHelper', () => {
  let gameHelper;
  it('should create a new GameHelper instance', () => {
    gameHelper = new GameHelper();

    expect(gameHelper).toBeDefined();
    expect(gameHelper.randomWords).toBeDefined();
  });

  describe('randomGameUid', () => {
    beforeEach(() => {
      gameHelper = new GameHelper();
    });

    it('should generates a random game id', () => {
      const rndGame = gameHelper.randomGameUid;

      expect(rndGame).toMatch(/\w+-\w+-\w+$/g);
    })
  })
});
