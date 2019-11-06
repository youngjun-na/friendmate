import React from 'react';
import WallIndex from'./wall_index';

export default class Wall extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchWallPosts(parseInt(this.props.userId));
    this.props.fetchAllUsers();
  }
  render() {

    return(
      <div>WE WALL NOW BOYS
        <WallIndex posts={this.props.posts}/>
      </div>
    )
  }
}