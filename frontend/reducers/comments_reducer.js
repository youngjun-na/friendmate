import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_ALL_POSTS, RECEIVE_MORE_POSTS } from '../actions/post_actions';
export default (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.payload.comments || state;
    case RECEIVE_MORE_POSTS:
      return Object.assign({}, newState, action.payload.comments) || state;
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;
    case REMOVE_COMMENT:
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
  }
}