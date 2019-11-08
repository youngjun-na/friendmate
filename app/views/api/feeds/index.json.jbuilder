@posts.each do |post|
  json.posts do 
    json.set! post.id do
      json.extract! post, :id, :body, :author_id, :host_id, :created_at, :updated_at, :comment_ids
      json.photoUrl url_for(post.photo) if post.photo.attached?
    end
  end
  json.comments do
    post.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body, :author_id, :post_id, :created_at, :updated_at
        json.photoUrl url_for(comment.photo) if comment.photo.attached?
      end
    end
  end
end