Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get     'api/channels',      to: 'youtube_channels#index'
  post    'api/channels',      to: 'youtube_channels#create'
  delete  'api/channels/:id',  to: 'youtube_channels#destroy'
  delete  'api/channels',      to: 'youtube_channels#destroy_all'
  # app.get("/api/channels", ChannelsController.show);
  # app.post("/api/channels", ChannelsController.create);
  # app.delete("/api/channels", ChannelsController.deleteAll);
  # app.delete("/api/channels/:id", ChannelsController.delete);


  get     'api/subreddits',      to: 'subreddits#index'
  post    'api/subreddits',      to: 'subreddits#create'
  delete  'api/subreddits/:id',  to: 'subreddits#destroy'
  delete  'api/subreddits',      to: 'subreddits#destroy_all'
  # app.get("/api/subreddits", SubredditsController.show);
  # app.post("/api/subreddits", SubredditsController.create);
  # app.delete("/api/subreddits", SubredditsController.deleteAll);
  # app.delete("/api/subreddits/:id", SubredditsController.delete);
  #
  # app.get("/*", MainController.renderMain);
end
