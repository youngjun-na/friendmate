import React from 'react';

export default class FeedPostItem extends React.Component {
  constructor(props) {
    super(props);
  }
  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost(post)
  }
  handleEdit(e) {
    e.preventDefault();
    this.props.editPost(post)
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
        <div>
          {post.body}
        </div>
      </div>
    )
  }
}