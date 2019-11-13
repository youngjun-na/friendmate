class Api::UsersController < ApplicationController
  before_action :underscore_params!
  def create
    @user = User.new(user_params)
    @user.profile_pic.attach(io: File.open("/Users/youngjun.na/Downloads/defaultprofpic.png"), filename: "defaultprofpic.png")
    if @user.save
      login(@user)
      # @users = User.all
      render :show
    else       
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    @user.profile_pic.purge if !user_params[:profile_pic] 
    if @user.save
      render :show
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end
  
  def index
    @users = User.all
    render :index
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :email, :birthday, :gender, :profile_pic, :cover_pic)
  end

end




