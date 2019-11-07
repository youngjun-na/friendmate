import React from 'react';
import { connect } from 'react-redux';
import PostItem from './post_item';
import { updatePost, deletePost, receivePost } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  allUsers: state.entities.users,
  allComments: state.entities.comments,
  currentUserId: state.session.id,
})
const mapDispatchToProps = dispatch => ({
  updatePost: post => dispatch(updatePost(post)),
  deletePost: post => dispatch(deletePost(post)),
  receivePost: post => dispatch(receivePost(post)),
  openModal: (type, paramId) => dispatch(openModal(type, paramId)),
  createComment: comment => dispatch(createComment(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);