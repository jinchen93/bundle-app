const mongoose = require('mongoose');

before( (done) => {
  mongoose.connect('mongodb://localhost/bundle_test');
  mongoose.connection
    .once('open', () => done())
    .on('error', (err) => {
      console.warn('Warning', error);
    });
});

beforeEach( (done) => {
  const { channels } = mongoose.connection.collections;
  channels.drop()
    .then( () => done())
    // Catch errors if no channels collection present to drop
    .catch( () => done());
})