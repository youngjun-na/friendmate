export const fetchAllUsers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/users',
  })
);

export const fetchUser = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`,
  })
)

export const updateUser = user => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${user.get('user[id]')}`,
    data: user,
    contentType: false,
    processData: false,
  })
)