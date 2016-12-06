class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.is_password?(params[:user][:password])
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid Login Credentials"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["No one is signed in"], satatus: 404
    end
  end

  private
  def session_params
    params.require(:user).permit(:email, :password)
  end

end
