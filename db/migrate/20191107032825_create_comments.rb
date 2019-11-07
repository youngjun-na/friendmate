class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body
      t.integer :author_id, null: false
      t.integer :post_id, null: false
      t.integer :parent_coment_id, null: false
      t.timestamps
    end
  end
end
