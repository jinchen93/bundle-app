class AddUserIdToExistingTables < ActiveRecord::Migration[5.0]
  def change
    add_column :subreddits, :user_id, :integer
    add_column :youtube_channels, :user_id, :integer
    
    add_index :subreddits, :user_id
    add_index :youtube_channels, :user_id
  end
end
