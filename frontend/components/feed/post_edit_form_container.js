import React from 'react';
import { connect } from 'react-redux';
import PostEditForm from './post_edit_form';
import { updatePost, fetchPost } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = state => ({
  posts: state.entities.posts,
  currentUserId: state.session.id,
  allUsers: state.entities.users,

});

const mapDispatchToProps = dispatch => ({
  updatePost: post => dispatch(updatePost(post)),
  openModal: (type, paramId) => dispatch(openModal(type, paramId)),
  closeModal: () => dispatch(closeModal()),
  fetchPost: userId => dispatch(fetchPost(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostEditForm);