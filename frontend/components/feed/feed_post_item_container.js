import React from 'react';
import { connect } from 'react-redux';
import FeedPostItem from './feed_post_item';
import { updatePost, deletePost, receivePost } from '../../actions/post_actions';

const mapDispatchToProps = dispatch => ({
  updatePost: post => dispatch(updatePost(post)),
  deletePost: post => dispatch(deletePost(post)),
  receivePost: post => dispatch(receivePost(post)),
});

export default connect(null, mapDispatchToProps)(FeedPostItem);