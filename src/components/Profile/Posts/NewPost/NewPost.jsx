import React from 'react';
import s from './NewPost.module.css';

import { newPostChangeActionCreator, addPostActionCreator } from "./../../../../store";

function handleNewPostChange(element, dispatch) {
  let value = element.current.value;
  let action = newPostChangeActionCreator(value);
  dispatch(action);
}

function handlePostSubmit(dispatch) {
  let action = addPostActionCreator();
  dispatch(action);
}


function NewPost(props) {
  let newPostElement = React.createRef();

  return (
    <div className={s.newPostWrapper}>
      <div>
        <textarea className={s.postInput}
                  ref={newPostElement}
                  placeholder="Say something..."
                  value={props.newPostText}
                  onChange={() => handleNewPostChange(newPostElement, props.dispatch)} >
        </textarea>
      </div>
      <button className={s.submitButton} 
              onClick={() => handlePostSubmit(props.dispatch)}>
        Add post
      </button>
    </div>
  );
}

export default NewPost;