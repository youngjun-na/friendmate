class Api::FeedsController < Api::PostsController
  def index
    @posts = Post.all_related_posts(params[:user_id]).offset(params[:offset]).limit(5).includes(:comments)
    @future = Post.all_related_posts(params[:user_id]).offset(params[:offset].to_i+5).limit(5).includes(:comments)
    if @future[0].is_a?(ActiveRecord::Base)
      render :index
    else
      render json: ["we error now"], status: 401
    end
  end
   private 
end
