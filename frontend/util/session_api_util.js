
export const signup = (formData) => {
  return $.ajax({
    method: "post",
    url: '/api/users/',
    contentType: false,
    processData: false,
    dataType: 'json',
    data: formData,
  });
};

export const login = ( user ) => {
  return $.ajax({
    method: "post",
    url: 'api/sessions/',
    data: user
  });
};

export const logout = () => {
  return $.ajax({
    method: "delete",
    url: 'api/sessions',
  });
};
