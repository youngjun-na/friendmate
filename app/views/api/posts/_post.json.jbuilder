json.extract! post, :id, :body, :author_id, :host_id, :created_at, :updated_at, :comment_ids, :likes
json.photoUrl url_for(post.photo) if post.photo.attached?