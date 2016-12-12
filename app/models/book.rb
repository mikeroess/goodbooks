# == Schema Information
#
# Table name: books
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  author_name        :string           not null
#  blurb              :text             default("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), not null
#  bookable_type      :string
#  bookable_id        :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Book < ApplicationRecord
  has_attached_file :image, default_url: "/app/assets/images/book-flat.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates :author_name, :title, :blurb, presence: true
  validates :title, uniqueness: { scope: :author_name }


  has_many :shelved_books
  has_many :users, through: :shelves, as: :readers
  has_many :shelves, through: :shelved_books
end
