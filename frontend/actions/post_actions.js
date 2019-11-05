import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIEVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

const receiveAllPosts = posts => ({
  type: RECEIVE_ALL_POSTS,
  posts,
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
