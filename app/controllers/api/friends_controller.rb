class Api::FriendsController < ApplicationController
  def create
    @friend = Friend.new(friend_params)
    if @friend.save
      render :show
    else
      render json: @friend.errors.full_messages
    end
  end

  def find 
    @friend = Friend.where("(request_id = ? AND receive_Id = ?) OR (receive_id = ? AND request_Id = ?)", 
    params[:request_id], params[:receive_id],
    params[:receive_id], params[:request_id])
    if @friend
      render json: @friend.ids.shift
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
    render :show
  end

  private
  def friend_params
    params.require(:friend).permit(:request_id, :receive_id, :pending)
  end
end
