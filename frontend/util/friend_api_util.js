export const addFriend = (requestId, receiveId) => (
  $.ajax({
    method: 'POST',
    url: '/api/friends',
    data: {
      friend: {
        requestId,
        receiveId,
        pending: true,
      }
    }
  })
);

export const acceptFriend = friendId => (
  $.ajax({
    method: 'PATCH',
    url: `/api/friends/${friendId}`,
    data: {
      friend: {
        pending: false,
      }
    }
  })
);

export const deleteFriend = friendId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/friends/${friendId}`,
  })
);