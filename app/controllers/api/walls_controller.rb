class Api::WallsController < Api::PostsController
  def index
    @posts = Post.all_wall_posts(params[:id])
    render :index
  end
end
