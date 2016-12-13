export const createReadStatus = (readStatus) => {
  return $.ajax({
    method: "POST",
    url: "/api/reviews",
    data: readStatus
  });
};

export const updateReadStatus = (readStatus) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/reviews/${readStatus.id}`,
    data: readStatus
  });
};


export const destroyReadStatus = (readStatusId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/reviews/${readStatusId}`,
  });
};

export const fetchReadStatuses = () => {
  return $.ajax({
    method: "GET",
    url: "/api/read_statuses",
    data: readStatus
  });
};
