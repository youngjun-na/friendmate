class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :author_id, null: false
      t.integer :likable_id, null: false
      t.string :likable_type, null: false
      t.timestamps
    end
    add_index :likes, [:author_id, :likable_id, :likable_type], unique: true
  end
end
