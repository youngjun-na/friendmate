import React from 'react';
import { connect } from 'react-redux';
import Wall from './wall';
import { fetchWallPosts, updatePost, deletePost } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/user_actions';
const mapStateToProps = (state = {}, ownProps) => ({
  posts: Object.values(state.entities.posts).reverse(),
  userId: ownProps.match.params.userId,
});

const mapDispatchToProps = dispatch => ({
  fetchWallPosts: userId => dispatch(fetchWallPosts(userId)),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: post => dispatch(deletePost(post)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Wall);