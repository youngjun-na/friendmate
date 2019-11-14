import React from 'react';
import { connect } from 'react-redux';
import Wall from './wall';
import { fetchWallPosts, updatePost, deletePost } from '../../actions/post_actions';
import { fetchAllUsers, fetchUser, updateUser } from '../../actions/user_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state = {}, ownProps) => {
  return {
  posts: Object.values(state.entities.posts).reverse() || [],
  wallUser: state.entities.users[ownProps.match.params.userId],
  currentUser: state.entities.users[state.session.id],
  allUsers: state.entities.users,
}};

const mapDispatchToProps = dispatch => ({
  fetchWallPosts: userId => dispatch(fetchWallPosts(userId)),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: post => dispatch(deletePost(post)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchUser: userId => dispatch(fetchUser(userId)),
  updateUser: user => dispatch(updateUser(user)),
  openModal: (type, paramsId) => dispatch(openModal(type, paramsId)),
  closeModal: () => dispatch(closeModal()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Wall);