import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

export default class CommentCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      authorId: this.props.currentUserId,
      postId: this.props.postId,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state)
      .then(this.setState({body: ""}));
  }
  handleInput(e) {
    console.log(e.target.value)
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
    return(
      <div className="c-c">
        <form onSubmit={this.handleSubmit}>
          <TextareaAutosize className="c-ta" 
          placeholder="Write a comment..." 
          onChange={this.handleInput}
          value={this.state.body}
          onKeyDown={this.handleKeyDown}/>
          {/* <input type="submit" style={{ "display": "none" }}/> */}
        </form>

      </div>
    );
  }
}