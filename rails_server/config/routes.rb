Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get     'api/channels',      to: 'youtube_channels#index'
  post    'api/channels',      to: 'youtube_channels#create'
  delete  'api/channels/:id',  to: 'youtube_channels#destroy'
  delete  'api/channels',      to: 'youtube_channels#destroy_all'

  get     'api/subreddits',      to: 'subreddits#index'
  post    'api/subreddits',      to: 'subreddits#create'
  delete  'api/subreddits/:id',  to: 'subreddits#destroy'
  delete  'api/subreddits',      to: 'subreddits#destroy_all'

end
