class AddRouteToCars < ActiveRecord::Migration[7.0]
  def change
    add_column :cars, :route, :string
  end
end
