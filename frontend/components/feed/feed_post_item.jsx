import React from 'react';
import timeUtil from '../../util/time_util';
import PostDropdown from '../post/post_dropdown';
import { Link } from 'react-router-dom';
export default class FeedPostItem extends React.Component {
  constructor({props}) {
    super(props);
  }

  render() {
    let author = this.props.allUsers[this.props.post.authorId];
    let host = this.props.allUsers[this.props.post.hostId];
    const { post } = this.props;
    if (!host || !author) return null;
    let nameHeader = (post.authorId === post.hostId) ? (
      <div className="pi-ntn">
        <Link className="pi-h-n" to={`/profile/${author.id}`}>
          {author.firstName} {author.lastName}
        </Link>
      </div>) : (
      <div className="pi-ntn">
        <Link className="pi-h-n" to={`/profile/${author.id}`}>
          {author.firstName} {author.lastName}
        </Link>
        <div className="tri-b"></div>
        <Link className="pi-h-n" to={`/profile/${author.id}`}>
          {host.firstName} {host.lastName}
        </Link>
      </div>
      )
    return(
      <div className="pi-c">
        <div className="pi-h">
          <div className="pi-hnd">
            {nameHeader}
            {/* <div>
              <Link className="pi-h-n" to={`/profile/${author.id}`}>
                {author.firstName} {author.lastName}
              </Link>
            </div> */}
            <div className="pi-h-d">
              {timeUtil(post.createdAt)}
            </div>
          </div> 
          <PostDropdown post={post} deletePost={this.props.deletePost} openModal={this.props.openModal} />
        </div>
        <div className="pi-b">
          {post.body}
        </div>
        <div className="pi-lc">
          <span>Like</span>
          <span>Comment</span>
        </div>
        <div>
          <div className="c-c">
          </div>
        </div>
      </div>
    )
  }
}