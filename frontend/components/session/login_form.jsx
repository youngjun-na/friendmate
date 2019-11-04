import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user)
      // .then(() => this.props.history.replace('/'));
  }

  render() {
    return (
      <div className="li-c">
        <form className="li-f">
          <div>
            <div className="li-l">Email</div>
            <input className="li-fi" type="text" value={this.state.email} onChange={this.handleInput("email")}/>
          </div>
          <div>
            <div className="li-l">Password</div>
            <input className="li-fi" type="password" value={this.state.password} onChange={this.handleInput("password")}/>  
          </div>
          <button className="li-b" onClick={this.handleSubmit}>Log In</button>
        </form>
      </div>

    );
  }
}

export default SessionForm;