class Api::ShelvesController < ApplicationController

def create
  @shelf = Shelf.new
  @shelf.title = params[:shelf][:title]
  @shelf.user_id = current_user.id
  if @shelf.save
    render 'api/shelves/show'
  else
    render json: @shelf.errors.full_messages, staus: 422
end

def index
  @user = User.find(params[:shelf][:user_id]).includes(:shelves)
end

def show
end

def destroy
end



private
def shelf_params
  params.require(:shelf).permit(:title, :user_id)
end

end
