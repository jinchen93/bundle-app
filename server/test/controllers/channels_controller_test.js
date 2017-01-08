const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

const Channel = mongoose.model('channel');

describe('Channels controller', () => {

  it('Post to /api/channels creates a new channel', (done) => {
    Channel.count().then( (count) => {
      request(app)
        .post('/api/channels')
        .send({ username: 'caseyneistat' })
        .end( () => {
          Channel.count().then( (newCount) => {
            assert(count + 1 === newCount);
            done();
          });
        });
    });
  });

  it('Get /api/channels shows all channels', (done) => {
    Channel.create({ username: 'caseyneistat' });
    Channel.find({}).then( (channels) => {
      request(app)
        .get('/api/channels')
        .end( (error, result) => {
          assert(result.body[0].username === 'caseyneistat');
          done();
        });
    });
  });

});