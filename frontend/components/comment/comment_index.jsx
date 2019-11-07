import React from 'react';
import CommentItemContainer from './comment_item_container';

export default class CommentIndex extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // this.props.fetchAllComments(this.props.postId);
  }
  render() {
    if (!this.props.comments) return null;
    return (
        <div className="c-i-c">
          <ul>
          {this.props.comments.map((comment) => {
            if (comment.postId === this.props.postId) {
              return <CommentItemContainer comment={comment} key={comment.id}/>
            }
          }
          )}
          </ul>
        </div>
      );
  }
}