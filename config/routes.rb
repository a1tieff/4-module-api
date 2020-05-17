Rails.application.routes.draw do

  resources :fxes
  namespace :api, format: :json do
    resources :fxes
    get 'synthroom/index'
    post 'sunrise_time/show_sunrise_time'
  end

  get 'synthroom/index'
  get "welcome/index"
  end
