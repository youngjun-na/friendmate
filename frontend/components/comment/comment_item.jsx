import React from 'react';
import { Link } from 'react-router-dom';
export default class CommentItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { comment, allUsers, updateComment, deleteComment } = this.props;
    let author = allUsers[comment.authorId];
    if (!author) return null;
    
    let nameLink = author.id ? (<Link className="ci-nl" to={`/profile/${author.id}`}>
      {author.firstName} {author.lastName}
    </Link>) : (<span></span>)
    return(
      <div className="ci-i-c">
        <div className="ci-i-b">
          {nameLink}
          {comment.body} 
        </div>
      </div>
    );
  }
}