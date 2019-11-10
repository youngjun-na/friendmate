class Api::FriendsController < ApplicationController
  def create
    @friend = Friend.new(friend_params)
    if @friend.save
      render :show
    else
      render json: @friend.errors.full_messages
    end
  end

  def update
    @friend = Friend.find(params[:id])
    if @friend.update_attributes(friend_params)
      render :show
    end
  end

  def destroy
    @friend = Friend.find(params[:id])
    @friend.destroy
    redner :show
  end

  private
  def friend_params
    params.require(:friend).permit(:request_id, :receive_id, :pending)
  end
end
