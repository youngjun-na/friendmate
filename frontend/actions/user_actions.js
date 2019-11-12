import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})
export const fetchAllUsers = () => dispatch => (
  UserAPIUtil.fetchAllUsers()
    .then(users=> dispatch(receiveUsers(users)))
);

export const fetchUser = userId => dispatch => (
  UserAPIUtil.fetchUser(userId)
    .then(user=> dispatch(receiveUser(user)))
);