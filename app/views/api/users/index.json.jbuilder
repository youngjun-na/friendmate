@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :first_name, :last_name
    json.photoUrl url_for(user.profile_pic) if user.profile_pic.attached?
  end
end