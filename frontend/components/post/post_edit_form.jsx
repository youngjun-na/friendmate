import React from 'react';


export default class PostEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.posts[this.props.postId];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  componentDidMount() {
    this.props.fetchPost(this.props.postId)
  }
  handleInput(e) {
    this.setState({
      body: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePost(this.state)
      // .then(() => this.props.fetchFeedPosts(this.state.hostId))
      .then(() => this.props.closeModal())
  }

  render() {
    return (
      <form className="f-php-c" onSubmit={this.handleSubmit}>
        <div className="f-php-h">
          <div className="f-php-h-t">Edit Post</div>
        </div>
        <div className="f-php-b">
          <div className="f-php-t">
            <textarea className="f-php-ta" autoFocus onChange={this.handleInput} value={this.state.body} />
          </div>
        </div>
        <div className="f-php-bot">
          <button className="but-p">Post</button>
        </div>
      </form>
    )
  }
}
