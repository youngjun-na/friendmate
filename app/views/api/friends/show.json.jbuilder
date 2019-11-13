req_user = @friend.requested_user
rec_user = @friend.received_user

json.set! req_user.id do
  json.extract! req_user, :id, :first_name, :last_name
  json.friendslist req_user.friendslist
  json.pending req_user.pending
  json.profPicUrl url_for(req_user.profile_pic) if req_user.profile_pic.attached?
  json.coverPicUrl url_for(req_user.cover_pic) if req_user.cover_pic.attached?
end
json.set! rec_user.id do
  json.extract! rec_user, :id, :first_name, :last_name
  json.friendslist rec_user.friendslist
  json.pending rec_user.pending
  json.profPicUrl url_for(rec_user.profile_pic) if rec_user.profile_pic.attached?
  json.coverPicUrl url_for(rec_user.cover_pic) if rec_user.cover_pic.attached?
end


