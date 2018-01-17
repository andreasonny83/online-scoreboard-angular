const AWS = require('aws-sdk');
const config = require('../config.json');

class DbHelper {
  get gamesTable() {
    return this.config.DDB_GAMES_TABLE;
  }

  constructor() {
    this.config = config;
    AWS.config.update({region: 'us-east-1'});
    this.ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
  }

  dataExisits(tableName, data) {
    const params = {
      TableName: tableName,
      Key: data,
    };

    // Call DynamoDB to read the item from the table
    return new Promise((resolve, reject) => {
      this.ddb.getItem(params, (err, data) => {
        if (err) {
          return reject(err);
        }

        resolve(!!data.Item);
      });
    });
  }

  createData(TableName, item) {
    const params = {
      TableName: TableName,
      Item: item
    }

    return new Promise((resolve, reject) => {
      this.ddb.putItem(params, (err, data) => {
        if (err) {
          return reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}

module.exports = DbHelper;
