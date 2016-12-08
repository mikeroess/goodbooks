export const fetchShelves = (userId) => {
  return $.ajax({
    method: "GET",
    url: `/api/shelves`,
  });
};

export const createShelf = (userId, shelf) => {
  return $.ajax({
    method: "POST",
    url: `api/users/${userId}/shelves`,
    data: shelf
  });
};

export const destroyShelf = (shelfId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/shelves/${shelfId}`
  });
};
