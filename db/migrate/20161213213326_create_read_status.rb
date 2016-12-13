class CreateReadStatus < ActiveRecord::Migration[5.0]
  def change
    create_table :read_statuses do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.string :status, null: false

      t.timestamps
    end

    add_index :read_statuses, [:user_id, :book_id], unique: true
  end
end
