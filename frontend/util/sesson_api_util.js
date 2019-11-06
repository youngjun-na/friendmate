export const signup = (user) => {
 
  return $.ajax({
    url: `/api/users`,
    method: 'POST',
    data: { user },
    // headers: {
    //   "Key-Inflection": "camel",
    // },
  })
};

export const login = (user) => (
  $.ajax({
    url: `/api/session`,
    method: 'POST',
    data: { user },
    // headers: {
    //   'Key-Inflection': "camel",
    // },
  })
);

export const logout = () => (
  $.ajax({
    url: `/api/session`,
    method: 'DELETE',
    // headers: {
    //   "Key-Inflection": "camel",
    // },
  })
);

