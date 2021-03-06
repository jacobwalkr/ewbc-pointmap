class LocationsController < ApplicationController
  def index
    @locations = Location.all
    
    respond_to do |format|
      format.html
      format.json { render json: @locations }
    end
  end
  
  def create
    location = Location.new(location_params)
    location.save
    
    redirect_to({ action: "show", id: location.id })
  end
  
  def show
    @location = Location.find_by_id(params[:id])
  end
  
  private
    def location_params
      params.require(:location).permit(:latitude, :longitude, :description)
    end
end
