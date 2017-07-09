Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json }  do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]

    resources :subreddits, only: [:index, :show]
    resources :youtube_channels, only: [:index, :show]
    resources :twitch_channels, only: [:index, :show]
    resources :youtube_channel_follows, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
