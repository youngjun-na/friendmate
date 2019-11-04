import React from 'react';
import { Link } from 'react-router-dom';
import BirthdaySelector from './birthday_selector';
import GenderSelector from './gender_selector';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthday: "",

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
      <div className="signup-cont">
        <form className="signup-form">
          <h2 className="su-h2">Sign Up</h2>
          <div className="su-d">It's quick and easy.</div>
          <label>
            <input className="fi fi-fn" type="text" value={this.state.firstName} onChange={this.handleInput("firstName")} placeholder="First name" />
            <input className="fi fi-ln" type="text" value={this.state.lastName} onChange={this.handleInput("lastName")} placeholder="Last name" />
          </label>
          <br />
          <label>
            <input className="fi fi-e" type="email" value={this.state.email} onChange={this.handleInput("email")} placeholder="Email" />
          </label>
          <br />
          <label>
            <input className="fi fi-p" type="password" value={this.state.password} onChange={this.handleInput("password")} placeholder="New password" />
          </label>
          <br />
          <div className="su-l"> Birthday</div>

          <BirthdaySelector />
          <GenderSelector />
          
          <button className="fb-gb fb-gb-su" onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>

    );
  }
}

export default SessionForm;