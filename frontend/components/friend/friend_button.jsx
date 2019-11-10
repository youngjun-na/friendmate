import React from 'react';

export default class FriendButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!currentUser || !wallUser ) return null;
    const { wallUser, currentUser } = this.props;
    let buttonContent = currentUser.friends.includes(wallUser.id) ? (
      <div>
        Friend
      </div>
    ) : (
      <div>
        Add Friend
      </div>
    );
    return(
      <div className="friend-button">
        {buttonContent}
      </div>  
    );
  }
}