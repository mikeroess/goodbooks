# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161211010732) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "books", force: :cascade do |t|
    t.string   "title",                                                                                                                                                       null: false
    t.string   "author_name",                                                                                                                                                 null: false
    t.text     "cover_image_url",    default: "plain_book_url"
    t.text     "blurb",              default: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", null: false
    t.string   "bookable_type"
    t.integer  "bookable_id"
    t.integer  "shelf_id"
    t.datetime "created_at",                                                                                                                                                  null: false
    t.datetime "updated_at",                                                                                                                                                  null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["bookable_type", "bookable_id"], name: "index_books_on_bookable_type_and_bookable_id", using: :btree
    t.index ["shelf_id"], name: "index_books_on_shelf_id", using: :btree
  end

  create_table "shelved_books", force: :cascade do |t|
    t.integer  "book_id",    null: false
    t.integer  "shelf_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id", "shelf_id"], name: "index_shelved_books_on_book_id_and_shelf_id", unique: true, using: :btree
  end

  create_table "shelves", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title", "user_id"], name: "index_shelves_on_title_and_user_id", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                           null: false
    t.string   "email",                              null: false
    t.string   "password_digest",                    null: false
    t.string   "session_token",                      null: false
    t.boolean  "author",             default: false
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
