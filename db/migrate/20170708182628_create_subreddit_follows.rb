class CreateSubredditFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :subreddit_follows do |t|
      t.integer :subreddit_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :subreddit_follows, [:subreddit_id, :user_id], unique: true
  end
end
