# @posts.each do |post|
#   json.set! post.id do
#     json.extract! post, :id, :body, :author_id, :host_id, :created_at, :updated_at
#   end
# end
@posts.each do |post|
  json.posts do 
    json.set! post.id do
      json.extract! post, :id, :body, :author_id, :host_id, :created_at, :updated_at, :comment_ids
    end
  end
  json.comments do
    post.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body, :author_id, :post_id, :created_at, :updated_at
      end
    end
  end
end