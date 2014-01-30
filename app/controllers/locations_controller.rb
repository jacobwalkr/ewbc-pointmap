class LocationsController < ApplicationController
  def new
  end
  
  def create
  end
  
  def show
    @location = Location.find_by_id(params['id'])
  end
end
