import React from 'react';
import { connect } from 'react-redux';
import CommentItem from './comment_item';
import { updateComment, deleteComment } from '../../actions/comment_actions';
import { createCommentLike, deleteCommentLike } from '../../actions/like_actions';


const mapStateToProps = state => ({
  allUsers: state.entities.users,
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: comment => dispatch(deleteComment(comment)),
  createCommentLike: like => dispatch(createCommentLike(like)),
  deleteCommentLike: likeId => dispatch(deleteCommentLike(likeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);