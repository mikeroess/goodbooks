json.shelf do
  json.title @shelf.title
  json.shelfId @shelf.id
  json.count @shelf.books.count
end



json.books do
  json.array! @shelf.books, partial: 'api/books/book', as: :book
end
