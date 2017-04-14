const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
  username: String,
  name: String,
  thumbnail: String,
  uploads: String
});

const Channel = mongoose.model('channel', ChannelSchema);

module.exports = Channel;