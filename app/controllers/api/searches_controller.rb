class Api::SearchesController < ApplicationController
  def index
    query = '%' + params[:query].to_s +'%'
    @users = User.where('first_name ILIKE ? OR last_name ILIKE ?', query, query).limit(5)
    @posts = Post.where('body ILIKE ?', query).limit(5)
    @query = params[:query]
    render :index
  end

  
end
