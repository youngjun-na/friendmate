export const signup = user => {
 
  return $.ajax({
    url: `/api/users`,
    method: 'POST',
    data: { user },
  })
};

export const login = user => (
  $.ajax({
    url: `/api/session`,
    method: 'POST',
    data: { user },
  })
);
export const demoLogin = () => (
  $.ajax({
    url: `/api/session/demo`,
    method: 'POST',
  })
)
export const logout = () => (
  $.ajax({
    url: `/api/session`,
    method: 'DELETE',
  })
);

