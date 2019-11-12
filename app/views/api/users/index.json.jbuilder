@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :first_name, :last_name
    json.friendslist user.friendslist
    json.pending user.pending
    json.profPicUrl url_for(user.profile_pic) if user.profile_pic.attached?
    json.coverPicUrl url_for(user.cover_pic) if user.cover_pic.attached?
  end
end