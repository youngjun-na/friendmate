import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchAllComments } from '../../actions/comment_actions';

const mapStateToProps = (state={}) => ({
  comments: Object.values(state.entities.comments),
});

const mapDispatchToProps = dispatch => ({
  fetchAllComments: postId => dispatch(fetchAllComments(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);