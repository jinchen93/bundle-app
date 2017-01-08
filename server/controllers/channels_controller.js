const Channel = require('../models/channel');

module.exports = {
  greeting(req, res) {
    res.send({ hi: "there" });
  },

  show(req, res) {
    Channel.find({}).then( (channels) => {
      res.send(channels);
    })
  },

  create(req, res, next) {
    const channelProps = req.body;
    Channel.create(channelProps)
      .then( (channel) => res.send(channel) )
      .catch(next);
  }
};