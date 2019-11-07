import React from 'react';
import WallIndex from'./wall_index';

export default class Wall extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      update: ""
    }
  }
  componentDidMount() {
    this.props.fetchWallPosts(this.props.userId);
    this.props.fetchAllUsers();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) this.props.fetchWallPosts(this.props.userId);
  }

  render() {
    return(
      <div className="f-c">
        <div></div>
        <div className="f-st">
          <div className="f-php-c">
            <div className="f-php-h">
              <div className="f-php-h-t">Create Post</div>
            </div>
            <div className="f-php-b">
              <div className="f-php-t" onClick={() => this.props.openModal("postCreate",this.props.userId)}>
                <div className="f-php-tx noselect">
                  What's on your mind, {this.props.currentUser.firstName}?
                </div>
              </div>
            </div>
          </div>

          <div>WE WALL NOW BOYS
             <WallIndex posts={this.props.posts} />
          </div>
        </div>
      </div>
     
    )
  }
}