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
        <div className="friend-box-header">
          <img className="friend-icon" src={friendIcon} />
          <div className="friend-box-title">Friends</div> ·
        </div>
        <div className="friend-box-index-cont">
          {this.props.wallUser.friends.map(friendId => {
            let friend = this.props.allUsers[friendId]
            if (!friend) return null;
            return (
              <div key={friend.id} className="friend-box-item">
                <Link className="friend-pic-name" to={`/profile/${friend.id}`}>
                  <div className="friend-pic-wrap">
                    <img className="profile-pic" src={friend.profPicUrl} />
                  </div>
                  <div>
                    {friend.firstName} {friend.lastName}
                  </div>
                </Link>
              </div>);
            })}
        </div>
      </div>
    );
  }
}