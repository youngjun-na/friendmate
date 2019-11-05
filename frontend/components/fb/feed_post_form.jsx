import React from 'react';

class FeedPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      host_id: this.props.currentUserId,
      author_id: this.props.currentUserId,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      body: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    this.props.createPost(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>Create Post</div>
          <div>
            <textarea placeholder="What's on your mind?" onChange={this.handleInput} />
          </div>
          <button>Post</button>
        </form>

      </div>
    )
  }
}
export default FeedPostForm;