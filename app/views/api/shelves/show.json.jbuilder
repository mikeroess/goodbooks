json.shelfTitle @shelf.title
json.shelfId @shelf.id
json.array! @shelf.books, partial: 'api/books/book', as: :book
