import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const greeting = this.props.user ? (
      <div>
        <h4>Welcome, {this.props.user.username}!</h4>
        <button onClick={this.handleClick}>Log Out</button>
      </div>
    ) : (
        <div>
          <Link className="link" to="/login">Log In</Link> or <Link className="link" to="/signup">Sign Up</Link>
        </div>
      )
    return (
      <div className="nav-bar-cont">
        <h1 className="nav-bar-h1 noselect">facebook</h1>
        greeting
      </div>
    )
  }
}

export default Greeting;