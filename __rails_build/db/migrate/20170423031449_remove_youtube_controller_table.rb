class RemoveYoutubeControllerTable < ActiveRecord::Migration[5.0]
  def change
    drop_table :youtube_controllers
  end
end
