export const fetchAllComments = postId => {
  return $.ajax({
    method: 'GET',
    url: '/api/comments',
    data: { postId }
  })
};

export const fetchComment = commentId => (
  $.ajax({
    method: 'GET',
    url: `/api/comments/${commentId}`,
  })
);

export const createComment = comment => {
  debugger;
  return $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: comment,
    contentType: false,
    processData: false,
  })
};

export const updateComment = comment => (
  $.ajax({
    method: 'PATCH',
    url: `/api/comments/${comment.id}`,
    data: { comment },
  })
)

export const deleteComment = comment => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${comment.id}`,
    data: { comment },
  })
);