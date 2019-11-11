Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
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
