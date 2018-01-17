const Status = require('./status');

describe('status', () => {
  test('sendStatus should return an object', async () => {
    const status = new Status('test');

    expect(status).toBeDefined();
    expect(status.sendStatus(200)).toMatchObject({})
  });

  test('the response status should always be 200 when present', () => {
    const status = new Status();

    expect(status.sendStatus().status).toEqual(200);
  });

  test('the response name should reflect the string passed in the constructor', () => {
    const status = new Status('online-scoreboard');

    expect(status.sendStatus().name).toEqual('online-scoreboard');
  });
});
