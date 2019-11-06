import React from 'react';
import { connect } from 'react-redux';
import FeedPostForm from './feed_post_form';
import { createPost, fetchFeedPosts  } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = state => ({
  currentUserId: state.session.id,
  allUsers: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
  openModal: type => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
  fetchFeedPosts: userId => dispatch(fetchFeedPosts(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedPostForm);