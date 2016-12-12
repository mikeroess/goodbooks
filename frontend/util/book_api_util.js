export const fetchBook = (bookId) => {
  return $.ajax({
    method: "GET",
    url: `api/books/${bookId}`
  });
};

export const createBook = (book) => {
  return $.ajax({
    method: "POST",
    url: "api/books",
    contentType: false,
    processData: false,
    dataType: 'json',
    data: book,
  });
};

export const fetchAllBooks = () => {
  return $.ajax({
    method: "GET",
    url: "api/books"
  });
};

export const fetchMyBooks = () => {
  return $.ajax({
    method: "GET",
    url: "api/books/myBooks"
  });
};

export const destroyBook = (bookId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/books/${bookId}`
  });
};
