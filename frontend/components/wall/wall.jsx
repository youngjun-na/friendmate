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
    // debugger;
    // this.props.fetchWallPosts(this.props.wallUser.id);
    this.props.fetchAllUsers().then(
      () => this.props.fetchWallPosts(this.props.wallUser.id),
      () => this.props.fetchUser(this.props.wallUser.id)
    );
  }
  componentDidUpdate(prevProps) {
    if (prevProps.wallUser && prevProps.wallUser.id !== parseInt(this.props.match.params.userId)) {
      this.props.fetchWallPosts(parseInt(this.props.match.params.userId));
    }
  }

  render() {
    if (!this.props.wallUser) return null;
    return(
      <div className= "prof-cont">
        <div className= "wall-header">
          <div className= "wall-cover-p">
            <div className="wall-name">
              {this.props.wallUser.firstName}  {this.props.wallUser.lastName} 
            </div>
          </div>
          <div className= "wall-header-bar">

          </div>
        </div>
        <div className="wall-main">
          <div className="wall-sidebar">

          </div>
          <div className="wall-cont">
            <div className="f-st">
              <div className="f-php-c">
                <div className="f-php-h">
                  <div className="f-php-h-t">Create Post</div>
                </div>
                <div className="f-php-b">
                  <div className="f-php-t" onClick={() => this.props.openModal("postCreate", this.props.userId)}>
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
        </div>
        
      </div>
    )
  }
}