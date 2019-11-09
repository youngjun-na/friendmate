import React from 'react';
import { Link } from 'react-router-dom';

export default class Feed extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.logout()
      .then(this.props.history.push('/'));
  }
  render() {
    return (
      <div className="nb-c">
        <div className="nb-s">
          <input className="nb-sb" type="text"/>
        </div>
        <div className="nb-tc">
          <Link className="nb-tc-n" to="/feed">
            Home
          </Link>
          <Link className="nb-tc-n" to={`/profile/${this.props.currentUser.id}`}>
            {this.props.currentUser.firstName}
          </Link>
        </div>
        <button className="li-b lo" onClick={this.handleClick}>Log Out</button>
      </div>
    );
  }
}