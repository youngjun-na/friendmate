import React from 'react';
import PostItemContainer from '../post/post_item_container';

const WallIndex = props => {
  return (
    <div>
      {props.posts.map((post) => (
        <PostItemContainer post={post} key={post.id} />
      ))}
    </div>
  )
};

export default WallIndex;

