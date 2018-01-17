class Status {
  constructor(appName) {
    this.appName = appName;
  }

  sendStatus() {
    return {
      name: this.appName,
      status: 200
    }
  }
}

module.exports = Status;
