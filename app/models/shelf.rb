# == Schema Information
#
# Table name: shelves
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Shelf < ApplicationRecord
  validates :title, :user_id, presence: true
  validates :title, uniqueness: {scope: :user_id, message: "You already have a shelf with that name"}

  belongs_to :user
  has_many :books, as: :bookable
end
