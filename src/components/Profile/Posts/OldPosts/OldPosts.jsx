import React from 'react';
import s from './OldPosts.module.css';

import Post from './Post/Post';

function OldPosts(props) {
  const posts = props.posts.map((post, index) => <Post key={index} post={post} />);

  return (
    <div className={s.oldPosts}>
      {posts}
    </div>
  );
}

export default OldPosts;