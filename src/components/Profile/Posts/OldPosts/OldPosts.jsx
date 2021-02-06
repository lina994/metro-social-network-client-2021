import React from 'react';
import s from './OldPosts.module.css';

import Post from './Post/Post';

function OldPosts(props) {
  return (
    <div className={s.oldPosts}>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default OldPosts;