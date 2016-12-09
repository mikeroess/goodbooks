json.shelfTitle @shelf.title
json.shelfId @shelf.id
json.array! @shelf.books do |book|
  json.cover_image_url book.cover_image_url
  json.title book.title
  json.author_name book.author_name
  json.blurb book.blurb
end
