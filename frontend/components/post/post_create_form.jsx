import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

export default class PostCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      hostId: parseInt(this.props.match.params.userId) || this.props.currentUserId,
      authorId: this.props.currentUserId,
      photoFile: null,
      photoUrl: null,
    };
    this.deletePic= this.deletePic.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  deletePic() {
    this.setState({photoFile: null, photoUrl: null});
  }
  handleClick(e) {
    e.stopPropagation();
    this.props.openModal("postCreate");
    this.setState({focus: true});
  }
  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
  
    if (file) fileReader.readAsDataURL(file);
  }
  handleInput(e) {
    this.setState({body: e.target.value})
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[body]', this.state.body);
    if (this.state.photoFile) formData.append('post[photo]', this.state.photoFile);
    formData.append('post[hostId]', this.state.hostId);
    formData.append('post[authorId]', this.state.authorId);
    this.props.createPost(formData)
      .then(() => this.props.closeModal(), this.setState({ body: "", photoFile: null, photoUrl: null }))
      .then(() =>  this.state.hostId ? this.props.fetchWallPosts(this.state.hostId) :
      this.props.fetchFeedPosts(this.props.currentUserId))
      
     
  }

  render() {
    let buttonOp = (!this.state.body && !this.state.postFile) ? "but-p opacity" : "but-p";

    let preview = this.state.photoUrl ? (
    <div className="photo-preview-cont">
      <div className="photo-preview-wrap">
        <span onClick={this.deletePic} className="photo-x-cancel">&times;</span>
        <img className="photo-preview" src={this.state.photoUrl} />
      </div>
    </div>) : null;

    let bottomPost = (this.props.modal && this.props.modal[0] === "postCreate") ? (
    <div>
      <div className="f-php-bot">
          <button className={buttonOp} disabled={(!this.state.body && !this.state.photoFile)} >Post</button>
      </div>
    </div>) : null;

    let textareaStyle = {
      "fontSize": (this.props.modal && this.props.modal[0] === "postCreate") && (this.state.body.length < 85) ? "22px" : "16px",
    };

    let placeholderText = (this.state.hostId === this.props.currentUserId) ? 
    `What's on your mind, ${this.props.allUsers[this.props.currentUserId].firstName}?` : 
    `Write something to ${this.props.allUsers[this.state.hostId].firstName}...`;
   
    return(
      <form className="post-form-cont" onSubmit={this.handleSubmit} onClick={this.handleClick}>
        <div className="f-php-h">
          <div className="f-php-h-t">Create Post</div>
        </div>
        <div className="f-php-b">
          <div className="f-php-t">
            <TextareaAutosize className="f-php-ta" 
            placeholder={placeholderText} 
            onChange={this.handleInput} 
            value={this.state.body} 
            style={textareaStyle}/>  
            {preview}
          </div>
          <label className="file-submit-overlay"> Photo/Video
              <input type="file" className="file-submit-button" onChange={this.handleFile} />
          </label>
          {bottomPost}
        </div>
       
        </form>
    )
  }
}
