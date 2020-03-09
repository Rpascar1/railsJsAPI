class Api::V1::GamesController < ApplicationController

    def index
      @games = Game.all
      render json: @games, status: 200, include:[:players]
    end


    def create
      @game = Game.create(game_params)
      render json: @game, status: 200
    end


    private


    def game_params
          params.require(:game).permit(:matchName,:winnerId,:winnerName,:loserId,:loserName,:cardDraws,:holdsAverage,:highestPointStreak,:averageHoldPointToal,:doubleSix,:one,:player_ids => [])

    end


end
