# == Schema Information
#
# Table name: shelved_books
#
#  id         :integer          not null, primary key
#  book_id    :integer          not null
#  shelf_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ShelvedBook < ApplicationRecord
  validates :book, :shelf, presence: true

  belongs_to :book
  belongs_to :shelf
end
