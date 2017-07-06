const Channel = require('../models/channel');

module.exports = {
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
  },

  deleteAll(req, res, next) {
    Channel.remove({})
      .then( (channels) => res.status(204).send(channels))
      .catch(next);
  },
  
  delete(req, res, next) {
    const channelId = req.params.id;
    Channel.findByIdAndRemove({ _id: channelId })
      .then( channel => res.status(204).send(channel) )
      .catch(next);
  }
};