json.shelfTitle @shelf.title
json.shelfId @shelf.id
json.array! @shelf.books do |book|
  json.bookId book.id
  json.coverImageUrl book.cover_image_url
  json.title book.title
  json.authorName book.author_name
  json.blurb book.blurb
end
