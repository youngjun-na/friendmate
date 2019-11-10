import React from 'react';
import FeedIndex from './feed_index';
import PostCreateFormContainer from '../post/post_create_form_container';
export default class Feed extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchFeedPosts(this.props.currentUserId);
    this.props.fetchAllUsers();
  }
  render() {
    return(
      <div className="f-c">
        <div></div>
        <div className="f-st">
          <PostCreateFormContainer />
          <div>
            <FeedIndex posts={this.props.posts} />
          </div>
        </div>
      </div>
      
    );
  }
}