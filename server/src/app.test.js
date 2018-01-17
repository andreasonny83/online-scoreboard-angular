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
});

// describe('game', () => {
//   test('GET on /new should start a new game', async() => {
//     const response = await request(app).get('/api/new');

//     expect(response.statusCode).toBe(201);
//     expect(response.text)
//       .toMatch(/game "\w+-\w+-\w+" successfully created.$/g);
//   });
// });
