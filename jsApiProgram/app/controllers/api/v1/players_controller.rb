class Api::V1::PlayersController < ApplicationController


  def index
    @players = Player.all
    render json: @players, status: 200
  end

  def show
    @player = Player.find(params[:id])
render json: @player, status: 200
  end

  def create
    @player = Player.find_or_create_by(name:player_params[:name])
    render json: @player, status: 200
  end

  def update
    @player = Player.find(name:player_params[:name])
    @player.update(player_params)
    render json: @player, status: 200
  end

  def destroy
  @player = Player.find(params[:id])
  @player.delete

  render json: {playerId: @player.id}
  end

  private


  def player_params
        params.require(:player).permit(:name,:totalGames)
  end


end
