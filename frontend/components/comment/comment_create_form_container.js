import React from 'react';
import { connect } from 'react-redux';
import CommentCreateForm from './comment_create_form';
import { createPost, fetchFeedPosts, fetchWallPosts } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

// const mapStateToProps = (state={}) => ({
//   currentUserId: state.entities.id,

// });

export default connect(null, null)(CommentCreateForm)