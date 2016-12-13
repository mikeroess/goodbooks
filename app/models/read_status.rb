# == Schema Information
#
# Table name: read_statuses
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  book_id    :integer          not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ReadStatus < ApplicationRecord
  validates: :user, :book, :status, presence: true
  validates: :status, inclusion: {in: %w(read to-read reading)}
  validates: :user_id, uniqueness: {scope: :book_id, message: "You can only have one status per book, pal"}

  belongs_to :user
  belongs_to :book
end
