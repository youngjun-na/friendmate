import React from 'react';
import { connect } from 'react-redux';
import FriendButton from './friend_button';
import { addFriend, deleteFriend, acceptFriend } from '../../actions/friend_actions';


const mapDispatchToProps = dispatch => ({
  addFriend: (currentUserId, wallUserId) => dispatch(addFriend(currentUserId, wallUserId)),
  deleteFriend: (currentUserId, wallUserId) => dispatch(deleteFriend(currentUserId, wallUserId)),
  acceptFriend: (currentUserId, wallUserId) => dispatch(acceptFriend(currentUserId, wallUserId)),
});

export default connect(null, mapDispatchToProps)(FriendButton);