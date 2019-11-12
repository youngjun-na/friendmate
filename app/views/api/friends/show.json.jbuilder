json.users do 
  json.requested_user do 
    json.partial! '/api/users/user.json.jbuilder', user: @friend.requested_user
  end
  json.received_user do 
    json.partial! '/api/users/user.json.jbuilder', user: @friend.received_user
  end
end

