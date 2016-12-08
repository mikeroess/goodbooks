Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :sessions, only: [:create, :destroy, :show]
    resources :shelves, only: [:create, :destroy, :index]
    resources :users, only: [:show, :create, :destroy] do
      resources :shelves, only: [:show]
    end
  end
end
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
