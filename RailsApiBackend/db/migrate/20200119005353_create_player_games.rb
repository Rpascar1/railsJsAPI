class CreatePlayerGames < ActiveRecord::Migration[6.0]
  def change
    create_table :player_games do |t|
      t.belongs_to :game
      t.belongs_to :player
      t.timestamps
    end
  end
end
