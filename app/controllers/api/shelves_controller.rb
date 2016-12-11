class Api::ShelvesController < ApplicationController

def create
  @shelf = Shelf.new
  @shelf.title = params[:title]
  @shelf.user_id = current_user.id
  if @shelf.save
    render 'api/shelves/show'
  else
    render json: @shelf.errors.full_messages, staus: 422
  end
end

def index
  @user = current_user
  if @user
    render 'api/shelves/index'
  else
    render json: @user.errors.full_messages, status: 422
  end
end

def show
  @shelf = Shelf.find(params[:id])
  if @shelf
    render 'api/shelves/show'
  else
    render json: @shelf.errors.full_messages, status: 422
  end
end

def destroy
  @shelf = Shelf.find(params[:id])
  if @shelf
    @shelf.destroy
    render 'api/shelves/destroy'
  else
    render json: @user.errors.full_messages, status: 422
  end
end



private
def shelf_params
  params.require(:shelf).permit(:title, :user_id)
end

end
