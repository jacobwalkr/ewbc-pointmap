class FixReportLocationReference < ActiveRecord::Migration
  def change
    rename_column :reports, :location_id_id, :location_id
  end
end
