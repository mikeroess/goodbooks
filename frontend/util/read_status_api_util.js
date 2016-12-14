export const createReadStatus = (readStatus) => {
  return $.ajax({
    method: "POST",
    url: "/api/read_statuses",
    data: readStatus
  });
};

export const updateReadStatus = (readStatus, id) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/read_statuses/${id}`,
    data: readStatus
  });
};


export const destroyReadStatus = (readStatusId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/read_statuses/${readStatusId}`,
  });
};

export const fetchReadStatuses = () => {
  return $.ajax({
    method: "GET",
    url: "/api/read_statuses"
  });
};
