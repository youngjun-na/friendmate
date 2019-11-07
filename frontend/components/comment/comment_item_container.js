import React from 'react';
import { connect } from 'react-redux';
import CommentItem from './comment_item';
import { updateComment, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  allUsers: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: comment => dispatch(deleteComment(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);