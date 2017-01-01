Rails.application.routes.draw do
  resources :users, only: [:new, :create, :show]

  resources :algorithms, except: [:edit, :update, :show]

  resource :sessions

  root to: 'sessions#new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
