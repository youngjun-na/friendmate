import React from 'react';
import { connect } from 'react-redux';
import FeedPostForm from './feed_post_form';
import { createPost } from '../../actions/post_actions';

// const mapStateToProps = state => ({
//   userId: state.session.id,
// });

const mapDispatchToProps = dispatch => ({
  createPost: post => dispatch(createPost(post)),
});

export default connect(null, mapDispatchToProps)(FeedPostForm);