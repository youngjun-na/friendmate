class Api::PostsController < ApplicationController
  before_action :underscore_params!

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
    @post.update(post_params)
    @post.photo.purge if !post_params[:photo] 
    if @post.save
      render :show
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
    params.require(:post).permit(:body, :author_id, :host_id, :photo)
  end
  
end
