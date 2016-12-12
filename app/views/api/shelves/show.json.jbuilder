json.title @shelf.title
json.shelfId @shelf.id
json.books do
  json.array! @shelf.books, partial: 'api/books/book', as: :book
end
