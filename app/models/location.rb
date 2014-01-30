class Location < ActiveRecord::Base
  attr_accessor :latitude, :longitude
  has_many :reports
end
