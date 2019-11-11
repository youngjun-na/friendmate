import React from 'react';

export default class CommentLikers extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      dropDown: false
    };
  }
  toggleDropdown() {
    this.setState({ dropDown: !this.state.dropDown });
  }
  render() {
    let currentUserName;
    // debugger;
    let likerNames = this.props.likers.map((liker) => {
      if (liker && liker.id !== this.props.currentUserId) {
        return liker["firstName"] + " " + liker["lastName"];
      }
      else if (liker && liker.id === this.props.currentUserId) {
        currentUserName = liker["firstName"] + " " + liker["lastName"];
      }
    });

    likerNames = likerNames.filter(name => typeof name === "string");
    likerNames.unshift(currentUserName);
    return(
      <div className="comment-like-cont" onMouseOver={this.toggleDropdown} onMouseOut={this.toggleDropdown}>
        {this.state.dropDown ?
          (<div className="like-dropdown-cont">
            <ul className="like-dropdown">
              <li className="like-bold">Likes</li>
              {likerNames ? likerNames.map((name, idx) => {
                return <li className="like-item" key={idx}>{name}</li>
              }) : null}
            </ul>
            <div className="d-tri-g-c"></div>
          </div>) : null} HELLOasdfasfadsfa
      </div>
    );
  }
}