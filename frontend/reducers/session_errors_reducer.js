import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
} from '../actions/session_actions';
const _nullState = []
export default (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return _nullState;
    case RECEIVE_ERRORS:
      return action.errors || _nullState;
    default:
      return state;
  }
}