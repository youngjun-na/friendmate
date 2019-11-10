import React from 'react';
import { Link } from 'react-router-dom';
import friendIcon from '../../../app/assets/images/friends.png';
export default class FriendBox extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    if (Object.values(this.props.allUsers) < 2) return null;
    if (!this.props.wallUser.friends) return null;
    // debugger;
    return(
      <div className="friend-box-cont">
        {this.props.wallUser.friends.map(friendId=> {
          let friend = this.props.allUsers[friendId]
          if (!friend) return null;
          return (
          <div className="friend-box-item">
            <div className="friend-box-header">
              <img className="friend-icon" src={friendIcon} />
              <div className="friend-box-title">Friends</div> ·
            </div>
            <div className="friend-pic-wrap">
              <img className="profile-pic" src={friend.profPicUrl}/>
            </div>
              <Link key={friend.id} className="friend-pic-name" to={`/profile/${friend.id}`}>
                {friend.firstName} {friend.lastName}
              </Link>
          </div>)
          ;
        })}
      </div>
    );
  }
}