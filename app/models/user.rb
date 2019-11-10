class User < ApplicationRecord
  validates :first_name, :last_name, :session_token, :email, :birthday, :gender, presence: true
  validates :session_token, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  before_validation :ensure_session_token

  attr_reader :password

  has_many :posts,
    foreign_key: :author_id,
    class_name: :Post 

  has_many :wall_posts,
    foreign_key: :host_id,
    class_name: :Post

  has_many :comments,
    foreign_key: :author_id,
    class_name: :Comment

  has_many :friend_requests,
    foreign_key: :request_id,
    class_name: :Friend  
  
  has_many :friend_receives,
    foreign_key: :receive_id,
    class_name: :Friend
  
  has_one_attached :profile_pic
  has_one_attached :cover_pic

  def friends 
    friends = Friend.where("(request_id = ? OR receive_id = ?) AND pending = false", self.id, self.id).pluck(:receive_id, :request_id).flatten
    friends.delete(self.id)
    friends
  end

  def pending
    pending = Friend.where("receive_id = ? AND pending = true", self.id).pluck(:receive_id).flatten
    pending
  end

  def self.find_by_credentials(email, password) 
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
