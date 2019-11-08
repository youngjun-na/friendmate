import React from 'react';
import { Link } from 'react-router-dom';
import CommentDropdown from './comment_dropdown';
export default class CommentItem extends React.Component {
  constructor(props) {
    super(props);
  }
  handleHover(e) {
    Array.from(e.target.children).forEach((el)=>{
      if (el.classList.contains("com-dd")) el.classList.toggle("invis")}
    )
  }
  render() {
    const { comment, allUsers, updateComment, deleteComment } = this.props;
    let author = allUsers[comment.authorId];
    if (!author) return null;

    let nameLink = author.id ? (<Link className="ci-nl" to={`/profile/${author.id}`}>
      {author.firstName} {author.lastName}
    </Link>) : (<span></span>)
    return(
      <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className="ci-i-c">
        <div className="ci-i-b">
          {nameLink}
          {comment.body} 
        </div>
        <CommentDropdown comment={this.props.comment} deleteComment={this.props.deleteComment} updateComment={this.props.updateComment}/>
      </div>
    );
  }
}