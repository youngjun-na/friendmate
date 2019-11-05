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
    this.props.createPost(this.state)
      .then(() => this.props.fetchFeedPosts(this.props.currentUserId))
      .then(()=> this.setState({body: ""}));
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>Create Post</div>
          <div>
            <textarea placeholder="What's on your mind?" onChange={this.handleInput} value={this.state.body}/>
          </div>
          <button>Post</button>
        </form>

      </div>
    )
  }
}
export default FeedPostForm;