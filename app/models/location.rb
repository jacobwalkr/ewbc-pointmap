class Location < ActiveRecord::Base
  attr_accessor :latitude, :longitude, :description
  has_many :reports
end
