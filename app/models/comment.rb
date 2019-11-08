class Comment < ApplicationRecord
  validates :author_id, :post_id, presence: true

  belongs_to :user,
    foreign_key: :author_id,
    class_name: :User 

  belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post 
  
  belongs_to :parent_comment,
    optional: true,
    foreign_key: :parent_comment_id,
    class_name: :Comment 

  has_many :replies,
    foreign_key: :parent_comment_id,
    class_name: :Comment

  has_one_attached :photo
end
