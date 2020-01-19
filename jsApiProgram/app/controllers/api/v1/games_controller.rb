class Api::V1::GamesController < ApplicationController

    def index
      @games = Game.all
      render json: @games, status: 200
    end

    def show
      @game = Game.find_by(name:game_params[:name])
  render json: @game, status: 200
    end

    def create
      @game = Game.find_or_create_by(name:game_params[:name])
      render json: @game, status: 200
    end

    def update

      @game = Game.find(params[:id])

      @game.update(game_params)
      render json: @game, status: 200
    end



    private


    def game_params
          params.require(:game).permit(:name,:totalGames,:totalGamesWon,:totalGamesLost,:id,:gameHighestPointStreak )
    end


end
