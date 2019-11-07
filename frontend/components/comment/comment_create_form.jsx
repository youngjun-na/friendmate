import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

export default class CommentCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: 1,
      post_id: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    e.preventDefault();
    
  }

  render() {
    return(
      <div className="c-c">
        <form onSubmit={this.handleSubmit}>
          <TextareaAutosize className="c-ta" placeholder="Write a comment..." />
        </form>

      </div>
    );
  }
}