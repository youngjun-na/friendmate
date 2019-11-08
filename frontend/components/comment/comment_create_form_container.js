import React from 'react';
import { connect } from 'react-redux';
import CommentCreateForm from './comment_create_form';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state={}, ownProps) => {
  return{
  currentUserId: state.session.id,
  postId: ownProps.postId,
}};

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentCreateForm);