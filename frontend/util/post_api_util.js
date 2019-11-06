export const fetchWallPosts = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: '/api/walls',
    data: { user_id },
  })
};

export const fetchFeedPosts = (user_id) => (
  $.ajax({
    method: 'GET',
    url: '/api/feeds',
    data: { user_id },
  })
);
export const fetchPost = (postId) => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`,
  })
);

export const updatePost = (post) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`,
    data: { post },
  })
);

export const deletePost = (post) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/posts/${post.id}`,
    data: { post },
  })
);

export const createPost = (post) => (
  $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: { post },
  })
)