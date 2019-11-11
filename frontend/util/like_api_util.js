export const createPostLike = postId => (
  $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { 
      like: {
      likableId: postId,
      likableType: "Post",
    } },
  })
);
export const createCommentLike = commentId => (
  $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: {
      like: {
      likableId: commentId,
      likableType: "Comment",
      } },
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
);