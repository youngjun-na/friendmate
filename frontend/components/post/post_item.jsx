import React from 'react';
import timeUtil from '../../util/time_util';
import PostDropdown from './post_dropdown';
import { Link } from 'react-router-dom';
import CommentCreateForm from '../comment/comment_create_form';
import CommentIndexContainer from '../comment/comment_index_container';
import PostLikers from './post_likers';

export default class PostItem extends React.Component {
  constructor({props}) {
    super(props);
    this.handleComment = this.handleComment.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }
  handleComment() {
    document.getElementById(`comment-focus-${this.props.post.id}`).focus();
  }
  handleLike() {
    let likeId;
    this.props.post.likes.forEach((like)=>{
      if (like.author_id === this.props.currentUserId) likeId = like.id
    });
    if (likeId) {
      this.props.deletePostLike(likeId);
    }
    else {
      this.props.createPostLike(this.props.post.id);
    }
  }
  render() {
    let currentUser = this.props.allUsers[this.props.currentUserId]
    let author = this.props.allUsers[this.props.post.authorId];
    let host = this.props.allUsers[this.props.post.hostId];
    const { post } = this.props;
    let postLikeButton = "post-like-button";
    if (post.likes.map((like)=> like.author_id).includes(currentUser.id)) {
      postLikeButton += "-liked"
    };
    let likers;
    if (this.props.allUsers) {
      likers = post.likes.map((like)=> {
        return this.props.allUsers[like.author_id];
      })
    }

    if (!host || !author) return null;
    let nameHeader = (post.authorId === post.hostId) ? (
      <div className="post-header-name">
        <Link className="pi-h-nl" to={`/profile/${host.id}`}>
          {host.firstName} {host.lastName}
        </Link>
      </div>) : (
      <div className="post-header-name">
        <Link className="pi-h-nl" to={`/profile/${author.id}`}>
          {author.firstName} {author.lastName}
        </Link>
        <div className="tri-b"></div>
        <Link className="pi-h-nl" to={`/profile/${host.id}`}>
          {host.firstName} {host.lastName}
        </Link>
      </div>)
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
            <div className="pi-ntn">
              <div className="post-prof-image">
                <img className="profile-pic" src={author.profPicUrl} />
              </div>
              <div className="post-header-name-date">
                {nameHeader}
                <div className="pi-h-d">
                  {timeUtil(post.createdAt)}
                </div>
              </div>
            </div>
          </div> 
          <PostDropdown post={post} deletePost={this.props.deletePost} openModal={this.props.openModal} />
        </div>
        <div className="pi-b">
          {post.body}
          {photoDiv}
          <PostLikers likers={likers} currentUserId={this.props.currentUserId}/>
        </div>
        <div className="pi-lc">
          <div className={postLikeButton} onClick={this.handleLike}>Like</div>
          <div className="post-comment-button" onClick={this.handleComment}>Comment</div>
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