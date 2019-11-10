class Api::FeedsController < Api::PostsController
  def index
    @posts = Post.all_related_posts(params[:user_id]).includes(:comments).limit(2)
    render :index
  end
   private 
end
