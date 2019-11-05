import React from 'react';

export default class FeedPostItem extends React.Component {
  constructor({props}) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post);
  }
  handleEdit(e) {
    e.preventDefault();
    this.props.editPost(this.props.post);
  }

  render() {
    const { post } = this.props;
    return(
      <div className="pi-c">
        <div>
          <button onClick={this.handleDelete}>Delete Post</button>
          <button onClick={this.handleEdit}>Edit Post</button>
          <div>
            {post.updated_at}
          </div>
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