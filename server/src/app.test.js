const request = require('supertest');
const app = require('./app');

describe('/ path', () => {
  test('It should respond not found by default', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(404);
    expect(response.body)
    .toEqual({
      url: '/ not found'
    });
  });
});

describe('/api path', () => {
  test('It should respond not found on /api', async () => {
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(404);
    expect(response.body)
      .toEqual({
        url: '/api not found'
      });
  });

  test('GET to /status should reply with a test page', async () => {
    const response = await request(app).get('/api/status');

    expect(response.statusCode).toBe(200);
    expect(response.body)
      .toEqual({
        name: 'online-scoreboard'
      });
  });
});

describe('game', () => {
  test('POST on /new should start a new game', async() => {
    const response = await request(app).post('/api/new');

    expect(response.statusCode).toBe(200);
    expect(response.body)
    .toEqual({
      gameId: 'xxx-xxx-xxx'
    });
  });
});
