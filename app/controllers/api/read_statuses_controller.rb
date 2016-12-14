class Api::ReadStatusesController < ApplicationController

  def index
    @user = current_user
    render 'api/read_statuses/index'
  end

  def create
    @read_status = ReadStatus.new(read_status_params)
    @read_status.user_id = current_user.id
    if @read_stawtus.save
      @user = current_user
      render 'api/read_statuses/index'
    else
      render json: @read_status.errors.full_messages, status: 422
    end
  end

  def update
    debugger
    @read_status = ReadStatus.find(params[:id])
    @read_status.user_id = current_user.id
    if @read_status.update(read_status_params)
      @user = current_user
      render 'api/read_statuses/index'
    else
      render json: @read_status.errors.full_messages, status: 422
    end
  end

  def destroy
    @read_status = ReadStatus.find(params[:id])
    @read_status.destroy
  end

  private
  def read_status_params
    params.require(:read_status).permit(:status, :book_id)
  end
end
