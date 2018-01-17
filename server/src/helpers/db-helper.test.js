const DBHelper = require('./db-helper');
const AWS = require('aws-sdk-mock');

jest.mock('../config.json', ()=>({
  DDB_GAMES_TABLE: 'mock table name'
}), { virtual: true });

describe('DBHelper', () => {
  let dbHelper;

  it('should create a new DBHelper instance', () => {
    dbHelper = new DBHelper();


    expect(dbHelper).toBeDefined();
    expect(dbHelper.ddb).toBeDefined();
  });

  describe('DBHelper methods', () => {
    beforeEach(() => {
      dbHelper = new DBHelper();
    });

    describe('gamesTable', () => {
      it('should return a gameTable name', () => {
        const tableName = dbHelper.gamesTable;

        expect(tableName).toEqual('mock table name');
      });
    });

    describe('dataExisits', () => {
      describe('data exists', () => {
        beforeAll(async() => {
          await AWS.mock('DynamoDB', 'getItem', (params, callback) => {
            callback(null, {Item: 'exists'});
          });
        });

        afterAll(async() => {
          await AWS.restore('DynamoDB', 'getItem');
        });

        it('should resolve a promise if a data already exists in the database',
        async () => {
          const tableName = 'test-table';
          const data = {'gameUID' : {S: 'test'}};

          let exists;

          try {
            exists = await dbHelper.dataExisits(tableName, data);
          } catch (err) {
            console.error(err);
            throw new Error('It should not throw an error.');
          }

          expect(exists).toBe(true);
        });

        it('should throw an error if the tableName is missing',
        async () => {
          const data = {'gameUID' : {S: 'test'}};
          let tableName;
          let exists;

          try {
            exists = await dbHelper.dataExisits(tableName, data);
          } catch (err) {
            expect(err).toBeDefined();
          }

          expect(exists).not.toBeDefined();
        });

        it('should throw an error if data is missing',
        async () => {
          let tableName = 'table-name';
          let data;
          let exists;

          try {
            exists = await dbHelper.dataExisits(tableName, data);
          } catch (err) {
            expect(err).toBeDefined();
          }

          expect(exists).not.toBeDefined();
        });
      });

      describe('data doesn\'t exists', () => {
        beforeAll(async() => {
          AWS.mock('DynamoDB', 'getItem', (params, callback) => {
            callback(null, {});
          });
        });

        afterAll(async() => {
          await AWS.restore('DynamoDB', 'getItem');
        });

        it('should resolve a promise if a data already exists in the database',
        async () => {
          const tableName = 'test-table';
          const data = {'gameUID' : {S: 'test'}};

          let exists;

          try {
            exists = await dbHelper.dataExisits(tableName, data);
          } catch (err) {
            console.error(err);
            throw new Error('It should not throw an error.');
          }

          expect(exists).toBe(false);
        });
      });
    });
  });
});
