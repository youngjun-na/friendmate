class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.author_id = current_user.id
    @like.save
    if like_params[:likable_type] == "Post"
      @post = Post.find(like_params[:likable_id])
      render :show_post
    elsif like_params[:likable_type] == "Comment"
      @comment = Comment.find(like_params[:likable_id])
      render :show_comment
    end
  end
  
  def show
    @like = Like.find(params[:id])
    render :show
  end

  def destroy
    @like = Like.find(params[:id])
    likable_type = @like.likable_type
    likable_id = @like.likable_id
    @like.destroy
    if likable_type == "Post"
      @post = Post.find(likable_id)
      render :show_post
    elsif likable_type == "Comment"
      @comment = Comment.find(likable_id)
      render :show_comment
    end
  end

  private
  def like_params
    params.require(:like).permit(:author_id, :likable_type, :likable_id)
  end
end
