class Api::WallsController < Api::PostsController
  before_action :underscore_params!
  def index
    @posts = Post.all_wall_posts(params[:user_id]).includes(:comments).limit(5)
    render :index
  end

  private 
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
