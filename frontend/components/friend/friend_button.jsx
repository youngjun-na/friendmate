import React from 'react';

export default class FriendButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // if (!currentUser || !wallUser ) return null;
    const { wallUser, currentUser } = this.props;
    let buttonContent;
    if (currentUser.friends.includes(wallUser.id)) {
      buttonContent = 
      <div>
        Friend
      </div>
    } 
    else if (currentUser.pending.includes(wallUser.id)) {
      buttonContent = 
      <div>
        Friend Request Sent
      </div>
    }
    else if (wallUser.pending.includes(currentUser.id)) {
      buttonContent = 
      <div>
        Respond to Friend Request
      </div>
    }
    else {
      buttonContent = 
      <div>
        Add Friend
      </div>
    }
     
    return(
      <div className="friend-button">
        {buttonContent}
      </div>  
    );
  }
}