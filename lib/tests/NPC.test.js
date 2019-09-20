const request = require('supertest');
const app = require('../../lib/app');

require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('../../lib/utils/connect');

describe('npc routes', () => {
  beforeAll(() => {
    return connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
  
  afterAll(() => {
    return mongoose.connection.close();
  });

  it('can create a NPC via post', () => {
    return request(app)
      .post('api/v1/NPC')
      .send({ name: 'ohhai' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'name',
          __v: 0
        });
      });
  });
});
