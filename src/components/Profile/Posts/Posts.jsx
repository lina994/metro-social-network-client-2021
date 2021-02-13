import React from 'react';
import s from './Posts.module.css';

import NewPost from './NewPost/NewPost';
import OldPosts from './OldPosts/OldPosts';

function Posts(props) {
  return (
    <div className={s.myPosts}>
      <NewPost />
      <OldPosts posts={props.posts} />
    </div>
  );
}

export default Posts;