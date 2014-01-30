class CreateReports < ActiveRecord::Migration
  def change
    create_table :reports do |t|
      t.text :body
      t.references :location_id, index: true

      t.timestamps
    end
  end
end
