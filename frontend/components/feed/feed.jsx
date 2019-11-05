import React from 'react';
import FeedPostFormContainer from './feed_post_form_container';
import FeedIndex from './feed_index';
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
        <div>
          <FeedPostFormContainer 
          createPost={this.props.createPost} 
          currentUserId={this.props.currentUserId}
          fetchFeedPosts={this.props.fetchFeedPosts}/>
        </div>
        <div></div>
        <div className="f-st">
          <div>
            <div className="f-pfp-h">
              <div className="f-php-h-t">Create Post</div>
            </div>
            <div className="f-pfp-b">

            </div>
          </div>
         
          <div>
            <FeedIndex posts={this.props.posts} />
          </div>
        </div>
      </div>
      
    );
  }
}