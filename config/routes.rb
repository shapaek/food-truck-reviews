Rails.application.routes.draw do

  devise_for :users, :skip => [:passwords], controllers: {
    registrations: "registrations",
    sessions: "sessions"}

    root "home#index"

    resources :users, only: [:show]
    resources :trucks

    get "/search", to: "trucks#search"
  end
