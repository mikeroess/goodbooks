  # json.books do
  #   json.array! @books, partial: 'api/books/book', as: :book
  # end

  json.shelves do
    json.array! @user.shelves, partial: 'api/shelves/shelf', as: :shelf
  end

  json.bookDetails do
    json.coverUrl @book.image.url
    json.title @book.title
    json.authorName @book.author_name
    json.blurb @book.blurb
    json.shelves @book.shelves.ids
    json.bookId @book.id
    json.reviews do
      json.array! @book.reviews.reject{ |review| review == @review}, partial: 'api/reviews/review', as: :review
    end
  end
