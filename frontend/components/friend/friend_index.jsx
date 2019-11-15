import React from 'react';
import { Link } from 'react-router-dom';
import check from '../../../app/assets/images/check.png'
import FriendButtonContainer from './friend_button_container';
import bigfriend from '../../../app/assets/images/bigfriend.png'
export default class FriendIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if (Object.values(this.props.allUsers) < 2) return null;
    if (!this.props.wallUser) return null;
    if (!this.props.wallUser.friendslist) return null;
    let friendsList = this.props.wallUser.friendslist
    return(
      <div className="friend-cont">
        <div className="friend-index-header">
          
          <div className="friend-index-title">
            <img src={bigfriend} />
            <div className="friend-itt">Friends</div>
          </div>
        </div>
        <div className="friend-index-cont">
          {friendsList.map(friendId => {
            let friend = this.props.allUsers[friendId]
            if (!friend) return null;
            return (
              <div key={friend.id} className="friend-index-item">
                <Link className="friend-index-name" to={`/profile/${friend.id}`}>
                  <div className="friend-index-wrap">
                    <img className="profile-pic" src={friend.profPicUrl} />
                  </div>
                </Link>
                <div className="friend-index-nf">
                  <Link className="friend-index-name" to={`/profile/${friend.id}`}>
                    <div className="friend-index-name-div">
                      {friend.firstName} {friend.lastName}
                    </div>
                  </Link>
                  <div className="friend-index-count">
                    {friend.friendslist.length} friends
                  </div>
                </div>
                <div className="friend-button-fake" onMouseEnter={this.showDropdown} >
                  <div className="friend-text">
                    {/* {this.state.dropDown ? (
                        <div className="friend-dropdown-cont">
                          <div className="d-tri-w-f"></div>
                          <ul className="friend-dropdown">
                            <li className="friend-item">Unfriend</li>
                          </ul>
                        </div>) : null} */}
                    <img src={check} />
                    Friends
                    </div>
                </div>
              </div>);
          })}
        </div>
      </div>
    );
  }
}