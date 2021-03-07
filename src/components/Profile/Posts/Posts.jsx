import React from 'react';
import s from './Posts.module.css';

import NewPost from './NewPost/NewPost';
import OldPosts from './OldPosts/OldPosts';

function Posts(props) {
  return (
    <div className={s.myPosts}>
      <NewPost newPostText={props.posts.newPostText} dispatch={props.dispatch} />
      <OldPosts posts={props.posts.oldPosts} />
    </div>
  );
}

export default Posts;