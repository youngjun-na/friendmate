import React from 'react';
import FeedIndex from './feed_index';
import PostCreateFormContainer from '../post/post_create_form_container';
import { Link } from 'react-router-dom';
import newsfeed from '../../../app/assets/images/feed.png';
import github from '../../../app/assets/images/github.png';
import linkedin from '../../../app/assets/images/linkedin.png';

export default class Feed extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchFeedPosts(this.props.currentUserId);
    this.props.fetchAllUsers();
  }
  render() {
    const {currentUser} = this.props;
    return(
      <div className="f-c">
        <div className="sidebar-cont-c">
          <div className="feed-sidebar-cont">
            <div className="sidebar-profile">
              <div className="sidebar-prof-image">
                <img className="profile-pic" src={currentUser.profPicUrl} />
              </div>
              <Link className="sidebar-name-link" to={`/profile/${currentUser.id}`}>
                {currentUser.firstName} {currentUser.lastName}
              </Link>
            </div>
            <div className="sidebar-item-selected" >
              <img className="sidebar-pic" src={newsfeed} />
              <div className="sidebar-item-link">News Feed</div>
            </div>
            <a className="sidebar-item" href="https://github.com/youngjun-na">
              <img className="sidebar-pic" src={github} />
              <div className="sidebar-item-link" >Github</div>
            </a>
            <div className="sidebar-item">
              <img className="sidebar-pic" src={linkedin} />
              <div className="sidebar-item-link">Linkedin</div>
            </div>
          </div>
        </div>
        <div className="f-st">
          <PostCreateFormContainer />
          <FeedIndex 
          posts={this.props.posts} 
          fetchFeedPosts= {this.props.fetchFeedPosts}
          fetchMoreFeedPosts={this.props.fetchMoreFeedPosts}
          currentUser={currentUser}
          errors={this.props.errors}/>
        </div>
      </div>
      
    );
  }
}