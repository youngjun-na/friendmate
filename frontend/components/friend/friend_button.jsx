import React from 'react';
import check from '../../../app/assets/images/check.png'
import friendadd from '../../../app/assets/images/friendadd.png'
import friendremove from '../../../app/assets/images/friendremove.png'
export default class FriendButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false,
    }
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  toggleDropdown() {
    this.setState({dropDown: !this.state.dropDown});
  }
  render() {
    // if (!currentUser || !wallUser ) return null;

    const { wallUser, currentUser } = this.props;
    let buttonContent;
    if (currentUser.friends.includes(wallUser.id)) {
      buttonContent = 
      <div className="friend-text">
        {this.state.dropDown ? (
          <div className="friend-dropdown-cont">
            <ul className="friend-dropdown">
              <li className="friend-item">Remove Friend</li>
            </ul>
          </div>) : null}
        <img src={check} />
        Friend
      </div>
    } 
    else if (currentUser.pending.includes(wallUser.id)) {
      buttonContent = 
      <div className="friend-text">
        {this.state.dropDown ? (
          <div className="friend-dropdown-cont">
            <ul className="friend-dropdown">
              <li className="friend-item">Cancel Request</li>
            </ul>
          </div>) : null}
        <img src={friendremove} />
        Friend Request Sent
      </div>
    }
    else if (wallUser.pending.includes(currentUser.id)) {
      buttonContent = 
      <div className="friend-text">
        {this.state.dropDown ? (
          <div className="friend-dropdown-cont">
            <ul className="friend-dropdown">
              <li className="friend-item">Accept Request</li>
              <li className="friend-item">Remove Request</li>
            </ul>
          </div>) : null}
        <img src={friendadd} />
        Respond to Friend Request
      </div>
    }
    else {
      buttonContent = 
      <div className="friend-text">
        <img src={friendadd} />
        Add Friend
      </div>
    }
     
    return(
      <div className="friend-button-wrap" onMouseOver={this.toggleDropdown} onMouseOut={this.toggleDropdown}>
        <div className="friend-button" >
          {buttonContent}
        </div>  
      </div>
    );
  }
}