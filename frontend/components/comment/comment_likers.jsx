import React from 'react';
import circleLike from '../../../app/assets/images/circlelike.png';

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
    let likerNames = this.props.likers.map((liker) => {
      if (liker && liker.id !== this.props.currentUserId) {
        return liker["firstName"] + " " + liker["lastName"];
      }
      else if (liker && liker.id === this.props.currentUserId) {
        currentUserName = liker["firstName"] + " " + liker["lastName"];
      }
    });

    likerNames = likerNames.filter(name => typeof name === "string");
    if (currentUserName) likerNames.unshift(currentUserName);
    let count = likerNames.slice().length;
    let commentCounter = count ? <div className="comment-like-counter">
      <img className="comment-like-image" src={circleLike}></img>
      {count}
    </div> : null;
  
    return(
      <div className="comment-like-cont" onMouseOver={this.toggleDropdown} onMouseOut={this.toggleDropdown}>
        {this.state.dropDown ?
          (<div className="comment-like-dropdown-cont">
            <ul className="like-dropdown">
              <li className="like-bold">Likes</li>
              {likerNames ? likerNames.map((name, idx) => {
                return <li className="like-item" key={idx}>{name}</li>
              }) : null}
            </ul>
            <div className="d-tri-g-c"></div>
          </div>) : null} 
        {commentCounter}
      </div>
    );
  }
}