export const fetchShelves = (userID) => {
  return $.ajax({
    method: "GET",
    url: '/api/users/${userID}/shelves',
  });
};

export const createShelf = (userID, shelf) => {
  return $.ajax({
    method: "POST",
    url: `api/users/${userID}/shelves`,
    data: shelf
  });
};

export const destroyShelf = (shelf_id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/shelves/${shelf_id}`
  });
};
