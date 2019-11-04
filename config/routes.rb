Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session, only: [:create, :destroy]
  end

end
