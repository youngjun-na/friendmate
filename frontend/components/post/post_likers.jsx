import React from 'react';

export default class PostLikers extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      dropDown: false
    };
  }
  toggleDropdown() {
    this.setState({dropDown: !this.state.dropDown});
  }

  render() {
    let currentUserName;
    let nameString;
    let likerNames = this.props.likers.map((liker)=> {
      if (liker && liker.id !== this.props.currentUserId) {
        return liker["firstName"] + " " + liker["lastName"];
      }
      else if (liker && liker.id === this.props.currentUserId) {
        currentUserName = liker["firstName"] + " " + liker["lastName"];
      }
    });

    likerNames = likerNames.filter(name => typeof name === "string");
  
    let dropdownNames = likerNames.slice();
    dropdownNames.unshift(currentUserName)

    if (currentUserName) likerNames.unshift("You");
    if (likerNames.length === 1 && currentUserName) {
      nameString = currentUserName;
    }
    else if (likerNames.length === 1) {
      nameString = likerNames[0];
    }
    else if (likerNames.length === 2) {
      nameString = likerNames[0] + " and " + likerNames[1];
    }
    else if (likerNames.length === 3) {
      nameString = likerNames[0] + ", " + likerNames[1] + ", and " + likerNames[2];
    }
    else if (likerNames.length > 4) {
      nameString = likerNames[0] + ", " + likerNames[1] + ", " + likerNames[2] + ", and " + (likerNames.length-3).toString() + " others";
    }
    return(
      <div className="post-like-cont" onMouseOver={this.toggleDropdown} onMouseOut={this.toggleDropdown}>
       { this.state.dropDown ? 
        (<div className="post-like-dropdown-cont">
        <ul className="post-like-dropdown">
          <li className="post-like-bold">Likes</li>
          {dropdownNames ? dropdownNames.map((name, idx)=>{
            return <li className="post-like-item" key={idx}>{name}</li>
          }) : null}
        </ul>
        <div className="d-tri-g-p"></div>
        </div>) : null}
        {nameString}
      </div>

    )
  }
}