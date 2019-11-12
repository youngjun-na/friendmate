json.extract! user, :id, :first_name, :last_name, :email, :birthday, :gender
json.friends do user.friends end
json.pending do user.pending end
json.profPicUrl url_for(user.profile_pic) if user.profile_pic.attached?
json.coverPicUrl url_for(user.cover_pic) if user.cover_pic.attached?