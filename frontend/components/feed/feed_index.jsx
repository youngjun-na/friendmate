import React from 'react';
import PostItemContainer from '../post/post_item_container';
import InfiniteScroll from 'react-infinite-scroll-component';
import loading from '../../../app/assets/images/loading.gif';
export default class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts,
      hasMore: true,
      offset: 0,
    }
    this.handleNextFetch = this.handleNextFetch.bind(this);
  }
  componentDidMount() {
    this.props.fetchFeedPosts(this.props.currentUser.id)
  }
  componentDidUpdate() {
     if (this.props.errors && this.props.errors.length && this.state.hasMore) this.setState({ hasMore: false })
  }
  componentWillUnmount() {
    
  }
  handleNextFetch(length) {
    return () => {
      this.props.fetchMoreFeedPosts(this.props.currentUser.id, length);
    }
      // .then(()=>this.setState({offset: this.state.offset + 1}),
      //   () => this.setState({ hasMore: false }))
      // .fail();
  }
  render() {
    let posts = this.props.posts.map((post) => (
        <PostItemContainer post={post} key={post.id} />
      ));

    if (!this.props.posts) return null;
    return(
      this.props.posts.length ? 
        <div>
          <InfiniteScroll
            dataLength={posts.length}
            next={()=>this.props.fetchMoreFeedPosts(this.props.currentUser.id, posts.length)}
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



