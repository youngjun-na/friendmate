import React from 'react';
import { connect } from 'react-redux';
import ProfilePicEdit from './profile_pic_edit';
import { closeModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/user_actions';
const mapStateToProps = (state={}) => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  updateUser: formData => dispatch(updateUser(formData)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicEdit);