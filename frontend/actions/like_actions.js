import * as LikeAPIUtil from '../util/like_api_util';
import { receivePost } from '../actions/post_actions';
import { receiveComment } from '../actions/comment_actions';

export const createPostLike = postId => dispatch => (
  LikeAPIUtil.createPostLike(postId)
    .then(post => dispatch(receivePost(post)))
);

export const deletePostLike = likeId => dispatch => (
  LikeAPIUtil.deleteLike(likeId)
    .then(post => dispatch(receivePost(post)))
);
export const createCommentLike = commentId => dispatch => (
  LikeAPIUtil.createCommentLike(commentId)
    .then(comment => dispatch(receiveComment(comment)))
);

export const deleteCommentLike = likeId => dispatch => (
  LikeAPIUtil.deleteLike(likeId)
    .then(comment => dispatch(receiveComment(comment)))
);