class Api::PostsController < ApplicationController
  def show
    @post = Post.find(params[:id])
    render :show
  end

  def index
  end
  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else  
      render json: @post.errors.full_messages, status: 401
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(post_params)
      render json: @post
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: @post
  end

  private

  def post_params
    params.require(:post).permit(:body, :author_id, :host_id)
  end
end
