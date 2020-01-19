class CreatePlayerGames < ActiveRecord::Migration[6.0]
  def change
    create_table :player_games do |t|

      t.timestamps
    end
  end
end
