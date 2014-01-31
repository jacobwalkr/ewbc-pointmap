PointMap::Application.routes.draw do
  root "home#index"
  resources :locations, :reports
end
