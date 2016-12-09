class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.is_password?(params[:user][:password])
      login(@user)
      render 'api/users/show'
    else
      render json: ["Sorry, we didn’t recognize your login information. Please try again."], status: 401
    end
  end

  def destroy
    if current_user
      logout
    else
      render json: ["No one is signed in"], satatus: 404
    end
  end

  private
  def session_params
    params.require(:user).permit(:email, :password)
  end

end
