export const fetchShelves = (user_id) => {
  return $.ajax({
    method: "GET",
    url: '/api/users/${user_id}/shelves',
  });
};

export const createShelf = (user_id, shelf) => {
  return $.ajax({
    method: "POST",
    url: `api/users/${user_id}/shelves`,
    data: shelf
  });
};
