class Api::V1::GamesController < ApplicationController
  def index
    @games = game.all
    render json: @games, status: 200
  end

  def show
    @game = game.find(params[:id])
render json: @game, status: 200
  end

  def create
    @game = game.create(game_params)
    render json: @game, status: 200
  end

  def update
    @game = game.find(params[:id])
    @game.update(game_params)
    render json: @game, status: 200
  end

  def destroy
  @game = game.find(params[:id])
  @game.delete

  render json: {gameId: @game.id}
  end

  private


  def game_params
        params.require(:game).permit(:name)
  end


end
