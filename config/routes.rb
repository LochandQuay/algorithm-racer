Rails.application.routes.draw do
  resources :users, only: [:new, :create, :show]

  resources :algorithms, except: [:edit, :update]

  get '/algorithms/sort', to: 'algorithms#top_sorting', as: 'top_sort'

  get '/algorithms/array_search', to: 'algorithms#top_searching', as: 'top_search'

  resource :sessions

  root to: 'sessions#new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
