# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  after_initialize :ensure_session_token

  validates(
    :username,
    :password_digest,
    :session_token,
    presence: true,
    uniqueness: true
  )

  validates(
    :password,
    length: {
      minimum: 6,
      maximum: 20,
      message: "Password must be between 6 to 20 characters",
      allow_nil: true
    }
  )

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = encrypt_password(password)
  end

  def is_password?(password)
    bcrypted_password.is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def encrypt_password(password)
    BCrypt::Password.create(password)
  end

  def bcrypted_password
    BCrypt::Password.new(self.password_digest)
  end
end
