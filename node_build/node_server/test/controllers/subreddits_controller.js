const assert = require("assert");
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app");

const Subreddit = mongoose.model("subreddit");

describe("Subreddits controller", () => {
  it("POST to /api/subreddits creates a new subreddit", done => {
    Subreddit.count().then(count => {
      request(app).post("/api/subreddits").send({ subreddit: "dota2" }).end(() => {
        Subreddit.count().then(newCount => {
          assert(count + 1 === newCount);
          done();
        });
      });
    });
  });

  it("GET to /api/subreddits shows all subreddits", done => {
    const subreddit = new Subreddit({ subreddit: "dota2" });
    subreddit.save().then(() => {
      request(app).get("/api/subreddits").end((error, result) => {
        assert(result.body[0].subreddit === "dota2");
        done();
      });
    });
  });

  it("DELETE to /api/subreddits deletes all subreddits", done => {
    const subreddit = new Subreddit({ subreddit: "dota2" });
    subreddit.save().then(() => {
      request(app).delete("/api/subreddits").end(() => {
        Subreddit.findOne({ subreddit: "dota2" }).then(subreddit => {
          assert(subreddit === null);
          done();
        });
      });
    });
  });

  it("DELETE to /api/subreddits/:id deletes the subreddit", done => {
    const subreddit = new Subreddit({ subreddit: "dota2" });
    subreddit.save().then(() => {
      const id = subreddit._id.toString();
      request(app).delete(`/api/subreddits/${id}`).end(() => {
        Subreddit.findOne({ subreddit: "dota2" }).then(subreddit => {
          assert(subreddit === null);
          done();
        });
      });
    });
  });
});
