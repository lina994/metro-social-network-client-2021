import React from 'react';
import s from './NewPost.module.css';

function NewPost(props) {
  return (
    <div className={s.newPostWrapper}>
      <form>
        <textarea className={s.postInput} placeholder="Say something...">
        </textarea>
        <input className={s.postSubmit} type="submit" value="Add post" />
      </form>

    </div>
  );
}

export default NewPost;