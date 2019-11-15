import {
  RECEIVE_ALL_POSTS,
  RECEIVE_MORE_POSTS,
  RECEIVE_POST_ERRORS,
} from '../actions/post_actions';
const _nullState = []
export default (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
    case RECEIVE_MORE_POSTS:
      return _nullState;
    case RECEIVE_POST_ERRORS:
      return action.errors || _nullState;
    default:
      return state;
  }
}