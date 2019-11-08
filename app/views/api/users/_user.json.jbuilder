json.extract! user, :id, :first_name, :last_name, :email, :birthday, :gender
json.photoUrl url_for(user.profile_pic) if user.profile_pic.attached?
