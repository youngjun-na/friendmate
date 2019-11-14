class Api::SessionsController < ApplicationController
   def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user 
      login(@user)
      render 'api/users/show'
    else 
      render json: ["Incorrect Login Info!"], status: 401
    end
  end

  def demo
    @user = User.find(4)
    login(@user)
    render 'api/users/show'
  end

  def destroy
    if !current_user
      render json: ["No user!"], status: 404
    else  
      logout
      render json: {}
    end
  end

end
