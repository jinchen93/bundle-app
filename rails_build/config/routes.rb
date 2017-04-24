Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/', to: redirect('/index.html')
  # get '/', to: 'main#index'
  root to: 'main#index'

  namespace :api do
    resources :users, only: [:create, :update, :index]

    resource :session, only: [:create, :destroy]

    resources :youtube_channels, only: [:index, :create, :destroy]
    delete 'youtube_channels', to: 'youtube_channels#destroy_all'

    resources :subreddits, only: [:index, :create, :destroy]
    delete 'subreddits', to: 'subreddits#destroy_all'
  end

  get '*path', to: 'main#index'
end
