import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session/login_form_container';

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
    return (
      <div className="lnb-c">
        <a className="link-clear" href='/'><h1 className="lnb-h1 noselect">facebook</h1></a>
        <LoginFormContainer />
      </div>
    )
  }
}

export default Greeting;