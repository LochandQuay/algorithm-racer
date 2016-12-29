class CreateAlgorithms < ActiveRecord::Migration[5.0]
  def change
    create_table :algorithms do |t|

      t.string :title, null: false
      t.text :body, null: false
      t.string :category, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :algorithms, :user_id
  end
end
