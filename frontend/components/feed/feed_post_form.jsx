import React from 'react';


class FeedPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      hostId: this.props.hostId ? this.props.hostId : this.props.currentUserId,
      authorId: this.props.currentUserId,
    };
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
      .then(() =>  this.props.hostId ? this.props.fetchWallPosts(this.props.hostId) :
      this.props.fetchFeedPosts(this.props.currentUserId))
      .then(()=> this.props.closeModal(), this.setState({body: ""}))
            
      
  }

  render() {
    return(
        <form className="f-php-c" onSubmit={this.handleSubmit}>
        <div className="f-php-h">
          <div className="f-php-h-t">Create Post</div>
        </div>
        <div className="f-php-b">
          <div className="f-php-t">
            <textarea className="f-php-ta" autoFocus placeholder={`What's on your mind, ${this.props.allUsers[this.props.currentUserId].firstName}?`} onChange={this.handleInput} value={this.state.body} />   
          </div>
        </div>
        <div className="f-php-bot">
            <button className="but-p">Post</button>
        </div>
        </form>
    )
  }
}
export default FeedPostForm;