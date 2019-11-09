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
          {/* <div className="f-php-c">
            <div className="f-php-h">
              <div className="f-php-h-t">Create Post</div>
            </div>
            <div className="f-php-b">
              <div className="f-php-t" onClick={() => this.props.openModal("postCreate")}>
                <div className="f-php-tx noselect">
                  What's on your mind, {this.props.currentUser.firstName}?
                </div>
              </div>
            </div>
          </div> */}
          <PostCreateFormContainer />
          <div>
            <FeedIndex posts={this.props.posts} />
          </div>
        </div>
      </div>
      
    );
  }
}