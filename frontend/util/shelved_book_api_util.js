export const updateBookshelves = (shelfUpdates) => {
  return $.ajax({
    method: "PATCH",
    url: "/api/shelved_books",
    data: shelfUpdates,
  });
};
