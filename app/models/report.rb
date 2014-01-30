class Report < ActiveRecord::Base
  attr_accessor :text
  belongs_to :location_id
end
