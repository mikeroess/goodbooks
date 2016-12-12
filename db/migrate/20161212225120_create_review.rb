class CreateReview < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.string :title
      t.text :body, null: false
    end

    add_index :reviews, [:user_id, :book_id], unique: true
  end
end
