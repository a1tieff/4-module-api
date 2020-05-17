Rails.application.routes.draw do

  resources :fxes
  namespace :api, format: :json do
    resources :fxes
    get 'synthroom/index'
  end

  get 'synthroom/index'
  get "welcome/index"
  end
