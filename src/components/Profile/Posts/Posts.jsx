import React from 'react';
import s from './Posts.module.css';

import NewPostContainer from './NewPost/NewPostContainer';
import OldPosts from './OldPosts/OldPosts';

function Posts(props) {
  return (
    <div className={s.myPosts}>
      <NewPostContainer newPostText={props.posts.newPostText} store={props.store} />
      <OldPosts posts={props.posts.oldPosts} />
    </div>
  );
}

export default Posts;

