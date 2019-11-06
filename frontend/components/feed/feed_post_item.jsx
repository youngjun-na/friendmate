import React from 'react';
import timeUtil from '../../util/time_util';
import grayOptions from '../../../app/assets/images/gray_options.png';
import blackOptions from '../../../app/assets/images/black_options.png';

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
    this.props.openModal("editPost", this.props.post.id);
  }

  render() {
    const { post } = this.props;
    return(
      <div className="pi-c">
        <div>
          <div className="g-o-b">
            {/* <Image
              style={{ width: 40, height: 40 }}
              source={yourImage}
              tintColor='red'
            />src={grayOptions}/> */}
            {/* <img src={grayOptions}/> */}
          </div>
          <button onClick={this.handleDelete}>Delete Post</button>
          <button onClick={this.handleEdit}>Edit Post</button>
          <div>
            {this.props.allUsers[this.props.post.authorId].firstName} {this.props.allUsers[post.authorId].lastName}
          </div>
          <div>
            {timeUtil(post.createdAt)}
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