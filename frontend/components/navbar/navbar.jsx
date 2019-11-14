import React from 'react';
import { Link } from 'react-router-dom';
import whitefmlogo from '../../../app/assets/images/whitefmlogo.png';
import SearchBar from './search_bar';
import FriendRequestDropdown from './friend_request_dropdown';
export default class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      friendButton: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.toggleFriend = this.toggleFriend.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.logout()
      .then(this.props.history.push('/'));
  }
  toggleFriend() {
    this.setState({friendButton: !this.state.friendButton})
  }
  render() {
    const { currentUser, allUsers } = this.props;
    return (
      <div className="nb-c">
        <div className="nb-s">
          <Link to="/feed">
            <img className="nb-fmlogo" src={whitefmlogo} />
          </Link>
          {/* <input className="nb-sb" type="text" placeholder="Search"/> */}
          <SearchBar />
        </div>
        <div className="nb-tc">
          <Link className="nb-tc-n" to={`/profile/${currentUser.id}`}>
            <div className="sidebar-prof-image">
              <img className="profile-pic" src={currentUser.profPicUrl} />
            </div>
            {currentUser.firstName}
          </Link>
          <Link className="nb-tc-h" to="/feed">
            Home
          </Link>
          <FriendRequestDropdown currentUser={currentUser} allUsers={allUsers}
          deleteFriend={this.props.deleteFriend} acceptFriend={this.props.acceptFriend}/>
        </div>
        <button className="li-b lo" onClick={this.handleClick}>Log Out</button>
      </div>
    );
  }
}