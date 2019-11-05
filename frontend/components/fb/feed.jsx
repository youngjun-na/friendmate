import React from 'react';
import FeedPostFormContainer from './feed_post_form_container';
import FeedIndex from './feed_index';
export default class Feed extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchFeedPosts(this.props.currentUserId);
  }
  render() {
    return(
      <div>
        <div>
          <FeedPostFormContainer createPost={this.props.createPost} currentUserId={this.props.currentUserId}/>
        </div>
        <div>
          <FeedIndex posts={this.props.posts}/>
        </div>
      </div>
      
    );
  }
}