import React from 'react';
import TextareaAutosize from 'react-autosize-textarea/lib';
import postpicture from '../../../app/assets/images/postpicture.png';

export default class PostEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.posts[this.props.postId];
    this.deletePic = this.deletePic.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchPost(this.props.postId)
  }
  deletePic() {
    this.setState({ photoFile: null, photoUrl: null });
  }
  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) fileReader.readAsDataURL(file);
  }
  handleInput(e) {
    this.setState({
      body: e.target.value,
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[body]', this.state.body);
    if (this.state.photoFile) formData.append('post[photo]', this.state.photoFile);
    formData.append('post[hostId]', this.state.hostId);
    formData.append('post[authorId]', this.state.authorId);
    formData.append('post[id]', this.state.id);
    this.props.updatePost(formData)
      // .then(() => this.props.fetchFeedPosts(this.state.hostId))
      .then(() => this.props.closeModal())
  }

  render() {
    let preview = this.state.photoUrl ? (
      <div className="photo-preview-cont">
        <div className="photo-preview-wrap">
          <span onClick={this.deletePic} className="photo-x-cancel">&times;</span>
          <img className="photo-preview" src={this.state.photoUrl} />
        </div>
      </div>) : null;
    return (
      <form className="post-form-cont" onSubmit={this.handleSubmit}>
        <div className="f-php-h">
          <div className="f-php-h-t">Edit Post</div>
        </div>
        <div className="f-php-b">
          <div className="f-php-t">
            <TextareaAutosize className="f-php-ta" autoFocus onChange={this.handleInput} value={this.state.body} />
            {preview}
          </div>
        </div>
        <label className="file-submit-overlay">
          <img className="file-submit-pic" src={postpicture} />
          <div>Photo/Video</div>
          <input type="file" className="file-submit-button" onChange={this.handleFile} />
        </label>
        <div className="f-php-bot">
          <button className="but-p">Post</button>
        </div>
      </form>
    )
  }
}
