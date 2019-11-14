import React from 'react';
import WallIndex from'./wall_index';
import PostCreateFormContainer from '../post/post_create_form_container';
import FriendBox from '../friend/friend_box';
import FriendButtonContainer from '../friend/friend_button_container';
import covercamera from '../../../app/assets/images/covercamera.png';
export default class Wall extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      id: this.props.wallUser ? this.props.wallUser : null,
      coverPicUrl: this.props.wallUser ? this.props.wallUser.coverPicUrl : "",
      profPicUrl: this.props.wallUser ? this.props.wallUser.profPicUrl : "",
      coverUpdate: false,
      profileUpdate: false,
    }
    this.handleCover = this.handleCover.bind(this);
    this.handleProf = this.handleProf.bind(this);
    this.handleCoverPic = this.handleCoverPic.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllUsers()
    .then(() => this.props.fetchWallPosts(this.props.wallUser.id))
    .then(() => this.props.fetchUser(this.props.wallUser.id));
  }
  componentDidUpdate(prevProps) {
    if (prevProps.wallUser && prevProps.wallUser.id !== parseInt(this.props.match.params.userId)) {
      this.props.fetchWallPosts(parseInt(this.props.match.params.userId));
    }
  }
  handleCoverPic(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ coverFile: file, coverPicUrl: fileReader.result });
    };
    if (file) fileReader.readAsDataURL(file);
  }
  handleCover() {
    this.setState({coverUpdate: !this.state.coverUpdate})
  }
  handleProf() {
    this.setState({profileUpdate: !this.state.profileUpdate})
  }
  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[coverPic]', this.state.coverFile);
    formData.append('user[id]', this.state.id);
    this.props.updateUser(formData)
  }
  render() {
    const { currentUser, wallUser } = this.props;
    if (!wallUser) return null;
    let coverPicStyle =  wallUser.coverPicUrl ? 
    {backgroundImage: 'url(' + this.props.wallUser.coverPicUrl + ')'} : {background: 'linear-gradient(white, #dddfe2, rgba(0, 0, 0, .53))'}
    return(
      <div className= "prof-cont">
        <div className= "wall-header">
          <div className="wall-cover-p" style={coverPicStyle}>
            {currentUser.id === wallUser.id ? (
            <form onSubmit={this.handleSubmit}>
              <label className="wall-cover-p-update"
                onMouseEnter={this.handleCover}
                onMouseLeave={this.handleCover}>
                <img src={covercamera} />
                {this.state.coverUpdate ? (
                  <div className="wall-cover-p-text">
                    Update Cover Photo
                  </div>) : null}
                <input type="file" className="file-submit-button" onChange={this.handleCoverPic} />
              </label>
                <button className="prof-pic-submit">
                  Save Changes
                </button>
            </form>
            ) : null}
            <div className="profile-pic-cont">
              <div className="profile-circle" 
                onMouseEnter={this.handleProf}
                onMouseLeave={this.handleProf}>
                <img className="profile-pic" src={wallUser.profPicUrl} />
                {(this.state.profileUpdate && currentUser.id === wallUser.id) ? (
                  <div className="profile-p-update" onClick={() => this.props.openModal("profileEdit", currentUser.id)}>
                  <img className="prof-p-camera" src={covercamera} />
                  <div className="prof-p-text"> Update </div>
                </div>) : null}
              </div>
            </div>
            <div className="wall-name">
              {wallUser.firstName}  {wallUser.lastName} 
            </div>
            <FriendButtonContainer currentUser={currentUser} wallUser={wallUser}/>
          </div>
          <div className= "wall-header-bar">

          </div>
        </div>
        <div className="wall-main">
          <div className="wall-sidebar">
            <FriendBox wallUser={wallUser} allUsers={this.props.allUsers}/>
          </div>
          <div className="wall-cont">
            <div className="w-st">
              <PostCreateFormContainer wallUser={wallUser}/>
              <div>
              <WallIndex posts={this.props.posts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}