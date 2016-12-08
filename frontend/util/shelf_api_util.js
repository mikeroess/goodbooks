export const fetchShelves = (userID) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userID}/shelves`,
    data: {shelf: {user_id: `${userID}`}}
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
