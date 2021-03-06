import React from 'react';
import { Link } from 'react-router-dom';
import LoginNavbarContainer from '../navbar/login_navbar_container';
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthday: currDate,
      gender: "",
      button: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleBirthday = this.handleBirthday.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
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
      .then(() => this.props.history.push('/feed'),
      ()=>this.handleErrors());
  }
  handleErrors() {
    let err = this.props.errors.join("");
    err ? this.setState({button: true}) : this.setState({button: false});
    this.checkError("First",".fi-fn", err);
    this.checkError("Last",".fi-ln", err);
    this.checkError("Email", ".fi-e", err)
    this.checkError("Password", ".fi-p", err);
    this.checkError("Gender", ".su-g-r-f", err)
    this.checkError("Gender", ".su-g-r-m", err)
    this.checkError("Gender", ".su-g-r-c", err)
  }
  handleDemo() {
    this.props.demoLogin()
      .then(() => this.props.history.push('/feed'),
        () => this.handleErrors());
  }
  checkError(param, htmlClass, err) {
    if (err.includes(param)) {
      document.querySelector(htmlClass).classList.add("red-bord")

    }
    else {
      document.querySelector(htmlClass).classList.remove("red-bord")
    }
  }

  handleFocus() {

    // COME BACK TO FIX THIS //
    // return e => {
    //   if (e.currentTarget.classList.contains("red-bord")) {
    //     document.querySelector(type).classList.remove("invis")
    //   }
    // }
  }
  render() {
    const demoButton = this.state.button ? (
        <div className="signup-demo">
          <button className="fb-dl fb-gb-su" onClick={this.handleDemo}>Demo Log In</button>
        </div>) : null;
    return (
      <div>
        <header>
          <LoginNavbarContainer />
        </header>
        <div className="signup-cont">
          <div className="su-left">
            <h3 className="su-h3">Connect with friends and the world around you on Friendmate.</h3>
            <div className="su-l-d">
              <img src={newspaper} />
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
              <span className="su-l-nt"> of what you're looking for with Friendmate Search.</span>
            </div>
          </div>
          <form className="signup-form">
            <h2 className="su-h2">Sign Up</h2>
            <div className="su-d">It's quick and easy.</div>
            <label>
              <input className="fi fi-fn" 
                type="text" 
                value={this.state.firstName} 
                onChange={this.handleInput("firstName")}
                onFocus={this.handleFocus("firstName")} 
                placeholder="First name" />
              <input className="fi fi-ln" 
                type="text" 
                value={this.state.lastName} 
                onChange={this.handleInput("lastName")}
                onFocus={this.handleFocus("lastName")}  
                placeholder="Last name" />
            </label>
            <br />
            <label>
              <input 
                className="fi fi-e" 
                type="email" 
                value={this.state.email} 
                onChange={this.handleInput("email")}
                onFocus={this.handleFocus("email")}  
                placeholder="Email" />
            </label>
            <br />
            <label>
              <input 
                className="fi fi-p" 
                type="password" 
                value={this.state.password} 
                onChange={this.handleInput("password")} 
                onFocus={this.handleFocus("password")} 
                placeholder="New password" />
            </label>
            <br />
            <div className="su-l"> Birthday</div>

            <BirthdaySelector handleBirthday={this.handleBirthday} birthday={this.state.birthday} />
            <GenderSelector handleGender={this.handleGender} gender={this.state.gender} err={this.err} checkError={this.checkError}/>

            <button className="fb-gb fb-gb-su" onClick={this.handleSubmit}>Sign Up</button>
            {demoButton}
          </form>
        </div>
      </div>
     

    );
  }
}

export default SessionForm;