class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :matchName
      t.integer :winnerId
      t.string :winnerName
      t.integer :loserId
      t.string :loserName
      t.integer :cardDraws
      t.integer :holdsAverage
      t.integer :highestPointStreak
      t.integer :averageHoldPointToal
      t.integer :doubleSix
      t.integer :one
      t.timestamps
    end
  end
end
