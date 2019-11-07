import React from 'react';
import { connect } from 'react-redux';
import  Feed from './feed';
import { fetchFeedPosts, updatePost, deletePost } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state={}) => ({
  posts: Object.values(state.entities.posts).reverse(),
  currentUserId: state.session.id,
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  fetchFeedPosts: userId => dispatch(fetchFeedPosts(userId)),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: post => dispatch(deletePost(post)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  openModal: (type, paramsId) => dispatch(openModal(type, paramsId)),
  closeModal: () => dispatch(closeModal()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Feed);