class Api::WallsController < Api::PostsController
  before_action :underscore_params!
  def index
    if !params[:offset]
      @posts = Post.all_wall_posts(params[:user_id]).includes(:comments).limit(5)
      render :index
    else
      @posts = Post.all_wall_posts(params[:user_id]).offset(params[:offset]).limit(5).includes(:comments)
      @future = Post.all_wall_posts(params[:user_id]).offset(params[:offset].to_i+5).limit(5).includes(:comments)
      if @future[0].is_a?(ActiveRecord::Base)
        render :index
      else
        render json: ["we error now"], status: 401
      end
    end
  end

end
