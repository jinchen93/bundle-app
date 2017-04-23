const Subreddit = require("../models/subreddit");

module.exports = {
  show(req, res) {
    Subreddit.find({}).then(subreddits => {
      res.send(subreddits);
    });
  },
  create(req, res, next) {
    const subredditProps = req.body;
    Subreddit.create(subredditProps).then(subreddit => res.send(subreddit)).catch(next);
  },
  deleteAll(req, res, next) {
    Subreddit.remove({}).then(subreddits => res.status(204).send(subreddits)).catch(next);
  },
  delete(req, res, next) {
    const subredditId = req.params.id;
    Subreddit
      .findByIdAndRemove({ _id: subredditId })
      .then(subreddit => res.status(204).send(subreddit))
      .catch(next);
  }
};
