import React from 'react';
import check from '../../../app/assets/images/check.png'
import friendadd from '../../../app/assets/images/friendadd.png'
import friendremove from '../../../app/assets/images/friendremove.png'
export default class FriendButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown: false,
      button: false,
    }
    this.showDropdown = this.showDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    window.dropdownTimer = null
  }

  showDropdown() {
    clearTimeout(dropdownTimer);
    dropdownTimer = setTimeout(()=> {
      this.setState({ dropDown: true })
    }, 500);
  }

  hideDropdown() {
    clearTimeout(dropdownTimer);
    dropdownTimer = setTimeout(() => {
      this.setState({ dropDown: false })
    }, 500);
  }

  handleAdd() { 
    this.props.addFriend(this.props.currentUser.id, this.props.wallUser.id)
      .then(()=> this.setState({button: !this.state.button}))
  }

  handleDelete() {
    this.props.deleteFriend(this.props.currentUser.id, this.props.wallUser.id)
      .then(() => this.setState({ button: !this.state.button }))
  }

  handleAccept() {
    this.props.acceptFriend(this.props.currentUser.id, this.props.wallUser.id)
      .then(() => this.setState({ button: !this.state.button }))
  }
  
  render() {
    // if (!currentUser || !wallUser ) return null;
    const { wallUser, currentUser } = this.props;
    if (currentUser.id === wallUser.id) return null;
    let buttonContent;
    if (currentUser.friends.includes(wallUser.id)) {
      buttonContent = 
      <div className="friend-text">
        {this.state.dropDown ? (
          <div className="friend-dropdown-cont" onMouseEnter={this.showDropdown} onMouseLeave={this.hideDropdown}>
            <div className="d-tri-w-f"></div>
            <ul className="friend-dropdown">
              <li className="friend-item" onClick={this.handleDelete}>Unfriend</li>
            </ul>
          </div>) : null}
        <img src={check} />
        Friends
      </div>
    } 
    else if (currentUser.pending.includes(wallUser.id)) {
      buttonContent = 
      <div className="friend-text">
        {this.state.dropDown ? (
          <div>
            <div className="friend-dropdown-cont" onMouseEnter={this.showDropdown} onMouseLeave={this.hideDropdown}>
            <div className="d-tri-w-f"></div>
            <ul className="friend-dropdown">
              <li className="friend-item" onClick={this.handleDelete}>Cancel</li>
            </ul>
          </div>
          </div>) : null}
        <img src={friendremove} />
        Friend Request Sent
      </div>
    }
    else if (wallUser.pending.includes(currentUser.id)) {
      buttonContent = 
      <div className="friend-text">
        {this.state.dropDown ? (
          <div>
          
            <div className="friend-dropdown-cont" onMouseEnter={this.showDropdown} onMouseLeave={this.hideDropdown}>
            <div className="d-tri-w-f"></div>
            <ul className="friend-dropdown">
              <li className="friend-item" onClick={this.handleAccept}>Confirm</li>
              <li className="friend-item" onClick={this.handleDelete}>Delete Request</li>
            </ul>
          </div>
          </div>) : null}
        <img src={friendadd} />
        Respond to Friend Request
      </div>
    }
    else {
      buttonContent = 
      <div className="friend-text" onClick={this.handleAdd}>
        <img src={friendadd} />
        Add Friend
      </div>
    }
    return(
        <div className="friend-button" onMouseEnter={this.showDropdown} >
          {buttonContent}
        </div>  
    );
  }
}