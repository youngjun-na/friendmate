import React from 'react';
import { connect } from 'react-redux';
import  Feed from './feed';
import { fetchFeedPosts, updatePost, deletePost } from '../../actions/post_actions';
const mapStateToProps = (state={}) => ({
  posts: Object.values(state.entities.posts),
  currentUserId: state.session.id,
});

const mapDispatchToProps = dispatch => ({
  fetchFeedPosts: userId => dispatch(fetchFeedPosts(userId)),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: post => dispatch(deletePost(post)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Feed);