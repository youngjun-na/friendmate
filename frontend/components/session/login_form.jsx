import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
    this.errors = this.props.errors;
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
    this.errors = [];
    this.props.login(user)
      .then(() => this.props.history.push('/feed'));
    const errorDiv = document.querySelector(".li-err");
    this.errors ? errorDiv.classList.remove("invis") : errorDiv.classList.add("invis");
  }

  render() {
   
    return (
      <div className="li-c">
        <form className="li-f">
          <div className="li-err invis">
            <div className="li-err-d">{this.props.errors[0]}</div>
            <div className="triangle"></div>
          </div>
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