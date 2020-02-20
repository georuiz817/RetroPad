Rails.application.routes.draw do
  resources :calendars
  resources :todos
  resources :addresses
  resources :memos
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
