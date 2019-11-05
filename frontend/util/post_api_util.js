export const fetchWallPosts = (host_id) => (
  $.ajax({
    method: 'GET',
    url: '/api/walls',
    data: { host_id },
  })
);

export const fetchFeedPosts = (user_id) => (
  $.ajax({
    method: 'GET',
    url: '/api/feeds',
    data: { user_id },
  })
);

export const updatePost = (post) => (
  $,ajax({
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