class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :totalGames, default: 0
      t.integer :totalGamesWon, default: 0
      t.integer :totalGamesLost, default: 0
      t.integer :playerHighestPointStreak, default: 0
      t.timestamps

    end
  end
end
