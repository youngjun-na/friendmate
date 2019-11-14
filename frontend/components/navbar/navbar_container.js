import React from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { deleteFriend, acceptFriend } from '../../actions/friend_actions';

const mapStateToProps = (state={}) => ({
  currentUser: state.entities.users[state.session.id],
  allUsers: state.entities.users,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  deleteFriend: (currentUserId, wallUserId) => dispatch(deleteFriend(currentUserId, wallUserId)),
  acceptFriend: (currentUserId, wallUserId) => dispatch(acceptFriend(currentUserId, wallUserId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
