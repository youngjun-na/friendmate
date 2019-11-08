class Api::FeedsController < Api::PostsController
  def index
    @posts = Post.all_related_posts(params[:user_id]).includes(:comments)
    render :index
  end
   private 
end
