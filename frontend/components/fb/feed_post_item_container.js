import React from 'react';
import { connect } from 'react-redux';
import FeedPostItem from './feed_post_item';

const mapDispatchToProps = dispatch => ({
  updatePost: post => dispatch(updatePost(post)),
  deletePost: post => dispatch(deletePost(post)),
});

export default connect(null, mapDispatchToProps)(FeedPostItem);