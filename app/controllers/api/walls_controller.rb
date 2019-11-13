class Api::WallsController < Api::PostsController
  before_action :underscore_params!
  def index
    @posts = Post.all_wall_posts(params[:user_id]).includes(:comments).limit(5)
    render :index
  end

end
