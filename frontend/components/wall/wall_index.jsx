import React from 'react';
import PostItemContainer from '../post/post_item_container';
import InfiniteScroll from 'react-infinite-scroll-component';
import loading from '../../../app/assets/images/loading.gif';

export default class WallIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts,
      hasMore: true,
    }
    this.handleNextFetch = this.handleNextFetch.bind(this);
  }
  componentDidMount() {
    this.props.fetchWallPosts(this.props.wallUser.id)
  }
  componentDidUpdate() {
    if (this.props.errors && this.props.errors.length && this.state.hasMore) this.setState({ hasMore: false })
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   debugger;
  //   if (this.state.posts && nextState.posts && this.state.posts.length === nextState.posts.length) {
  //     nextState.hasMore = false;
  //     return true;
  //   }
  //   return true;
  // }
  handleNextFetch(length) {
    return () => {
      this.props.fetchMoreWallPosts(this.props.wallUser.id, length);
    }
  }
  render() {
    let posts = this.props.posts.map((post) => (
      <PostItemContainer post={post} key={post.id} />
    ));
    console.log(this.props)
    if (!this.props.posts) return null;
    return (
      this.props.posts.length ?
        <div>
          <InfiniteScroll
            dataLength={posts.length}
            next={() => this.props.fetchMoreWallPosts(this.props.wallUser.id, posts.length)}
            hasMore={this.state.hasMore}
            loader={
              <div className="fb-loading">
                <img src={loading} />
              </div>}
            endMessage={
            <div>
                No more posts.
            </div>
            }>
            {posts}
          </InfiniteScroll>

        </div> : <div>No more posts.</div>
    )
  }
}
