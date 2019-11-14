 class Friend < ApplicationRecord
  belongs_to :requested_user,
    foreign_key: :request_id,
    class_name: :User 

  belongs_to :received_user,
    foreign_key: :receive_id,
    class_name: :User

end
