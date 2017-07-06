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
    const channel = new Channel({ username: 'caseyneistat' });
    channel.save().then( () => {
      request(app)
        .get('/api/channels')
        .end( (error, result) => {
          assert(result.body[0].username === 'caseyneistat');
          done();
        });
    });
  });

  it('DELETE to /api/channels deletes all channels', (done) => {
    const channel = new Channel({ username: 'caseyneistat' });
    channel.save().then( () => {
      request(app)
        .delete('/api/channels')
        .end( () => {
          Channel.findOne({ username: 'caseyneistat' })
            .then( (channel) => {
              assert(channel === null);
              done();
            })
        })
    });
  });

  it('DELETE to /api/channels/:id deletes the channel', (done) => {
    const channel = new Channel({ username: 'caseyneistat' });
    channel.save().then( () => {
      const id = channel._id.toString();
      request(app)
        .delete(`/api/channels/${id}`)
        .end( () => {
          Channel.findOne({ username: 'caseyneistat' })
            .then( channel => {
              assert(channel === null);
              done();
            });
        });
    });
  });
});