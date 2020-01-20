class Api::V1::GamesController < ApplicationController

    def index
      @games = Game.all
      render json: @games, status: 200, include:[:players]
    end

  #   def show
  #     @game = Game.find_by(matchName:game_params[:matchName])
  # render json: @game, status: 200
  #   end

    def create
      @game = Game.create(game_params)
      render json: @game, status: 200
    end

    # def update
    #
    #   @game = Game.find(game_params[:id])
    #
    #   @game.update(game_params)
    #   render json: @game, status: 200
    # end



    private


    def game_params
          params.require(:game).permit(:matchName,:winnerId,:winnerName,:loserId,:loserName,:cardDraws,:holdsAverage,:highestPointStreak,:averageHoldPointToal,:doubleSix,:one,:player_ids => [])

    end


end
