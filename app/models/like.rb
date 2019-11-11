class Like < ApplicationRecord
  belongs_to :likable, polymorphic: true

  belongs_to :liker,
    foreign_key: :author_id,
    class_name: :User
end
