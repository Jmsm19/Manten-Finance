Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'auth/register', to: 'registrations#create'
      post 'auth/login', to: 'sessions#create'
      delete 'auth/logout', to: 'sessions#logout'
      get 'auth/logged_in', to: 'sessions#logged_in'

      resources :accounts, except: %i[new edit]
    end
  end

  get '*page',
      to: 'static#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  root 'static#index'
  get '/manifest', to: 'static#manifest'
end
