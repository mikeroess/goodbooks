class Api::BooksController < ApplicationController

  def create
    @book = Book.new(book_params)
    if @book.image
      @book.cover_image_url = @book.image.url
    end
    if @book.save
      render 'api/books/show'
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  def index
    @books = Book.all
    render 'api/books/index'
  end


  private

  def book_params
    params.require(:book).permit(:title, :author_name, :blurb, :image, :imageUrl)
  end


end
