class CreateShelvedBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :shelved_books do |t|
      t.integer :book_id, null: false
      t.integer :shelf_id, null: false

      t.timestamps
    end

    add_index :shelved_books, [:book_id, :shelf_id], unique: true
  end
end
