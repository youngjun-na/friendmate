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
    if @post.update_attributes(post_params)
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
    params.require(:post).permit(:body, :author_id, :host_id)
  end

  def underscore_params!(val = params)
    underscore_hash = -> (hash) do
      hash.transform_keys!(&:underscore)
      hash.each do |key, value|
      if value.is_a?(ActionController::Parameters)
        underscore_hash.call(value)
      elsif value.is_a?(Array)
        value.each do |item|
          next unless item.is_a?(ActionController::Parameters)
            underscore_hash.call(item)
          end
        end
      end
     end
    underscore_hash.call(params)
  end
end
