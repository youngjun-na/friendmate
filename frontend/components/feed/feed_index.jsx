import React from 'react';
import PostItemContainer from '../post/post_item_container';
import InfiniteScroll from 'react-infinite-scroll-component';

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
      ))
    console.log(this.props.errors)
    console.log(this.state.hasMore)
    return(
      <div>
        <InfiniteScroll
          dataLength={posts.length}
          next={this.handleNextFetch(posts.length)}
          hasMore={this.state.hasMore}
          loader={<h4>Loading ....</h4>}
          endMessage={
            <div>
              No more posts.
            </div>
          }>
            {posts}
          </InfiniteScroll>
         
      </div>
    )
  }
}



