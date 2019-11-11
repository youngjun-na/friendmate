json.extract! post, :id, :body, :author_id, :host_id, :created_at, :likes, :updated_at, :comment_ids
json.photoUrl url_for(post.photo) if post.photo.attached?