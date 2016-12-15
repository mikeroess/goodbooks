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
  json.shelfIds @book.shelves.ids
  json.shelves @book.shelves
  json.bookId @book.id
  json.reviews do
    json.array! @book.reviews.reject{ |review| review == @review}, partial: 'api/reviews/review', as: :review
  end
end
