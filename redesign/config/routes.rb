Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json }  do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]

    resources :subreddits, only: [:index, :show, :create, :destroy]
    resources :youtube_channels, only: [:index, :show, :create, :destroy]
    resources :twitch_channels, only: [:index, :show, :create, :destroy]
  end

  root to: 'static_pages#root'
end
