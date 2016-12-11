class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author_name, null: false
      t.text :blurb, null: false, default: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      t.references :bookable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
