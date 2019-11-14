Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    get 'friends/find', to: 'friends#find'
    post 'session/demo', to: 'sessions#demo'
    resources :searches, only: [:index]
    resources :users
    resources :posts
    resources :comments
    resources :friends
    resources :likes
    resources :feeds, only: [:index]
    resources :walls, only: [:index]
    resource :session, only: [:create, :destroy]
  end

end
