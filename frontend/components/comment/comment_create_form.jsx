import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import camera from '../../../app/assets/images/camera.png';
export default class CommentCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      authorId: this.props.currentUserId,
      postId: this.props.postId,
      photoFile: null,
      photoUrl: null,
    };
    this.deletePic = this.deletePic.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  deletePic() {
    this.setState({ photoFile: null, photoUrl: null });
  }
  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) fileReader.readAsDataURL(file);
  }
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('comment[body]', this.state.body);
    if (this.state.photoFile) formData.append('comment[photo]', this.state.photoFile);
    formData.append('comment[authorId]', this.state.authorId);
    formData.append('comment[postId]', this.state.postId);
    this.props.createComment(formData)
      .then(this.setState({body: "", photoFile: null, photoUrl: null}));
  }
  handleInput(e) {
    this.setState({
      body: e.target.value,
    })
  }
  handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      if (this.state.body || this.state.photoUrl) this.handleSubmit(e);
      else e.preventDefault();
    }
  }
  render() {
    let preview = this.state.photoUrl ? (
      <div className="comment-photo-preview-cont">
        <div className="comment-photo-preview-wrap">
          <span onClick={this.deletePic} className="comment-photo-x-cancel">&times;</span>
          <img className="comment-photo-preview" src={this.state.photoUrl} />
        </div>
      </div>) : null;
    return(
      <div>
        <div className="c-c">
          <form className="comment-form" onSubmit={this.handleSubmit}>
            <TextareaAutosize className="c-ta"
              id={`comment-focus-${this.state.postId}`}
              placeholder="Write a comment..."
              onChange={this.handleInput}
              value={this.state.body}
              onKeyDown={this.handleKeyDown} />
          </form>
          <label className="comment-file-submit-overlay">
            <div className="comment-button">
              <img src={camera} />
            </div>
            <input type="file" className="file-submit-button" onChange={this.handleFile} />
          </label>
        </div>
        {preview}
      </div>
    );
  }
}