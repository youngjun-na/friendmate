class Post < ApplicationRecord
  validates :author_id, :host_id, presence: true

  belongs_to :user,
    foreign_key: :author_id,
    class_name: :User 

  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User 

  has_many :comments,
    foreign_key: :post_id,
    class_name: :Comment 
  
  has_one_attached :photo
  
  def self.all_wall_posts(user_id)
    Post.where("host_id = ?", user_id) #.order("updated_at asc")
  end

  def self.all_related_posts(user_id)
    Post.where("host_id = ?", user_id).or(Post.where("author_id=?", user_id)) # .order("updated_at desc")
  end
end
