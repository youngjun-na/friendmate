import React from 'react';
import timeUtil from '../../util/time_util';
import PostDropdown from './post_dropdown';
import { Link } from 'react-router-dom';
import CommentCreateForm from '../comment/comment_create_form';
import CommentIndexContainer from '../comment/comment_index_container';
export default class PostItem extends React.Component {
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
        <div className="post-prof-image">
          <img className="profile-pic" src={host.profPicUrl} />
        </div>
        <Link className="pi-h-nl" to={`/profile/${author.id}`}>
          {author.firstName} {author.lastName}
        </Link>
      </div>) : (
      <div className="pi-ntn">
        <div className="post-prof-image">
          <img className="profile-pic" src={author.profPicUrl} />
        </div>
        <Link className="pi-h-nl" to={`/profile/${author.id}`}>
          {author.firstName} {author.lastName}
        </Link>
        <div className="tri-b"></div>
        <Link className="pi-h-nl" to={`/profile/${host.id}`}>
          {host.firstName} {host.lastName}
        </Link>
      </div>
      )
    let photoDiv = post.photoUrl ? (
      <div>
        <img src={post.photoUrl} />
      </div>
    ) : (
      null
    );
    return(
      <div className="pi-c">
        <div className="pi-h">
          <div className="pi-hnd">
            {nameHeader}
            <div className="pi-h-d">
              {timeUtil(post.createdAt)}
            </div>
          </div> 
          <PostDropdown post={post} deletePost={this.props.deletePost} openModal={this.props.openModal} />
        </div>
        <div className="pi-b">
          {photoDiv}
          {post.body}
        </div>
        <div className="pi-lc">
          <span>Like</span>
          <span>Comment</span>
        </div>
        <div>
          <CommentIndexContainer postId={post.id}/>
        </div>
        <div>
            <CommentCreateForm postId={post.id} currentUserId={this.props.currentUserId} createComment={this.props.createComment} />
        </div>
      </div>
    )
  }
}