Rails.application.routes.draw do
  root 'static#index'

  namespace :api, defaults: { format: 'json' } do
    get 'greeting', to: 'greetings#index'
  end
end
