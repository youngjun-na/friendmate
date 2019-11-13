@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :first_name, :last_name
    json.friendslist user.friendslist
    json.pending user.pending
    json.profPicUrl url_for(user.profile_pic) if user.profile_pic.attached?
    json.coverPicUrl url_for(user.cover_pic) if user.cover_pic.attached?
  end
end

@posts.each do |post|
  json.posts do 
    json.set! post.id do
      json.extract! post, :id, :body, :author_id, :host_id, :created_at, :updated_at, :comment_ids, :likes
      json.photoUrl url_for(post.photo) if post.photo.attached?
    end
  end
end