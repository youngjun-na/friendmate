import React from 'react';
import { Link } from 'react-router-dom';
import timeUtil from '../../util/time_util';
import CommentDropdown from './comment_dropdown';
import TextareaAutosize from 'react-autosize-textarea';

export default class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      show: false,
      edit: false,
      id: this.props.comment.id,
      body: this.props.comment.body,
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleEdit() {
    this.setState({
      edit: !this.state.edit,
    })
  }
  handleHover(e) {
    Array.from(e.target.children).forEach((el)=>{
      if (el.classList.contains("com-dd")) el.classList.toggle("invis")}
    )
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.updateComment(this.state)
      .then(this.setState({ edit: false }));
  }
  handleInput(e) {
    this.setState({
      body: e.target.value,
    })
  }
  handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      if (this.state.body) this.handleSubmit(e);
      else e.preventDefault();
    }
  }
  render() {
    const { comment, allUsers, updateComment, deleteComment } = this.props;
    let author = allUsers[comment.authorId];
    if (!author) return null;

    let nameLink = author.id ? (<Link className="ci-nl" to={`/profile/${author.id}`}>
      {author.firstName} {author.lastName}
    </Link>) : (<span></span>)

    let editForm = this.state.edit ? (
      <div className="comment-edit-cont">
        <form className="c-c comment-edit" onSubmit={this.handleSubmit}>
          <TextareaAutosize className="c-ta"
            onChange={this.handleInput}
            value={this.state.body}
            onKeyDown={this.handleKeyDown} />
        </form>
        <div className="comment-cancel" onClick={this.handleEdit}>Cancel</div>
      </div>
    ) : ( 
        <div className="comment-cont" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} >
          <div className="ci-i-b">
            {nameLink}
            {this.state.body} 
          </div>
          <CommentDropdown comment={comment} deleteComment={deleteComment} handleEdit={this.handleEdit}/>
        </div>
    )
    return(
      <div className="ci-i-c">
        {/* <div className="comment-cont" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} >
          <div className="ci-i-b">
            {nameLink}
            {this.state.body} 
          </div>
          <CommentDropdown comment={comment} deleteComment={deleteComment} updateComment={updateComment}/>
        </div> */}
        {editForm}
        <div className="comment-like-reply">
          <div className="pi-h-d">
            {timeUtil(comment.createdAt)}
          </div>
        </div>
      </div>
    );
  }
}