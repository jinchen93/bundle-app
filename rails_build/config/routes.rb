Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :users, only: [:create, :update, :index]

    resource :session, only: [:create, :destroy]

    resources :youtube_channels, only: [:index, :create, :destroy]
    delete 'api/youtube_channels', to: 'youtube_channels#destroy_all'

    resources :subreddits, only: [:index, :create, :destroy]
    delete 'api/subreddits', to: 'subreddits#destroy_all'
  end
end
