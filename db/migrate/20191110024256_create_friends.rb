class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.integer :request_id
      t.integer :receive_id
      t.boolean :pending
      t.timestamps
    end
  end
end
