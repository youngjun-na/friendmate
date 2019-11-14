import React from 'react';
import PostItemContainer from '../post/post_item_container';

const WallIndex = props => {
  console.log(props.posts.length);
  return (
    (props.posts.length) ? 
   ( <div>
      {props.posts.map((post) => (
        <PostItemContainer post={post} key={post.id} />
      ))}
    </div>) : <div>No posts Here</div>
  )
};

export default WallIndex;

