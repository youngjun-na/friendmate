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
      <div className="login-cont">
        <form className="login-form">
          <h3>Log Into Facebook</h3>
          <ul>
            {this.props.errors.map((error) => (
              <li>{error}</li>
            )
            )}
          </ul>
          <label>
            <input className="form-input" type="text" value={this.state.email} onChange={this.handleInput("email")} placeholder="Email"/>
          </label>
          <br />
          <label>
            <input className="form-input" type="password" value={this.state.password} onChange={this.handleInput("password")} placeholder="Password"/>
          </label>
          <br />
          <button className="form-button" onClick={this.handleSubmit}>Log In</button>
        </form>
      </div>

    );
  }
}

export default SessionForm;