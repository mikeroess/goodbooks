class Api::BooksController < ApplicationController



  private

  def book_params
    params.require(:book).permit(:title, :author_name, :blurb, :image, :imageUrl)
  end


end
