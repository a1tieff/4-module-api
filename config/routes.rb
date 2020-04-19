Rails.application.routes.draw do

  namespace :api, format: :json do
    get 'synthroom/index'
  end

  get 'synthroom/index'
  get "welcome/index"
  end
