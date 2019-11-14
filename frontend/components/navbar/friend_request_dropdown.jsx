import React from 'react';
import lightfriends from '../../../app/assets/images/lightfriends.png';
import darkfriends from '../../../app/assets/images/darkfriends.png';
import { Link } from 'react-router-dom';
export default class FriendRequestDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.friendDropdownCont = React.createRef();
    this.state = {
      showMenu: false,
    }
    this.toggleFriend = this.toggleFriend.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  toggleFriend() {
    this.setState({showMenu: !this.state.showMenu});
  }
  handleClickOutside(e) {
    if (this.friendDropdownCont.current && !this.friendDropdownCont.current.contains(e.target)) {
      this.setState({ showMenu: false });
    }
  }
  handleDelete(userId) {
    this.props.deleteFriend(this.props.currentUser.id, userId)
  }

  handleAccept(userId) {
    this.props.acceptFriend(this.props.currentUser.id, userId)
  }
  render() {
    const { allUsers, currentUser } = this.props;
    let pendingFriends = currentUser.pending.map((userId)=> {
      return allUsers[userId];
    });
    let count = pendingFriends.length;

    let friendStyle = { backgroundImage: (this.state.showMenu || count)? `url(${lightfriends})` : `url(${darkfriends})` }
    return(
      <div className="friend-req-dd" onClick={this.toggleFriend} ref={this.friendDropdownCont}>
        <div className="nb-f-req" style={friendStyle} onClick={this.toggleFriend}>
          {count ? <div className="friend-req-notif">{count}</div> : null}
          {this.state.showMenu ? (
          <div className="friend-req-dd-c">
            <div className="friend-req-dd-h">
              Friend Requests
            </div>
            {pendingFriends.map((user, idx) => user ? 
              <div className="friend-req-dd-i" key={idx}>
                <div className="friend-req-nl">
                  <div className="post-prof-image">
                    <img className="profile-pic" src={user.profPicUrl} />
                  </div>
                  <Link className="ci-nl" to={`/profile/${user.id}`}>
                    {user.firstName} {user.lastName}
                  </Link>
                </div>
                <div className="friend-req-dd-but">
                  <button className="prof-pic-submit" onClick={()=>this.handleAccept(user.id)}>Confirm</button>
                  <button className="prof-pic-cancel" onClick={() => this.handleAccept(user.id)}>Delete</button>
                </div>
              </div> : null)}
          </div>) : null}
        </div>
      </div>
    );
  }
}