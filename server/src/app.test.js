const request = require('supertest');
const app = require('./app');

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('GET to status should reply with a test page', async () => {
    const response = await request(app).get('/status');

    expect(response.statusCode).toBe(200);
    expect(response.body)
      .toEqual({
        name: 'online-scoreboard'
      });
  });

  test('It should register a new user');
  test('It should login an existing user');
  test('It should login a guest user');
});
