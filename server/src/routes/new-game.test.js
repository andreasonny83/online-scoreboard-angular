const NewGame = require('./new-game');
const DbHelper = require('../helpers/db-helper');
jest.mock('../helpers/db-helper');

describe('NewGame', () => {
  class DbHelperStub {}

  beforeEach(() => {
    DbHelper.mockImplementation(() => DbHelperStub);
  });

  test('should create a new game instance', () => {
    const newGame = new NewGame();

    expect(newGame).toBeDefined();
  });

  describe('CreateNewGame', () => {
    test('should return an object', async () => {
      DbHelperStub.dataExisits = jest.fn(() => Promise.resolve(false));
      DbHelperStub.createData = jest.fn(() => Promise.resolve());

      const newGame = new NewGame();
      const game = await newGame.createNewGame();

      expect(game).toBeDefined();
      expect(game).toMatchObject({});
      expect(game.gameId).toBeDefined();
      expect(game.status).toEqual(201);
      expect(game.created).toBe(true);

      expect(DbHelperStub.dataExisits).toHaveBeenCalledTimes(1);
      expect(DbHelperStub.createData).toHaveBeenCalledTimes(1);
    });

    test('when a random unique name already exists, it should try generating a new one',
    async () => {
      DbHelperStub.dataExisits = jest.fn();
      DbHelperStub.createData = jest.fn(() => Promise.resolve());

      DbHelperStub.dataExisits
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false);

      const newGame = new NewGame();
      jest.spyOn(newGame, 'createNewGame');

      const game = await newGame.createNewGame();

      expect(game).toBeDefined();
      expect(game.created).toBe(true);

      expect(newGame.createNewGame).toHaveBeenCalledTimes(3);
      expect(DbHelperStub.dataExisits).toHaveBeenCalledTimes(3);
      expect(DbHelperStub.createData).toHaveBeenCalledTimes(1);
    });

    test('it should return an error message when there is an error on the database service',
    async() => {
      DbHelperStub.dataExisits = jest.fn(() => { throw new Error('error') });

      const newGame = new NewGame();
      let game;

      game = await newGame.createNewGame();

      expect(game).toBeDefined();
      expect(game.created).toBe(false);
      expect(game.status).toBe(500);
    })
  });
});
