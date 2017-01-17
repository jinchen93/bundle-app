const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SubredditSchema = new Schema({ subreddit: String });

const Subreddit = mongoose.model("subreddit", SubredditSchema);

module.exports = Subreddit;
