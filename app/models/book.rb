# == Schema Information
#
# Table name: books
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  author_name     :string           not null
#  cover_image_url :text             default("plain_book_url")
#  blurb           :text             default("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), not null
#

class Book < ApplicationRecord
  has_attached_file :image, default_url: "/app/assets/images/book-flat.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
  
  validates :author_name, :title, :blurb presence: true
  validates :title, uniqueness: { scope: :author_name }

  belongs_to :bookable, polymorphic: true
end
