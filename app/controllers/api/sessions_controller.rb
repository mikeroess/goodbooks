class Api::SessionsController < ApplicationController
  def create
    sleep(1)
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.is_password?(params[:user][:password])
      login(@user)
      render 'api/users/show'
    else
      render json: ["Sorry, we didn’t recognize your login information. Please try again."], status: 401
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
