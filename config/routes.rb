Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      root 'example#index'
    end
  end

  get '*page',
      to: 'static#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  root 'static#index'
  get '/manifest', to: 'static#manifest'
end
