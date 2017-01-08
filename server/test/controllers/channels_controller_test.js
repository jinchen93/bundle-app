const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

const Channel = mongoose.model('channel');

describe('Channels controller', () => {

  it('POST to /api/channels creates a new channel', (done) => {
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

  it('GET to /api/channels shows all channels', (done) => {
    Channel.create({ username: 'caseyneistat' });
    request(app)
      .get('/api/channels')
      .end( (error, result) => {
        assert(result.body[0].username === 'caseyneistat');
        done();
      });
  });

  it('DELETE to /api/channels deletes all channels', (done) => {
    Channel.create({ username: 'caseyneistat' });
    Channel.create({ username: 'gcmeanslove' });
    request(app)
      .delete('/api/channels')
      .end( (error, result) => {
        assert(!error);
        assert(result.status === 204);
        request(app)
          .get('/api/chanenls')
          .end( (error, result) => {
            assert(result.body[0] === undefined)
            done();
          })
      });
  });

});