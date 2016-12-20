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

  def show
    @book = Book.find(params[:id])
    if @book
      @review = Review.where(user_id: current_user.id, book_id: @book.id).first
      if @review
        render 'api/books/show'
      else
        render 'api/books/noReview'
      end
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  def myBooks
    @user = current_user
    @books = @user.books
    if @books
      render 'api/books/index'
    else
      render json @books.errors.full_messages, status: 422
    end
  end

  def reading_books
    @user = current_user
    statuses = ReadStatus.where(user_id: @user.id, status: "reading")
    if statuses
    else
    end
  end

  def to_read_books
  end

  def reading_books
  end

  private

  def book_params
    params.require(:book).permit(:title, :author_name, :blurb, :image, :imageUrl)
  end


end
