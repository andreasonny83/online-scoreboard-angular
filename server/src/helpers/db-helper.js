const AWS = require('aws-sdk');

class DbHelper {
  constructor() {
    AWS.config.update({region: 'us-east-1'});
    this.ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});
  }

  dataExisits(TableName, data) {
    const params = {
      TableName: TableName,
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

  createData(TableName, data) {
    const params = {
      TableName: TableName,
      Item: data
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
