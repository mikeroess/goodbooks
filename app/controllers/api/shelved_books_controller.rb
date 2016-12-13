class Api::ShelvedBooksController < ApplicationController

  def update
    requests = params["shelvedBooks"]
    shelves = params["shelvedBooks"].keys
    @book_id = params["shelvedBooks"][shelves.first.to_s]["bookId"].to_i
    shelves.each do |shelf_id|
      request = requests[shelf_id]
      if request["checked"] == "true"
        create_shelved_book(shelf_id, @book_id)
      else
        destroy_shelved_book(shelf_id, @book_id)
      end
    end
    @book = Book.find(@book_id)
    @user = current_user
    @review = Review.where(user_id: current_user.id, book_id: @book.id).first
    render 'api/shelvedBooks/update'
  end



  private



  def create_shelved_book(shelf_id, book_id)
    record = ShelvedBook.where(shelf_id:shelf_id, book_id:book_id)
    ShelvedBook.create(shelf_id: shelf_id, book_id: book_id) if record.empty?
  end

  def destroy_shelved_book(shelf_id, book_id)
    record = ShelvedBook.where(shelf_id:shelf_id, book_id:book_id)
    ShelvedBook.destroy(record) unless record.empty?
  end


  def shelvedBookParams
    params.require("shelvedBooks").permit!
  end
end
