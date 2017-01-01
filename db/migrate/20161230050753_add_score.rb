class AddScore < ActiveRecord::Migration[5.0]
  def change
    add_column :algorithms, :golf_score, :integer
    add_column :algorithms, :speed, :integer
    add_column :algorithms, :total_score, :integer
  end
end
