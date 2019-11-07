import * as CommentAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments,
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment,
});

const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment,
});

export const fetchAllComments = postId => dispatch => (
  CommentAPIUtil.fetchAllComments(postId)
    .then(comments => dispatch(receiveAllComments(comments)))
);

export const fetchComment = commentId => dispatch => (
  CommentAPIUtil.fetchComment(commentId)
    .then(comment => dispatch(receiveComment(comment)))
);

export const createComment = comment => dispatch => {
  return commentAPIUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
};

export const updateComment = comment => dispatch => (
  commentAPIUtil.updateComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = comment => dispatch => (
  commentAPIUtil.deleteComment(comment)
    .then(comment => dispatch(removeComment(comment)))
);
