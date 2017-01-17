const ChannelsController = require("../controllers/channels_controller");
const SubredditsController = require("../controllers/subreddits_controller");
const MainController = require("../controllers/main_controller");

module.exports = app => {
  app.get("/api/channels", ChannelsController.show);
  app.post("/api/channels", ChannelsController.create);
  app.delete("/api/channels", ChannelsController.deleteAll);
  app.delete("/api/channels/:id", ChannelsController.delete);

  app.get("/api/subreddits", SubredditsController.show);
  app.post("/api/subreddits", SubredditsController.create);
  app.delete("/api/subreddits", SubredditsController.deleteAll);
  app.delete("/api/subreddits/:id", SubredditsController.delete);

  app.get("/*", MainController.renderMain);
};
