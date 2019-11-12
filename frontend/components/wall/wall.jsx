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
      update: "",
    }
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

  render() {
    const { currentUser, wallUser } = this.props;
    if (!wallUser) return null;
    let coverPicStyle =  wallUser.coverPicUrl ? 
    {backgroundImage: 'url(' + wallUser.coverPicUrl + ')'} : {background: 'linear-gradient(white, #dddfe2, rgba(0, 0, 0, .53))'}
    return(
      <div className= "prof-cont">
        <div className= "wall-header">
          <div className="wall-cover-p" style={coverPicStyle}>
            {/* <img className="wall-cover-pic" src={wallUser.coverPicUrl} /> */}
            <div>
              <img src={covercamera}/>
              <div>
                Update Cover Photo
              </div>
            </div>
            <div className="profile-pic-cont">
              <div className="profile-circle">
                <img className="profile-pic" src={wallUser.profPicUrl} />
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
            <div className="f-st">
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