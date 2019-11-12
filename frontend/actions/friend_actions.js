import * as FriendAPIUtil from '../util/friend_api_util';

import { receiveUsers } from './user_actions';



export const addFriend = (currentUserId, wallUserId) => dispatch => (
  FriendAPIUtil.addFriend(currentUserId, wallUserId)
    .then( users => {
      return dispatch(receiveUsers(users))})
);

export const deleteFriend = (currentUserId, wallUserId) => dispatch => {
  return FriendAPIUtil.findFriend(currentUserId, wallUserId)
    .then( friendId => {
      return FriendAPIUtil.deleteFriend(friendId)
      .then( users => {
        dispatch(receiveUsers(users))
      }
      )})
};

export const acceptFriend = (currentUserId, wallUserId) => dispatch => (
  FriendAPIUtil.findFriend(currentUserId, wallUserId)
    .then(friendId => FriendAPIUtil.acceptFriend(friendId)
      .then(users => dispatch(receiveUsers(users))))
);