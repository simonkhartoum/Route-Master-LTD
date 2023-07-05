Rails.application.routes.draw do
  resources :cars, only: [:index, :show, :create, :update]
  resources :owners, only: [:show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
end
