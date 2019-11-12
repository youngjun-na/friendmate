import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_USERS:
      return Object.assign({}, newState, action.users);
    default:
      return state;
  }
}