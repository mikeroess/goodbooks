json.review json.null

json.bookDetails do
  json.coverUrl @book.image.url
  json.title @book.title
  json.authorName @book.author_name
  json.blurb @book.blurb
  json.shelves @book.shelves.ids
  json.bookId @book.id
  json.reviews do
    json.array! @book.reviews, partial: 'api/reviews/review', as: :review
  end
end
