# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  email              :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  author             :boolean          default(FALSE)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ApplicationRecord
  attr_reader :password
  has_attached_file :image, default_url: "/app/assets/images/book-flat.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates :username, :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  before_validation :ensure_session_token

  has_many :shelves
  has_many :books, as: :bookable

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def self.find_by_credentials(email, password)
		user = User.find_by(email: email)
		return nil unless user
		user.is_password?(password) ? user : nil
	end


  private

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end
