import React from 'react';


export default class PostCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      hostId: this.props.hostId ? this.props.hostId : this.props.currentUserId,
      authorId: this.props.currentUserId,
      photoFile: null,
      photoUrl: null,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      body: e.target.value,
    })
  }
  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) fileReader.readAsDataURL(file);
  }
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[body]', this.state.body)
    formData.append('post[photo]', this.state.photoFile)
    formData.append('post[hostId]', this.state.hostId)
    formData.append('post[authorId]', this.state.authorId)
    this.props.createPost(formData)
      .then(() => this.props.closeModal(), this.setState({ body: "" }))
      .then(() =>  this.props.hostId ? this.props.fetchWallPosts(this.props.hostId) :
      this.props.fetchFeedPosts(this.props.currentUserId))
      
     
  }

  render() {
    let preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : null;
    return(
        <form className="f-php-c" onSubmit={this.handleSubmit}>
        <div className="f-php-h">
          <div className="f-php-h-t">Create Post</div>
        </div>
        <div className="f-php-b">
          <div className="f-php-t">
            <textarea className="f-php-ta" autoFocus placeholder={`What's on your mind, ${this.props.allUsers[this.props.currentUserId].firstName}?`} onChange={this.handleInput} value={this.state.body} />   
          </div>
          <label className="file-submit-overlay"> Photo/Video
          <input type="file" className="file-submit-button" onChange={this.handleFile} />
          </label>
        </div>
        {/* <div className="post-create-b">
          
          {preview}
        </div> */}
        <div className="f-php-bot">
            <button className="but-p">Post</button>
        </div>
        </form>
    )
  }
}
