class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.author_id = current_user.id
    @like.save
    if like_params[:likable_type] == "post"
      @post = Post.find(like_params[:likable_id])
      render :show_post
    elsif like_params[:likable_type] == "comment"
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
    @like.destroy
    if like_params[:likable_type] == "post"
      @post = Post.find(like_params[:likable_id])
      render :show_post
    elsif like_params[:likable_type] == "comment"
      @comment = Comment.find(like_params[:likable_id])
      render :show_comment
    end
  end

  private
  def like_params
    params.require(:like).permit(:author_id, :likable_type, :likable_id)
end
