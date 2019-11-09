export const fetchWallPosts = userId => {
  return $.ajax({
    method: 'GET',
    url: '/api/walls',
    data: {userId},
  })
};

export const fetchFeedPosts = userId => (
  $.ajax({
    method: 'GET',
    url: '/api/feeds',
    data: {userId},
  })
);
export const fetchPost = postId => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`,
  })
);

export const createPost = post => (
  $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: post,
    contentType: false,
    processData: false,
  })
)

export const updatePost = post => (
  $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`,
    data: post,
    contentType: false,
    processData: false,
  })
);

export const deletePost = post => (
  $.ajax({
    method: 'DELETE',
    url: `/api/posts/${post.id}`,
    data: { post },
  })
);
