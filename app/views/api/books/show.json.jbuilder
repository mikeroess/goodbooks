json.review do
  json.title @review.title
  json.body @review.body
  json.bookId @review.book_id
  json.authorName @review.user.username
  json.reviewId @review.id
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
