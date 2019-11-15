export const fetchWallPosts = userId => {
  return $.ajax({
    method: 'GET',
    url: '/api/walls',
    data: { userId, offset: 0 },
  })
};

export const fetchFeedPosts = userId => (
  $.ajax({
    method: 'GET',
    url: '/api/feeds',
    data: { userId, offset: 0},
  })
);
export const fetchPost = postId => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${postId}`,
  })
);

export const createPost = post => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: post,
    contentType: false,
    processData: false,
  })}


export const updatePost = post => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.get('post[id]')}`,
    data: post,
    contentType: false,
    processData: false,
  })}
;

export const deletePost = post => (
  $.ajax({
    method: 'DELETE',
    url: `/api/posts/${post.id}`,
    data: { post },
  })
);

export const fetchMoreWallPosts = (userId, offset) => {
  return $.ajax({
    method: 'GET',
    url: '/api/walls/',
    data: { userId, offset }
  })
};
export const fetchMoreFeedPosts = (userId, offset) => {
  return $.ajax({
    method: 'GET',
    url: '/api/feeds/',
    data: { userId, offset }
  })
};