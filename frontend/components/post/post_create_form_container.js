import React from 'react';
import { connect } from 'react-redux';
import PostCreateForm from './post_create_form';
import { createPost, fetchFeedPosts, fetchWallPosts  } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = state => ({
  currentUserId: state.session.id,
  allUsers: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  openModal: type => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
  fetchFeedPosts: userId => dispatch(fetchFeedPosts(userId)),
  fetchWallPosts: userId => dispatch(fetchWallPosts(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostCreateForm));