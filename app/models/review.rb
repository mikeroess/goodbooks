# == Schema Information
#
# Table name: reviews
#
#  id      :integer          not null, primary key
#  user_id :integer          not null
#  book_id :integer          not null
#  title   :string
#  body    :text             not null
#

class Review < ApplicationRecord
  validates :user, :book, :body, presence: true

  belongs_to :user
  belongs_to :book
end
