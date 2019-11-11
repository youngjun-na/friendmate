json.extract! comment, :id, :body, :author_id, :post_id, :parent_comment_id, :likes, :created_at, :updated_at
json.photoUrl url_for(comment.photo) if comment.photo.attached?