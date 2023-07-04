class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :number_plate
      t.string :image
      t.integer :owner_id
      t.string :driver_name
      t.integer :driver_contact

      t.timestamps
    end
  end
end
