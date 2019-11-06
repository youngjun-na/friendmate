import React from 'react';

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
          <input type="text"/>
        </div>
        
        <button className="li-b lo" onClick={this.handleClick}>Log Out</button>
      </div>
    );
  }
}