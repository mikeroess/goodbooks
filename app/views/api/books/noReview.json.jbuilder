json.review json.null

json.bookDetails do
  json.coverUrl @book.image.url
  json.title @book.title
  json.authorName @book.author_name
  json.blurb @book.blurb
  json.shelfIds @book.shelves.ids
  json.shelves @book.shelves
  json.bookId @book.id
end
