export const fetchShelves = (userId) => {
  return $.ajax({
    method: "GET",
    url: `/api/shelves`,
  });
};

export const createShelf = (shelf) => {
  return $.ajax({
    method: "POST",
    url: `api/shelves`,
    data: shelf
  });
};

export const destroyShelf = (shelfId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/shelves/${shelfId}`
  });
};
