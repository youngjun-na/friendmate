import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIEVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_MORE_POSTS = "RECEIVE_MORE_POSTS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveAllPosts = payload => ({
  type: RECEIVE_ALL_POSTS,
  payload,
});

export const receiveMorePosts = payload => ({
  type: RECEIVE_MORE_POSTS,
  payload,
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
// export const receiveFeedPosts = posts => ({
//   tyep: RECEIVE_FEED_POSTS,
//   posts,
// })

export const receivePost = post => ({
  type: RECEIVE_POST,
  post,
})

const removePost = post => ({
  type: REMOVE_POST,
  post,
})

export const fetchWallPosts = userId => dispatch => (
  PostAPIUtil.fetchWallPosts(userId)
    .then(posts => dispatch(receiveAllPosts(posts)))
);

export const fetchFeedPosts = userId => dispatch => (
  PostAPIUtil.fetchFeedPosts(userId)
    .then(posts => dispatch(receiveAllPosts(posts)))
);

export const fetchPost = postId => dispatch => (
  PostAPIUtil.fetchPost(postId)
    .then(post => dispatch(receivePost(post)))
);

export const createPost = post => dispatch => {
  return PostAPIUtil.createPost(post)
    .then(post => dispatch(receivePost(post)))
};

export const updatePost = post => dispatch => (
  PostAPIUtil.updatePost(post)
    .then(post => dispatch(receivePost(post)))
);

export const deletePost = post => dispatch => (
  PostAPIUtil.deletePost(post)
    .then(post => dispatch(removePost(post)))
);

export const fetchMoreWallPosts = (userId, offset) => (
  PostAPIUtil.fetchMoreWallPosts(userId, offset)
    .then(posts => dispatch(receiveMorePosts(posts)))
);

export const fetchMoreFeedPosts = (userId, offset) => {
  return PostAPIUtil.fetchMoreFeedPosts(userId, offset)
    .then(posts => dispatch(receiveMorePosts(posts)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
};

