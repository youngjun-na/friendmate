import React from 'react';
import { connect } from 'react-redux';
import Wall from './wall';
import { fetchFeedPosts, updatePost, deletePost } from '../../actions/post_actions';
const mapStateToProps = (state = {}, ownProps) => ({
  posts: Object.values(state.entities.posts).reverse(),
  userId: ownProps,
});

const mapDispatchToProps = dispatch => ({
  fetchFeedPosts: userId => dispatch(fetchFeedPosts(userId)),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: post => dispatch(deletePost(post)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Wall);