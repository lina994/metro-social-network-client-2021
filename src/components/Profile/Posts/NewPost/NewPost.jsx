import React from 'react';
import s from './NewPost.module.css';


function handleNewPostChange(e, updatePost) {
  let value = e.target.value;
  updatePost(value);
}

function handlePostSubmit(addPost) {
  addPost();
}


function NewPost(props) {

  return (
    <div className={s.newPostWrapper}>
      <div>
        <textarea className={s.postInput}
                  placeholder="Say something..."
                  value={props.newPostText}
                  onChange={(e) => handleNewPostChange(e, props.updatePost)} >
        </textarea>
      </div>
      <button className={s.submitButton} 
              onClick={() => handlePostSubmit(props.addPost)}>
        Add post
      </button>
    </div>
  );
}

export default NewPost;
