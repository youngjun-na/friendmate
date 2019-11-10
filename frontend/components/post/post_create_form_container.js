import React from 'react';
import { connect } from 'react-redux';
import PostCreateForm from './post_create_form';
import { createPost, fetchFeedPosts, fetchWallPosts  } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  return {
  currentUser: state.entities.users[state.session.id],
  host: state.entities.users[ownProps.match.params.userId],
  allUsers: state.entities.users,
  modal: state.ui.modal,
}};

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  openModal: type => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
  fetchFeedPosts: userId => dispatch(fetchFeedPosts(userId)),
  fetchWallPosts: userId => dispatch(fetchWallPosts(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostCreateForm));