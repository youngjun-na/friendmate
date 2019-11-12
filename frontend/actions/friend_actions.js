import * as FriendAPIUtil from '../util/friend_api_util';

import { receiveUser } from './user_actions';



export const addFriend = (currentUserId, wallUserId) => dispatch => (
  FriendAPIUtil.addFriend(currentUserId, wallUserId)
    .then( user => {
      debugger;
      return dispatch(receiveUser(user))})
);

export const deleteFriend = (currentUserId, wallUserId) => dispatch => {
  return FriendAPIUtil.findFriend(currentUserId, wallUserId)
    .then( friendId => {
      return FriendAPIUtil.deleteFriend(friendId)
      .then( user => {
        debugger;
        dispatch(receiveUser(user))
      }
      )})
};

export const acceptFriend = (currentUserId, wallUserId) => dispatch => (
  FriendAPIUtil.findFriend(currentUserId, wallUserId)
    .then(friendId => FriendAPIUtil.acceptFriend(friendId)
      .then(user => dispatch(receiveUser(user))))
);