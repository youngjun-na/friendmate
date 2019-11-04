import React from 'react';
import { Link } from 'react-router-dom';
import BirthdaySelector from './birthday_selector';
import GenderSelector from './gender_selector';
import newspaper from '../../../app/assets/images/fb_sp_np.png';
import star from '../../../app/assets/images/fb_sp_star.png';
import share from '../../../app/assets/images/fb_sp_share.png';
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    let currDate = new Date();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: currDate,
      gender: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleBirthday = this.handleBirthday.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleGender(value) {
    this.setState({
      gender: value
    });
  }

  handleBirthday(year, month, day) {
    this.setState({
      birthday: new Date(year, month, day)
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user)
    // .then(() => this.props.history.replace('/'));
  }

  render() {
    return (
      <div className="signup-cont">
        <div className="su-left">
          <h3 className="su-h3">Connect with friends and the world around you on Facebook.</h3>
          <div className="su-l-d">
            <img src={newspaper}/>
            <span className="su-l-bt">See photos and updates</span>
            <span className="su-l-nt"> from friends in News Feed.</span>
          </div>
          <div className="su-l-d">
            <img src={star} />
            <span className="su-l-bt">Share what's new</span>
            <span className="su-l-nt"> in your life on your Timeline.</span>
          </div>
          <div className="su-l-d">
            <img src={share} />
            <span className="su-l-bt">Find more</span>
            <span className="su-l-nt"> of what you're looking for with Facebook Search.</span>
          </div>
        </div>
        <form className="signup-form">
          <h2 className="su-h2">Sign Up</h2>
          <div className="su-d">It's quick and easy.</div>
          <label>
            <input className="fi fi-fn" type="text" value={this.state.firstName} onChange={this.handleInput("first_name")} placeholder="First name" />
            <input className="fi fi-ln" type="text" value={this.state.lastName} onChange={this.handleInput("last_name")} placeholder="Last name" />
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

          <BirthdaySelector handleBirthday={this.handleBirthday} birthday={this.state.birthday}/>
          <GenderSelector handleGender={this.handleGender} gender={this.state.gender}/>
          
          <button className="fb-gb fb-gb-su" onClick={this.handleSubmit}>Sign Up</button>
        </form>
      </div>

    );
  }
}

export default SessionForm;