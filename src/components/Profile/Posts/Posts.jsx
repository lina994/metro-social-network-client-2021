import React from 'react';
import s from './Posts.module.css';

import NewPostContainer from './NewPost/NewPostContainer';
import OldPostsContainer from './OldPosts/OldPostsContainer';

function Posts(props) {
  return (
    <div className={s.myPosts}>
      <NewPostContainer />
      <OldPostsContainer />
    </div>
  );
}

export default Posts;

