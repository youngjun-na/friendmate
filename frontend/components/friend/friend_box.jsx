import React from 'react';
import { Link } from 'react-router-dom';
import friendIcon from '../../../app/assets/images/friends.png';
export default class FriendBox extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    if (Object.values(this.props.allUsers) < 2) return null;
    if (!this.props.wallUser.friendslist) return null;
    let friendsList = this.props.wallUser.friendslist
    let limitedList = friendsList.slice(0,9);
    return(
      <div className="friend-box-cont">
        <div className="friend-box-header">
          <img className="friend-icon" src={friendIcon} />
          <div className="friend-box-title">Friends</div> 
          <div className="friend-box-count">·</div>
          <div className="friend-box-count">{friendsList.length}</div>
        </div>
        <div className="friend-box-index-cont">
          {limitedList.map(friendId => {
            let friend = this.props.allUsers[friendId]
            if (!friend) return null;
            return (
              <div key={friend.id} className="friend-box-item">
                <Link className="friend-pic-name" to={`/profile/${friend.id}`}>
                  <div className="friend-pic-wrap">
                    <img className="profile-pic" src={friend.profPicUrl} />
                  </div>
                  <div className="friend-pic-name-div">
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