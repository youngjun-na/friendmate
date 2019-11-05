import React from 'react';
import FeedPostItemContainer from './feed_post_item_container';

const FeedIndex = props => {
  return(
    <div>
      {props.posts.map((post) => (
        <FeedPostItemContainer post={post} key={post.id} />
      ))}
    </div>
  )
};

export default FeedIndex;

