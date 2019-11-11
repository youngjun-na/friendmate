export const createLike = like => (
  $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { like },
  })
);
export const fetchLike = like => (
  $.ajax({
    method: 'GET',
    url: `/api/likes/${like.authorId}`,
  })
);
export const deleteLike = likeId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/likes/${likeId}`,
  })
)