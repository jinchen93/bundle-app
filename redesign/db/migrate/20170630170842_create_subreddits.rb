class CreateSubreddits < ActiveRecord::Migration[5.0]
  def change
    create_table :subreddits do |t|
      t.string :name, null: false
      t.string :url, null: false
      t.timestamps
    end

    add_index :subreddits, :url, unique: true
  end
end
